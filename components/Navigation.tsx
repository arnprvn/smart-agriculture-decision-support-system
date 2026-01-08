
import React from 'react';
import { AppTab } from '../types';

interface NavProps {
  activeTab: AppTab;
  setActiveTab: (t: AppTab) => void;
}

export const Navigation: React.FC<NavProps> = ({ activeTab, setActiveTab }) => {
  const tabs = [
    { id: AppTab.INPUT, label: 'Input', icon: '🍃' },
    { id: AppTab.DATA, label: 'Data', icon: '📊' },
    { id: AppTab.TIPS, label: 'Tips', icon: '💡' },
    { id: AppTab.WEATHER, label: 'Weather', icon: '☁️' },
    { id: AppTab.REPORT, label: 'Report', icon: '📄' },
  ];

  return (
    <nav className="bg-gray-100 p-1.5 rounded-2xl flex justify-between shadow-inner">
      {tabs.map(tab => (
        <button
          key={tab.id}
          onClick={() => setActiveTab(tab.id)}
          className={`flex-1 flex flex-col items-center py-2.5 rounded-xl transition-all duration-200 ${
            activeTab === tab.id 
              ? 'bg-white shadow-sm text-gray-800' 
              : 'text-gray-500 hover:text-gray-700'
          }`}
        >
          <span className="text-xl mb-1">{tab.icon}</span>
          <span className="text-[11px] font-bold tracking-wide">{tab.label}</span>
        </button>
      ))}
    </nav>
  );
};
