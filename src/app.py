import os
from datetime import timedelta

from flask import Flask, request, jsonify, send_from_directory
from flask_cors import CORS, cross_origin
from flask_migrate import Migrate
from flask_jwt_extended import JWTManager
from flask_bcrypt import Bcrypt

from api.utils import APIException, generate_sitemap
from api.models import db
from api.routes import api
from api.admin import setup_admin
from api.commands import setup_commands


ENV = "development" if os.getenv("FLASK_DEBUG") == "1" else "production"
static_file_dir = os.path.join(os.path.dirname(os.path.realpath(__file__)), '../public/')
app = Flask(__name__)
app.url_map.strict_slashes = False

# Configuración de CORS con origen específico y credenciales
CORS(app, resources={r"/api/*": {"origins": ["https://uncanny-wand-v6gqxj6qx6jjcwgxr-3000.app.github.dev"], "supports_credentials": True}})

app.config['JWT_ALGORITHM'] = 'RS256'
app.config['JWT_SECRET_KEY'] = open('rs256.pem').read()
app.config['JWT_PUBLIC_KEY'] = open('rs256.pub').read()
app.config["JWT_ALGORITHM"] = "HS256"
app.config["JWT_SECRET_KEY"] = os.environ.get('JWT_SECRET_KEY', 'sample key')
app.config["JWT_ACCESS_TOKEN_EXPIRES"] = timedelta(weeks=1)
jwt = JWTManager(app)
bcrypt = Bcrypt(app)
app.bcrypt = bcrypt

# Configuración de la base de datos
db_url = os.getenv("DATABASE_URL")
app.config['SQLALCHEMY_DATABASE_URI'] = db_url.replace("postgres://", "postgresql://") if db_url else "sqlite:////tmp/test.db"
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
MIGRATE = Migrate(app, db, compare_type=True)
db.init_app(app)

# Registro de Blueprint

app.register_blueprint(api, url_prefix='/api')

# add the admin
setup_admin(app)

# add the admin
setup_commands(app)


@app.after_request
def after_request(response):
    response.headers.add('Access-Control-Allow-Origin', 'https://uncanny-wand-v6gqxj6qx6jjcwgxr-3000.app.github.dev')
    response.headers.add('Access-Control-Allow-Headers', 'Content-Type,Authorization')
    response.headers.add('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS')
    response.headers.add('Access-Control-Allow-Credentials', 'true')
    return response

@app.errorhandler(APIException)
def handle_invalid_usage(error):
    return jsonify(error.to_dict()), error.status_code

@app.route('/')
def sitemap():
    if ENV == "development":
        return generate_sitemap(app)
    return send_from_directory(static_file_dir, 'index.html')

@app.route('/<path:path>', methods=['GET'])
def serve_any_other_file(path):
    if not os.path.isfile(os.path.join(static_file_dir, path)):
        path = 'index.html'
    response = send_from_directory(static_file_dir, path)
    response.cache_control.max_age = 0
    response.headers.add('Access-Control-Allow-Origin', 'https://uncanny-wand-v6gqxj6qx6jjcwgxr-3000.app.github.dev')
    return response

if __name__ == '__main__':
    PORT = int(os.environ.get('PORT', 3001))
    app.run(host='0.0.0.0', port=PORT, debug=True)
