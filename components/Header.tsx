
import React, { useState } from 'react';
import { Language } from '../types';
import { COLORS } from '../constants';

interface HeaderProps {
  lang: Language;
  setLang: (l: Language) => void;
  onLogout: () => void;
}

export const Header: React.FC<HeaderProps> = ({ lang, setLang, onLogout }) => {
  const [showLangs, setShowLangs] = useState(false);

  return (
    <header className="bg-[#0F172A] text-white px-6 py-4 flex justify-between items-center shadow-lg">
      <div className="flex items-center gap-2">
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" fill="white" className="opacity-90"/>
        </svg>
        <h1 className="text-xl font-bold tracking-tight">Smart Soil Monitor</h1>
      </div>
      
      <div className="flex items-center gap-6">
        <div className="relative">
          <button onClick={() => setShowLangs(!showLangs)} className="flex items-center gap-1 hover:opacity-80 transition-opacity">
            <span className="text-xl">🌐</span>
          </button>
          {showLangs && (
            <div className="absolute right-0 top-10 bg-white text-gray-800 rounded-lg shadow-xl py-2 w-48 z-50">
              <button onClick={() => {setLang('en'); setShowLangs(false)}} className="w-full text-left px-4 py-2 hover:bg-gray-100 flex justify-between">
                <span>English</span> <span className="text-gray-400">(English)</span>
              </button>
              <button onClick={() => {setLang('ta'); setShowLangs(false)}} className="w-full text-left px-4 py-2 hover:bg-gray-100 flex justify-between">
                <span>தமிழ்</span> <span className="text-gray-400">(Tamil)</span>
              </button>
            </div>
          )}
        </div>
        
        <div className="flex items-center gap-2">
          <div className="w-2.5 h-2.5 bg-emerald-500 rounded-full"></div>
          <span className="text-sm font-medium">Online</span>
        </div>
        
        <button onClick={onLogout} className="hover:opacity-80">
          <span className="text-xl">🚪</span>
        </button>
      </div>
    </header>
  );
};
