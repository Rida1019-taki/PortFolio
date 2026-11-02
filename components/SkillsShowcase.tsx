"use client";

import React, { useState, useMemo } from "react";
import {
  Layers,
  Terminal,
  Smartphone,
  Database,
  Wrench,
  ShieldCheck,
  Zap,
  Sparkles,
  Server,
  Code2,
  GitBranch,
  Cpu,
  CheckCircle2,
  ExternalLink,
} from "lucide-react";
import {
  FaJava,
  FaReact,
  FaDocker,
  FaGithub,
  FaPython,
  FaGitAlt,
  FaCss3Alt,
} from "react-icons/fa";
import {
  SiSpringboot,
  SiSpringsecurity,
  SiKotlin,
  SiFlutter,
  SiDart,
  SiMysql,
  SiSqlite,
  SiHibernate,
  SiPostman,
  SiFigma,
  SiJavascript,
  SiHtml5,
  SiTailwindcss,
  SiGithubactions,
  SiFastapi,
} from "react-icons/si";

export type SkillCategory = "all" | "backend" | "frontend" | "mobile" | "databases" | "devops";

export interface TechItem {
  name: string;
  category: SkillCategory;
  categoryLabel: string;
  icon: React.ReactNode;
  brandColor: string;
  level: "core" | "advanced" | "proficient";
  role: string;
  description: string;
  chips: string[];
}

interface SkillsShowcaseProps {
  t: {
    badge: string;
    title1: string;
    title2: string;
    desc: string;
    skillsSuffix: string;
    filterAll: string;
    filterBackend: string;
    filterFrontend: string;
    filterMobile: string;
    filterDatabases: string;
    filterDevops: string;
    levelCore: string;
    levelAdvanced: string;
    levelProficient: string;
    pillarsTitle: string;
    pillarsSubtitle: string;
    standardsTitle: string;
    standardsSubtitle: string;
    pillars: {
      backend: { title: string; subtitle: string; desc: string };
      frontend: { title: string; subtitle: string; desc: string };
      mobile: { title: string; subtitle: string; desc: string };
      dataDevops: { title: string; subtitle: string; desc: string };
    };
    standards: {
      cleanArch: { title: string; desc: string };
      security: { title: string; desc: string };
      performance: { title: string; desc: string };
      devops: { title: string; desc: string };
    };
  };
}

