import React from 'react';
import { Github, Linkedin, Mail, ExternalLink, Terminal, Shield, Cpu, Code2, FolderGit2 } from 'lucide-react';

export default function Portfolio() {
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
          <div className="flex items-center gap-2 text-cyan-400 font-mono font-bold text-base">
            <Terminal className="w-5 h-5" />
            <span>rodney@binalerodney:~#</span>
          </div>
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
          <p className="text-xl text-cyan-400 font-mono">
            Information Systems Graduate | SysAdmin & Network Security Specialist
          </p>

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

          <div className="flex gap-4 pt-2">
            <a href="https://github.com/BINALE540" target="_blank" rel="noreferrer" className="p-3 rounded-lg border border-slate-800 bg-slate-900 hover:border-cyan-500/50 hover:text-cyan-400 transition-all">
              <Github className="w-5 h-5" />
            </a>
            <a href="#contact" className="px-6 py-3 rounded-lg bg-cyan-500 text-slate-950 font-semibold hover:bg-cyan-400 transition-all text-sm font-mono">
              Get in Touch
            </a>
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
          <h2 className="text-2xl font-bold text-white">Let's Connect</h2>
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

      <footer className="border-t border-slate-800/80 py-8 text-center text-xs text-slate-500 font-mono">
        © 2026 Rodney Binale Khabanje. Deployed on Vercel.
      </footer>
    </div>
  );
}