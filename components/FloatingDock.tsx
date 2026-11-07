"use client";

import React, { useState, useEffect } from "react";
import {
  Briefcase,
  Layers,
  Terminal,
  Calendar,
  Command,
  ArrowUp,
  Cpu,
  Sparkles,
  Zap,
} from "lucide-react";
import { FaJava, FaReact } from "react-icons/fa";
import { playClick, playPop } from "@/lib/sound";

interface FloatingDockProps {
  onOpenBooking: () => void;
  activeSection?: string;
}

interface DockItem {
  id: string;
  label: string;
  icon: React.ComponentType<{ size?: number; className?: string }>;
  href?: string;
  onClick?: () => void;
  highlight?: boolean;
}

export default function FloatingDock({ onOpenBooking }: FloatingDockProps) {
  const [hoveredId, setHoveredId] = useState<string | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  const [activeSection, setActiveSection] = useState<string>("");

  // Show dock after scrolling down 250px and self-track active section
  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 250);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.2, rootMargin: "-10% 0px -40% 0px" }
    );

    ["work", "architecture", "api-playground", "terminal", "experience", "about"].forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      observer.disconnect();
    };
  }, []);

  const openCommandPalette = () => {
    playPop();
    const event = new KeyboardEvent("keydown", {
      key: "k",
      metaKey: true,
      ctrlKey: true,
      bubbles: true,
    });
    document.dispatchEvent(event);
  };

  const scrollTo = (id: string) => {
    playClick();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const dockItems: DockItem[] = [
    {
      id: "work",
      label: "Projets",
      icon: Briefcase,
      onClick: () => scrollTo("work"),
    },
    {
      id: "architecture",
      label: "Architecture",
      icon: Layers,
      onClick: () => scrollTo("architecture"),
    },
    {
      id: "api-playground",
      label: "Sandbox API",
      icon: Cpu,
      onClick: () => scrollTo("api-playground"),
    },
    {
      id: "terminal",
      label: "Terminal CLI",
      icon: Terminal,
      onClick: () => scrollTo("terminal"),
    },
    {
      id: "booking",
      label: "Réserver 15m",
      icon: Calendar,
      onClick: () => {
        playPop();
        onOpenBooking();
      },
      highlight: true,
    },
    {
      id: "cmd-k",
      label: "Menu ⌘K",
      icon: Command,
      onClick: openCommandPalette,
    },
  ];

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-40 transition-all duration-500 animate-in fade-in slide-in-from-bottom-5">
      <nav
        aria-label="Navigation rapide"
        className="flex items-center gap-1.5 sm:gap-2 rounded-full border border-white/15 bg-black/80 px-3 py-2 shadow-[0_20px_50px_rgba(0,0,0,0.85)] backdrop-blur-2xl ring-1 ring-white/10"
      >
        {dockItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeSection === item.id;
          const isHovered = hoveredId === item.id;

          return (
            <div key={item.id} className="relative">
              {/* Tooltip on Hover */}
              {isHovered && (
                <div className="absolute -top-10 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-lg border border-white/15 bg-neutral-900/95 px-2.5 py-1 text-[11px] font-mono font-medium text-white shadow-xl backdrop-blur-md animate-in fade-in zoom-in-95 pointer-events-none">
                  {item.label}
                  <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 h-2 w-2 rotate-45 border-b border-r border-white/15 bg-neutral-900/95" />
                </div>
              )}

              <button
                type="button"
                onClick={item.onClick}
                onMouseEnter={() => setHoveredId(item.id)}
                onMouseLeave={() => setHoveredId(null)}
                aria-label={item.label}
                className={`relative flex h-10 w-10 sm:h-11 sm:w-11 items-center justify-center rounded-full transition-all duration-200 cursor-pointer ${
                  item.highlight
                    ? "border border-[#D9A441] bg-gradient-to-tr from-[#D9A441]/30 via-[#D9A441]/10 to-transparent text-[#F3C669] shadow-[0_0_15px_rgba(217,164,65,0.4)] hover:scale-115 hover:shadow-[0_0_25px_rgba(217,164,65,0.7)]"
                    : isActive
                    ? "border border-white/30 bg-white/15 text-white scale-105"
                    : "text-gray-400 hover:text-white hover:bg-white/10 hover:scale-110"
                }`}
              >
                <Icon size={18} />

                {/* Active Indicator Dot */}
                {isActive && (
                  <span className="absolute -bottom-1 h-1 w-3 rounded-full bg-[#D9A441] shadow-[0_0_8px_#D9A441]" />
                )}
              </button>
            </div>
          );
        })}
      </nav>
    </div>
  );
}
