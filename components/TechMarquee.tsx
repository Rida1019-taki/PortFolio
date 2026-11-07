"use client";

import React from "react";
import {
  FaJava,
  FaReact,
  FaDocker,
  FaLinux,
  FaGitAlt,
} from "react-icons/fa";
import {
  SiSpringboot,
  SiPostgresql,
  SiMysql,
  SiKotlin,
  SiFlutter,
  SiRedis,
  SiTypescript,
  SiTailwindcss,
  SiNextdotjs,
} from "react-icons/si";

interface TechItem {
  name: string;
  category: "backend" | "frontend" | "mobile" | "devops";
  icon: React.ComponentType<{ size?: number; className?: string }>;
  accent: string;
}

const TECH_STACK: TechItem[] = [
  { name: "Java 21 LTS", category: "backend", icon: FaJava, accent: "#E76F00" },
  { name: "Spring Boot 3.3", category: "backend", icon: SiSpringboot, accent: "#6DB33F" },
  { name: "React 19", category: "frontend", icon: FaReact, accent: "#61DAFB" },
  { name: "Next.js 16", category: "frontend", icon: SiNextdotjs, accent: "#FFFFFF" },
  { name: "PostgreSQL", category: "backend", icon: SiPostgresql, accent: "#4169E1" },
  { name: "Docker", category: "devops", icon: FaDocker, accent: "#2496ED" },
  { name: "Redis Cache", category: "backend", icon: SiRedis, accent: "#DC382D" },
  { name: "Kotlin", category: "mobile", icon: SiKotlin, accent: "#7F52FF" },
  { name: "Flutter", category: "mobile", icon: SiFlutter, accent: "#02569B" },
  { name: "TypeScript", category: "frontend", icon: SiTypescript, accent: "#3178C6" },
  { name: "MySQL", category: "backend", icon: SiMysql, accent: "#4479A1" },
  { name: "Tailwind CSS", category: "frontend", icon: SiTailwindcss, accent: "#06B6D4" },
  { name: "Linux Server", category: "devops", icon: FaLinux, accent: "#FCC624" },
  { name: "Git & CI/CD", category: "devops", icon: FaGitAlt, accent: "#F05032" },
];

export default function TechMarquee() {
  const items = [...TECH_STACK, ...TECH_STACK];

  return (
    <div className="relative w-full overflow-hidden border-y border-white/10 bg-gradient-to-r from-neutral-950 via-black to-neutral-950 py-3 backdrop-blur-xl">
      {/* Left/Right Smooth Vignette Fades */}
      <div className="pointer-events-none absolute left-0 top-0 bottom-0 z-10 w-24 sm:w-40 bg-gradient-to-r from-[#0a0908] to-transparent" />
      <div className="pointer-events-none absolute right-0 top-0 bottom-0 z-10 w-24 sm:w-40 bg-gradient-to-l from-[#0a0908] to-transparent" />

      {/* Marquee Track */}
      <div className="flex w-max items-center gap-4 ticker-track group-hover:[animation-play-state:paused]">
        {items.map((tech, idx) => {
          const Icon = tech.icon;
          return (
            <div
              key={`${tech.name}-${idx}`}
              className="inline-flex items-center gap-2.5 rounded-full border border-white/10 bg-white/[0.03] px-3.5 py-1.5 backdrop-blur-md transition-all duration-300 hover:scale-105 hover:border-white/25 hover:bg-white/[0.08] cursor-default"
            >
              <span
                className="flex h-5 w-5 items-center justify-center rounded-full bg-white/5"
                style={{ color: tech.accent }}
              >
                <Icon size={13} />
              </span>
              <span className="text-xs font-mono font-semibold text-gray-200">
                {tech.name}
              </span>
              <span className="h-1 w-1 rounded-full bg-white/20" />
            </div>
          );
        })}
      </div>
    </div>
  );
}
