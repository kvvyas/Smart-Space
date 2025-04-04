import React, { useEffect, useState } from "react";
import { API_BASE_URL } from "../config";
import Header from "../components/Header";
import Footer from "../components/Footer";

function LiveSchedule() {
  const [schedule, setSchedule] = useState([]);
  const [filteredSchedule, setFilteredSchedule] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`${API_BASE_URL}/getScheduleWithBuildings`)
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch schedule");
        return res.json();
      })
      .then((data) => {
        setSchedule(data);
        setFilteredSchedule(data); // initially show everything
      })
      .catch((err) => {
        console.error("FETCH ERROR:", err);
        setError(err.message);
        setSchedule([]);
        setFilteredSchedule([]);
      })
      .finally(() => setLoading(false));
  }, []);

  const handleSearch = (e) => {
    const value = e.target.value.toLowerCase();
    setSearchQuery(value);
    const filtered = schedule.filter((course) => {
      return (
        course.departmentCode.toLowerCase().includes(value) ||
        course.buildingCode.toLowerCase().includes(value) ||
        course.buildingDetails?.Building_Name?.toLowerCase().includes(value)
      );
    });
    setFilteredSchedule(filtered);
  };

  return (
    <>
      <Header />
      <div className="p-6 text-white">
        <h1 className="text-2xl font-bold mb-4 text-black">Current Ongoing Classes</h1>

        {/* 🔍 Search Bar */}
        <input
          type="text"
          placeholder="Search by course, building code or name..."
          value={searchQuery}
          onChange={handleSearch}
          className="w-full max-w-md mb-6 px-4 py-2 rounded text-black border border-black shadow-md focus:outline-none focus:ring-2 focus:ring-black"
        />


        {loading ? (
          <p className="text-gray-400">Loading...</p>
        ) : error ? (
          <p className="text-red-500">{error}</p>
        ) : filteredSchedule.length === 0 ? (
          <p>No matching courses found.</p>
        ) : (
          filteredSchedule.map((course, i) => (
            <div key={i} className="mb-4 p-4 bg-gray-800 rounded">
              <h3 className="font-semibold">{course.departmentCode}</h3>
              <p>Room: {course.buildingCode} {course.roomCode}</p>
              <p>Time: {course.classStartTime} - {course.classEndTime}</p>
              <p>Enrolled: {course.currentEnrollment}</p>
              {course.buildingDetails && (
                <>
                  <p>🏛 {course.buildingDetails.Building_Name}</p>
                  <p>📍 {course.buildingDetails.Address}</p>
                </>
              )}
            </div>
          ))
        )}
      </div>
      <Footer />
    </>
  );
}

export default LiveSchedule;
