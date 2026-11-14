"use client";

import React, { useState, useRef, useEffect } from "react";
import { Terminal, Maximize2, Minimize2, Sparkles, CornerDownLeft, X, Copy, Check } from "lucide-react";
import { playTerminalKey, playSuccess, playClick } from "@/lib/sound";
import { triggerGoldConfetti } from "@/lib/confetti";
import { toast } from "sonner";
import { useLanguage } from "@/components/LanguageProvider";

interface CommandOutput {
  id: number;
  command: string;
  output: React.ReactNode;
}

const COMMAND_LIST = [
  "help",
  "whoami",
  "skills",
  "projects",
  "experience",
  "certifications",
  "cv",
  "contact",
  "sudo hire",
  "date",
  "clear",
];

export default function TerminalShowcase() {
  const { lang } = useLanguage();
  const fr = lang === "fr";
  const [history, setHistory] = useState<CommandOutput[]>([]);
  const [inputVal, setInputVal] = useState("");
  const [cmdIndex, setCmdIndex] = useState<number | null>(null);
  const [savedCommands, setSavedCommands] = useState<string[]>([]);
  const [copied, setCopied] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const terminalContainerRef = useRef<HTMLDivElement>(null);

  // Auto-scroll to bottom inside terminal container only when new commands are executed
  useEffect(() => {
    if (history.length > 0 && terminalContainerRef.current) {
      terminalContainerRef.current.scrollTop = terminalContainerRef.current.scrollHeight;
    }
  }, [history]);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    playTerminalKey();

    if (e.key === "Enter") {
      e.preventDefault();
      const trimmed = inputVal.trim();
      executeCommand(trimmed);
      if (trimmed) {
        setSavedCommands((prev) => [...prev, trimmed]);
      }
      setInputVal("");
      setCmdIndex(null);
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      if (savedCommands.length === 0) return;
      const nextIndex = cmdIndex === null ? savedCommands.length - 1 : Math.max(0, cmdIndex - 1);
      setCmdIndex(nextIndex);
      setInputVal(savedCommands[nextIndex] || "");
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      if (cmdIndex === null) return;
      const nextIndex = cmdIndex + 1;
      if (nextIndex >= savedCommands.length) {
        setCmdIndex(null);
        setInputVal("");
      } else {
        setCmdIndex(nextIndex);
        setInputVal(savedCommands[nextIndex] || "");
      }
    } else if (e.key === "Tab") {
      e.preventDefault();
      const current = inputVal.trim().toLowerCase();
      const match = COMMAND_LIST.find((c) => c.startsWith(current));
      if (match) {
        setInputVal(match);
      }
    }
  };

  const executeCommand = (cmd: string) => {
    const raw = cmd.toLowerCase().trim();
    if (!raw) return;

    if (raw === "clear") {
      setHistory([]);
      return;
    }

    let out: React.ReactNode = null;

    switch (raw) {
      case "help":
        out = (
          <div className="space-y-1.5 text-xs font-mono text-gray-300">
            <div className="text-[#D9A441] font-bold">{fr ? "Outils & Commandes disponibles :" : "Available tools & commands:"}</div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-1 pt-1">
              <div><span className="text-emerald-400 font-bold">whoami</span> — {fr ? "Présentation & Bio" : "Introduction & Bio"}</div>
              <div><span className="text-emerald-400 font-bold">skills</span> — {fr ? "Stack technique & Compétences" : "Tech stack & Skills"}</div>
              <div><span className="text-emerald-400 font-bold">projects</span> — {fr ? "Liste des projets majeurs" : "Key projects"}</div>
              <div><span className="text-emerald-400 font-bold">experience</span> — {fr ? "Parcours pro en entreprise" : "Professional experience"}</div>
              <div><span className="text-emerald-400 font-bold">certifications</span> — {fr ? "Accréditations Cisco" : "Cisco certifications"}</div>
              <div><span className="text-emerald-400 font-bold">cv</span> — {fr ? "Télécharger le CV en PDF" : "Download resume (PDF)"}</div>
              <div><span className="text-emerald-400 font-bold">contact</span> — {fr ? "Email, WhatsApp & Réseaux" : "Email, WhatsApp & Socials"}</div>
              <div><span className="text-emerald-400 font-bold">sudo hire</span> — {fr ? "Proposition d'embauche 🚀" : "Make a job offer 🚀"}</div>
              <div><span className="text-emerald-400 font-bold">date</span> — {fr ? "Horodatage local" : "Local timestamp"}</div>
              <div><span className="text-emerald-400 font-bold">clear</span> — {fr ? "Nettoyer le terminal" : "Clear the terminal"}</div>
            </div>
            <div className="text-[11px] text-gray-500 pt-1">{fr ? "Astuce : Utilisez [Tab] pour l'autocomplétion et [↑/↓] pour l'historique." : "Tip: Use [Tab] for autocompletion and [↑/↓] for history."}</div>
          </div>
        );
        break;

      case "whoami":
        out = (
          <div className="space-y-1 text-xs font-mono text-gray-300">
            <div className="text-white font-bold">{fr ? "Rida Taki — Développeur Full Stack & Mobile" : "Rida Taki — Full Stack & Mobile Developer"}</div>
            <div className="text-gray-400">{fr ? "📍 Oued Zem, Béni Mellal-Khénifra, Maroc" : "📍 Oued Zem, Béni Mellal-Khénifra, Morocco"}</div>
            <div className="text-gray-400">{fr ? "🎓 Diplômé ISTA (Full Stack) & Master ENAA (Ingénierie du Web)" : "🎓 ISTA graduate (Full Stack) & ENAA Master's (Web Engineering)"}</div>
            <div className="text-emerald-400 font-semibold pt-1">{fr ? "⚡ Spécialité : Architectures robustes Java / Spring Boot, React, Kotlin & Cloud." : "⚡ Specialty: Robust Java / Spring Boot, React, Kotlin & Cloud architectures."}</div>
          </div>
        );
        break;

      case "skills":
        out = (
          <div className="space-y-2 text-xs font-mono">
            <div>
              <span className="text-[#D9A441] font-bold">Backend & API : </span>
              <span className="text-gray-300">Java 17/21, Spring Boot, Spring Security, Hibernate, JPA, RESTful API</span>
            </div>
            <div>
              <span className="text-[#D9A441] font-bold">Frontend : </span>
              <span className="text-gray-300">React.js, Next.js, TypeScript, Tailwind CSS, Redux Toolkit</span>
            </div>
            <div>
              <span className="text-[#D9A441] font-bold">Mobile : </span>
              <span className="text-gray-300">Kotlin (Android Native), Flutter, Dart</span>
            </div>
            <div>
              <span className="text-[#D9A441] font-bold">{fr ? "Bases de données & DevOps : " : "Databases & DevOps: "}</span>
              <span className="text-gray-300">MySQL, PostgreSQL, Docker, Git, Linux, Postman</span>
            </div>
          </div>
        );
        break;

      case "projects":
        out = (
          <div className="space-y-2 text-xs font-mono text-gray-300">
            <div className="border-l-2 border-[#D9A441] pl-2">
              <span className="text-white font-bold">1. HealthCare+</span>{fr ? " : Plateforme médicale intelligente (Spring Boot + React + MySQL)" : ": Smart healthcare platform (Spring Boot + React + MySQL)"}
            </div>
            <div className="border-l-2 border-emerald-500 pl-2">
              <span className="text-white font-bold">2. LogiTrack</span>{fr ? " : Système de gestion logistique & traçabilité temps réel (Spring Boot + Vite)" : ": Logistics management & real-time tracking system (Spring Boot + Vite)"}
            </div>
            <div className="border-l-2 border-blue-500 pl-2">
              <span className="text-white font-bold">3. Auto Parc</span>{fr ? " : Supervision & maintenance de parc automobile (Java/Spring + Dashboard)" : ": Vehicle fleet monitoring & maintenance (Java/Spring + Dashboard)"}
            </div>
          </div>
        );
        break;

      case "experience":
        out = (
          <div className="text-xs font-mono text-gray-300 space-y-1">
            <div className="text-white font-bold">{fr ? "RSI (Réseaux et Systèmes d'Information) — Stagiaire Développeur" : "RSI (Networks & Information Systems) — Software Developer Intern"}</div>
            <div className="text-gray-400">{fr ? "Conception et développement d'applications métiers, refonte de modules back-office et APIs REST." : "Designed and built business applications, redesigned back-office modules and REST APIs."}</div>
          </div>
        );
        break;

      case "certifications":
        out = (
          <div className="text-xs font-mono text-gray-300 space-y-1">
            <div>🛡️ <span className="text-white font-semibold">{fr ? "Introduction à la Cybersécurité" : "Introduction to Cybersecurity"}</span> — Cisco Networking Academy</div>
            <div>💻 <span className="text-white font-semibold">{fr ? "Les Bases du Matériel Informatique" : "Computer Hardware Basics"}</span> — Cisco Networking Academy</div>
            <div>🐍 <span className="text-white font-semibold">Python Essentials 1</span> — Cisco Networking Academy</div>
          </div>
        );
        break;

      case "cv":
        triggerGoldConfetti();
        playSuccess();
        out = (
          <div className="text-xs font-mono text-gray-300 space-y-1">
            <div className="text-[#D9A441] font-bold">{fr ? "📄 Téléchargement du CV lancé !" : "📄 Resume download started!"}</div>
            <div>
              {fr ? "Lien direct :" : "Direct link:"}{" "}
              <a
                href="/docs/Rida_Taki_CV.pdf"
                download
                target="_blank"
                className="text-emerald-400 underline hover:text-emerald-300"
              >
                /docs/Rida_Taki_CV.pdf
              </a>
            </div>
          </div>
        );
        break;

      case "contact":
        out = (
          <div className="text-xs font-mono text-gray-300 space-y-1">
            <div>📧 Email : <span className="text-[#D9A441]">takirida72@gmail.com</span></div>
            <div>💬 WhatsApp : <span className="text-emerald-400">+212 649-487957</span></div>
            <div>🐙 GitHub : <a href="https://github.com/Rida1019-taki" target="_blank" className="underline hover:text-white">github.com/Rida1019-taki</a></div>
            <div>💼 LinkedIn : <a href="https://www.linkedin.com/in/rida-taki-bb44a8350" target="_blank" className="underline hover:text-white">linkedin.com/in/rida-taki</a></div>
          </div>
        );
        break;

      case "sudo hire":
      case "sudo hire rida":
      case "hire":
        triggerGoldConfetti();
        playSuccess();
        toast.success(fr ? "🎉 Excellente décision !" : "🎉 Excellent decision!", {
          description: fr ? "Redirection vers la section contact..." : "Redirecting to the contact section...",
        });
        setTimeout(() => {
          document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
        }, 1200);
        out = (
          <div className="rounded-xl border border-emerald-500/30 bg-emerald-500/10 p-3 text-xs font-mono text-emerald-400 space-y-1">
            <div className="font-bold text-base">{fr ? "✨ Offre d'embauche acceptée !" : "✨ Job offer accepted!"}</div>
            <div>{fr ? "Statut : Disponibilité immédiate en CDI / Freelance / Hybride." : "Status: Available immediately for full-time / freelance / hybrid roles."}</div>
            <div>{fr ? "Redirection vers le formulaire de contact en cours..." : "Redirecting to the contact form..."}</div>
          </div>
        );
        break;

      case "date":
        out = (
          <div className="text-xs font-mono text-gray-400">
            {new Date().toUTCString()} {fr ? "(Heure Maroc : UTC+1)" : "(Morocco time: UTC+1)"}
          </div>
        );
        break;

      default:
        out = (
          <div className="text-xs font-mono text-red-400">
            {fr ? "Commande non reconnue: " : "Command not found: "}&quot;{cmd}&quot;. {fr ? "Tapez " : "Type "}<span className="text-white font-bold">&quot;help&quot;</span>{fr ? " pour voir les commandes valides." : " to see available commands."}
          </div>
        );
        break;
    }

    setHistory((prev) => [...prev, { id: Date.now(), command: cmd, output: out }]);
  };

  const copyTerminalContent = () => {
    const text = history.map((h) => `$ ${h.command}`).join("\n");
    navigator.clipboard.writeText(text || "Terminal Rida Taki v2.0");
    setCopied(true);
    toast.success(fr ? "Contenu copié dans le presse-papier !" : "Content copied to clipboard!");
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-black/90 backdrop-blur-2xl shadow-2xl">
      {/* Top Window Chrome Bar */}
      <div className="flex items-center justify-between border-b border-white/10 bg-neutral-950/80 px-4 py-3 sm:px-6">
        <div className="flex items-center gap-2">
          <span className="h-3 w-3 rounded-full bg-red-500/80 transition-opacity hover:opacity-100" />
          <span className="h-3 w-3 rounded-full bg-yellow-500/80 transition-opacity hover:opacity-100" />
          <span className="h-3 w-3 rounded-full bg-green-500/80 transition-opacity hover:opacity-100" />
          <span className="ml-3 font-mono text-xs text-gray-400 flex items-center gap-2">
            <Terminal size={13} className="text-[#D9A441]" />
            <span className="hidden sm:inline">rida@workstation: ~ (zsh)</span><span className="sm:hidden text-xs">rida: ~</span>
          </span>
        </div>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={copyTerminalContent}
            title={fr ? "Copier l'historique" : "Copy history"}
            className="flex h-7 w-7 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-gray-400 transition-colors hover:bg-white/10 hover:text-white cursor-pointer"
          >
            {copied ? <Check size={12} className="text-emerald-400" /> : <Copy size={12} />}
          </button>
          <span className="rounded-full border border-emerald-500/30 bg-emerald-500/10 px-2.5 py-0.5 text-[10px] font-mono text-emerald-400 font-semibold">
            ONLINE
          </span>
        </div>
      </div>

      {/* Terminal Screen & Content */}
      <div
        ref={terminalContainerRef}
        className="p-3.5 sm:p-7 font-mono text-xs min-h-[320px] max-h-[460px] overflow-y-auto space-y-4 scrollbar-thin scrollbar-thumb-white/10 min-w-0"
        onClick={() => inputRef.current?.focus()}
      >
        {/* Welcome Banner */}
        <div className="space-y-1 text-gray-400 border-b border-white/5 pb-3">
          <div className="text-[#D9A441] font-bold text-sm">
            Rida Taki — Interactive Developer Console [v2.4.0]
          </div>
          <div>{fr ? "Système :" : "System:"} Linux 6.8.0-x86_64 • Java 21 LTS • Spring Boot 3.3 • Node 22</div>
          <div className="text-gray-500">
            {fr ? "Tapez " : "Type "}<span className="text-emerald-400 font-semibold">&apos;help&apos;</span>{fr ? " pour afficher la liste des commandes ou " : " to list available commands or "}<span className="text-[#D9A441] font-semibold">&apos;sudo hire&apos;</span>{fr ? " pour collaborer." : " to work together."}
          </div>
        </div>

        {/* Command Output History */}
        {history.map((item) => (
          <div key={item.id} className="space-y-1.5 animate-in fade-in duration-150">
            <div className="flex items-center gap-2 text-gray-400">
              <span className="text-[#D9A441] font-bold"><span className="hidden sm:inline">rida@workstation</span><span className="sm:hidden">rida</span></span>
              <span className="text-gray-600">:</span>
              <span className="text-emerald-400 font-semibold">~</span>
              <span className="text-gray-500">$</span>
              <span className="text-white font-semibold">{item.command}</span>
            </div>
            <div className="pl-4 border-l border-white/10 py-0.5">{item.output}</div>
          </div>
        ))}

        {/* Live Input Line */}
        <div className="flex items-center gap-2 pt-1">
          <span className="text-[#D9A441] font-bold shrink-0"><span className="hidden sm:inline">rida@workstation</span><span className="sm:hidden">rida</span></span>
          <span className="text-gray-600 shrink-0">:</span>
          <span className="text-emerald-400 font-semibold shrink-0">~</span>
          <span className="text-gray-500 shrink-0">$</span>
          <input
            ref={inputRef}
            type="text"
            value={inputVal}
            onChange={(e) => setInputVal(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder={fr ? "Tapez 'help', 'skills', 'projects'..." : "Type 'help', 'skills', 'projects'..."}
            className="w-full bg-transparent text-white font-mono text-xs focus:outline-none placeholder-gray-600 caret-[#D9A441]"
            autoCapitalize="off"
            autoComplete="off"
            spellCheck="false"
          />
        </div>

      </div>

      {/* Terminal Quick Command Pills (Footer) */}
      <div className="flex flex-wrap items-center gap-2 border-t border-white/10 bg-white/[0.02] px-4 py-2.5 sm:px-6">
        <span className="text-[10px] font-mono text-gray-500 mr-1 hidden sm:inline">{fr ? "Exemples :" : "Examples:"}</span>
        {["help", "whoami", "skills", "projects", "sudo hire"].map((cmd) => (
          <button
            key={cmd}
            type="button"
            onClick={() => {
              playClick();
              executeCommand(cmd);
            }}
            className="rounded-lg border border-white/10 bg-white/5 px-2.5 py-1 text-[11px] font-mono text-gray-300 transition-all hover:border-[#D9A441] hover:bg-[#D9A441]/10 hover:text-white cursor-pointer"
          >
            {cmd}
          </button>
        ))}
      </div>
    </div>
  );
}
