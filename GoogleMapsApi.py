import os
import json
import requests
from dotenv import load_dotenv


load_dotenv()

class GoogleMapsService:
    API_KEY = os.getenv("GOOGLE_MAPS_API_KEY")  # Load from environment
    BASE_URL = "https://maps.googleapis.com/maps/api/place/nearbysearch/json"
    LATITUDE, LONGITUDE, RADIUS = 45.4971, -73.5788, 1000

    @staticmethod
    def search_restaurants():
        if not GoogleMapsService.API_KEY:
            print("API key is missing. Make sure to set GOOGLE_MAPS_API_KEY in the environment.")
            return None

        params = {
            "location": f"{GoogleMapsService.LATITUDE},{GoogleMapsService.LONGITUDE}",
            "radius": GoogleMapsService.RADIUS,
            "type": "restaurant",
            "key": GoogleMapsService.API_KEY
        }
        try:
            response = requests.get(GoogleMapsService.BASE_URL, params=params)
            response.raise_for_status()
            return response.json()
        except requests.RequestException as e:
            print(f"Error fetching data: {e}")
            return None

if __name__ == "__main__":
    json_response = GoogleMapsService.search_restaurants()
    if json_response:
        print(json.dumps(json_response, indent=4))
    else:
        print("Failed to fetch data.")
