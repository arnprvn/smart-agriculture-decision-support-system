
import React from 'react';
import { Language } from '../types';
import { TranslationType } from '../constants';

interface WeatherViewProps {
  location: string;
  setLocation: (l: string) => void;
  lang: Language;
  uiTranslations: TranslationType;
}

export const WeatherView: React.FC<WeatherViewProps> = ({ location, setLocation, lang, uiTranslations }) => {
  const t = uiTranslations;

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
          <span>☁️</span> {t.weather}
        </h2>
        <p className="text-gray-400 text-sm mb-6">{t.weatherSub}</p>
        
        <div className="space-y-2">
          <label className="flex items-center gap-2 text-sm font-bold text-gray-800">
            <span>📍</span> {t.location}
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
          <div className="text-gray-400 font-medium">{t.humidity}</div>
        </div>
      </div>
    </div>
  );
};
