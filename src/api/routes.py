"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User, Beneficiary
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
    each_beneficiary = Beneficiary.query.filter_by(id= beneficiaries_id).first()
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


# @api.route("/login", methods=["POST"])
# def login_beneficiary():
#     email = request.json.get("email")
#     password = request.json.get("password")
    
#     user = User.query.filter_by(email = email).first()
#     print(User)

#     if not user: 
#         return jsonify({"error": "user not found"}), 404

#     valid_password = current_app.bcrypt.check_password_hash(user.password, password)
    
#     if email != user.email or not valid_password:
#         return jsonify({"msg": "Bad email or password"}), 401
    
#     access_token = create_access_token(identity=email)
#     return jsonify(access_token=access_token, user= user.serialize()), 200

# @api.route("/signup", methods=["POST"])
# def signup():
#     body = request.get_json() 
#     user = User.query.filter_by(email=body["email"]).first()
#     if user != None:
#         return jsonify({"msg": "An user was created with that email" }), 401
    
#     password_hash = current_app.bcrypt.generate_password_hash(body["password"]).decode("utf-8")

#     user = User(email =body["email"], password = password_hash, is_active = True)
#     db.session.add(user)
#     db.session.commit()
#     response_body = {
#         "msg": "user created",
#         "user_id": user.id,
#         "email": user.email,
        
#     }
#     return jsonify(response_body), 200

# @api.route("/private", methods=["GET"])
# @jwt_required()
# def private():
#     email = get_jwt_identity()

#     user = User.query.filter_by(email=email).first()
#     if not user: 
#         return jsonify({"error": "user not found"}), 404
    
    return jsonify({"user": user.serialize()})