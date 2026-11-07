"use client";

import React from "react";
import {
  Clock,
  Sparkles,
  BookOpen,
  Code2,
  Compass,
  MapPin,
  CheckCircle2,
} from "lucide-react";

export default function NowSection() {
  return (
    <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-b from-white/[0.05] via-white/[0.02] to-transparent p-6 sm:p-10 backdrop-blur-2xl shadow-2xl space-y-8">
      {/* Top Ambient Glow */}
      <div className="absolute -top-20 right-10 h-64 w-64 rounded-full bg-emerald-500/10 blur-3xl pointer-events-none" />

      {/* Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-white/10 pb-5">
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3.5 py-1 text-xs font-mono font-semibold text-emerald-400">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
              </span>
              <span>Statut Temps Réel • Page &quot;/now&quot;</span>
            </span>
            <span className="text-xs font-mono text-gray-500">Mis à jour récemment</span>
          </div>
          <p className="text-xs sm:text-sm text-gray-400 font-mono">
            Un aperçu transparent de mes projets en cours, mes lectures actuelles et mes objectifs d&apos;ingénierie.
          </p>
        </div>

        <div className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-mono text-gray-300">
          <Clock size={13} className="text-[#D9A441]" />
          <span>Novembre 2026 • En cours</span>
        </div>
      </div>

      {/* Grid: 3 Pillars of Now */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {/* Card 1: Building */}
        <div className="rounded-2xl border border-white/10 bg-black/60 p-6 space-y-3 font-mono">
          <div className="flex items-center gap-2.5 text-[#D9A441]">
            <Code2 size={18} />
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">Ce que je code</h4>
          </div>
          <p className="text-xs text-gray-300 leading-relaxed font-sans">
            Conception d&apos;architectures micro-services résilientes avec Spring Boot 3.3, intégration de pipelines CI/CD automatisés et optimisation de requêtes SQL complexes pour bases à fort trafic.
          </p>
          <div className="pt-2 text-[11px] text-[#D9A441] font-mono flex items-center gap-1.5">
            <CheckCircle2 size={12} />
            <span>HealthCare+ v2.0 & LogiTrack Suite</span>
          </div>
        </div>

        {/* Card 2: Exploring */}
        <div className="rounded-2xl border border-white/10 bg-black/60 p-6 space-y-3 font-mono">
          <div className="flex items-center gap-2.5 text-emerald-400">
            <BookOpen size={18} />
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">Ce que j&apos;explore</h4>
          </div>
          <p className="text-xs text-gray-300 leading-relaxed font-sans">
            Approfondissement des concepts de systèmes distribués, Event-Driven Architecture avec Apache Kafka, orchestration de conteneurs avec Docker & Kubernetes, et design patterns avancés.
          </p>
          <div className="pt-2 text-[11px] text-emerald-400 font-mono flex items-center gap-1.5">
            <CheckCircle2 size={12} />
            <span>Designing Data-Intensive Applications</span>
          </div>
        </div>

        {/* Card 3: Looking for */}
        <div className="rounded-2xl border border-white/10 bg-black/60 p-6 space-y-3 font-mono">
          <div className="flex items-center gap-2.5 text-blue-400">
            <Compass size={18} />
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">Objectif Actuel</h4>
          </div>
          <p className="text-xs text-gray-300 leading-relaxed font-sans">
            Disponible immédiatement pour des opportunités ambitieuses en tant que Développeur Full Stack Java / Mobile (CDI, Freelance ou Hybride) au Maroc ou à l&apos;international.
          </p>
          <div className="pt-2 text-[11px] text-blue-400 font-mono flex items-center gap-1.5">
            <MapPin size={12} />
            <span>Oued Zem • Hybride / Remote / Relocation</span>
          </div>
        </div>
      </div>
    </div>
  );
}
