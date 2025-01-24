import React from 'react';

function CrowdednessSlider({ value, onChange }) {
  return (
    <div className="flex flex-col items-center">
      <p className="text-white mb-2">Please tell us how crowded the place is:</p>
      <input
        type="range"
        min="1"
        max="10"
        step="1"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-3/4 appearance-none h-2 bg-purple-200 rounded-lg focus:outline-none cursor-pointer"
      />
    </div>
  );
}

export default CrowdednessSlider;
