import Footer from "../components/Footer";
import Header from "../components/Header.jsx";
import React from "react";
import FeedbackButton from "../components/ButtonStep2";
import CrowdednessSlider from "../components/SliderStep2";

export default function Step2() {
  return (  
    <div className="bg-gray-900 min-h-screen flex flex-col text-white">
      {/* Header */}
      <Header />

      {/* Main Content */}
      <main className="flex-grow flex flex-col items-center justify-center space-y-8">
        {/* Buttons */}
        <FeedbackButton label="I FOUND A SEAT" onClick={() => console.log("I found a seat")} />
        <FeedbackButton label="I DIDN'T FIND A SEAT" onClick={() => console.log("I didn't find a seat")} />

        {/* Slider */}
        <CrowdednessSlider />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
