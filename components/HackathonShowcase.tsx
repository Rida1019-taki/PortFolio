"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import {
  Award,
  ExternalLink,
  ChevronLeft,
  ChevronRight,
  Maximize2,
  X,
  Trophy,
  Quote,
  Sparkles,
  Users,
  CheckCircle2,
  Clock,
  Layers,
} from "lucide-react";
import { FaJava, FaReact, FaPython, FaDocker } from "react-icons/fa";
import { SiSpringboot, SiFlutter, SiMysql, SiFastapi } from "react-icons/si";
import { useLanguage } from "@/components/LanguageProvider";

export interface HackathonDetail {
  id: string;
  title: string;
  description: string;
  tag: string;
  date: string;
  role: string;
  quote: string;
  roleDetails: string[];
  photoCaptions: string[];
  images: string[];
  certificate?: string | null;
  certificateLabel?: string;
  tags: string[];
  stats?: {
    format: string;
    focus: string;
    team: string;
  };
}

interface HackathonShowcaseProps {
  hackathons: HackathonDetail[];
  t: {
    badge: string;
    title1: string;
    title2: string;
    desc: string;
    roleLabel: string;
    impactLabel: string;
    photosLabel: string;
    activeBadge: string;
    inActionBadge: string;
    viewAllPhotos: string;
  };
}

// Icon helper for tech tags
function getTechIcon(tag: string) {
  const lower = tag.toLowerCase();
  if (lower.includes("react")) return <FaReact className="text-[#61DAFB]" size={13} />;
  if (lower.includes("spring")) return <SiSpringboot className="text-[#6DB33F]" size={13} />;
  if (lower.includes("java")) return <FaJava className="text-[#ED8B00]" size={13} />;
  if (lower.includes("flutter")) return <SiFlutter className="text-[#02569B]" size={13} />;
  if (lower.includes("mysql")) return <SiMysql className="text-[#00758F]" size={13} />;
  if (lower.includes("python")) return <FaPython className="text-[#3776AB]" size={13} />;
  if (lower.includes("fastapi")) return <SiFastapi className="text-[#009688]" size={13} />;
  if (lower.includes("docker")) return <FaDocker className="text-[#2496ED]" size={13} />;
  return <span className="text-[#D9A441] text-xs font-mono">#</span>;
}

