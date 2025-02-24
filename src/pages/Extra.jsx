import Footer from "../components/Footer";
import Header from "../components/Header.jsx";
import React from "react";
import LocationFood from "../components/LocationFood.jsx";

export default function Extra() {
  return (
    <div className="bg-gray-800 min-h-screen flex flex-col text-white">
      {/* Header */}
      <Header />

      {/* Main Content */}
      <main className="flex-grow flex flex-row items-start px-8 my-10">
        {/* Left Section */}
        <div className="w-1/2 pr-8 flex flex-col justify-center">
          <h1 className="text-3xl font-bold mb-4">STUDY BUDDY FINDER</h1>
          <p className="text-lg mb-2">What class do you want to find study partners for?</p>
          <ul className="text-gray-400 space-y-2">
            <li>*class1*</li>
            <li>*class2*</li>
            <li>*class3*</li>
            <li>etc.</li>
          </ul>
        </div>

        {/* Divider */}
        <div className="bg-gray-400 w-[4px] h-auto self-stretch mx-8"></div>

        {/* Right Section */}
        <div className="w-1/2 pl-8 flex flex-col">
          <h2 className="text-xl font-bold mb-4">Where to find food near you:</h2>
          <div className="flex flex-col space-y-4">
            <LocationFood
              title="1st closest spot"
              description="name/ type of cuisine/schedule"
            />
            <LocationFood
              title="2nd closest spot"
              description="name/ type of cuisine/schedule"
            />
            <LocationFood
              title="3rd closest spot"
              description="name/ type of cuisine/schedule"
            />
          </div>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
