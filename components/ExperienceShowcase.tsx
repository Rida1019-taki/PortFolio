"use client";

import React from "react";
import {
  Briefcase,
  MapPin,
  Calendar,
  CheckCircle2,
  Server,
  Layers,
  Database,
  Users,
  Sparkles,
} from "lucide-react";
import { FaJava, FaReact, FaGitAlt, FaLaravel } from "react-icons/fa";
import { SiSpringboot, SiMysql } from "react-icons/si";
import { useLanguage } from "@/components/LanguageProvider";

export interface ExperienceItem {
  company: string;
  role: string;
  service: string;
  period: string;
  status: string;
  location: string;
  description: string;
  responsibilities: string[];
  technologies: string[];
}

interface ExperienceShowcaseProps {
  experiences: ExperienceItem[];
  t: {
    badge: string;
    title1: string;
    title2: string;
    desc: string;
    skaii: {
      role: string;
      service: string;
      period: string;
      currentBadge: string;
      desc: string;
      responsibilitiesTitle: string;
      responsibilities: string[];
      techLabel: string;
    };
  };
}

// Icon helper for experience tags
function getExpTechIcon(tag: string) {
  const lower = tag.toLowerCase();
  if (lower.includes("react")) return <FaReact className="text-[#61DAFB]" size={14} />;
  if (lower.includes("spring")) return <SiSpringboot className="text-[#6DB33F]" size={14} />;
  if (lower.includes("java")) return <FaJava className="text-[#ED8B00]" size={14} />;
  if (lower.includes("laravel")) return <FaLaravel className="text-[#FF2D20]" size={14} />;
  if (lower.includes("mysql")) return <SiMysql className="text-[#4479A1]" size={14} />;
  if (lower.includes("git")) return <FaGitAlt className="text-[#F05032]" size={14} />;
  return <span className="text-[#D9A441] text-xs font-mono">#</span>;
}

export default function ExperienceShowcase({ experiences, t }: ExperienceShowcaseProps) {
  const { lang } = useLanguage();
  const isFr = lang === "fr";
  return (
    <div className="w-full space-y-8 max-w-5xl mx-auto">
      {experiences.map((exp, i) => {
        const isCurrent = exp.status === "current";

        return (
          <div
            key={exp.company}
            className="group relative rounded-3xl border border-white/10 bg-gradient-to-b from-white/[0.05] via-white/[0.02] to-transparent p-1 transition-all duration-500 hover:border-[#D9A441]/50 hover:shadow-[0_15px_50px_-15px_rgba(217,164,65,0.25)]"
          >
            {/* Ambient Background Aura */}
            <div className="absolute -top-20 -right-20 h-72 w-72 rounded-full bg-[#D9A441]/10 blur-[100px] pointer-events-none group-hover:bg-[#D9A441]/20 transition-all duration-500" />

            <div className="relative rounded-[22px] bg-black/85 p-6 sm:p-10 backdrop-blur-2xl space-y-8">
              
              {/* Top Header Card */}
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 border-b border-white/10 pb-6">
                
                {/* Left: Company & Role Details */}
                <div className="flex items-start sm:items-center gap-5">
                  <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl border border-[#D9A441]/30 bg-[#D9A441]/10 text-[#D9A441] shadow-[0_0_25px_rgba(217,164,65,0.2)] group-hover:scale-105 transition-transform duration-300">
                    <Briefcase size={28} />
                  </div>

                  <div className="space-y-1">
                    <div className="flex flex-wrap items-center gap-3">
                      <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight group-hover:text-[#D9A441] transition-colors duration-300">
                        {exp.company}
                      </h3>
                      <span className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-mono text-gray-300">
                        <MapPin size={11} className="text-[#D9A441]" />
                        <span>{exp.location}</span>
                      </span>
                    </div>

                    <div className="flex flex-wrap items-center gap-2 text-xs sm:text-sm font-mono pt-0.5">
                      <span className="text-[#D9A441] font-bold">
                        {exp.role}
                      </span>
                      <span className="text-white/30 hidden sm:inline">•</span>
                      <span className="text-gray-300 font-medium">
                        {exp.service}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Right: Status & Period */}
                <div className="flex items-center gap-2.5 self-start md:self-auto">
                  {isCurrent && (
                    <span className="inline-flex items-center gap-2 rounded-full border border-emerald-500/40 bg-emerald-500/10 px-3.5 py-1 text-xs font-mono font-semibold text-emerald-400">
                      <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
                      </span>
                      <span>{t.skaii.currentBadge || (isFr ? "En poste" : "Current role")}</span>
                    </span>
                  )}
                  <span className="rounded-xl border border-white/10 bg-white/5 px-3.5 py-1 text-xs font-mono text-gray-300">
                    <Calendar size={12} className="inline mr-1.5 text-[#D9A441]" />
                    {exp.period}
                  </span>
                </div>
              </div>

              {/* Company Summary Description */}
              <p className="text-sm sm:text-base text-gray-200 leading-relaxed font-normal">
                {exp.description}
              </p>

              {/* 4 Structured Achievement Cards */}
              <div className="space-y-3">
                <h4 className="text-xs font-mono uppercase tracking-widest text-[#D9A441] font-bold flex items-center gap-2">
                  <Sparkles size={13} />
                  <span>{t.skaii.responsibilitiesTitle ||
                    (isFr ? "// Missions & Réalisations Clés" : "// Key Missions & Achievements")}</span>
                </h4>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  {exp.responsibilities.map((resp, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/[0.02] p-4 transition-all duration-300 hover:border-white/20 hover:bg-white/[0.04]"
                    >
                      <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-lg bg-[#D9A441]/10 text-[#D9A441] mt-0.5">
                        <CheckCircle2 size={15} />
                      </div>
                      <p className="text-xs sm:text-sm text-gray-300 leading-relaxed font-medium">
                        {resp}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Technologies Applied */}
              <div className="border-t border-white/10 pt-5 flex flex-wrap items-center gap-2.5">
                <span className="text-xs font-mono uppercase tracking-wider text-white/50 mr-2">
                  {t.skaii.techLabel || (isFr ? "Technologies :" : "Technologies:")}
                </span>
                {exp.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="inline-flex items-center gap-1.5 rounded-lg border border-white/10 bg-white/5 px-3 py-1 text-xs font-mono text-gray-200 transition-colors hover:border-[#D9A441]/50 hover:text-white"
                  >
                    {getExpTechIcon(tech)}
                    <span>{tech}</span>
                  </span>
                ))}
              </div>

            </div>
          </div>
        );
      })}
    </div>
  );
}
