import os
from flask import Flask
from flask_cors import CORS
from routes.main_routes import main as main_blueprint

class Config:
    SECRET_KEY = os.environ.get('SECRET_KEY') or 'dev'
    SQLALCHEMY_DATABASE_URI = os.environ.get('DATABASE_URL') or 'sqlite:///studyspace.db'
    SQLALCHEMY_TRACK_MODIFICATIONS = False
    JWT_SECRET_KEY = os.environ.get('JWT_SECRET_KEY') or 'jwt-secret-key'

def create_app():
    app = Flask(__name__)
    app.config.from_object(Config)
    
    # Enable CORS
    CORS(app, resources={r"/api/*": {"origins": "http://127.0.0.1:5000"}})
    
    # Register blueprints
    app.register_blueprint(main_blueprint)
    
    return app

if __name__ == "__main__":
    app = create_app()
    app.run(debug=True, port=5000)