export default function SkillsShowcase({ t }: SkillsShowcaseProps) {
  const [activeCategory, setActiveCategory] = useState<SkillCategory>("all");

  // Comprehensive tech catalog with official brand identities
  const allTechnologies: TechItem[] = useMemo(() => [
    // ─── BACKEND ───
    {
      name: "Spring Boot",
      category: "backend",
      categoryLabel: "Backend & APIs",
      icon: <SiSpringboot className="text-[#6DB33F]" size={28} />,
      brandColor: "#6DB33F",
      level: "core",
      role: "Enterprise REST APIs & Microservices",
      description: "Architecture en couches, injection de dépendances, contrôleurs REST et intégration Spring Data JPA.",
      chips: ["REST APIs", "Spring Data", "IoC / DI", "Microservices"],
    },
    {
      name: "Java",
      category: "backend",
      categoryLabel: "Backend & APIs",
      icon: <FaJava className="text-[#ED8B00]" size={30} />,
      brandColor: "#ED8B00",
      level: "core",
      role: "Modern OOP & System Design",
      description: "Clean Code, programmation orientée objet avancée, Streams API, multi-threading et principes SOLID.",
      chips: ["Java 17+", "Streams API", "SOLID", "Clean Architecture"],
    },
    {
      name: "Spring Security",
      category: "backend",
      categoryLabel: "Backend & APIs",
      icon: <SiSpringsecurity className="text-[#6DB33F]" size={28} />,
      brandColor: "#6DB33F",
      level: "advanced",
      role: "Stateless Auth & RBAC Security",
      description: "Filtres de sécurité, authentification stateless JWT, hachage BCrypt et contrôle d'accès granulaire.",
      chips: ["JWT Tokens", "RBAC", "BCrypt", "Auth Filters"],
    },
    {
      name: "JPA / Hibernate",
      category: "backend",
      categoryLabel: "Backend & APIs",
      icon: <SiHibernate className="text-[#59666C]" size={28} />,
      brandColor: "#C68742",
      level: "advanced",
      role: "ORM & Transactional Data Mapping",
      description: "Modélisation relationnelle, requêtes JPQL, gestion transactionnelle @Transactional et lazy loading.",
      chips: ["Entity Mapping", "JPQL", "Transactions", "Repository"],
    },
    {
      name: "Python / FastAPI",
      category: "backend",
      categoryLabel: "Backend & APIs",
      icon: <SiFastapi className="text-[#009688]" size={26} />,
      brandColor: "#009688",
      level: "proficient",
      role: "Fast Async APIs & Automation",
      description: "Création d'APIs asynchrones rapides, validation Pydantic et intégration de modèles d'IA / Machine Learning.",
      chips: ["Async Python", "Pydantic", "FastAPI", "ML Ready"],
    },

    // ─── FRONTEND ───
    {
      name: "React.js",
      category: "frontend",
      categoryLabel: "Frontend & Web",
      icon: <FaReact className="text-[#61DAFB]" size={28} />,
      brandColor: "#61DAFB",
      level: "core",
      role: "Reactive UI & Web Dashboards",
      description: "Composants fonctionnels, custom hooks, gestion d'état réactive, virtual DOM et consommation d'APIs REST.",
      chips: ["Hooks & State", "Single Page Apps", "REST Client", "Modern UI"],
    },
    {
      name: "JavaScript (ES6+)",
      category: "frontend",
      categoryLabel: "Frontend & Web",
      icon: <SiJavascript className="text-[#F7DF1E]" size={26} />,
      brandColor: "#F7DF1E",
      level: "advanced",
      role: "Dynamic Client-Side Scripting",
      description: "Programmation asynchrone (Async/Await, Promises), manipulation du DOM, closures et modularité moderne.",
      chips: ["ES6+ Syntax", "Async / Await", "Fetch API", "Event Driven"],
    },
    {
      name: "Tailwind CSS",
      category: "frontend",
      categoryLabel: "Frontend & Web",
      icon: <SiTailwindcss className="text-[#06B6D4]" size={28} />,
      brandColor: "#06B6D4",
      level: "advanced",
      role: "Utility-First Responsive Styling",
      description: "Conception d'interfaces dark-mode premium, animations fluides, glassmorphism et design responsive précis.",
      chips: ["Responsive", "Dark Mode", "Glassmorphism", "Flex/Grid"],
    },
    {
      name: "HTML5 & CSS3",
      category: "frontend",
      categoryLabel: "Frontend & Web",
      icon: <SiHtml5 className="text-[#E34F26]" size={28} />,
      brandColor: "#E34F26",
      level: "core",
      role: "Semantic Web Structure & Styling",
      description: "Structure web sémantique, accessibilité (a11y), flexbox, grid layouts et animations CSS keyframes.",
      chips: ["Semantic HTML", "CSS Grid", "Flexbox", "Animations"],
    },

    // ─── MOBILE ───
    {
      name: "Kotlin",
      category: "mobile",
      categoryLabel: "Mobile Apps",
      icon: <SiKotlin className="text-[#7F52FF]" size={26} />,
      brandColor: "#7F52FF",
      level: "core",
      role: "Android Native Development",
      description: "Applications Android natives, Android Studio, architecture MVVM, coroutines et composants Jetpack.",
      chips: ["Android SDK", "MVVM", "Coroutines", "Jetpack"],
    },
    {
      name: "Flutter",
      category: "mobile",
      categoryLabel: "Mobile Apps",
      icon: <SiFlutter className="text-[#02569B]" size={26} />,
      brandColor: "#02569B",
      level: "core",
      role: "Cross-Platform Mobile Apps",
      description: "Développement cross-platform iOS & Android, gestion d'état, animations et design personnalisé.",
      chips: ["Cross-Platform", "State Mgmt", "Custom Widgets", "iOS & Android"],
    },
    {
      name: "Dart",
      category: "mobile",
      categoryLabel: "Mobile Apps",
      icon: <SiDart className="text-[#0175C2]" size={26} />,
      brandColor: "#0175C2",
      level: "advanced",
      role: "Client-Optimized Language",
      description: "Typage statique fort, programmation asynchrone avec Streams & Futures pour Flutter.",
      chips: ["Async Streams", "Futures", "Strong Typing", "OOP"],
    },

    // ─── DATABASES ───
    {
      name: "MySQL",
      category: "databases",
      categoryLabel: "Databases & ORM",
      icon: <SiMysql className="text-[#4479A1]" size={30} />,
      brandColor: "#4479A1",
      level: "core",
      role: "Relational Schemas & Indexing",
      description: "Modélisation de bases de données relationnelles, requêtes complexes, indexation, jointures et transactions ACID.",
      chips: ["Relational Design", "Indexing", "ACID", "Complex Queries"],
    },
    {
      name: "SQLite",
      category: "databases",
      categoryLabel: "Databases & ORM",
      icon: <SiSqlite className="text-[#003B57]" size={26} />,
      brandColor: "#003B57",
      level: "advanced",
      role: "Embedded & Mobile Storage",
      description: "Persistance locale pour applications mobiles Flutter & Android, gestion du mode hors-ligne et synchronisation.",
      chips: ["Local Storage", "Offline-First", "Mobile DB", "Lightweight"],
    },

    // ─── DEVOPS & TOOLS ───
    {
      name: "Docker",
      category: "devops",
      categoryLabel: "DevOps & Tools",
      icon: <FaDocker className="text-[#2496ED]" size={30} />,
      brandColor: "#2496ED",
      level: "advanced",
      role: "Containerization & Environment Isolation",
      description: "Conteneurisation d'applications Spring Boot et React, Dockerfile optimisés, Docker Compose et isolation des services.",
      chips: ["Containers", "Docker Compose", "Multi-Stage", "Microservices"],
    },
    {
      name: "GitHub Actions",
      category: "devops",
      categoryLabel: "DevOps & Tools",
      icon: <SiGithubactions className="text-[#2088FF]" size={26} />,
      brandColor: "#2088FF",
      level: "proficient",
      role: "Automated CI/CD Pipelines",
      description: "Workflows automatisés d'intégration continue, exécution des tests unitaires et intégration de déploiement continu.",
      chips: ["CI / CD", "Auto Test", "Workflows", "Build Pipeline"],
    },
    {
      name: "Git & GitHub",
      category: "devops",
      categoryLabel: "DevOps & Tools",
      icon: <FaGitAlt className="text-[#F05032]" size={28} />,
      brandColor: "#F05032",
      level: "core",
      role: "Version Control & Collaborative GitFlow",
      description: "Gestion de versions, branching GitFlow, revues de code, merge requests et collaboration d'équipe.",
      chips: ["GitFlow", "Version Control", "Branches", "Code Reviews"],
    },
    {
      name: "Postman",
      category: "devops",
      categoryLabel: "DevOps & Tools",
      icon: <SiPostman className="text-[#FF6C37]" size={26} />,
      brandColor: "#FF6C37",
      level: "core",
      role: "API Testing & Contract Validation",
      description: "Tests d'endpoints REST, validation de schémas JSON, collections automatisées et documentation d'APIs.",
      chips: ["API Testing", "JSON Validation", "Mocking", "Collections"],
    },
    {
      name: "Figma",
      category: "devops",
      categoryLabel: "DevOps & Tools",
      icon: <SiFigma className="text-[#F24E1E]" size={26} />,
      brandColor: "#F24E1E",
      level: "proficient",
      role: "UI/UX Prototyping & Wireframing",
      description: "Conception de maquettes interactives, prototypage de parcours utilisateurs et design systems cohérents.",
      chips: ["Wireframing", "UI Prototyping", "Design System", "UX Flow"],
    },
    {
      name: "Scrum & Agile",
      category: "devops",
      categoryLabel: "DevOps & Tools",
      icon: <Wrench className="text-[#D9A441]" size={24} />,
      brandColor: "#D9A441",
      level: "advanced",
      role: "Agile Project Delivery & Sprints",
      description: "Organisation de sprints, standups, découpage de user stories, gestion des priorités et livraison itérative.",
      chips: ["Sprint Planning", "User Stories", "Kanban / Scrum", "Iterative"],
    },
  ], []);

  // Filtered list based on active tab
  const filteredTech = useMemo(() => {
    if (activeCategory === "all") return allTechnologies;
    return allTechnologies.filter((item) => item.category === activeCategory);
  }, [activeCategory, allTechnologies]);

  // Tab definitions with count
  const filterTabs = [
    { id: "all", label: t.filterAll, count: allTechnologies.length },
    { id: "backend", label: t.filterBackend, count: allTechnologies.filter((t) => t.category === "backend").length },
    { id: "frontend", label: t.filterFrontend, count: allTechnologies.filter((t) => t.category === "frontend").length },
    { id: "mobile", label: t.filterMobile, count: allTechnologies.filter((t) => t.category === "mobile").length },
    { id: "databases", label: t.filterDatabases, count: allTechnologies.filter((t) => t.category === "databases").length },
    { id: "devops", label: t.filterDevops, count: allTechnologies.filter((t) => t.category === "devops").length },
  ];

  const getLevelBadge = (level: "core" | "advanced" | "proficient") => {
    if (level === "core") {
      return (
        <span className="inline-flex items-center gap-1 rounded-full border border-[#D9A441]/40 bg-[#D9A441]/10 px-2.5 py-0.5 text-[10px] font-mono font-bold text-[#D9A441]">
          <Sparkles size={10} />
          <span>{t.levelCore}</span>
        </span>
      );
    }
    if (level === "advanced") {
      return (
        <span className="inline-flex items-center gap-1 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-2.5 py-0.5 text-[10px] font-mono font-medium text-emerald-400">
          <span>{t.levelAdvanced}</span>
        </span>
      );
    }
    return (
      <span className="inline-flex items-center gap-1 rounded-full border border-blue-400/30 bg-blue-400/10 px-2.5 py-0.5 text-[10px] font-mono font-medium text-blue-300">
        <span>{t.levelProficient}</span>
      </span>
    );
  };

  return (
    <div className="w-full space-y-12">
      {/* ═══ 1. ARCHITECTURAL PILLARS (TOP BENTO GRID) ═══ */}
      <div>
        <div className="mb-6 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-[#D9A441]" />
            <h3 className="text-xs font-mono font-bold uppercase tracking-widest text-[#D9A441]">
              {t.pillarsTitle}
            </h3>
          </div>
          <span className="text-xs font-mono text-[color:var(--muted)]">
            {t.pillarsSubtitle}
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {/* Pillar 1: Backend */}
          <div className="group relative rounded-2xl border border-white/10 bg-white/[0.02] p-6 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1.5 hover:border-[#6DB33F]/50 hover:shadow-[0_15px_30px_-10px_rgba(109,179,63,0.2)]">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-[#6DB33F]/30 bg-[#6DB33F]/10 text-[#6DB33F] mb-5 group-hover:scale-110 transition-transform">
              <Server size={22} />
            </div>
            <h4 className="text-base font-bold text-white mb-1 group-hover:text-[#6DB33F] transition-colors">
              {t.pillars.backend.title}
            </h4>
            <div className="text-[11px] font-mono text-[#6DB33F] font-semibold mb-3">
              {t.pillars.backend.subtitle}
            </div>
            <p className="text-xs text-[color:var(--muted)] leading-relaxed">
              {t.pillars.backend.desc}
            </p>
          </div>

          {/* Pillar 2: Frontend */}
          <div className="group relative rounded-2xl border border-white/10 bg-white/[0.02] p-6 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1.5 hover:border-[#61DAFB]/50 hover:shadow-[0_15px_30px_-10px_rgba(97,218,251,0.2)]">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-[#61DAFB]/30 bg-[#61DAFB]/10 text-[#61DAFB] mb-5 group-hover:scale-110 transition-transform">
              <FaReact size={24} />
            </div>
            <h4 className="text-base font-bold text-white mb-1 group-hover:text-[#61DAFB] transition-colors">
              {t.pillars.frontend.title}
            </h4>
            <div className="text-[11px] font-mono text-[#61DAFB] font-semibold mb-3">
              {t.pillars.frontend.subtitle}
            </div>
            <p className="text-xs text-[color:var(--muted)] leading-relaxed">
              {t.pillars.frontend.desc}
            </p>
          </div>

          {/* Pillar 3: Mobile */}
          <div className="group relative rounded-2xl border border-white/10 bg-white/[0.02] p-6 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1.5 hover:border-[#02569B]/50 hover:shadow-[0_15px_30px_-10px_rgba(2,86,155,0.25)]">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-[#02569B]/30 bg-[#02569B]/10 text-[#02569B] mb-5 group-hover:scale-110 transition-transform">
              <Smartphone size={22} />
            </div>
            <h4 className="text-base font-bold text-white mb-1 group-hover:text-[#64B5F6] transition-colors">
              {t.pillars.mobile.title}
            </h4>
            <div className="text-[11px] font-mono text-[#64B5F6] font-semibold mb-3">
              {t.pillars.mobile.subtitle}
            </div>
            <p className="text-xs text-[color:var(--muted)] leading-relaxed">
              {t.pillars.mobile.desc}
            </p>
          </div>

          {/* Pillar 4: DevOps & Data */}
          <div className="group relative rounded-2xl border border-white/10 bg-white/[0.02] p-6 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1.5 hover:border-[#2496ED]/50 hover:shadow-[0_15px_30px_-10px_rgba(36,150,237,0.2)]">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-[#2496ED]/30 bg-[#2496ED]/10 text-[#2496ED] mb-5 group-hover:scale-110 transition-transform">
              <FaDocker size={24} />
            </div>
            <h4 className="text-base font-bold text-white mb-1 group-hover:text-[#2496ED] transition-colors">
              {t.pillars.dataDevops.title}
            </h4>
            <div className="text-[11px] font-mono text-[#2496ED] font-semibold mb-3">
              {t.pillars.dataDevops.subtitle}
            </div>
            <p className="text-xs text-[color:var(--muted)] leading-relaxed">
              {t.pillars.dataDevops.desc}
            </p>
          </div>
        </div>
      </div>

      {/* ═══ 2. INTERACTIVE FILTER TABS ═══ */}
      <div className="space-y-6">
        <div className="flex flex-wrap items-center gap-2 border-b border-white/10 pb-4">
          {filterTabs.map((tab) => {
            const isActive = activeCategory === tab.id;
            return (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveCategory(tab.id as SkillCategory)}
                className={`relative inline-flex items-center gap-2 rounded-xl px-4 py-2 text-xs font-mono font-medium transition-all duration-300 ${
                  isActive
                    ? "border border-[#D9A441] bg-[#D9A441]/10 text-white shadow-[0_0_20px_rgba(217,164,65,0.2)]"
                    : "border border-white/10 bg-white/[0.02] text-gray-400 hover:border-white/20 hover:bg-white/[0.05] hover:text-white"
                }`}
              >
                <span>{tab.label}</span>
                <span
                  className={`rounded-full px-2 py-0.2 text-[10px] font-bold ${
                    isActive
                      ? "bg-[#D9A441] text-black"
                      : "bg-white/10 text-gray-400"
                  }`}
                >
                  {tab.count}
                </span>
              </button>
            );
          })}
        </div>

        {/* ═══ 3. THE ARSENAL GRID (TECH CARDS) ═══ */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredTech.map((tech) => (
            <div
              key={tech.name}
              className="group relative flex flex-col justify-between rounded-2xl border border-white/10 bg-white/[0.02] p-6 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1.5 hover:border-white/30"
              style={{
                boxShadow: undefined,
              }}
            >
              {/* Ambient Hover Glow behind card */}
              <div
                className="absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100 pointer-events-none blur-2xl"
                style={{
                  background: `radial-gradient(circle at 50% 20%, ${tech.brandColor}20, transparent 70%)`,
                }}
              />

              <div className="relative z-10 space-y-4">
                {/* Top Row: Brand Icon + Level Badge */}
                <div className="flex items-center justify-between">
                  <div
                    className="flex h-14 w-14 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] transition-all duration-300 group-hover:scale-110"
                    style={{
                      borderColor: `${tech.brandColor}40`,
                      background: `color-mix(in oklab, ${tech.brandColor} 12%, transparent)`,
                    }}
                  >
                    {tech.icon}
                  </div>

                  {getLevelBadge(tech.level)}
                </div>

                {/* Tech Title & Role */}
                <div>
                  <h4 className="text-xl font-bold text-white group-hover:text-white transition-colors">
                    {tech.name}
                  </h4>
                  <div className="text-xs font-mono font-medium text-gray-400 mt-0.5">
                    {tech.role}
                  </div>
                </div>

                {/* Short capability summary */}
                <p className="text-xs text-[color:var(--muted)] leading-relaxed">
                  {tech.description}
                </p>
              </div>

              {/* Bottom Tags / Capabilities */}
              <div className="relative z-10 pt-4 mt-4 border-t border-white/5 flex flex-wrap gap-1.5">
                {tech.chips.map((chip) => (
                  <span
                    key={chip}
                    className="inline-flex items-center gap-1 rounded-md border border-white/5 bg-white/[0.03] px-2.5 py-1 text-[11px] font-mono text-gray-300 transition-colors group-hover:border-white/15"
                  >
                    <span
                      className="h-1 w-1 rounded-full"
                      style={{ backgroundColor: tech.brandColor }}
                    />
                    <span>{chip}</span>
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ═══ 4. ENGINEERING STANDARDS & DISCIPLINE BANNER ═══ */}
      <div className="relative rounded-3xl border border-[#D9A441]/30 bg-gradient-to-r from-[#D9A441]/10 via-white/[0.02] to-transparent p-6 sm:p-8 backdrop-blur-2xl shadow-xl overflow-hidden">
        {/* Glow corner */}
        <div className="absolute top-0 right-0 h-40 w-40 rounded-full bg-[#D9A441]/10 blur-2xl pointer-events-none" />

        <div className="mb-6 flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-white/10 pb-4">
          <div className="flex items-center gap-2.5">
            <ShieldCheck size={20} className="text-[#D9A441]" />
            <h3 className="text-base sm:text-lg font-bold text-white tracking-wide">
              {t.standardsTitle}
            </h3>
          </div>
          <span className="text-xs font-mono text-gray-400">
            {t.standardsSubtitle}
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          <div className="space-y-1.5 p-3 rounded-xl bg-white/[0.02] border border-white/5">
            <div className="flex items-center gap-2 text-xs font-mono font-bold text-[#D9A441]">
              <CheckCircle2 size={14} />
              <span>{t.standards.cleanArch.title}</span>
            </div>
            <p className="text-xs text-[color:var(--muted)] leading-relaxed">
              {t.standards.cleanArch.desc}
            </p>
          </div>

          <div className="space-y-1.5 p-3 rounded-xl bg-white/[0.02] border border-white/5">
            <div className="flex items-center gap-2 text-xs font-mono font-bold text-emerald-400">
              <CheckCircle2 size={14} />
              <span>{t.standards.security.title}</span>
            </div>
            <p className="text-xs text-[color:var(--muted)] leading-relaxed">
              {t.standards.security.desc}
            </p>
          </div>

          <div className="space-y-1.5 p-3 rounded-xl bg-white/[0.02] border border-white/5">
            <div className="flex items-center gap-2 text-xs font-mono font-bold text-cyan-400">
              <CheckCircle2 size={14} />
              <span>{t.standards.performance.title}</span>
            </div>
            <p className="text-xs text-[color:var(--muted)] leading-relaxed">
              {t.standards.performance.desc}
            </p>
          </div>

          <div className="space-y-1.5 p-3 rounded-xl bg-white/[0.02] border border-white/5">
            <div className="flex items-center gap-2 text-xs font-mono font-bold text-blue-400">
              <CheckCircle2 size={14} />
              <span>{t.standards.devops.title}</span>
            </div>
            <p className="text-xs text-[color:var(--muted)] leading-relaxed">
              {t.standards.devops.desc}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
