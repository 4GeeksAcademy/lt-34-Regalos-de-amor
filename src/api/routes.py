"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, Foundation, User
from api.utils import generate_sitemap, APIException
from flask_cors import CORS

api = Blueprint('api', __name__)

# Allow CORS requests to this API
CORS(api)


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
def POST_Foundation():
  
    body = request.get_json()
    box = Foundation(name=body['name'],description=body['description'],country=body['country'],email=body['email'],password=body['password'])
    db.session.add(box)
    db.session.commit()
    response_body = {
        "msg": "A donar has been added"
    }
    return jsonify(response_body), 200

@api.route('/foundations/<int:id>', methods=['DELETE'])
def Delete_foundations(id):
    favorite = Foundation.query.filter_by(id=id).first()
    db.session.delete(favorite)
    db.session.commit()
    return jsonify({"msg": "Donar eliminated"}), 200

@api.route('/foundations/<int:id>', methods=['PUT'])
def update_foundation(id):
    foundation = Foundation.query.filter_by(id=id).first()
    if not foundation:
        return jsonify({"msg": "Foundation not found"}), 404

    body = request.get_json()
    foundation.name = body.get('name', foundation.name)
    foundation.description = body.get('description', foundation.description)
    foundation.country = body.get('country', foundation.country)
    foundation.email = body.get('email', foundation.email)
    foundation.password = body.get('password', foundation.password)

    db.session.commit()
    
    return jsonify({"msg": "Foundation updated successfully"}), 200
