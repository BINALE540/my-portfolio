'use client';

import React from 'react';
import { Terminal as TerminalIcon, Sun, Moon, Menu, X } from 'lucide-react';

interface NavbarProps {
  darkMode: boolean;
  setDarkMode: (val: boolean) => void;
  isMobileMenuOpen: boolean;
  setIsMobileMenuOpen: (val: boolean) => void;
  openTerminal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  darkMode,
  setDarkMode,
  isMobileMenuOpen,
  setIsMobileMenuOpen,
  openTerminal,
}) => {
  return (
    <header className={`sticky top-0 z-50 backdrop-blur-md border-b transition-colors ${
      darkMode ? 'bg-slate-950/90 border-slate-800/80' : 'bg-white/90 border-slate-200'
    } px-4 sm:px-6 py-3.5`}>
      <div className="max-w-5xl mx-auto flex justify-between items-center gap-2">
        
        {/* Brand Header Logo */}
        <div className="flex items-center gap-2">
          <button 
            onClick={openTerminal}
            title="Click or press Ctrl + ~ to open interactive shell"
            className="flex items-center gap-2.5 text-cyan-600 dark:text-cyan-400 font-mono font-bold text-sm sm:text-base hover:opacity-80 transition-opacity cursor-pointer group"
          >
            <TerminalIcon className="w-5 h-5 text-cyan-600 dark:text-cyan-400 group-hover:scale-110 transition-transform shrink-0 drop-shadow-[0_0_8px_rgba(34,211,238,0.6)]" />
            <span className="flex flex-col sm:flex-row sm:items-center sm:gap-2 text-left">
              <span className="text-lg sm:text-xl font-extrabold tracking-wider bg-gradient-to-r from-cyan-600 via-teal-500 to-indigo-600 dark:from-cyan-400 dark:via-teal-300 dark:to-indigo-400 bg-clip-text text-transparent">
                BI-TECH
              </span>
              <span className="text-xs font-mono text-slate-600 dark:text-slate-300 font-normal">
                Digital Solutions <span className="text-cyan-600 dark:text-cyan-400 font-mono">(Where Tech Meets Innovation)</span>
              </span>
            </span>
          </button>
        </div>

        {/* Navigation & Theme Switcher */}
        <div className="flex items-center gap-4">
          <nav className="hidden md:flex gap-6 text-sm text-slate-600 dark:text-slate-400 font-medium">
            <a href="#about" className="hover:text-cyan-500 transition-colors">About</a>
            <a href="#skills" className="hover:text-cyan-500 transition-colors">Skills</a>
            <a href="#services" className="hover:text-cyan-500 transition-colors">Services</a>
            <a href="#projects" className="hover:text-cyan-500 transition-colors">Projects</a>
            <a href="#contact" className="hover:text-cyan-500 transition-colors">Contact</a>
          </nav>

          {/* Light / Dark Mode Toggle Button */}
          <button
            onClick={() => setDarkMode(!darkMode)}
            className={`p-2 rounded-lg border transition-all ${
              darkMode 
                ? 'border-slate-800 bg-slate-900 text-amber-400 hover:bg-slate-800' 
                : 'border-slate-200 bg-slate-100 text-slate-700 hover:bg-slate-200'
            }`}
            title="Toggle Light/Dark Theme"
          >
            {darkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </button>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-slate-600 dark:text-slate-400 focus:outline-none"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Dropdown */}
      {isMobileMenuOpen && (
        <nav className={`md:hidden mt-3 pt-3 border-t flex flex-col gap-3 font-mono text-xs p-4 rounded-xl ${
          darkMode ? 'border-slate-800 bg-slate-950 text-slate-300' : 'border-slate-200 bg-slate-50 text-slate-700'
        }`}>
          <a href="#about" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-cyan-500 py-1">&gt; About</a>
          <a href="#skills" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-cyan-500 py-1">&gt; Skills</a>
          <a href="#services" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-cyan-500 py-1">&gt; Services</a>
          <a href="#projects" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-cyan-500 py-1">&gt; Projects</a>
          <a href="#contact" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-cyan-500 py-1">&gt; Contact</a>
        </nav>
      )}
    </header>
  );
};