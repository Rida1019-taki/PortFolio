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
  import {useEffect, useRef, useState} from "react";

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
        image: "/logitrack1.png",
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

          {/* Background Video */}
          <div className="fixed inset-0 -z-20 overflow-hidden">
            <video
                className="video-bg w-full h-full object-cover rounded-none"
                autoPlay
                muted
                loop
                playsInline
                preload="auto"
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

          {/* ═══ NAVBAR ═══ */}
          <header className="fixed top-5 inset-x-0 z-50 flex justify-center">
            <nav
                className="w-fit"
            >
              <div
                  className="relative overflow-visible rounded-full"
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
                    {/* Status Pill */}
                    <div className="flex items-center gap-2.5 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-3.5 py-1.5 backdrop-blur-md">
    <span className="relative flex h-2 w-2">
      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
      <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
    </span>
                      <span className="text-[11px] font-semibold uppercase tracking-widest text-emerald-400">
      Available for projects
    </span>
                    </div>

                    {/* Tag Pill */}
                    <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3.5 py-1.5 text-xs font-mono text-gray-300 backdrop-blur-md">
                      <span className="text-[#D9A441] font-bold">{"//"}</span>
                      <span>Clean Code Advocate</span>
                    </div>
                  </div>

                  {/* Main Massive Title - Slightly Smaller & Refined Size */}
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
                      <span className="bg-gradient-to-r from-[#F3C669] via-[#D9A441] to-[#B8860B] bg-clip-text text-transparent italic font-serif">
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

                  {/* Grid: Bio + Stats & CTAs */}
                  <div className="reveal reveal-d3 grid grid-cols-1 lg:grid-cols-12 gap-8 items-end pt-6 border-t border-white/10">

                    {/* Paragraph Description — Fully Transparent with High Contrast Text */}
                    <div
                        ref={bioRef}
                        className={`lg:col-span-6 space-y-4 p-6 rounded-2xl bg-black/40 border border-white/10 backdrop-blur-md shadow-2xl relative overflow-hidden transition-all duration-700 ease-in-out ${
                            isBioVisible
                                ? "opacity-100 translate-y-0"
                                : "opacity-0 -translate-y-4 pointer-events-none"
                        }`}
                    >
                      {/* Ambient Corner Glow */}
                      <div className="absolute -top-12 -left-12 w-28 h-28 bg-[#D9A441]/10 rounded-full blur-2xl pointer-events-none" />

                      <p className="relative z-10 text-base sm:text-lg leading-relaxed bg-gradient-to-r from-white via-gray-100 to-[#D9A441] bg-clip-text text-transparent font-medium">
                        Full stack &amp; mobile developer from Morocco. I architect robust backends,
                        build native apps, and craft interfaces people genuinely enjoy using.
                      </p>

                      <div className="relative z-10 flex items-center gap-2 text-xs font-semibold text-[#F5D061] pt-1 border-t border-white/5">
                        <MapPin size={15} className="text-[#F5D061]" />
                        <span className="tracking-wide">Beni Mellal, Morocco</span>
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
                    <span className="brand-gradient-text italic font-serif">modern precision.</span>
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
  
            {/* ═══ PROJECTS (WORK) ═══ */}
            <section id="work" className="relative mx-auto max-w-7xl px-5 py-24 sm:px-8 sm:py-32">
              <ScrollReveal>
                <div className="mb-20 flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-white/10 pb-8">
                  <div>
                    <div className="flex items-center gap-2 font-mono text-xs text-[#D9A441] mb-3">
                      <span className="text-white/40">{"//"}</span>
                      <span className="uppercase tracking-[0.2em] font-medium">Selected Works</span>
                    </div>
                    <h2 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white">
                      Featured <span className="italic font-serif font-normal text-[var(--brand)]">Projects</span>
                    </h2>
                  </div>
                  <p className="max-w-md text-sm sm:text-base text-[color:var(--muted)] leading-relaxed">
                    Real-world applications built with production standards, clean architecture, and intuitive user experience.
                  </p>
                </div>
              </ScrollReveal>
  
              <div className="space-y-24">
                {projects.map((project, i) => (
                    <ScrollReveal key={project.name} delay={i * 100}>
                      <article className="group grid gap-8 lg:grid-cols-12 items-center">
                        <div className={`space-y-6 lg:col-span-5 ${i % 2 === 1 ? 'lg:order-2' : ''}`}>
                          <div className="flex items-center gap-4">
                        <span className="font-mono text-3xl font-light text-[#D9A441]">
                          {project.number}
                        </span>
                            <div className="h-[1px] w-12 bg-white/20" />
                            <span className="text-xs font-mono uppercase tracking-widest text-[color:var(--muted)]">
                          {project.subtitle}
                        </span>
                          </div>
  
                          <h3 className="text-3xl sm:text-4xl font-bold text-white transition-colors duration-300 group-hover:text-[var(--brand)]">
                            {project.name}
                          </h3>
  
                          <p className="text-base text-[color:var(--muted)] leading-relaxed">
                            {project.description}
                          </p>
  
                          <div className="flex flex-wrap gap-2 pt-2">
                            {project.tags.map((tag) => (
                                <span
                                    key={tag}
                                    className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-mono text-gray-300"
                                >
                            {tag}
                          </span>
                            ))}
                          </div>
  
                          <div className="flex flex-wrap gap-4 pt-4">
                            {project.githubBackend && (
                                <a
                                    href={project.githubBackend}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-white border-b border-white/30 pb-1 transition-all hover:border-[var(--brand)] hover:text-[var(--brand)]"
                                >
                                  <FaGithub size={14} /> Backend Code <ArrowUpRight size={12} />
                                </a>
                            )}
  
                            {project.githubFrontend && (
                                <a
                                    href={project.githubFrontend}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-white border-b border-white/30 pb-1 transition-all hover:border-[var(--brand)] hover:text-[var(--brand)]"
                                >
                                  <FaGithub size={14} /> Frontend Code <ArrowUpRight size={12} />
                                </a>
                            )}
  
                            {!project.githubBackend && project.github && (
                                <a
                                    href={project.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-white border-b border-white/30 pb-1 transition-all hover:border-[var(--brand)] hover:text-[var(--brand)]"
                                >
                                  <FaGithub size={14} /> View Repository <ArrowUpRight size={12} />
                                </a>
                            )}
                          </div>
                        </div>
  
                        <div className={`lg:col-span-7 ${i % 2 === 1 ? 'lg:order-1' : ''}`}>
                          <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-2 transition-all duration-500 group-hover:border-white/20 group-hover:shadow-2xl">
                            <div className="relative aspect-[16/10] overflow-hidden rounded-xl">
                              <Image
                                  src={project.image}
                                  alt={project.name}
                                  fill
                                  className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                              />
                              <div className="absolute inset-0 bg-black/20 transition-opacity duration-500 group-hover:opacity-0" />
                            </div>
                          </div>
                        </div>
                      </article>
                    </ScrollReveal>
                ))}
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
                              <span className="brand-gradient-text italic font-serif">Background.</span>
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
                                  <span className="brand-gradient-text italic font-serif">Certifications.</span>
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
                      <span className="brand-gradient-text italic font-serif">Hackathons.</span>
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
                                  <span className="brand-gradient-text italic font-serif">together?</span>
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
                                          <span className="brand-gradient-text italic font-serif">remarkable together.</span>
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