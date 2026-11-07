"use client";

import React, { useState } from "react";
import Tilt from "react-parallax-tilt";
import Image from "next/image";
import {
  ArrowUpRight,
  ExternalLink,
  Layers,
  ShieldCheck,
  Server,
  Database,
  Cpu,
  Sparkles,
  GitBranch,
} from "lucide-react";
import { FaGithub, FaJava, FaReact, FaDocker } from "react-icons/fa";
import { SiSpringboot, SiMysql, SiVite } from "react-icons/si";

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
  const [activeFilter, setActiveFilter] = useState<string>("all");

  const filteredProjects =
    activeFilter === "all"
      ? projects
      : projects.filter((p) => p.id === activeFilter);

  return (
    <div className="w-full space-y-10">
      {/* ═══ 1. PROJECT FILTER TABS ═══ */}
      <div className="flex flex-wrap items-center gap-2 border-b border-white/10 pb-4">
        <button
          type="button"
          onClick={() => setActiveFilter("all")}
          className={`inline-flex items-center gap-2 rounded-xl px-4 py-2 text-xs font-mono font-medium transition-all duration-300 ${
            activeFilter === "all"
              ? "border border-[#D9A441] bg-[#D9A441]/10 text-white shadow-[0_0_20px_rgba(217,164,65,0.2)]"
              : "border border-white/10 bg-white/[0.02] text-gray-400 hover:border-white/20 hover:text-white"
          }`}
        >
          <Sparkles size={12} className={activeFilter === "all" ? "text-[#D9A441]" : ""} />
          <span>Tous les Projets</span>
          <span className="rounded-full bg-white/10 px-2 py-0.5 text-[10px] font-bold text-gray-300">
            {projects.length}
          </span>
        </button>

        {projects.map((p) => (
          <button
            key={p.id}
            type="button"
            onClick={() => setActiveFilter(p.id)}
            className={`inline-flex items-center gap-2 rounded-xl px-4 py-2 text-xs font-mono font-medium transition-all duration-300 ${
              activeFilter === p.id
                ? "border border-[#D9A441] bg-[#D9A441]/10 text-white shadow-[0_0_20px_rgba(217,164,65,0.2)]"
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
        {filteredProjects.map((project, idx) => {
          const isHero = project.id === "healthcare" && activeFilter === "all";

          return (
            <div
              key={project.id}
              className={`${
                isHero ? "lg:col-span-12" : "lg:col-span-6"
              } h-full`}
            >
              <Tilt
                tiltMaxAngleX={4}
                tiltMaxAngleY={4}
                perspective={1200}
                glareEnable={true}
                glareMaxOpacity={0.08}
                glareColor={project.accent || "#D9A441"}
                glarePosition="all"
                glareBorderRadius="24px"
                className="h-full rounded-3xl"
              >
                <div
                  className="group relative h-full rounded-3xl border border-white/10 bg-gradient-to-b from-white/[0.05] via-white/[0.02] to-transparent p-1 transition-all duration-500"
                >
              {/* Dynamic Ambient Hover Glow */}
              <div
                className="absolute inset-0 rounded-3xl opacity-0 transition-opacity duration-700 group-hover:opacity-100 pointer-events-none blur-3xl"
                style={{
                  background: `radial-gradient(circle at 60% 30%, ${project.accent}25, transparent 70%)`,
                }}
              />

              <div className="relative h-full rounded-[22px] bg-black/85 p-6 sm:p-8 lg:p-10 backdrop-blur-2xl flex flex-col justify-between overflow-hidden">
                {isHero ? (
                  /* ─── HERO SPLIT LAYOUT (HealthCare+) ─── */
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
                    {/* Left: Info & Specs */}
                    <div className="lg:col-span-5 space-y-6">
                      <div className="flex items-center gap-3">
                        <span
                          className="font-mono text-xs font-bold border px-3 py-1 rounded-full"
                          style={{
                            color: project.accent,
                            borderColor: `${project.accent}50`,
                            backgroundColor: `${project.accent}15`,
                          }}
                        >
                          01 • PROJET PHARE
                        </span>
                        <span className="text-xs font-mono uppercase tracking-wider text-white/50">
                          {project.domain}
                        </span>
                      </div>

                      <div>
                        <h3 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight group-hover:text-white transition-colors duration-300">
                          {project.name}
                        </h3>
                        <p className="text-sm font-mono text-[#D9A441] font-semibold mt-1">
                          {project.subtitle}
                        </p>
                      </div>

                      <p className="text-sm sm:text-base text-gray-300 leading-relaxed font-normal">
                        {project.description}
                      </p>

                      {/* Tech Pills */}
                      <div className="flex flex-wrap gap-2 pt-1">
                        {project.tags.map((tag) => (
                          <span
                            key={tag}
                            className="inline-flex items-center gap-1.5 rounded-lg border border-white/10 bg-white/5 px-2.5 py-1 text-xs font-mono text-gray-200 transition-colors hover:border-white/20"
                          >
                            <span>{tag}</span>
                          </span>
                        ))}
                      </div>

                      {/* Action Links */}
                      <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-white/10">
                        {project.githubBackend && (
                          <a
                            href={project.githubBackend}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-4 py-2.5 text-xs font-mono font-semibold text-white transition-all duration-300 hover:border-[#D9A441] hover:bg-[#D9A441] hover:text-black hover:shadow-[0_0_20px_rgba(217,164,65,0.3)]"
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
                            className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-4 py-2.5 text-xs font-mono font-semibold text-white transition-all duration-300 hover:border-[#D9A441] hover:bg-[#D9A441] hover:text-black hover:shadow-[0_0_20px_rgba(217,164,65,0.3)]"
                          >
                            <FaGithub size={15} />
                            <span>{t.btnFrontend}</span>
                            <ArrowUpRight size={13} />
                          </a>
                        )}
                      </div>
                    </div>

                    {/* Right: Studio Mockup Preview */}
                    <div className="lg:col-span-7">
                      <div className="relative rounded-2xl border border-white/15 bg-neutral-950 p-2 sm:p-3 shadow-2xl transition-all duration-500 group-hover:border-white/30">
                        {/* MacOS Window Top Header */}
                        <div className="flex items-center justify-between px-3 py-2 border-b border-white/10 mb-2">
                          <div className="flex items-center gap-1.5">
                            <span className="h-2.5 w-2.5 rounded-full bg-red-500/80" />
                            <span className="h-2.5 w-2.5 rounded-full bg-yellow-500/80" />
                            <span className="h-2.5 w-2.5 rounded-full bg-green-500/80" />
                          </div>
                          <span className="text-[11px] font-mono text-gray-400">
                            healthcare-system.dev
                          </span>
                          <span className="flex items-center gap-1 text-[10px] font-mono text-emerald-400">
                            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" /> Live
                          </span>
                        </div>

                        {/* Image */}
                        <div className="relative aspect-[16/10] overflow-hidden rounded-xl bg-neutral-900">
                          <Image
                            src={project.image}
                            alt={`${project.name} Preview`}
                            fill
                            priority
                            sizes="(max-width: 1024px) 100vw, 750px"
                            className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                ) : (
                  /* ─── CARD 2 & 3: COMPACT BENTO CARDS ─── */
                  <div className="space-y-6 flex flex-col justify-between h-full">
                    <div className="space-y-5">
                      {/* Header */}
                      <div className="flex items-center justify-between">
                        <span
                          className="font-mono text-xs font-bold border px-3 py-1 rounded-full"
                          style={{
                            color: project.accent,
                            borderColor: `${project.accent}50`,
                            backgroundColor: `${project.accent}15`,
                          }}
                        >
                          {project.id === "logitrack" ? "02 • LOGISTIQUE" : "03 • PARC & DEVOPS"}
                        </span>
                        <span className="text-xs font-mono uppercase tracking-wider text-white/50">
                          {project.domain}
                        </span>
                      </div>

                      {/* Studio Preview Window */}
                      <div className="relative rounded-2xl border border-white/15 bg-neutral-950 p-2 shadow-2xl transition-all duration-500 group-hover:border-white/30">
                        {/* MacOS Window Top Header */}
                        <div className="flex items-center justify-between px-2.5 py-1.5 border-b border-white/10 mb-2">
                          <div className="flex items-center gap-1.5">
                            <span className="h-2 w-2 rounded-full bg-red-500/80" />
                            <span className="h-2 w-2 rounded-full bg-yellow-500/80" />
                            <span className="h-2 w-2 rounded-full bg-green-500/80" />
                          </div>
                          <span className="text-[10px] font-mono text-gray-400">
                            {project.name.toLowerCase()}.app
                          </span>
                        </div>

                        <div className="relative aspect-[16/10] overflow-hidden rounded-xl bg-neutral-900">
                          <Image
                            src={project.image}
                            alt={`${project.name} Preview`}
                            fill
                            sizes="(max-width: 1024px) 100vw, 550px"
                            className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                          />
                        </div>
                      </div>

                      {/* Text */}
                      <div>
                        <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                          {project.name}
                        </h3>
                        <p className="text-xs font-mono text-[#D9A441] font-semibold mt-1">
                          {project.subtitle}
                        </p>
                      </div>

                      <p className="text-sm text-gray-300 leading-relaxed font-normal">
                        {project.description}
                      </p>

                      {/* Tech Pills */}
                      <div className="flex flex-wrap gap-1.5 pt-1">
                        {project.tags.map((tag) => (
                          <span
                            key={tag}
                            className="rounded-lg border border-white/10 bg-white/5 px-2.5 py-1 text-xs font-mono text-gray-300 transition-colors hover:border-white/20"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* CTAs */}
                    <div className="flex flex-wrap items-center gap-3 pt-6 mt-4 border-t border-white/10">
                      {project.githubBackend && (
                        <a
                          href={project.githubBackend}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-3.5 py-2 text-xs font-mono font-semibold text-white transition-all duration-300 hover:border-[#D9A441] hover:bg-[#D9A441] hover:text-black hover:shadow-[0_0_20px_rgba(217,164,65,0.3)]"
                        >
                          <FaGithub size={14} />
                          <span>Backend</span>
                          <ArrowUpRight size={12} />
                        </a>
                      )}
                      {project.githubFrontend && (
                        <a
                          href={project.githubFrontend}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-3.5 py-2 text-xs font-mono font-semibold text-white transition-all duration-300 hover:border-[#D9A441] hover:bg-[#D9A441] hover:text-black hover:shadow-[0_0_20px_rgba(217,164,65,0.3)]"
                        >
                          <FaGithub size={14} />
                          <span>Frontend</span>
                          <ArrowUpRight size={12} />
                        </a>
                      )}
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-4 py-2 text-xs font-mono font-semibold text-white transition-all duration-300 hover:border-[#D9A441] hover:bg-[#D9A441] hover:text-black hover:shadow-[0_0_20px_rgba(217,164,65,0.3)]"
                        >
                          <FaGithub size={14} />
                          <span>{t.btnRepo}</span>
                          <ArrowUpRight size={12} />
                        </a>
                      )}
                    </div>
                  </div>
                )}
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
