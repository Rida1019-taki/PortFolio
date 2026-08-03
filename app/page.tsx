"use client";
import { toast } from "sonner";
import {
  ArrowRight,
  ArrowUpRight,
  Award,
  BookOpen,
  Briefcase,
  Code2, CodeXml,
  Database,
  Download,
  ExternalLink, FileCode2,
  FileText,
  GraduationCap, Laptop, Laptop2,
  Layers,
  Mail,
  MapPin, Monitor,
  Phone,
  Rocket,
  Server, Shield, ShieldCheck,
  Smartphone,
  Terminal,
  Wrench,
  Zap,
} from "lucide-react";
import Image from "next/image";
import {
  FaDiscord,
  FaDocker,
  FaGithub, FaInstagram,
  FaJava,
  FaLinkedin,
  FaPython,
  FaReact, FaWhatsapp,
} from "react-icons/fa";
import {
  SiKotlin,
  SiSpringboot,
  SiFlutter,
  SiMysql,
  SiPostman,
  SiFigma, SiDart,
} from "react-icons/si";
import ScrollReveal from "@/components/ScrollReveal";
import ParticleField from "@/components/ParticleField";
import MouseGlow from "@/components/MouseGlow";
import MobileMenu from "@/components/MobileMenu";
import AnimatedNumber from "@/components/AnimatedNumber";
import TypewriterText from "@/components/TypewriterText";
import emailjs from "@emailjs/browser";
import {useEffect, useState} from "react";

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
      subtitle: "Medical Management Platform",
      description:
          "Complete healthcare management platform composed of a secure Spring Boot REST API and a modern React frontend. The application includes JWT authentication, role-based authorization, patient and doctor management, appointments, medical records, responsive dashboards, Docker deployment, and RESTful APIs.",
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
          "https://github.com/Rida1019-taki/HealthCare_FrontEnd",
      accent: "#5a8fd4",
      number: "01",
    },
    {
      name: "LogiTrack",
      subtitle: "Logistics Management Platform",
      description:
          "Complete full-stack logistics management platform composed of a secure Spring Boot REST API and a modern React frontend. The application includes JWT authentication, role-based access control (ADMIN, MANAGER, AGENT), client, product and order management, dashboard statistics, pagination, filtering, Axios interceptors, Protected Routes, Role Guards, and a responsive Material UI interface.",
      tags: [
        "Java",
        "Spring Boot",
        "React",
        "Vite",
        "Spring Security",
        "JWT",
        "MySQL",
        "Axios",
        "React Router",
        "React Hook Form",
        "Yup",
        "MUI",
      ],
      image: "/logitrack.png",
      githubBackend: "https://github.com/Rida1019-taki/LogiTrack",
      githubFrontend: "https://github.com/Rida1019-taki/LogiTrack_FrontEnd",
      accent: "#e07040",
      number: "02",
    },
    {
      name: "FleetFlow",
      subtitle: "Logistics & Fleet Management",
      description:
          "Enterprise logistics management platform for handling clients, vehicles, deliveries, and fleet operations. Includes REST APIs, Dockerized deployment, CI/CD pipeline, Swagger documentation, and secure JWT authentication.",
      tags: [
        "Java",
        "Spring Boot",
        "Docker",
        "MapStruct",
        "MySQL",
        "Swagger",
        "JWT",
        "GitHub Actions",
      ],
      image: "/fleetflow.png",
      github: "https://github.com/NihadHub/fleetFlow.git",
      accent: "#5ab88a",
      number: "03",
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
      image: "/hackathons/rally-ai.jpg",
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

  // 1. زيد هاد State و useEffect فـ بداية Home()
  const [isPastAbout, setIsPastAbout] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const aboutSection = document.getElementById("about");
      if (aboutSection) {
        const rect = aboutSection.getBoundingClientRect();
        // غير يفوت الأسفل ديال About منتصف الشاشة كتغير الشفافية
        setIsPastAbout(rect.bottom < window.innerHeight / 2);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
      <div className="min-h-screen text-[var(--foreground)] relative">

        {/* Background Video */}
        <div className="fixed inset-0 -z-20 overflow-hidden">
          <video
              className="video-bg"
              autoPlay
              muted
              loop
              playsInline
              preload="auto"
          >
            <source src="/video/portfolio.mp4" type="video/mp4" />
          </video>

          {/* Overlay: فـ Hero خفيف، ومن بعد كيتزاد التظليل والـ Blur باش المحتوى يبان قاطح */}
          <div
              className={`absolute inset-0 transition-all duration-700 ease-in-out ${
                  isPastAbout
                      ? "bg-black/80 backdrop-blur-md"   /* 👈 تغماق 80% + Blur خفيف باش الفيديو ما يشتتش العين */
                      : "bg-black/50 backdrop-blur-none"  /* 👈 فـ Hero كيبان الفيديو واضح سينمائي */
              }`}
          />
        </div>

        <ParticleField />
        <MouseGlow />

        {/* ═══ NAVBAR ═══ */}
        <header className="fixed top-5 inset-x-0 z-50 flex justify-center">
          <nav
              className="w-fit"
          >
            <div
                className="relative overflow-hidden rounded-full"
                style={{
                  background:
                      "linear-gradient(135deg,rgba(255,255,255,.08),rgba(201,160,99,.16),rgba(139,94,52,.18))",
                  backdropFilter: "blur(30px)",
                  WebkitBackdropFilter: "blur(30px)",
                  border: "1px solid rgba(255,255,255,.12)",
                  boxShadow:
                      "0 20px 60px rgba(0,0,0,.35), inset 0 1px 0 rgba(255,255,255,.15)",
                }}
            >
              <div className="glass-shine" />

              <div className="flex h-[74px] items-center gap-10 px-8">
                {/* Logo */}
                <a href="#" className="flex items-center gap-3">
                  <div
                      className="flex h-10 w-10 items-center justify-center rounded-xl font-bold text-white"
                      style={{
                        background:
                            "linear-gradient(135deg,#C9A063,#8B5E34,#B8860B)",
                      }}
                  >
                    RT
                  </div>

                  <span className="hidden md:block font-semibold text-white">
            Rida Taki
          </span>
                </a>

                {/* Links */}
                <ul className="hidden md:flex items-center gap-2">
                  {[
                    "About",
                    "Skills",
                    "Work",
                    "Education",
                    "Hackathons",
                    "Resume",
                    "Contact",
                  ].map((item) => (
                      <li key={item}>
                        <a
                            key={item}
                            href={`#${item.toLowerCase()}`}
                            className="
                                  relative
                                  overflow-hidden
                                  rounded-full
                                  px-5
                                  py-2.5
                                  text-sm
                                  font-medium
                                  text-white/80
                                  transition-all
                                  duration-300
                                  hover:text-white
                                  hover:bg-white/10
                                  hover:shadow-[0_0_25px_rgba(212,168,83,0.35)]
                                "
                        >
                                <span
                                    className="
                                    absolute
                                    inset-0
                                    rounded-full
                                    bg-gradient-to-r
                                    from-[#C9A063]
                                    via-[#D9A441]
                                    to-[#B8860B]
                                    opacity-0
                                    transition-opacity
                                    duration-300
                                    group-hover:opacity-20
                                  "
                                />

                          <span className="relative z-10">
                                  {item}
                                </span>
                        </a>
                      </li>
                  ))}
                </ul>

                {/* Right */}
                <div className="flex items-center gap-3">
                  <a
                      href="#contact"
                      className="hidden sm:flex items-center rounded-full px-5 py-2 text-sm font-semibold text-white"
                      style={{
                        background:
                            "linear-gradient(135deg,#C9A063,#B8860B)",
                      }}
                  >
                    Hire Me
                  </a>

                  <MobileMenu />
                </div>
              </div>
            </div>
          </nav>
        </header>

        <main className="relative z-10">
          {/* ═══ HERO ═══ */}
          <section
              id="about"
              className="relative min-h-screen flex items-center overflow-hidden z-10"
          >
            <div className="hero-effects">
              <div className="floating-grid" />
              <div className="light-orb orb-orange" />
              <div className="light-orb orb-gold" />
              <div className="light-orb orb-blue" />
              <div className="noise-layer" />
            </div>

            <div className="relative z-10 mx-auto max-w-6xl px-5 py-28 sm:px-8">
              <div className="space-y-12">

                {/* Header Tags */}
                <div className="reveal flex flex-wrap items-center justify-between gap-4 border-b border-white/10 pb-6">
                  <div className="flex items-center gap-3">
                    <div className="status-dot" />
                    <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[color:var(--accent-emerald)]">
            Available for projects
          </span>
                  </div>

                  <div className="flex items-center gap-2 text-xs font-mono text-gray-400">
                    <span className="text-[#D9A441]">//</span>
                    <span>Clean Code Advocate</span>
                  </div>
                </div>

                {/* Main Massive Title */}
                <div className="reveal reveal-d1 space-y-4">
                  <h1 className="display text-[clamp(3rem,8vw,6.5rem)] font-extrabold leading-[0.9] tracking-tighter">
                    <span className="gradient-text">Crafting digital </span>
                    <br />
                    <span className="gradient-text">experiences that </span>
                    <br />
                    <span className="brand-gradient-text italic font-serif">truly matter.</span>
                  </h1>
                </div>

                {/* Subtitle / Typewriter */}
                <div className="reveal reveal-d2 text-xl sm:text-2xl font-light text-gray-300">
                  <TypewriterText />
                </div>

                {/* Grid: Bio + Stats & CTAs */}
                <div className="reveal reveal-d3 grid grid-cols-1 lg:grid-cols-12 gap-8 items-end pt-6 border-t border-white/10">

                  {/* Paragraph Description */}
                  <div className="lg:col-span-6 space-y-4">
                    <p className="text-base sm:text-lg leading-relaxed text-[color:var(--muted)]">
                      Full stack &amp; mobile developer from Morocco. I architect robust backends,
                      build native apps, and craft interfaces people genuinely enjoy using.
                    </p>

                    <div className="flex items-center gap-2 text-xs font-medium text-[#D9A441]">
                      <MapPin size={14} />
                      <span>Beni Mellal, Morocco</span>
                    </div>
                  </div>

                  {/* Stats & Actions Side-by-Side */}
                  <div className="lg:col-span-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 bg-white/[0.02] p-6 rounded-3xl border border-white/5 backdrop-blur-md">

                    {/* Quick Stats */}
                    <div className="flex items-center gap-6">
                      <div>
                        <div className="display text-2xl font-bold sm:text-3xl text-white">
                          <AnimatedNumber value={3} suffix="+" />
                        </div>
                        <div className="text-[9px] uppercase tracking-widest text-[color:var(--muted)]">Projects</div>
                      </div>
                      <div className="h-8 w-[1px] bg-white/10" />
                      <div>
                        <div className="display text-2xl font-bold sm:text-3xl text-white">
                          <AnimatedNumber value={10} suffix="+" />
                        </div>
                        <div className="text-[9px] uppercase tracking-widest text-[color:var(--muted)]">Techs</div>
                      </div>
                      <div className="h-8 w-[1px] bg-white/10" />
                      <div>
                        <div className="display text-2xl font-bold sm:text-3xl text-white">
                          <AnimatedNumber value={3} />
                        </div>
                        <div className="text-[9px] uppercase tracking-widest text-[color:var(--muted)]">Certs</div>
                      </div>
                    </div>

                    {/* CTAs */}
                    <div className="flex items-center gap-3 w-full sm:w-auto">
                      <a
                          href="#work"
                          className="btn-primary flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 rounded-xl px-5 py-3 text-xs font-semibold text-white shadow-lg"
                      >
                        Work <ArrowRight size={14} />
                      </a>
                      <a
                          href="#contact"
                          className="btn-secondary flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 rounded-xl px-5 py-3 text-xs font-semibold border border-white/10"
                      >
                        <Mail size={14} /> Contact
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

          {/* ═══ SKILLS ═══ */}
          <section
              id="skills"
              className="mx-auto max-w-7xl px-5 py-24 sm:px-8 sm:py-32 relative overflow-hidden"
          >
            <ScrollReveal>
              <div className="mb-14 max-w-2xl space-y-4">
              <span className="section-label flex items-center gap-2">
                <Code2 size={14} /> Technical Expertise
              </span>
                <h2 className="section-title gradient-text">
                  The tools I use to build
                </h2>
                <p className="text-base leading-relaxed text-[color:var(--muted)] sm:text-lg">
                  From backend systems to mobile apps — here&apos;s the technology stack
                  I work with daily to deliver production-ready solutions.
                </p>
              </div>
            </ScrollReveal>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {skills.map((skill, i) => (
                  <ScrollReveal key={skill.category} delay={i * 80}>
                    <div className="bento h-full rounded-2xl p-6 sm:p-7">
                      <div className="mb-5 flex items-center gap-3">
                        <div
                            className="flex h-11 w-11 items-center justify-center rounded-xl"
                            style={{
                              background: `color-mix(in oklab, ${skill.accent} 12%, transparent)`,
                              color: skill.accent,
                            }}
                        >
                          {skill.icon}
                        </div>
                        <h3 className="text-base font-semibold">{skill.category}</h3>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {skill.items.map((item) => (
                            <span key={item} className="tag rounded-full px-3.5 py-1.5 text-xs font-medium text-[color:var(--foreground-dim)]">
                        {item}
                      </span>
                        ))}
                      </div>
                    </div>
                  </ScrollReveal>
              ))}
            </div>
          </section>

          <div className="section-divider mx-auto max-w-7xl" />

          {/* ═══ PROJECTS ═══ */}
          <section id="work" className="mx-auto max-w-7xl px-5 py-24 sm:px-8 sm:py-32">
            <ScrollReveal>
              <div className="mb-14 max-w-2xl space-y-4">
              <span className="section-label flex items-center gap-2">
                <Briefcase size={14} /> Selected Projects
              </span>
                <h2 className="section-title gradient-text">
                  Projects I&apos;m proud of
                </h2>
                <p className="text-base leading-relaxed text-[color:var(--muted)] sm:text-lg">
                  Real-world applications built with production standards, clean architecture,
                  and thoughtful user experience.
                </p>
              </div>
            </ScrollReveal>

            <div className="space-y-6">
              {projects.map((project, i) => (
                  <ScrollReveal key={project.name} delay={i * 120}>
                    <article className="bento project-card group grid gap-0 overflow-hidden rounded-2xl md:grid-cols-[1fr_1.1fr] lg:grid-cols-[1fr_1.3fr]">
                      {/* Image side */}
                      <div className="relative aspect-video overflow-hidden md:aspect-auto md:min-h-[320px]">
                        <Image
                            src={project.image}
                            alt={project.name}
                            fill
                            className="project-img object-cover"
                        />
                        {/* Gradient overlay */}
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-[color:var(--surface)]/80 hidden md:block" />
                        <div className="absolute inset-0 bg-gradient-to-t from-[color:var(--surface)] to-transparent md:hidden" />
                        {/* Project number */}
                        <div className="absolute left-5 top-5 z-10">
                      <span
                          className="display text-5xl font-bold opacity-20"
                          style={{ color: project.accent }}
                      >
                        {project.number}
                      </span>
                        </div>
                        {/* Accent bar */}
                        <div
                            className="absolute bottom-0 left-0 right-0 h-[2px] md:bottom-auto md:left-auto md:right-0 md:top-0 md:h-full md:w-[2px]"
                            style={{ background: `linear-gradient(to right, ${project.accent}, transparent)` }}
                        />
                      </div>

                      {/* Content side */}
                      <div className="flex flex-col justify-center p-6 sm:p-8 lg:p-10">
                        <div className="mb-1 text-xs font-semibold uppercase tracking-[0.16em] text-[color:var(--muted)]">
                          {project.subtitle}
                        </div>
                        <h3 className="mb-3 text-2xl font-bold sm:text-3xl">{project.name}</h3>
                        <p className="mb-6 leading-relaxed text-[color:var(--muted)]">
                          {project.description}
                        </p>
                        <div className="mb-6 flex flex-wrap gap-2">
                          {project.tags.map((tag) => (
                              <span
                                  key={tag}
                                  className="tag rounded-full px-3 py-1 text-[11px] font-medium text-[color:var(--foreground-dim)]"
                              >
      {tag}
    </span>
                          ))}
                        </div>

                        <div className="flex flex-wrap gap-4">
                          {project.githubBackend && (
                              <a
                                  href={project.githubBackend}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="link-underline inline-flex items-center gap-2 text-sm font-semibold text-[color:var(--brand)] transition-all hover:gap-3"
                              >
                                <FaGithub size={16} />
                                Backend
                                <ArrowUpRight size={14} />
                              </a>
                          )}

                          {project.githubFrontend && (
                              <a
                                  href={project.githubFrontend}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="link-underline inline-flex items-center gap-2 text-sm font-semibold text-[color:var(--brand)] transition-all hover:gap-3"
                              >
                                <FaGithub size={16} />
                                Frontend
                                <ArrowUpRight size={14} />
                              </a>
                          )}

                          {!project.githubBackend && project.github && (
                              <a
                                  href={project.github}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="link-underline inline-flex items-center gap-2 text-sm font-semibold text-[color:var(--brand)] transition-all hover:gap-3"
                              >
                                <FaGithub size={16} />
                                View on GitHub
                                <ArrowUpRight size={14} />
                              </a>
                          )}
                        </div>
                      </div>
                    </article>
                  </ScrollReveal>
              ))}
            </div>
          </section>

          <div className="section-divider mx-auto max-w-7xl" />

          {/* ═══ EDUCATION ═══ */}
          <section id="education" className="mx-auto max-w-7xl px-5 py-24 sm:px-8 sm:py-32">
            <ScrollReveal>
              <div className="mb-14 max-w-2xl space-y-4">
              <span className="section-label flex items-center gap-2">
                <GraduationCap size={14} /> Education
              </span>
                <h2 className="section-title gradient-text">
                  Academic journey
                </h2>
              </div>
            </ScrollReveal>

            <div className="grid gap-4 md:grid-cols-2">
              {education.map((edu, i) => (
                  <ScrollReveal key={edu.institution} delay={i * 100}>
                    <div className="bento group flex h-full flex-col rounded-2xl p-6 sm:p-8">
                      <div className="mb-5 flex items-center justify-between">
                        <div
                            className="flex h-11 w-11 items-center justify-center rounded-xl"
                            style={{
                              background: edu.status === "current"
                                  ? "color-mix(in oklab, var(--accent-emerald) 12%, transparent)"
                                  : "color-mix(in oklab, var(--accent-gold) 12%, transparent)",
                              color: edu.status === "current" ? "var(--accent-emerald)" : "var(--accent-gold)",
                            }}
                        >
                          {edu.status === "current" ? <BookOpen size={20} /> : <GraduationCap size={20} />}
                        </div>
                        {edu.status === "current" && (
                            <div className="flex items-center gap-2 rounded-full border border-[color:var(--accent-emerald)]/20 bg-[color:var(--accent-emerald)]/5 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-[color:var(--accent-emerald)]">
                              <div className="status-dot" style={{ width: 6, height: 6 }} />
                              Current
                            </div>
                        )}
                      </div>
                      <h3 className="mb-1 text-xl font-bold">{edu.degree}</h3>
                      <p className="mb-4 text-sm text-[color:var(--muted)]">{edu.institution}</p>
                      <div className="mt-auto">
                    <span className="inline-flex rounded-lg border border-[color:var(--line)] bg-[color:var(--surface-2)] px-3 py-1.5 text-xs font-semibold text-[color:var(--muted)]">
                      {edu.period}
                    </span>
                      </div>
                    </div>
                  </ScrollReveal>
              ))}
            </div>
          </section>

          <div className="section-divider mx-auto max-w-7xl" />

          {/* ═══ CERTIFICATIONS ═══ */}
          <section className="mx-auto max-w-7xl px-5 py-24 sm:px-8 sm:py-32">
            <ScrollReveal>
              <div className="mb-14 max-w-2xl space-y-4">
      <span className="section-label flex items-center gap-2">
        <Award size={14} /> Certifications
      </span>

                <h2 className="section-title gradient-text">
                  Cisco Credentials
                </h2>

                <p className="text-base leading-relaxed text-[color:var(--muted)]">
                  Industry-recognized certifications validating technical foundations.
                </p>
              </div>
            </ScrollReveal>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {documents.map((doc, i) => {
                const Icon = doc.icon;

                return (
                    <ScrollReveal key={doc.file} delay={i * 100}>
                      <div className="bento cert-card group flex h-full flex-col rounded-2xl p-6 sm:p-7">
                        <div className="mb-4">
                          <Icon
                              size={40}
                              className="text-[color:var(--brand)] transition-transform duration-300 group-hover:scale-110"
                          />
                        </div>

                        <h3 className="mb-1 text-lg font-bold leading-snug">
                          {doc.title}
                        </h3>

                        <p className="mb-6 flex-1 text-sm text-[color:var(--muted)]">
                          {doc.issuer}
                        </p>

                        <a
                            href={doc.file}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="link-underline inline-flex w-fit items-center gap-2 text-sm font-semibold text-[color:var(--brand)] transition-all hover:gap-3"
                        >
                          <FileText size={14} />
                          View certificate
                          <ExternalLink size={12} />
                        </a>
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
              className="mx-auto max-w-7xl px-5 py-24 sm:px-8 sm:py-32"
          >
            <ScrollReveal>
              <div className="mb-14 max-w-2xl space-y-4">
      <span className="section-label flex items-center gap-2">
        <Award size={14} />
        Hackathons
      </span>

                <h2 className="section-title gradient-text">
                  Innovation & Competitions
                </h2>

                <p className="text-base leading-relaxed text-[color:var(--muted)]">
                  Participating in hackathons has strengthened my teamwork,
                  problem-solving and rapid prototyping skills.
                </p>
              </div>
            </ScrollReveal>

            <div className="grid gap-6 md:grid-cols-2">
              {hackathons.map((hackathon, index) => (
                  <ScrollReveal key={index} delay={index * 100}>
                    <article className="bento overflow-hidden rounded-2xl">
                      <div className="relative h-60">
                        <Image
                            src={hackathon.image}
                            alt={hackathon.title}
                            fill
                            className="object-cover transition duration-500 hover:scale-105"
                        />
                      </div>

                      <div className="p-6">
                        <h3 className="text-xl font-bold">{hackathon.title}</h3>

                        <p className="mt-2 text-sm text-[color:var(--muted)]">
                          {hackathon.description}
                        </p>

                        <div className="mt-4 flex flex-wrap gap-2">
                          {hackathon.tags.map((tag) => (
                              <span
                                  key={tag}
                                  className="tag rounded-full px-3 py-1 text-xs"
                              >
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
          <section id="resume" className="mx-auto max-w-7xl px-5 py-24 sm:px-8">
            <ScrollReveal>
              <div className="bento rounded-3xl p-10 text-center">
                <h2 className="section-title gradient-text">
                  My Resume
                </h2>

                <p className="mt-4 text-[color:var(--muted)]">
                  Download my latest CV to learn more about my education,
                  technical skills and professional experience.
                </p>

                <a
                    href="/docs/Rida_Taki_CV.pdf"
                    download
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary mt-8 inline-flex items-center gap-2 rounded-2xl px-8 py-4"
                >
                  <Download size={18} />
                  Download Resume
                </a>
              </div>
            </ScrollReveal>
          </section>

          <div className="section-divider mx-auto max-w-7xl" />


          {/* ═══ CONTACT ═══ */}
          <section
              id="contact"
              className="mx-auto max-w-7xl px-5 py-24 sm:px-8 sm:py-32"
          >
            <ScrollReveal>
              <div className="glow-border relative overflow-hidden rounded-3xl border border-[color:var(--line-strong)] bg-[color:var(--surface)] p-8 sm:p-12 lg:p-16">
                {/* Background orbs */}
                <div className="absolute -right-20 -top-20 h-80 w-80 rounded-full bg-[color:var(--brand)] opacity-[0.03] blur-[100px]" />
                <div className="absolute -bottom-20 -left-20 h-60 w-60 rounded-full bg-[color:var(--accent-gold)] opacity-[0.04] blur-[80px]" />

                <div className="relative grid gap-12 lg:grid-cols-[1.4fr_1fr] lg:items-start">
                  {/* Left */}
                  <div className="space-y-6">
                  <span className="section-label flex items-center gap-2">
                    <Mail size={14} /> Contact
                  </span>

                    <h2 className="section-title gradient-text leading-tight">
                      Let&apos;s build something
                      <br />
                      remarkable together.
                    </h2>

                    <p className="max-w-xl text-base leading-relaxed text-[color:var(--muted)] sm:text-lg">
                      I&apos;m open to internships, freelance missions, and
                      collaborative product work. If you need a developer who
                      cares about both the architecture and the user experience —
                      let&apos;s talk.
                    </p>

                    {/* Social icons */}
                    <div className="flex flex-wrap gap-3 pt-2">
                      <a
                          href="https://github.com/Rida1019-taki"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="icon-lift flex h-12 w-12 items-center justify-center rounded-xl border border-[color:var(--line)] bg-[color:var(--surface-2)] text-[color:var(--muted)] transition hover:bg-[color:var(--brand)] hover:text-white"
                          aria-label="GitHub"
                      >
                        <FaGithub size={20} />
                      </a>

                      <a
                          href="https://www.linkedin.com/in/rida-taki-bb44a8350"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="icon-lift flex h-12 w-12 items-center justify-center rounded-xl border border-[color:var(--line)] bg-[color:var(--surface-2)] text-[color:var(--muted)] transition hover:bg-[color:var(--brand)] hover:text-white"
                          aria-label="LinkedIn"
                      >
                        <FaLinkedin size={20} />
                      </a>

                      <a
                          href="https://wa.me/212649487957"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="icon-lift flex h-12 w-12 items-center justify-center rounded-xl border border-[color:var(--line)] bg-[color:var(--surface-2)] text-[color:var(--muted)] transition hover:bg-green-600 hover:text-white"
                          aria-label="WhatsApp"
                      >
                        <FaWhatsapp size={20} />
                      </a>

                      <a
                          href="https://discord.com/users/rida_taki"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="icon-lift flex h-12 w-12 items-center justify-center rounded-xl border border-[color:var(--line)] bg-[color:var(--surface-2)] text-[color:var(--muted)] transition hover:bg-[#5865F2] hover:text-white"
                          aria-label="Discord"
                      >
                        <FaDiscord size={20} />
                      </a>

                      <a
                          href="https://www.instagram.com/rida_taki_10?igsh=OW5pZnI2Mjh2ejBv"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="icon-lift flex h-12 w-12 items-center justify-center rounded-xl border border-[color:var(--line)] bg-[color:var(--surface-2)] text-[color:var(--muted)] transition hover:bg-pink-600 hover:text-white"
                          aria-label="Instagram"
                      >
                        <FaInstagram size={20} />
                      </a>
                    </div>
                  </div>

                  {/* Right */}
                  <form
                      onSubmit={sendEmail}
                      className="space-y-5 rounded-2xl border border-[color:var(--line)] bg-[color:var(--surface-2)] p-6 sm:p-7"
                  >
                    <h3 className="text-xl font-bold">Send me a message</h3>

                    <div>
                      <label className="mb-2 block text-sm font-medium">
                        Full Name
                      </label>
                      <input
                          name="from_name"
                          type="text"
                          placeholder="Your name"
                          className="w-full rounded-xl border border-[color:var(--line)] bg-transparent px-4 py-3 outline-none focus:border-[color:var(--brand)] transition-colors"
                          required
                      />
                    </div>

                    <div>
                      <label className="mb-2 block text-sm font-medium">
                        Email
                      </label>
                      <input
                          name="from_email"
                          type="email"
                          placeholder="your@email.com"
                          className="w-full rounded-xl border border-[color:var(--line)] bg-transparent px-4 py-3 outline-none focus:border-[color:var(--brand)] transition-colors"
                          required
                      />
                    </div>

                    <div>
                      <label className="mb-2 block text-sm font-medium">
                        Subject
                      </label>
                      <input
                          name="subject"
                          type="text"
                          placeholder="Subject"
                          className="w-full rounded-xl border border-[color:var(--line)] bg-transparent px-4 py-3 outline-none focus:border-[color:var(--brand)] transition-colors"
                          required
                      />
                    </div>

                    <div>
                      <label className="mb-2 block text-sm font-medium">
                        Message
                      </label>
                      <textarea
                          name="message"
                          rows={5}
                          placeholder="Write your message..."
                          className="w-full rounded-xl border border-[color:var(--line)] bg-transparent px-4 py-3 outline-none focus:border-[color:var(--brand)] transition-colors"
                          required
                      />
                    </div>

                    <button
                        type="submit"
                        disabled={loading}
                        className="btn-primary w-full rounded-xl py-3 disabled:opacity-60"
                    >
                      {loading ? "Sending..." : "Send Message"}
                    </button>
                  </form>
                </div>
              </div>
            </ScrollReveal>
          </section>
        </main>

        {/* ═══ FOOTER ═══ */}
        <footer className="relative z-10 border-t border-[color:var(--line)]">
          <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-5 px-5 py-10 sm:flex-row sm:px-8">
            <div className="flex items-center gap-3">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-[color:var(--brand)] to-[#c05530] text-xs font-bold text-white">
                RT
              </div>
              <span className="text-sm text-[color:var(--muted)]">
              © 2026 Rida Taki
            </span>
            </div>

            <p className="text-xs text-[color:var(--muted)]">
              Designed &amp; developed with ♥ and clean code.
            </p>

            <div className="flex gap-3">
              <a
                  href="https://github.com/Rida1019-taki"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="icon-lift text-[color:var(--muted)] transition-colors hover:text-white"
                  aria-label="GitHub"
              >
                <FaGithub size={18} />
              </a>

              <a
                  href="https://www.linkedin.com/in/rida-taki-bb44a8350"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="icon-lift text-[color:var(--muted)] transition-colors hover:text-white"
                  aria-label="LinkedIn"
              >
                <FaLinkedin size={18} />
              </a>

              <a
                  href="https://wa.me/212649487957"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="icon-lift text-[color:var(--muted)] transition hover:text-green-500"
                  aria-label="WhatsApp"
              >
                <FaWhatsapp size={18} />
              </a>

              <a
                  href="https://discord.com/users/rida_taki"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="icon-lift text-[color:var(--muted)] transition hover:text-[#5865F2]"
                  aria-label="Discord"
              >
                <FaDiscord size={18} />
              </a>

              <a
                  href="https://www.instagram.com/rida_taki_10?igsh=OW5pZnI2Mjh2ejBv"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="icon-lift text-[color:var(--muted)] transition hover:text-pink-500"
                  aria-label="Instagram"
              >
                <FaInstagram size={18} />
              </a>
            </div>
          </div>
        </footer>
      </div>
  );
}