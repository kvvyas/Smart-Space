function LocationChoice({ title, description }) {
    return (
        <div className="w-[400px] h-[250px] p-6 bg-white shadow rounded-md mx-auto flex flex-col">
          {/* Title */}
          <h2 className="text-2xl text-black font-bold mb-4">{title}</h2>
          
          {/* Scrollable Description */}
          <div className="mb-4 flex-grow overflow-y-auto" style={{ maxHeight: '200px' }}>
            <p className="text-sm text-gray-500">{description}</p>
          </div>
          
          {/* Button */}
          <button className="mt-auto px-4 py-2 bg-gray-200 text-gray-700 rounded hover:bg-gray-300">
            I want to go here
          </button>
        </div>
    );
}

export default LocationChoice;
