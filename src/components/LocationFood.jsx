function LocationFood({ title, description }) {
    return (
      <div className="w-full p-4 bg-white shadow-md rounded-md flex flex-col">
        {/* Title */}
        <h2 className="text-lg text-black font-bold mb-2">{title}</h2>
        
        {/* Description */}
        <p className="text-sm text-gray-500">{description}</p>
      </div>
    );
  }
  
  export default LocationFood;
  