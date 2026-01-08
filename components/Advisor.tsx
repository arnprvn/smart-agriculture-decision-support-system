
import React from 'react';
import { AnalysisResult, Recommendation } from '../types';

interface AdvisorProps {
  analysis: AnalysisResult | null;
}

const RecommendationCard: React.FC<{ rec: Recommendation }> = ({ rec }) => {
  const urgencyColors = {
    low: 'bg-blue-50 border-blue-200 text-blue-700',
    medium: 'bg-amber-50 border-amber-200 text-amber-700',
    high: 'bg-red-50 border-red-200 text-red-700'
  };

  const icons = {
    irrigation: '💧',
    fertilizer: '🧪',
    risk: '🚨',
    yield: '📈'
  };

  return (
    <div className={`p-4 rounded-xl border ${urgencyColors[rec.urgency]} transition-all hover:shadow-md`}>
      <div className="flex justify-between items-start mb-2">
        <div className="flex items-center gap-2">
          <span className="text-xl">{icons[rec.category]}</span>
          <h4 className="font-bold capitalize">{rec.category} Advice</h4>
        </div>
        <span className={`px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider border border-current opacity-70`}>
          {rec.urgency} Priority
        </span>
      </div>
      <h5 className="font-semibold text-sm mb-1">{rec.title}</h5>
      <p className="text-xs opacity-90 leading-relaxed">{rec.description}</p>
    </div>
  );
};

export const Advisor: React.FC<AdvisorProps> = ({ analysis }) => {
  if (!analysis) {
    return (
      <div className="text-center py-12">
        <div className="text-6xl mb-4">🤔</div>
        <h3 className="text-xl font-semibold text-gray-800">No Analysis Available</h3>
        <p className="text-gray-500 max-w-sm mx-auto mt-2">Please go to the "Farm Inputs" tab and provide your soil data to receive personalized agricultural guidance.</p>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
        <h3 className="text-lg font-bold text-gray-800 mb-4 flex items-center gap-2">
          <span>🎯</span> Key Recommendations
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {analysis.recommendations.map((rec, i) => (
            <RecommendationCard key={i} rec={rec} />
          ))}
        </div>
      </div>

      <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
        <h3 className="text-lg font-bold text-gray-800 mb-4">Quick AI Consultation</h3>
        <div className="flex gap-2">
          <input 
            type="text" 
            placeholder="Ask anything about your crop..." 
            className="flex-1 p-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
          />
          <button className="bg-emerald-600 text-white px-6 rounded-lg font-bold hover:bg-emerald-700 transition-colors">
            Ask
          </button>
        </div>
        <div className="mt-4 flex flex-wrap gap-2">
          <button className="text-[10px] bg-gray-100 text-gray-600 px-3 py-1 rounded-full hover:bg-gray-200">"When should I irrigate next?"</button>
          <button className="text-[10px] bg-gray-100 text-gray-600 px-3 py-1 rounded-full hover:bg-gray-200">"Check pest risk for rice"</button>
          <button className="text-[10px] bg-gray-100 text-gray-600 px-3 py-1 rounded-full hover:bg-gray-200">"Soil pH optimization"</button>
        </div>
      </div>
    </div>
  );
};
