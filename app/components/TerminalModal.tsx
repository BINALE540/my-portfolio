'use client';

import React, { useState, useEffect, useRef } from 'react';
import { X } from 'lucide-react';
import { PERSONAL_BIO, PROGRESS_SKILLS, SERVICES_LIST, PROJECTS } from '../data/portfolioData';

interface TerminalModalProps {
  isOpen: boolean;
  onClose: () => void;
  darkMode: boolean;
}

export const TerminalModal: React.FC<TerminalModalProps> = ({ isOpen, onClose, darkMode }) => {
  const [inputVal, setInputVal] = useState('');
  const [terminalHistory, setTerminalHistory] = useState<Array<{ command?: string; output: React.ReactNode }>>([
    {
      output: (
        <div className="text-slate-400 font-mono text-xs">
          <p className="text-cyan-400 font-bold">BI-TECH Digital Solutions — Web Shell Interface v1.0.0</p>
          <p className="text-xs">Type <span className="text-amber-400">help</span> for commands or <span className="text-amber-400">exit</span> to close.</p>
        </div>
      ),
    },
  ]);

  const terminalEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen) {
      terminalEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [terminalHistory, isOpen]);

  if (!isOpen) return null;

  const handleCommandSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const cmd = inputVal.trim().toLowerCase();
    if (!cmd) return;

    let responseOutput: React.ReactNode = null;

    switch (cmd) {
      case 'help':
        responseOutput = (
          <div className="space-y-1 text-slate-300 text-xs font-mono">
            <p className="text-cyan-400 font-semibold">Available Shell Commands:</p>
            <p><span className="text-amber-400 w-28 inline-block">help</span> - Display available commands</p>
            <p><span className="text-amber-400 w-28 inline-block">skills</span> - Technical capabilities & certifications</p>
            <p><span className="text-amber-400 w-28 inline-block">projects</span> - Core engineering & ERP projects</p>
            <p><span className="text-amber-400 w-28 inline-block">services</span> - BI-TECH IT & system services</p>
            <p><span className="text-amber-400 w-28 inline-block">about</span> - Company overview & education</p>
            <p><span className="text-amber-400 w-28 inline-block">resume</span> - Download Curriculum Vitae (PDF)</p>
            <p><span className="text-amber-400 w-28 inline-block">contact</span> - Direct contact details</p>
            <p><span className="text-amber-400 w-28 inline-block">clear</span> - Clear terminal buffer</p>
            <p><span className="text-amber-400 w-28 inline-block">exit</span> - Close terminal overlay</p>
          </div>
        );
        break;

      case 'skills':
        responseOutput = (
          <div className="space-y-1 text-slate-300 font-mono text-xs">
            <p className="text-cyan-400 font-semibold">[+] TECHNICAL SKILLS & CERTIFICATIONS</p>
            {PROGRESS_SKILLS.map((s, idx) => (
              <p key={idx}>├── <span className="text-amber-400">{s.name}:</span> {s.level}%</p>
            ))}
            <p>└── <span className="text-amber-400">Cisco Certs:</span> {PERSONAL_BIO.certifications.join(', ')}</p>
          </div>
        );
        break;

      case 'projects':
        responseOutput = (
          <div className="space-y-2 text-slate-300 text-xs font-mono">
            <p className="text-cyan-400 font-semibold">[+] CORE PROJECTS & OPERATIONS</p>
            {PROJECTS.map((p, idx) => (
              <div key={idx}>
                <p>{idx + 1}. <span className="text-emerald-400 font-bold">[{p.status}]</span> {p.title}</p>
                <p className="text-slate-400 pl-4">{p.description}</p>
              </div>
            ))}
          </div>
        );
        break;

      case 'about':
        responseOutput = (
          <div className="text-slate-300 text-xs leading-relaxed space-y-1 font-mono">
            <p className="text-cyan-400 font-bold">{PERSONAL_BIO.company}</p>
            <p>Lead Engineer: {PERSONAL_BIO.name}</p>
            <p>Degree: {PERSONAL_BIO.degree}</p>
            <p>Experience: {PERSONAL_BIO.experience}</p>
          </div>
        );
        break;

      case 'resume':
      case 'cv':
        responseOutput = (
          <div className="space-y-1 text-xs font-mono text-slate-300">
            <p className="text-cyan-400 font-bold">[+] RESUME / CV DOWNLOAD</p>
            <a 
              href="/Rodney_Binale_Khabanje_Cv.pdf" 
              target="_blank" 
              download="Rodney_Binale_Khabanje_Cv.pdf"
              className="text-amber-400 underline font-semibold hover:text-cyan-400"
            >
              Click here to download Rodney_Binale_Khabanje_Cv.pdf
            </a>
          </div>
        );
        break;

      case 'contact':
        responseOutput = (
          <div className="text-xs text-slate-300 font-mono space-y-1">
            <p><span className="text-cyan-400">Email:</span> rodneykbinalekhabanje@gmail.com</p>
            <p><span className="text-cyan-400">Calls:</span> +254 759 314 735</p>
            <p><span className="text-cyan-400">WhatsApp:</span> +254 757 468 025</p>
          </div>
        );
        break;

      case 'clear':
        setTerminalHistory([]);
        setInputVal('');
        return;

      case 'exit':
        onClose();
        setInputVal('');
        return;

      default:
        responseOutput = (
          <p className="text-red-400 text-xs font-mono">
            zsh: command not found: {cmd}. Type <span className="text-amber-400 underline">help</span> for commands.
          </p>
        );
        break;
    }

    setTerminalHistory((prev) => [...prev, { command: inputVal, output: responseOutput }]);
    setInputVal('');
  };

  return (
    <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="w-full max-w-2xl bg-slate-900 border border-slate-800 rounded-xl shadow-2xl overflow-hidden flex flex-col h-[480px]">
        
        {/* Header */}
        <div className="bg-slate-950 px-4 py-3 border-b border-slate-800 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <span className="h-3 w-3 rounded-full bg-red-500/80 inline-block"></span>
            <span className="h-3 w-3 rounded-full bg-yellow-500/80 inline-block"></span>
            <span className="h-3 w-3 rounded-full bg-green-500/80 inline-block"></span>
            <span className="ml-2 text-xs font-mono text-slate-400">bitech-admin@core:~ (bash)</span>
          </div>
          <button onClick={onClose} className="text-slate-400 hover:text-white">
            <X className="w-5 h-5"/>
          </button>
        </div>

        {/* Body */}
        <div className="flex-1 p-4 overflow-y-auto font-mono text-sm space-y-4 text-slate-100">
          {terminalHistory.map((item, index) => (
            <div key={index} className="space-y-1">
              {item.command !== undefined && (
                <div className="flex items-center gap-2 text-slate-300">
                  <span className="text-cyan-400 font-bold">bitech-admin@core:~$</span>
                  <span>{item.command}</span>
                </div>
              )}
              <div>{item.output}</div>
            </div>
          ))}
          
          <form onSubmit={handleCommandSubmit} className="flex items-center gap-2 pt-2">
            <span className="text-cyan-400 font-bold">bitech-admin@core:~$</span>
            <div className="flex-1 flex items-center">
              <input
                type="text"
                value={inputVal}
                onChange={(e) => setInputVal(e.target.value)}
                autoFocus
                placeholder="Type 'help'..."
                className="bg-transparent text-slate-100 outline-none font-mono text-sm w-full"
              />
              <span className="inline-block w-2 h-4 bg-cyan-400 animate-pulse -ml-1 pointer-events-none" />
            </div>
          </form>
          <div ref={terminalEndRef} />
        </div>

        <div className="bg-slate-950/60 px-4 py-2 border-t border-slate-800 text-xs text-slate-500 font-mono flex justify-between">
          <span>Press ESC or type &apos;exit&apos; to quit</span>
          <span>v1.0.0</span>
        </div>

      </div>
    </div>
  );
};