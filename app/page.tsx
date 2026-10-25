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
import emailjs from "@emailjs/browser";
import { useEffect, useRef, useState } from "react";
import {HiMenu, HiOutlineMenu, HiOutlineMenuAlt3, HiSparkles, HiX} from "react-icons/hi";
import {FiArrowUpRight, FiCommand} from "react-icons/fi";


export function Header() {
  const socialLinks = [
    { icon: <FaGithub size={15} />, href: "https://github.com/Rida1019-taki", label: "GitHub" },
    { icon: <FaLinkedin size={15} />, href: "https://www.linkedin.com/in/rida-taki-bb44a8350", label: "LinkedIn" },
    { icon: <FaWhatsapp size={15} />, href: "https://wa.me/212649487957", label: "WhatsApp" },
    { icon: <FaDiscord size={15} />, href: "https://discord.com/users/rida_taki", label: "Discord" },
    { icon: <FaInstagram size={15} />, href: "https://www.instagram.com/rida_taki_10?igsh=OW5pZnI2Mjh2ejBv", label: "Instagram" },
  ];

  const navItems = [
    { number: "01", label: "About", href: "#about" },
    { number: "02", label: "Skills", href: "#skills" },
    { number: "03", label: "Work", href: "#work" },
    { number: "04", label: "Experience", href: "#experience" },
    { number: "05", label: "Education", href: "#education" },
    { number: "06", label: "Hackathons", href: "#hackathons" },
    { number: "07", label: "Resume", href: "#resume" },
    { number: "08", label: "Contact", href: "#contact" },
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
                DEVELOPER
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

              {/* Let's Talk CTA */}
              <a
                  href="#contact"
                  className="hidden md:flex items-center gap-2 rounded-2xl bg-neutral-950/80 px-4 py-2.5 border border-white/10 text-xs font-mono font-bold text-white hover:text-[#D9A441] hover:border-[#D9A441]/50 backdrop-blur-2xl transition-all duration-300"
              >
                <FiCommand size={14} className="text-[#D9A441]" />
                <span>{"LET'S TALK"}</span>
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
              <div>
                <h4 className="font-mono text-xs uppercase tracking-widest text-[#D9A441] mb-2">
                  {"// Direct Contact"}
                </h4>
                <a
                    href="#contact"
                    onClick={() => setIsOpen(false)}
                    className="text-lg font-bold text-white hover:underline"
                >
                  takirida72@email.com
                </a>
              </div>

              <div>
                <h4 className="font-mono text-xs uppercase tracking-widest text-[#D9A441] mb-4">
                  {"// Social Channels"}
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
            <span>DESIGN & CODE BY RIDA TAKI</span>
            <span className="hidden sm:inline">BENI MELLAL, MOROCCO</span>
          </div>
        </div>
      </>
  );
}

