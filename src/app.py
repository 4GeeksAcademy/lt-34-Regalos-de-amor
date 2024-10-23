"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
import os
from flask import Flask, request, jsonify, url_for, send_from_directory
from flask_migrate import Migrate
from flask_swagger import swagger
from api.utils import APIException, generate_sitemap
from api.models import db, Foundation
from api.routes import api
from api.admin import setup_admin
from api.commands import setup_commands

# from models import Person

ENV = "development" if os.getenv("FLASK_DEBUG") == "1" else "production"
static_file_dir = os.path.join(os.path.dirname(
    os.path.realpath(__file__)), '../public/')
app = Flask(__name__)
app.url_map.strict_slashes = False

# database condiguration
db_url = os.getenv("DATABASE_URL")
if db_url is not None:
    app.config['SQLALCHEMY_DATABASE_URI'] = db_url.replace(
        "postgres://", "postgresql://")
else:
    app.config['SQLALCHEMY_DATABASE_URI'] = "sqlite:////tmp/test.db"

app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
MIGRATE = Migrate(app, db, compare_type=True)
db.init_app(app)

# add the admin
setup_admin(app)

# add the admin
setup_commands(app)

# Add all endpoints form the API with a "api" prefix
app.register_blueprint(api, url_prefix='/api')

# Handle/serialize errors like a JSON object


@app.errorhandler(APIException)
def handle_invalid_usage(error):
    return jsonify(error.to_dict()), error.status_code

# generate sitemap with all your endpoints


@app.route('/')
def sitemap():
    if ENV == "development":
        return generate_sitemap(app)
    return send_from_directory(static_file_dir, 'index.html')

# any other endpoint will try to serve it like a static file


@app.route('/<path:path>', methods=['GET'])
def serve_any_other_file(path):
    if not os.path.isfile(os.path.join(static_file_dir, path)):
        path = 'index.html'
    response = send_from_directory(static_file_dir, path)
    response.cache_control.max_age = 0  # avoid cache memory
    response.headers.add('Access-Control-Allow-Origin', '*')
    return response

#Foundation
@app.route('/foundations', methods=['GET'])
def Get_Foundation():
    all_Foundation= Foundation.query.all()
    print(all_Foundation)
    results = list(map(lambda name: name.serialize(), all_Foundation))
    return jsonify(results), 200

@app.route('/foundations/<int:foundations_id>', methods=['GET'])
def Get_Foundation_id(foundations_id):
    identification= Foundation.query.filter_by(Foundation_ID = foundations_id).first()
    return jsonify(identification.serialize()), 200

@app.route('/foundations', methods=['POST'])
def POST_Foundation():
    body = request.get_json()
    box = Foundation(Name=body['Name'],Description=body['Description'],Country=body['Country'],Email=body['Email'],Password=body['Password']
    )
    db.session.add(box)
    db.session.commit()
    response_body = {
        "msg": "A donar has been added"
    }
    return jsonify(response_body), 200

@app.route('/foundations', methods=['DELETE'])
def Delete_foundations():
    body = request.get_json()
    favorite = Foundation.query.filter_by(Foundation_ID=body['id']).first()
    db.session.delete(favorite)
    db.session.commit()
    return jsonify({"msg": "Donar eliminated"}), 200

@app.route('/foundations/<int:foundation_id>', methods=['PUT'])
def update_foundation(foundation_id):
    foundation = Foundation.query.filter_by(Foundation_ID=foundation_id).first()
    if not foundation:
        return jsonify({"msg": "Foundation not found"}), 404

    body = request.get_json()
    foundation.Name = body.get('Name', foundation.Name)
    foundation.Description = body.get('Description', foundation.Description)
    foundation.Country = body.get('Country', foundation.Country)
    foundation.Email = body.get('Email', foundation.Email)
    foundation.Password = body.get('Password', foundation.Password)

    db.session.commit()
    
    return jsonify({"msg": "Foundation updated successfully"}), 200

 

# this only runs if `$ python src/main.py` is executed
if __name__ == '__main__':
    PORT = int(os.environ.get('PORT', 3001))
    app.run(host='0.0.0.0', port=PORT, debug=True)
