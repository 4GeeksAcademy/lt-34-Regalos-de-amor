"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint, current_app
from base64 import b64decode
from flask_jwt_extended import jwt_required, get_jwt_identity, create_access_token, get_jwt
from flask_cors import CORS
from datetime import timedelta
from base64 import b64decode
from dotenv import load_dotenv
import cloudinary
import cloudinary.uploader
import cloudinary.api
import os
import requests
from api.models import db, Beneficiary, Donor, Foundation, Transaction
from api.utils import generate_sitemap, APIException

api = Blueprint('api', __name__)

CORS(api)
@api.route('/hello', methods=['POST', 'GET'])
def handle_hello():

    response_body = {
        "message": "Hello! I'm a message that came from the backend, check the network tab on the google inspector and you will see the GET request"
    }

    return jsonify(response_body), 200

#Foundation
@api.route('/foundations', methods=['GET'])
@jwt_required()
def get_foundations():
    try:
        # Query all foundations
        foundations = Foundation.query.all()

        # Serialize the list of foundations
        foundation_list = [foundation.serialize() for foundation in foundations]
        
        return jsonify(foundation_list), 200

    except Exception as e:
        print(f"Error retrieving foundations: {e}")
        return jsonify({"error": "An error occurred while retrieving foundations"}), 500

@api.route('/foundations/<int:id>', methods=['GET'])
def get_foundation_id(id):
    identification= Foundation.query.filter_by(id =id).first()
    return jsonify(identification.serialize()), 200

@api.route('/foundations', methods=['POST'])
def create_foundation():
    data = request.get_json() 
    if not data:
        return jsonify({"error": "No input data provided"}), 400

    name = data.get('name')
    description = data.get('description')
    country = data.get('country')
    email = data.get('email')
    password = data.get('passwordl')
    image_url = data.get('image_url')
    
    foundation = Foundation(
        name=name,
        description=description,
        country= country,
        email=email,
        password=password,
        image_url=image_url
    )

    db.session.add(foundation)
    db.session.commit()

    return jsonify(foundation.serialize()), 201

@api.route('/foundations/<int:id>', methods=['DELETE'])
def Delete_foundations(id):
    favorite = Foundation.query.filter_by(id=id).first()
    db.session.delete(favorite)
    db.session.commit()
    return jsonify({"msg": "Donar eliminated"}), 200

@api.route('/foundation/<int:foundation_id>/beneficiaries', methods=['GET'])
@jwt_required()
def get_beneficiaries_by_foundation(foundation_id):
    try:
        foundation = Foundation.query.get(foundation_id)
        if not foundation:
            return jsonify({"error": "Foundation not found"}), 404
        
        beneficiaries = Beneficiary.query.filter_by(foundation_id=foundation_id, is_active=True).all()
        
        # If no beneficiaries are found, this will return an empty list
        beneficiary_list = [beneficiary.serialize() for beneficiary in beneficiaries]
        
        return jsonify(beneficiary_list), 200
    except Exception as e:
        print(f"Error retrieving beneficiaries: {e}")
        return jsonify({"error": "An error occurred while retrieving beneficiaries"}), 500


@api.route('/beneficiary', methods=['GET'])
@jwt_required()
def get_beneficiary():
    try:
        # Obtén el ID de la fundación desde el token JWT
        foundation_id = get_jwt_identity()
        print("id", foundation_id)

        if not foundation_id:
            return jsonify({"error": "Foundation ID not found in token"}), 400

        # Consulta los beneficiarios vinculados a la fundación
        beneficiaries = Beneficiary.query.filter_by(foundation_id=foundation_id).all()
        
        # Si no hay beneficiarios, devuelve un arreglo vacío
        results = [beneficiary.serialize() for beneficiary in beneficiaries]
        return jsonify(results), 200
    
    except Exception as e:
        # Log del mensaje de error para fines de depuración
        print(f"Error fetching beneficiaries: {e}")
        
        # Devuelve una respuesta genérica de error
        return jsonify({"error": "An error occurred while fetching beneficiaries.", "details": str(e)}), 500

@api.route('/beneficiaries/<int:beneficiaries_id>', methods=['GET'])
def get_user(beneficiaries_id):
    each_beneficiary = Beneficiary.query.filter_by(id=beneficiaries_id).first()
    if not each_beneficiary:
        return jsonify({"error": "Deleted user"}), 400

    return jsonify(each_beneficiary.serialize()), 200

