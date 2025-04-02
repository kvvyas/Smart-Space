import React from 'react';
import { useLocation } from 'react-router-dom';
import Footer from "../components/Footer";
import Header from '../components/Header.jsx';
import LocationChoice from '../components/LocationChoice.jsx';

export default function Step1() {
  const location = useLocation();
  const { campus, buildingData } = location.state || {};

  console.log(buildingData.length == 0);

  const filteredBuildings = (buildingData || [])
    .filter(building => building?.buildingDetails?.Campus === campus)
    .sort((a, b) => a.totalEnrollment - b.totalEnrollment);

  return (
    <div className="bg-gray-800 min-h-screen flex flex-col text-white">
      <Header />

      <main className="flex-grow flex flex-col items-center justify-center text-center px-4">
        {filteredBuildings.length === 0 ? (
          <p className="text-gray-400">Loading ...</p>
        ) : (
          <div className="grid grid-cols-2 gap-24">
            {filteredBuildings.slice(0, 4).map((building, index) => (
              <LocationChoice 
                key={index}
                title={`${building.buildingDetails?.Building_Long_Name}`}
                description={`No. of people in building: ${building.totalEnrollment}`}
              />
            ))}
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
}
