"use client";

import React from "react";
import { Sun, Moon } from "lucide-react";
import { useTheme } from "./ThemeProvider";

interface ThemeToggleProps {
  className?: string;
  showLabel?: boolean;
}

export default function ThemeToggle({ className = "", showLabel = false }: ThemeToggleProps) {
  const { theme, toggleTheme, mounted } = useTheme();

  // Until mounted, render a placeholder of matching size to prevent layout shifts
  if (!mounted) {
    return (
      <div
        className={`h-9 w-9 rounded-xl border border-white/10 bg-white/5 opacity-50 ${className}`}
        aria-hidden="true"
      />
    );
  }

  const isDark = theme === "dark";

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      title={isDark ? "Switch to light mode" : "Switch to dark mode"}
      className={`group relative flex items-center justify-center gap-2 rounded-xl transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D9A441] ${
        showLabel
          ? "px-4 py-2.5 text-xs font-mono font-semibold dark:bg-white/5 bg-slate-100 dark:border-white/10 border-slate-200 dark:text-gray-200 text-slate-700 hover:border-[#D9A441]/50 dark:hover:text-[#D9A441] hover:text-[#D9A441] shadow-sm"
          : "h-9 w-9 dark:bg-neutral-900/80 bg-white/90 border dark:border-white/10 border-slate-200/90 text-slate-700 dark:text-gray-300 hover:border-[#D9A441]/60 dark:hover:text-[#D9A441] hover:text-[#D9A441] dark:hover:bg-neutral-900 hover:bg-white shadow-[0_2px_8px_rgba(0,0,0,0.06)] dark:shadow-none"
      } ${className}`}
    >
      <div className="relative flex items-center justify-center">
        {isDark ? (
          <Sun
            size={16}
            className="text-[#D9A441] transition-transform duration-500 ease-out group-hover:rotate-45 group-hover:scale-110"
          />
        ) : (
          <Moon
            size={16}
            className="text-amber-600 transition-transform duration-500 ease-out group-hover:-rotate-12 group-hover:scale-110"
          />
        )}
      </div>

      {showLabel && (
        <span className="tracking-wider">
          {isDark ? "LIGHT MODE" : "DARK MODE"}
        </span>
      )}
    </button>
  );
}
