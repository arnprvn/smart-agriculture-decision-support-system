
import React, { useState, useEffect } from 'react';
import { AppTab, SoilData, AnalysisResult, Language } from './types';
import { TRANSLATIONS, LANGUAGE_LIST, TranslationType } from './constants';
import { Auth } from './components/Auth';
import { Header } from './components/Header';
import { Navigation } from './components/Navigation';
import { SoilInputView } from './components/SoilInputView';
import { SoilDataDashboard } from './components/SoilDataDashboard';
import { TipsView } from './components/TipsView';
import { WeatherView } from './components/WeatherView';
import { ReportView } from './components/ReportView';
import { getAgriculturalInsights, translateUIStrings } from './services/geminiService';

const App: React.FC = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [lang, setLang] = useState<Language>('en');
  const [uiTranslations, setUiTranslations] = useState<TranslationType>(TRANSLATIONS.en);
  const [translatingUI, setTranslatingUI] = useState(false);
  
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

  // Effect to translate UI strings whenever the language changes
  useEffect(() => {
    const performTranslation = async () => {
      if (lang === 'en') {
        setUiTranslations(TRANSLATIONS.en);
        return;
      }
      
      // Check if we have a static translation first
      // Fix: Removed redundant check lang !== 'en' as it's already handled above which caused narrowing issues
      if (TRANSLATIONS[lang] && Object.keys(TRANSLATIONS[lang]).length > 2) {
         setUiTranslations(TRANSLATIONS[lang]);
         return;
      }

      setTranslatingUI(true);
      try {
        const langName = LANGUAGE_LIST.find(l => l.code === lang)?.name || lang;
        const translated = await translateUIStrings(TRANSLATIONS.en as any, langName);
        setUiTranslations(translated as TranslationType);
      } catch (err) {
        console.error("Failed to translate UI:", err);
        setUiTranslations(TRANSLATIONS.en);
      } finally {
        setTranslatingUI(false);
      }
    };

    performTranslation();
  }, [lang]);

  const handleRecordData = async (data: SoilData) => {
    setLoading(true);
    try {
      const languageName = LANGUAGE_LIST.find(l => l.code === lang)?.name || "English";
      const result = await getAgriculturalInsights(data, location, languageName);
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
    return <Auth onLogin={() => setIsAuthenticated(true)} lang={lang} setLang={setLang} uiTranslations={uiTranslations} />;
  }

  return (
    <div className="min-h-screen bg-gray-50 pb-10">
      <Header lang={lang} setLang={setLang} onLogout={() => setIsAuthenticated(false)} uiTranslations={uiTranslations} />
      
      {translatingUI && (
        <div className="fixed inset-0 bg-white/60 backdrop-blur-sm z-[100] flex flex-col items-center justify-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mb-4"></div>
          <p className="text-gray-900 font-bold">Translating UI Labels...</p>
        </div>
      )}

      <div className="max-w-xl mx-auto px-4 mt-6">
        <Navigation activeTab={activeTab} setActiveTab={setActiveTab} />
        
        <div className="mt-6">
          {activeTab === AppTab.INPUT && <SoilInputView onRecord={handleRecordData} loading={loading} lang={lang} uiTranslations={uiTranslations} />}
          {activeTab === AppTab.DATA && <SoilDataDashboard history={history} lang={lang} uiTranslations={uiTranslations} />}
          {activeTab === AppTab.TIPS && <TipsView analysis={analysis} crop={history[0]?.crop || 'crop'} lang={lang} uiTranslations={uiTranslations} />}
          {activeTab === AppTab.WEATHER && <WeatherView location={location} setLocation={setLocation} lang={lang} uiTranslations={uiTranslations} />}
          {activeTab === AppTab.REPORT && <ReportView history={history} lang={lang} uiTranslations={uiTranslations} />}
        </div>
      </div>
    </div>
  );
};

export default App;