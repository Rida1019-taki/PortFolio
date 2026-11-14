"use client";

import React, { useEffect, useState } from "react";
import { Bug, FlaskConical, Layers, Server, Terminal } from "lucide-react";
import { useLanguage } from "@/components/LanguageProvider";
import SystemArchitecture from "@/components/SystemArchitecture";
import ApiPlayground from "@/components/ApiPlayground";
import TerminalShowcase from "@/components/TerminalShowcase";
import BugHuntGame from "@/components/BugHuntGame";
import { playClick } from "@/lib/sound";

export const LAB_TABS = ["architecture", "api-playground", "terminal", "challenge"] as const;
export type LabTab = (typeof LAB_TABS)[number];

/** Other components (e.g. the command palette) dispatch this to open a specific tab. */
export const LAB_SELECT_EVENT = "lab:select";

const isLabTab = (value: string): value is LabTab => (LAB_TABS as readonly string[]).includes(value);

const COPY = {
  en: {
    badge: "Engineering Lab",
    title1: "Don't just read it.",
    title2: "Try it.",
    desc: "An interactive sandbox to explore how I design and build backends — inspect the architecture, call the API, use the terminal or hunt a bug.",
    tabs: {
      architecture: { label: "Architecture", hint: "N-tier system design" },
      "api-playground": { label: "API Playground", hint: "Live REST endpoints" },
      terminal: { label: "Terminal", hint: "Type 'help'" },
      challenge: { label: "Bug Hunt", hint: "Mini game" },
    },
  },
  fr: {
    badge: "Labo d'ingénierie",
    title1: "Ne vous contentez pas de lire.",
    title2: "Essayez.",
    desc: "Un bac à sable interactif pour découvrir comment je conçois mes backends — explorez l'architecture, appelez l'API, utilisez le terminal ou chassez un bug.",
    tabs: {
      architecture: { label: "Architecture", hint: "Conception N-tiers" },
      "api-playground": { label: "API Playground", hint: "Endpoints REST en direct" },
      terminal: { label: "Terminal", hint: "Tapez 'help'" },
      challenge: { label: "Bug Hunt", hint: "Mini-jeu" },
    },
  },
} as const;

const ICONS: Record<LabTab, React.ComponentType<{ size?: number; className?: string }>> = {
  architecture: Layers,
  "api-playground": Server,
  terminal: Terminal,
  challenge: Bug,
};

export default function EngineeringLab() {
  const { lang } = useLanguage();
  const copy = COPY[lang];
  const [active, setActive] = useState<LabTab>("architecture");

  useEffect(() => {
    const selectFromHash = () => {
      const id = window.location.hash.slice(1);
      if (isLabTab(id)) setActive(id);
    };
    const onSelect = (e: Event) => {
      const id = (e as CustomEvent<string>).detail;
      if (isLabTab(id)) setActive(id);
    };

    window.addEventListener("hashchange", selectFromHash);
    window.addEventListener(LAB_SELECT_EVENT, onSelect);
    // Deferred so the initial hash is applied after hydration
    const raf = requestAnimationFrame(selectFromHash);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("hashchange", selectFromHash);
      window.removeEventListener(LAB_SELECT_EVENT, onSelect);
    };
  }, []);

  const select = (tab: LabTab) => {
    if (tab === active) return;
    playClick();
    setActive(tab);
  };

  return (
    <div className="space-y-10">
      {/* Anchors keep legacy deep links (#terminal, #architecture, …) working */}
      <div aria-hidden className="relative">
        {LAB_TABS.map((id) => (
          <span key={id} id={id} className="absolute -top-28" />
        ))}
      </div>

      <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
        <div className="max-w-2xl space-y-4">
          <span className="section-label inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-semibold text-[#D9A441] backdrop-blur-md">
            <FlaskConical size={14} /> {copy.badge}
          </span>
          <h2 className="section-title text-3xl sm:text-5xl font-extrabold tracking-tight">
            <span className="gradient-text">{copy.title1} </span>
            <br />
            <span className="brand-gradient-text font-extrabold tracking-tight">{copy.title2}</span>
          </h2>
          <p className="text-base leading-relaxed text-[color:var(--muted)] sm:text-lg">{copy.desc}</p>
        </div>
      </div>

      <div
        role="tablist"
        aria-label={copy.badge}
        className="grid grid-cols-2 gap-2 rounded-2xl border border-white/10 bg-black/50 p-2 backdrop-blur-xl lg:grid-cols-4"
      >
        {LAB_TABS.map((tab) => {
          const Icon = ICONS[tab];
          const isActive = tab === active;
          return (
            <button
              key={tab}
              type="button"
              role="tab"
              id={`lab-tab-${tab}`}
              aria-selected={isActive}
              aria-controls={`lab-panel-${tab}`}
              onClick={() => select(tab)}
              className={`group flex items-center gap-3 rounded-xl px-4 py-3 text-left transition-all duration-300 cursor-pointer ${
                isActive
                  ? "bg-gradient-to-br from-[#D9A441]/25 to-[#D9A441]/5 ring-1 ring-[#D9A441]/50 shadow-[0_0_25px_rgba(217,164,65,0.15)]"
                  : "hover:bg-white/5"
              }`}
            >
              <span
                className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border transition-colors ${
                  isActive
                    ? "border-[#D9A441]/60 bg-[#D9A441]/15 text-[#F3C669]"
                    : "border-white/10 bg-white/5 text-gray-400 group-hover:text-white"
                }`}
              >
                <Icon size={17} />
              </span>
              <span className="min-w-0">
                <span className={`block text-sm font-semibold ${isActive ? "text-white" : "text-gray-300"}`}>
                  {copy.tabs[tab].label}
                </span>
                <span className="block truncate text-[11px] font-mono text-gray-500">{copy.tabs[tab].hint}</span>
              </span>
            </button>
          );
        })}
      </div>

      <div
        key={active}
        role="tabpanel"
        id={`lab-panel-${active}`}
        aria-labelledby={`lab-tab-${active}`}
        className="animate-in fade-in slide-in-from-bottom-2 duration-500"
      >
        {active === "architecture" && <SystemArchitecture />}
        {active === "api-playground" && <ApiPlayground />}
        {active === "terminal" && <TerminalShowcase />}
        {active === "challenge" && <BugHuntGame />}
      </div>
    </div>
  );
}
