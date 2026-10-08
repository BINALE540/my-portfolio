'use client';

import React, { useState, useEffect, useRef } from 'react';
import { Mail, ExternalLink, Terminal as TerminalIcon, Cpu, FolderGit2, Globe, X, FileText, Phone, MessageSquare, Menu } from 'lucide-react';

export default function Portfolio() {
  const titles = [
    "Founder & Lead Engineer @ BI-TECH Digital Solutions",
    "System Developer & Software Engineer",
    "Linux Systems Administrator & Network Specialist",
    "Cyber Security & ERP Systems Analyst"
  ];

  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [imageError, setImageError] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Terminal Modal State
  const [isTerminalOpen, setIsTerminalOpen] = useState(false);
  const [inputVal, setInputVal] = useState('');
  const [terminalHistory, setTerminalHistory] = useState<Array<{ command?: string; output: React.ReactNode }>>([
    {
      output: (
        <div className="text-slate-400 font-mono text-xs">
          <p className="text-cyan-400 font-bold">Welcome to BI-TECH Digital Solutions Web CLI v1.0.0</p>
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
            <p><span className="text-amber-400 w-28 inline-block">about</span> - Display company & founder details</p>
            <p><span className="text-amber-400 w-28 inline-block">resume</span> - Download Curriculum Vitae (PDF)</p>
            <p><span className="text-amber-400 w-28 inline-block">contact</span> - Show direct phone & WhatsApp lines</p>
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
            <p>   URL: https://maseno-connect.onrender.com</p>
          </div>
        );
        break;

      case 'services':
        responseOutput = (
          <div className="space-y-2 text-slate-300 text-xs font-mono">
            <p className="text-cyan-400 font-bold">[+] OFFERED SERVICES @ BI-TECH DIGITAL SOLUTIONS</p>
            <p>1. <span className="text-amber-400">Custom System Development:</span> Web application architecture, database schemas, and REST APIs.</p>
            <p>2. <span className="text-amber-400">Linux Systems Administration:</span> Workstation provisioning, server setup, and boot configs.</p>
            <p>3. <span className="text-amber-400">ERP Support & Integration:</span> Workflow onboarding, user access controls, and database alignment.</p>
            <p>4. <span className="text-amber-400">Network Security & Auditing:</span> Firewalling (UFW), socket probing, and threat mitigation.</p>
          </div>
        );
        break;

      case 'about':
        responseOutput = (
          <div className="text-slate-300 text-xs leading-relaxed space-y-1 font-mono">
            <p className="text-cyan-400 font-bold">Binale Rodney Khabanje</p>
            <p>Founder & Lead Systems Engineer — BI-TECH Digital Solutions</p>
            <p>B.Sc. Information Systems — Maseno University</p>
          </div>
        );
        break;

      case 'resume':
      case 'cv':
        responseOutput = (
          <div className="space-y-2 text-xs font-mono text-slate-300">
            <p className="text-cyan-400 font-bold">[+] RESUME / CV DOWNLOAD</p>
            <p>Access Rodney Binale Khabanje&apos;s Curriculum Vitae (PDF):</p>
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

  const handleContactSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: "76ea6df0-e037-4de6-ba85-2e31ffcb17e5",
          name: formState.name,
          email: formState.email,
          subject: formState.subject,
          message: formState.message,
        }),
      });

      const result = await response.json();
      if (result.success) {
        setFormSubmitted(true);
        setFormState({ name: '', email: '', subject: '', message: '' });
        setTimeout(() => setFormSubmitted(false), 5000);
      }
    } catch (error) {
      console.error("Form submission error:", error);
    }
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
      title: "Custom System Development & Engineering",
      desc: "Designing and building resilient web applications, custom software architecture, relational database schemas (MySQL/PostgreSQL), and RESTful API backends."
    },
    {
      title: "Linux Systems Administration & Infrastructure",
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
      github: "https://maseno-connect.onrender.com",
    },
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-cyan-500 selection:text-slate-950">
      
      {/* Navigation Header */}
      <header className="sticky top-0 z-50 backdrop-blur-md bg-slate-950/90 border-b border-slate-800/80 px-4 sm:px-6 py-3.5">
        <div className="max-w-5xl mx-auto flex justify-between items-center gap-2">
          
          {/* Left Branding & Styled BI-TECH Logo */}
          <div className="flex items-center gap-2">
            <button 
              onClick={() => setIsTerminalOpen(true)}
              title="Click or press Ctrl + ~ to open interactive shell"
              className="flex items-center gap-2.5 text-cyan-400 font-mono font-bold text-sm sm:text-base hover:text-cyan-300 transition-colors cursor-pointer group"
            >
              <TerminalIcon className="w-5 h-5 text-cyan-400 group-hover:scale-110 transition-transform shrink-0 drop-shadow-[0_0_8px_rgba(34,211,238,0.6)]" />
              <span className="flex flex-col sm:flex-row sm:items-center sm:gap-2 text-left">
                <span className="text-lg sm:text-xl font-extrabold tracking-wider bg-gradient-to-r from-cyan-400 via-teal-300 to-indigo-400 bg-clip-text text-transparent drop-shadow-[0_0_12px_rgba(34,211,238,0.5)]">
                  BI-TECH
                </span>
                <span className="text-xs font-mono text-slate-300 font-normal">
                  Digital Solutions <span className="text-cyan-400/90 font-mono">(Where Tech Meets Innovation)</span>
                </span>
              </span>
              <span className="text-[10px] text-slate-500 font-normal hidden lg:inline ml-1 border border-slate-800 px-2 py-0.5 rounded bg-slate-900">
                Ctrl + ~
              </span>
            </button>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex gap-6 text-sm text-slate-400 font-medium">
            <a href="#about" className="hover:text-cyan-400 transition-colors">About</a>
            <a href="#skills" className="hover:text-cyan-400 transition-colors">Skills</a>
            <a href="#services" className="hover:text-cyan-400 transition-colors">Services</a>
            <a href="#projects" className="hover:text-cyan-400 transition-colors">Projects</a>
            <a href="#contact" className="hover:text-cyan-400 transition-colors">Contact</a>
          </nav>

          {/* Mobile Hamburger Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-slate-400 hover:text-cyan-400 focus:outline-none"
            aria-label="Toggle navigation menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Dropdown Navigation Menu */}
        {isMobileMenuOpen && (
          <nav className="md:hidden mt-3 pt-3 border-t border-slate-800 flex flex-col gap-3 font-mono text-xs text-slate-300 bg-slate-950/95 p-4 rounded-xl">
            <a href="#about" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-cyan-400 py-1">&gt; About</a>
            <a href="#skills" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-cyan-400 py-1">&gt; Skills</a>
            <a href="#services" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-cyan-400 py-1">&gt; Services</a>
            <a href="#projects" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-cyan-400 py-1">&gt; Projects</a>
            <a href="#contact" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-cyan-400 py-1">&gt; Contact</a>
          </nav>
        )}
      </header>

      <main className="max-w-5xl mx-auto px-6 py-12 space-y-24">
        
        {/* Hero Section */}
        <section id="about" className="space-y-8 pt-6">
          {/* Vibrant Open to Roles Banner */}
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
                Hi, I&apos;m <span className="text-cyan-400 drop-shadow-[0_0_12px_rgba(34,211,238,0.4)]">Rodney Binale</span>
              </h1>
              
              <div className="text-xl text-cyan-400 font-mono h-8 flex items-center gap-1">
                <span>{currentText}</span>
                <span className="inline-block w-2.5 h-6 bg-cyan-400 rounded-sm animate-pulse shadow-[0_0_12px_rgba(34,211,238,0.8)]" />
              </div>

              <p className="text-slate-400 leading-relaxed text-sm md:text-base font-sans">
                Founder & Lead Systems Engineer at <span className="bg-gradient-to-r from-cyan-400 to-teal-300 bg-clip-text text-transparent font-extrabold tracking-wider">BI-TECH Digital Solutions</span>. B.Sc. Information Systems Graduate from Maseno University. We deliver custom system development, Linux infrastructure management, network security audits, and enterprise ERP integration.
              </p>
            </div>

            {/* Right Profile Frame */}
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
                        BI-TECH Digital Solutions
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
              <span className="ml-2 text-xs text-slate-500">profile_summary.sh</span>
            </div>
            
            <div className="space-y-3 text-slate-300 leading-relaxed">
              <p className="flex items-center gap-1.5">
                <span className="text-cyan-400 font-bold">sysadmin@bitech:~$</span>
                <span className="text-slate-100">./display_profile.sh</span>
                <span className="inline-block w-2 h-4 bg-cyan-400 animate-pulse shadow-[0_0_10px_rgba(34,211,238,0.9)] ml-1" />
              </p>
              
              <p><span className="text-amber-400">Company:</span> BI-TECH Digital Solutions</p>
              <p><span className="text-amber-400">Owner:</span> Binale Rodney Khabanje</p>
              <p><span className="text-amber-400">Education:</span> B.Sc. Information Systems — Maseno University</p>
              <p><span className="text-amber-400">Specializations:</span> System Development, Linux Infrastructure, Network Engineering & ERP Systems</p>
              <p className="text-slate-400 pt-2 font-sans">
                I bridge the gap between software development and systems engineering. From building web applications in PHP, Python, and Next.js to provisioning Linux servers, configuring UFW firewalls, and optimizing enterprise ERP workflows, I focus on building secure, efficient, and dependable digital operations.
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
              <MessageSquare className="w-4 h-4 text-emerald-400"/> WhatsApp (+254 757 468 025)
            </a>

            <a 
              href="tel:+254759314735" 
              className="flex items-center gap-2 px-4 py-2.5 rounded-lg border border-cyan-500/40 bg-cyan-500/10 text-cyan-400 hover:bg-cyan-500/20 transition-all font-mono text-xs font-semibold"
            >
              <Phone className="w-4 h-4 text-cyan-400"/> Call (+254 759 314 735)
            </a>

            <a 
              href="/Rodney_Binale_Khabanje_Cv.pdf" 
              download="Rodney_Binale_Khabanje_Cv.pdf"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 px-4 py-2.5 rounded-lg border border-slate-800 bg-slate-900 text-slate-300 hover:border-cyan-500/50 hover:text-cyan-400 transition-all font-mono text-xs"
            >
              <FileText className="w-4 h-4 text-cyan-400"/> Download CV (PDF)
            </a>

            <button 
              onClick={() => setIsTerminalOpen(true)}
              className="px-5 py-2.5 rounded-lg bg-cyan-500 text-slate-950 font-semibold hover:bg-cyan-400 transition-all text-xs font-mono"
            >
              Open Web CLI
            </button>
          </div>
        </section>

        {/* Technical Skills Section */}
        <section id="skills" className="space-y-8">
          <div className="border-b border-slate-800 pb-4">
            <h2 className="text-2xl font-bold text-white flex items-center gap-2">
              <Cpu className="w-6 h-6 text-cyan-400"/> Technical Skills & Competencies
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

        {/* Offered Services Section */}
        <section id="services" className="space-y-8">
          <div className="border-b border-slate-800 pb-4">
            <h2 className="text-2xl font-bold text-white flex items-center gap-2">
              <Globe className="w-6 h-6 text-cyan-400"/> Offered Services @ BI-TECH Digital Solutions
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {servicesList.map((service, idx) => (
              <div key={idx} className="p-6 rounded-xl border border-slate-800 bg-slate-900/40 space-y-3 hover:border-cyan-500/40 transition-all">
                <h3 className="text-cyan-400 font-mono font-semibold text-sm">{service.title}</h3>
                <p className="text-slate-400 text-xs leading-relaxed font-sans">{service.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Featured Glassmorphic Projects Section */}
        <section id="projects" className="space-y-8">
          <div className="border-b border-slate-800 pb-4">
            <h2 className="text-2xl font-bold text-white flex items-center gap-2">
              <FolderGit2 className="w-6 h-6 text-cyan-400 drop-shadow-[0_0_8px_rgba(34,211,238,0.5)]"/> Featured Projects & Core Systems
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, idx) => (
              <div 
                key={idx} 
                className="relative group rounded-2xl p-0.5 bg-gradient-to-b from-white/10 via-slate-800/40 to-white/5 hover:from-cyan-500/50 hover:via-emerald-500/30 hover:to-indigo-500/50 transition-all duration-500 shadow-xl hover:shadow-[0_0_30px_rgba(34,211,238,0.2)]"
              >
                {/* Ambient Backlight Glow Effect */}
                <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500/20 to-emerald-500/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                {/* Glass Card Container */}
                <div className="relative h-full w-full bg-slate-900/70 backdrop-blur-md rounded-[15px] p-6 flex flex-col justify-between space-y-5 border border-white/5 group-hover:border-transparent transition-colors">
                  
                  {/* Header & Status Pill */}
                  <div className="space-y-3">
                    <div className="flex justify-between items-start gap-4">
                      <h3 className="text-lg font-bold text-white group-hover:text-cyan-300 transition-colors tracking-tight">
                        {project.title}
                      </h3>
                      <a 
                        href={project.github} 
                        target="_blank" 
                        rel="noreferrer" 
                        className="p-2 text-slate-400 hover:text-cyan-400 hover:bg-cyan-500/10 rounded-lg backdrop-blur-sm border border-transparent hover:border-cyan-500/30 transition-all"
                        title="View Source Repository"
                      >
                        <ExternalLink className="w-5 h-5"/>
                      </a>
                    </div>

                    <div className="flex items-center gap-2">
                      <span className="inline-flex items-center gap-1.5 text-[11px] font-mono px-3 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 shadow-[0_0_10px_rgba(52,211,153,0.15)]">
                        <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                        {project.status}
                      </span>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-slate-300 text-xs sm:text-sm leading-relaxed font-sans">
                    {project.description}
                  </p>

                  {/* Tech Tag Pills */}
                  <div className="flex flex-wrap gap-2 pt-2 border-t border-slate-800/80">
                    {project.tags.map((tag, tIdx) => (
                      <span 
                        key={tIdx} 
                        className="text-[11px] font-mono text-cyan-300 bg-cyan-950/40 border border-cyan-800/50 px-2.5 py-1 rounded-md backdrop-blur-sm shadow-inner group-hover:border-cyan-500/40 transition-colors"
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

        {/* Contact Me Section */}
        <section id="contact" className="space-y-8 border-t border-slate-800 pt-12">
          <div className="border-b border-slate-800 pb-4">
            <h2 className="text-2xl font-bold text-white flex items-center gap-2">
              <Mail className="w-6 h-6 text-cyan-400"/> Contact Me & Let&apos;s Work Together
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Form */}
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
                <span className="text-cyan-400 font-semibold block">🏢 BI-TECH Digital Solutions</span>
                <p className="text-slate-300 text-xs font-sans">Custom System Development | Linux Infrastructure | Cyber Defense</p>
                <p className="text-slate-500 font-sans">Location: Bungoma / Kisumu, Kenya (Serving Global & Remote Clients)</p>
              </div>

              <div className="p-5 rounded-xl border border-slate-800 bg-slate-900/40 space-y-2">
                <span className="text-cyan-400 font-semibold block">🚀 Direct Calls</span>
                <p className="text-slate-300 text-sm font-bold">+254 759 314 735</p>
                <p className="text-slate-500 font-sans">Available for phone discussions & interviews.</p>
              </div>

              <div className="p-5 rounded-xl border border-slate-800 bg-slate-900/40 space-y-2">
                <span className="text-emerald-400 font-semibold block">💬 WhatsApp Instant Chat</span>
                <p className="text-slate-300 text-sm font-bold">+254 757 468 025</p>
                <a 
                  href="https://wa.me/254757468025" 
                  target="_blank" 
                  rel="noreferrer"
                  className="inline-block text-emerald-400 underline pt-1 font-sans"
                >
                  Click to start WhatsApp chat
                </a>
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
                <span className="ml-2 text-xs font-mono text-slate-400">sysadmin@bitech:~ (bash)</span>
              </div>
              <button 
                onClick={() => setIsTerminalOpen(false)}
                className="text-slate-400 hover:text-white transition-colors"
              >
                <X className="w-5 h-5"/>
              </button>
            </div>

            {/* Terminal Body */}
            <div className="flex-1 p-4 overflow-y-auto font-mono text-sm space-y-4">
              {terminalHistory.map((item, index) => (
                <div key={index} className="space-y-1">
                  {item.command !== undefined && (
                    <div className="flex items-center gap-2 text-slate-300">
                      <span className="text-cyan-400 font-bold">sysadmin@bitech:~$</span>
                      <span>{item.command}</span>
                    </div>
                  )}
                  <div>{item.output}</div>
                </div>
              ))}
              
              {/* Input Line with Animated Glowing Cursor */}
              <form onSubmit={handleCommandSubmit} className="flex items-center gap-2 pt-2">
                <span className="text-cyan-400 font-bold">sysadmin@bitech:~$</span>
                <div className="flex-1 flex items-center">
                  <input
                    type="text"
                    value={inputVal}
                    onChange={(e) => setInputVal(e.target.value)}
                    autoFocus
                    placeholder="Type 'help'..."
                    className="bg-transparent text-slate-100 outline-none font-mono text-sm w-full"
                  />
                  <span className="inline-block w-2 h-4 bg-cyan-400 animate-pulse shadow-[0_0_10px_rgba(34,211,238,0.9)] -ml-1 pointer-events-none" />
                </div>
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
        © 2026 BI-TECH Digital Solutions. All Rights Reserved. Lead Engineer: Rodney Binale Khabanje.
      </footer>
    </div>
  );
}