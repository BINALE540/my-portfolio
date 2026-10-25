'use client';

import React from 'react';
import { PERSONAL_BIO } from '../data/portfolioData';

interface TerminalBoxProps {
  darkMode: boolean;
}

export const TerminalBox: React.FC<TerminalBoxProps> = ({ darkMode }) => {
  return (
    <div className={`p-6 rounded-xl border font-mono text-sm space-y-4 shadow-xl transition-colors ${
      darkMode ? 'border-slate-800 bg-slate-900/60 text-slate-300' : 'border-slate-200 bg-white text-slate-800 shadow-slate-200/50'
    }`}>
      <div className={`pb-3 border-b flex items-center gap-2 ${darkMode ? 'border-slate-800 text-slate-400' : 'border-slate-200 text-slate-500'}`}>
        <span className="h-3 w-3 rounded-full bg-red-500/80 inline-block"></span>
        <span className="h-3 w-3 rounded-full bg-yellow-500/80 inline-block"></span>
        <span className="h-3 w-3 rounded-full bg-green-500/80 inline-block"></span>
        <span className="ml-2 text-xs font-semibold">init_company_info.sh</span>
      </div>
      
      <div className="space-y-2 leading-relaxed">
        <p className="flex items-center gap-1.5 font-bold">
          <span className="text-cyan-600 dark:text-cyan-400">bitech-admin@core:~#</span>
          <span>./init_company_info.sh</span>
          <span className="inline-block w-2 h-4 bg-cyan-500 animate-pulse ml-1" />
        </p>
        
        <p><span className="text-amber-600 dark:text-amber-400 font-semibold">[+] Enterprise   :</span> {PERSONAL_BIO.company}</p>
        <p><span className="text-amber-600 dark:text-amber-400 font-semibold">[+] Lead Engineer:</span> {PERSONAL_BIO.name}</p>
        <p><span className="text-amber-600 dark:text-amber-400 font-semibold">[+] Education    :</span> {PERSONAL_BIO.degree}</p>
        <p><span className="text-amber-600 dark:text-amber-400 font-semibold">[+] ICT Practical:</span> {PERSONAL_BIO.experience}</p>
        <p><span className="text-amber-600 dark:text-amber-400 font-semibold">[+] ERP Expertise:</span> {PERSONAL_BIO.erpSpecialization}</p>
        <p><span className="text-amber-600 dark:text-amber-400 font-semibold">[+] Cisco Certs  :</span> {PERSONAL_BIO.certifications.join(' | ')}</p>
        
        <p className={`pt-2 font-sans text-xs sm:text-sm leading-relaxed ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
          {PERSONAL_BIO.summary}
        </p>
      </div>
    </div>
  );
};