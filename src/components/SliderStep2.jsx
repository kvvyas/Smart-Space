import React, { useState } from "react";

function CrowdednessSlider() {
  const [value, setValue] = useState(50);

  return (
    <div className="w-full max-w-md text-center space-y-2">
      <p className="text-lg">Please tell us how crowded the place is:</p>

      {/* Labels and slider */}
      <div className="flex flex-col space-y-2">
        <div className="flex justify-between text-sm text-gray-400 px-1">
          <span>Low</span>
          <span>High</span>
        </div>
        <input
          type="range"
          min="0"
          max="100"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          className="w-full appearance-none h-2 rounded bg-purple-300 focus:outline-none"
        />
      </div>

      {/* Optional: show value */}
      <p className="text-sm text-gray-400">Crowdedness: {value}%</p>
    </div>
  );
}

export default CrowdednessSlider;
