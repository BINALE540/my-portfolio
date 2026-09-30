"use client";

import React, { useState } from "react";
import { Terminal as TerminalIcon } from "lucide-react";

export default function TerminalWidget() {
  const [input, setInput] = useState("");
  const [history, setHistory] = useState<Array<{ cmd: string; output: string }>>([
    { cmd: "help", output: "Available commands: help, bio, stack, contact, clear" },
  ]);

  const handleCommand = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      const trimmed = input.trim().toLowerCase();
      let output = "";

      switch (trimmed) {
        case "help":
          output = "Available commands: help, bio, stack, contact, clear";
          break;
        case "bio":
          output = "Information Systems developer with expertise in web engineering, Linux environments, and systems security.";
          break;
        case "stack":
          output = "TypeScript, Next.js, Node.js, Tailwind CSS, Python, Ubuntu Linux, PostgreSQL, REST APIs";
          break;
        case "contact":
          output = "GitHub: github.com | LinkedIn: linkedin.com/in/binale-khabanje-84213a391 | Email: rodneykbinalekhabanje@gmail.com";
          break;
        case "clear":
          setHistory([]);
          setInput("");
          return;
        case "":
          output = "";
          break;
        default:
          output = `Command not recognized: '${trimmed}'. Type 'help' for options.`;
      }

      setHistory((prev) => [...prev, { cmd: input, output }]);
      setInput("");
    }
  };

  return (
    <div className="rounded-xl border border-slate-800 bg-slate-950/90 font-mono text-sm shadow-2xl overflow-hidden">
      <div className="bg-slate-900 px-4 py-2 border-b border-slate-800 flex items-center justify-between">
        <div className="flex gap-2">
          <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
          <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
        </div>
        <span className="text-xs text-slate-400 flex items-center gap-1">
          <TerminalIcon className="w-3 h-3 text-teal-400" /> bash — portfolio-cli
        </span>
      </div>

      <div className="p-4 space-y-3 min-h-[180px] max-h-[260px] overflow-y-auto">
        <p className="text-slate-500 text-xs">Type 'help' to explore via CLI commands.</p>

        {history.map((item, idx) => (
          <div key={idx} className="space-y-1">
            <div className="flex items-center gap-2 text-teal-400">
              <span>visitor@portfolio:~$</span>
              <span className="text-slate-100">{item.cmd}</span>
            </div>
            {item.output && <div className="text-slate-400 pl-4">{item.output}</div>}
          </div>
        ))}

        <div className="flex items-center gap-2 text-teal-400">
          <span>visitor@portfolio:~$</span>
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleCommand}
            className="bg-transparent border-none outline-none text-slate-100 w-full focus:ring-0"
            autoFocus
          />
        </div>
      </div>
    </div>
  );
}