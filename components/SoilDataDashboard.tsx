
import React from 'react';
import { SoilData, Language } from '../types';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { TranslationType } from '../constants';

interface Props {
  history: SoilData[];
  lang: Language;
  uiTranslations: TranslationType;
}

export const SoilDataDashboard: React.FC<Props> = ({ history, lang, uiTranslations }) => {
  const t = uiTranslations;
  const latest = history[0] || { nitrogen: 0, ph: 0, moisture: 0 };
  const count = history.length;

  const avgs = {
    nitrogen: 1.7,
    ph: 3.5,
    moisture: 8.9
  };

  const chartData = [...history].reverse().map((h, i) => ({
    name: i + 1,
    nitrogen: h.nitrogen,
    ph: h.ph,
    moisture: h.moisture
  }));

  return (
    <div className="space-y-6">
      <div className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100">
        <h2 className="text-2xl font-bold text-gray-900 mb-1 flex items-center gap-2">
          <span>📈</span> {t.dashboard}
        </h2>
        <p className="text-gray-400 text-sm">{count} {t.readings}</p>
      </div>

      <div className="grid grid-cols-3 gap-3">
        <StatCard label={t.nitrogen} value={`${latest.nitrogen}%`} avg={avgs.nitrogen} color="text-yellow-600" lang={lang} t={t} />
        <StatCard label={t.ph} value={latest.ph.toString()} avg={avgs.ph} color="text-blue-600" lang={lang} t={t} />
        <StatCard label={t.moisture} value={`${latest.moisture}%`} avg={avgs.moisture} color="text-cyan-600" lang={lang} t={t} />
      </div>

      <div className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100">
        <h3 className="text-lg font-bold text-gray-800 mb-6 flex items-center gap-2">
          <span>📉</span> {t.trends}
        </h3>
        <div className="h-64">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={chartData}>
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E2E8F0" />
              <XAxis dataKey="name" hide />
              <YAxis axisLine={false} tickLine={false} tick={{fill: '#94A3B8', fontSize: 12}} />
              <Tooltip />
              <Line type="monotone" dataKey="nitrogen" stroke="#F59E0B" strokeWidth={3} dot={{r: 4}} />
              <Line type="monotone" dataKey="ph" stroke="#3B82F6" strokeWidth={3} dot={{r: 4}} />
              <Line type="monotone" dataKey="moisture" stroke="#06B6D4" strokeWidth={3} dot={{r: 4}} />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

const StatCard = ({ label, value, avg, color, lang, t }: any) => {
  return (
    <div className="bg-white p-5 rounded-2xl shadow-sm border border-gray-100 text-center">
      <div className={`text-2xl font-black mb-1 ${color}`}>{value}</div>
      <div className="text-[11px] font-bold text-gray-500 uppercase tracking-tighter mb-0.5 leading-tight">{label}</div>
      <div className="text-[10px] text-gray-400">{t.avg}: {avg}%</div>
    </div>
  );
};
