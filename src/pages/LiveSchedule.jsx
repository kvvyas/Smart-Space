import React, { useEffect, useState } from "react";
import { API_BASE_URL } from "../config";

function LiveSchedule() {
  const [schedule, setSchedule] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch(`${API_BASE_URL}/getScheduleWithBuildings`)
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch schedule");
        return res.json();
      })
      .then((data) => setSchedule(data))
      .catch((err) => {
        console.error("FETCH ERROR:", err);
        setError(err.message);
        setSchedule([]); // Ensure schedule is empty if fetch fails
      });
  }, []);
  
  return (
    <div className="p-6 text-white">
      <h1 className="text-2xl font-bold mb-4">Live Concordia Schedule</h1>

      {error ? (
  <p className="text-red-500">{error}</p>
) : schedule.length === 0 ? (
  <p>No active courses at the moment.</p>
) : (
  schedule.map((course, i) => (
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
  );
}

export default LiveSchedule;
