// app/data/portfolioData.ts

export interface Certification {
  name: string;
  date: string;
}

export const PERSONAL_BIO = {
  name: "Binale Rodney Khabanje",
  company: "BI-TECH Digital Solutions",
  slogan: "Where Tech Meets Innovation",
  title: "Founder & Lead Systems Engineer",
  degree: "B.Sc. Information Systems — Maseno University",
  experience: "ICT Directorate Practical Experience (Kibabii University)",
  erpSpecialization: "ABNO Unisol ERP Configuration & Support",
  certifications: [
    { name: "Cisco: Cyber Threat Management", date: "2024" },
    { name: "Cisco: Networking Basics", date: "2026" },
    { name: "Cisco: Python Essentials 1", date: "2025" },
    { name: "Cisco: Introduction to Cybersecurity", date: "2023" }
  ] as Certification[],
  summary: `A results-driven Information Systems professional specializing in IT support, network administration, systems administration, cybersecurity concepts, and enterprise systems support...`
};

export const PROGRESS_SKILLS = [
  { name: "Network & Systems Administration (Linux/Windows, UFW, SSH)", level: 92 },
  { name: "Systems Development (Python, PHP, TS/JS, MySQL, REST APIs)", level: 88 },
  { name: "IT Support & Enterprise ERP (ABNO Unisol, OS Deployment)", level: 88 },
  { name: "Cybersecurity Concepts & System Hardening (Cisco Certified)", level: 60 }
];

export const SERVICES_LIST = [
  {
    id: "network_admin",
    title: "Network & Systems Administration",
    desc: "Provisioning Linux/Windows server environments, managing network subnets, configuring UFW firewalls, SSH access management, and network health monitoring."
  },
  {
    id: "web_dev",
    title: "Custom Systems & Web Development",
    desc: "Designing and engineering responsive web applications, custom software solutions, relational database schemas (MySQL/PostgreSQL), and RESTful APIs."
  },
  {
    id: "erp_support",
    title: "Enterprise IT Support & ERP Operations",
    desc: "Providing workstation provisioning, operating system installations, hardware troubleshooting, and supporting enterprise ERP systems like ABNO Unisol."
  },
  {
    id: "sec_audit",
    title: "Network Security & System Auditing",
    desc: "Conducting TCP port probing, HTTP header security checks, local firewall configuration, and applying Cisco Cyber Threat Management principles."
  }
];

export const PROJECTS = [
  {
    id: "erp_ops",
    title: "Enterprise ERP & ICT Infrastructure Operations",
    status: "Operational Experience",
    description: "Provided technical support at Kibabii University ICT Directorate. Diagnosed hardware and network faults, performed OS deployments, maintained workstation uptime, and handled configuration/troubleshooting for the ABNO Unisol ERP system.",
    tags: ["ABNO Unisol ERP", "IT Support", "Network Maintenance", "OS Deployment", "Hardware Diagnostics"],
    github: "https://github.com/BINALE540",
    architectureDetails: {
      overview: "Managed tier-1/tier-2 enterprise ICT support operations, user role provisioning, network connectivity, and application workflow integrity across university departments.",
      keyFeatures: [
        "ABNO Unisol ERP system configuration and database synchronization troubleshooting.",
        "Workstation imaging, Linux/Windows OS deployment, and network port patching.",
        "System diagnostics and hardware maintenance across campus subnets."
      ],
      stack: ["ABNO Unisol ERP", "Windows Server", "Ubuntu Linux", "UFW", "MySQL", "LAN/WLAN"]
    }
  },
  {
    id: "cybersentinel",
    title: "CyberSentinel — Vulnerability Scanner",
    status: "Completed",
    description: "Modular security auditing CLI tool built in Python for Linux environments. Performs multi-threaded TCP port probing, HTTP security header auditing with automatic protocol fallback, local UFW firewall checks, and timestamped JSON exports.",
    tags: ["Python 3", "Sockets", "Threading", "Linux", "JSON"],
    github: "https://github.com/BINALE540/cybersentinel",
    architectureDetails: {
      overview: "CyberSentinel is a modular CLI application designed for rapid network probing and security verification on Linux hosts.",
      keyFeatures: [
        "Multi-threaded socket pool for non-blocking TCP port range checks.",
        "Automated HTTP/HTTPS header inspection verifying HSTS, CSP, X-Frame-Options, and CORS policies.",
        "Local UFW firewall rule verification and structured JSON auditing reports."
      ],
      stack: ["Python 3", "Sockets Engine", "Threading Module", "UFW CLI", "JSON Data Layer"]
    }
  },
  {
    id: "maseno_foods",
    title: "Maseno Foods Hub — Campus Web Platform",
    status: "Completed",
    description: "Responsive web-based food ordering platform serving university students and local campus vendors. Designed relational MySQL database schemas, implemented secure session handling, and optimized backend query performance.",
    tags: ["PHP", "MySQL", "JavaScript", "HTML5", "CSS3"],
    github: "https://maseno-connect.onrender.com",
    architectureDetails: {
      overview: "A full-stack web application optimizing food order workflows and vendor management for Maseno University campus ecosystem.",
      keyFeatures: [
        "Normalized MySQL relational database schema supporting vendor inventories and order states.",
        "Secure PHP session handling and prepared statements against SQL injection.",
        "Containerized deployment environment running on Render cloud architecture."
      ],
      stack: ["PHP 8", "MySQL", "Apache", "Docker", "Render PaaS"]
    }
  },
];