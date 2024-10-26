"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User, Beneficiary, Donor 
from api.utils import generate_sitemap, APIException
from flask_cors import CORS
# from flask_jwt_extended import create_access_token
# from flask_jwt_extended import get_jwt_identity
# from flask_jwt_extended import jwt_required
# from flask_jwt_extended import JWTManager


api = Blueprint('api', __name__)

# Allow CORS requests to this API
CORS(api)


@api.route('/hello', methods=['POST', 'GET'])
def handle_hello():

    response_body = {
        "message": "Hello! I'm a message that came from the backend, check the network tab on the google inspector and you will see the GET request"
    }

    return jsonify(response_body), 200

@api.route('/beneficiary', methods=['GET'])
def get_beneficiary():
    beneficiary = Beneficiary.query.all()
    results = list(map(lambda beneficiary: beneficiary.serialize(), beneficiary))

    return jsonify(results), 200

@api.route('/beneficiaries/<int:beneficiaries_id>', methods=['GET'])
def get_user(beneficiaries_id):
    each_beneficiary = Beneficiary.query.filter_by(id=beneficiaries_id).first()
    if not each_beneficiary:
        return jsonify({"error": "Deleted user"}), 400

    return jsonify(each_beneficiary.serialize()), 200

@api.route('/beneficiary', methods=['POST'])
def create_beneficiary():
    data = request.get_json() 
    if not data:
        return jsonify({"error": "No input data provided"}), 400

    name = data.get('name')
    wish_gift = data.get('wish_gift')
    history = data.get('history')
    account = data.get('account')
    # picture = data.get('picture')
    is_active = data.get('is_active', True)  
    
    new_beneficiary = Beneficiary(
        name=name,
        wish_gift=wish_gift,
        history=history,
        account=account,
        # picture=picture,
        is_active=is_active
    )

    db.session.add(new_beneficiary)
    db.session.commit()

    return jsonify(new_beneficiary.serialize()), 201

@api.route('/beneficiary/<int:id>', methods=['DELETE'])
def delete_beneficiary(id):
    beneficiary = Beneficiary.query.get(id)
    if not beneficiary:
        return jsonify({"error": "Beneficiary not found"}), 404

    db.session.delete(beneficiary)
    db.session.commit()

    return jsonify({"message": "Beneficiary deleted successfully"}), 200

@api.route('/beneficiary/<int:id>', methods=['PUT'])
def update_beneficiary(id):
    data = request.get_json()  
    if not data:
        return jsonify({"error": "No input data provided"}), 400

    beneficiary = Beneficiary.query.get(id)
    if not beneficiary:
        return jsonify({"error": "Beneficiary not found"}), 404

    beneficiary.name = data.get('name', beneficiary.name)
    beneficiary.wish_gift = data.get('wish_gift', beneficiary.wish_gift)
    beneficiary.history = data.get('history', beneficiary.history)
    beneficiary.account = data.get('account', beneficiary.account)
    # beneficiary.picture = data.get('picture', beneficiary.picture)
    beneficiary.is_active = data.get('is_active', beneficiary.is_active)

    db.session.commit()

    return jsonify(beneficiary.serialize()), 200

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

