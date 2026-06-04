import { ArrowRight, Mail, Terminal, Link, Rocket } from "lucide-react";
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
      tags: ["Java", "Spring Boot", "Docker", "Spring Security", "Hibernate", "Flayway", "Maven", "SQL",
        "Drived Query", "Architecture MVC", "REST API", "DTO & Mapper (mapstruct)", "Junit", "Docker",
        "Swagger", "Git & Gitignore", "Spring Security", "JWT", "Authentification utilisateur", "Pagination", "Sorting", "Filtering"],
      image: "/healthcare.png",
      github: "https://github.com/ENAA-School-Student/HealthCare-Syst-me-de-Gestion_M-dicale.git"
    },
    {
      name: "FleetFlow",
      description: "Ce projet consiste à développer un système de gestion logistique permettant d’administrer les clients, les chauffeurs, les véhicules et les livraisons.",
      tags: ["Java", "Spring Boot", "Spring Data JPA", "DTO", "MapStruct",
        "Docker", "Lombok", "MySQL", "Swagger", "Flyway", "Github Actions", "Test Unitaires",
        "Spring Security", "JWT", "Pagination", "Sorting", "Filtering"],
      image: "/fleetflow.png",
      github: "https://github.com/NihadHub/fleetFlow.git"
    },
    {
      name: "ISTA OUED-ZEM",
      description: "Educational mobile application providing digital resources and campus information for students.",
      tags: ["Kotlin", "SQLite"],
      image: "/istaouedzem.png",
      github: "https://github.com/Rida1019-taki/ISTA-OUED-ZEM.git"
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

  return (
    <div className="relative min-h-screen bg-zinc-50 dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100 selection:bg-indigo-200 dark:selection:bg-indigo-900">
      {/* Organic Background Blobs */}
      <div className="absolute top-[-10%] left-[-10%] w-[400px] h-[400px] bg-purple-200 dark:bg-purple-900/20 blob animate-float" />
      <div className="absolute bottom-[-5%] right-[-5%] w-[500px] h-[500px] bg-indigo-200 dark:bg-indigo-900/20 blob animate-float" style={{ animationDelay: '-2s' }} />

      <nav className="fixed top-0 w-full z-50 backdrop-blur-md border-b border-zinc-200/50 dark:border-zinc-800/50">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <span className="font-bold tracking-tighter text-xl">RIDA TAKI</span>
          <div className="hidden md:flex gap-8 text-sm font-medium">
            <a href="#about" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">About</a>
            <a href="#skills" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">Skills</a>
            <a href="#projects" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">Projects</a>
            <a href="#education" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">Education</a>
            <a href="#contact" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">Contact</a>
          </div>
        </div>
      </nav>

      <main className="max-w-6xl mx-auto px-6 pt-32 pb-20">
        {/* Hero Section */}
        <section id="about" className="flex flex-col md:flex-row gap-12 items-center mb-32">
          <div className="flex-1 space-y-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-100 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300 text-xs font-bold uppercase tracking-wider">
              <Rocket size={14} /> Available for new projects
            </div>
            <h1 className="text-6xl md:text-8xl font-black tracking-tight leading-[0.9]">
              Full Stack <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">Developer</span>
            </h1>
            <p className="text-xl text-zinc-600 dark:text-zinc-400 max-w-lg leading-relaxed">
              I am Rida Taki, a passionate Web & Mobile developer. I build robust digital experiences with Java, Spring Boot, and modern mobile technologies.
            </p>
            <div className="flex gap-4">
              <a href="#contact" className="px-8 py-4 bg-zinc-900 dark:bg-zinc-100 text-zinc-50 dark:text-zinc-950 rounded-2xl font-bold hover:scale-105 transition-transform flex items-center gap-2">
                Let&apos;s Talk <ArrowRight size={18} />
              </a>
            </div>
          </div>
          <div className="flex-1 relative">
            <div className="w-full aspect-square bg-zinc-200 dark:bg-zinc-900 rounded-[2rem] rotate-3 animate-float overflow-hidden shadow-2xl relative">
              <Image
                src="/photo.jpg"
                alt="Rida Taki"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="mb-32 space-y-12">
          <div className="flex justify-between items-end">
            <h2 className="text-4xl font-bold tracking-tight">Technical Skills</h2>
            <div className="w-24 h-1 bg-indigo-600 rounded-full" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills.map((skill) => (
              <div key={skill.category} className="p-8 rounded-[2rem] border border-zinc-200 dark:border-zinc-800 bg-white/50 dark:bg-zinc-900/50 backdrop-blur-sm">
                <h3 className="text-lg font-bold mb-4 text-indigo-600 dark:text-indigo-400">{skill.category}</h3>
                <div className="flex flex-wrap gap-2">
                  {skill.items.map((item) => (
                    <span key={item} className="px-3 py-1 bg-zinc-100 dark:bg-zinc-800 rounded-full text-xs font-medium">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="mb-32 space-y-12">
          <div className="flex justify-between items-end">
            <h2 className="text-4xl font-bold tracking-tight">Selected Works</h2>
            <div className="w-24 h-1 bg-indigo-600 rounded-full" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, i) => (
              <div key={project.name} className={`group relative p-8 rounded-[2rem] border border-zinc-200 dark:border-zinc-800 hover:border-indigo-500/50 transition-all duration-500 ${i % 2 === 1 ? 'md:mt-12' : ''}`}>
                <div className="aspect-video bg-zinc-200 dark:bg-zinc-900 rounded-xl mb-6 overflow-hidden relative">
                  <Image
                    src={project.image}
                    alt={project.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                </div>
                <h3 className="text-2xl font-bold mb-2">{project.name}</h3>
                <p className="text-zinc-600 dark:text-zinc-400 mb-6 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex gap-2 mb-8 flex-wrap">
                  {project.tags.map((t, i) => (
                    <span key={i} className="px-3 py-1 bg-zinc-100 dark:bg-zinc-900 rounded-full text-xs font-medium">
                      {t}
                    </span>
                  ))}
                </div>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 font-bold text-indigo-600 dark:text-indigo-400 group-hover:gap-4 transition-all"
                >
                  View on GitHub <ArrowRight size={18} />
                </a>
              </div>
            ))}
          </div>
        </section>

        {/* Education Section */}
        <section id="education" className="mb-32 space-y-12">
          <div className="flex justify-between items-end">
            <h2 className="text-4xl font-bold tracking-tight">Education</h2>
            <div className="w-24 h-1 bg-indigo-600 rounded-full" />
          </div>
          <div className="space-y-6">
            {education.map((edu) => (
              <div key={edu.institution} className="p-8 rounded-[2rem] border border-zinc-200 dark:border-zinc-800 flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                  <h3 className="text-xl font-bold">{edu.degree}</h3>
                  <p className="text-zinc-600 dark:text-zinc-400">{edu.institution}</p>
                </div>
                <span className="px-4 py-2 bg-indigo-50 dark:bg-indigo-900/20 text-indigo-600 dark:text-indigo-400 rounded-xl text-sm font-bold">
                  {edu.period}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* Contact Section */}
<section
  id="contact"
  className="p-12 rounded-[3rem] bg-indigo-600 text-white overflow-hidden relative"
>
  <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 blob" />

  <div className="relative z-10 space-y-8 max-w-2xl">
    <h2 className="text-5xl font-black leading-tight">
      Let's Work Together
    </h2>

    <p className="text-indigo-100 text-xl leading-relaxed">
      I&apos;m always open to discussing new projects, creative ideas or opportunities to be part of your visions. Reach out via email or phone.
    </p>

    <div className="flex flex-col gap-4">
      <a
        href="mailto:takirida72@gmail.com"
        className="inline-flex items-center gap-4 text-2xl font-bold hover:underline underline-offset-8 transition-all"
      >
        <Mail size={32} /> takirida72@gmail.com
      </a>

      <div className="inline-flex items-center gap-4 text-xl font-medium text-indigo-100">
        (212) 0649487957
      </div>

      {/* Social Icons */}
      <div className="flex gap-6 mt-4">
        <a
          href="https://github.com/Rida1019-taki"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:scale-110 transition-transform"
        >
          <FaGithub size={24} />
        </a>

        <a
          href="https://www.linkedin.com/in/rida-taki-bb44a8350"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:scale-110 transition-transform"
        >
          <FaLinkedin size={24} />
        </a>
      </div>
    </div>
  </div>
</section>

</main>

{/* Footer */}
<footer className="max-w-6xl mx-auto px-6 py-12 border-t border-zinc-200 dark:border-zinc-800 text-sm text-zinc-500 flex justify-center items-center">
  <p>© 2026 Rida Taki. Crafted with care.</p>
</footer>
</div>
);
}

