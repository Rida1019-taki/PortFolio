"use client";

import React, { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";
import { playClick } from "@/lib/sound";

export default function ScrollProgress() {
  const [progress, setProgress] = useState(0);
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (totalScroll > 0) {
        const currentProgress = (window.scrollY / totalScroll) * 100;
        setProgress(Math.min(100, Math.max(0, currentProgress)));
      }
      setShowBackToTop(window.scrollY > 450);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    playClick();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      {/* ─── Top Thin Gold Scroll Progress Bar ─── */}
      <div className="fixed top-0 left-0 right-0 h-[2.5px] z-50 bg-transparent pointer-events-none">
        <div
          className="h-full bg-gradient-to-r from-[#D9A441] via-[#F5D061] to-[#10B981] transition-all duration-150 ease-out shadow-[0_0_12px_rgba(217,164,65,0.8)]"
          style={{ width: `${progress}%` }}
        />
      </div>

      {/* ─── Back To Top Button (Bottom Left) ─── */}
      {showBackToTop && (
        <button
          type="button"
          onClick={scrollToTop}
          title="Retour en haut"
          aria-label="Back to top"
          className="fixed bottom-6 left-6 z-40 flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-black/80 text-white shadow-2xl backdrop-blur-xl transition-all duration-300 hover:scale-110 hover:border-[#D9A441] hover:text-[#D9A441] hover:shadow-[0_0_20px_rgba(217,164,65,0.35)] animate-in fade-in zoom-in-95 cursor-pointer group"
        >
          <ArrowUp size={16} className="transition-transform group-hover:-translate-y-0.5" />
        </button>
      )}
    </>
  );
}
