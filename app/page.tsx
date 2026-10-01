'use client';

import React, { useState, useEffect, useRef } from 'react';
import { Mail, ExternalLink, Terminal as TerminalIcon, Shield, Cpu, FolderGit2, Globe, X, FileText } from 'lucide-react';

export default function Portfolio() {
  const titles = [
    "Information Systems Graduate",
    "SysAdmin & Network Engineer",
    "Systems Security Specialist",
    "Full-Stack Web Developer"
  ];

  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  // Terminal Modal State
  const [isTerminalOpen, setIsTerminalOpen] = useState(false);
  const [inputVal, setInputVal] = useState('');
  const [terminalHistory, setTerminalHistory] = useState<Array<{ command?: string; output: React.ReactNode }>>([
    {
      output: (
        <div className="text-slate-400">
          <p className="text-cyan-400 font-bold">Welcome to Rodney&apos;s Web CLI v1.0.0</p>
          <p className="text-xs">Type <span className="text-amber-400">help</span> to see available commands or <span className="text-amber-400">exit</span> to close.</p>
        </div>
      ),
    },
  ]);

  const terminalEndRef = useRef<HTMLDivElement>(null);

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
            <p><span className="text-amber-400 w-28 inline-block">projects</span> - List active engineering projects</p>
            <p><span className="text-amber-400 w-28 inline-block">about</span> - Display user profile details</p>
            <p><span className="text-amber-400 w-28 inline-block">resume</span> - Download Curriculum Vitae (PDF)</p>
            <p><span className="text-amber-400 w-28 inline-block">ping cybersentinel</span> - Simulate live security probe</p>
            <p><span className="text-amber-400 w-28 inline-block">contact</span> - Show contact details</p>
            <p><span className="text-amber-400 w-28 inline-block">clear</span> - Clear terminal screen</p>
            <p><span className="text-amber-400 w-28 inline-block">exit</span> - Close terminal overlay</p>
          </div>
        );
        break;

      case 'skills':
        responseOutput = (
          <div className="space-y-1 text-slate-300 font-mono text-xs">
            <p className="text-cyan-400 font-semibold">[+] TECHNICAL SKILLS BREAKDOWN</p>
            <p>├── <span className="text-amber-400">Languages:</span> TypeScript, JavaScript, Python 3, SQL, Bash</p>
            <p>├── <span className="text-amber-400">SysAdmin:</span> Linux (Ubuntu), SSH, UFW Firewall, System Diagnostics</p>
            <p>├── <span className="text-amber-400">Networking:</span> TCP/IP, Sockets, HTTP/SSL Auditing, Routing</p>
            <p>└── <span className="text-amber-400">Web & DevOps:</span> Next.js, React, Node.js, Express, Git, Vercel</p>
          </div>
        );
        break;

      case 'projects':
        responseOutput = (
          <div className="space-y-2 text-slate-300 text-xs font-mono">
            <p className="text-cyan-400 font-semibold">[+] ACTIVE REPOSITORIES</p>
            <p>1. <span className="text-emerald-400 font-bold">[Completed]</span> CyberSentinel — Python Vulnerability Auditor</p>
            <p>   URL: https://github.com/BINALE540/cybersentinel</p>
            <p>2. <span className="text-amber-400 font-bold">[In Progress]</span> MicroService Guard — TypeScript API Gateway</p>
            <p>3. <span className="text-slate-500 font-bold">[Planned]</span> NetPulse — Real-Time Telemetry Dashboard</p>
          </div>
        );
        break;

      case 'about':
        responseOutput = (
          <div className="text-slate-300 text-xs leading-relaxed space-y-1">
            <p className="text-cyan-400 font-bold">Rodney Binale Khabanje</p>
            <p>B.Sc. Information Systems — Maseno University</p>
            <p>Specialization: Linux System Administration, Network Security, and Full-Stack Engineering.</p>
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

      case 'ping cybersentinel':
        responseOutput = (
          <div className="space-y-1 text-xs font-mono text-emerald-400">
            <p>PING cybersentinel.local (127.0.0.1) 56(84) bytes of data.</p>
            <p>64 bytes from 127.0.0.1: icmp_seq=1 ttl=64 time=0.038 ms</p>
            <p>64 bytes from 127.0.0.1: icmp_seq=2 ttl=64 time=0.042 ms</p>
            <p>64 bytes from 127.0.0.1: icmp_seq=3 ttl=64 time=0.035 ms</p>
            <p className="text-cyan-400">[✓] Target operational. Multi-threaded TCP Scanner & Header auditor ready.</p>
          </div>
        );
        break;

      case 'contact':
        responseOutput = (
          <div className="text-xs text-slate-300 font-mono">
            <p><span className="text-cyan-400">Email:</span> rodneykbinalekhabanje@gmail.com</p>
            <p><span className="text-cyan-400">GitHub:</span> https://github.com/BINALE540</p>
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
          <p className="text-red-400 text-xs">
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

  const skills = [
    { 
      category: "Languages & Core", 
      items: ["TypeScript", "JavaScript", "Python 3", "SQL", "Bash / Shell"] 
    },
    { 
      category: "System Admin & Networking", 
      items: ["Linux (Ubuntu/Debian)", "TCP/IP & Sockets", "UFW & Security", "System Diagnostics", "SSH / UEFI / GRUB"] 
    },
    { 
      category: "Frontend & Frameworks", 
      items: ["Next.js", "React", "Tailwind CSS", "HTML5 & CSS3"] 
    },
    { 
      category: "Backend & Infrastructure", 
      items: ["Node.js", "Express", "REST APIs", "Git & GitHub", "Vercel"] 
    }
  ];

  const projects = [
    {
      title: "CyberSentinel — Vulnerability Scanner",
      status: "Completed",
      description: "Modular security auditing CLI tool built in Python for Linux environments. Performs multi-threaded TCP port probing, HTTP security header auditing with automatic protocol fallback, local UFW firewall checks, and timestamped JSON exports.",
      tags: ["Python 3", "Sockets", "Threading", "Linux", "JSON"],
      github: "https://github.com/BINALE540/cybersentinel",
      demo: "https://github.com/BINALE540/cybersentinel",
    },
    {
      title: "MicroService Guard — Auth Gateway",
      status: "In Progress",
      description: "High-performance reverse proxy handling JWT token rotation, rate limiting, and secure RBAC access control for distributed microservices.",
      tags: ["TypeScript", "Node.js", "Express", "PostgreSQL", "OAuth2"],
      github: "https://github.com/BINALE540",
      demo: "https://github.com/BINALE540",
    },
    {
      title: "NetPulse — Telemetry Dashboard",
      status: "Planned",
      description: "Real-time system telemetry tracking dashboard visualizing live server metrics, memory consumption, and network throughput via WebSockets.",
      tags: ["Next.js", "TypeScript", "Tailwind CSS", "WebSockets"],
      github: "https://github.com/BINALE540",
      demo: "https://github.com/BINALE540",
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
            <a href="#projects" className="hover:text-cyan-400 transition-colors">Projects</a>
            <a href="#contact" className="hover:text-cyan-400 transition-colors">Contact</a>
          </nav>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-6 py-12 space-y-24">
        
        {/* Hero Section */}
        <section id="about" className="space-y-6 pt-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-400 text-xs font-mono">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
            </span>
            Available for System Admin, Networking & Security Roles
          </div>

          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-white">
            Rodney Binale Khabanje
          </h1>
          
          {/* Dynamic Typewriter Effect */}
          <div className="text-xl md:text-2xl text-cyan-400 font-mono h-8 flex items-center">
            <span>{currentText}</span>
            <span className="animate-pulse ml-1 text-cyan-400 font-bold">|</span>
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
              <p><span className="text-amber-400">Specializations:</span> System Administration, Network Engineering, Linux Infrastructure & Web Security</p>
              <p className="text-slate-400 pt-2">
                I specialize in managing Linux environments, auditing network protocols, and engineering secure application layers. My technical skillset spans hands-on system administration (storage, permissions, firewalls, and boot configurations), network diagnostics and TCP/IP socket analysis, and full-stack development with Next.js, TypeScript, and Python.
              </p>
              <p className="text-slate-400">
                Whether automating local security audits, troubleshooting dual-boot systems, or building rate-limited API gateways, I focus on delivering secure, reliable, and high-performance infrastructure.
              </p>
            </div>
          </div>

          <div className="flex flex-wrap gap-4 pt-2">
            <a 
              href="https://github.com/BINALE540" 
              target="_blank" 
              rel="noreferrer" 
              className="flex items-center gap-2 px-4 py-2.5 rounded-lg border border-slate-800 bg-slate-900 text-slate-300 hover:border-cyan-500/50 hover:text-cyan-400 transition-all font-mono text-xs"
            >
              <Globe className="w-4 h-4 text-cyan-400" /> GitHub / BINALE540
            </a>

            {/* Resume Download Button */}
            <a 
              href="/Rodney_Binale_Khabanje_Cv.pdf" 
              download="Rodney_Binale_Khabanje_Cv.pdf"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 px-5 py-2.5 rounded-lg border border-cyan-500/40 bg-cyan-500/10 text-cyan-400 hover:bg-cyan-500/20 transition-all font-mono text-xs font-semibold"
            >
              <FileText className="w-4 h-4 text-cyan-400" /> Download CV (PDF)
            </a>

            <button 
              onClick={() => setIsTerminalOpen(true)}
              className="px-6 py-2.5 rounded-lg bg-cyan-500 text-slate-950 font-semibold hover:bg-cyan-400 transition-all text-xs font-mono"
            >
              Open Web CLI Shell
            </button>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="space-y-8">
          <div className="border-b border-slate-800 pb-4">
            <h2 className="text-2xl font-bold text-white flex items-center gap-2">
              <Cpu className="w-6 h-6 text-cyan-400" /> Technical Skills
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {skills.map((group, idx) => (
              <div key={idx} className="p-6 rounded-xl border border-slate-800 bg-slate-900/40 space-y-3 hover:border-slate-700/80 transition-all">
                <h3 className="text-cyan-400 font-mono font-semibold text-sm uppercase tracking-wider">{group.category}</h3>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((item, i) => (
                    <span key={i} className="px-3 py-1 rounded-md bg-slate-800/80 text-slate-300 text-xs font-mono border border-slate-700/50">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Projects Section */}
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
                    <span className={`inline-block mt-1 text-xs px-2.5 py-0.5 rounded font-mono ${
                      project.status === "Completed" 
                        ? "bg-emerald-500/10 text-emerald-400 border border-emerald-500/30" 
                        : "bg-amber-500/10 text-amber-400 border border-amber-500/30"
                    }`}>
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

        {/* Contact Section */}
        <section id="contact" className="space-y-6 border-t border-slate-800 pt-12">
          <h2 className="text-2xl font-bold text-white">Let&apos;s Connect</h2>
          <p className="text-slate-400 max-w-xl leading-relaxed">
            I am currently open to opportunities in System Administration, Network Engineering, Cybersecurity, and Software Development. Feel free to send a message or connect directly.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 pt-2">
            <a href="mailto:rodneykbinalekhabanje@gmail.com" className="inline-flex items-center gap-3 px-5 py-3 rounded-lg border border-slate-800 bg-slate-900 text-slate-200 hover:border-cyan-500/50 hover:text-cyan-400 transition-all text-sm font-mono">
              <Mail className="w-4 h-4 text-cyan-400" />
              rodneykbinalekhabanje@gmail.com
            </a>
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