@api.route('/beneficiary', methods=['POST'])
@jwt_required()
def create_beneficiary():
    try:
        data = request.get_json()
        if not data:
            return jsonify({"error": "No input data provided"}), 400

        # Get foundation ID from JWT token
        foundation_id = get_jwt_identity()
       
        foundation = Foundation.query.get(foundation_id)
        
        if not foundation:
            return jsonify({"error": "Foundation not found."}), 404

        # Extract beneficiary data
        name = data.get('name')
        wish_gift = data.get('wish_gift')
        history = data.get('history')
        account = data.get('account')
        image = data.get('image_url')
        is_active = data.get('is_active', True)  
        
        if not name or not account:
            return jsonify({"error": "Name and account are required fields."}), 400


        # Create a new beneficiary associated with the foundation
        new_beneficiary = Beneficiary(
            name=name,
            wish_gift=wish_gift,
            history=history,
            account=account,
            image=image,
            is_active=is_active,
            foundation_id=foundation_id  # Associate with the foundation ID from the token
        )

        db.session.add(new_beneficiary)
        db.session.commit()

        return jsonify(new_beneficiary.serialize()), 201
    
    except Exception as e:
        print(f"Error during beneficiary creation: {e}")
        return jsonify({"error": "An error occurred during beneficiary creation.", "details": str(e)}), 500

@api.route('/beneficiary/<int:id>', methods=['DELETE'])
@jwt_required()
def delete_beneficiary(id):
    try:
        # Obtener el beneficiario por ID
        beneficiary = Beneficiary.query.get(id)
        
        if not beneficiary:
            return jsonify({"error": "Beneficiary not found"}), 404
        
        # Eliminar el beneficiario
        db.session.delete(beneficiary)
        db.session.commit()
        
        return jsonify({"message": "Beneficiary deleted successfully"}), 200

    except Exception as e:
        # Manejo de errores
        db.session.rollback()  # Revertir cambios si ocurre un error
        print(f"Error during deletion: {e}")  # Registrar el error para depuración
        return jsonify({"error": "An error occurred during deletion.", "details": str(e)}), 500

@api.route('/beneficiary/<int:id>', methods=['PUT'])
@jwt_required()
def update_beneficiary(id):
    try:
        # Obtener el ID de la fundación desde el token JWT
        foundation_id = get_jwt().get("foundation_id")
        if not foundation_id:
            return jsonify({"error": "Foundation ID not found in token"}), 400

        # Verificar que el beneficiario exista y que esté asociado a la fundación del usuario
        beneficiary = Beneficiary.query.filter_by(id=id, foundation_id=foundation_id).first()
        if not beneficiary:
            return jsonify({"msg": "Beneficiary not found or not authorized"}), 404

        # Obtener los datos de la solicitud
        body = request.get_json()
        if not body:
            return jsonify({"error": "No input data provided"}), 400

        # Actualizar los campos del beneficiario
        beneficiary.name = body.get('name', beneficiary.name)
        beneficiary.wish_gift = body.get('wish_gift', beneficiary.wish_gift)
        beneficiary.history = body.get('history', beneficiary.history)
        beneficiary.account = body.get('account', beneficiary.account)
        beneficiary.is_active = body.get('is_active', beneficiary.is_active)
        beneficiary.image = body.get('image_url', beneficiary.image)
        # Verificar si se envió una imagen y actualizarla si está presente

        # Guardar los cambios en la base de datos
        db.session.commit()
        
        return jsonify({"msg": "Beneficiary updated successfully"}), 200

    except Exception as e:
        print(f"Error updating beneficiary: {e}")
        return jsonify({"error": "An error occurred while updating the beneficiary.", "details": str(e)}), 500

# Get all donors
@api.route('/donor', methods=['GET'])
@jwt_required()
def get_donor():
    try:
        # Retrieve the sub claim from the JWT
        sub_claim = get_jwt().get("sub")
        if not sub_claim or not sub_claim.get("donor_id"):
            return jsonify({"error": "Invalid token: donor_id not found in sub claim"}), 400

        donor_id = sub_claim["donor_id"]

        # Query donor by ID
        donor = Donor.query.get(donor_id)
        if not donor:
            return jsonify({"error": "Donor not found"}), 404

        # Return serialized donor data
        return jsonify(donor.serialize()), 200

    except Exception as e:
        print(f"Error retrieving donor: {e}")
        return jsonify({"error": "An error occurred while retrieving the donor"}), 500

