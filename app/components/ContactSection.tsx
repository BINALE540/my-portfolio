// app/components/ContactSection.tsx
'use client';

import React, { useState } from 'react';
import { Mail, Send, CheckCircle2 } from 'lucide-react';
import { SERVICES_LIST, PERSONAL_BIO } from '../data/portfolioData';

interface ContactSectionProps {
  darkMode: boolean;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ darkMode }) => {
  const [selectedService, setSelectedService] = useState(SERVICES_LIST[0].title);
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: "76ea6df0-e037-4de6-ba85-2e31ffcb17e5",
          name: formState.name,
          email: formState.email,
          subject: `BI-TECH Project Inquiry: ${selectedService}`,
          message: `Selected Service: ${selectedService}\n\nMessage:\n${formState.message}`,
        }),
      });

      const res = await response.json();
      if (res.success) {
        setSubmitted(true);
        setFormState({ name: '', email: '', message: '' });
        setTimeout(() => setSubmitted(false), 6000);
      }
    } catch (err) {
      console.error("Form submission error:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className={`space-y-8 border-t pt-12 ${darkMode ? 'border-slate-800' : 'border-slate-200'}`}>
      <div className={`border-b pb-4 ${darkMode ? 'border-slate-800' : 'border-slate-200'}`}>
        <h2 className={`text-2xl font-bold flex items-center gap-2 ${darkMode ? 'text-white' : 'text-slate-900'}`}>
          <Mail className="w-6 h-6 text-cyan-500"/> Project Intake & Direct Contact
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        
        {/* Project Inquiry Form */}
        <form onSubmit={handleSubmit} className={`p-6 rounded-2xl border space-y-4 ${
          darkMode ? 'border-slate-800 bg-slate-900/40' : 'border-slate-200 bg-white shadow-xl shadow-slate-200/50'
        }`}>
          <div>
            <label className="block text-xs font-mono text-slate-400 mb-1">Select Service Category</label>
            <select
              value={selectedService}
              onChange={(e) => setSelectedService(e.target.value)}
              className={`w-full p-2.5 rounded-lg border text-xs font-mono outline-none focus:border-cyan-500 ${
                darkMode ? 'bg-slate-950 border-slate-800 text-slate-200' : 'bg-slate-50 border-slate-300 text-slate-800'
              }`}
            >
              {SERVICES_LIST.map((s, idx) => (
                <option key={idx} value={s.title}>{s.title}</option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-xs font-mono text-slate-400 mb-1">Your Full Name</label>
            <input 
              type="text" 
              required
              value={formState.name}
              onChange={(e) => setFormState({ ...formState, name: e.target.value })}
              placeholder="e.g. John Doe" 
              className={`w-full p-2.5 rounded-lg border text-xs font-mono outline-none focus:border-cyan-500 ${
                darkMode ? 'bg-slate-950 border-slate-800 text-slate-200' : 'bg-slate-50 border-slate-300 text-slate-800'
              }`}
            />
          </div>

          <div>
            <label className="block text-xs font-mono text-slate-400 mb-1">Your Work Email</label>
            <input 
              type="email" 
              required
              value={formState.email}
              onChange={(e) => setFormState({ ...formState, email: e.target.value })}
              placeholder="john@organization.com" 
              className={`w-full p-2.5 rounded-lg border text-xs font-mono outline-none focus:border-cyan-500 ${
                darkMode ? 'bg-slate-950 border-slate-800 text-slate-200' : 'bg-slate-50 border-slate-300 text-slate-800'
              }`}
            />
          </div>

          <div>
            <label className="block text-xs font-mono text-slate-400 mb-1">Project Scope / Message</label>
            <textarea 
              rows={4}
              required
              value={formState.message}
              onChange={(e) => setFormState({ ...formState, message: e.target.value })}
              placeholder="Describe your IT infrastructure, custom development, or ERP support requirements..." 
              className={`w-full p-2.5 rounded-lg border text-xs font-mono outline-none focus:border-cyan-500 resize-none ${
                darkMode ? 'bg-slate-950 border-slate-800 text-slate-200' : 'bg-slate-50 border-slate-300 text-slate-800'
              }`}
            />
          </div>

          <button 
            type="submit" 
            disabled={loading}
            className="w-full bg-cyan-600 hover:bg-cyan-500 dark:bg-cyan-500 dark:hover:bg-cyan-400 text-white dark:text-slate-950 font-mono font-bold py-2.5 rounded-lg text-xs transition-all flex items-center justify-center gap-2"
          >
            <Send className="w-4 h-4"/> {loading ? 'Sending Inquiry...' : 'Submit Project Inquiry'}
          </button>

          {submitted && (
            <p className="text-xs text-emerald-500 font-mono flex items-center justify-center gap-1.5 pt-2">
              <CheckCircle2 className="w-4 h-4"/> Inquiry received! Binale Rodney Khabanje will respond shortly.
            </p>
          )}
        </form>

        {/* Direct Contact & Details */}
        <div className="space-y-4 font-mono text-xs">
          <div className={`p-5 rounded-2xl border space-y-2 ${darkMode ? 'border-slate-800 bg-slate-900/40' : 'border-slate-200 bg-white shadow-md'}`}>
            <span className="text-cyan-600 dark:text-cyan-400 font-semibold block">🏢 {PERSONAL_BIO.company}</span>
            <p className={darkMode ? 'text-slate-300' : 'text-slate-700'}>Lead Systems Engineer: {PERSONAL_BIO.name}</p>
            <p className="text-slate-500">Degree: {PERSONAL_BIO.degree}</p>
            <p className="text-slate-500">Location: Kisumu / Bungoma, Kenya (Serving Global & Remote Clients)</p>
          </div>

          <div className={`p-5 rounded-2xl border space-y-2 ${darkMode ? 'border-slate-800 bg-slate-900/40' : 'border-slate-200 bg-white shadow-md'}`}>
            <span className="text-emerald-600 dark:text-emerald-400 font-semibold block">🚀 Direct Channels</span>
            <p className="font-bold">Phone: +254 759 314 735</p>
            <p className="font-bold">WhatsApp: +254 757 468 025</p>
            <p className="text-slate-500">Email: rodneykbinalekhabanje@gmail.com</p>
          </div>
        </div>

      </div>
    </section>
  );
};