// app/page.tsx
'use client';

import React, { useState, useEffect } from 'react';
import { Cpu, Globe } from 'lucide-react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { TerminalBox } from './components/TerminalBox';
import { HealthMonitor } from './components/HealthMonitor';
import { TerminalModal } from './components/TerminalModal';
import { ProjectsSection } from './components/ProjectsSection';
import { ContactSection } from './components/ContactSection';
import { PROGRESS_SKILLS, SERVICES_LIST, PERSONAL_BIO } from './data/portfolioData';

export default function Portfolio() {
  const titles = [
    "Founder & Lead Engineer @ BI-TECH Digital Solutions",
    "Network & Systems Administrator",
    "Software & Systems Developer",
    "IT Support & ERP Systems Specialist"
  ];

  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [imageError, setImageError] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isTerminalOpen, setIsTerminalOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(true);

  // Typewriter effect
  useEffect(() => {
    const fullText = titles[currentTitleIndex];
    const typingSpeed = isDeleting ? 40 : 80;

    const timer = setTimeout(() => {
      if (!isDeleting) {
        setCurrentText(fullText.substring(0, currentText.length + 1));
        if (currentText === fullText) {
          setTimeout(() => setIsDeleting(true), 1800);
        }
      } else {
        setCurrentText(fullText.substring(0, currentText.length - 1));
        if (currentText === '') {
          setIsDeleting(false);
          setCurrentTitleIndex((prev) => (prev + 1) % titles.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [currentText, isDeleting, currentTitleIndex]);

  // Keyboard Shortcut (Ctrl + ~)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && (e.key === '`' || e.key === '~')) {
        e.preventDefault();
        setIsTerminalOpen((prev) => !prev);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <div className={`min-h-screen font-sans transition-colors duration-300 ${
      darkMode ? 'bg-slate-950 text-slate-100' : 'bg-slate-50 text-slate-900'
    }`}>
      
      <Navbar 
        darkMode={darkMode}
        setDarkMode={setDarkMode}
        isMobileMenuOpen={isMobileMenuOpen}
        setIsMobileMenuOpen={setIsMobileMenuOpen}
        openTerminal={() => setIsTerminalOpen(true)}
      />

      <main className="max-w-5xl mx-auto px-6 py-12 space-y-20">
        
        <HealthMonitor darkMode={darkMode} />

        <HeroSection 
          currentText={currentText}
          imageError={imageError}
          setImageError={setImageError}
          openTerminal={() => setIsTerminalOpen(true)}
          darkMode={darkMode}
        />

        <TerminalBox darkMode={darkMode} />

        {/* Technical Skills & Certifications */}
        <section id="skills" className="space-y-8">
          <div className={`border-b pb-4 ${darkMode ? 'border-slate-800' : 'border-slate-200'}`}>
            <h2 className={`text-2xl font-bold flex items-center gap-2 ${darkMode ? 'text-white' : 'text-slate-900'}`}>
              <Cpu className="w-6 h-6 text-cyan-500"/> Technical Capabilities & Cisco Certifications
            </h2>
          </div>

          <div className="space-y-4">
            {PROGRESS_SKILLS.map((skill, idx) => (
              <div key={idx} className="space-y-1.5 font-mono">
                <div className={`flex justify-between text-xs ${darkMode ? 'text-slate-300' : 'text-slate-700'}`}>
                  <span>{skill.name}</span>
                  <span className="text-cyan-500 font-bold">{skill.level}%</span>
                </div>
                <div className={`w-full h-2.5 rounded-full border overflow-hidden ${
                  darkMode ? 'bg-slate-900 border-slate-800' : 'bg-slate-200 border-slate-300'
                }`}>
                  <div 
                    className="bg-gradient-to-r from-cyan-500 to-emerald-400 h-full rounded-full transition-all duration-1000"
                    style={{ width: `${skill.level}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Offered Services */}
        <section id="services" className="space-y-8">
          <div className={`border-b pb-4 ${darkMode ? 'border-slate-800' : 'border-slate-200'}`}>
            <h2 className={`text-2xl font-bold flex items-center gap-2 ${darkMode ? 'text-white' : 'text-slate-900'}`}>
              <Globe className="w-6 h-6 text-cyan-500"/> Offered Services @ BI-TECH
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {SERVICES_LIST.map((service, idx) => (
              <div key={idx} className={`p-6 rounded-xl border space-y-3 transition-all ${
                darkMode ? 'border-slate-800 bg-slate-900/40' : 'border-slate-200 bg-white shadow-md'
              }`}>
                <h3 className="text-cyan-600 dark:text-cyan-400 font-mono font-semibold text-sm">{service.title}</h3>
                <p className={`text-xs leading-relaxed ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>{service.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <ProjectsSection darkMode={darkMode} />

        <ContactSection darkMode={darkMode} />

      </main>

      <TerminalModal 
        isOpen={isTerminalOpen}
        onClose={() => setIsTerminalOpen(false)}
        darkMode={darkMode}
        setDarkMode={setDarkMode}
      />

      <footer className={`border-t py-8 text-center text-xs font-mono ${darkMode ? 'border-slate-800 text-slate-500' : 'border-slate-200 text-slate-600'}`}>
        © 2026 BI-TECH Digital Solutions. Lead Engineer: {PERSONAL_BIO.name}.
      </footer>
    </div>
  );
}