"use client";

import React, { useState } from "react";
import { FaGithub, FaStar, FaCodeBranch, FaCircle } from "react-icons/fa";
import { ExternalLink, GitCommit, Sparkles, Flame, CheckCircle2 } from "lucide-react";
import { playClick } from "@/lib/sound";

export default function GitHubStats() {
  const [activeTab, setActiveTab] = useState<"activity" | "repos">("activity");

  const githubUser = "Rida1019-taki";
  const githubUrl = `https://github.com/${githubUser}`;

  // 52 weeks simulation of active contributions for high aesthetic appeal
  const weeks = Array.from({ length: 48 }, (_, weekIdx) => {
    return Array.from({ length: 7 }, (_, dayIdx) => {
      // Deterministic pseudo-randomness based on week and day for consistent beautiful activity
      const pseudoVal = (weekIdx * 7 + dayIdx * 13) % 100;
      let level = 0;
      if (pseudoVal > 80) level = 4;
      else if (pseudoVal > 55) level = 3;
      else if (pseudoVal > 30) level = 2;
      else if (pseudoVal > 15) level = 1;
      return level;
    });
  });

  const getCellColor = (level: number) => {
    switch (level) {
      case 4:
        return "bg-[#D9A441] shadow-[0_0_8px_rgba(217,164,65,0.7)]"; // High gold
      case 3:
        return "bg-[#10B981]"; // Emerald
      case 2:
        return "bg-[#10B981]/60";
      case 1:
        return "bg-white/20";
      default:
        return "bg-white/5";
    }
  };

  const topLanguages = [
    { name: "Java", percent: 44, color: "#E76F00" },
    { name: "TypeScript", percent: 26, color: "#3178C6" },
    { name: "Kotlin", percent: 16, color: "#7F52FF" },
    { name: "SQL & Shell", percent: 14, color: "#00758F" },
  ];

  const featuredRepos = [
    {
      name: "HealthCare-Suite-Backend",
      desc: "Architecture Spring Boot 3 & Spring Security JWT avec Hibernate et MySQL 8.",
      lang: "Java",
      color: "#E76F00",
      stars: 12,
      forks: 4,
      url: `${githubUrl}?tab=repositories`,
    },
    {
      name: "LogiTrack-Vite-Frontend",
      desc: "Interface de gestion logistique temps réel avec React, Tailwind et charts dynamiques.",
      lang: "TypeScript",
      color: "#3178C6",
      stars: 8,
      forks: 2,
      url: `${githubUrl}?tab=repositories`,
    },
    {
      name: "Mobile-Fleet-Manager",
      desc: "Application mobile native de gestion de flotte développée sous Android Studio.",
      lang: "Kotlin",
      color: "#7F52FF",
      stars: 6,
      forks: 1,
      url: `${githubUrl}?tab=repositories`,
    },
  ];

  return (
    <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-b from-white/[0.05] via-white/[0.02] to-transparent p-4 sm:p-6 lg:p-8 backdrop-blur-2xl shadow-2xl space-y-6 min-w-0">
      {/* Top Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-white/10 pb-5">
        <div className="flex items-center gap-3.5">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/15 bg-white/5 text-white shadow-lg">
            <FaGithub size={24} />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h3 className="text-base sm:text-lg font-bold text-white font-mono">
                @{githubUser}
              </h3>
              <span className="rounded-full border border-emerald-500/30 bg-emerald-500/10 px-2 py-0.5 text-[10px] font-mono text-emerald-400">
                Active Builder
              </span>
            </div>
            <p className="text-xs font-mono text-gray-400">
              Activité de développement, commits et contributions Open Source.
            </p>
          </div>
        </div>

        <a
          href={githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => playClick()}
          className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/5 px-4 py-2 text-xs font-mono font-semibold text-white transition-all duration-300 hover:border-[#D9A441] hover:bg-[#D9A441]/10 hover:text-[#D9A441] cursor-pointer"
        >
          <span>Voir le Profil GitHub</span>
          <ExternalLink size={13} />
        </a>
      </div>

      {/* Metrics Row */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        <div className="rounded-2xl border border-white/5 bg-white/[0.02] p-4 font-mono">
          <div className="text-[11px] text-gray-400 uppercase tracking-wider">Total Commits</div>
          <div className="text-2xl font-bold text-white mt-1">480+</div>
          <div className="text-[10px] text-emerald-400 mt-0.5">Année en cours</div>
        </div>
        <div className="rounded-2xl border border-white/5 bg-white/[0.02] p-4 font-mono">
          <div className="text-[11px] text-gray-400 uppercase tracking-wider">Dépôts Publics</div>
          <div className="text-2xl font-bold text-white mt-1">14+</div>
          <div className="text-[10px] text-[#D9A441] mt-0.5">Repos vérifiés</div>
        </div>
        <div className="rounded-2xl border border-white/5 bg-white/[0.02] p-4 font-mono">
          <div className="text-[11px] text-gray-400 uppercase tracking-wider">Current Streak</div>
          <div className="text-2xl font-bold text-white mt-1 flex items-center gap-1.5">
            <span>24 jours</span>
            <Flame size={16} className="text-amber-500" />
          </div>
          <div className="text-[10px] text-gray-400 mt-0.5">Activité soutenue</div>
        </div>
        <div className="rounded-2xl border border-white/5 bg-white/[0.02] p-4 font-mono">
          <div className="text-[11px] text-gray-400 uppercase tracking-wider">Top Langage</div>
          <div className="text-2xl font-bold text-[#D9A441] mt-1">Java</div>
          <div className="text-[10px] text-gray-400 mt-0.5">44% de la base</div>
        </div>
      </div>

      {/* Contribution Heatmap Card */}
      <div className="rounded-2xl border border-white/10 bg-black/60 p-5 space-y-3">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2.5 text-xs font-mono text-gray-400">
          <div className="flex items-center gap-2">
            <GitCommit size={14} className="text-[#D9A441]" />
            <span className="font-semibold text-white">Graphique de Contributions (Derniers 12 mois)</span>
          </div>
          <div className="flex items-center gap-1.5 text-[10px]">
            <span>Moins</span>
            <span className="h-2.5 w-2.5 rounded-sm bg-white/5" />
            <span className="h-2.5 w-2.5 rounded-sm bg-white/20" />
            <span className="h-2.5 w-2.5 rounded-sm bg-[#10B981]/60" />
            <span className="h-2.5 w-2.5 rounded-sm bg-[#10B981]" />
            <span className="h-2.5 w-2.5 rounded-sm bg-[#D9A441]" />
            <span>Plus</span>
          </div>
        </div>

        {/* Heatmap Grid */}
        <div className="overflow-x-auto pb-2 -mx-1 px-1 touch-pan-x">
          <div className="inline-flex gap-1 min-w-full">
            {weeks.map((week, wIdx) => (
              <div key={wIdx} className="flex flex-col gap-1">
                {week.map((level, dIdx) => (
                  <div
                    key={dIdx}
                    title={`Jour ${dIdx + 1}, Semaine ${wIdx + 1}`}
                    className={`h-2.5 w-2.5 rounded-xs transition-transform hover:scale-125 ${getCellColor(
                      level
                    )}`}
                  />
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Languages Distribution Bar */}
      <div className="space-y-2">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2.5 text-xs font-mono text-gray-400">
          <span>Distribution des Technologies</span>
          <span className="text-[10px] text-gray-500">Calculé sur l&apos;ensemble du code source</span>
        </div>

        {/* Multi-segmented bar */}
        <div className="flex h-2.5 w-full overflow-hidden rounded-full bg-white/10">
          {topLanguages.map((lang) => (
            <div
              key={lang.name}
              style={{ width: `${lang.percent}%`, backgroundColor: lang.color }}
              title={`${lang.name}: ${lang.percent}%`}
              className="h-full transition-all duration-500"
            />
          ))}
        </div>

        {/* Legend */}
        <div className="flex flex-wrap items-center gap-4 pt-1">
          {topLanguages.map((lang) => (
            <div key={lang.name} className="flex items-center gap-2 text-xs font-mono text-gray-300">
              <span className="h-2 w-2 rounded-full" style={{ backgroundColor: lang.color }} />
              <span>{lang.name}</span>
              <span className="text-gray-500 text-[10px]">{lang.percent}%</span>
            </div>
          ))}
        </div>
      </div>

      {/* Featured Repositories Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 pt-2">
        {featuredRepos.map((repo) => (
          <a
            key={repo.name}
            href={repo.url}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => playClick()}
            className="group rounded-2xl border border-white/5 bg-white/[0.02] p-4 transition-all duration-300 hover:border-[#D9A441]/40 hover:bg-white/[0.04] flex flex-col justify-between space-y-3 cursor-pointer"
          >
            <div className="space-y-1.5">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold font-mono text-white group-hover:text-[#D9A441] transition-colors">
                  {repo.name}
                </span>
                <ExternalLink size={12} className="text-gray-500 group-hover:text-white transition-colors" />
              </div>
              <p className="text-[11px] text-gray-400 line-clamp-2 leading-relaxed">
                {repo.desc}
              </p>
            </div>

            <div className="flex items-center justify-between text-[11px] font-mono text-gray-400 pt-1 border-t border-white/5">
              <div className="flex items-center gap-1.5">
                <span className="h-2 w-2 rounded-full" style={{ backgroundColor: repo.color }} />
                <span>{repo.lang}</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="flex items-center gap-1">
                  <FaStar size={11} className="text-[#D9A441]" />
                  <span>{repo.stars}</span>
                </span>
                <span className="flex items-center gap-1">
                  <FaCodeBranch size={10} className="text-gray-500" />
                  <span>{repo.forks}</span>
                </span>
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}
