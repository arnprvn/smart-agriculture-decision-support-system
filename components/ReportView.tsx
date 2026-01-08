
import React from 'react';
import { SoilData } from '../types';

export const ReportView: React.FC<{ history: SoilData[] }> = ({ history }) => {
  return (
    <div className="space-y-6">
      <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
        <h2 className="text-2xl font-bold text-gray-900 mb-1 flex items-center gap-2">
          <span>📄</span> Generate Report
        </h2>
        <p className="text-gray-400 text-sm mb-8">Download a comprehensive PDF report of your soil health data</p>
        
        <div className="bg-blue-50/30 p-8 rounded-3xl mb-8">
          <h3 className="text-lg font-bold text-gray-900 mb-4">Report Contents:</h3>
          <ul className="space-y-3 text-gray-500 font-medium">
            <li className="flex items-center gap-2"><span>•</span> Summary statistics and averages</li>
            <li className="flex items-center gap-2"><span>•</span> Latest soil readings</li>
            <li className="flex items-center gap-2"><span>•</span> Historical data table ({history.length} entries)</li>
            <li className="flex items-center gap-2"><span>•</span> Soil health analysis and recommendations</li>
            <li className="flex items-center gap-2"><span>•</span> Crop suggestions based on current conditions</li>
          </ul>
        </div>

        <div className="bg-white p-6 rounded-3xl border border-gray-100 flex justify-between items-center">
          <div>
            <h4 className="font-bold text-gray-900">Soil Health Report</h4>
            <p className="text-gray-400 text-sm">{history.length} readings • Generated on {new Date().toLocaleDateString()}</p>
          </div>
          <button className="bg-[#0F172A] text-white px-8 py-4 rounded-xl font-bold flex items-center gap-2 hover:bg-[#1E293B] transition-colors">
            <span>📥</span> Download PDF
          </button>
        </div>
      </div>
    </div>
  );
};
