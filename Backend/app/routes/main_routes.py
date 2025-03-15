from flask import Blueprint, jsonify, request
from flask_cors import CORS

main = Blueprint('main', __name__)

@main.route('/aboutus')  
def get_about():
    about_data = {
        "teamDescription": "We are Concordia students dedicated to creating innovative study spaces.",
        "teamMembers": [
            {"name": "Team Member 1", "role": "Developer", "description": "Computer Science Student"},
            {"name": "Team Member 2", "role": "Designer", "description": "Software Engineering Student"}
        ]
    }
    return jsonify(about_data)

@main.route('/contactus')  
def get_contact():
    return jsonify({"phoneNumber": "911"})

