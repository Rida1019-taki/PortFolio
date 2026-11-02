"use client";
import { toast } from "sonner";
import {
  ArrowRight,
  ArrowUpRight,
  Award,
  BookOpen,
  Briefcase,
  Code2,
  CodeXml,
  Database,
  Download,
  ExternalLink,
  FileCode2,
  FileText,
  GraduationCap,
  Laptop,
  Laptop2,
  Layers,
  Mail,
  MapPin,
  Monitor,
  Phone,
  Rocket,
  Server,
  Shield,
  ShieldCheck,
  Smartphone,
  Terminal,
  Wrench,
  Zap,
} from "lucide-react";
import Image from "next/image";
import {
  FaDiscord,
  FaDocker,
  FaGithub,
  FaInstagram,
  FaJava,
  FaLinkedin,
  FaPython,
  FaReact,
  FaWhatsapp,
} from "react-icons/fa";
import {
  SiKotlin,
  SiSpringboot,
  SiFlutter,
  SiMysql,
  SiPostman,
  SiFigma,
  SiDart,
} from "react-icons/si";
import ScrollReveal from "@/components/ScrollReveal";
import ParticleField from "@/components/ParticleField";
import MouseGlow from "@/components/MouseGlow";
import AnimatedNumber from "@/components/AnimatedNumber";
import TypewriterText from "@/components/TypewriterText";
import { useLanguage } from "@/components/LanguageProvider";
import LanguageToggle from "@/components/LanguageToggle";
import HackathonShowcase, { HackathonDetail } from "@/components/HackathonShowcase";
import SkillsShowcase from "@/components/SkillsShowcase";
import WorkShowcase, { ProjectItem } from "@/components/WorkShowcase";
import ExperienceShowcase, { ExperienceItem } from "@/components/ExperienceShowcase";
import EducationShowcase, { EducationItem } from "@/components/EducationShowcase";
import ResumeShowcase from "@/components/ResumeShowcase";
import ContactShowcase from "@/components/ContactShowcase";
import CertificationsShowcase from "@/components/CertificationsShowcase";
import emailjs from "@emailjs/browser";
import { useEffect, useRef, useState } from "react";
import {HiMenu, HiOutlineMenu, HiOutlineMenuAlt3, HiSparkles, HiX} from "react-icons/hi";
import {FiArrowUpRight, FiCommand} from "react-icons/fi";


