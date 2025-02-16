import React, { useEffect, useState } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header.jsx";

export default function AboutUs() {
  const [aboutData, setAboutData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("http://127.0.0.1:5000/aboutus")  // Updated URL to match backend
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => setAboutData(data))
      .catch((error) => {
        console.error("Error fetching about data:", error);
        setError("Failed to load team information. Please try again later.");
      });
  }, []);

  return (
    <div className="bg-gray-800 min-h-screen flex flex-col text-white">
      <Header />

      <main className="flex-grow flex flex-col items-center justify-center">
        <h1 className="text-4xl font-bold mb-6">About us</h1>

        <div className="text-3xl font-light uppercase bg-gray-600 rounded-lg h-48 w-48 flex items-center justify-center mb-6">
          PICTURE OF US
        </div>

        {error ? (
          <p className="text-red-400">{error}</p>
        ) : !aboutData ? (
          <p className="text-gray-400">Loading...</p>
        ) : (
          <>
            <p className="text-lg text-gray-300 text-center px-4 max-w-2xl">
              {aboutData.teamDescription}
            </p>
            <ul className="mt-6 space-y-4">
              {aboutData.teamMembers.map((member, index) => (
                <li key={index} className="text-gray-200 text-center">
                  <strong className="text-blue-400">{member.name}</strong> - {member.role}
                  <br />
                  <span className="text-gray-400">{member.description}</span>
                </li>
              ))}
            </ul>
          </>
        )}
      </main>

      <Footer />
    </div>
  );
}