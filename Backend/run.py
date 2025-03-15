from flask import Flask
from flask_cors import CORS
from app import create_app

app = create_app()

# ✅ Allow CORS for frontend requests
CORS(app, resources={r"/*": {"origins": "http://localhost:5173"}}, supports_credentials=True)

if __name__ == "__main__":
    app.run(debug=True)
