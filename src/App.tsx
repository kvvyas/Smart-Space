import React, { useEffect, useState } from 'react';
import Footer from './components/Footer.jsx';
import Header from './components/Header.jsx';
import NewFeedbackButton from "./components/NewFeedbackButton";
import { Link } from 'react-router-dom';

function App() {
  const [buildingData, setBuildingData] = useState([]);
  const [error, setError] = useState(null);

  const getBuildingPersonData = () => {
    fetch("http://127.0.0.1:5000/getBuildingEnrollmentTotals")
      .then((response) => {
        if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
        return response.json();
      })
      .then((data) => {
        // Convert object to array of building objects
        const buildings = Object.entries(data).map(([code, building]) => ({
          code,
          ...building
        }));
        setBuildingData(buildings);
      })
      .catch((error) => {
        console.error("Error fetching building data:", error);
        setError("Failed to load building information.");
      });
  };

  useEffect(() => {
    getBuildingPersonData(); // Fetch when App loads
  }, []);
  return (
    <div className="bg-gray-800 min-h-screen flex flex-col text-white">
      {/* Header */}
      <Header />

      <main className="flex-grow flex flex-col items-center justify-center text-center px-4 mb-20">
        <h1 className="text-4xl md:text-5xl font-bold mb-16">
          StudySpace at Concordia University <br /></h1>
          <Link to="/step1" state={{ campus: "SGW", buildingData }}>
          <NewFeedbackButton label="Sir Georges Williams campus" onClick={() => console.log("I am at SGW")} /></Link>
          <p><br /></p>
          <Link to="/step1" state={{ campus: "LOY", buildingData }}>
          <NewFeedbackButton label="Loyola campus" onClick={() => console.log("I am at Loyola")} /></Link>
          <br />Where are you studying today?
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;