from flask import Blueprint, jsonify, request
from flask_cors import cross_origin
from app.models.user import User

auth = Blueprint('auth', __name__)

# Dummy user database (Replace with actual database later)
users = {"test@example.com": User("test@example.com", "password123"),
         "Parsa.ghadimi76@gmail.com":User("Parsa.ghadimi76@gmail.com","1234")}

@auth.route('/login', methods=['POST', 'OPTIONS'])  # ✅ Allow OPTIONS requests
@cross_origin(origins="http://localhost:5176", supports_credentials=True)
def login():
    # ✅ Handle preflight OPTIONS request
    if request.method == "OPTIONS":
        response = jsonify({"message": "CORS preflight OK"})
        response.status_code = 200
        return response

    # ✅ Handle actual POST request
    data = request.get_json()
    email = data.get("email")
    password = data.get("password")
    print("Received login data:", data)
    user = users.get(email)
    if user and user.check_password(password):
        return jsonify({"message": "Login successful", "email": email}), 200
    else:
        return jsonify({"message": "Invalid credentials"}), 401
