'use client';

import React, { useState, useEffect, useRef } from 'react';
import { Mail, ExternalLink, Terminal as TerminalIcon, Cpu, FolderGit2, Globe, X, FileText, Phone, MessageSquare } from 'lucide-react';

export default function Portfolio() {
  const titles = [
    "Information Systems Graduate",
    "System Developer & Software Engineer",
    "SysAdmin & Network Engineer",
    "Systems Security Specialist"
  ];

  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [imageError, setImageError] = useState(false);

  // Terminal Modal State
  const [isTerminalOpen, setIsTerminalOpen] = useState(false);
  const [inputVal, setInputVal] = useState('');
  const [terminalHistory, setTerminalHistory] = useState<Array<{ command?: string; output: React.ReactNode }>>([
    {
      output: (
        <div className="text-slate-400 font-mono text-xs">
          <p className="text-cyan-400 font-bold">Welcome to Rodney&apos;s Web CLI v1.0.0</p>
          <p className="text-xs">Type <span className="text-amber-400">help</span> to see available commands or <span className="text-amber-400">exit</span> to close.</p>
        </div>
      ),
    },
  ]);

  const terminalEndRef = useRef<HTMLDivElement>(null);

  // Contact Form State
  const [formState, setFormState] = useState({ name: '', email: '', subject: '', message: '' });
  const [formSubmitted, setFormSubmitted] = useState(false);

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

  // Keyboard Shortcut (Ctrl + ~ or Cmd + ~)
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

  // Auto scroll terminal output
  useEffect(() => {
    if (isTerminalOpen) {
      terminalEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [terminalHistory, isTerminalOpen]);

  // Handle Command Execution
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
            <p><span className="text-amber-400 w-28 inline-block">skills</span> - Output technical stack details</p>
            <p><span className="text-amber-400 w-28 inline-block">projects</span> - List featured engineering projects</p>
            <p><span className="text-amber-400 w-28 inline-block">services</span> - Display offered IT, ERP & Dev services</p>
            <p><span className="text-amber-400 w-28 inline-block">about</span> - Display user profile details</p>
            <p><span className="text-amber-400 w-28 inline-block">resume</span> - Download Curriculum Vitae (PDF)</p>
            <p><span className="text-amber-400 w-28 inline-block">ping cybersentinel</span> - Simulate live security probe</p>
            <p><span className="text-amber-400 w-28 inline-block">contact</span> - Show contact details & phone lines</p>
            <p><span className="text-amber-400 w-28 inline-block">clear</span> - Clear terminal screen</p>
            <p><span className="text-amber-400 w-28 inline-block">exit</span> - Close terminal overlay</p>
          </div>
        );
        break;

      case 'skills':
        responseOutput = (
          <div className="space-y-1 text-slate-300 font-mono text-xs">
            <p className="text-cyan-400 font-semibold">[+] TECHNICAL SKILLS BREAKDOWN</p>
            <p>├── <span className="text-amber-400">System Development:</span> PHP, Python 3, TypeScript, JavaScript, SQL, Bash</p>
            <p>├── <span className="text-amber-400">SysAdmin & ERP:</span> Linux (Ubuntu), ERP Systems, SSH, UFW Firewall, Diagnostics</p>
            <p>├── <span className="text-amber-400">Networking & Security:</span> TCP/IP, Sockets, HTTP/SSL Auditing, Forensics</p>
            <p>└── <span className="text-amber-400">Web & Infrastructure:</span> Next.js, React, Node.js, Git, Vercel</p>
          </div>
        );
        break;

      case 'projects':
        responseOutput = (
          <div className="space-y-2 text-slate-300 text-xs font-mono">
            <p className="text-cyan-400 font-semibold">[+] FEATURED REPOSITORIES</p>
            <p>1. <span className="text-emerald-400 font-bold">[Completed]</span> CyberSentinel — Vulnerability Scanner & Auditor</p>
            <p>   URL: https://github.com/BINALE540/cybersentinel</p>
            <p>2. <span className="text-emerald-400 font-bold">[Completed]</span> Maseno Foods Hub — PHP/MySQL Campus Platform</p>
          </div>
        );
        break;

      case 'services':
        responseOutput = (
          <div className="space-y-2 text-slate-300 text-xs font-mono">
            <p className="text-cyan-400 font-bold">[+] OFFERED SERVICES & CORE COMPETENCIES</p>
            <p>1. <span className="text-amber-400">System Development & Engineering:</span> Custom web application architecture, database design, and REST APIs.</p>
            <p>2. <span className="text-amber-400">Systems Administration:</span> Linux/Windows environment setup, workstation provisioning, and server diagnostics.</p>
            <p>3. <span className="text-amber-400">ERP Support & Integration:</span> Workflow onboarding, role-based user access controls, and database maintenance.</p>
            <p>4. <span className="text-amber-400">Network Administration & Security:</span> LAN/WAN configuration, UFW firewalling, and threat mitigation.</p>
          </div>
        );
        break;

      case 'about':
        responseOutput = (
          <div className="text-slate-300 text-xs leading-relaxed space-y-1 font-mono">
            <p className="text-cyan-400 font-bold">Rodney Binale Khabanje</p>
            <p>B.Sc. Information Systems — Maseno University (Grade A Attachment @ Kibabii Uni)</p>
            <p>Specialization: System Development, Linux Infrastructure, ERP Systems, and Network Security.</p>
          </div>
        );
        break;

      case 'resume':
      case 'cv':
        responseOutput = (
          <div className="space-y-2 text-xs font-mono text-slate-300">
            <p className="text-cyan-400 font-bold">[+] RESUME / CV DOWNLOAD</p>
            <p>Access my complete curriculum vitae (PDF):</p>
            <a 
              href="/Rodney_Binale_Khabanje_Cv.pdf" 
              target="_blank" 
              download="Rodney_Binale_Khabanje_Cv.pdf"
              className="text-amber-400 underline font-semibold hover:text-cyan-400 transition-colors"
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
            <p><span className="text-cyan-400">GitHub:</span> https://github.com/BINALE540</p>
            <p><span className="text-cyan-400">LinkedIn:</span> https://www.linkedin.com/in/binale-khabanje-84213a391</p>
          </div>
        );
        break;

      case 'clear':
        setTerminalHistory([]);
        setInputVal('');
        return;

      case 'exit':
        setIsTerminalOpen(false);
        setInputVal('');
        return;

      default:
        responseOutput = (
          <p className="text-red-400 text-xs font-mono">
            zsh: command not found: {cmd}. Type <span className="text-amber-400 underline">help</span> for available commands.
          </p>
        );
        break;
    }

    setTerminalHistory((prev) => [
      ...prev,
      { command: inputVal, output: responseOutput },
    ]);
    setInputVal('');
  };

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
      setFormState({ name: '', email: '', subject: '', message: '' });
    }, 4000);
  };

  const progressSkills = [
    { name: "Linux System Administration (Ubuntu/Debian)", level: 92 },
    { name: "System Development (Python, PHP, TS/JS, SQL)", level: 88 },
    { name: "Networking (TCP/IP, Routing, UFW Firewall)", level: 85 },
    { name: "ERP Support & Workflow Integration", level: 82 },
    { name: "Cybersecurity, Hardening & Forensics", level: 80 }
  ];

  const servicesList = [
    {
      title: "System Development & Engineering",
      desc: "Designing and building resilient web applications, custom software architecture, relational database schemas (MySQL/PostgreSQL), and RESTful API backends."
    },
    {
      title: "Systems Administration & Setup",
      desc: "Provisioning Linux and Windows workstations, managing disk partitioning, user access controls (RBAC), boot configs (UEFI/GRUB), and system health checks."
    },
    {
      title: "ERP Platform Support & Integration",
      desc: "Assisting with Enterprise Resource Planning (ERP) onboarding, user provisioning, workflow troubleshooting, and system database alignment."
    },
    {
      title: "Network Security & Cyber Defense",
      desc: "Configuring UFW firewalls, conducting socket probing and HTTP header security audits, network troubleshooting, and basic digital forensics."
    }
  ];

  const projects = [
    {
      title: "CyberSentinel — Vulnerability Scanner",
      status: "Completed",
      description: "Modular security auditing CLI tool built in Python for Linux environments. Performs multi-threaded TCP port probing, HTTP security header auditing with automatic protocol fallback, local UFW firewall checks, and timestamped JSON exports.",
      tags: ["Python 3", "Sockets", "Threading", "Linux", "JSON"],
      github: "https://github.com/BINALE540/cybersentinel",
    },
    {
      title: "Maseno Foods Hub — Campus Web Platform",
      status: "Completed",
      description: "Responsive web-based food ordering platform serving university students and local campus vendors. Designed relational MySQL database schemas, implemented secure session handling, and optimized backend query performance.",
      tags: ["PHP", "MySQL", "JavaScript", "HTML5", "CSS3"],
      github: "https://github.com/BINALE540",
    },
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-cyan-500 selection:text-slate-950">
      
      {/* Navigation Header */}
      <header className="sticky top-0 z-50 backdrop-blur-md bg-slate-950/80 border-b border-slate-800/80 px-6 py-4">
        <div className="max-w-5xl mx-auto flex justify-between items-center">
          <button 
            onClick={() => setIsTerminalOpen(true)}
            title="Click or press Ctrl + ~ to open interactive shell"
            className="flex items-center gap-2 text-cyan-400 font-mono font-bold text-base hover:text-cyan-300 transition-colors cursor-pointer group"
          >
            <TerminalIcon className="w-5 h-5 group-hover:scale-110 transition-transform" />
            <span>rodney@binalerodney:~#</span>
            <span className="text-xs text-slate-500 font-normal hidden sm:inline ml-2 border border-slate-800 px-2 py-0.5 rounded bg-slate-900">
              Ctrl + ~
            </span>
          </button>

          <nav className="hidden md:flex gap-8 text-sm text-slate-400 font-medium">
            <a href="#about" className="hover:text-cyan-400 transition-colors">About</a>
            <a href="#skills" className="hover:text-cyan-400 transition-colors">Skills</a>
            <a href="#services" className="hover:text-cyan-400 transition-colors">Services</a>
            <a href="#projects" className="hover:text-cyan-400 transition-colors">Projects</a>
            <a href="#contact" className="hover:text-cyan-400 transition-colors">Contact</a>
          </nav>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-6 py-12 space-y-24">
        
        {/* Hero Section */}
        <section id="about" className="space-y-8 pt-6">
          {/* Vibrant Gradient Open to Roles Banner */}
          <div className="inline-flex flex-wrap items-center gap-2 px-4 py-2 rounded-full border border-pink-500/30 bg-gradient-to-r from-pink-500/20 via-purple-500/20 to-cyan-500/20 text-xs font-mono shadow-lg shadow-purple-500/10">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-pink-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-pink-500"></span>
            </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-purple-300 to-cyan-400 font-bold">
              OPEN TO ROLES:
            </span>
            <span className="text-slate-200">System Developer | Linux SysAdmin | Network Engineering | Cyber Defense</span>
            <span className="text-slate-500 hidden sm:inline">|</span>
            <span className="text-cyan-400 font-semibold">Kenya / Remote / Hybrid</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
            {/* Left Bio Info */}
            <div className="md:col-span-2 space-y-4">
              <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-white">
                Hi, I&apos;m <span className="text-cyan-400">Rodney Binale</span>
              </h1>
              
              <div className="text-xl text-cyan-400 font-mono h-8 flex items-center">
                <span>{currentText}</span>
                <span className="animate-pulse ml-1 text-cyan-400 font-bold">|</span>
              </div>

              <p className="text-slate-400 leading-relaxed text-sm md:text-base">
                B.Sc. Information Systems Graduate from Maseno University (Evaluated Grade A Attachment at Kibabii University). I specialize in custom system development, managing Linux environments, auditing network security, and supporting enterprise ERP workflows.
              </p>
            </div>

            {/* Right Profile Frame (Glow Avatar Card with JPEG Support & Fallback) */}
            <div className="flex justify-center">
              <div className="relative w-48 h-48 md:w-56 md:h-56 rounded-full p-1 bg-gradient-to-tr from-cyan-500 via-indigo-500 to-pink-500 shadow-2xl shadow-cyan-500/20">
                <div className="w-full h-full rounded-full bg-slate-900 border border-slate-800 overflow-hidden relative flex items-center justify-center">
                  {!imageError ? (
                    <img 
                      src="/profile.jpeg" 
                      alt="Rodney Binale Khabanje" 
                      onError={() => setImageError(true)}
                      className="w-full h-full object-cover rounded-full hover:scale-105 transition-transform duration-300"
                    />
                  ) : (
                    <div className="flex flex-col items-center justify-center p-4 text-center">
                      <span className="text-3xl font-extrabold text-cyan-400 font-mono">RBK</span>
                      <span className="text-xs text-slate-400 mt-1 font-mono">Rodney Khabanje</span>
                      <span className="text-[10px] text-emerald-400 font-mono mt-1 border border-emerald-500/30 px-2 py-0.5 rounded-full bg-emerald-500/10">
                        Grade A IT Specialist
                      </span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Terminal Box Style About */}
          <div className="p-6 rounded-xl border border-slate-800 bg-slate-900/60 font-mono text-sm space-y-4 shadow-xl">
            <div className="text-slate-400 border-b border-slate-800 pb-3 flex items-center gap-2">
              <span className="h-3 w-3 rounded-full bg-red-500/80 inline-block"></span>
              <span className="h-3 w-3 rounded-full bg-yellow-500/80 inline-block"></span>
              <span className="h-3 w-3 rounded-full bg-green-500/80 inline-block"></span>
              <span className="ml-2 text-xs text-slate-500">about_me.txt</span>
            </div>
            
            <div className="space-y-3 text-slate-300 leading-relaxed">
              <p><span className="text-cyan-400 font-bold">rodney@binalerodney:~$</span> cat about_me.txt</p>
              <p><span className="text-amber-400">Education:</span> B.Sc. Information Systems — Maseno University</p>
              <p><span className="text-amber-400">Specializations:</span> System Development, Linux Infrastructure, ERP Systems, Network Engineering & Security</p>
              <p className="text-slate-400 pt-2">
                I deliver hands-on IT infrastructure and software engineering—from custom system development and database setup to configuring UFW firewalls and optimizing business process workflows through ERP systems.
              </p>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-4 pt-2">
            <a 
              href="https://wa.me/254757468025" 
              target="_blank" 
              rel="noreferrer" 
              className="flex items-center gap-2 px-4 py-2.5 rounded-lg border border-emerald-500/40 bg-emerald-500/10 text-emerald-400 hover:bg-emerald-500/20 transition-all font-mono text-xs font-semibold"
            >
              <MessageSquare className="w-4 h-4 text-emerald-400" /> WhatsApp (+254 757 468 025)
            </a>

            <a 
              href="tel:+254759314735" 
              className="flex items-center gap-2 px-4 py-2.5 rounded-lg border border-cyan-500/40 bg-cyan-500/10 text-cyan-400 hover:bg-cyan-500/20 transition-all font-mono text-xs font-semibold"
            >
              <Phone className="w-4 h-4 text-cyan-400" /> Call (+254 759 314 735)
            </a>

            <a 
              href="/Rodney_Binale_Khabanje_Cv.pdf" 
              download="Rodney_Binale_Khabanje_Cv.pdf"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 px-4 py-2.5 rounded-lg border border-slate-800 bg-slate-900 text-slate-300 hover:border-cyan-500/50 hover:text-cyan-400 transition-all font-mono text-xs"
            >
              <FileText className="w-4 h-4 text-cyan-400" /> Download CV (PDF)
            </a>

            <button 
              onClick={() => setIsTerminalOpen(true)}
              className="px-5 py-2.5 rounded-lg bg-cyan-500 text-slate-950 font-semibold hover:bg-cyan-400 transition-all text-xs font-mono"
            >
              Open Web CLI
            </button>
          </div>
        </section>

        {/* Skills Section with Progress Bars */}
        <section id="skills" className="space-y-8">
          <div className="border-b border-slate-800 pb-4">
            <h2 className="text-2xl font-bold text-white flex items-center gap-2">
              <Cpu className="w-6 h-6 text-cyan-400" /> Technical Skills & Competencies
            </h2>
          </div>

          <div className="space-y-4">
            {progressSkills.map((skill, idx) => (
              <div key={idx} className="space-y-1.5 font-mono">
                <div className="flex justify-between text-xs text-slate-300">
                  <span>{skill.name}</span>
                  <span className="text-cyan-400">{skill.level}%</span>
                </div>
                <div className="w-full bg-slate-900 h-2.5 rounded-full border border-slate-800 overflow-hidden">
                  <div 
                    className="bg-gradient-to-r from-cyan-500 to-emerald-400 h-full rounded-full transition-all duration-1000"
                    style={{ width: `${skill.level}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* My Services Section */}
        <section id="services" className="space-y-8">
          <div className="border-b border-slate-800 pb-4">
            <h2 className="text-2xl font-bold text-white flex items-center gap-2">
              <Globe className="w-6 h-6 text-cyan-400" /> Offered Services
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {servicesList.map((service, idx) => (
              <div key={idx} className="p-6 rounded-xl border border-slate-800 bg-slate-900/40 space-y-3 hover:border-cyan-500/40 transition-all">
                <h3 className="text-cyan-400 font-mono font-semibold text-sm">{service.title}</h3>
                <p className="text-slate-400 text-xs leading-relaxed">{service.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Featured Projects Section */}
        <section id="projects" className="space-y-8">
          <div className="border-b border-slate-800 pb-4">
            <h2 className="text-2xl font-bold text-white flex items-center gap-2">
              <FolderGit2 className="w-6 h-6 text-cyan-400" /> Featured Projects
            </h2>
          </div>
          <div className="grid grid-cols-1 gap-6">
            {projects.map((project, idx) => (
              <div key={idx} className="p-6 rounded-xl border border-slate-800 bg-slate-900/40 hover:border-cyan-500/40 transition-all space-y-4 group">
                <div className="flex justify-between items-start gap-4">
                  <div>
                    <h3 className="text-lg font-bold text-white group-hover:text-cyan-400 transition-colors">
                      {project.title}
                    </h3>
                    <span className="inline-block mt-1 text-xs px-2.5 py-0.5 rounded font-mono bg-emerald-500/10 text-emerald-400 border border-emerald-500/30">
                      ● {project.status}
                    </span>
                  </div>
                  <a href={project.github} target="_blank" rel="noreferrer" className="p-2 text-slate-400 hover:text-cyan-400 transition-colors">
                    <ExternalLink className="w-5 h-5" />
                  </a>
                </div>
                <p className="text-slate-400 text-sm leading-relaxed">{project.description}</p>
                <div className="flex flex-wrap gap-2 pt-2">
                  {project.tags.map((tag, tIdx) => (
                    <span key={tIdx} className="text-xs font-mono text-cyan-400/90 bg-cyan-950/40 border border-cyan-800/40 px-2.5 py-0.5 rounded">
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Contact Me Section */}
        <section id="contact" className="space-y-8 border-t border-slate-800 pt-12">
          <div className="border-b border-slate-800 pb-4">
            <h2 className="text-2xl font-bold text-white flex items-center gap-2">
              <Mail className="w-6 h-6 text-cyan-400" /> Contact Me & Let&apos;s Work Together
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Left Contact Form */}
            <form onSubmit={handleContactSubmit} className="space-y-4 bg-slate-900/40 p-6 rounded-xl border border-slate-800">
              <div>
                <label className="block text-xs font-mono text-slate-400 mb-1">Your Name</label>
                <input 
                  type="text" 
                  required
                  value={formState.name}
                  onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                  placeholder="Enter your name" 
                  className="w-full bg-slate-950 border border-slate-800 rounded-lg p-2.5 text-xs text-slate-200 outline-none focus:border-cyan-500 font-mono"
                />
              </div>
              <div>
                <label className="block text-xs font-mono text-slate-400 mb-1">Your Email</label>
                <input 
                  type="email" 
                  required
                  value={formState.email}
                  onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                  placeholder="Enter your email" 
                  className="w-full bg-slate-950 border border-slate-800 rounded-lg p-2.5 text-xs text-slate-200 outline-none focus:border-cyan-500 font-mono"
                />
              </div>
              <div>
                <label className="block text-xs font-mono text-slate-400 mb-1">Subject</label>
                <input 
                  type="text" 
                  required
                  value={formState.subject}
                  onChange={(e) => setFormState({ ...formState, subject: e.target.value })}
                  placeholder="Subject" 
                  className="w-full bg-slate-950 border border-slate-800 rounded-lg p-2.5 text-xs text-slate-200 outline-none focus:border-cyan-500 font-mono"
                />
              </div>
              <div>
                <label className="block text-xs font-mono text-slate-400 mb-1">Write Your Message...</label>
                <textarea 
                  rows={4}
                  required
                  value={formState.message}
                  onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                  placeholder="Your message here..." 
                  className="w-full bg-slate-950 border border-slate-800 rounded-lg p-2.5 text-xs text-slate-200 outline-none focus:border-cyan-500 font-mono resize-none"
                />
              </div>
              <button 
                type="submit" 
                className="w-full bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-mono font-semibold py-2.5 rounded-lg text-xs transition-all"
              >
                Send Message
              </button>
              {formSubmitted && (
                <p className="text-xs text-emerald-400 font-mono text-center pt-2">
                  ✓ Message sent successfully! I will reply shortly.
                </p>
              )}
            </form>

            {/* Right Contact Cards */}
            <div className="space-y-4 font-mono text-xs">
              <div className="p-5 rounded-xl border border-slate-800 bg-slate-900/40 space-y-2">
                <span className="text-cyan-400 font-semibold block">🚀 Direct Calls</span>
                <p className="text-slate-300 text-sm font-bold">+254 759 314 735</p>
                <p className="text-slate-500">Available for phone discussions & interviews.</p>
              </div>

              <div className="p-5 rounded-xl border border-slate-800 bg-slate-900/40 space-y-2">
                <span className="text-emerald-400 font-semibold block">💬 WhatsApp Instant Chat</span>
                <p className="text-slate-300 text-sm font-bold">+254 757 468 025</p>
                <a 
                  href="https://wa.me/254757468025" 
                  target="_blank" 
                  rel="noreferrer"
                  className="inline-block text-emerald-400 underline pt-1"
                >
                  Click to start WhatsApp chat
                </a>
              </div>

              <div className="p-5 rounded-xl border border-slate-800 bg-slate-900/40 space-y-2">
                <span className="text-cyan-400 font-semibold block">✉️ Email Contact</span>
                <p className="text-slate-300 text-xs">rodneykbinalekhabanje@gmail.com</p>
                <p className="text-slate-500">Location: Bungoma / Kisumu, Kenya</p>
              </div>
            </div>
          </div>
        </section>

      </main>

      {/* Interactive Web CLI Modal Overlay */}
      {isTerminalOpen && (
        <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="w-full max-w-2xl bg-slate-900 border border-slate-800 rounded-xl shadow-2xl overflow-hidden flex flex-col h-[480px]">
            
            {/* Modal Header */}
            <div className="bg-slate-950 px-4 py-3 border-b border-slate-800 flex justify-between items-center">
              <div className="flex items-center gap-2">
                <span className="h-3 w-3 rounded-full bg-red-500/80 inline-block"></span>
                <span className="h-3 w-3 rounded-full bg-yellow-500/80 inline-block"></span>
                <span className="h-3 w-3 rounded-full bg-green-500/80 inline-block"></span>
                <span className="ml-2 text-xs font-mono text-slate-400">rodney@binalerodney:~ (bash)</span>
              </div>
              <button 
                onClick={() => setIsTerminalOpen(false)}
                className="text-slate-400 hover:text-white transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Terminal Body */}
            <div className="flex-1 p-4 overflow-y-auto font-mono text-sm space-y-4">
              {terminalHistory.map((item, index) => (
                <div key={index} className="space-y-1">
                  {item.command !== undefined && (
                    <div className="flex items-center gap-2 text-slate-300">
                      <span className="text-cyan-400 font-bold">rodney@binalerodney:~$</span>
                      <span>{item.command}</span>
                    </div>
                  )}
                  <div>{item.output}</div>
                </div>
              ))}
              
              {/* Input Line */}
              <form onSubmit={handleCommandSubmit} className="flex items-center gap-2 pt-2">
                <span className="text-cyan-400 font-bold">rodney@binalerodney:~$</span>
                <input
                  type="text"
                  value={inputVal}
                  onChange={(e) => setInputVal(e.target.value)}
                  autoFocus
                  placeholder="Type 'help'..."
                  className="flex-1 bg-transparent text-slate-100 outline-none font-mono text-sm"
                />
              </form>
              <div ref={terminalEndRef} />
            </div>

            {/* Footer hint */}
            <div className="bg-slate-950/60 px-4 py-2 border-t border-slate-800/80 text-xs text-slate-500 font-mono flex justify-between">
              <span>Press ESC or type &apos;exit&apos; to quit</span>
              <span>v1.0.0</span>
            </div>

          </div>
        </div>
      )}

      <footer className="border-t border-slate-800/80 py-8 text-center text-xs text-slate-500 font-mono">
        © 2026 Rodney Binale Khabanje. Deployed on Vercel.
      </footer>
    </div>
  );
}