export default function Home() {
  const skills = [
    {
      category: "Languages",
      icon: <Terminal size={20} />,
      items: ["Java", "Dart", "JavaScript"],
      accent: "var(--brand)",
    },
    {
      category: "Mobile Dev",
      icon: <Smartphone size={20} />,
      items: ["Kotlin", "Flutter"],
      accent: "var(--accent-gold)",
    },
    {
      category: "Web & Frameworks",
      icon: <Layers size={20} />,
      items: ["React", "Spring Boot", "Spring Security", "HTML5", "CSS3"],
      accent: "var(--accent-blue)",
    },
    {
      category: "Databases",
      icon: <Database size={20} />,
      items: ["MySQL", "SQLite", "JPA", "Hibernate"],
      accent: "var(--accent-emerald)",
    },
    {
      category: "Tools & DevOps",
      icon: <Wrench size={20} />,
      items: ["Docker", "Github Actions", "Scrum", "Git", "Figma", "Postman"],
      accent: "#a78bfa",
    },
  ];

  const projects = [
    {
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
      number: "01",
    },
    {
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
      number: "02",
    },
    {
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
      number: "03",
    },
  ];

  const experiences = [
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

  const education = [
    {
      institution: "École Numérique Ahmed Al Hansali",
      degree: "Full Stack Java / React",
      period: "2025 — Present",
      status: "current",
    },
    {
      institution: "ISTA Oued Zem",
      degree: "Digital Development — Mobile Option",
      period: "2023 — 2025",
      status: "completed",
    },
  ];

  const documents = [
    {
      title: "Introduction à la Cybersécurité",
      issuer: "Cisco Networking Academy",
      file: "/docs/introduction-cybersecurite.pdf",
      icon: ShieldCheck,
    },
    {
      title: "Les Bases du Matériel Informatique",
      issuer: "Cisco Networking Academy",
      file: "/docs/bases-materiel-informatique.pdf",
      icon: Laptop2,
    },
    {
      title: "Python Essentials 1",
      issuer: "Cisco Networking Academy",
      file: "/docs/python-essentials-1.pdf",
      icon: Code2,
    },
  ];

  const hackathons = [
    {
      title: "Rally AI Future Lab 2026",
      description:
          "Participated in an AI hackathon focused on innovative healthcare solutions. Worked in a multidisciplinary team to build an AI-powered medical assistant prototype.",
      image: "/hackathons/rally-ai1.jpeg",
      tags: ["AI", "Healthcare", "Innovation", "Teamwork"],
    },
    {
      title: "FootTech Hackathon 2026",
      description:
          "Developed a football technology solution with rapid prototyping and pitch presentation within 36 hours.",
      image: "/hackathons/foottech.jpg",
      tags: ["Sports Tech", "Next", "Python", "Hackathon"],
    },
  ];

  const tickerItems = [
    "Open to freelance",
    "Full stack Java/JEE",
    "Mobile with Kotlin",
    "REST API design",
    "Spring Boot architecture",
    "Clean UI & UX",
    "Docker & CI/CD",
    "Agile / Scrum",
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

  const [selectedProject, setSelectedProject] = useState<string>("all");
  const [loading, setLoading] = useState(false);

  const sendEmail = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;

    setLoading(true);

    try {
      await emailjs.sendForm(
          "service_jav8hl6",
          "template_440vkxl",
          form,
          "TSdGK4h7h-xBeD4yD"
      );

      form.reset();

      toast.success("Message sent!", {
        description: "Your email has been delivered successfully.",
      });
    } catch (error) {
      console.error(error);

      toast.error("Failed to send message", {
        description: "Please try again in a few moments.",
      });
    } finally {
      setLoading(false);
    }
  };

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
            Open to New Opportunities
          </span>
                    </div>

                    <div className="flex items-center gap-2 text-xs font-mono text-gray-400">
                      <MapPin size={14} className="text-[#D9A441]" />
                      <span>Beni Mellal, Morocco</span>
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
      Crafting digital{" "}
    </span>
                      <br />
                      <span className="bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent">
      experiences that{" "}
    </span>
                      <br />
                      <span className="bg-gradient-to-r from-[#F3C669] via-[#D9A441] to-[#B8860B] bg-clip-text text-transparent font-extrabold tracking-tight">
      truly matter.
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
                      <TypewriterText />
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
        About Me
      </span>
                          <div className="...">
                            {/* Background */}
                            <p>Some text</p>
                          </div>
                        </div>

                        <p className="text-base sm:text-lg leading-relaxed text-gray-200 font-normal">
                          Junior Developer specializing in <span className="text-white font-semibold">Java, Spring Boot, React, and Kotlin</span>. Passionate about building clean API architectures, efficient databases, and functional user interfaces.
                        </p>
                      </div>

                      {/* Tech Pills Footer */}
                      <div className="flex flex-wrap items-center gap-2 pt-6 mt-6 border-t border-white/10 relative z-10">
                        {["Java 21", "Spring Boot", "React", "Next.js", "Docker", "MySQL"].map((tech) => (
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
                          <div className="text-[9px] font-mono uppercase tracking-widest text-gray-400 mt-1">Projects</div>
                        </div>

                        <div className="px-2">
                          <div className="text-3xl font-bold text-white font-mono">
                            <AnimatedNumber value={10} suffix="+" />
                          </div>
                          <div className="text-[9px] font-mono uppercase tracking-widest text-gray-400 mt-1">Tech Stack</div>
                        </div>

                        <div className="pl-2">
                          <div className="text-3xl font-bold text-white font-mono">
                            <AnimatedNumber value={3} />
                          </div>
                          <div className="text-[9px] font-mono uppercase tracking-widest text-gray-400 mt-1">Certs</div>
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
                          Explore Projects <ArrowRight size={15} />
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
  
            {/* ═══ TICKER ═══ */}
            <div className="mt-20 sm:mt-28">
              <div className="ticker">
                <div className="ticker-track text-xs font-semibold uppercase tracking-[0.22em] text-[color:var(--muted)]">
                  {[...tickerItems, ...tickerItems].map((item, i) => (
                      <span key={`${item}-${i}`} className="flex items-center gap-[2.5rem]">
                    {i > 0 && <span className="ticker-dot" />}
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
        <Code2 size={14} /> Technical Arsenal
      </span>
                  <h2 className="section-title text-3xl sm:text-5xl font-extrabold tracking-tight">
                    <span className="gradient-text">Architecting with </span>
                    <br />
                    <span className="brand-gradient-text font-extrabold tracking-tight">modern precision.</span>
                  </h2>
                  <p className="text-base leading-relaxed text-[color:var(--muted)] sm:text-lg">
                    From resilient backends to fluid mobile applications — these are the core tools and frameworks I rely on daily.
                  </p>
                </div>
              </ScrollReveal>

              {/* Grid with items-stretch to force equal height */}
              <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 items-stretch">
                {skills.map((skill, i) => (
                    <ScrollReveal key={skill.category} delay={i * 80} className="h-full">
                      <div className="bento group relative flex h-full flex-col justify-between rounded-2xl p-6 sm:p-7 transition-all duration-300 hover:-translate-y-1 hover:border-[color:var(--line-strong)]">
                        <div>
                          <div className="mb-6 flex items-center justify-between">
                            <div
                                className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 transition-transform duration-300 group-hover:scale-110"
                                style={{
                                  background: `color-mix(in oklab, ${skill.accent} 10%, transparent)`,
                                  color: skill.accent,
                                }}
                            >
                              {skill.icon}
                            </div>

                            <span className="rounded-full border border-white/5 bg-white/[0.03] px-3 py-1 text-[10px] font-mono uppercase tracking-widest text-[color:var(--muted)]">
                {skill.items.length} Skills
              </span>
                          </div>

                          <h3 className="mb-4 text-lg font-bold text-white tracking-wide">
                            {skill.category}
                          </h3>

                          <div className="flex flex-wrap gap-2">
                            {skill.items.map((item) => (
                                <span
                                    key={item}
                                    className="inline-flex items-center gap-2 rounded-lg border border-white/5 bg-white/[0.03] px-3.5 py-1.5 text-xs font-medium text-gray-300 transition-all duration-300 hover:border-white/20 hover:bg-white/[0.08] hover:text-white"
                                >
                  <span
                      className="h-1.5 w-1.5 rounded-full"
                      style={{ backgroundColor: skill.accent }}
                  />
                                  {item}
                </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </ScrollReveal>
                ))}
              </div>
            </section>
  
            <div className="section-divider mx-auto max-w-7xl" />
  
            {/* ═══ FEATURED PROJECTS (BENTO SHOWCASE) ═══ */}
            <section id="work" className="relative mx-auto max-w-7xl px-5 py-24 sm:px-8 sm:py-32">
              <ScrollReveal>
                <div className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-white/10 pb-8">
                  <div>
                    <div className="flex items-center gap-2 font-mono text-xs text-[#D9A441] mb-3">
                      <span className="text-white/40">{"//"}</span>
                      <span className="uppercase tracking-[0.25em] font-semibold">Featured Work</span>
                    </div>
                    <h2 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white">
                      Selected <span className="text-[#D9A441] font-extrabold tracking-tight">Projects</span>
                    </h2>
                  </div>
                  <p className="max-w-md text-sm sm:text-base text-[color:var(--muted)] leading-relaxed">
                    A curated selection of full-stack applications and software architectures built with engineering rigor, high performance, and clean design.
                  </p>
                </div>
              </ScrollReveal>

              {/* Bento Grid */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                
                {/* ─── CARD 1: HERO FEATURED PROJECT (HealthCare+) ─── */}
                <ScrollReveal className="lg:col-span-12">
                  <div className="group relative rounded-3xl border border-white/10 bg-gradient-to-b from-white/[0.05] via-white/[0.02] to-transparent p-1 transition-all duration-500 hover:border-[#5a8fd4]/50 hover:shadow-[0_20px_70px_-15px_rgba(90,143,212,0.25)]">
                    <div className="relative rounded-[22px] bg-black/80 p-6 sm:p-10 backdrop-blur-2xl overflow-hidden">
                      {/* Ambient Glow */}
                      <div className="absolute -top-24 -right-24 h-96 w-96 rounded-full bg-[#5a8fd4]/15 blur-[120px] pointer-events-none group-hover:bg-[#5a8fd4]/25 transition-all duration-500" />
                      
                      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                        {/* Info Left */}
                        <div className="lg:col-span-5 space-y-6">
                          <div className="flex items-center gap-3">
                            <span className="font-mono text-xs font-bold text-[#5a8fd4] border border-[#5a8fd4]/30 bg-[#5a8fd4]/10 px-3 py-1 rounded-full">
                              01 • FEATURED
                            </span>
                            <span className="text-xs font-mono uppercase tracking-wider text-white/50">
                              Healthcare & Medical System
                            </span>
                          </div>

                          <div>
                            <h3 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight group-hover:text-[#5a8fd4] transition-colors duration-300">
                              HealthCare+
                            </h3>
                            <p className="text-sm font-mono text-[#D9A441] font-medium mt-1">
                              Medical Management Platform
                            </p>
                          </div>

                          <p className="text-sm sm:text-base text-gray-300 leading-relaxed font-normal">
                            Full-stack hospital management platform composed of a secure Spring Boot REST API and a modern React frontend. Features comprehensive patient records, doctor scheduling, responsive analytics dashboards, and containerized Docker deployment.
                          </p>

                          {/* Tech Pills */}
                          <div className="flex flex-wrap gap-2 pt-2">
                            {["Java 21", "Spring Boot", "React", "JWT Auth", "Hibernate", "MySQL", "Docker", "REST API"].map((tag) => (
                              <span
                                key={tag}
                                className="rounded-lg border border-white/10 bg-white/5 px-3 py-1 text-xs font-mono text-gray-300 transition-colors hover:border-[#5a8fd4]/40 hover:text-white"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>

                          {/* CTAs */}
                          <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-white/10">
                            <a
                              href="https://github.com/ENAA-School-Student/HealthCare-Syst-me-de-Gestion_M-dicale"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-4 py-2.5 text-xs font-mono font-semibold text-white transition-all duration-300 hover:border-[#5a8fd4] hover:bg-[#5a8fd4] hover:text-black hover:shadow-[0_0_20px_rgba(90,143,212,0.4)]"
                            >
                              <FaGithub size={15} />
                              <span>Backend Code</span>
                              <ArrowUpRight size={13} />
                            </a>
                            <a
                              href="https://github.com/Rida1019-taki/HealthCare-Frontend.git"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-4 py-2.5 text-xs font-mono font-semibold text-white transition-all duration-300 hover:border-[#5a8fd4] hover:bg-[#5a8fd4] hover:text-black hover:shadow-[0_0_20px_rgba(90,143,212,0.4)]"
                            >
                              <FaGithub size={15} />
                              <span>Frontend Code</span>
                              <ArrowUpRight size={13} />
                            </a>
                          </div>
                        </div>

                        {/* Visual Right */}
                        <div className="lg:col-span-7">
                          <div className="relative rounded-2xl border border-white/15 bg-neutral-950/80 p-2 sm:p-3 shadow-2xl transition-all duration-500 group-hover:border-[#5a8fd4]/40 group-hover:shadow-[0_25px_60px_rgba(0,0,0,0.95)]">
                            <div className="relative aspect-[16/10] overflow-hidden rounded-xl bg-neutral-900">
                              <Image
                                src="/healthcare.png"
                                alt="HealthCare+ Preview"
                                fill
                                sizes="(max-width: 1024px) 100vw, 700px"
                                className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                              />
                              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-40 transition-opacity duration-300 group-hover:opacity-10" />
                              
                              {/* Floating Badge on Image */}
                              <div className="absolute bottom-4 left-4 z-10 flex items-center gap-2 rounded-full border border-white/20 bg-black/70 px-3.5 py-1.5 backdrop-blur-md text-xs font-mono text-white">
                                <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                                <span>Hospital Management System</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </ScrollReveal>

                {/* ─── CARD 2: LogiTrack ─── */}
                <ScrollReveal delay={100} className="lg:col-span-6">
                  <div className="group relative h-full rounded-3xl border border-white/10 bg-gradient-to-b from-white/[0.05] via-white/[0.02] to-transparent p-1 transition-all duration-500 hover:border-[#e07040]/50 hover:shadow-[0_20px_70px_-15px_rgba(224,112,64,0.25)] flex flex-col">
                    <div className="relative h-full rounded-[22px] bg-black/80 p-6 sm:p-8 backdrop-blur-2xl flex flex-col justify-between overflow-hidden">
                      {/* Ambient Glow */}
                      <div className="absolute -top-20 -right-20 h-72 w-72 rounded-full bg-[#e07040]/15 blur-[100px] pointer-events-none group-hover:bg-[#e07040]/25 transition-all duration-500" />

                      <div className="space-y-6">
                        {/* Header */}
                        <div className="flex items-center justify-between">
                          <span className="font-mono text-xs font-bold text-[#e07040] border border-[#e07040]/30 bg-[#e07040]/10 px-3 py-1 rounded-full">
                            02 • LOGISTICS
                          </span>
                          <span className="text-xs font-mono uppercase tracking-wider text-white/50">
                            Supply Chain Platform
                          </span>
                        </div>

                        {/* Image Preview */}
                        <div className="relative rounded-2xl border border-white/15 bg-neutral-950/80 p-2 shadow-2xl transition-all duration-500 group-hover:border-[#e07040]/40">
                          <div className="relative aspect-[16/10] overflow-hidden rounded-xl bg-neutral-900">
                            <Image
                              src="/logitrack1.png"
                              alt="LogiTrack Preview"
                              fill
                              sizes="(max-width: 1024px) 100vw, 550px"
                              className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-40 transition-opacity duration-300 group-hover:opacity-10" />
                          </div>
                        </div>

                        {/* Text */}
                        <div>
                          <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight group-hover:text-[#e07040] transition-colors duration-300">
                            LogiTrack
                          </h3>
                          <p className="text-xs font-mono text-[#D9A441] font-medium mt-1">
                            Logistics & Supply Chain Management
                          </p>
                        </div>

                        <p className="text-sm text-gray-300 leading-relaxed font-normal">
                          Full-stack logistics management platform featuring multi-role access control (ADMIN, MANAGER, AGENT), real-time order tracking, server-side pagination, and a reactive Material UI interface.
                        </p>

                        {/* Tech Pills */}
                        <div className="flex flex-wrap gap-1.5 pt-1">
                          {["Spring Boot", "React", "Vite", "Material UI", "JWT", "MySQL", "Axios"].map((tag) => (
                            <span
                              key={tag}
                              className="rounded-lg border border-white/10 bg-white/5 px-2.5 py-1 text-xs font-mono text-gray-300 transition-colors hover:border-[#e07040]/40 hover:text-white"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* CTAs */}
                      <div className="flex flex-wrap items-center gap-3 pt-6 mt-6 border-t border-white/10">
                        <a
                          href="https://github.com/Rida1019-taki/LogiTrack"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-3.5 py-2 text-xs font-mono font-semibold text-white transition-all duration-300 hover:border-[#e07040] hover:bg-[#e07040] hover:text-black hover:shadow-[0_0_20px_rgba(224,112,64,0.4)]"
                        >
                          <FaGithub size={14} />
                          <span>Backend</span>
                          <ArrowUpRight size={12} />
                        </a>
                        <a
                          href="https://github.com/Rida1019-taki/LogiTrack_FrontEnd"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-3.5 py-2 text-xs font-mono font-semibold text-white transition-all duration-300 hover:border-[#e07040] hover:bg-[#e07040] hover:text-black hover:shadow-[0_0_20px_rgba(224,112,64,0.4)]"
                        >
                          <FaGithub size={14} />
                          <span>Frontend</span>
                          <ArrowUpRight size={12} />
                        </a>
                      </div>
                    </div>
                  </div>
                </ScrollReveal>

                {/* ─── CARD 3: FleetFlow ─── */}
                <ScrollReveal delay={200} className="lg:col-span-6">
                  <div className="group relative h-full rounded-3xl border border-white/10 bg-gradient-to-b from-white/[0.05] via-white/[0.02] to-transparent p-1 transition-all duration-500 hover:border-[#5ab88a]/50 hover:shadow-[0_20px_70px_-15px_rgba(90,184,138,0.25)] flex flex-col">
                    <div className="relative h-full rounded-[22px] bg-black/80 p-6 sm:p-8 backdrop-blur-2xl flex flex-col justify-between overflow-hidden">
                      {/* Ambient Glow */}
                      <div className="absolute -top-20 -right-20 h-72 w-72 rounded-full bg-[#5ab88a]/15 blur-[100px] pointer-events-none group-hover:bg-[#5ab88a]/25 transition-all duration-500" />

                      <div className="space-y-6">
                        {/* Header */}
                        <div className="flex items-center justify-between">
                          <span className="font-mono text-xs font-bold text-[#5ab88a] border border-[#5ab88a]/30 bg-[#5ab88a]/10 px-3 py-1 rounded-full">
                            03 • FLEET & DEVOPS
                          </span>
                          <span className="text-xs font-mono uppercase tracking-wider text-white/50">
                            Enterprise Logistics
                          </span>
                        </div>

                        {/* Image Preview */}
                        <div className="relative rounded-2xl border border-white/15 bg-neutral-950/80 p-2 shadow-2xl transition-all duration-500 group-hover:border-[#5ab88a]/40">
                          <div className="relative aspect-[16/10] overflow-hidden rounded-xl bg-neutral-900">
                            <Image
                              src="/fleetflow.png"
                              alt="FleetFlow Preview"
                              fill
                              sizes="(max-width: 1024px) 100vw, 550px"
                              className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-40 transition-opacity duration-300 group-hover:opacity-10" />
                          </div>
                        </div>

                        {/* Text */}
                        <div>
                          <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight group-hover:text-[#5ab88a] transition-colors duration-300">
                            FleetFlow
                          </h3>
                          <p className="text-xs font-mono text-[#D9A441] font-medium mt-1">
                            Fleet Management & CI/CD
                          </p>
                        </div>

                        <p className="text-sm text-gray-300 leading-relaxed font-normal">
                          Vehicle fleet and delivery orchestration system built with strict MapStruct DTO architecture, automated GitHub Actions CI/CD pipelines, and interactive Swagger/OpenAPI documentation.
                        </p>

                        {/* Tech Pills */}
                        <div className="flex flex-wrap gap-1.5 pt-1">
                          {["Spring Boot", "Docker", "GitHub Actions", "Swagger", "MapStruct", "MySQL", "JWT"].map((tag) => (
                            <span
                              key={tag}
                              className="rounded-lg border border-white/10 bg-white/5 px-2.5 py-1 text-xs font-mono text-gray-300 transition-colors hover:border-[#5ab88a]/40 hover:text-white"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* CTAs */}
                      <div className="flex flex-wrap items-center gap-3 pt-6 mt-6 border-t border-white/10">
                        <a
                          href="https://github.com/NihadHub/fleetFlow.git"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-4 py-2 text-xs font-mono font-semibold text-white transition-all duration-300 hover:border-[#5ab88a] hover:bg-[#5ab88a] hover:text-black hover:shadow-[0_0_20px_rgba(90,184,138,0.4)]"
                        >
                          <FaGithub size={14} />
                          <span>View Repository</span>
                          <ArrowUpRight size={12} />
                        </a>
                      </div>
                    </div>
                  </div>
                </ScrollReveal>

              </div>
            </section>
  
            <div className="section-divider mx-auto max-w-7xl" />

            {/* ═══ EXPERIENCE ═══ */}
            <section id="experience" className="relative mx-auto max-w-7xl px-5 py-24 sm:px-8 sm:py-32">
              <ScrollReveal>
                <div className="mb-16 space-y-4 text-center max-w-3xl mx-auto">
                  <span className="section-label inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-semibold text-[#D9A441] backdrop-blur-md">
                    <Briefcase size={14} /> Career & Professional Path
                  </span>
                  <h2 className="section-title text-3xl sm:text-5xl font-extrabold tracking-tight">
                    <span className="gradient-text">Work </span>
                    <span className="brand-gradient-text font-extrabold tracking-tight">Experience.</span>
                  </h2>
                  <p className="text-sm sm:text-base text-[color:var(--muted)] leading-relaxed">
                    Professional journey and engineering impact in modern full-stack web and software development.
                  </p>
                </div>
              </ScrollReveal>

              <div className="space-y-8 max-w-5xl mx-auto">
                {experiences.map((exp, i) => {
                  const isCurrent = exp.status === "current";
                  return (
                    <ScrollReveal key={exp.company} delay={i * 120}>
                      <div className="group relative rounded-3xl border border-white/10 bg-gradient-to-b from-white/[0.05] via-white/[0.02] to-transparent p-1 transition-all duration-500 hover:border-[#D9A441]/40 hover:shadow-[0_10px_40px_-15px_rgba(217,164,65,0.25)]">
                        {/* Glow effect on hover */}
                        <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-[#D9A441]/10 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100 pointer-events-none" />

                        <div className="relative rounded-[22px] bg-black/50 p-6 sm:p-10 backdrop-blur-xl">
                          {/* Header section with Company, Role, Service and Period */}
                          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-white/10 pb-6 mb-6">
                            <div className="flex items-start sm:items-center gap-4">
                              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-[#D9A441]/30 bg-[#D9A441]/10 text-[#D9A441] transition-transform duration-300 group-hover:scale-105 shadow-[0_0_20px_rgba(217,164,65,0.2)]">
                                <Briefcase size={26} />
                              </div>
                              <div>
                                <div className="flex flex-wrap items-center gap-2 mb-1.5">
                                  <h3 className="text-2xl sm:text-3xl font-bold text-white group-hover:text-[#D9A441] transition-colors">
                                    {exp.company}
                                  </h3>
                                  <span className="inline-flex items-center gap-1 rounded-full border border-white/10 bg-white/5 px-2.5 py-0.5 text-[10px] font-mono text-gray-300">
                                    <MapPin size={10} className="text-[#D9A441]" />
                                    {exp.location}
                                  </span>
                                </div>
                                <div className="flex flex-wrap items-center gap-2 text-xs sm:text-sm font-mono">
                                  <span className="text-[#D9A441] font-bold tracking-wide">
                                    Role: {exp.role}
                                  </span>
                                  <span className="text-gray-500 hidden sm:inline">•</span>
                                  <span className="text-gray-300 font-medium">
                                    Department: {exp.service}
                                  </span>
                                </div>
                              </div>
                            </div>

                            <div className="flex items-center gap-2 self-start md:self-auto">
                              {isCurrent && (
                                <span className="inline-flex items-center gap-1.5 rounded-full border border-[color:var(--accent-emerald)]/30 bg-[color:var(--accent-emerald)]/10 px-3 py-1 text-[11px] font-mono font-medium text-[color:var(--accent-emerald)]">
                                  <span className="h-1.5 w-1.5 rounded-full bg-[color:var(--accent-emerald)] animate-pulse" />
                                  Current
                                </span>
                              )}
                              <span className="rounded-xl border border-white/10 bg-white/5 px-3.5 py-1 text-xs font-mono text-gray-300">
                                {exp.period}
                              </span>
                            </div>
                          </div>

                          {/* Description */}
                          <p className="text-sm sm:text-base text-gray-300 leading-relaxed mb-6">
                            {exp.description}
                          </p>

                          {/* Key Responsibilities */}
                          <div className="mb-6 space-y-2.5">
                            <h4 className="text-xs font-mono uppercase tracking-wider text-white/60">
                              {"// Core Responsibilities & Impact"}
                            </h4>
                            <div className="grid gap-2.5 sm:grid-cols-2">
                              {exp.responsibilities.map((resp, idx) => (
                                <div
                                  key={idx}
                                  className="flex items-start gap-2.5 text-xs sm:text-sm text-gray-300 bg-white/[0.02] border border-white/5 rounded-xl p-3"
                                >
                                  <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-[#D9A441]" />
                                  <span>{resp}</span>
                                </div>
                              ))}
                            </div>
                          </div>

                          {/* Tech stack tags */}
                          <div className="border-t border-white/10 pt-4 flex flex-wrap items-center gap-2">
                            <span className="text-xs font-mono text-white/40 mr-1">Technologies :</span>
                            {exp.technologies.map((tech) => (
                              <span
                                key={tech}
                                className="inline-flex items-center rounded-lg border border-white/10 bg-white/5 px-3 py-1 text-xs font-mono text-gray-300 transition-colors hover:border-[#D9A441]/40 hover:text-white"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </ScrollReveal>
                  );
                })}
              </div>
            </section>

            <div className="section-divider mx-auto max-w-7xl" />
  
              {/* ═══ EDUCATION ═══ */}
              <section id="education" className="relative mx-auto max-w-7xl px-5 py-24 sm:px-8 sm:py-32">
                  <ScrollReveal>
                      <div className="mb-16 space-y-4 text-center max-w-3xl mx-auto">
        <span className="section-label inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-semibold text-[#D9A441] backdrop-blur-md">
          <GraduationCap size={14} /> Education & Credentials
        </span>
                          <h2 className="section-title text-3xl sm:text-5xl font-extrabold tracking-tight">
                              <span className="gradient-text">Academic </span>
                              <span className="brand-gradient-text font-extrabold tracking-tight">Background.</span>
                          </h2>
                          <p className="text-sm sm:text-base text-[color:var(--muted)] leading-relaxed">
                              Solid engineering foundations combined with specialized modern software development.
                          </p>
                      </div>
                  </ScrollReveal>
  
                  <div className="grid gap-8 md:grid-cols-2">
                      {education.map((edu, i) => {
                          const isCurrent = edu.status === "current";
                          return (
                              <ScrollReveal key={edu.institution} delay={i * 120}>
                                  <div className="group relative h-full rounded-3xl border border-white/10 bg-gradient-to-b from-white/[0.05] to-transparent p-1 transition-all duration-500 hover:border-[#D9A441]/40 hover:shadow-[0_10px_40px_-15px_rgba(217,164,65,0.2)]">
  
                                      {/* Glow effect on hover */}
                                      <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-[#D9A441]/10 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
  
                                      <div className="relative flex h-full flex-col justify-between rounded-[22px] bg-black/40 p-8 backdrop-blur-xl">
  
                                          {/* Header */}
                                          <div>
                                              <div className="flex items-center justify-between mb-6">
                                                  <div className="flex items-center gap-3">
                                                      <div
                                                          className={`flex h-12 w-12 items-center justify-center rounded-2xl border ${
                                                              isCurrent
                                                                  ? "border-[color:var(--accent-emerald)]/30 bg-[color:var(--accent-emerald)]/10 text-[color:var(--accent-emerald)]"
                                                                  : "border-[#D9A441]/30 bg-[#D9A441]/10 text-[#D9A441]"
                                                          }`}
                                                      >
                                                          {isCurrent ? <BookOpen size={22} /> : <GraduationCap size={22} />}
                                                      </div>
                                                      <div>
                        <span className="text-xs font-mono uppercase tracking-widest text-white/50 block">
                          Degree Program
                        </span>
                                                          <span className="text-xs font-mono font-semibold text-[#D9A441]">
                          {edu.period}
                        </span>
                                                      </div>
                                                  </div>
  
                                                  {isCurrent && (
                                                      <span className="inline-flex items-center gap-1.5 rounded-full border border-[color:var(--accent-emerald)]/30 bg-[color:var(--accent-emerald)]/10 px-3 py-1 text-[10px] font-mono font-medium text-[color:var(--accent-emerald)]">
                        <span className="h-1.5 w-1.5 rounded-full bg-[color:var(--accent-emerald)] animate-pulse" />
                        Active
                      </span>
                                                  )}
                                              </div>
  
                                              <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-[#D9A441] transition-colors duration-300">
                                                  {edu.degree}
                                              </h3>
                                          </div>
  
                                          {/* Footer */}
                                          <div className="mt-8 border-t border-white/10 pt-4 flex items-center justify-between">
                                              <p className="text-sm font-medium text-gray-300">
                                                  {edu.institution}
                                              </p>
  
                                              <div className="h-8 w-8 rounded-full border border-white/10 flex items-center justify-center text-white/40 group-hover:border-[#D9A441] group-hover:text-[#D9A441] transition-all duration-300">
                                                  <Award size={16} />
                                              </div>
                                          </div>
  
                                      </div>
                                  </div>
                              </ScrollReveal>
                          );
                      })}
                  </div>
              </section>
  
            <div className="section-divider mx-auto max-w-7xl" />
  
              {/* ═══ CERTIFICATIONS ═══ */}
              <section className="relative mx-auto max-w-7xl px-5 py-24 sm:px-8 sm:py-32">
                  <ScrollReveal>
                      <div className="mb-16 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
                          <div className="space-y-4 max-w-2xl">
          <span className="section-label inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-semibold text-[#D9A441] backdrop-blur-md">
            <Award size={14} /> Verified Credentials
          </span>
                              <h2 className="section-title text-3xl sm:text-5xl font-extrabold tracking-tight">
                                  <span className="gradient-text">Professional </span>
                                  <br />
                                  <span className="brand-gradient-text font-extrabold tracking-tight">Certifications.</span>
                              </h2>
                          </div>
                          <p className="max-w-md text-sm sm:text-base text-[color:var(--muted)] leading-relaxed">
                              Industry-recognized Cisco certifications validating networking, security, and foundational programming skills.
                          </p>
                      </div>
                  </ScrollReveal>
  
                  <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                      {documents.map((doc, i) => {
                          const Icon = doc.icon;
  
                          return (
                              <ScrollReveal key={doc.file} delay={i * 100}>
                                  <div className="group relative h-full rounded-3xl border border-white/10 bg-white/[0.02] p-6 sm:p-8 backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:border-[#D9A441]/50 hover:bg-white/[0.04] hover:shadow-[0_20px_40px_-15px_rgba(217,164,65,0.15)] flex flex-col justify-between">
  
                                      {/* Top Accent Light */}
                                      <div className="absolute top-0 right-10 h-[1px] w-20 bg-gradient-to-r from-transparent via-[#D9A441]/40 to-transparent transition-all duration-500 group-hover:w-32 group-hover:via-[#D9A441]" />
  
                                      <div>
                                          {/* Header Icon & Badge */}
                                          <div className="flex items-center justify-between mb-6">
                                              <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-[#D9A441] transition-transform duration-500 group-hover:scale-110 group-hover:border-[#D9A441]/40 group-hover:bg-[#D9A441]/10">
                                                  <Icon size={26} />
                                              </div>
                                              <span className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[10px] font-mono uppercase tracking-wider text-white/60">
                    <Award size={10} className="text-[#D9A441]" /> Verified
                  </span>
                                          </div>
  
                                          {/* Title & Issuer */}
                                          <h3 className="text-xl font-bold text-white mb-2 group-hover:text-[#D9A441] transition-colors duration-300 leading-snug">
                                              {doc.title}
                                          </h3>
                                          <p className="text-sm text-[color:var(--muted)] mb-8 font-medium">
                                              {doc.issuer}
                                          </p>
                                      </div>
  
                                      {/* Bottom Action Button */}
                                      <div className="pt-4 border-t border-white/5">
                                          <a
                                              href={doc.file}
                                              target="_blank"
                                              rel="noopener noreferrer"
                                              className="group/btn inline-flex w-full items-center justify-between rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-xs font-semibold text-white transition-all duration-300 hover:border-[#D9A441] hover:bg-[#D9A441] hover:text-black"
                                          >
                  <span className="flex items-center gap-2">
                    <FileText size={15} /> View PDF Certificate
                  </span>
                                              <ExternalLink size={14} className="transition-transform duration-300 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                                          </a>
                                      </div>
  
                                  </div>
                              </ScrollReveal>
                          );
                      })}
                  </div>
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
                    <Rocket size={14} /> Competitive Coding
                </span>
                    <h2 className="section-title text-3xl sm:text-5xl font-extrabold tracking-tight">
                      <span className="gradient-text">Innovation & </span>
                      <br />
                      <span className="brand-gradient-text font-extrabold tracking-tight">Hackathons.</span>
                    </h2>
                  </div>
                  <p className="max-w-md text-sm sm:text-base text-[color:var(--muted)] leading-relaxed">
                    Fast-paced challenges that sharpen my problem-solving skills, rapid prototyping, and collaborative engineering under high pressure.
                  </p>
                </div>
              </ScrollReveal>

              {/* items-stretch لتوحيد الارتفاع بين العامودين */}
              <div className="grid gap-8 md:grid-cols-2 items-stretch">
                {hackathons.map((hackathon, index) => (
                    <ScrollReveal key={index} delay={index * 120} className="h-full">
                      <article className="group relative flex h-full flex-col justify-between overflow-hidden rounded-3xl border border-white/10 bg-white/[0.02] backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:border-[#D9A441]/50 hover:shadow-[0_20px_50px_-15px_rgba(217,164,65,0.2)]">

                        {/* Top Container: Image + Header */}
                        <div className="w-full">
                          {/* Image Container with Fixed Aspect Ratio */}
                          <div className="relative h-64 w-full overflow-hidden">
                            <Image
                                src={hackathon.image}
                                alt={hackathon.title}
                                fill
                                className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-110"
                            />
                            {/* Gradient Mask for Smooth Blending */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />

                            {/* Top Badge */}
                            <div className="absolute top-4 left-4 z-10">
                                <span className="inline-flex items-center gap-1.5 rounded-full border border-white/20 bg-black/60 px-3 py-1 text-[10px] font-mono font-medium text-white backdrop-blur-md">
                                    <Zap size={12} className="text-[#D9A441]" /> Hackathon Project
                                </span>
                            </div>
                          </div>

                          {/* Content Details */}
                          <div className="p-6 sm:p-8 space-y-4">
                            <h3 className="text-2xl font-bold text-white transition-colors duration-300 group-hover:text-[#D9A441]">
                              {hackathon.title}
                            </h3>

                            <p className="text-sm text-[color:var(--muted)] leading-relaxed font-medium">
                              {hackathon.description}
                            </p>
                          </div>
                        </div>

                        {/* Bottom Container: Tags (تكون ديما محذية للأسفل) */}
                        <div className="px-6 pb-6 sm:px-8 sm:pb-8 pt-0">
                          <div className="flex flex-wrap gap-2 border-t border-white/5 pt-4">
                            {hackathon.tags.map((tag) => (
                                <span
                                    key={tag}
                                    className="inline-flex items-center gap-1 rounded-lg border border-white/10 bg-white/5 px-3 py-1 text-xs font-mono text-gray-300 transition-colors group-hover:border-[#D9A441]/30"
                                >
                                    <span className="text-[#D9A441]">#</span>
                                  {tag}
                                </span>
                            ))}
                          </div>
                        </div>

                      </article>
                    </ScrollReveal>
                ))}
              </div>
            </section>
  
              {/* ═══ RESUME ═══ */}
              <section id="resume" className="relative mx-auto max-w-7xl px-5 py-24 sm:px-8">
                  <ScrollReveal>
                      <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-b from-white/[0.05] via-white/[0.02] to-transparent p-8 sm:p-14 text-center backdrop-blur-2xl shadow-2xl">
  
                          {/* Background Radial Glow */}
                          <div className="absolute -top-24 left-1/2 -translate-x-1/2 h-64 w-64 rounded-full bg-[#D9A441]/10 blur-3xl pointer-events-none" />
  
                          {/* Top Badge */}
                          <div className="relative z-10 mx-auto mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-semibold text-[#D9A441]">
                              <FileText size={14} /> Official Curriculum Vitae
                          </div>
  
                          {/* Title & Description */}
                          <div className="relative z-10 max-w-2xl mx-auto space-y-4">
                              <h2 className="section-title text-3xl sm:text-5xl font-extrabold tracking-tight">
                                  <span className="gradient-text">Ready to work </span>
                                  <br />
                                  <span className="brand-gradient-text font-extrabold tracking-tight">together?</span>
                              </h2>
  
                              <p className="text-sm sm:text-base leading-relaxed text-[color:var(--muted)]">
                                  Download my latest CV to explore my technical skills, academic background, and full project history in detail.
                              </p>
                          </div>
  
                          {/* Download Button */}
                          <div className="relative z-10 mt-10 flex justify-center">
                              <a
                                  href="/docs/Rida_Taki_CV.pdf"
                                  download
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="group relative inline-flex items-center gap-3 overflow-hidden rounded-2xl bg-gradient-to-r from-[#C9A063] to-[#B8860B] px-8 py-4 text-sm font-bold text-black transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(217,164,65,0.4)]"
                              >
                                  <Download size={18} className="transition-transform duration-300 group-hover:-translate-y-0.5" />
                                  <span>Download Resume (PDF)</span>
                              </a>
                          </div>
  
                          {/* Subtle Bottom Accent Line */}
                          <div className="absolute bottom-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-[#D9A441]/30 to-transparent" />
                      </div>
                  </ScrollReveal>
              </section>
  
            <div className="section-divider mx-auto max-w-7xl" />
  
  
              {/* ═══ CONTACT ═══ */}
              <section
                  id="contact"
                  className="relative mx-auto max-w-7xl px-5 py-24 sm:px-8 sm:py-32"
              >
                  <ScrollReveal>
                      <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.02] p-8 sm:p-12 lg:p-16 backdrop-blur-2xl shadow-2xl">
                          {/* Dynamic Ambient Orbs */}
                          <div className="absolute -top-24 -right-24 h-96 w-96 rounded-full bg-[#D9A441]/10 blur-[120px] pointer-events-none" />
                          <div className="absolute -bottom-24 -left-24 h-96 w-96 rounded-full bg-[color:var(--brand)]/10 blur-[120px] pointer-events-none" />
  
                          <div className="relative z-10 grid gap-12 lg:grid-cols-12 items-start">
                              {/* Left Column - Contact Info & Socials */}
                              <div className="space-y-8 lg:col-span-6">
                                  <div className="space-y-4">
              <span className="section-label inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-semibold text-[#D9A441] backdrop-blur-md">
                <Mail size={14} /> Get In Touch
              </span>
  
                                      <h2 className="section-title text-3xl sm:text-5xl font-extrabold tracking-tight leading-[1.1]">
                                          <span className="gradient-text">Let&apos;s build something </span>
                                          <br />
                                          <span className="brand-gradient-text font-extrabold tracking-tight">remarkable together.</span>
                                      </h2>
  
                                      <p className="max-w-xl text-base leading-relaxed text-[color:var(--muted)] sm:text-lg font-medium">
                                          I&apos;m open to internships, freelance missions, and collaborative product work. If you need a developer who cares about both solid architecture and intuitive user experience — let&apos;s talk.
                                      </p>
                                  </div>
  
                                  {/* Social Links Grid */}
                                  <div className="space-y-3">
              <span className="text-xs font-mono uppercase tracking-widest text-white/50 block">
                Connect via Socials
              </span>
                                      <div className="flex flex-wrap gap-3">
                                          {[
                                              { icon: <FaGithub size={18} />, href: "https://github.com/Rida1019-taki", label: "GitHub", hoverBg: "hover:bg-white/20 hover:text-white" },
                                              { icon: <FaLinkedin size={18} />, href: "https://www.linkedin.com/in/rida-taki-bb44a8350", label: "LinkedIn", hoverBg: "hover:bg-[#0A66C2] hover:text-white hover:border-[#0A66C2]" },
                                              { icon: <FaWhatsapp size={18} />, href: "https://wa.me/212649487957", label: "WhatsApp", hoverBg: "hover:bg-[#25D366] hover:text-white hover:border-[#25D366]" },
                                              { icon: <FaDiscord size={18} />, href: "https://discord.com/users/rida_taki", label: "Discord", hoverBg: "hover:bg-[#5865F2] hover:text-white hover:border-[#5865F2]" },
                                              { icon: <FaInstagram size={18} />, href: "https://www.instagram.com/rida_taki_10?igsh=OW5pZnI2Mjh2ejBv", label: "Instagram", hoverBg: "hover:bg-[#E4405F] hover:text-white hover:border-[#E4405F]" },
                                          ].map((s) => (
                                              <a
                                                  key={s.label}
                                                  href={s.href}
                                                  target="_blank"
                                                  rel="noopener noreferrer"
                                                  aria-label={s.label}
                                                  className={`flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-gray-300 backdrop-blur-md transition-all duration-300 hover:scale-110 hover:shadow-lg ${s.hoverBg}`}
                                              >
                                                  {s.icon}
                                              </a>
                                          ))}
                                      </div>
                                  </div>
                              </div>
  
                              {/* Right Column - Contact Form */}
                              <div className="lg:col-span-6">
                                  <form
                                      onSubmit={sendEmail}
                                      className="space-y-5 rounded-3xl border border-white/10 bg-white/[0.03] p-6 sm:p-8 backdrop-blur-xl shadow-xl"
                                  >
                                      <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-2">
                                          <h3 className="text-xl font-bold text-white">Send Message</h3>
                                          <span className="text-xs font-mono text-[#D9A441]">{"//"} Direct Mail</span>
                                      </div>
  
                                      <div className="space-y-4">
                                          <div>
                                              <label className="mb-2 block text-xs font-mono uppercase tracking-wider text-gray-400">
                                                  Full Name
                                              </label>
                                              <input
                                                  name="from_name"
                                                  type="text"
                                                  placeholder="John Doe"
                                                  className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder-gray-500 outline-none transition-all duration-300 focus:border-[#D9A441] focus:bg-white/10 focus:shadow-[0_0_15px_rgba(217,164,65,0.2)]"
                                                  required
                                              />
                                          </div>
  
                                          <div>
                                              <label className="mb-2 block text-xs font-mono uppercase tracking-wider text-gray-400">
                                                  Email Address
                                              </label>
                                              <input
                                                  name="from_email"
                                                  type="email"
                                                  placeholder="john@example.com"
                                                  className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder-gray-500 outline-none transition-all duration-300 focus:border-[#D9A441] focus:bg-white/10 focus:shadow-[0_0_15px_rgba(217,164,65,0.2)]"
                                                  required
                                              />
                                          </div>
  
                                          <div>
                                              <label className="mb-2 block text-xs font-mono uppercase tracking-wider text-gray-400">
                                                  Subject
                                              </label>
                                              <input
                                                  name="subject"
                                                  type="text"
                                                  placeholder="Project Inquiry / Opportunity"
                                                  className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder-gray-500 outline-none transition-all duration-300 focus:border-[#D9A441] focus:bg-white/10 focus:shadow-[0_0_15px_rgba(217,164,65,0.2)]"
                                                  required
                                              />
                                          </div>
  
                                          <div>
                                              <label className="mb-2 block text-xs font-mono uppercase tracking-wider text-gray-400">
                                                  Your Message
                                              </label>
                                              <textarea
                                                  name="message"
                                                  rows={4}
                                                  placeholder="Tell me about your project or offer..."
                                                  className="w-full resize-none rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder-gray-500 outline-none transition-all duration-300 focus:border-[#D9A441] focus:bg-white/10 focus:shadow-[0_0_15px_rgba(217,164,65,0.2)]"
                                                  required
                                              />
                                          </div>
                                      </div>
  
                                      <button
                                          type="submit"
                                          disabled={loading}
                                          className="group relative inline-flex w-full items-center justify-center gap-2 overflow-hidden rounded-xl bg-gradient-to-r from-[#C9A063] to-[#B8860B] py-3.5 text-xs font-bold uppercase tracking-widest text-black transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_25px_rgba(217,164,65,0.4)] disabled:opacity-50"
                                      >
                                          <span>{loading ? "Sending..." : "Send Message"}</span>
                                          <Rocket size={14} className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                                      </button>
                                  </form>
                              </div>
                          </div>
                      </div>
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
            © {new Date().getFullYear()} All rights reserved.
          </span>
                        </div>
                    </div>
  
                    {/* Center Text / Status */}
                    <div className="flex items-center gap-2 text-xs font-mono text-[color:var(--muted)]">
                        <span className="text-[#D9A441]">{"//"}</span>
                        <span>Architected with precision &amp; passion</span>
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
