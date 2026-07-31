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
  FaDocker,
  FaGithub,
  FaJava,
  FaLinkedin,
  FaPython,
  FaReact,
} from "react-icons/fa";
import {
  SiKotlin,
  SiSpringboot,
  SiFlutter,
  SiMysql,
  SiPostman,
  SiFigma,
} from "react-icons/si";
import ScrollReveal from "@/components/ScrollReveal";
import ParticleField from "@/components/ParticleField";
import MouseGlow from "@/components/MouseGlow";
import MobileMenu from "@/components/MobileMenu";
import AnimatedNumber from "@/components/AnimatedNumber";
import TypewriterText from "@/components/TypewriterText";

export default function Home() {
  const skills = [
    {
      category: "Languages",
      icon: <Terminal size={20} />,
      items: ["Java", "Python", "PHP", "JavaScript"],
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
      name: "HealthCare",
      subtitle: "Medical Management System",
      description:
          "A comprehensive medical management REST API designed for scalability and efficiency. Built with enterprise-grade patterns, secure JWT authentication, and database migrations.",
      tags: ["Java", "Spring Boot", "Docker", "Spring Security", "Hibernate", "Flyway", "JWT", "REST API"],
      image: "/healthcare.png",
      github: "https://github.com/ENAA-School-Student/HealthCare-Syst-me-de-Gestion_M-dicale.git",
      accent: "#5a8fd4",
      number: "01",
    },
    {
      name: "FleetFlow",
      subtitle: "Logistics Management Platform",
      description:
          "Full-featured logistics system for administering clients, drivers, vehicles, and deliveries. Real-time tracking, route optimization, and CI/CD pipeline.",
      tags: ["Java", "Spring Boot", "MapStruct", "Docker", "MySQL", "Swagger", "GitHub Actions", "JWT"],
      image: "/fleetflow.png",
      github: "https://github.com/NihadHub/fleetFlow.git",
      accent: "#e07040",
      number: "02",
    },
    {
      name: "ISTA OUED-ZEM",
      subtitle: "Educational Mobile App",
      description:
          "Native Android application providing digital resources, course materials, and campus information for technical institute students.",
      tags: ["Kotlin", "SQLite", "Material Design", "Android"],
      image: "/istaouedzem.png",
      github: "https://github.com/Rida1019-taki/ISTA-OUED-ZEM.git",
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
    { icon: <SiMysql size={24} />, label: "MySQL", color: "#e07040" },
    { icon: <SiPostman size={20} />, label: "Postman", color: "#e07040" },
    { icon: <SiFigma size={18} />, label: "Figma", color: "#a78bfa" },
  ];

  return (
      <div className="min-h-screen text-[var(--foreground)] relative">
        <ParticleField />
        <MouseGlow />

        {/* ═══ NAVBAR ═══ */}
        <nav className="glass-nav fixed top-0 z-50 w-full">
          <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 sm:px-8">
            <a href="#" className="flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-[color:var(--brand)] to-[#c05530] text-sm font-bold text-white">
                RT
              </div>
              <div className="hidden sm:block">
                <span className="display text-lg font-semibold leading-none">Rida Taki</span>
              </div>
            </a>

            <div className="hidden items-center gap-7 md:flex">
              {["About", "Skills", "Work", "Education", "Resume", "Contact"].map((item) => (
                  <a
                      key={item}
                      href={`#${item.toLowerCase()}`}
                      className="nav-link font-medium text-[color:var(--muted)] transition hover:text-[color:var(--foreground)]"
                  >
                    {item}
                  </a>
              ))}
            </div>

            <div className="flex items-center gap-3">
              <a
                  href="#contact"
                  className="btn-primary hidden rounded-full px-5 py-2 text-sm font-semibold text-white sm:inline-flex sm:items-center sm:gap-2"
              >
                Hire me <Zap size={14} />
              </a>
              <MobileMenu />
            </div>
          </div>
        </nav>

        <main className="relative z-10">
          {/* ═══ HERO ═══ */}
          <section id="about" className="relative min-h-screen flex items-center overflow-hidden">
            <div className="hero-mesh">
              <div className="orb orb-1" />
              <div className="orb orb-2" />
              <div className="orb orb-3" />
            </div>

            <div className="mx-auto max-w-7xl px-5 py-32 sm:px-8 md:py-0">
              <div className="grid items-center gap-12 lg:grid-cols-[1.3fr_1fr] lg:gap-16">
                {/* Left */}
                <div className="relative z-10 space-y-8">
                  <div className="reveal flex items-center gap-3">
                    <div className="status-dot" />
                    <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[color:var(--accent-emerald)]">
                    Available for projects
                  </span>
                  </div>

                  <h1 className="reveal reveal-d1 display text-[clamp(2.8rem,7vw,5rem)] leading-[0.92] tracking-tight">
                    <span className="gradient-text">Crafting digital</span>
                    <br />
                    <span className="gradient-text">experiences that</span>
                    <br />
                    <span className="brand-gradient-text">truly matter.</span>
                  </h1>

                  <div className="reveal reveal-d2 text-lg sm:text-xl">
                    <TypewriterText />
                  </div>

                  <p className="reveal reveal-d3 max-w-lg text-base leading-relaxed text-[color:var(--muted)] sm:text-lg">
                    Full stack &amp; mobile developer from Morocco. I architect robust backends,
                    build native apps, and craft interfaces people genuinely enjoy using.
                  </p>

                  {/* Stats */}
                  <div className="reveal reveal-d4 flex items-center gap-6 sm:gap-8">
                    <div className="text-center">
                      <div className="display text-3xl font-bold sm:text-4xl">
                        <AnimatedNumber value={3} suffix="+" />
                      </div>
                      <div className="mt-1 text-[10px] uppercase tracking-[0.16em] text-[color:var(--muted)]">
                        Projects
                      </div>
                    </div>
                    <div className="stat-divider" />
                    <div className="text-center">
                      <div className="display text-3xl font-bold sm:text-4xl">
                        <AnimatedNumber value={10} suffix="+" />
                      </div>
                      <div className="mt-1 text-[10px] uppercase tracking-[0.16em] text-[color:var(--muted)]">
                        Technologies
                      </div>
                    </div>
                    <div className="stat-divider" />
                    <div className="text-center">
                      <div className="display text-3xl font-bold sm:text-4xl">
                        <AnimatedNumber value={3} />
                      </div>
                      <div className="mt-1 text-[10px] uppercase tracking-[0.16em] text-[color:var(--muted)]">
                        Certifications
                      </div>
                    </div>
                  </div>

                  {/* CTAs */}
                  <div className="reveal reveal-d5 flex flex-wrap gap-4">
                    <a
                        href="#work"
                        className="btn-primary inline-flex items-center gap-2 rounded-2xl px-7 py-3.5 text-sm font-semibold text-white"
                    >
                      View my work <ArrowRight size={16} />
                    </a>
                    <a
                        href="#contact"
                        className="btn-secondary inline-flex items-center gap-2 rounded-2xl px-7 py-3.5 text-sm font-semibold"
                    >
                      <Mail size={16} /> Get in touch
                    </a>
                  </div>
                </div>

                {/* Right — Photo */}
                <div className="reveal reveal-d3 relative hidden lg:block">
                  <div className="relative mx-auto max-w-[380px]">
                    {/* Decorative ring */}
                    <div className="absolute -inset-4 rounded-[2.5rem] border border-dashed border-white/5" />
                    <div className="absolute -inset-8 rounded-[3rem] border border-dashed border-white/[0.03]" />

                    <div className="photo-frame relative rounded-[2rem] overflow-hidden">
                      <div className="dot-grid absolute inset-0 z-10 opacity-40" />
                      <div className="relative aspect-[3/4] overflow-hidden rounded-[2rem]">
                        <Image
                            src="/image.png"
                            alt="Rida Taki"
                            fill
                            className="object-cover"
                            priority
                        />
                        {/* Bottom gradient */}
                        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[color:var(--background)] via-[color:var(--background)]/50 to-transparent" />
                        <div className="absolute bottom-5 left-5 right-5 z-20">
                          <div className="flex items-center gap-2 text-sm text-[color:var(--foreground-dim)]">
                            <MapPin size={14} className="text-[color:var(--brand)]" />
                            Beni Mellal, Morocco
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Floating cards */}
                    <div className="float-badge absolute -right-6 top-12 z-20 glass rounded-2xl px-4 py-3 shadow-2xl" style={{ animationDelay: "0s" }}>
                      <div className="flex items-center gap-2 text-xs font-semibold">
                        <Server size={14} className="text-[color:var(--brand)]" />
                        <span>Backend</span>
                      </div>
                    </div>

                    <div className="float-badge absolute -left-6 bottom-32 z-20 glass rounded-2xl px-4 py-3 shadow-2xl" style={{ animationDelay: "-2s" }}>
                      <div className="flex items-center gap-2 text-xs font-semibold">
                        <Smartphone size={14} className="text-[color:var(--accent-gold)]" />
                        <span>Mobile</span>
                      </div>
                    </div>

                    <div className="float-badge absolute -right-4 bottom-16 z-20 glass rounded-2xl px-4 py-3 shadow-2xl" style={{ animationDelay: "-4s" }}>
                      <div className="flex items-center gap-2 text-xs font-semibold">
                        <Rocket size={14} className="text-[color:var(--accent-emerald)]" />
                        <span>DevOps</span>
                      </div>
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
          <section id="skills" className="mx-auto max-w-7xl px-5 py-24 sm:px-8 sm:py-32">
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
                <Briefcase size={14} /> Selected Work
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
                              <span key={tag} className="tag rounded-full px-3 py-1 text-[11px] font-medium text-[color:var(--foreground-dim)]">
                          {tag}
                        </span>
                          ))}
                        </div>
                        <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="link-underline inline-flex w-fit items-center gap-2 text-sm font-semibold text-[color:var(--brand)] transition-all hover:gap-3"
                        >
                          <FaGithub size={16} /> View on GitHub <ArrowUpRight size={14} />
                        </a>
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
          <section id="contact" className="mx-auto max-w-7xl px-5 py-24 sm:px-8 sm:py-32">
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
                      I&apos;m open to internships, freelance missions, and collaborative
                      product work. If you need a developer who cares about both the
                      architecture and the user experience — let&apos;s talk.
                    </p>

                    {/* Social icons */}
                    <div className="flex gap-3 pt-2">
                      <a
                          href="https://github.com/Rida1019-taki"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="icon-lift flex h-12 w-12 items-center justify-center rounded-xl border border-[color:var(--line)] bg-[color:var(--surface-2)] text-[color:var(--muted)] transition"
                      >
                        <FaGithub size={20} />
                      </a>

                      <a
                          href="https://www.linkedin.com/in/rida-taki-bb44a8350"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="icon-lift flex h-12 w-12 items-center justify-center rounded-xl border border-[color:var(--line)] bg-[color:var(--surface-2)] text-[color:var(--muted)] transition"
                      >
                        <FaLinkedin size={20} />
                      </a>
                    </div>
                  </div>

                  {/* Right */}
                  <form className="space-y-5 rounded-2xl border border-[color:var(--line)] bg-[color:var(--surface-2)] p-6 sm:p-7">
                    <h3 className="text-xl font-bold">
                      Send me a message
                    </h3>

                    <div>
                      <label className="mb-2 block text-sm font-medium">
                        Full Name
                      </label>
                      <input
                          type="text"
                          placeholder="Your name"
                          className="w-full rounded-xl border border-[color:var(--line)] bg-transparent px-4 py-3 outline-none"
                      />
                    </div>

                    <div>
                      <label className="mb-2 block text-sm font-medium">
                        Email
                      </label>
                      <input
                          type="email"
                          placeholder="your@email.com"
                          className="w-full rounded-xl border border-[color:var(--line)] bg-transparent px-4 py-3 outline-none"
                      />
                    </div>

                    <div>
                      <label className="mb-2 block text-sm font-medium">
                        Subject
                      </label>
                      <input
                          type="text"
                          placeholder="Subject"
                          className="w-full rounded-xl border border-[color:var(--line)] bg-transparent px-4 py-3 outline-none"
                      />
                    </div>

                    <div>
                      <label className="mb-2 block text-sm font-medium">
                        Message
                      </label>
                      <textarea
                          rows={5}
                          placeholder="Write your message..."
                          className="w-full rounded-xl border border-[color:var(--line)] bg-transparent px-4 py-3 outline-none"
                      />
                    </div>

                    <button
                        type="submit"
                        className="btn-primary w-full rounded-xl py-3"
                    >
                      Send Message
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
                  className="icon-lift text-[color:var(--muted)]"
              >
                <FaGithub size={18} />
              </a>
              <a
                  href="https://www.linkedin.com/in/rida-taki-bb44a8350"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="icon-lift text-[color:var(--muted)]"
              >
                <FaLinkedin size={18} />
              </a>
            </div>
          </div>
        </footer>
      </div>
  );
}
