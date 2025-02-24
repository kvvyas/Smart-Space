import Footer from "../components/Footer";
import Header from '../components/Header.jsx';
import React from 'react';
import LocationChoice from '../components/LocationChoice.jsx';

export default function Step1() {
  return (
    <div className="bg-gray-800 min-h-screen flex flex-col text-white">
      {/* Header */}
      <Header />

      {/* Main Content */}
      <main className="flex-grow flex flex-col items-center justify-center text-center px-4">
        <div className="grid grid-cols-2 gap-24">
          <LocationChoice 
            title="1st closest spot/ distance (km)" 
            description="how crowded/schedule/price" 
          />
          <LocationChoice 
            title="2nd closest spot/ distance (km)" 
            description="how crowded/schedule/price" 
          />
          <LocationChoice 
            title="3rd closest spot/ distance (km)" 
            description="how crowded/schedule/price" 
          />
          <LocationChoice 
            title="4th closest spot/ distance (km)" 
            description="how crowded/schedule/price" 
          />
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
