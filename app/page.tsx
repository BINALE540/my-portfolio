import TypewriterText from "./components/TypewriterText";
import TerminalWidget from "./components/TerminalWidget";
import React from "react";
import { Mail, ExternalLink, Code2, Terminal, Layers, ShieldCheck, Cpu } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Home() {
  const projects = [
  {
    title: "CyberSentinel — Vulnerability Scanner",
    description: "Automated network and security auditor built in Python for Linux environments. Features multi-threaded TCP port scanning, HTTP security header auditing with protocol fallback, local UFW firewall checks, and JSON reporting.",
    tags: ["Python 3", "Linux", "Sockets", "Threading", "Cybersecurity", "JSON"],
    github: "https://github.com/BINALE540/cybersentinel",
    demo: "https://github.com/BINALE540/cybersentinel",
  },
  {
    title: "MicroService Guard — Auth Gateway",
    description: "High-performance reverse proxy handling JWT token rotation, rate limiting, and secure RBAC access control for distributed microservices.",
    tags: ["TypeScript", "Node.js", "OAuth2", "PostgreSQL", "Systems"],
    github: "https://github.com/BINALE540",
    demo: "https://github.com/BINALE540",
  },
  {
    title: "NetPulse — Telemetry Dashboard",
    description: "Real-time system telemetry tracking dashboard visualizing live server metrics, memory consumption, and network throughput via WebSockets.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "WebSockets"],
    github: "https://github.com/BINALE540",
    demo: "https://github.com/BINALE540",
  },
];

  const skills = [
    "Information Systems",
    "TypeScript / JavaScript",
    "Next.js & React",
    "Tailwind CSS",
    "Python Data Analysis",
    "Node.js & Express",
    "Linux Systems (Ubuntu)",
    "Cybersecurity & Auditing",
    "PostgreSQL & SQL",
    "REST & GraphQL APIs",
    "Git & GitHub Workflow",
    "DevOps & Microservices",
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-teal-400 selection:text-slate-900">
      {/* Navigation Header */}
      <header className="sticky top-0 z-50 backdrop-blur-md bg-slate-950/80 border-b border-slate-800/80">
        <div className="max-w-5xl mx-auto px-6 py-4 flex justify-between items-center">
          <span className="font-mono text-xl font-bold tracking-tight text-teal-400 flex items-center gap-2">
            <Terminal className="w-5 h-5 text-teal-400" />
            Khabanje Rodney <span className="text-slate-100">.portfolio</span>
          </span>
          <nav className="flex gap-6 text-sm font-medium text-slate-400">
            <a href="#about" className="hover:text-teal-400 transition-colors">About</a>
            <a href="#projects" className="hover:text-teal-400 transition-colors">Projects</a>
            <a href="#skills" className="hover:text-teal-400 transition-colors">Tech Stack</a>
            <a href="#contact" className="hover:text-teal-400 transition-colors">Let's Connect</a>
          </nav>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-6 space-y-20 py-16">
        
        {/* About Me Section */}
        <section id="about" className="space-y-6">
          <div className="inline-flex items-center gap-2 rounded-full bg-teal-500/10 px-3.5 py-1 text-xs font-mono font-medium text-teal-400 ring-1 ring-inset ring-teal-500/20">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-teal-500"></span>
            </span>
            Information Systems Graduate | Maseno University
          </div>

          <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-slate-100 leading-tight min-h-[120px] sm:min-h-[150px]">
              Hi, I'm <TypewriterText />
          </h1>

          <p className="max-w-3xl text-lg text-slate-300 leading-relaxed">
            I am an <strong className="text-slate-100">Information Systems graduate</strong> from Maseno University with a strong foundation in software engineering, Linux system administration, and network security concepts. I build secure, high-performance web applications and backend systems tailored for real-world reliability.
          </p>

          <div className="flex flex-wrap items-center gap-4 pt-2">
            <a
              href="#projects"
              className="px-5 py-2.5 rounded-lg bg-teal-400 text-slate-950 font-semibold text-sm hover:bg-teal-300 transition-all shadow-lg shadow-teal-500/10 flex items-center gap-2"
            >
              <Code2 className="w-4 h-4" />
              View Projects
            </a>

            {/* Social Links */}
            <div className="flex items-center gap-3 pl-2">
              <a
                href="https://github.com"
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-lg border border-slate-800 bg-slate-900/50 text-slate-400 hover:text-teal-400 hover:border-slate-700 transition-all"
                aria-label="GitHub Profile"
              >
                <FaGithub className="w-5 h-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/binale-khabanje-84213a391?utm_source=share_via&utm_content=profile&utm_medium=member_android"
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-lg border border-slate-800 bg-slate-900/50 text-slate-400 hover:text-teal-400 hover:border-slate-700 transition-all"
                aria-label="LinkedIn Profile"
              >
                 <FaLinkedin className="w-5 h-5" />
              </a>
              <a
                href="mailto:rodneykbinalekhabanje@gmail.com"
                className="p-2.5 rounded-lg border border-slate-800 bg-slate-900/50 text-slate-400 hover:text-teal-400 hover:border-slate-700 transition-all"
                aria-label="Email Address"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
        </section>

        {/* Interactive CLI Widget */}
        <section className="space-y-4">
          <TerminalWidget />
        </section>

        {/* Projects Section */}
        <section id="projects" className="space-y-8">
          <div>
            <h2 className="text-2xl font-bold tracking-tight text-slate-100 flex items-center gap-2">
              <Layers className="w-6 h-6 text-teal-400" />
              Projects
            </h2>
            <p className="text-slate-400 text-sm mt-1">Core software development, automation, and security work.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, idx) => (
              <div
                key={idx}
                className="group relative flex flex-col justify-between rounded-xl border border-slate-800 bg-slate-900/40 p-6 transition-all hover:-translate-y-1 hover:border-slate-700 hover:bg-slate-900/80 hover:shadow-xl"
              >
                <div>
                  <div className="flex justify-between items-start">
                    <h3 className="text-lg font-semibold text-slate-100 group-hover:text-teal-400 transition-colors">
                      {project.title}
                    </h3>
                    <div className="flex gap-2">
                      <a href={project.github} target="_blank" rel="noreferrer" className="text-slate-400 hover:text-teal-400 transition-colors">
                        <FaGithub className="w-4 h-4" />
                      </a>
                      <a href={project.demo} target="_blank" rel="noreferrer" className="text-slate-400 hover:text-teal-400 transition-colors">
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    </div>
                  </div>

                  <p className="mt-3 text-sm text-slate-400 leading-relaxed">
                    {project.description}
                  </p>
                </div>

                <div className="mt-6 flex flex-wrap gap-2">
                  {project.tags.map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      className="rounded-md bg-slate-800/80 px-2.5 py-1 text-xs font-mono text-slate-300 border border-slate-700/50"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Tech Stack & Tools Section */}
        <section id="skills" className="space-y-6">
          <div>
            <h2 className="text-2xl font-bold tracking-tight text-slate-100 flex items-center gap-2">
              <Cpu className="w-6 h-6 text-teal-400" />
              Tech Stack & Tools
            </h2>
            <p className="text-slate-400 text-sm mt-1">Technologies, languages, and systems I work with daily.</p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
            {skills.map((skill, idx) => (
              <div
                key={idx}
                className="rounded-lg border border-slate-800/80 bg-slate-900/30 p-3 text-center text-sm font-medium text-slate-300 hover:border-teal-500/30 hover:text-teal-400 transition-colors"
              >
                {skill}
              </div>
            ))}
          </div>
        </section>

        {/* Let's Connect Section */}
        <section id="contact" className="rounded-2xl border border-slate-800 bg-gradient-to-b from-slate-900/50 to-slate-950 p-8 sm:p-12 text-center space-y-4">
          <h2 className="text-3xl font-bold text-slate-100 tracking-tight">Let's Connect</h2>
          <p className="max-w-md mx-auto text-slate-400 text-sm leading-relaxed">
            Whether you have a software engineering role, a consulting request, or want to collaborate on systems and security projects—feel free to get in touch.
          </p>
          <div className="pt-4 flex justify-center gap-4 text-sm font-medium">
            <a
              href="mailto:rodneykbinalekhabanje@gmail.com"
              className="px-6 py-3 rounded-lg bg-teal-400 text-slate-950 hover:bg-teal-300 font-semibold transition-all shadow-md shadow-teal-500/10 flex items-center gap-2"
            >
              <Mail className="w-4 h-4" />
              Send an Email
            </a>
          </div>
        </section>
      </main>

      <footer className="border-t border-slate-900 py-8 text-center text-xs text-slate-600 font-mono">
        © {new Date().getFullYear()} Rodney Binale Khabanje • Built with Next.js & Tailwind CSS on Ubuntu
      </footer>
    </div>
  );
}