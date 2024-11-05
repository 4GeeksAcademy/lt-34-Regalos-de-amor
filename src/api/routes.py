"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint, current_app
from api.models import db, Beneficiary, Donor, Foundation 
# from api.utils import generate_sitemap, APIException
from base64 import b64decode
from flask_jwt_extended import jwt_required, get_jwt_identity, create_access_token, get_jwt
from datetime import timedelta
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User, Beneficiary, Donor, Foundation, Transaction, Donor_login
from api.utils import generate_sitemap, APIException
from flask_cors import CORS
# from flask_jwt_extended import create_access_token
# from flask_jwt_extended import get_jwt_identity
# from flask_jwt_extended import jwt_required
# from flask_jwt_extended import JWTManager
import cloudinary, os
import cloudinary.uploader
import cloudinary.api
import requests
from dotenv import load_dotenv


api = Blueprint('api', __name__)

@api.route('/hello', methods=['POST', 'GET'])
def handle_hello():

    response_body = {
        "message": "Hello! I'm a message that came from the backend, check the network tab on the google inspector and you will see the GET request"
    }

    return jsonify(response_body), 200

#Foundation
@api.route('/foundations', methods=['GET'])
def get_foundation():
    all_Foundation= Foundation.query.all()
    print(all_Foundation)
    results = list(map(lambda name: name.serialize(), all_Foundation))
    return jsonify(results), 200

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
    
    foundation = Foundation(
        name=name,
        description=description,
        country= country,
        email=email,
        password=password,
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

@api.route('/beneficiary', methods=['GET'])
@jwt_required()
def get_beneficiary():
    try:
        # Obtén el ID de la fundación desde el token JWT
        foundation_id = get_jwt().get("foundation_id")

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
        foundation_id = get_jwt().get("foundation_id")
        foundation = Foundation.query.get(foundation_id)
        
        if not foundation:
            return jsonify({"error": "Foundation not found."}), 404

        # Extract beneficiary data
        name = data.get('name')
        wish_gift = data.get('wish_gift')
        history = data.get('history')
        account = data.get('account')
        image_base64 = data.get('image')
        is_active = data.get('is_active', True)  
        
        if not name or not account:
            return jsonify({"error": "Name and account are required fields."}), 400

        # Decode the base64 image
        image_data = b64decode(image_base64) if image_base64 else None

        # Create a new beneficiary associated with the foundation
        new_beneficiary = Beneficiary(
            name=name,
            wish_gift=wish_gift,
            history=history,
            account=account,
            image=image_data,
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

        # Verificar si se envió una imagen y actualizarla si está presente
        image_base64 = body.get('image')
        if image_base64:
            beneficiary.image = b64decode(image_base64)

        # Guardar los cambios en la base de datos
        db.session.commit()
        
        return jsonify({"msg": "Beneficiary updated successfully"}), 200

    except Exception as e:
        print(f"Error updating beneficiary: {e}")
        return jsonify({"error": "An error occurred while updating the beneficiary.", "details": str(e)}), 500

@api.route('/donor', methods=['GET'])
def get_donors():
    donors = Donor.query.all()
    results = list(map(lambda donor: donor.serialize(), donors))

    return jsonify(results), 200

@api.route('/donors/<int:donor_id>', methods=['GET'])
def get_donor(donor_id):
    donor = Donor.query.filter_by(id=donor_id).first()
    if not donor:
        return jsonify({"error": "Donor not found"}), 404

    return jsonify(donor.serialize()), 200

@api.route('/donor', methods=['POST'])
def create_donor():
    data = request.get_json()
    if not data:
        return jsonify({"error": "No input data provided"}), 400

    name = data.get('name')
    last_name = data.get('last_name')
    email = data.get('email')
    password = data.get('password')
    is_active = data.get('is_active', True)

    new_donor = Donor(
        name=name,
        last_name=last_name,
        email=email,
        password=password,  # Make sure to handle password securely
        is_active=is_active
    )

    db.session.add(new_donor)
    db.session.commit()

    return jsonify(new_donor.serialize()), 201

@api.route('/donor/<int:id>', methods=['DELETE'])
def delete_donor(id):
    donor = Donor.query.get(id)
    if not donor:
        return jsonify({"error": "Donor not found"}), 404

    db.session.delete(donor)
    db.session.commit()

    return jsonify({"message": "Donor deleted successfully"}), 200

@api.route('/donor/<int:id>', methods=['PUT'])
def update_donor(id):
    data = request.get_json()
    if not data:
        return jsonify({"error": "No input data provided"}), 400

    donor = Donor.query.get(id)
    if not donor:
        return jsonify({"error": "Donor not found"}), 404

    donor.name = data.get('name', donor.name)
    donor.last_name = data.get('last_name', donor.last_name)
    donor.email = data.get('email', donor.email)
    donor.password = data.get('password', donor.password)  # Make sure to handle password securely
    donor.is_active = data.get('is_active', donor.is_active)

    db.session.commit()

    return jsonify(donor.serialize()), 200

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

@api.route("/private", methods=["GET"])
@jwt_required()
def private():
    email = get_jwt_identity()

    user = Foundation.query.filter_by(email=email).first()
    if not user: 
        return jsonify({"error": "Email not found"}), 404
    
    return jsonify({"user": user.serialize()})

@api.route("/login", methods=["POST"])
def login():
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
            identity=email, 
            additional_claims=additional_claims,
            expires_delta=timedelta(weeks=1)
        )
        
        return jsonify(access_token=access_token, user=user.serialize()), 200

    except Exception as e:
        # Log the exception for debugging
        print(f"Error during login: {e}")
        
        # Return a generic error response
        return jsonify({"error": "An error occurred during login.", "details": str(e)}), 500

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
