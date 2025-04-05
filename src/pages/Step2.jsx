import React from "react";
import { useLocation } from "react-router-dom"; //  Import location
import FeedbackButton from "../components/ButtonStep2";
import Footer from "../components/Footer";
import Header from "../components/Header.jsx";
import CrowdednessSlider from "../components/SliderStep2";

export default function Step2() {
  const location = useLocation();
  const building = location.state;

  return (  
    <div className="bg-gray-900 min-h-screen flex flex-col text-white">
      <Header />

      <main className="flex-grow flex flex-col items-center justify-center space-y-8 text-center px-4">
        {/* Building Info */}
        {building ? (
          <>
          <h2 className="text-2xl font-semibold mb-1">
            {building.buildingDetails?.Building_Long_Name || building.buildingCode}
          </h2>
          <p className="text-gray-400 mb-1">{building.buildingDetails?.Address}</p>
          <p className="text-gray-400">{"👤 " + building.totalEnrollment}</p>
        </>
        
        ) : (
          <p className="text-red-400">No building data provided.</p>
        )}

        {/* Feedback Buttons */}
        <FeedbackButton label="I FOUND A SEAT" onClick={() => console.log("I found a seat")} />
        <FeedbackButton label="I DIDN'T FIND A SEAT" onClick={() => console.log("I didn't find a seat")} />

        {/* Slider */}
        <CrowdednessSlider />
      </main>

      <Footer />
    </div>
  );
}