# Get a single donor by ID
@api.route('/donor_/<int:donor_id>', methods=['GET'])
def get_donor_by_id(donor_id):
    try:
        donor = Donor.query.get(donor_id)
        if not donor:
            return jsonify({"error": "Donor not found"}), 404
        return jsonify(donor.serialize()), 200
    except Exception as e:
        print(f"Error retrieving donor: {e}")
        return jsonify({"error": "An error occurred while retrieving the donor"}), 500

# Create a new donor
@api.route('/donor', methods=['POST'])
def create_donor():
    try:
        data = request.get_json()
        if not data:
            return jsonify({"error": "No input data provided"}), 400

        email = data.get('email')
        password = data.get('password')
        
        if not email or not password:
            return jsonify({"error": "Email and password are required"}), 400

        # Check for duplicate email
        if Donor.query.filter_by(email=email).first():
            return jsonify({"error": "A donor with that email already exists"}), 400

        # Hash the password
        password_hash = current_app.bcrypt.generate_password_hash(password).decode("utf-8")

        # Create the donor
        new_donor = Donor(
            first_name=data.get('first_name'),
            last_name=data.get('last_name'),
            email=email,
            password=password_hash,
            image_url=data.get('image_url'),
            is_active=data.get('is_active', True)
        )

        db.session.add(new_donor)
        db.session.commit()
        return jsonify(new_donor.serialize()), 201
    except Exception as e:
        print(f"Error creating donor: {e}")
        return jsonify({"error": "An error occurred while creating the donor"}), 500

# Delete a donor
@api.route('/donor/<int:id>', methods=['DELETE'])
def delete_donor(id):
    try:
        donor = Donor.query.get(id)
        if not donor:
            return jsonify({"error": "Donor not found"}), 404

        db.session.delete(donor)
        db.session.commit()
        return jsonify({"message": "Donor deleted successfully"}), 200
    except Exception as e:
        print(f"Error deleting donor: {e}")
        return jsonify({"error": "An error occurred while deleting the donor"}), 500

# Update an existing donor
@api.route('/donor/', methods=['PUT'])
@jwt_required()
def update_donor():
    try:
        data = request.get_json()
        if not data:
            return jsonify({"error": "No input data provided"}), 400

        # Retrieve the sub claim from the JWT
        sub_claim = get_jwt().get("sub")
        if not sub_claim or not sub_claim.get("donor_id"):
            return jsonify({"error": "Invalid token: donor_id not found in sub claim"}), 400

        donor_id = sub_claim["donor_id"]

        donor = Donor.query.get(donor_id)
        if not donor:
            return jsonify({"error": "Donor not found"}), 404

        # Update donor fields
        donor.first_name = data.get('first_name', donor.first_name)
        donor.last_name = data.get('last_name', donor.last_name)
        donor.email = data.get('email', donor.email)
        
        # Update password if provided
        if 'password' in data:
            donor.password = current_app.bcrypt.generate_password_hash(data['password']).decode("utf-8")
        
        donor.is_active = data.get('is_active', donor.is_active)
        db.session.commit()

        return jsonify(donor.serialize()), 200
    except Exception as e:
        print(f"Error updating donor: {e}")
        return jsonify({"error": "An error occurred while updating the donor"}), 500

@api.route('/create-payment', methods=['POST'])
def create_payment():
    payment_data = request.json
    headers = {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + os.getenv("PAYPAL_CLIENT_ID")
    }
    response = requests.post('https://api.sandbox.paypal.com/v1/payments/payment', json=payment_data, headers=headers)
    return jsonify(response.json())

    
@api.route('/execute-payment', methods=['POST'])
def execute_payment():
    payment_id = request.json['paymentID']
    payer_id = request.json['payerID']
    headers = {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + os.getenv("PAYPAL_CLIENT_ID")
    }
    data = {
        'payer_id': payer_id
    }
    response = requests.post(f'https://api.sandbox.paypal.com/v1/payments/payment/{payment_id}/execute', json=data, headers=headers)
    if response.status_code == 200:
        transaction = Transaction(payment_id=payment_id, payer_id=payer_id, amount=response.json()['transactions'][0]['amount']['total'])
        db.session.add(transaction)
        db.session.commit()

    return jsonify(response.json())


