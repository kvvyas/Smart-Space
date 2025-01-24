import './App.css'
import Header from './Header.jsx';
import Footer from './Footer.jsx';
import React from 'react';

function App() {


  return (
    <>
    <Header/>
    <main className="main-content">
        <h1>StudySpace at Concordia University</h1>
        <div className="search-bar">
          <span className="search-icon">🔍</span>
          <input type="text" placeholder="Search your location" />
          <button className="clear-button">x</button>
        </div>
        <p className="subtitle">
          Search up the nearest available study spots based on your location!
        </p>
      </main>
      <div className="user-icon">
          {/* Placeholder icon – could be a user icon SVG or similar */}
          <img 
            src="usericon.png" 
            alt="User Icon" 
            className="icon" 
          />
        </div>
    <Footer/>
    </>
  );
}

export default App;