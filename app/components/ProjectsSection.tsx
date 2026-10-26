// app/components/ProjectsSection.tsx
'use client';

import React, { useState } from 'react';
import { FolderGit2, ExternalLink, Cpu, X } from 'lucide-react';
import { PROJECTS } from '../data/portfolioData';

interface ProjectsSectionProps {
  darkMode: boolean;
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({ darkMode }) => {
  const [selectedProject, setSelectedProject] = useState<typeof PROJECTS[0] | null>(null);

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
            className={`p-6 rounded-2xl border transition-all duration-300 flex flex-col justify-between ${
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
                  title="View Repository / Source"
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

            <button
              onClick={() => setSelectedProject(project)}
              className="mt-6 w-full flex items-center justify-center gap-2 py-2 px-4 rounded-lg bg-cyan-500/10 hover:bg-cyan-500/20 text-cyan-600 dark:text-cyan-400 font-mono text-xs font-semibold border border-cyan-500/30 transition-all"
            >
              <Cpu className="w-4 h-4"/> View System Architecture
            </button>
          </div>
        ))}
      </div>

      {/* Case Study Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className={`w-full max-w-xl rounded-2xl border p-6 space-y-6 shadow-2xl relative ${
            darkMode ? 'bg-slate-900 border-slate-800 text-slate-100' : 'bg-white border-slate-200 text-slate-900'
          }`}>
            <button 
              onClick={() => setSelectedProject(null)}
              className="absolute top-4 right-4 p-2 text-slate-400 hover:text-slate-200"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="space-y-2">
              <span className="text-xs font-mono text-cyan-500 font-bold">[+] SYSTEM ARCHITECTURE CASE STUDY</span>
              <h3 className="text-xl font-bold">{selectedProject.title}</h3>
            </div>

            <p className={`text-xs sm:text-sm leading-relaxed ${darkMode ? 'text-slate-300' : 'text-slate-600'}`}>
              {selectedProject.architectureDetails.overview}
            </p>

            <div className="space-y-2">
              <h4 className="text-xs font-mono font-semibold text-amber-500 uppercase">Core Technical Capabilities:</h4>
              <ul className="space-y-1.5 text-xs list-disc list-inside text-slate-400">
                {selectedProject.architectureDetails.keyFeatures.map((feat, fIdx) => (
                  <li key={fIdx}>{feat}</li>
                ))}
              </ul>
            </div>

            <div className="space-y-2 pt-2 border-t border-slate-800">
              <h4 className="text-xs font-mono font-semibold text-cyan-500 uppercase">Infrastructure & Tech Stack:</h4>
              <div className="flex flex-wrap gap-2">
                {selectedProject.architectureDetails.stack.map((stk, sIdx) => (
                  <span key={sIdx} className="text-[11px] font-mono px-2.5 py-1 rounded bg-slate-800 text-slate-300">
                    {stk}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};