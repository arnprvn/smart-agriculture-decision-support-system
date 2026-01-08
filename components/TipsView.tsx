
import React from 'react';
import { AnalysisResult, Language } from '../types';
import { TranslationType } from '../constants';

interface Props {
  analysis: AnalysisResult | null;
  crop: string;
  lang: Language;
  uiTranslations: TranslationType;
}

export const TipsView: React.FC<Props> = ({ analysis, crop, lang, uiTranslations }) => {
  const t = uiTranslations;

  if (!analysis) return (
    <div className="bg-white p-12 rounded-3xl shadow-sm text-center">
      <div className="text-5xl mb-4">🔍</div>
      <h3 className="text-xl font-bold">Waiting for soil data...</h3>
      <p className="text-gray-400 mt-2">Record your soil parameters to get smart advice.</p>
    </div>
  );

  return (
    <div className="space-y-6">
      <div className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100">
        <h2 className="text-2xl font-bold text-gray-900 mb-1 flex items-center gap-2">
          <span>💡</span> {t.tips}
        </h2>
        <p className="text-gray-400 text-sm">Based on your latest soil readings - {crop}</p>
      </div>

      <div className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100">
        <h3 className="text-lg font-bold text-gray-800 mb-4">Soil Health Status {crop}</h3>
        <div className="space-y-3">
          {analysis.status.map((s, i) => (
            <div key={i} className="flex items-center gap-3">
              <span className="text-lg">
                {s.type === 'success' ? '✅' : s.type === 'warning' ? '⚠️' : '❌'}
              </span>
              <span className={`text-sm ${s.type === 'success' ? 'text-emerald-700' : 'text-amber-700'}`}>
                {s.text}
              </span>
            </div>
          ))}
        </div>
      </div>

      {analysis.deficiencies.map((def, i) => (
        <div key={i} className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100">
          <div className="flex justify-between items-start mb-2">
            <h4 className="font-bold text-gray-900">{def.title}</h4>
            <span className="bg-red-500 text-white text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-widest">
              {def.urgency}
            </span>
          </div>
          <p className="text-sm text-gray-500 leading-relaxed">{def.description}</p>
        </div>
      ))}

      <div className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100">
        <h3 className="text-lg font-bold text-gray-800 mb-4 flex items-center gap-2">
          <span>⚗️</span> Recommended Fertilizers for {crop}
        </h3>
        <div className="space-y-2">
          {analysis.fertilizers.map((f, i) => (
            <div key={i} className="bg-gray-50 p-4 rounded-xl text-sm font-medium text-gray-700 border border-gray-100">
              {f}
            </div>
          ))}
        </div>
      </div>

      <div className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100">
        <h3 className="text-lg font-bold text-gray-800 mb-4 flex items-center gap-2">
          <span>🛡️</span> Pest Management {crop}
        </h3>
        <div className="space-y-2">
          {analysis.pestManagement.map((p, i) => (
            <div key={i} className="bg-gray-50 p-4 rounded-xl text-sm font-medium text-gray-700 border border-gray-100">
              {p}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
