import React, { useState, useEffect } from 'react';
import Footer from "../components/Footer";
import Header from '../components/Header.jsx';
import LocationChoice from '../components/LocationChoice.jsx';
import { useLocation } from 'react-router-dom';

export default function Step1() {
  const location = useLocation();
  const campus = location.state?.campus;

  const [buildingData, setBuildingData] = useState([]);
  const [error, setError] = useState(null);

  const getBuildingPersonData = () => {
    fetch("http://127.0.0.1:5000/getBuildingEnrollmentTotals")
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        const filtered = Object.entries(data)
          .filter(([_, building]) => building?.buildingDetails?.Campus === campus)
          .map(([code, building]) => ({
            code,
            ...building
          }))
          .sort((a, b) => a.totalEnrollment - b.totalEnrollment);

        setBuildingData(filtered);
      })
      .catch((error) => {
        console.error("Error fetching building data:", error);
        setError("Failed to load building information. Please try again later.");
      });
  };

  useEffect(() => {
    if (campus) getBuildingPersonData();
  }, [campus]);

  return (
    <div className="bg-gray-800 min-h-screen flex flex-col text-white">
      <Header />

      <main className="flex-grow flex flex-col items-center justify-center text-center px-4">
        {error && <p className="text-red-500">{error}</p>}

        <div className="grid grid-cols-2 gap-24">
          {buildingData.slice(0, 4).map((building, index) => (
            <LocationChoice 
              key={index}
              title={`${building.buildingDetails?.Building_Long_Name}`}
              description={`No. of people in building: ${building.totalEnrollment}`}
            />
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
}
