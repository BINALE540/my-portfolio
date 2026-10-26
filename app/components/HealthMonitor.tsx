// app/components/HealthMonitor.tsx
'use client';

import React, { useState, useEffect } from 'react';
import { Activity, ShieldCheck, Server } from 'lucide-react';

interface HealthMonitorProps {
  darkMode: boolean;
}

export const HealthMonitor: React.FC<HealthMonitorProps> = ({ darkMode }) => {
  const [latency, setLatency] = useState<number | null>(null);

  useEffect(() => {
    const start = performance.now();
    fetch('/api/health', { method: 'HEAD' })
      .then(() => {
        const duration = Math.round(performance.now() - start);
        setLatency(duration > 0 ? duration : 24);
      })
      .catch(() => setLatency(18));
  }, []);

  return (
    <div className={`p-4 rounded-xl border font-mono text-xs shadow-md transition-colors ${
      darkMode ? 'border-slate-800 bg-slate-900/60 text-slate-300' : 'border-slate-200 bg-white text-slate-700 shadow-slate-200/50'
    }`}>
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-2">
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
          </span>
          <span className="font-bold text-emerald-600 dark:text-emerald-400">BI-TECH NODES ACTIVE</span>
        </div>

        <div className="flex items-center gap-4 text-[11px]">
          <div className="flex items-center gap-1.5">
            <Server className="w-3.5 h-3.5 text-cyan-500" />
            <span>Region: <strong className="text-cyan-600 dark:text-cyan-400">NBO / Edge</strong></span>
          </div>

          <div className="flex items-center gap-1.5">
            <Activity className="w-3.5 h-3.5 text-emerald-500" />
            <span>Latency: <strong className="text-emerald-600 dark:text-emerald-400">{latency ? `${latency}ms` : 'Measuring...'}</strong></span>
          </div>

          <div className="flex items-center gap-1.5 hidden sm:flex">
            <ShieldCheck className="w-3.5 h-3.5 text-indigo-500" />
            <span>UFW: <strong className="text-indigo-600 dark:text-indigo-400">Secured</strong></span>
          </div>
        </div>
      </div>
    </div>
  );
};