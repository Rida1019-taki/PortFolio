"use client";

import React from "react";
import {
  GraduationCap,
  BookOpen,
  Award,
  Calendar,
  CheckCircle2,
  Sparkles,
  School,
} from "lucide-react";

export interface EducationItem {
  institution: string;
  degree: string;
  period: string;
  status: string;
  tag?: string;
  coursework?: string[];
}

interface EducationShowcaseProps {
  education: EducationItem[];
  t: {
    badge: string;
    title1: string;
    title2: string;
    desc: string;
    degreeType: string;
    activeBadge: string;
  };
}

export default function EducationShowcase({ education, t }: EducationShowcaseProps) {
  // Enhanced coursework data for richer academic storytelling
  const courseworkMap: Record<string, { tag: string; coursework: string[] }> = {
    "École Numérique Ahmed Al Hansali": {
      tag: "Formation d'Excellence • Génie Logiciel",
      coursework: [
        "Architecture Entreprise avec Spring Boot",
        "Interfaces Web Réactives avec React",
        "Clean Architecture & Principes SOLID",
        "Modélisation Relationnelle & MySQL",
        "Conteneurisation Docker & Outils CI/CD",
      ],
    },
    "ISTA Oued Zem": {
      tag: "Diplôme d'État • Option Mobile",
      coursework: [
        "Développement Mobile Android (Kotlin)",
        "Applications Cross-Platform (Flutter & Dart)",
        "Programmation Orientée Objet & Algorithmique",
        "Conception UML & Bases de Données",
      ],
    },
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto items-stretch">
      {education.map((edu, i) => {
        const isCurrent = edu.status === "current";
        const meta = courseworkMap[edu.institution] || {
          tag: isCurrent ? "Formation d'Excellence" : "Diplôme d'État",
          coursework: [
            "Génie Logiciel & Architecture",
            "Développement Web & Mobile",
            "Bases de Données & Algorithmique",
          ],
        };

        return (
          <div
            key={edu.institution}
            className="group relative h-full rounded-3xl border border-white/10 bg-gradient-to-b from-white/[0.05] via-white/[0.02] to-transparent p-1 transition-all duration-500 hover:-translate-y-1.5 hover:border-[#D9A441]/50 hover:shadow-[0_15px_45px_-15px_rgba(217,164,65,0.25)] flex flex-col"
          >
            {/* Ambient Corner Glow */}
            <div
              className={`absolute -top-16 -right-16 h-48 w-48 rounded-full blur-[80px] pointer-events-none transition-all duration-500 ${
                isCurrent
                  ? "bg-emerald-500/15 group-hover:bg-emerald-500/25"
                  : "bg-[#D9A441]/15 group-hover:bg-[#D9A441]/25"
              }`}
            />

            <div className="relative h-full rounded-[22px] bg-black/85 p-6 sm:p-8 backdrop-blur-2xl flex flex-col justify-between space-y-6 overflow-hidden">
              <div className="space-y-5">
                {/* Header Row: Icon + Badges */}
                <div className="flex items-center justify-between gap-3">
                  <div className="flex items-center gap-3.5">
                    <div
                      className={`flex h-14 w-14 items-center justify-center rounded-2xl border transition-transform duration-300 group-hover:scale-105 ${
                        isCurrent
                          ? "border-emerald-500/40 bg-emerald-500/10 text-emerald-400 shadow-[0_0_20px_rgba(16,185,129,0.25)]"
                          : "border-[#D9A441]/40 bg-[#D9A441]/10 text-[#D9A441] shadow-[0_0_20px_rgba(217,164,65,0.2)]"
                      }`}
                    >
                      {isCurrent ? <BookOpen size={26} /> : <GraduationCap size={28} />}
                    </div>

                    <div>
                      <span className="text-[11px] font-mono uppercase tracking-wider text-white/50 block">
                        {meta.tag}
                      </span>
                      <span className="text-xs font-mono font-bold text-[#D9A441] flex items-center gap-1.5 mt-0.5">
                        <Calendar size={11} />
                        <span>{edu.period}</span>
                      </span>
                    </div>
                  </div>

                  {/* Status Indicator */}
                  <div>
                    {isCurrent ? (
                      <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-500/40 bg-emerald-500/10 px-3 py-1 text-[11px] font-mono font-semibold text-emerald-400">
                        <span className="relative flex h-2 w-2">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                          <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
                        </span>
                        <span>{t.activeBadge || "En cours"}</span>
                      </span>
                    ) : (
                      <span className="inline-flex items-center gap-1.5 rounded-full border border-[#D9A441]/40 bg-[#D9A441]/10 px-3 py-1 text-[11px] font-mono font-semibold text-[#D9A441]">
                        <Award size={13} />
                        <span>Diplômé</span>
                      </span>
                    )}
                  </div>
                </div>

                {/* Degree Title & Institution */}
                <div className="pt-2">
                  <h3 className="text-2xl font-extrabold text-white leading-snug group-hover:text-[#D9A441] transition-colors duration-300">
                    {edu.degree}
                  </h3>
                  <p className="text-sm font-semibold text-gray-300 mt-1 flex items-center gap-1.5">
                    <School size={15} className="text-[#D9A441]" />
                    <span>{edu.institution}</span>
                  </p>
                </div>

                {/* Academic Highlights & Coursework */}
                <div className="space-y-2.5 pt-2">
                  <span className="text-[11px] font-mono uppercase tracking-wider text-white/50 block">
                    Matières & Compétences Clés :
                  </span>
                  <div className="grid gap-2">
                    {meta.coursework.map((course, idx) => (
                      <div
                        key={idx}
                        className="flex items-center gap-2 text-xs text-gray-300 bg-white/[0.02] border border-white/5 rounded-xl px-3 py-2"
                      >
                        <CheckCircle2
                          size={13}
                          className={isCurrent ? "text-emerald-400" : "text-[#D9A441]"}
                        />
                        <span>{course}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Bottom Verification Line */}
              <div className="border-t border-white/10 pt-4 flex items-center justify-between text-xs font-mono text-gray-400">
                <span className="flex items-center gap-1.5">
                  <Sparkles size={13} className="text-[#D9A441]" />
                  <span>Validation Académique</span>
                </span>
                <span className="text-white/60">Béni Mellal, Maroc</span>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
