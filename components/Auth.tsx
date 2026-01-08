
import React, { useState } from 'react';
import { Language } from '../types';
import { LANGUAGE_LIST } from '../constants';

interface AuthProps {
  onLogin: () => void;
  lang: Language;
  setLang: (l: Language) => void;
}

export const Auth: React.FC<AuthProps> = ({ onLogin, lang, setLang }) => {
  const [isSignUp, setIsSignUp] = useState(false);
  const [showLangMenu, setShowLangMenu] = useState(false);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
      <div className="bg-white w-full max-w-sm p-8 rounded-[40px] shadow-sm border border-gray-100 relative">
        <div className="flex justify-between items-start mb-6">
          <div className="flex items-center gap-2">
            <span className="text-4xl">🍃</span>
            <h1 className="text-3xl font-bold tracking-tighter">Farm Health</h1>
          </div>
          <div className="relative">
            <button onClick={() => setShowLangMenu(!showLangMenu)} className="text-2xl">🌐</button>
            {showLangMenu && (
               <div className="absolute right-0 top-10 bg-white border border-gray-200 rounded-xl shadow-xl p-2 w-56 z-10 max-h-80 overflow-y-auto">
                 {LANGUAGE_LIST.map((l) => (
                   <button 
                    key={l.code}
                    onClick={() => {setLang(l.code); setShowLangMenu(false)}} 
                    className={`w-full text-left px-4 py-3 hover:bg-gray-50 flex justify-between rounded-lg items-center ${lang === l.code ? 'bg-blue-50' : ''}`}
                   >
                     <span className="font-bold">{l.native}</span>
                     <span className="text-xs text-gray-400">({l.name})</span>
                   </button>
                 ))}
               </div>
            )}
          </div>
        </div>

        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-1">Welcome</h2>
          <p className="text-gray-400 text-sm">Sign in to your account or create a new one</p>
        </div>

        <div className="bg-gray-100 p-1.5 rounded-xl flex mb-8">
          <button onClick={() => setIsSignUp(false)} className={`flex-1 py-2 rounded-lg font-bold transition-all ${!isSignUp ? 'bg-white shadow-sm text-gray-900' : 'text-gray-500'}`}>Sign In</button>
          <button onClick={() => setIsSignUp(true)} className={`flex-1 py-2 rounded-lg font-bold transition-all ${isSignUp ? 'bg-white shadow-sm text-gray-900' : 'text-gray-500'}`}>Sign Up</button>
        </div>

        <div className="space-y-6">
          <div>
            <label className="block text-sm font-bold text-gray-900 mb-2">Email</label>
            <div className="relative">
              <span className="absolute left-4 top-4 text-gray-400">📧</span>
              <input type="email" placeholder="Enter your email" className="w-full p-4 pl-12 bg-gray-50 border border-gray-200 rounded-xl outline-none focus:ring-2 focus:ring-blue-500" />
            </div>
          </div>

          <div>
            <label className="block text-sm font-bold text-gray-900 mb-2">Password</label>
            <div className="relative">
              <span className="absolute left-4 top-4 text-gray-400">🔒</span>
              <input type="password" placeholder={isSignUp ? "Create a password" : "Enter your password"} className="w-full p-4 pl-12 bg-gray-50 border border-gray-200 rounded-xl outline-none focus:ring-2 focus:ring-blue-500" />
              <button className="absolute right-4 top-4 text-gray-400">👁️</button>
            </div>
          </div>

          {isSignUp && (
            <div>
              <label className="block text-sm font-bold text-gray-900 mb-2">Confirm Password</label>
              <div className="relative">
                <span className="absolute left-4 top-4 text-gray-400">🔒</span>
                <input type="password" placeholder="Confirm your password" className="w-full p-4 pl-12 bg-gray-50 border border-gray-200 rounded-xl outline-none focus:ring-2 focus:ring-blue-500" />
                <button className="absolute right-4 top-4 text-gray-400">👁️</button>
              </div>
            </div>
          )}

          <button onClick={onLogin} className="w-full py-4 bg-[#0F172A] text-white rounded-xl font-bold hover:bg-[#1E293B] transition-all">
            {isSignUp ? 'Create Account' : 'Sign In'}
          </button>
        </div>
      </div>
    </div>
  );
};
