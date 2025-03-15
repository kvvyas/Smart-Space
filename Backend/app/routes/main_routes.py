from flask import Blueprint, jsonify, request
from flask_cors import CORS
import requests


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

# API request to fetch and return course schedule details from Concordia API.
@main.route('/courseDetails')
def get_course_details():

    url = "https://opendata.concordia.ca/API/v1/course/schedule/filter/*/*/*"
    payload = {}
    headers = {
      'Authorization': 'Basic ODUzOmJiYjAxYjE4NDM3ODY2NGJjMDVkYWIyNGIxYmUzODdj'
    }

    response = requests.request("GET", url, headers=headers, data=payload)

    if response.status_code == 200:
        data = response.json()  # Parse JSON response
        
        schedule_list = []
        for course in data:
            schedule_list.append({
                "departmentCode": course.get("departmentCode", ""),
                "currentEnrollment": int(course.get("currentEnrollment", "0")),
                "locationCode": course.get("locationCode", ""),
                "roomCode": course.get("roomCode", ""),
                "buildingCode": course.get("buildingCode", ""),
                "mondays": course.get("modays", "N"),
                "tuesdays": course.get("tuesdays", "N"),
                "wednesdays": course.get("wednesdays", "N"),
                "thursdays": course.get("thursdays", "N"),
                "fridays": course.get("fridays", "N"),
                "saturdays": course.get("saturdays", "N"),
                "sundays": course.get("sundays", "N")
            })
        
        return jsonify(schedule_list)
    else:
        return jsonify({"error": f"Failed to fetch data, status code: {response.status_code}"}), response.status_code

