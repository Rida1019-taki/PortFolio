"use client";

import React from "react";
import {
  FileText,
  Download,
  ExternalLink,
  CheckCircle2,
  Sparkles,
  ShieldCheck,
  Zap,
  Clock,
  MapPin,
  User,
} from "lucide-react";

interface ResumeShowcaseProps {
  t: {
    badge: string;
    title1: string;
    title2: string;
    desc: string;
    btnDownload: string;
  };
}

export default function ResumeShowcase({ t }: ResumeShowcaseProps) {
  const cvPath = "/docs/Rida_Taki_CV.pdf";

  return (
    <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-b from-white/[0.05] via-white/[0.02] to-transparent p-6 sm:p-10 lg:p-12 backdrop-blur-2xl shadow-2xl">
      {/* Ambient Top Glow */}
      <div className="absolute -top-32 left-1/2 -translate-x-1/2 h-72 w-96 rounded-full bg-[#D9A441]/15 blur-3xl pointer-events-none" />

      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        
        {/* Left Column: Visual Document Card */}
        <div className="lg:col-span-6 space-y-6">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-semibold text-[#D9A441] backdrop-blur-md">
            <FileText size={14} />
            <span>{t.badge}</span>
          </div>

          <div className="space-y-3">
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight">
              <span>{t.title1} </span>
              <br />
              <span className="text-[#D9A441] font-extrabold">{t.title2}</span>
            </h2>

            <p className="text-sm sm:text-base text-gray-300 leading-relaxed font-normal">
              {t.desc}
            </p>
          </div>

          {/* Quick Recruiter Checkpoints */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
            <div className="flex items-center gap-2.5 rounded-xl border border-white/5 bg-white/[0.02] px-3.5 py-2.5 text-xs font-mono text-gray-200">
              <User size={14} className="text-[#D9A441] shrink-0" />
              <span>Full Stack & Mobile Developer</span>
            </div>
            <div className="flex items-center gap-2.5 rounded-xl border border-white/5 bg-white/[0.02] px-3.5 py-2.5 text-xs font-mono text-gray-200">
              <Clock size={14} className="text-emerald-400 shrink-0" />
              <span>Disponibilité : Immédiate</span>
            </div>
            <div className="flex items-center gap-2.5 rounded-xl border border-white/5 bg-white/[0.02] px-3.5 py-2.5 text-xs font-mono text-gray-200">
              <MapPin size={14} className="text-[#D9A441] shrink-0" />
              <span>Oued Zem • Hybride / Remote</span>
            </div>
            <div className="flex items-center gap-2.5 rounded-xl border border-white/5 bg-white/[0.02] px-3.5 py-2.5 text-xs font-mono text-gray-200">
              <ShieldCheck size={14} className="text-emerald-400 shrink-0" />
              <span>Profil & Diplômes Vérifiés</span>
            </div>
          </div>
        </div>

        {/* Right Column: Executive CV Action Hub */}
        <div className="lg:col-span-6 flex flex-col justify-center">
          <div className="relative rounded-3xl border border-[#D9A441]/30 bg-black/80 p-6 sm:p-8 backdrop-blur-2xl shadow-2xl space-y-6">
            
            {/* Top Document Header */}
            <div className="flex items-center justify-between border-b border-white/10 pb-5">
              <div className="flex items-center gap-3.5">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-[#D9A441]/40 bg-[#D9A441]/10 text-[#D9A441] shadow-[0_0_20px_rgba(217,164,65,0.25)]">
                  <FileText size={28} />
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-white font-mono">
                    Rida_Taki_CV.pdf
                  </h3>
                  <div className="text-xs font-mono text-gray-400 mt-0.5">
                    Format A4 • Mis à jour 2026
                  </div>
                </div>
              </div>

              <span className="rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-[11px] font-mono text-emerald-400">
                Prêt
              </span>
            </div>

            {/* Document Highlights */}
            <div className="space-y-2 text-xs font-mono text-gray-300">
              <div className="flex items-center gap-2">
                <CheckCircle2 size={13} className="text-[#D9A441]" />
                <span>Expertise : Java, Spring Boot, React, Kotlin, Flutter, MySQL</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 size={13} className="text-[#D9A441]" />
                <span>Expérience professionnelle et réalisations en entreprise</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 size={13} className="text-[#D9A441]" />
                <span>Projets majeurs, hackathons nationaux et certifications Cisco</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center gap-3 pt-2">
              {/* Primary Download Button */}
              <a
                href={cvPath}
                download
                target="_blank"
                rel="noopener noreferrer"
                className="group relative flex items-center justify-center gap-2.5 w-full sm:w-auto flex-1 rounded-2xl bg-gradient-to-r from-[#D9A441] to-[#B8860B] px-6 py-3.5 text-xs sm:text-sm font-bold text-black shadow-lg shadow-[#D9A441]/20 transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_30px_rgba(217,164,65,0.4)]"
              >
                <Download size={16} className="transition-transform group-hover:-translate-y-0.5" />
                <span>{t.btnDownload}</span>
              </a>

              {/* Secondary Online Viewer Button */}
              <a
                href={cvPath}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 w-full sm:w-auto rounded-2xl border border-white/15 bg-white/5 px-5 py-3.5 text-xs sm:text-sm font-mono font-semibold text-white transition-all duration-300 hover:border-white/30 hover:bg-white/10"
              >
                <span>Aperçu PDF</span>
                <ExternalLink size={14} />
              </a>
            </div>

          </div>
        </div>

      </div>

      {/* Subtle Bottom Accent Line */}
      <div className="absolute bottom-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-[#D9A441]/30 to-transparent" />
    </div>
  );
}
