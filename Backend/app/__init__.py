from flask import Flask
from flask_cors import CORS
from app.routes.main_routes import main
from app.routes.auth_routes import auth
def create_app():
    app = Flask(__name__)
    CORS(app)  # Enable CORS for all routes

    app.register_blueprint(main)  # Register the 'main' Blueprint
    app.register_blueprint(auth)

    return app
