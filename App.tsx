
import React, { useState, useEffect } from 'react';
import { AppTab, SoilData, AnalysisResult, Language } from './types';
import { TRANSLATIONS, COLORS } from './constants';
import { Auth } from './components/Auth';
import { Header } from './components/Header';
import { Navigation } from './components/Navigation';
import { SoilInputView } from './components/SoilInputView';
import { SoilDataDashboard } from './components/SoilDataDashboard';
import { TipsView } from './components/TipsView';
import { WeatherView } from './components/WeatherView';
import { ReportView } from './components/ReportView';
import { getAgriculturalInsights } from './services/geminiService';

const App: React.FC = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [lang, setLang] = useState<Language>('en');
  const [activeTab, setActiveTab] = useState<AppTab>(AppTab.INPUT);
  const [history, setHistory] = useState<SoilData[]>([]);
  const [analysis, setAnalysis] = useState<AnalysisResult | null>(null);
  const [loading, setLoading] = useState(false);
  const [location, setLocation] = useState('Global Region');

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (pos) => setLocation(`${pos.coords.latitude.toFixed(1)}, ${pos.coords.longitude.toFixed(1)}`),
        () => {}
      );
    }
  }, []);

  const handleRecordData = async (data: SoilData) => {
    setLoading(true);
    try {
      const result = await getAgriculturalInsights(data, location);
      setHistory(prev => [data, ...prev]);
      setAnalysis(result);
      setActiveTab(AppTab.TIPS);
    } catch (error) {
      console.error(error);
      alert("AI analysis failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  if (!isAuthenticated) {
    return <Auth onLogin={() => setIsAuthenticated(true)} lang={lang} setLang={setLang} />;
  }

  return (
    <div className="min-h-screen bg-gray-50 pb-10">
      <Header lang={lang} setLang={setLang} onLogout={() => setIsAuthenticated(false)} />
      <div className="max-w-xl mx-auto px-4 mt-6">
        <Navigation activeTab={activeTab} setActiveTab={setActiveTab} />
        
        <div className="mt-6">
          {activeTab === AppTab.INPUT && <SoilInputView onRecord={handleRecordData} loading={loading} lang={lang} />}
          {activeTab === AppTab.DATA && <SoilDataDashboard history={history} />}
          {activeTab === AppTab.TIPS && <TipsView analysis={analysis} crop={history[0]?.crop || 'crop'} />}
          {activeTab === AppTab.WEATHER && <WeatherView location={location} setLocation={setLocation} />}
          {activeTab === AppTab.REPORT && <ReportView history={history} />}
        </div>
      </div>
    </div>
  );
};

export default App;
