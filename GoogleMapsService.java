import java.io.*;
import java.net.HttpURLConnection;
import java.net.URL;

public class GoogleMapsService {
    // Hardcoded API Key
    private static final String API_KEY = "AIzaSyATDp_MvgaEZJzhUYVgcH2LKDa8EgvzV0E";
    private static final String BASE_URL = "https://maps.googleapis.com/maps/api/place/nearbysearch/json";

    // Hardcoded coordinates for H Building, Concordia University
    private static final double LATITUDE = 45.4971;
    private static final double LONGITUDE = -73.5788;
    private static final int RADIUS = 1000; // Hardcoded radius in meters

    public static String searchRestaurants() {
        String requestUrl = BASE_URL + "?location=" + LATITUDE + "," + LONGITUDE
                + "&radius=" + RADIUS
                + "&type=restaurant"
                + "&key=" + API_KEY;

        try {
            URL url = new URL(requestUrl);
            HttpURLConnection conn = (HttpURLConnection) url.openConnection();
            conn.setRequestMethod("GET");
            conn.setRequestProperty("Accept", "application/json");
            conn.connect();

            // Check HTTP response code
            int responseCode = conn.getResponseCode();
            if (responseCode != 200) {
                throw new IOException("HTTP error: " + responseCode);
            }

            // Read response using try-with-resources
            try (BufferedReader reader = new BufferedReader(new InputStreamReader(conn.getInputStream()))) {
                StringBuilder response = new StringBuilder();
                String line;
                while ((line = reader.readLine()) != null) {
                    response.append(line);
                }
                return response.toString();
            }

        } catch (IOException e) {
            System.err.println("Error fetching data from Google Maps API: " + e.getMessage());
            return null;
        }
    }

    public static void main(String[] args) {
        String jsonResponse = searchRestaurants();

        if (jsonResponse != null) {
            System.out.println(jsonResponse);
        } else {
            System.out.println("Failed to fetch data.");
        }
    }
}