@api.route("/login-donor", methods=["POST"])
def login_donor():
    try:
        # Extract email and password from request
        data = request.get_json()
        email = data.get("email")
        password = data.get("password")

        # Validate input
        if not email or not password:
            return jsonify({"error": "Email and password are required"}), 400

        # Find donor by email
        user = Donor.query.filter_by(email=email).first()
        if not user:
            return jsonify({"error": "Donor not found"}), 404

        # Verify password
        valid_password = current_app.bcrypt.check_password_hash(user.password, password)
        if not valid_password:
            return jsonify({"error": "Incorrect email or password"}), 401

        # Generate JWT access token
        access_token = create_access_token(identity={"email": email, "donor_id": user.id})
        return jsonify(access_token=access_token, user=user.serialize()), 200

    except Exception as e:
        print(f"Error during donor login: {e}")
        return jsonify({"error": "An error occurred during login.", "details": str(e)}), 500

@api.route("/login", methods=["POST"] )
def login_v2():
    try:
        email = request.json.get("email")
        password = request.json.get("password")
        
        # Retrieve the user by email
        user = Foundation.query.filter_by(email=email).first()
        
        if not user:
            return jsonify({"error": "Email not found"}), 404
        
        # Verify the password
        valid_password = current_app.bcrypt.check_password_hash(user.password, password)
        if not valid_password:
            return jsonify({"msg": "Incorrect email or password"}), 401
        
        # Include foundation ID in token by setting additional claims
        additional_claims = {"foundation_id": user.id}
        access_token = create_access_token(
            identity=user.id, 
            additional_claims=additional_claims,
            expires_delta=timedelta(weeks=1)
        )
        
        return jsonify(access_token=access_token, user=user.serialize()), 200

    except Exception as e:
        # Log the exception for debugging
        print(f"Error during login: {e}")
        
        # Return a generic error response
        return jsonify({"error": "An error occurred during login.", "details": str(e)}), 500
    
@api.route("/current_foundation", methods=["GET"])
@jwt_required()
def get_current_foundation():
    foundation_id = get_jwt_identity()
    current_foundation= Foundation.query.get(foundation_id)
    if not current_foundation:
        return jsonify({"msg": "Foundation not found"})
    return jsonify(current_foundation.serialize())

@api.route("/signup", methods=["POST"])
def signup():
    try:
        body = request.get_json()
        
        # Verificar si el email ya existe
        foundation = Foundation.query.filter_by(email=body["email"]).first()
        if foundation is not None:
            return jsonify({"msg": "A foundation was created with that email"}), 401
        
        # Hashear la contraseña
        password_hash = current_app.bcrypt.generate_password_hash(body["password"]).decode("utf-8")
        
        # Crear nuevo foundation
        foundation = Foundation(
            name=body["name"],
            description=body["description"],
            country=body["country"],
            email=body["email"],
            password=password_hash,
            is_active=True
        )
        db.session.add(foundation)
        db.session.commit()
        
        response_body = {
            "msg": "Foundation created successfully",
            "foundation_id": foundation.id,
            "email": foundation.email,
        }
        return jsonify(response_body), 200
    
    except Exception as e:
        print(f"Error during signup: {e}")
        return jsonify({"error": "An error occurred during signup.", "details": str(e)}), 500

@api.route("/signup-donor", methods=["POST"])
def signup_donor():
    try:
        body = request.get_json()

        # Check if the email already exists
        user = Donor.query.filter_by(email=body["email"]).first()
        if user:
            return jsonify({"msg": "A donor with that email already exists"}), 401

        # Hash the password
        password_hash = current_app.bcrypt.generate_password_hash(body["password"]).decode("utf-8")

        # Create new Donor
        user = Donor(
            first_name=body.get("first_name"),
            last_name=body.get("last_name"),
            email=body["email"],
            password=password_hash,
            is_active=True
        )
        db.session.add(user)
        db.session.commit()

        response_body = {
            "msg": "Donor created successfully",
            "user_id": user.id,
            "email": user.email,
        }
        return jsonify(response_body), 200

    except Exception as e:
        print(f"Error during donor signup: {e}")
        return jsonify({"error": "An error occurred during signup.", "details": str(e)}), 500
