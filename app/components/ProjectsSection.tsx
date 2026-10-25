'use client';

import React from 'react';
import { FolderGit2, ExternalLink } from 'lucide-react';
import { PROJECTS } from '../data/portfolioData';

interface ProjectsSectionProps {
  darkMode: boolean;
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({ darkMode }) => {
  return (
    <section id="projects" className="space-y-8">
      <div className={`border-b pb-4 ${darkMode ? 'border-slate-800' : 'border-slate-200'}`}>
        <h2 className={`text-2xl font-bold flex items-center gap-2 ${darkMode ? 'text-white' : 'text-slate-900'}`}>
          <FolderGit2 className="w-6 h-6 text-cyan-500"/> Featured Projects & Systems
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {PROJECTS.map((project, idx) => (
          <div 
            key={idx} 
            className={`p-6 rounded-2xl border transition-all duration-300 ${
              darkMode 
                ? 'border-slate-800 bg-slate-900/60 hover:border-cyan-500/50' 
                : 'border-slate-200 bg-white shadow-xl shadow-slate-200/50 hover:border-cyan-500/50'
            }`}
          >
            <div className="space-y-4">
              <div className="flex justify-between items-start gap-4">
                <h3 className={`text-lg font-bold ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                  {project.title}
                </h3>
                <a 
                  href={project.github} 
                  target="_blank" 
                  rel="noreferrer" 
                  className="p-2 text-slate-400 hover:text-cyan-500 transition-colors"
                >
                  <ExternalLink className="w-5 h-5"/>
                </a>
              </div>

              <span className="inline-flex items-center gap-1.5 text-[11px] font-mono px-3 py-0.5 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/30">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
                {project.status}
              </span>

              <p className={`text-xs sm:text-sm leading-relaxed ${darkMode ? 'text-slate-300' : 'text-slate-600'}`}>
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 pt-2 border-t border-slate-200 dark:border-slate-800">
                {project.tags.map((tag, tIdx) => (
                  <span 
                    key={tIdx} 
                    className="text-[11px] font-mono text-cyan-700 dark:text-cyan-300 bg-cyan-50 dark:bg-cyan-950/40 border border-cyan-200 dark:border-cyan-800/50 px-2.5 py-1 rounded-md"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};