
import React, { useState } from 'react';
import { SoilData, Language } from '../types';
import { TRANSLATIONS } from '../constants';

interface Props {
  onRecord: (d: SoilData) => void;
  loading: boolean;
  lang: Language;
}

export const SoilInputView: React.FC<Props> = ({ onRecord, loading, lang }) => {
  const t = TRANSLATIONS[lang];
  const [formData, setFormData] = useState({
    nitrogen: '',
    ph: '',
    moisture: '',
    crop: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onRecord({
      nitrogen: parseFloat(formData.nitrogen),
      ph: parseFloat(formData.ph),
      moisture: parseFloat(formData.moisture),
      crop: formData.crop,
      timestamp: new Date().toISOString()
    });
  };

  return (
    <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
      <h2 className="text-2xl font-bold text-gray-900 mb-1 flex items-center gap-2">
        <span>🌡️</span> {t.recordData}
      </h2>
      <p className="text-gray-400 text-sm mb-8">Enter nitrogen level (0-100 ppm)</p>
      
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="flex items-center gap-2 text-sm font-bold text-gray-800 mb-2">
            <span className="text-yellow-500">⚡</span> {t.nitrogen}
          </label>
          <input 
            required type="number" step="0.1" placeholder="e.g., 2.5"
            value={formData.nitrogen} onChange={e => setFormData({...formData, nitrogen: e.target.value})}
            className="w-full p-4 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none transition-all"
          />
        </div>

        <div>
          <label className="flex items-center gap-2 text-sm font-bold text-gray-800 mb-2">
            <span className="text-blue-500">🧪</span> {t.ph}
          </label>
          <input 
            required type="number" step="0.1" placeholder="e.g., 6.5"
            value={formData.ph} onChange={e => setFormData({...formData, ph: e.target.value})}
            className="w-full p-4 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none transition-all"
          />
        </div>

        <div>
          <label className="flex items-center gap-2 text-sm font-bold text-gray-800 mb-2">
            <span className="text-cyan-500">💧</span> {t.moisture}
          </label>
          <input 
            required type="number" step="0.1" placeholder="e.g., 35.0"
            value={formData.moisture} onChange={e => setFormData({...formData, moisture: e.target.value})}
            className="w-full p-4 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none transition-all"
          />
        </div>

        <div>
          <label className="flex items-center gap-2 text-sm font-bold text-gray-800 mb-2">
            <span className="text-emerald-500">🌱</span> {t.plant}
          </label>
          <select 
            required
            value={formData.crop} onChange={e => setFormData({...formData, crop: e.target.value})}
            className="w-full p-4 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none appearance-none"
          >
            <option value="">Select your plant</option>
            <option value="Cotton">Cotton</option>
            <option value="Rice">Rice</option>
            <option value="Wheat">Wheat</option>
            <option value="Maize">Maize</option>
          </select>
        </div>

        <button 
          disabled={loading}
          className={`w-full py-4 rounded-xl font-bold text-white transition-all transform active:scale-[0.98] ${
            loading ? 'bg-gray-400' : 'bg-[#1E293B] hover:bg-[#0F172A]'
          }`}
        >
          {loading ? 'Processing...' : t.record}
        </button>
      </form>
    </div>
  );
};