export default function HackathonShowcase({ hackathons, t }: HackathonShowcaseProps) {
  const { lang } = useLanguage();
  const fr = lang === "fr";
  const [selectedEventIdx, setSelectedEventIdx] = useState(0);
  const [activePhotoIdx, setActivePhotoIdx] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);

  const currentEvent = hackathons[selectedEventIdx] || hackathons[0];
  const images = currentEvent?.images?.length ? currentEvent.images : ["/hackathons/foottech.jpg"];

  // Keyboard navigation for lightbox
  useEffect(() => {
    if (!lightboxOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setLightboxOpen(false);
      if (e.key === "ArrowLeft") {
        setActivePhotoIdx((prev) => (prev === 0 ? images.length - 1 : prev - 1));
      }
      if (e.key === "ArrowRight") {
        setActivePhotoIdx((prev) => (prev === images.length - 1 ? 0 : prev + 1));
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [lightboxOpen, images.length]);

  const prevPhoto = (e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    setActivePhotoIdx((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextPhoto = (e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    setActivePhotoIdx((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const currentCaption =
    currentEvent.photoCaptions?.[activePhotoIdx] ||
    `${currentEvent.title} - Photo ${activePhotoIdx + 1}`;

  return (
    <div className="w-full space-y-10">
      {/* ═══ 1. INTERACTIVE EVENT SWITCHER TABS ═══ */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {hackathons.map((ev, idx) => {
          const isSelected = selectedEventIdx === idx;
          const photoCount = ev.images?.length || 1;
          const hasCert = Boolean(ev.certificate);

          return (
            <button
              key={ev.id}
              type="button"
              onClick={() => {
                setSelectedEventIdx(idx);
                setActivePhotoIdx(0);
              }}
              className={`group relative text-left p-5 rounded-2xl border transition-all duration-300 flex flex-col justify-between overflow-hidden ${
                isSelected
                  ? "border-[#D9A441] bg-gradient-to-b from-[#D9A441]/15 via-white/[0.04] to-transparent shadow-[0_0_30px_rgba(217,164,65,0.2)] -translate-y-1"
                  : "border-white/10 bg-white/[0.02] hover:border-white/20 hover:bg-white/[0.05]"
              }`}
            >
              {/* Top ambient highlight line for active */}
              {isSelected && (
                <div className="absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-[#D9A441] to-transparent" />
              )}

              <div>
                {/* Top Row: Event tag & status indicators */}
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span
                    className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10px] font-mono font-semibold uppercase tracking-wider ${
                      isSelected
                        ? "bg-[#D9A441] text-black"
                        : "bg-white/10 text-gray-300 group-hover:text-white"
                    }`}
                  >
                    {idx === 0 ? <Trophy size={11} /> : <Sparkles size={11} />}
                    <span>{ev.tag.split("•")[0].trim()}</span>
                  </span>

                  <span className="text-[11px] font-mono text-[#D9A441]/90 font-medium">
                    {ev.date}
                  </span>
                </div>

                {/* Event Title */}
                <h3
                  className={`text-base sm:text-lg font-bold leading-snug transition-colors ${
                    isSelected ? "text-white" : "text-gray-300 group-hover:text-white"
                  }`}
                >
                  {ev.title}
                </h3>

                {/* Subtitle / Role Preview */}
                <p className="text-xs text-[color:var(--muted)] mt-1.5 line-clamp-1">
                  {ev.role}
                </p>
              </div>

              {/* Bottom Badges */}
              <div className="flex items-center gap-2 mt-4 pt-3 border-t border-white/5 text-[11px] font-mono text-gray-400">
                <span className="flex items-center gap-1">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#D9A441]" />
                  <span>{photoCount} {photoCount > 1 ? "Photos" : "Photo"}</span>
                </span>
                {hasCert && (
                  <>
                    <span className="text-gray-600">•</span>
                    <span className="flex items-center gap-1 text-[#D9A441]">
                      <Award size={12} /> {fr ? "Attestation" : "Certificate"}
                    </span>
                  </>
                )}
              </div>
            </button>
          );
        })}
      </div>

      {/* ═══ 2. MAIN SPOTLIGHT HERO STAGE (BENTO SPLIT) ═══ */}
      <div className="relative rounded-3xl border border-white/10 bg-gradient-to-b from-white/[0.04] via-white/[0.02] to-transparent p-6 sm:p-8 lg:p-10 backdrop-blur-2xl shadow-2xl overflow-hidden">
        {/* Ambient Top Glow */}
        <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-[#D9A441]/10 blur-3xl pointer-events-none" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
          
          {/* ─── LEFT COLUMN: VISUAL ARENA (RIDA IN ACTION) ─── */}
          <div className="lg:col-span-6 flex flex-col justify-between space-y-4">
            
            {/* Top Bar above Image (Keeps image completely unobstructed) */}
            <div className="flex items-center justify-between gap-2 px-1">
              <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs font-mono font-semibold text-white backdrop-blur-md">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#D9A441] opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[#D9A441]" />
                </span>
                <span>{t.inActionBadge}</span>
              </span>

              <div className="flex items-center gap-2">
                {images.length > 1 && (
                  <span className="rounded-full border border-white/10 bg-white/5 px-2.5 py-0.5 text-xs font-mono text-gray-300">
                    <span className="text-[#D9A441] font-semibold">{activePhotoIdx + 1}</span> / {images.length}
                  </span>
                )}
                <button
                  type="button"
                  onClick={() => setLightboxOpen(true)}
                  title={fr ? "Agrandir en plein écran" : "View fullscreen"}
                  aria-label={fr ? "Agrandir en plein écran" : "View fullscreen"}
                  className="flex h-7 w-7 items-center justify-center rounded-lg bg-white/5 border border-white/10 text-gray-300 hover:text-[#D9A441] hover:border-[#D9A441]/40 transition-all"
                >
                  <Maximize2 size={13} />
                </button>
              </div>
            </div>

            {/* Main Stage Image Container (100% Uncropped & Crystal Clear) */}
            <div className="relative h-[420px] sm:h-[500px] lg:h-[560px] w-full rounded-2xl overflow-hidden border border-white/10 bg-neutral-950 flex items-center justify-center p-2 group/stage">
              
              {/* Sharp Foreground Image - ALWAYS object-contain so 100% of photo is visible */}
              <div
                className="relative w-full h-full cursor-pointer"
                onClick={() => setLightboxOpen(true)}
              >
                <Image
                  src={images[activePhotoIdx]}
                  alt={currentCaption}
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 750px"
                  className="object-contain w-full h-full drop-shadow-[0_10px_30px_rgba(0,0,0,0.8)] transition-all duration-300 group-hover/stage:scale-[1.01]"
                />
              </div>

              {/* Prev / Next Navigation Arrows on Edges */}
              {images.length > 1 && (
                <>
                  <button
                    type="button"
                    onClick={prevPhoto}
                    aria-label={fr ? "Photo précédente" : "Previous photo"}
                    className="absolute left-3 top-1/2 -translate-y-1/2 z-20 flex h-10 w-10 items-center justify-center rounded-full bg-black/75 border border-white/20 text-white hover:bg-[#D9A441] hover:text-black transition-all shadow-xl backdrop-blur-md opacity-80 hover:opacity-100"
                  >
                    <ChevronLeft size={20} />
                  </button>
                  <button
                    type="button"
                    onClick={nextPhoto}
                    aria-label={fr ? "Photo suivante" : "Next photo"}
                    className="absolute right-3 top-1/2 -translate-y-1/2 z-20 flex h-10 w-10 items-center justify-center rounded-full bg-black/75 border border-white/20 text-white hover:bg-[#D9A441] hover:text-black transition-all shadow-xl backdrop-blur-md opacity-80 hover:opacity-100"
                  >
                    <ChevronRight size={20} />
                  </button>
                </>
              )}
            </div>

            {/* Clickable Thumbnails Strip with dynamic live captions */}
            {images.length > 1 && (
              <div className="space-y-2 pt-1">
                <div className="flex items-center gap-2.5 overflow-x-auto pb-1 no-scrollbar">
                  {images.map((img, idx) => (
                    <button
                      key={img}
                      type="button"
                      onClick={() => setActivePhotoIdx(idx)}
                      className={`relative h-14 w-16 sm:h-16 sm:w-20 shrink-0 rounded-xl overflow-hidden border transition-all duration-300 ${
                        activePhotoIdx === idx
                          ? "border-[#D9A441] ring-2 ring-[#D9A441]/40 shadow-[0_0_15px_rgba(217,164,65,0.3)] scale-105"
                          : "border-white/10 opacity-60 hover:opacity-100 hover:border-white/30"
                      }`}
                      aria-label={`Photo ${idx + 1}`}
                    >
                      <Image
                        src={img}
                        alt={fr ? `Miniature ${idx + 1}` : `Thumbnail ${idx + 1}`}
                        fill
                        sizes="80px"
                        className="object-cover"
                      />
                    </button>
                  ))}
                </div>

                {/* Descriptive caption for current photo */}
                <p className="text-xs font-mono text-gray-300 flex items-center gap-1.5 px-1">
                  <span className="text-[#D9A441]">▸</span>
                  <span className="italic">{currentCaption}</span>
                </p>
              </div>
            )}
          </div>

          {/* ─── RIGHT COLUMN: RIDA'S IMPACT & ENGINEERING DECK ─── */}
          <div className="lg:col-span-6 flex flex-col justify-between space-y-6">
            <div className="space-y-5">
              
              {/* Event Badge & Date */}
              <div className="flex flex-wrap items-center justify-between gap-3">
                <span className="inline-flex items-center gap-2 rounded-full border border-[#D9A441]/30 bg-[#D9A441]/10 px-3.5 py-1 text-xs font-mono font-semibold text-[#D9A441]">
                  <Trophy size={13} />
                  <span>{currentEvent.tag}</span>
                </span>

                <span className="rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs font-mono text-gray-300">
                  {currentEvent.date}
                </span>
              </div>

              {/* Event Title */}
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white leading-tight">
                {currentEvent.title}
              </h2>

              {/* Personal Mindset Quote */}
              {currentEvent.quote && (
                <div className="relative rounded-2xl border border-[#D9A441]/30 bg-gradient-to-r from-[#D9A441]/10 via-transparent to-transparent p-4 sm:p-5">
                  <Quote size={20} className="text-[#D9A441] mb-2 opacity-80" />
                  <p className="text-sm sm:text-base font-medium italic text-gray-200 leading-relaxed">
                    &ldquo;{currentEvent.quote}&rdquo;
                  </p>
                </div>
              )}

              {/* Rida's Role Spotlight Box */}
              <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 space-y-3">
                <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#D9A441] font-bold">
                  <Layers size={14} />
                  <span>{t.roleLabel} : {currentEvent.role}</span>
                </div>

                {/* Role Details / Key Contributions */}
                <ul className="space-y-2.5 pt-1">
                  {currentEvent.roleDetails?.map((detail, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-gray-300 leading-relaxed">
                      <CheckCircle2 size={15} className="text-[#D9A441] shrink-0 mt-0.5" />
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Full Description Story */}
              <p className="text-sm text-[color:var(--muted)] leading-relaxed font-normal">
                {currentEvent.description}
              </p>
            </div>

            {/* Bottom Actions: Certificate & Tech Stack */}
            <div className="space-y-5 pt-4 border-t border-white/10">
              
              {/* Official Certificate Action Button (if present) */}
              {currentEvent.certificate && (
                <div>
                  <a
                    href={currentEvent.certificate}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group/cert inline-flex items-center justify-between w-full rounded-2xl border border-[#D9A441]/60 bg-gradient-to-r from-[#D9A441]/20 via-[#D9A441]/10 to-transparent p-4 text-xs sm:text-sm font-mono font-bold text-white hover:border-[#D9A441] hover:bg-[#D9A441] hover:text-black transition-all duration-300 shadow-lg"
                  >
                    <span className="flex items-center gap-2.5">
                      <Award size={18} className="text-[#D9A441] group-hover/cert:text-black transition-colors" />
                      <span>{currentEvent.certificateLabel ||
                        (fr ? "Voir l'Attestation Officielle" : "View Official Certificate")}</span>
                    </span>
                    <ExternalLink
                      size={16}
                      className="transition-transform group-hover/cert:translate-x-1 group-hover/cert:-translate-y-1"
                    />
                  </a>
                </div>
              )}

              {/* Tech Stack Chips with Real Logos */}
              <div className="space-y-2">
                <span className="text-[11px] font-mono uppercase tracking-wider text-gray-400">
                  {fr ? "Technologies Déployées :" : "Technologies Used:"}
                </span>
                <div className="flex flex-wrap gap-2">
                  {currentEvent.tags.map((tg) => (
                    <span
                      key={tg}
                      className="inline-flex items-center gap-1.5 rounded-lg border border-white/10 bg-white/5 px-2.5 py-1 text-xs font-mono text-gray-200 transition-colors hover:border-[#D9A441]/40"
                    >
                      {getTechIcon(tg)}
                      <span>{tg}</span>
                    </span>
                  ))}
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>

      {/* ═══ 3. FULLSCREEN 4K LIGHTBOX MODAL ═══ */}
      {lightboxOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-2xl p-4 sm:p-8 animate-in fade-in duration-300"
          onClick={() => setLightboxOpen(false)}
        >
          <div
            className="relative max-w-6xl w-full max-h-[92vh] flex flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              type="button"
              onClick={() => setLightboxOpen(false)}
              className="absolute -top-12 right-0 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 hover:text-[#D9A441] transition-all"
              aria-label={fr ? "Fermer" : "Close"}
            >
              <X size={20} />
            </button>

            {/* High-res Image Container */}
            <div className="relative w-full h-[65vh] sm:h-[75vh] rounded-2xl overflow-hidden border border-white/15 bg-neutral-950 shadow-2xl">
              <Image
                src={images[activePhotoIdx]}
                alt={currentCaption}
                fill
                sizes="(max-width: 1400px) 100vw, 1300px"
                className="object-contain"
                priority
              />

              {/* Prev / Next Arrows */}
              {images.length > 1 && (
                <>
                  <button
                    type="button"
                    onClick={prevPhoto}
                    className="absolute left-4 top-1/2 -translate-y-1/2 flex h-12 w-12 items-center justify-center rounded-full bg-black/80 border border-white/20 text-white hover:bg-[#D9A441] hover:text-black transition-all shadow-xl backdrop-blur-md"
                    aria-label={fr ? "Photo précédente" : "Previous photo"}
                  >
                    <ChevronLeft size={24} />
                  </button>

                  <button
                    type="button"
                    onClick={nextPhoto}
                    className="absolute right-4 top-1/2 -translate-y-1/2 flex h-12 w-12 items-center justify-center rounded-full bg-black/80 border border-white/20 text-white hover:bg-[#D9A441] hover:text-black transition-all shadow-xl backdrop-blur-md"
                    aria-label={fr ? "Photo suivante" : "Next photo"}
                  >
                    <ChevronRight size={24} />
                  </button>
                </>
              )}
            </div>

            {/* Lightbox Footer (Caption & Thumbnails) */}
            <div className="w-full flex flex-col sm:flex-row items-center justify-between gap-4 mt-4 text-xs font-mono text-gray-300">
              <div className="flex items-center gap-2">
                <span className="text-[#D9A441] font-bold">{currentEvent.title}</span>
                <span className="text-gray-500">•</span>
                <span>{currentCaption}</span>
              </div>

              {/* Thumbnails in modal */}
              {images.length > 1 && (
                <div className="flex items-center gap-2">
                  {images.map((img, idx) => (
                    <button
                      key={img}
                      type="button"
                      onClick={() => setActivePhotoIdx(idx)}
                      className={`relative h-10 w-12 rounded-lg overflow-hidden border transition-all ${
                        activePhotoIdx === idx
                          ? "border-[#D9A441] scale-110"
                          : "border-white/20 opacity-50 hover:opacity-100"
                      }`}
                    >
                      <Image
                        src={img}
                        alt={fr ? `Miniature ${idx + 1}` : `Thumbnail ${idx + 1}`}
                        fill
                        sizes="50px"
                        className="object-cover"
                      />
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
