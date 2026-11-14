"use client";

import React from "react";
import { useLanguage } from "./LanguageProvider";

interface LanguageToggleProps {
  className?: string;
  variant?: "pill" | "mobile";
}

export default function LanguageToggle({
  className = "",
  variant = "pill",
}: LanguageToggleProps) {
  const { lang, setLang, mounted } = useLanguage();

  if (!mounted) {
    return (
      <div
        className={`h-9 w-16 rounded-xl border border-white/10 bg-neutral-950/80 opacity-50 ${className}`}
        aria-hidden="true"
      />
    );
  }

  if (variant === "mobile") {
    return (
      <div className={`grid grid-cols-2 gap-2 p-1.5 rounded-2xl bg-neutral-950/90 border border-white/10 ${className}`}>
        <button
          type="button"
          onClick={() => setLang("en")}
          className={`flex items-center justify-center gap-2 py-2.5 rounded-xl font-mono text-xs font-bold transition-all duration-300 ${
            lang === "en"
              ? "bg-[#D9A441] text-black shadow-[0_0_15px_rgba(217,164,65,0.4)]"
              : "text-gray-400 hover:text-white hover:bg-white/5"
          }`}
        >
          <span>ðŸ‡¬ðŸ‡§</span>
          <span>English</span>
        </button>

        <button
          type="button"
          onClick={() => setLang("fr")}
          className={`flex items-center justify-center gap-2 py-2.5 rounded-xl font-mono text-xs font-bold transition-all duration-300 ${
            lang === "fr"
              ? "bg-[#D9A441] text-black shadow-[0_0_15px_rgba(217,164,65,0.4)]"
              : "text-gray-400 hover:text-white hover:bg-white/5"
          }`}
        >
          <span>ðŸ‡«ðŸ‡·</span>
          <span>FranÃ§ais</span>
        </button>
      </div>
    );
  }

  return (
    <div
      className={`flex items-center rounded-2xl bg-neutral-950/80 p-1 border border-white/10 backdrop-blur-2xl shadow-[0_10px_30px_rgba(0,0,0,0.8)] ${className}`}
      role="group"
      aria-label={lang === "fr" ? "Sélecteur de langue" : "Language selector"}
    >
      <button
        type="button"
        onClick={() => setLang("en")}
        aria-pressed={lang === "en"}
        title="Switch to English"
        className={`px-2.5 py-1 text-[11px] font-mono font-bold rounded-xl transition-all duration-300 ${
          lang === "en"
            ? "bg-[#D9A441] text-black shadow-[0_0_12px_rgba(217,164,65,0.4)]"
            : "text-gray-400 hover:text-white hover:bg-white/5"
        }`}
      >
        EN
      </button>

      <button
        type="button"
        onClick={() => setLang("fr")}
        aria-pressed={lang === "fr"}
        title="Passer en FranÃ§ais"
        className={`px-2.5 py-1 text-[11px] font-mono font-bold rounded-xl transition-all duration-300 ${
          lang === "fr"
            ? "bg-[#D9A441] text-black shadow-[0_0_12px_rgba(217,164,65,0.4)]"
            : "text-gray-400 hover:text-white hover:bg-white/5"
        }`}
      >
        FR
      </button>
    </div>
  );
}
