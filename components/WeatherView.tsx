
import React from 'react';

interface WeatherViewProps {
  location: string;
  setLocation: (l: string) => void;
}

export const WeatherView: React.FC<WeatherViewProps> = ({ location, setLocation }) => {
  const handleRedetect = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (pos) => setLocation(`${pos.coords.latitude.toFixed(1)}, ${pos.coords.longitude.toFixed(1)}`),
        () => alert("Geolocation failed. Please enter manually.")
      );
    } else {
      alert("Geolocation is not supported by this browser.");
    }
  };

  return (
    <div className="space-y-6">
      <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
        <h2 className="text-2xl font-bold text-gray-900 mb-1 flex items-center gap-2">
          <span>☁️</span> Weather Information
        </h2>
        <p className="text-gray-400 text-sm mb-6">Current weather to help plan your farming activities</p>
        
        <div className="space-y-2">
          <label className="flex items-center gap-2 text-sm font-bold text-gray-800">
            <span>📍</span> Your Location
          </label>
          <div className="flex gap-2">
            <input 
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              placeholder="Enter city or region"
              className="flex-1 p-4 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none transition-all"
            />
            <button 
              onClick={handleRedetect}
              title="Detect my location"
              className="bg-[#0F172A] text-white p-4 rounded-xl hover:bg-[#1E293B] transition-all"
            >
              <span>🔄</span>
            </button>
          </div>
        </div>
      </div>

      <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 flex justify-between items-center">
        <div className="flex items-center gap-4">
          <span className="text-5xl text-yellow-400">🌤️</span>
          <div>
            <div className="text-4xl font-black text-gray-900">30°C</div>
            <div className="text-gray-400 font-medium">Cloudy</div>
          </div>
        </div>
        <div className="text-right">
          <div className="text-xl font-black text-gray-900">47%</div>
          <div className="text-gray-400 font-medium">Humidity</div>
        </div>
      </div>

      <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
        <h3 className="font-bold text-gray-900 mb-4">Farming Tips</h3>
        <p className="text-sm text-gray-500 italic">No specific weather-based alerts for your current location.</p>
        <div className="mt-4 h-16 bg-gray-50 rounded-xl border border-gray-100 border-dashed flex items-center justify-center text-gray-300">
          Future Forecast Data Integration
        </div>
      </div>
    </div>
  );
};
