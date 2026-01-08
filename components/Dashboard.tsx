
import React from 'react';
import { 
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
  BarChart, Bar, Cell
} from 'recharts';
import { MOCK_CHART_DATA, COLORS } from '../constants';
import { AnalysisResult } from '../types';

interface DashboardProps {
  analysis: AnalysisResult | null;
}

export const Dashboard: React.FC<DashboardProps> = ({ analysis }) => {
  const stats = [
    { label: 'Predicted Yield', value: analysis?.predictedYield || 'N/A', icon: '🌾' },
    { label: 'Suitability', value: `${analysis?.suitabilityScore || 0}%`, icon: '✅' },
    { label: 'Active Risks', value: analysis?.recommendations.filter(r => r.category === 'risk').length || 0, icon: '⚠️' },
    { label: 'Health Index', value: 'Optimal', icon: '💚' },
  ];

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {stats.map((stat, idx) => (
          <div key={idx} className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm flex flex-col items-center text-center">
            <span className="text-2xl mb-1">{stat.icon}</span>
            <span className="text-sm text-gray-500 font-medium">{stat.label}</span>
            <span className="text-xl font-bold text-emerald-700">{stat.value}</span>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
          <h3 className="text-lg font-semibold mb-4 text-gray-800">Yield Projections (Estimated)</h3>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={MOCK_CHART_DATA}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="yield" stroke={COLORS.primary} strokeWidth={3} dot={{ r: 6 }} activeDot={{ r: 8 }} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
          <h3 className="text-lg font-semibold mb-4 text-gray-800">Resource Utilization</h3>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={[
                { name: 'Water', val: 70 },
                { name: 'N', val: 45 },
                { name: 'P', val: 80 },
                { name: 'K', val: 65 },
              ]}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="val" radius={[4, 4, 0, 0]}>
                  { [0, 1, 2, 3].map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={index === 0 ? COLORS.info : COLORS.primary} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      {analysis && (
        <div className="bg-emerald-50 border border-emerald-100 p-6 rounded-xl">
          <h3 className="text-lg font-bold text-emerald-900 mb-2">Expert AI Analysis</h3>
          <p className="text-emerald-800 leading-relaxed">{analysis.riskAnalysis}</p>
        </div>
      )}
    </div>
  );
};
