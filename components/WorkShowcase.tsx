"use client";

import React, { useState } from "react";
import Tilt from "react-parallax-tilt";
import Image from "next/image";
import {
  ArrowUpRight,
  Sparkles,
  Server,
  ShieldCheck,
  Database,
  Cpu,
  CheckCircle2,
  Code2,
  Layout,
  Gauge,
} from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { playClick, playPop } from "@/lib/sound";
import { useLanguage } from "@/components/LanguageProvider";

export interface ProjectItem {
  id: string;
  name: string;
  domain: string;
  subtitle: string;
  description: string;
  image: string;
  accent: string;
  githubBackend?: string;
  githubFrontend?: string;
  github?: string;
  tags: string[];
  specs?: { label: string; value: string }[];
  highlights?: string[];
}

interface WorkShowcaseProps {
  projects: ProjectItem[];
  t: {
    badge: string;
    title1: string;
    title2: string;
    desc: string;
    btnBackend: string;
    btnFrontend: string;
    btnRepo: string;
  };
}

export default function WorkShowcase({ projects, t }: WorkShowcaseProps) {
  const { lang } = useLanguage();
  const fr = lang === "fr";
  const [activeFilter, setActiveFilter] = useState<string>("all");
  const [activeTabs, setActiveTabs] = useState<Record<string, "preview" | "specs" | "highlights">>({
    healthcare: "preview",
    logitrack: "preview",
    fleetflow: "preview",
  });

  const filteredProjects =
    activeFilter === "all"
      ? projects
      : projects.filter((p) => p.id === activeFilter);

  const setTab = (projectId: string, tab: "preview" | "specs" | "highlights") => {
    playPop();
    setActiveTabs((prev) => ({ ...prev, [projectId]: tab }));
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    e.currentTarget.style.setProperty("--mouse-x", `${x}px`);
    e.currentTarget.style.setProperty("--mouse-y", `${y}px`);
  };

  return (
    <div className="w-full space-y-10">
      {/* ═══ 1. PROJECT FILTER TABS ═══ */}
      <div className="flex flex-wrap items-center gap-2 border-b border-white/10 pb-4">
        <button
          type="button"
          onClick={() => {
            playClick();
            setActiveFilter("all");
          }}
          className={`inline-flex items-center gap-2 rounded-xl px-4 py-2 text-xs font-mono font-medium transition-all duration-300 cursor-pointer ${
            activeFilter === "all"
              ? "border border-[#D9A441] bg-[#D9A441]/15 text-white shadow-[0_0_20px_rgba(217,164,65,0.25)]"
              : "border border-white/10 bg-white/[0.02] text-gray-400 hover:border-white/20 hover:text-white"
          }`}
        >
          <Sparkles size={12} className={activeFilter === "all" ? "text-[#D9A441]" : ""} />
          <span>{fr ? "Tous les Projets" : "All Projects"}</span>
          <span className="rounded-full bg-white/10 px-2 py-0.5 text-[10px] font-bold text-gray-300">
            {projects.length}
          </span>
        </button>

        {projects.map((p) => (
          <button
            key={p.id}
            type="button"
            onClick={() => {
              playClick();
              setActiveFilter(p.id);
            }}
            className={`inline-flex items-center gap-2 rounded-xl px-4 py-2 text-xs font-mono font-medium transition-all duration-300 cursor-pointer ${
              activeFilter === p.id
                ? "border border-[#D9A441] bg-[#D9A441]/15 text-white shadow-[0_0_20px_rgba(217,164,65,0.25)]"
                : "border border-white/10 bg-white/[0.02] text-gray-400 hover:border-white/20 hover:text-white"
            }`}
          >
            <span
              className="h-2 w-2 rounded-full"
              style={{ backgroundColor: p.accent }}
            />
            <span>{p.name}</span>
          </button>
        ))}
      </div>

      {/* ═══ 2. BENTO PROJECTS GRID ═══ */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {filteredProjects.map((project) => {
          const isHero = project.id === "healthcare" && activeFilter === "all";
          const currentTab = activeTabs[project.id] || "preview";

          return (
            <div
              key={project.id}
              className={`${isHero ? "lg:col-span-12" : "lg:col-span-6"} h-full`}
            >
              <Tilt
                tiltMaxAngleX={3}
                tiltMaxAngleY={3}
                perspective={1400}
                glareEnable={false}
                className="h-full rounded-3xl"
              >
                <div
                  onMouseMove={handleMouseMove}
                  className="group relative h-full rounded-3xl border border-white/10 bg-gradient-to-b from-white/[0.06] via-white/[0.02] to-transparent p-[1.5px] transition-all duration-500 hover:border-white/25 hover:shadow-[0_20px_60px_-15px_rgba(0,0,0,0.8)]"
                  style={
                    {
                      "--mouse-x": "0px",
                      "--mouse-y": "0px",
                    } as React.CSSProperties
                  }
                >
                  {/* Spotlight Radial Glow on Hover */}
                  <div
                    className="pointer-events-none absolute -inset-px rounded-3xl opacity-0 transition-opacity duration-300 group-hover:opacity-100 blur-xl"
                    style={{
                      background: `radial-gradient(450px circle at var(--mouse-x) var(--mouse-y), ${project.accent}35, transparent 65%)`,
                    }}
                  />

                  <div className="relative h-full rounded-[23px] bg-neutral-950/90 p-6 sm:p-8 lg:p-9 backdrop-blur-2xl flex flex-col justify-between overflow-hidden">
                    {/* Top Status & View Selector Ribbon */}
                    <div className="flex flex-wrap items-center justify-between gap-3 border-b border-white/10 pb-4 mb-6">
                      <div className="flex items-center gap-2.5">
                        <span
                          className="font-mono text-xs font-bold border px-3 py-1 rounded-full flex items-center gap-1.5"
                          style={{
                            color: project.accent,
                            borderColor: `${project.accent}50`,
                            backgroundColor: `${project.accent}15`,
                          }}
                        >
                          <span
                            className="h-1.5 w-1.5 rounded-full animate-pulse"
                            style={{ backgroundColor: project.accent }}
                          />
                          {project.id === "healthcare"
                            ? fr ? "01 • PROJET PHARE" : "01 • FLAGSHIP PROJECT"
                            : project.id === "logitrack"
                            ? fr ? "02 • LOGISTIQUE" : "02 • LOGISTICS"
                            : fr ? "03 • GESTION PARC" : "03 • FLEET MANAGEMENT"}
                        </span>
                        <span className="text-xs font-mono uppercase tracking-wider text-white/50 hidden sm:inline">
                          {project.domain}
                        </span>
                      </div>

                      {/* Interactive Card View Tabs */}
                      <div className="inline-flex items-center rounded-xl border border-white/10 bg-white/5 p-1 text-[11px] font-mono">
                        <button
                          type="button"
                          onClick={() => setTab(project.id, "preview")}
                          className={`inline-flex items-center gap-1 rounded-lg px-2.5 py-1 transition-all cursor-pointer ${
                            currentTab === "preview"
                              ? "bg-white/15 text-white font-semibold shadow"
                              : "text-gray-400 hover:text-white"
                          }`}
                        >
                          <Layout size={11} />
                          <span>{fr ? "Aperçu" : "Preview"}</span>
                        </button>
                        <button
                          type="button"
                          onClick={() => setTab(project.id, "specs")}
                          className={`inline-flex items-center gap-1 rounded-lg px-2.5 py-1 transition-all cursor-pointer ${
                            currentTab === "specs"
                              ? "bg-white/15 text-white font-semibold shadow"
                              : "text-gray-400 hover:text-white"
                          }`}
                        >
                          <Cpu size={11} />
                          <span>Specs</span>
                        </button>
                        <button
                          type="button"
                          onClick={() => setTab(project.id, "highlights")}
                          className={`inline-flex items-center gap-1 rounded-lg px-2.5 py-1 transition-all cursor-pointer ${
                            currentTab === "highlights"
                              ? "bg-white/15 text-white font-semibold shadow"
                              : "text-gray-400 hover:text-white"
                          }`}
                        >
                          <Gauge size={11} />
                          <span>Impact</span>
                        </button>
                      </div>
                    </div>

                    {/* Card Content Based on Active Tab */}
                    {currentTab === "preview" ? (
                      /* ─── TAB 1: PREVIEW (Visual + Story) ─── */
                      <div
                        className={
                          isHero
                            ? "grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center"
                            : "space-y-6"
                        }
                      >
                        {/* Information Column */}
                        <div className={isHero ? "lg:col-span-5 space-y-4" : "space-y-4"}>
                          <div>
                            <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                              {project.name}
                            </h3>
                            <p className="text-xs sm:text-sm font-mono text-[#D9A441] font-semibold mt-1">
                              {project.subtitle}
                            </p>
                          </div>

                          <p className="text-xs sm:text-sm text-gray-300 leading-relaxed font-normal">
                            {project.description}
                          </p>

                          {/* Tech Pills */}
                          <div className="flex flex-wrap gap-1.5 pt-1">
                            {project.tags.map((tag) => (
                              <span
                                key={tag}
                                className="inline-flex items-center rounded-lg border border-white/10 bg-white/5 px-2.5 py-1 text-[11px] font-mono text-gray-300 transition-colors hover:border-white/20"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                        </div>

                        {/* Visual Safari Browser Mockup Column */}
                        <div className={isHero ? "lg:col-span-7" : "pt-2"}>
                          <div className="relative rounded-2xl border border-white/15 bg-neutral-950 p-2 sm:p-2.5 shadow-2xl transition-all duration-500 group-hover:border-white/30">
                            {/* Window Chrome Header */}
                            <div className="flex items-center justify-between px-3 py-1.5 border-b border-white/10 mb-2">
                              <div className="flex items-center gap-1.5">
                                <span className="h-2.5 w-2.5 rounded-full bg-red-500/80" />
                                <span className="h-2.5 w-2.5 rounded-full bg-yellow-500/80" />
                                <span className="h-2.5 w-2.5 rounded-full bg-green-500/80" />
                              </div>
                              <span className="text-[10px] font-mono text-gray-400">
                                {project.name.toLowerCase()}.ridataki.dev
                              </span>
                              <span className="flex items-center gap-1 text-[10px] font-mono text-emerald-400">
                                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                                {fr ? "En ligne" : "Online"}
                              </span>
                            </div>

                            {/* Image Frame */}
                            <div className="relative aspect-[16/10] overflow-hidden rounded-xl bg-neutral-900">
                              <Image
                                src={project.image}
                                alt={fr ? `Aperçu de ${project.name}` : `${project.name} Preview`}
                                fill
                                sizes={isHero ? "(max-width: 1024px) 100vw, 750px" : "(max-width: 1024px) 100vw, 550px"}
                                className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                                priority={isHero}
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    ) : currentTab === "specs" ? (
                      /* ─── TAB 2: SPECS (Engineering Details) ─── */
                      <div className="space-y-5 animate-in fade-in duration-200">
                        <div>
                          <h4 className="text-xl font-bold text-white font-mono flex items-center gap-2">
                            <Cpu size={18} className="text-[#D9A441]" />
                            <span>
                              {fr
                                ? "Spécifications Techniques & Architecture"
                                : "Technical Specifications & Architecture"}
                            </span>
                          </h4>
                          <p className="text-xs text-gray-400 mt-1">
                            {fr
                              ? `Normes d'ingénierie, sécurité et persistance mises en place pour ${project.name}.`
                              : `Engineering standards, security and persistence implemented for ${project.name}.`}
                          </p>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                          {project.specs?.map((spec, i) => (
                            <div
                              key={i}
                              className="rounded-xl border border-white/10 bg-white/[0.03] p-3.5 backdrop-blur-md space-y-1 hover:border-[#D9A441]/40 transition-colors"
                            >
                              <div className="text-[10px] font-mono uppercase tracking-wider text-gray-400 flex items-center gap-1.5">
                                {i === 0 ? (
                                  <Server size={12} className="text-[#D9A441]" />
                                ) : i === 1 ? (
                                  <ShieldCheck size={12} className="text-emerald-400" />
                                ) : i === 2 ? (
                                  <Database size={12} className="text-blue-400" />
                                ) : (
                                  <Cpu size={12} className="text-purple-400" />
                                )}
                                <span>{spec.label}</span>
                              </div>
                              <div className="text-sm font-mono font-bold text-white">
                                {spec.value}
                              </div>
                            </div>
                          ))}
                        </div>

                        <div className="rounded-xl border border-white/10 bg-black/50 p-4 font-mono text-xs text-gray-300 space-y-2">
                          <div className="text-[#D9A441] font-semibold flex items-center gap-2">
                            <Code2 size={14} />
                            <span>{fr ? "Stack Principale :" : "Core Stack:"}</span>
                          </div>
                          <div className="flex flex-wrap gap-2 text-[11px]">
                            {project.tags.map((t) => (
                              <span
                                key={t}
                                className="rounded bg-white/10 px-2 py-0.5 text-gray-200"
                              >
                                {t}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    ) : (
                      /* ─── TAB 3: HIGHLIGHTS & IMPACT (KPIs) ─── */
                      <div className="space-y-5 animate-in fade-in duration-200">
                        <div>
                          <h4 className="text-xl font-bold text-white font-mono flex items-center gap-2">
                            <Gauge size={18} className="text-emerald-400" />
                            <span>{fr ? "Points Forts & Impact Métier" : "Highlights & Business Impact"}</span>
                          </h4>
                          <p className="text-xs text-gray-400 mt-1">
                            {fr
                              ? "Résultats mesurables et fonctionnalités à forte valeur ajoutée."
                              : "Measurable results and high-value features."}
                          </p>
                        </div>

                        <div className="space-y-3">
                          {project.highlights?.map((hl, i) => (
                            <div
                              key={i}
                              className="flex items-start gap-3 rounded-xl border border-white/10 bg-white/[0.03] p-3.5 backdrop-blur-md hover:border-emerald-500/40 transition-colors"
                            >
                              <CheckCircle2
                                size={18}
                                className="text-emerald-400 shrink-0 mt-0.5"
                              />
                              <p className="text-xs sm:text-sm text-gray-200 leading-relaxed">
                                {hl}
                              </p>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Action Links Footer */}
                    <div className="flex flex-wrap items-center gap-3 pt-6 mt-6 border-t border-white/10">
                      {project.githubBackend && (
                        <a
                          href={project.githubBackend}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={playClick}
                          className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-4 py-2.5 text-xs font-mono font-semibold text-white transition-all duration-300 hover:border-[#D9A441] hover:bg-[#D9A441] hover:text-black hover:shadow-[0_0_20px_rgba(217,164,65,0.3)] cursor-pointer"
                        >
                          <FaGithub size={15} />
                          <span>{t.btnBackend}</span>
                          <ArrowUpRight size={13} />
                        </a>
                      )}
                      {project.githubFrontend && (
                        <a
                          href={project.githubFrontend}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={playClick}
                          className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-4 py-2.5 text-xs font-mono font-semibold text-white transition-all duration-300 hover:border-[#D9A441] hover:bg-[#D9A441] hover:text-black hover:shadow-[0_0_20px_rgba(217,164,65,0.3)] cursor-pointer"
                        >
                          <FaGithub size={15} />
                          <span>{t.btnFrontend}</span>
                          <ArrowUpRight size={13} />
                        </a>
                      )}
                      {project.github && !project.githubBackend && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={playClick}
                          className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-4 py-2.5 text-xs font-mono font-semibold text-white transition-all duration-300 hover:border-[#D9A441] hover:bg-[#D9A441] hover:text-black hover:shadow-[0_0_20px_rgba(217,164,65,0.3)] cursor-pointer"
                        >
                          <FaGithub size={15} />
                          <span>{t.btnRepo}</span>
                          <ArrowUpRight size={13} />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </Tilt>
            </div>
          );
        })}
      </div>
    </div>
  );
}
