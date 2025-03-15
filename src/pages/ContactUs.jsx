import React, { useEffect, useState } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header.jsx";

export default function ContactUs() {
  const [phoneNumber, setPhoneNumber] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("http://127.0.0.1:5000/contactus")
      .then((response) => {
        console.log("Response received:", response);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        console.log("Data received:", data);
        setPhoneNumber(data.phoneNumber);
      })
      .catch((error) => {
        console.error("Error fetching phone number:", error);
        setError("Failed to load contact information. Please try again later.");
      });
  }, []);

  return (
    <div className="bg-gray-800 min-h-screen flex flex-col text-white">
      <Header />

      <main className="flex-grow flex flex-col items-center justify-center">
        <h1 className="text-4xl font-bold mb-6">Contact Us</h1>

        {error ? (
          <p className="text-red-400">{error}</p>
        ) : !phoneNumber ? (
          <p className="text-gray-400">Loading...</p>
        ) : (
          <p className="text-xl text-blue-400 font-bold mt-4">
            Emergency Contact: {phoneNumber}
          </p>
        )}
      </main>

      <Footer />
    </div>
  );
}
