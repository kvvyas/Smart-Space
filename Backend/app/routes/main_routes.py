from flask import Blueprint, jsonify, request
from flask_cors import CORS
import requests
import os
from dotenv import load_dotenv
import datetime


load_dotenv()
auth_token = os.getenv("AUTH_TOKEN")

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
    
    # Get current day of the week
    today = datetime.datetime.today().strftime('%A').lower()
    current_time = datetime.datetime.now().strftime('%H.%M.%S')

    # Map Python's weekday to API's format
    day_map = {
        "monday": "modays",
        "tuesday": "tuesdays",
        "wednesday": "wednesdays",
        "thursday": "thursdays",
        "friday": "fridays",
        "saturday": "saturdays",
        "sunday": "sundays"
    }

    url = "https://opendata.concordia.ca/API/v1/course/schedule/filter/*/*/*"
    payload = {}
    headers = {
      'Authorization': auth_token
    }

    response = requests.request("GET", url, headers=headers, data=payload)

    if response.status_code == 200:
        data = response.json()  # Parse JSON response
        
        schedule_list = []
        for course in data:
            current_enrollment = int(course.get("currentEnrollment", "0"))
            class_status = course.get("classStatus", "").lower()
            class_start_time = course.get("classStartTime", "00.00.00")
            class_end_time = course.get("classEndTime", "23.59.59")
            
            if (current_enrollment > 0 and class_status == "active" and course.get(day_map[today], "N") == "Y" and class_start_time <= current_time <= class_end_time):
                schedule_list.append({
                  "departmentCode": course.get("departmentCode", ""),
                  "courseTitle": course.get("courseTitle", ""),
                  "currentEnrollment": int(course.get("currentEnrollment", "0")),
                  "locationCode": course.get("locationCode", ""),
                  "roomCode": course.get("roomCode", ""),
                  "buildingCode": course.get("buildingCode", ""),
              })
        
        return jsonify(schedule_list)
    else:
        return jsonify({"error": f"Failed to fetch data, status code: {response.status_code}"}), response.status_code

# API request to fetch and return building details from Concordia API.
@main.route('/builidingList')
def get_building_List(): 
    
    url = "https://opendata.concordia.ca/API/v1/facilities/buildinglist/"
    payload = {}
    headers = {
      'Authorization': auth_token
    }

    response = requests.request("GET", url, headers=headers, data=payload)

    if response.status_code == 200:
        # building_list = pd.DataFrame(response.json())
        data = response.json()  # Parse JSON response


        building_list = []
        for building in data:
            building_list.append({
                "Campus": building.get("Campus", ""),
                "Building": building.get("Building", ""),
                "Building_Name": building.get("Building_Name", ""),
                "Address": building.get("Address", "")
            })
        
        return jsonify(building_list)

    else:
        raise Exception(f"API request failed with status code {response.status_code}")
    

# Route to fetch the course schedule, filter active courses happening today, 
# and merge them with building details for better location context
@main.route('/getScheduleWithBuildings')
def get_schedule_with_buildings():
    
    payload = {}
    headers = {
      'Authorization': auth_token
    }
    # Fetch buildings data
    buildings_url = "https://opendata.concordia.ca/API/v1/facilities/buildinglist/"

    buildings_response = requests.request("GET", buildings_url, headers=headers, data=payload)

    if buildings_response.status_code != 200:
        return jsonify({"error": f"Failed to fetch buildings data, status code: {buildings_response.status_code}"}), buildings_response.status_code
    
    buildings_data = buildings_response.json()
    buildings_dict = {b["Building"]: {
        "Campus": b.get("Campus", ""),
        "Building_Name": b.get("Building_Name", ""),
        "Address": b.get("Address", "")
    } for b in buildings_data}
    
    # Fetch course schedule data
    schedule_url = "https://opendata.concordia.ca/API/v1/course/schedule/filter/*/*/*"
    
    schedule_response = requests.request("GET", schedule_url, headers=headers, data=payload)
    
    if schedule_response.status_code != 200:
        return jsonify({"error": f"Failed to fetch course schedule data, status code: {schedule_response.status_code}"}), schedule_response.status_code
    
    schedule_data = schedule_response.json()
    
    # Get current day and time
    today = datetime.datetime.today().strftime('%A').lower()
    current_time = datetime.datetime.now().strftime('%H.%M.%S')
    
    day_map = {
        "monday": "modays",
        "tuesday": "tuesdays",
        "wednesday": "wednesdays",
        "thursday": "thursdays",
        "friday": "fridays",
        "saturday": "saturdays",
        "sunday": "sundays"
    }
    
    schedule_list = []
    for course in schedule_data:
        current_enrollment = int(course.get("currentEnrollment", "0"))
        class_status = course.get("classStatus", "").lower()
        class_start_time = course.get("classStartTime", "00.00.00")
        class_end_time = course.get("classEndTime", "23.59.59")
        building_code = course.get("buildingCode", "")
        room_code = course.get("roomCode", "")

        
        if (current_enrollment > 0 and class_status == "active" and 
            course.get(day_map[today], "N") == "Y" and 
            class_start_time <= current_time <= class_end_time and 
            room_code.upper() != "ONLINE"):
            
            course_data = {
                "departmentCode": course.get("departmentCode", ""),
                "currentEnrollment": current_enrollment,
                "locationCode": course.get("locationCode", ""),
                "roomCode": course.get("roomCode", ""),
                "buildingCode": building_code,
                "classStartTime": class_start_time,
                "classEndTime": class_end_time
            }
            
            # Merge building details if available
            if building_code in buildings_dict:
                course_data["buildingDetails"] = buildings_dict[building_code]
            
            schedule_list.append(course_data)
    
    return jsonify(schedule_list)