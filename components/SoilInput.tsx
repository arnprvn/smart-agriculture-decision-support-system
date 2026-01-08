
import React, { useState } from 'react';
import { SoilData, WeatherData } from '../types';
import { CROP_TYPES } from '../constants';

interface SoilInputProps {
  onAnalyze: (crop: string, soil: SoilData, weather: WeatherData) => void;
  isLoading: boolean;
}

export const SoilInput: React.FC<SoilInputProps> = ({ onAnalyze, isLoading }) => {
  const [crop, setCrop] = useState(CROP_TYPES[0]);
  const [soil, setSoil] = useState<SoilData>({
    ph: 6.5,
    moisture: 40,
    nitrogen: 120,
    phosphorus: 60,
    potassium: 100
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate real-time weather for the current context
    const mockWeather: WeatherData = {
      temperature: 28,
      humidity: 65,
      rainfall: 12,
      condition: 'Partly Cloudy'
    };
    onAnalyze(crop, soil, mockWeather);
  };

  const handleSoilChange = (field: keyof SoilData, val: string) => {
    setSoil(prev => ({ ...prev, [field]: parseFloat(val) || 0 }));
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 max-w-2xl mx-auto">
      <h2 className="text-xl font-bold text-gray-800 mb-6 flex items-center gap-2">
        <span className="text-2xl">🌱</span> Farm Parameters
      </h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">Select Current/Target Crop</label>
          <select 
            value={crop}
            onChange={(e) => setCrop(e.target.value)}
            className="w-full p-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:outline-none transition-all"
          >
            {CROP_TYPES.map(c => <option key={c} value={c}>{c}</option>)}
          </select>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">Soil pH (0-14)</label>
            <input 
              type="number" step="0.1" value={soil.ph}
              onChange={(e) => handleSoilChange('ph', e.target.value)}
              className="w-full p-3 bg-gray-50 border border-gray-200 rounded-lg"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">Moisture (%)</label>
            <input 
              type="number" value={soil.moisture}
              onChange={(e) => handleSoilChange('moisture', e.target.value)}
              className="w-full p-3 bg-gray-50 border border-gray-200 rounded-lg"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">Nitrogen (mg/kg)</label>
            <input 
              type="number" value={soil.nitrogen}
              onChange={(e) => handleSoilChange('nitrogen', e.target.value)}
              className="w-full p-3 bg-gray-50 border border-gray-200 rounded-lg"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">Phosphorus (mg/kg)</label>
            <input 
              type="number" value={soil.phosphorus}
              onChange={(e) => handleSoilChange('phosphorus', e.target.value)}
              className="w-full p-3 bg-gray-50 border border-gray-200 rounded-lg"
            />
          </div>
          <div className="md:col-span-2">
            <label className="block text-sm font-semibold text-gray-700 mb-1">Potassium (mg/kg)</label>
            <input 
              type="number" value={soil.potassium}
              onChange={(e) => handleSoilChange('potassium', e.target.value)}
              className="w-full p-3 bg-gray-50 border border-gray-200 rounded-lg"
            />
          </div>
        </div>

        <button 
          disabled={isLoading}
          type="submit"
          className={`w-full py-4 rounded-xl font-bold text-white transition-all transform active:scale-95 shadow-lg shadow-emerald-200 ${
            isLoading ? 'bg-emerald-400 cursor-not-allowed' : 'bg-emerald-600 hover:bg-emerald-700'
          }`}
        >
          {isLoading ? (
            <span className="flex items-center justify-center gap-2">
              <svg className="animate-spin h-5 w-5 text-white" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>
              AI Analyzing...
            </span>
          ) : 'Run Smart Analysis'}
        </button>
      </form>
    </div>
  );
};