export function Header() {
  const { t } = useLanguage();

  const socialLinks = [
    { icon: <FaGithub size={15} />, href: "https://github.com/Rida1019-taki", label: "GitHub" },
    { icon: <FaLinkedin size={15} />, href: "https://www.linkedin.com/in/rida-taki-bb44a8350", label: "LinkedIn" },
    { icon: <FaWhatsapp size={15} />, href: "https://wa.me/212649487957", label: "WhatsApp" },
    { icon: <FaDiscord size={15} />, href: "https://discord.com/users/rida_taki", label: "Discord" },
    { icon: <FaInstagram size={15} />, href: "https://www.instagram.com/rida_taki_10?igsh=OW5pZnI2Mjh2ejBv", label: "Instagram" },
  ];

  const navItems = [
    { number: "01", label: t.nav.about, href: "#about" },
    { number: "02", label: t.nav.skills, href: "#skills" },
    { number: "03", label: t.nav.work, href: "#work" },
    { number: "04", label: t.nav.experience, href: "#experience" },
    { number: "05", label: t.nav.education, href: "#education" },
    { number: "06", label: t.nav.hackathons, href: "#hackathons" },
    { number: "07", label: t.nav.resume, href: "#resume" },
    { number: "08", label: t.nav.contact, href: "#contact" },
  ];

  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("about");
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);

    const observerOptions = {
      root: null,
      rootMargin: "-20% 0px -60% 0px",
      threshold: 0,
    };

    const observerCallback: IntersectionObserverCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    navItems.forEach((item) => {
      const element = document.querySelector(item.href);
      if (element) observer.observe(element);
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      observer.disconnect();
    };
  }, []);

  return (
      <>
        {/* Dynamic Floating Pill Header */}
        <header className="fixed top-6 inset-x-0 z-50 px-4 sm:px-8 pointer-events-none">
          <div className="mx-auto max-w-7xl flex items-center justify-between pointer-events-auto gap-3">

            {/* Logo Badge */}
            <a
                href="#"
                className="group flex items-center gap-3 rounded-2xl bg-neutral-950/80 p-2 pr-4 border border-white/10 backdrop-blur-2xl shadow-[0_10px_30px_rgba(0,0,0,0.8)] hover:border-[#D9A441]/50 transition-all duration-300"
            >
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#D9A441] font-mono text-xs font-black text-black group-hover:scale-105 transition-transform">
                RT
              </div>
              <div className="flex flex-col">
              <span className="text-xs font-black tracking-widest text-white group-hover:text-[#D9A441] transition-colors">
                RIDA TAKI
              </span>
                <span className="text-[9px] font-mono text-gray-400">
                {t.nav.roleTitle}
              </span>
              </div>
            </a>

            {/* Nav Links Badge */}
            <div
                className={`hidden lg:flex items-center gap-1 rounded-2xl bg-neutral-950/80 p-2 border backdrop-blur-2xl transition-all duration-500 ${
                    scrolled
                        ? "border-[#D9A441]/30 shadow-[0_10px_30px_rgba(0,0,0,0.8)] scale-95"
                        : "border-white/10"
                }`}
            >
              {navItems.map((item) => {
                const id = item.href.replace("#", "");
                const isActive = activeSection === id;
                return (
                    <a
                        key={item.label}
                        href={item.href}
                        className={`relative px-4 py-2 text-xs font-mono uppercase tracking-wider transition-all duration-300 rounded-xl ${
                            isActive
                                ? "text-black bg-[#D9A441] font-bold shadow-[0_0_15px_rgba(217,164,65,0.4)]"
                                : "text-gray-400 hover:text-white hover:bg-white/5"
                        }`}
                    >
                      {item.label}
                    </a>
                );
              })}
            </div>

            {/* Social Icons Badge + Action Buttons */}
            <div className="flex items-center gap-2">

              {/* Always Visible Social Icons Badge */}
              {/* Social Icons Badge */}
              <div className="hidden sm:flex items-center gap-1.5 rounded-2xl bg-neutral-950/80 p-2 border border-white/10 backdrop-blur-2xl shadow-[0_10px_30px_rgba(0,0,0,0.8)]">
                {socialLinks.map((social) => (
                    <a
                        key={social.label}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={social.label}
                        className="flex h-8 w-8 items-center justify-center rounded-xl text-gray-400 hover:text-black hover:bg-[#D9A441] transition-all duration-300"
                    >
                      {social.icon}
                    </a>
                ))}
              </div>

              {/* Language Switcher Pill */}
              <LanguageToggle />

              {/* Let's Talk CTA */}
              <a
                  href="#contact"
                  className="hidden md:flex items-center gap-2 rounded-2xl bg-neutral-950/80 px-4 py-2.5 border border-white/10 text-xs font-mono font-bold text-white hover:text-[#D9A441] hover:border-[#D9A441]/50 backdrop-blur-2xl transition-all duration-300"
              >
                <FiCommand size={14} className="text-[#D9A441]" />
                <span>{t.nav.letsTalk}</span>
              </a>

              {/* Kinetic Menu Button */}
              <button
                  onClick={() => setIsOpen(!isOpen)}
                  className="flex lg:hidden h-11 w-11 items-center justify-center rounded-2xl bg-[#D9A441] text-black hover:bg-white transition-all duration-300 shadow-[0_0_20px_rgba(217,164,65,0.3)] hover:scale-105"
                  aria-label="Toggle navigation menu"
              >
                {isOpen ? <HiX size={22} /> : <HiOutlineMenuAlt3 size={22} />}
              </button>
            </div>
          </div>
        </header>

        {/* Fullscreen Interactive Overlay Menu */}
        <div
            className={`fixed inset-0 z-40 bg-black/95 backdrop-blur-3xl transition-all duration-700 flex flex-col justify-between p-8 md:p-16 ${
                isOpen
                    ? "opacity-100 pointer-events-auto translate-y-0"
                    : "opacity-0 pointer-events-none -translate-y-8"
            }`}
        >
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none" />

          <div className="pt-16" />

          {/* Overlay Navigation */}
          <div className="relative z-10 mx-auto max-w-5xl w-full grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <nav className="flex flex-col gap-2">
              {navItems.map((item) => (
                  <a
                      key={item.label}
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className="group flex items-center gap-6 py-2 text-3xl sm:text-5xl font-black tracking-tight text-neutral-500 hover:text-white transition-all duration-300"
                  >
                <span className="font-mono text-sm text-[#D9A441] opacity-60 group-hover:opacity-100 group-hover:translate-x-2 transition-all">
                  {item.number}
                </span>
                    <span className="group-hover:translate-x-4 transition-transform duration-300">
                  {item.label}
                </span>
                  </a>
              ))}
            </nav>

            <div className="flex flex-col gap-8 border-t md:border-t-0 md:border-l border-white/10 pt-8 md:pt-0 md:pl-12">
              {/* Language Selector in Mobile */}
              <div>
                <h4 className="font-mono text-xs uppercase tracking-widest text-[#D9A441] mb-3">
                  {t.mobileMenu.languageTitle}
                </h4>
                <LanguageToggle variant="mobile" />
              </div>

              <div>
                <h4 className="font-mono text-xs uppercase tracking-widest text-[#D9A441] mb-2">
                  {t.mobileMenu.directContact}
                </h4>
                <a
                    href="#contact"
                    onClick={() => setIsOpen(false)}
                    className="text-lg font-bold text-white hover:underline"
                >
                  takirida72@gmail.com
                </a>
              </div>

              <div>
                <h4 className="font-mono text-xs uppercase tracking-widest text-[#D9A441] mb-4">
                  {t.mobileMenu.socialChannels}
                </h4>
                <div className="flex flex-wrap gap-3">
                  {socialLinks.map((social) => (
                      <a
                          key={social.label}
                          href={social.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-xs font-mono text-gray-300 hover:border-[#D9A441] hover:text-[#D9A441] hover:bg-[#D9A441]/10 transition-all"
                      >
                        {social.icon}
                        <span>{social.label}</span>
                        <FiArrowUpRight size={12} />
                      </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="relative z-10 mx-auto max-w-5xl w-full flex justify-between items-center text-xs font-mono text-gray-500 border-t border-white/10 pt-6">
            <span>{t.mobileMenu.credit}</span>
            <span className="hidden sm:inline">{t.mobileMenu.location}</span>
          </div>
        </div>
      </>
  );
}

export default function Home() {
  const { t } = useLanguage();

  const projects: ProjectItem[] = [
    {
      id: "healthcare",
      name: "HealthCare+",
      domain: "Système Médical & Santé",
      subtitle: "Plateforme Hospitalière Full-Stack Sécurisée",
      description:
        "Solution complète de gestion médicale permettant l'administration centralisée des patients, médecins, consultations et dossiers médicaux, articulée autour d'une API REST Spring Boot robuste et d'un client React dynamique.",
      specs: [
        { label: "Architecture", value: "API RESTful découplée" },
        { label: "Sécurité", value: "Spring Security & JWT" },
        { label: "Base de données", value: "MySQL & Hibernate ORM" },
        { label: "Déploiement", value: "Docker & Environnement isolé" },
      ],
      highlights: [
        "Authentification sécurisée par token JWT et gestion granulaire des rôles (Médecin, Patient, Admin).",
        "Gestion complète des dossiers médicaux électroniques et prise de rendez-vous en temps réel.",
        "Tableaux de bord d'analyse avec requêtes optimisées et architecture prête pour la production.",
      ],
      tags: [
        "Java",
        "Spring Boot",
        "React",
        "Spring Security",
        "JWT",
        "Hibernate",
        "MySQL",
        "Docker",
        "Axios",
        "REST API",
      ],
      image: "/healthcare.png",
      githubBackend:
        "https://github.com/ENAA-School-Student/HealthCare-Syst-me-de-Gestion_M-dicale",
      githubFrontend:
        "https://github.com/Rida1019-taki/HealthCare-Frontend.git",
      accent: "#5a8fd4",
    },
    {
      id: "logitrack",
      name: "LogiTrack",
      domain: "Logistique & Supply Chain",
      subtitle: "Système de Gestion des Flux et Expéditions",
      description:
        "Plateforme d'entreprise dédiée au pilotage des opérations logistiques, du suivi des stocks et de la traçabilité des livraisons, dotée d'un contrôle d'accès multi-rôles strict et d'une interface utilisateur Material UI avancée.",
      specs: [
        { label: "Architecture", value: "Client-Serveur modulaire" },
        { label: "Contrôle d'accès", value: "Role Guards (ADMIN, MANAGER, AGENT)" },
        { label: "Validation", value: "React Hook Form & Yup" },
        { label: "Données", value: "MySQL, Pagination & Filtrage" },
      ],
      highlights: [
        "Sécurisation complète du routage (Protected Routes, Role Guards et intercepteurs Axios).",
        "Gestion en temps réel des commandes, produits et statuts d'expédition avec filtres avancés.",
        "Tableaux de bord statistiques interactifs avec pagination et requêtes API asynchrones.",
      ],
      tags: [
        "Java",
        "Spring Boot",
        "React",
        "Vite",
        "Material UI",
        "Spring Security",
        "JWT",
        "MySQL",
        "Axios",
        "React Router",
      ],
      image: "/logitrack1.png",
      githubBackend: "https://github.com/Rida1019-taki/LogiTrack",
      githubFrontend: "https://github.com/Rida1019-taki/LogiTrack_FrontEnd",
      accent: "#e07040",
    },
    {
      id: "fleetflow",
      name: "FleetFlow",
      domain: "Gestion de Parc & DevOps",
      subtitle: "Plateforme de Flotte Automobile & Livraisons",
      description:
        "Solution d'ingénierie logicielle pour l'orchestration des flottes de véhicules, la gestion des conducteurs et l'automatisation des flux logistiques, intégrée dans une chaîne d'intégration continue CI/CD.",
      specs: [
        { label: "Architecture", value: "Micro-services & Design Patterns" },
        { label: "Documentation", value: "Swagger / OpenAPI 3.0" },
        { label: "DevOps & CI/CD", value: "Pipeline GitHub Actions" },
        { label: "Persistance", value: "MySQL & Transactions JPA" },
      ],
      highlights: [
        "Architecture basée sur des DTOs stricts avec MapStruct pour des transferts de données optimisés.",
        "Pipeline CI/CD automatisé avec GitHub Actions pour les tests et la validation continue.",
        "Documentation interactive des endpoints API via Swagger UI facilitant l'intégration.",
      ],
      tags: [
        "Java",
        "Spring Boot",
        "Docker",
        "GitHub Actions",
        "MapStruct",
        "Swagger",
        "MySQL",
        "JWT",
      ],
      image: "/fleetflow.png",
      github: "https://github.com/NihadHub/fleetFlow.git",
      accent: "#5ab88a",
    },
  ];

  const experiences: ExperienceItem[] = [
    {
      company: "Skaii service",
      role: "DÉVELOPPEUR INFORMATIQUE",
      service: "DÉVELOPPEUR WEB",
      period: "15/10/2026 — Present",
      status: "current",
      location: "Morocco",
      description:
        "Design, development, and maintenance of modern high-performance web applications. Implementing robust software architectures, RESTful API design, and intuitive user interfaces.",
      responsibilities: [
        "Developing responsive, dynamic, and intuitive user interfaces.",
        "Designing, developing, and consuming secure RESTful APIs.",
        "Relational database modeling, schema management, and query optimization.",
        "Collaborating in agile teams (Scrum) following software quality best practices.",
      ],
      technologies: [
        "React",
        "Laravel",
        "Java",
        "Spring Boot",
        "REST API",
        "MySQL",
        "Git",
      ],
    },
  ];

  const education: EducationItem[] = [
    {
      institution: "École Numérique Ahmed Al Hansali",
      degree: "Full Stack Java / React",
      period: "12/01/2025 — 28/10/2026",
      status: "completed",
      location: "Béni Mellal, Maroc",
    },
    {
      institution: "ISTA Oued Zem",
      degree: "Digital Development — Mobile Option",
      period: "2023 — 2025",
      status: "completed",
      location: "Oued Zem, Maroc",
    },
  ];


  const hackathonsShowcase: HackathonDetail[] = [
    {
      id: "foottech",
      title: t.hackathons.foottech.title,
      description: t.hackathons.foottech.desc,
      tag: t.hackathons.foottech.tag || "National Competition • Finalist",
      date: t.hackathons.foottech.date || "2026",
      role: t.hackathons.foottech.role || "Lead Full Stack & Mobile Architect",
      quote: t.hackathons.foottech.quote || "",
      roleDetails: t.hackathons.foottech.roleDetails || [],
      photoCaptions: t.hackathons.foottech.photoCaptions || [],
      images: [
        "/hackathons/foottech-1.jpg",
        "/hackathons/foottech-2.jpg",
        "/hackathons/foottech-3.jpg",
        "/hackathons/foottech.jpg",
      ],
      certificate: null,
      certificateLabel: t.hackathons.foottech.certificateLabel,
      tags: ["React", "Spring Boot", "Flutter", "MySQL", "Sports Tech"],
    },
    {
      id: "hacktoberfest",
      title: t.hackathons.hacktoberfest.title,
      description: t.hackathons.hacktoberfest.desc,
      tag: t.hackathons.hacktoberfest.tag || "Open Source & AI Summit",
      date: t.hackathons.hacktoberfest.date || "28 Oct 2026",
      role: t.hackathons.hacktoberfest.role || "Full Stack Developer & Open Source Contributor",
      quote: t.hackathons.hacktoberfest.quote || "",
      roleDetails: t.hackathons.hacktoberfest.roleDetails || [],
      photoCaptions: t.hackathons.hacktoberfest.photoCaptions || [],
      images: [
        "/hackathons/hacktoberfest-1.jpg",
        "/hackathons/hacktoberfest-2.jpg",
        "/hackathons/hacktoberfest-3.jpg",
        "/hackathons/hacktoberfest-cert.png",
      ],
      certificate: "/hackathons/hacktoberfest-cert.png",
      certificateLabel: t.hackathons.hacktoberfest.certificateLabel,
      tags: ["Hacktoberfest", "Open Source", "Java", "Spring Boot", "React", "AI & Robotics"],
    },
    {
      id: "rally",
      title: t.hackathons.rally.title,
      description: t.hackathons.rally.desc,
      tag: t.hackathons.rally.tag || "AI & Innovation Challenge",
      date: t.hackathons.rally.date || "2026",
      role: t.hackathons.rally.role || "Algorithm & Backend Developer",
      quote: t.hackathons.rally.quote || "",
      roleDetails: t.hackathons.rally.roleDetails || [],
      photoCaptions: t.hackathons.rally.photoCaptions || [],
      images: ["/hackathons/rally-ai1.jpeg"],
      certificate: null,
      tags: ["Python", "FastAPI", "React", "Docker", "Machine Learning"],
    },
  ];

  const tickerItems = t.tickerItems || [
    "Clean Architecture",
    "RESTful APIs Design",
    "Spring Boot Ecosystem",
    "Microservices Ready",
    "SOLID Principles",
    "CI/CD Automation",
    "Dockerized Containers",
    "Database Optimization",
    "JWT Security & Auth",
    "High Performance & Scalability",
  ];

  const techStack = [
    { icon: <FaJava size={26} />, label: "Java", color: "#e07040" },
    { icon: <SiSpringboot size={22} />, label: "Spring", color: "#5ab88a" },
    { icon: <SiKotlin size={20} />, label: "Kotlin", color: "#a78bfa" },
    { icon: <FaReact size={22} />, label: "React", color: "#5a8fd4" },
    { icon: <FaPython size={22} />, label: "Python", color: "#d4a853" },
    { icon: <FaDocker size={22} />, label: "Docker", color: "#5a8fd4" },
    { icon: <SiFlutter size={20} />, label: "Flutter", color: "#5a8fd4" },
    { icon: <SiDart size={20} />, label: "Dart", color: "#0175C2" },
    { icon: <SiMysql size={24} />, label: "MySQL", color: "#e07040" },
    { icon: <SiPostman size={20} />, label: "Postman", color: "#e07040" },
    { icon: <SiFigma size={18} />, label: "Figma", color: "#a78bfa" },
  ];

  // Section states managed inside respective showcase components

  const [isPastAbout, setIsPastAbout] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const aboutSection = document.getElementById("about");
      if (aboutSection) {
        const rect = aboutSection.getBoundingClientRect();
        setIsPastAbout(rect.bottom < window.innerHeight / 2);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // 1. Title scroll visibility
  const [isTitleVisible, setIsTitleVisible] = useState(true);
  const titleRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
        ([entry]) => {
          setIsTitleVisible(entry.isIntersecting);
        },
        { threshold: 0.1 }
    );

    if (titleRef.current) {
      observer.observe(titleRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // 2. Bio scroll visibility
  const [isBioVisible, setIsBioVisible] = useState(true);
  const bioRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
        ([entry]) => {
          setIsBioVisible(entry.isIntersecting);
        },
        { threshold: 0.1 }
    );

    if (bioRef.current) {
      observer.observe(bioRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
      <div className="min-h-screen text-[var(--foreground)] relative">
        {/* Header / Navbar Component */}
        <Header />

        {/* Background Video */}
        <div className="fixed inset-0 -z-20 overflow-hidden">
          <video
              className="video-bg w-full h-full object-cover rounded-none"
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              style={{
                imageRendering: "crisp-edges",
                transform: "translateZ(0)",
              }}
          >
            <source src="/video/portfolio.webm" type="video/webm" />
            <source src="/video/portfolio.mp4" type="video/mp4" />
          </video>

          <div
              className={`absolute inset-0 transition-all duration-700 ease-in-out ${
                  isPastAbout
                      ? "bg-black/80 backdrop-blur-md"
                      : "bg-black/50 backdrop-blur-none"
              }`}
          />
        </div>

        <ParticleField />
        <MouseGlow />

          <main className="relative z-10 pt-20">
            {/* HERO SECTION */}
            <section
                id="about"
                className="relative min-h-screen flex items-center justify-center overflow-hidden z-10 pt-32 pb-16"
            >
              {/* Ambient Subtle Glows */}
              <div className="hero-effects pointer-events-none">
                <div className="floating-grid opacity-30" />
                <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-gradient-to-tr from-[#D9A441]/15 via-emerald-500/5 to-transparent blur-[120px] rounded-full" />
                <div className="noise-layer opacity-40" />
              </div>

              <div className="relative z-10 mx-auto max-w-6xl px-6 sm:px-8 w-full">
                <div className="space-y-12">

                  {/* 1. Status Bar / Micro Badges */}
                  <div className="reveal flex flex-wrap items-center justify-between gap-4 border-b border-white/[0.08] pb-6">
                    <div className="flex items-center gap-2.5 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-4 py-1.5 backdrop-blur-md">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
                      <span className="text-[11px] font-mono font-medium uppercase tracking-widest text-emerald-400">
            {t.hero.statusBadge}
          </span>
                    </div>

                    <div className="flex items-center gap-2 text-xs font-mono text-gray-400">
                      <MapPin size={14} className="text-[#D9A441]" />
                      <span>{t.hero.location}</span>
                      <span className="text-gray-600">|</span>
                      <span className="text-gray-500">UTC+1</span>
                    </div>
                  </div>

                  {/* 2. Main Hero Statement */}
                  <div
                      ref={titleRef}
                      className={`reveal reveal-d1 space-y-2 transition-all duration-700 ease-in-out ${
                          isTitleVisible
                              ? "opacity-100 translate-y-0"
                              : "opacity-0 -translate-y-4 pointer-events-none"
                      }`}
                  >
                    <h1 className="display text-[clamp(2.2rem,5vw,4.2rem)] font-extrabold leading-[1.05] tracking-tight">
    <span className="text-white drop-shadow-[0_4px_10px_rgba(0,0,0,0.8)]">
      {t.hero.line1}{" "}
    </span>
                      <br />
                      <span className="bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent">
      {t.hero.line2}{" "}
    </span>
                      <br />
                      <span className="bg-gradient-to-r from-[#F3C669] via-[#D9A441] to-[#B8860B] bg-clip-text text-transparent font-extrabold tracking-tight">
      {t.hero.line3}
    </span>
                    </h1>
                  </div>

                  {/* Subtitle / Typewriter - Tech Pill Badge */}
                  <div className="reveal reveal-d2 inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-white/[0.03] border border-white/10 backdrop-blur-md shadow-inner">
  <span className="relative flex h-2.5 w-2.5">
    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#D9A441] opacity-75"></span>
    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#D9A441]"></span>
  </span>
                    <div className="text-base sm:text-xl font-mono text-gray-200 tracking-wide">
                      <TypewriterText roles={t.hero.typewriterRoles} />
                    </div>
                  </div>

                  {/* 3. Content Grid: Bio & Experience Specs */}
                  <div className="reveal reveal-d3 grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch pt-2">

                    {/* Bio Narrative Card with Enhanced Background */}
                    <div
                        ref={bioRef}
                        className={`lg:col-span-7 flex flex-col justify-between p-8 rounded-3xl border border-white/10 bg-gradient-to-br from-black/80 via-black/50 to-[#D9A441]/10 backdrop-blur-2xl shadow-[0_10px_30px_rgba(0,0,0,0.5)] relative overflow-hidden transition-all duration-700 ease-in-out hover:border-[#D9A441]/30 ${
                            isBioVisible
                                ? "opacity-100 translate-y-0"
                                : "opacity-0 -translate-y-4 pointer-events-none"
                        }`}
                    >
                      {/* Ambient Background Glow Spot */}
                      <div className="absolute -top-20 -right-20 h-48 w-48 rounded-full bg-[#D9A441]/15 blur-3xl pointer-events-none" />
                      <div className="absolute -bottom-20 -left-20 h-48 w-48 rounded-full bg-emerald-500/10 blur-3xl pointer-events-none" />

                      {/* Subtle Left Border Accent */}
                      <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-[#F3C669] via-[#D9A441] to-transparent opacity-80" />

                      <div className="space-y-4 relative z-10">
                        <div className="flex items-center justify-between border-b border-white/10 pb-3">
      <span className="text-[10px] font-mono uppercase tracking-widest text-[#D9A441] font-semibold">
        {t.hero.aboutBadge}
      </span>
                          <div className="...">
                            {/* Background */}
                            <p>Some text</p>
                          </div>
                        </div>

                        <p className="text-base sm:text-lg leading-relaxed text-gray-200 font-normal">
                          {t.hero.aboutBio}
                        </p>
                      </div>

                      {/* Tech Pills Footer */}
                      <div className="flex flex-wrap items-center gap-2 pt-6 mt-6 border-t border-white/10 relative z-10">
                        {["Java 21", "Spring Boot", "React", "Kotlin", "Flutter", "Docker", "MySQL"].map((tech) => (
                            <span
                                key={tech}
                                className="rounded-lg border border-white/10 bg-white/5 px-3 py-1 text-xs font-mono text-gray-300 backdrop-blur-md hover:border-[#D9A441]/40 hover:text-white transition-all"
                            >
        {tech}
      </span>
                        ))}
                      </div>
                    </div>

                    {/* Stats & Actions Side Panel */}
                    <div className="lg:col-span-5 flex flex-col justify-between p-8 rounded-3xl border border-white/10 bg-black/40 backdrop-blur-xl shadow-2xl space-y-8">

                      {/* Metrics Grid */}
                      <div className="grid grid-cols-3 gap-2 text-center divide-x divide-white/10">
                        <div className="pr-2">
                          <div className="text-3xl font-bold text-white font-mono">
                            <AnimatedNumber value={3} suffix="+" />
                          </div>
                          <div className="text-[9px] font-mono uppercase tracking-widest text-gray-400 mt-1">{t.hero.projectsMetric}</div>
                        </div>

                        <div className="px-2">
                          <div className="text-3xl font-bold text-white font-mono">
                            <AnimatedNumber value={10} suffix="+" />
                          </div>
                          <div className="text-[9px] font-mono uppercase tracking-widest text-gray-400 mt-1">{t.hero.stackMetric}</div>
                        </div>

                        <div className="pl-2">
                          <div className="text-3xl font-bold text-white font-mono">
                            <AnimatedNumber value={3} />
                          </div>
                          <div className="text-[9px] font-mono uppercase tracking-widest text-gray-400 mt-1">{t.hero.certsMetric}</div>
                        </div>
                      </div>

                      {/* Call-to-Action Buttons */}
                      <div className="flex flex-col sm:flex-row items-center gap-3">
                        <a
                            href="#work"
                            className="w-full sm:flex-1 inline-flex items-center justify-center gap-2 rounded-2xl px-6 py-3.5 text-xs font-bold text-black transition-all duration-300 hover:scale-[1.02] shadow-[0_0_20px_rgba(201,160,99,0.3)]"
                            style={{
                              background: "linear-gradient(135deg, #F3C669, #C9A063)",
                            }}
                        >
                          {t.hero.exploreBtn} <ArrowRight size={15} />
                        </a>

                        <a
                            href="#contact"
                            className="w-full sm:w-auto group inline-flex items-center justify-center gap-2.5 rounded-2xl px-6 py-3.5 text-xs font-semibold text-gray-200 bg-white/[0.04] border border-white/10 backdrop-blur-xl transition-all duration-300 hover:bg-white/10 hover:border-white/20 hover:text-white hover:scale-[1.02] active:scale-95 shadow-lg"
                        >
                          <Mail
                              size={15}
                              className="text-[#D9A441] transition-transform duration-300 group-hover:scale-110"
                          />
                          <span>{"LET'S TALK"}</span>
                        </a>
                      </div>

                    </div>

                  </div>

                </div>
              </div>
            </section>
  
            {/* ═══ TECH STACK STRIP ═══ */}
            <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8">
              <ScrollReveal>
                <div className="glass rounded-2xl px-6 py-5 sm:px-10 sm:py-6">
                  <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-10">
                    {techStack.map((t) => (
                        <div
                            key={t.label}
                            className="icon-lift group flex flex-col items-center gap-2"
                            style={{ color: "var(--muted)" }}
                            title={t.label}
                        >
                          <div className="transition-colors" style={{ color: "inherit" }}>
                            {t.icon}
                          </div>
                          <span className="text-[9px] font-semibold uppercase tracking-[0.14em] opacity-0 transition-opacity group-hover:opacity-100">
                        {t.label}
                      </span>
                        </div>
                    ))}
                  </div>
                </div>
              </ScrollReveal>
            </div>
  
            {/* ═══ ARCHITECTURE TELEMETRY TICKER ═══ */}
            <div className="mt-20 sm:mt-28">
              <div className="ticker group py-1.5 border-y border-white/10 bg-neutral-950/40 backdrop-blur-md">
                <div className="ticker-track text-xs font-mono font-bold uppercase tracking-[0.25em] text-gray-400 group-hover:[animation-play-state:paused]">
                  {[...tickerItems, ...tickerItems].map((item, i) => (
                      <span key={`${item}-${i}`} className="flex items-center gap-[2.5rem] transition-colors duration-300 hover:text-[#D9A441] cursor-default">
                    {i > 0 && <span className="ticker-dot bg-[#D9A441] shadow-[0_0_8px_rgba(217,164,65,0.8)]" />}
                        {item}
                  </span>
                  ))}
                </div>
              </div>
            </div>
  
            {/* ═══ SKILLS SECTION ═══ */}
            <section id="skills" className="relative mx-auto max-w-7xl px-5 py-24 sm:px-8 sm:py-32">
              <ScrollReveal>
                <div className="mb-14 max-w-2xl space-y-4">
      <span className="section-label inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-semibold text-[#D9A441] backdrop-blur-md">
        <Code2 size={14} /> {t.skills.badge}
      </span>
                  <h2 className="section-title text-3xl sm:text-5xl font-extrabold tracking-tight">
                    <span className="gradient-text">{t.skills.title1} </span>
                    <br />
                    <span className="brand-gradient-text font-extrabold tracking-tight">{t.skills.title2}</span>
                  </h2>
                  <p className="text-base leading-relaxed text-[color:var(--muted)] sm:text-lg">
                    {t.skills.desc}
                  </p>
                </div>
              </ScrollReveal>

              {/* Interactive Technical Arsenal & Pillars Showcase */}
              <ScrollReveal delay={120}>
                <SkillsShowcase t={t.skills} />
              </ScrollReveal>
            </section>
  
            <div className="section-divider mx-auto max-w-7xl" />
  
            {/* ═══ FEATURED PROJECTS (BENTO SHOWCASE) ═══ */}
            <section id="work" className="relative mx-auto max-w-7xl px-5 py-24 sm:px-8 sm:py-32">
              <ScrollReveal delay={120}>
                <WorkShowcase
                  projects={projects}
                  t={{
                    badge: t.work.badge,
                    title1: t.work.title1,
                    title2: t.work.title2,
                    desc: t.work.desc,
                    btnBackend: t.work.btnBackend,
                    btnFrontend: t.work.btnFrontend,
                    btnRepo: t.work.btnRepo,
                  }}
                />
              </ScrollReveal>
            </section>
  
            <div className="section-divider mx-auto max-w-7xl" />

            {/* ═══ EXPERIENCE ═══ */}
            <section id="experience" className="relative mx-auto max-w-7xl px-5 py-24 sm:px-8 sm:py-32">
              <ScrollReveal delay={120}>
                <ExperienceShowcase experiences={experiences} t={t.experience} />
              </ScrollReveal>
            </section>

            <div className="section-divider mx-auto max-w-7xl" />
  
              {/* ═══ EDUCATION ═══ */}
            <section id="education" className="relative mx-auto max-w-7xl px-5 py-24 sm:px-8 sm:py-32">
              <ScrollReveal delay={120}>
                <EducationShowcase education={education} t={t.education} />
              </ScrollReveal>
            </section>
  
            <div className="section-divider mx-auto max-w-7xl" />
  
              {/* ═══ CERTIFICATIONS ═══ */}
            <section
              id="certifications"
              className="relative mx-auto max-w-7xl px-5 py-24 sm:px-8 sm:py-32"
            >
              <ScrollReveal>
                <div className="mb-16 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
                  <div className="space-y-4 max-w-2xl">
                    <span className="section-label inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-semibold text-[#D9A441] backdrop-blur-md">
                      <Award size={14} /> {t.certifications.badge}
                    </span>
                    <h2 className="section-title text-3xl sm:text-5xl font-extrabold tracking-tight">
                      <span className="gradient-text">{t.certifications.title1} </span>
                      <br />
                      <span className="brand-gradient-text font-extrabold tracking-tight">{t.certifications.title2}</span>
                    </h2>
                  </div>
                  <p className="max-w-md text-sm sm:text-base text-[color:var(--muted)] leading-relaxed">
                    {t.certifications.desc}
                  </p>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={120}>
                <CertificationsShowcase t={t.certifications} />
              </ScrollReveal>
            </section>
  
            <div className="section-divider mx-auto max-w-7xl" />
  
              {/* ═══ HACKATHONS ═══ */}
            <section
                id="hackathons"
                className="relative mx-auto max-w-7xl px-5 py-24 sm:px-8 sm:py-32"
            >
              <ScrollReveal>
                <div className="mb-16 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
                  <div className="space-y-4 max-w-2xl">
                <span className="section-label inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-semibold text-[#D9A441] backdrop-blur-md">
                    <Rocket size={14} /> {t.hackathons.badge}
                </span>
                    <h2 className="section-title text-3xl sm:text-5xl font-extrabold tracking-tight">
                      <span className="gradient-text">{t.hackathons.title1} </span>
                      <br />
                      <span className="brand-gradient-text font-extrabold tracking-tight">{t.hackathons.title2}</span>
                    </h2>
                  </div>
                  <p className="max-w-md text-sm sm:text-base text-[color:var(--muted)] leading-relaxed">
                    {t.hackathons.desc}
                  </p>
                </div>
              </ScrollReveal>

              {/* New Heroic Spotlight Showcase highlighting Rida in the Arena */}
              <ScrollReveal delay={120}>
                <HackathonShowcase
                  hackathons={hackathonsShowcase}
                  t={{
                    badge: t.hackathons.badge,
                    title1: t.hackathons.title1,
                    title2: t.hackathons.title2,
                    desc: t.hackathons.desc,
                    roleLabel: t.hackathons.roleLabel,
                    impactLabel: t.hackathons.impactLabel,
                    photosLabel: t.hackathons.photosLabel,
                    activeBadge: t.hackathons.activeBadge,
                    inActionBadge: t.hackathons.inActionBadge,
                    viewAllPhotos: t.hackathons.viewAllPhotos,
                  }}
                />
              </ScrollReveal>
            </section>
  
              {/* ═══ RESUME ═══ */}
            <section id="resume" className="relative mx-auto max-w-7xl px-5 py-24 sm:px-8">
              <ScrollReveal>
                <ResumeShowcase t={t.resume} />
              </ScrollReveal>
            </section>
  
            <div className="section-divider mx-auto max-w-7xl" />
  
  
              {/* ═══ CONTACT ═══ */}
            <section
              id="contact"
              className="relative mx-auto max-w-7xl px-5 py-24 sm:px-8 sm:py-32"
            >
              <ScrollReveal>
                <ContactShowcase t={t.contact} />
              </ScrollReveal>
            </section>
          </main>
  
            {/* ═══ FOOTER ═══ */}
            <footer className="relative z-10 border-t border-white/10 bg-black/40 backdrop-blur-xl">
                <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-5 py-8 sm:flex-row sm:px-8">
                    {/* Brand Logo & Copyright */}
                    <div className="flex items-center gap-3">
                        <div
                            className="flex h-9 w-9 items-center justify-center rounded-xl font-bold text-xs text-white shadow-lg"
                            style={{
                                background: "linear-gradient(135deg,#C9A063,#8B5E34,#B8860B)",
                            }}
                        >
                            RT
                        </div>
                        <div className="flex flex-col">
                            <span className="text-sm font-semibold text-white">Rida Taki</span>
                            <span className="text-[11px] font-mono text-[color:var(--muted)]">
            © {new Date().getFullYear()} {t.footer.rights}
          </span>
                        </div>
                    </div>
  
                    {/* Center Text / Status */}
                    <div className="flex items-center gap-2 text-xs font-mono text-[color:var(--muted)]">
                        <span className="text-[#D9A441]">{"//"}</span>
                        <span>{t.footer.tagline}</span>
                    </div>
  
                    {/* Social Links */}
                    <div className="flex items-center gap-3">
                        {[
                            { icon: <FaGithub size={16} />, href: "https://github.com/Rida1019-taki", label: "GitHub" },
                            { icon: <FaLinkedin size={16} />, href: "https://www.linkedin.com/in/rida-taki-bb44a8350", label: "LinkedIn" },
                            { icon: <FaWhatsapp size={16} />, href: "https://wa.me/212649487957", label: "WhatsApp" },
                            { icon: <FaDiscord size={16} />, href: "https://discord.com/users/rida_taki", label: "Discord" },
                            { icon: <FaInstagram size={16} />, href: "https://www.instagram.com/rida_taki_10?igsh=OW5pZnI2Mjh2ejBv", label: "Instagram" },
                        ].map((social) => (
                            <a
                                key={social.label}
                                href={social.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label={social.label}
                                className="flex h-9 w-9 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-gray-400 transition-all duration-300 hover:scale-110 hover:border-[#D9A441]/50 hover:bg-[#D9A441]/10 hover:text-[#D9A441]"
                            >
                                {social.icon}
                            </a>
                        ))}
                    </div>
                </div>
            </footer>
        </div>
    );
  }
