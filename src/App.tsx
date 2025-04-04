import React, { useEffect, useState } from "react";
import Footer from "./components/Footer.jsx";
import Header from "./components/Header.jsx";
import NewFeedbackButton from "./components/NewFeedbackButton";
import { Link } from "react-router-dom";

function App() {
  const [buildingData, setBuildingData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true); // 👈 track fetch status

  const getBuildingPersonData = async () => {
    try {
      const response = await fetch(
        "http://127.0.0.1:5000/getBuildingEnrollmentTotals"
      );
      if (!response.ok)
        throw new Error(`HTTP error! status: ${response.status}`);

      const data = await response.json();
      const buildings = Object.entries(data).map(([code, building]) => ({
        code,
        ...building,
      }));
      setBuildingData(buildings);
    } catch (error) {
      console.error("Error fetching building data:", error);
      setError("Failed to load building information.");
    } finally {
      setLoading(false); // ✅ This now works safely in TS
    }
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
          StudySpace at Concordia University <br />
        </h1>
        <Link to="/step1" state={{ campus: "SGW", buildingData }}>
          <NewFeedbackButton
            label="Sir Georges Williams campus"
            onClick={() => console.log("I am at SGW")}
            disabled={loading}
            className={`${loading ? "opacity-50 cursor-not-allowed" : ""}`}
          />
        </Link>
        <p>
          <br />
        </p>
        <Link to="/step1" state={{ campus: "LOY", buildingData }}>
          <NewFeedbackButton
            label="Loyola campus"
            onClick={() => console.log("I am at Loyola")}
            disabled={loading}
          />
        </Link>
        <br />
        Where are you studying today?
      </main>

      {/* Footer */}
      <div className="text-sm text-white text-center mb-2">
        {loading ? "⏳ Loading data..." : "🏃 Ready"}
      </div>

      <Footer />
    </div>
  );
}

export default App;
