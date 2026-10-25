'use client';

import React from 'react';
import { MessageSquare, Phone, FileText } from 'lucide-react';
import { PERSONAL_BIO } from '../data/portfolioData';

interface HeroSectionProps {
  currentText: string;
  imageError: boolean;
  setImageError: (val: boolean) => void;
  openTerminal: () => void;
  darkMode: boolean;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  currentText,
  imageError,
  setImageError,
  openTerminal,
  darkMode,
}) => {
  return (
    <section id="about" className="space-y-8 pt-6">
      
      {/* Roles Banner */}
      <div className={`inline-flex flex-wrap items-center gap-2 px-4 py-2 rounded-full border text-xs font-mono shadow-md ${
        darkMode 
          ? 'border-pink-500/30 bg-gradient-to-r from-pink-500/20 via-purple-500/20 to-cyan-500/20 text-slate-200' 
          : 'border-blue-300 bg-blue-50 text-slate-800'
      }`}>
        <span className="relative flex h-2.5 w-2.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-pink-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-pink-500"></span>
        </span>
        <span className="font-bold text-pink-600 dark:text-pink-400">OPEN TO ROLES:</span>
        <span>Network & Systems Admin | Systems Developer | IT Support & ERP Specialist</span>
      </div>

      {/* Main Headline & Bio Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
        <div className="md:col-span-2 space-y-4">
          <h1 className={`text-4xl md:text-5xl font-extrabold tracking-tight ${darkMode ? 'text-white' : 'text-slate-900'}`}>
            Engineered for <span className="italic font-extrabold text-cyan-600 dark:text-cyan-400 -skew-x-6 inline-block">Speed</span> & Security.
          </h1>
          
          <div className="text-xl text-cyan-600 dark:text-cyan-400 font-mono h-8 flex items-center gap-1">
            <span>{currentText}</span>
            <span className="inline-block w-2.5 h-6 bg-cyan-500 animate-pulse ml-1" />
          </div>

          <p className={`leading-relaxed text-sm md:text-base font-sans ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
            Founder & Lead Systems Engineer at <span className="font-extrabold text-cyan-600 dark:text-cyan-400">{PERSONAL_BIO.company}</span>. B.Sc. Information Systems Graduate from Maseno University with practical ICT Directorate experience at Kibabii University. Cisco certified in Cybersecurity & Networking.
          </p>
        </div>

        {/* Profile Avatar Frame */}
        <div className="flex justify-center">
          <div className="relative w-48 h-48 md:w-56 md:h-56 rounded-full p-1 bg-gradient-to-tr from-cyan-500 via-indigo-500 to-pink-500 shadow-2xl">
            <div className={`w-full h-full rounded-full border overflow-hidden relative flex items-center justify-center ${
              darkMode ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200'
            }`}>
              {!imageError ? (
                <img 
                  src="/profile.jpeg" 
                  alt={PERSONAL_BIO.name} 
                  onError={() => setImageError(true)}
                  className="w-full h-full object-cover rounded-full hover:scale-105 transition-transform duration-300"
                />
              ) : (
                <div className="flex flex-col items-center justify-center p-4 text-center">
                  <span className="text-3xl font-extrabold text-cyan-500 font-mono">RBK</span>
                  <span className="text-xs text-slate-500 mt-1 font-mono">Rodney Khabanje</span>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex flex-wrap gap-4 pt-2">
        <a 
          href="https://wa.me/254757468025" 
          target="_blank" 
          rel="noreferrer" 
          className="flex items-center gap-2 px-4 py-2.5 rounded-lg border border-emerald-500/40 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 hover:bg-emerald-500/20 transition-all font-mono text-xs font-semibold"
        >
          <MessageSquare className="w-4 h-4"/> WhatsApp (+254 757 468 025)
        </a>

        <a 
          href="tel:+254759314735" 
          className="flex items-center gap-2 px-4 py-2.5 rounded-lg border border-cyan-500/40 bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 hover:bg-cyan-500/20 transition-all font-mono text-xs font-semibold"
        >
          <Phone className="w-4 h-4"/> Call (+254 759 314 735)
        </a>

        <a 
          href="/Rodney_Binale_Khabanje_Cv.pdf" 
          download="Rodney_Binale_Khabanje_Cv.pdf"
          target="_blank"
          rel="noreferrer"
          className={`flex items-center gap-2 px-4 py-2.5 rounded-lg border font-mono text-xs transition-all ${
            darkMode ? 'border-slate-800 bg-slate-900 text-slate-300 hover:border-cyan-500' : 'border-slate-200 bg-white text-slate-700 hover:border-cyan-500'
          }`}
        >
          <FileText className="w-4 h-4 text-cyan-500"/> Download CV (PDF)
        </a>

        <button 
          onClick={openTerminal}
          className="px-5 py-2.5 rounded-lg bg-cyan-600 dark:bg-cyan-500 text-white dark:text-slate-950 font-semibold hover:opacity-90 transition-all text-xs font-mono"
        >
          Open Web CLI
        </button>
      </div>
    </section>
  );
};