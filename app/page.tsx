import { ArrowRight, Mail, Phone, Sparkles } from "lucide-react";
import Image from "next/image";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Home() {
  const skills = [
    { category: "Languages", items: ["Java", "Python", "PHP", "JavaScript"] },
    { category: "Mobile", items: ["Kotlin", "Flutter"] },
    { category: "Web", items: ["React", "Spring Boot", "Spring Security", "HTML5", "CSS3"] },
    { category: "Databases", items: ["MySQL", "SQLite", "JPA", "Hibernate"] },
    { category: "Tools & DevOps", items: ["Docker", "Github Actions", "Scrum", "Git", "Figma", "Postman"] },
  ];

  const projects = [
    {
      name: "HealthCare",
      description: "A comprehensive medical management REST API designed for scalability and efficiency.",
      tags: ["Java", "Spring Boot", "Docker", "Spring Security", "Hibernate", "Flyway", "JWT", "REST API"],
      image: "/healthcare.png",
      github: "https://github.com/ENAA-School-Student/HealthCare-Syst-me-de-Gestion_M-dicale.git",
    },
    {
      name: "FleetFlow",
      description: "Ce projet consiste à développer un système de gestion logistique permettant d’administrer les clients, les chauffeurs, les véhicules et les livraisons.",
      tags: ["Java", "Spring Boot", "MapStruct", "Docker", "MySQL", "Swagger", "GitHub Actions", "JWT"],
      image: "/fleetflow.png",
      github: "https://github.com/NihadHub/fleetFlow.git",
    },
    {
      name: "ISTA OUED-ZEM",
      description: "Educational mobile application providing digital resources and campus information for students.",
      tags: ["Kotlin", "SQLite"],
      image: "/istaouedzem.png",
      github: "https://github.com/Rida1019-taki/ISTA-OUED-ZEM.git",
    },
  ];

  const education = [
    {
      institution: "École Numérique Ahmed Al Hansali",
      degree: "Full Stack Java",
      period: "2025 - Present",
    },
    {
      institution: "ISTA Oued Zem",
      degree: "Digital Development - Mobile",
      period: "2023 - 2025",
    },
  ];

  const tickerItems = [
    "Open to freelance",
    "Full stack Java",
    "Mobile apps with Kotlin",
    "REST APIs",
    "Spring Boot architecture",
    "Clean UI and UX",
  ];

  return (
    <div className="min-h-screen text-[var(--foreground)]">
      <nav className="fixed top-0 z-50 w-full border-b border-[color:var(--line)]/70 bg-[color:var(--background)]/85 backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
          <div className="flex items-end gap-2">
            <span className="display text-2xl font-semibold leading-none">Rida Taki</span>
            <span className="mb-1 text-xs uppercase tracking-[0.2em] text-[color:var(--muted)]">Portfolio</span>
          </div>
          <a
            href="#contact"
            className="rounded-full border border-[color:var(--line)] bg-[color:var(--surface)] px-4 py-1.5 text-sm font-medium transition hover:border-[color:var(--brand)]"
          >
            Let&apos;s talk
          </a>
        </div>
      </nav>

      <main className="mx-auto max-w-6xl space-y-24 px-6 pb-20 pt-28 md:space-y-28 md:pt-32">
        <section id="about" className="grid items-center gap-10 md:grid-cols-[1.2fr_1fr]">
          <div className="space-y-7 reveal">
            <div className="inline-flex items-center gap-2 rounded-full border border-[color:var(--line)] bg-[color:var(--surface)] px-4 py-1.5 text-xs uppercase tracking-[0.16em] text-[color:var(--muted)]">
              <Sparkles size={14} /> Available for projects
            </div>
            <h1 className="display text-6xl leading-[0.88] sm:text-7xl md:text-8xl">
              I build digital products with soul and structure.
            </h1>
            <p className="max-w-xl text-lg leading-relaxed text-[color:var(--muted)] sm:text-xl">
              Full stack and mobile developer focused on clean architecture, fast APIs, and interfaces people actually enjoy using.
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 rounded-2xl bg-[color:var(--brand)] px-6 py-3 font-medium text-white transition hover:bg-[color:var(--brand-soft)]"
              >
                View projects <ArrowRight size={16} />
              </a>
              <a
                href="#contact"
                className="rounded-2xl border border-[color:var(--line)] bg-[color:var(--surface)] px-6 py-3 font-medium transition hover:border-[color:var(--brand)]"
              >
                Contact me
              </a>
            </div>
          </div>

          <div className="paper reveal relative rounded-[2rem] p-4 sm:p-6">
            <div className="soft-grid absolute inset-0 rounded-[2rem] opacity-40" />
            <div className="relative aspect-[4/5] overflow-hidden rounded-[1.3rem] border border-white/40">
              <Image
                src="/image.png"
                alt="Rida Taki"
                fill
                className="object-cover"
                priority
              />
            </div>
            <p className="relative mt-4 text-sm tracking-wide text-[color:var(--muted)]">
              Based in Morocco. Building with Java, Spring, Kotlin, and React.
            </p>
          </div>
        </section>

        <div className="ticker">
          <div className="ticker-track text-sm uppercase tracking-[0.18em] text-[color:var(--muted)]">
            {[...tickerItems, ...tickerItems].map((item, index) => (
              <span key={`${item}-${index}`}>{item}</span>
            ))}
          </div>
        </div>

        <section id="skills" className="space-y-8">
          <h2 className="section-title">Technical Palette</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills.map((skill) => (
              <div key={skill.category} className="paper rounded-[1.6rem] p-7">
                <h3 className="mb-4 text-lg font-semibold text-[color:var(--brand)]">{skill.category}</h3>
                <div className="flex flex-wrap gap-2">
                  {skill.items.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-[color:var(--line)] bg-white/70 px-3 py-1 text-xs font-medium"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="projects" className="space-y-8">
          <h2 className="section-title">Selected Work</h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {projects.map((project) => (
              <article key={project.name} className="paper project-card rounded-[1.8rem] p-5 sm:p-6">
                <div className="relative mb-5 aspect-video overflow-hidden rounded-xl border border-[color:var(--line)]">
                  <Image
                    src={project.image}
                    alt={project.name}
                    fill
                    className="object-cover transition duration-500 hover:scale-105"
                  />
                </div>
                <h3 className="mb-2 text-2xl font-semibold">{project.name}</h3>
                <p className="mb-5 leading-relaxed text-[color:var(--muted)]">{project.description}</p>
                <div className="mb-6 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-[color:var(--line)] bg-[color:var(--surface)] px-3 py-1 text-xs font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 font-medium text-[color:var(--brand)] transition hover:gap-3"
                >
                  View on GitHub <ArrowRight size={18} />
                </a>
              </article>
            ))}
          </div>
        </section>

        <section id="education" className="space-y-8">
          <h2 className="section-title">Education</h2>
          <div className="space-y-5">
            {education.map((edu) => (
              <div
                key={edu.institution}
                className="paper flex flex-col justify-between gap-4 rounded-[1.4rem] p-6 sm:flex-row sm:items-center"
              >
                <div>
                  <h3 className="text-xl font-semibold">{edu.degree}</h3>
                  <p className="text-[color:var(--muted)]">{edu.institution}</p>
                </div>
                <span className="rounded-xl border border-[color:var(--line)] bg-[color:var(--surface-strong)] px-4 py-2 text-sm font-medium">
                  {edu.period}
                </span>
              </div>
            ))}
          </div>
        </section>

        <section id="contact" className="paper rounded-[2rem] p-8 sm:p-12">
          <div className="grid gap-8 md:grid-cols-[1.2fr_1fr] md:items-end">
            <div className="space-y-4">
              <h2 className="section-title">Let&apos;s Build Something Strong</h2>
              <p className="max-w-2xl text-lg leading-relaxed text-[color:var(--muted)]">
                I&apos;m open to internships, freelance missions, and collaborative product work.
                If you need a reliable developer who can move from backend architecture to polished interfaces, I&apos;m ready.
              </p>
            </div>
            <div className="space-y-4 rounded-2xl border border-[color:var(--line)] bg-white/60 p-6">
              <a
                href="mailto:takirida72@gmail.com"
                className="inline-flex items-center gap-3 text-base font-medium transition hover:text-[color:var(--brand)]"
              >
                <Mail size={18} /> takirida72@gmail.com
              </a>
              <p className="inline-flex items-center gap-3 text-base font-medium">
                <Phone size={18} /> +212 649 487 957
              </p>
              <div className="flex gap-4 pt-2 text-[color:var(--muted)]">
                <a
                  href="https://github.com/Rida1019-taki"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition hover:text-[color:var(--brand)]"
                >
                  <FaGithub size={22} />
                </a>
                <a
                  href="https://www.linkedin.com/in/rida-taki-bb44a8350"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition hover:text-[color:var(--brand)]"
                >
                  <FaLinkedin size={22} />
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="mx-auto mt-4 flex w-full max-w-6xl justify-center border-t border-[color:var(--line)] px-6 py-10 text-sm text-[color:var(--muted)]">
        <p>© 2026 Rida Taki. Crafted with intention.</p>
      </footer>
    </div>
  );
}

