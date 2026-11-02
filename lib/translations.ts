export type Language = "en" | "fr";

export interface TranslationSchema {
  nav: {
    about: string;
    skills: string;
    work: string;
    experience: string;
    education: string;
    hackathons: string;
    resume: string;
    contact: string;
    letsTalk: string;
    roleTitle: string;
  };
  hero: {
    statusBadge: string;
    location: string;
    line1: string;
    line2: string;
    line3: string;
    typewriterRoles: string[];
    aboutBadge: string;
    aboutBio: string;
    projectsMetric: string;
    stackMetric: string;
    certsMetric: string;
    exploreBtn: string;
    talkBtn: string;
  };
  tickerItems: string[];
  skills: {
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
    categories: {
      languages: string;
      mobile: string;
      web: string;
      databases: string;
      tools: string;
    };
  };
  work: {
    badge: string;
    title1: string;
    title2: string;
    desc: string;
    healthcare: {
      tag: string;
      domain: string;
      subtitle: string;
      desc: string;
      badge: string;
    };
    logitrack: {
      tag: string;
      domain: string;
      subtitle: string;
      desc: string;
    };
    fleetflow: {
      tag: string;
      domain: string;
      subtitle: string;
      desc: string;
    };
    btnBackend: string;
    btnFrontend: string;
    btnRepo: string;
  };
  experience: {
    badge: string;
    title1: string;
    title2: string;
    desc: string;
    skaii: {
      role: string;
      service: string;
      period: string;
      currentBadge: string;
      desc: string;
      responsibilitiesTitle: string;
      responsibilities: string[];
      techLabel: string;
    };
  };
  education: {
    badge: string;
    title1: string;
    title2: string;
    desc: string;
    degreeType: string;
    activeBadge: string;
    secondaryType: string;
    bts: {
      degree: string;
      institution: string;
      period: string;
    };
    bac: {
      degree: string;
      institution: string;
      period: string;
    };
  };
  certifications: {
    badge: string;
    title1: string;
    title2: string;
    desc: string;
    verifiedBadge: string;
    btnPdf: string;
    items: {
      cyber: { title: string; issuer: string };
      hardware: { title: string; issuer: string };
      python: { title: string; issuer: string };
    };
  };
  hackathons: {
    badge: string;
    title1: string;
    title2: string;
    desc: string;
    projectTag: string;
    roleLabel: string;
    impactLabel: string;
    teamLabel: string;
    formatLabel: string;
    photosLabel: string;
    activeBadge: string;
    viewAllPhotos: string;
    inActionBadge: string;
    hacktoberfest: {
      title: string;
      desc: string;
      tag: string;
      date: string;
      role: string;
      roleDetails: string[];
      certificateLabel: string;
      quote: string;
      photoCaptions: string[];
    };
    foottech: {
      title: string;
      desc: string;
      tag: string;
      date: string;
      role: string;
      roleDetails: string[];
      certificateLabel?: string;
      quote: string;
      photoCaptions: string[];
    };
    rally: {
      title: string;
      desc: string;
      tag: string;
      date: string;
      role: string;
      roleDetails: string[];
      quote: string;
      photoCaptions: string[];
    };
  };
  resume: {
    badge: string;
    title1: string;
    title2: string;
    desc: string;
    btnDownload: string;
  };
  contact: {
    badge: string;
    title1: string;
    title2: string;
    desc: string;
    socialsHeader: string;
    formTitle: string;
    formDirect: string;
    labelName: string;
    placeholderName: string;
    labelEmail: string;
    placeholderEmail: string;
    labelSubject: string;
    placeholderSubject: string;
    labelMessage: string;
    placeholderMessage: string;
    btnSend: string;
    btnSending: string;
    toastSuccessTitle: string;
    toastSuccessDesc: string;
    toastErrorTitle: string;
    toastErrorDesc: string;
  };
  mobileMenu: {
    directContact: string;
    socialChannels: string;
    languageTitle: string;
    credit: string;
    location: string;
  };
  footer: {
    rights: string;
    tagline: string;
  };
}

export const translations: Record<Language, TranslationSchema> = {
  en: {
    nav: {
      about: "About",
      skills: "Skills",
      work: "Work",
      experience: "Experience",
      education: "Education",
      hackathons: "Hackathons",
      resume: "Resume",
      contact: "Contact",
      letsTalk: "LET'S TALK",
      roleTitle: "DEVELOPER",
    },
    hero: {
      statusBadge: "Open to New Opportunities",
      location: "Beni Mellal, Morocco",
      line1: "Crafting digital",
      line2: "experiences that",
      line3: "truly matter.",
      typewriterRoles: [
        "Full Stack Developer",
        "Spring Boot & Java Architect",
        "React & Modern UI Builder",
        "Mobile App Engineer",
        "Clean Code Advocate",
      ],
      aboutBadge: "About Me",
      aboutBio:
        "Junior Developer specializing in Java, Spring Boot, React, and Kotlin. Passionate about building clean API architectures, efficient databases, and functional user interfaces.",
      projectsMetric: "Projects",
      stackMetric: "Tech Stack",
      certsMetric: "Certs",
      exploreBtn: "Explore Projects",
      talkBtn: "LET'S TALK",
    },
    tickerItems: [
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
    ],
    skills: {
      badge: "Technical Arsenal",
      title1: "Architecting with",
      title2: "modern precision.",
      desc: "From scalable enterprise backends to reactive web platforms and native mobile apps — engineering solutions with precision, clean code, and production resilience.",
      skillsSuffix: "Skills",
      filterAll: "All Technologies",
      filterBackend: "Backend & APIs",
      filterFrontend: "Frontend & Web",
      filterMobile: "Mobile Apps",
      filterDatabases: "Databases & ORM",
      filterDevops: "DevOps & Tools",
      levelCore: "Core Stack",
      levelAdvanced: "Advanced",
      levelProficient: "Proficient",
      pillarsTitle: "Engineering Pillars",
      pillarsSubtitle: "Core architectural specializations",
      standardsTitle: "Architecture & Engineering Standards",
      standardsSubtitle: "Core software engineering principles applied across all projects",
      pillars: {
        backend: {
          title: "Enterprise Backend & Distributed APIs",
          subtitle: "Spring Boot • Java • Spring Security • REST",
          desc: "Designing resilient RESTful microservices and monoliths with Clean Architecture, robust JWT authentication, role authorization, and transaction safety.",
        },
        frontend: {
          title: "Reactive Web & Modern User Interfaces",
          subtitle: "React • Next.js • TypeScript • Tailwind",
          desc: "Crafting fluid, high-performance web dashboards and interactive clients with responsive layouts, modern state management, and accessible UI components.",
        },
        mobile: {
          title: "Native & Cross-Platform Mobile",
          subtitle: "Kotlin • Flutter • Dart • Android",
          desc: "Developing native Android apps in Kotlin and fluid cross-platform solutions with Flutter, delivering offline-first experiences and smooth animations.",
        },
        dataDevops: {
          title: "Data Modeling & Automated DevOps",
          subtitle: "MySQL • SQLite • Docker • GitHub Actions",
          desc: "Ensuring ACID-compliant relational schema designs, query optimization, containerized isolated deployments, and automated CI/CD pipelines.",
        },
      },
      standards: {
        cleanArch: {
          title: "Clean Architecture & SOLID",
          desc: "Separation of concerns, decoupled domain logic, and high testability across all layers.",
        },
        security: {
          title: "Security by Design",
          desc: "Stateless JWT tokens, role-based access control (RBAC), and strict input validation.",
        },
        performance: {
          title: "Performance & Efficiency",
          desc: "Indexed database queries, lean bundle footprints, and non-blocking asynchronous workflows.",
        },
        devops: {
          title: "Containerized & Automated",
          desc: "Repeatable Docker environments and automated GitHub Actions verification pipelines.",
        },
      },
      categories: {
        languages: "Languages",
        mobile: "Mobile Dev",
        web: "Web & Frameworks",
        databases: "Databases",
        tools: "Tools & DevOps",
      },
    },
    work: {
      badge: "Featured Work",
      title1: "Selected",
      title2: "Projects",
      desc: "A curated selection of full-stack applications and software architectures built with engineering rigor, high performance, and clean design.",
      healthcare: {
        tag: "01 • FEATURED",
        domain: "Healthcare & Medical System",
        subtitle: "Medical Management Platform",
        desc: "Full-stack hospital management platform composed of a secure Spring Boot REST API and a modern React frontend. Features comprehensive patient records, doctor scheduling, responsive analytics dashboards, and containerized Docker deployment.",
        badge: "Hospital Management System",
      },
      logitrack: {
        tag: "02 • LOGISTICS",
        domain: "Supply Chain Platform",
        subtitle: "Logistics & Supply Chain Management",
        desc: "Full-stack logistics management platform featuring multi-role access control (ADMIN, MANAGER, AGENT), real-time order tracking, server-side pagination, and a reactive Material UI interface.",
      },
      fleetflow: {
        tag: "03 • FLEET & DEVOPS",
        domain: "Enterprise Logistics",
        subtitle: "Fleet Management & CI/CD",
        desc: "Vehicle fleet and delivery orchestration system built with strict MapStruct DTO architecture, automated GitHub Actions CI/CD pipelines, and interactive Swagger/OpenAPI documentation.",
      },
      btnBackend: "Backend Code",
      btnFrontend: "Frontend Code",
      btnRepo: "View Repository",
    },
    experience: {
      badge: "Career & Professional Path",
      title1: "Work",
      title2: "Experience.",
      desc: "Professional journey and engineering impact in modern full-stack web and software development.",
      skaii: {
        role: "Role: DÉVELOPPEUR INFORMATIQUE",
        service: "Department: DÉVELOPPEUR WEB",
        period: "15/10/2026 — Present",
        currentBadge: "Current",
        desc: "Developing enterprise web applications and robust backend services utilizing React and Spring Boot. Designing normalized relational schemas and scalable REST endpoints.",
        responsibilitiesTitle: "// Core Responsibilities & Impact",
        responsibilities: [
          "Developing responsive client-side interfaces and dynamic modules using React.",
          "Architecting secure, modular backend APIs using Spring Boot and Java.",
          "Designing and optimizing relational databases with MySQL, Hibernate, and JPA.",
          "Implementing version control workflows and collaborative features via Git.",
        ],
        techLabel: "Technologies :",
      },
    },
    education: {
      badge: "Education & Credentials",
      title1: "Academic",
      title2: "Background.",
      desc: "Solid engineering foundations combined with specialized modern software development.",
      degreeType: "Degree Program",
      activeBadge: "Active",
      secondaryType: "Secondary Education",
      bts: {
        degree: "BTS in Information Systems Development (DSI)",
        institution: "Lycée Technique — Beni Mellal, Morocco",
        period: "2024 — Present",
      },
      bac: {
        degree: "Baccalauréat in Physical Sciences",
        institution: "Lycée Qualifiant Hassan II — Beni Mellal, Morocco",
        period: "2023 — 2024",
      },
    },
    certifications: {
      badge: "Verified Credentials",
      title1: "Professional",
      title2: "Certifications.",
      desc: "Industry-recognized Cisco certifications validating networking, security, and foundational programming skills.",
      verifiedBadge: "Verified",
      btnPdf: "View PDF Certificate",
      items: {
        cyber: {
          title: "Introduction to Cybersecurity",
          issuer: "Cisco Networking Academy",
        },
        hardware: {
          title: "IT Hardware & Computing Fundamentals",
          issuer: "Cisco Networking Academy",
        },
        python: {
          title: "Python Essentials 1",
          issuer: "Cisco Networking Academy",
        },
      },
    },
    hackathons: {
      badge: "In the Arena • Live Hackathons & Sprints",
      title1: "Rida in Action &",
      title2: "Hackathons.",
      desc: "Beyond theoretical code: transforming complex problems into scalable, production-ready solutions under intense 24h-48h collaborative hackathon sprints.",
      projectTag: "Hackathon Project",
      roleLabel: "My Engineering Role",
      impactLabel: "Key Contributions & Impact",
      teamLabel: "Agile Team Collaboration",
      formatLabel: "In-Person Sprint",
      photosLabel: "Live Event Gallery & Credentials",
      activeBadge: "Featured Event",
      viewAllPhotos: "Click any photo to open 4K Lightbox",
      inActionBadge: "Rida Taki in Action",
      hacktoberfest: {
        title: "Hacktoberfest Hack Day Beni Mellal 2026",
        desc: "Participated in person in the Hacktoberfest Hack Day organized in collaboration with the Robotics & AI Club FPBM (powered by MLH & DigitalOcean). Explored open-source development, collaborative innovation, and modern software architectures.",
        tag: "Open Source & Tech Event • MLH × DigitalOcean",
        date: "Oct 28, 2026",
        role: "Full Stack Developer & Open Source Contributor",
        quote: "Keep learning, keep building, keep innovating!",
        certificateLabel: "View Official Attendance Certificate",
        roleDetails: [
          "Hands-on coding, explore modern Java & Spring Boot enterprise architectures",
          "Collaborative exchange with AI, robotics engineers, and open-source contributors",
          "Official Certificate of Attendance issued by DigitalOcean & MLH",
        ],
        photoCaptions: [
          "Rida at work station with developer stickers (Docker, Go, Linux)",
          "Writing notes and architectural design concepts during sessions",
          "Lecture hall presentation and VS Code open on laptop",
          "Official Certificate of Attendance (MLH × DigitalOcean)",
        ],
      },
      foottech: {
        title: "FootTech National Hackathon 2026",
        desc: "National sports & technology hackathon finalist. Led the technical development of a full-stack digital solution combining robust Spring Boot REST services, reactive React dashboard, and mobile integration with Flutter under intense time pressure.",
        tag: "National Competition • Finalist",
        date: "2026",
        role: "Lead Full Stack & Mobile Architect",
        quote: "Designing scalable architectures and turning team ideas into a working MVP under high pressure.",
        certificateLabel: "View Project Showcase",
        roleDetails: [
          "Backend & API Architecture: Spring Boot REST APIs and relational MySQL data modeling",
          "Frontend & Mobile: Reactive React UI and cross-platform mobile views in Flutter",
          "Team leadership, rapid agile sprint execution, and final solution pitch",
        ],
        photoCaptions: [
          "Rida discussing system architecture and user flows with teammate",
          "Deep focus: drafting data models and technical specifications",
          "Full 5-member team around the hackathon workspace table",
          "Official FootTech project showcase poster",
        ],
      },
      rally: {
        title: "Hackathon Rally AI & Innovation",
        desc: "Participated in an intensive algorithmic and AI challenge focusing on automated data processing, smart REST endpoints, and machine learning workflows.",
        tag: "AI & Innovation Challenge",
        date: "2026",
        role: "Algorithm & Backend Developer",
        quote: "Accelerating problem-solving with smart data pipelines and machine learning.",
        roleDetails: [
          "Automated data workflows and backend endpoints with FastAPI & Python",
          "Prototyping predictive algorithms and feature extraction pipelines",
          "High-pressure teamwork delivering functional data-driven outputs",
        ],
        photoCaptions: [
          "Rally AI & Innovation official challenge banner",
        ],
      },
    },
    resume: {
      badge: "Official Curriculum Vitae",
      title1: "Ready to work",
      title2: "together?",
      desc: "Download my latest CV to explore my technical skills, academic background, and full project history in detail.",
      btnDownload: "Download Resume (PDF)",
    },
    contact: {
      badge: "Get In Touch",
      title1: "Let's build something",
      title2: "remarkable together.",
      desc: "I'm open to internships, freelance missions, and collaborative product work. If you need a developer who cares about both solid architecture and intuitive user experience — let's talk.",
      socialsHeader: "Connect via Socials",
      formTitle: "Send Message",
      formDirect: "// Direct Mail",
      labelName: "Full Name",
      placeholderName: "John Doe",
      labelEmail: "Email Address",
      placeholderEmail: "john@example.com",
      labelSubject: "Subject",
      placeholderSubject: "Project Inquiry / Opportunity",
      labelMessage: "Your Message",
      placeholderMessage: "Tell me about your project or offer...",
      btnSend: "Send Message",
      btnSending: "Sending...",
      toastSuccessTitle: "Message sent!",
      toastSuccessDesc: "Your email has been delivered successfully.",
      toastErrorTitle: "Failed to send message",
      toastErrorDesc: "Please try again or email me directly at takirida72@gmail.com",
    },
    mobileMenu: {
      directContact: "// Direct Contact",
      socialChannels: "// Social Channels",
      languageTitle: "// Language / Langue",
      credit: "DESIGN & CODE BY RIDA TAKI",
      location: "BENI MELLAL, MOROCCO",
    },
    footer: {
      rights: "All rights reserved.",
      tagline: "Architected with precision & passion",
    },
  },
  fr: {
    nav: {
      about: "À Propos",
      skills: "Compétences",
      work: "Projets",
      experience: "Expérience",
      education: "Formation",
      hackathons: "Hackathons",
      resume: "CV",
      contact: "Contact",
      letsTalk: "CONTACTEZ-MOI",
      roleTitle: "DÉVELOPPEUR",
    },
    hero: {
      statusBadge: "À l'écoute d'opportunités",
      location: "Béni Mellal, Maroc",
      line1: "Concevoir des",
      line2: "expériences digitales",
      line3: "qui font la différence.",
      typewriterRoles: [
        "Développeur Full Stack",
        "Architecte Spring Boot & Java",
        "Concepteur UI Réactive en React",
        "Ingénieur d'Applications Mobiles",
        "Adepte du Clean Code & Bonnes Pratiques",
      ],
      aboutBadge: "À Propos de Moi",
      aboutBio:
        "Développeur Junior spécialisé en Java, Spring Boot, React et Kotlin. Passionné par la conception d'architectures d'API propres, de bases de données performantes et d'interfaces utilisateur intuitives.",
      projectsMetric: "Projets",
      stackMetric: "Technologies",
      certsMetric: "Certificats",
      exploreBtn: "Explorer les Projets",
      talkBtn: "CONTACTEZ-MOI",
    },
    tickerItems: [
      "Clean Architecture",
      "Conception d'APIs RESTful",
      "Écosystème Spring Boot",
      "Architectures Modulaires",
      "Principes SOLID",
      "Automatisation CI/CD",
      "Conteneurisation Docker",
      "Optimisation Bases de Données",
      "Sécurité & Authentification JWT",
      "Haute Performance & Scalabilité",
    ],
    skills: {
      badge: "Arsenal Technique",
      title1: "Bâtir avec une",
      title2: "précision moderne.",
      desc: "Des architectures backend d'entreprise hautement scalables aux interfaces web réactives et applications mobiles fluides — concevoir des solutions robustes et pérennes.",
      skillsSuffix: "Compétences",
      filterAll: "Toutes les Technologies",
      filterBackend: "Backend & APIs",
      filterFrontend: "Frontend & Web",
      filterMobile: "Applications Mobiles",
      filterDatabases: "Bases de Données & ORM",
      filterDevops: "DevOps & Outils",
      levelCore: "Stack Principale",
      levelAdvanced: "Avancé",
      levelProficient: "Maîtrisé",
      pillarsTitle: "Piliers d'Ingénierie",
      pillarsSubtitle: "Domaines de spécialisation logicielle",
      standardsTitle: "Normes d'Architecture & Bonnes Pratiques",
      standardsSubtitle: "Principes rigoureux d'ingénierie logicielle appliqués à l'ensemble des projets",
      pillars: {
        backend: {
          title: "Backend Entreprise & APIs Distribuées",
          subtitle: "Spring Boot • Java • Spring Security • REST",
          desc: "Conception d'APIs RESTful sécurisées, architecture en couches (Clean Architecture), authentification JWT, autorisations fines et robustesse transactionnelle.",
        },
        frontend: {
          title: "Web Réactif & Interfaces Modernes",
          subtitle: "React • Next.js • TypeScript • Tailwind",
          desc: "Développement d'applications web réactives, de tableaux de bord dynamiques et d'interfaces intuitives alliant performance et fluidité visuelle.",
        },
        mobile: {
          title: "Ingénierie Mobile Native & Multiplateforme",
          subtitle: "Kotlin • Flutter • Dart • Android",
          desc: "Création d'applications Android natives en Kotlin et de solutions multiplateformes fluides avec Flutter, optimisées pour le mode hors-ligne.",
        },
        dataDevops: {
          title: "Modélisation de Données & DevOps Automatisé",
          subtitle: "MySQL • SQLite • Docker • GitHub Actions",
          desc: "Conception de schémas relationnels normalisés (ACID), conteneurisation Docker reproductible et automatisation des pipelines d'intégration continue.",
        },
      },
      standards: {
        cleanArch: {
          title: "Clean Architecture & SOLID",
          desc: "Séparation stricte des responsabilités, logique métier découplée et haute maintenabilité du code.",
        },
        security: {
          title: "Sécurité dès la Conception",
          desc: "Authentification stateless JWT, contrôle d'accès basé sur les rôles (RBAC) et validation rigoureuse des données.",
        },
        performance: {
          title: "Performance & Optimisation",
          desc: "Requêtes SQL indexées, structures légères et exécution non-bloquante pour des temps de réponse minimaux.",
        },
        devops: {
          title: "Conteneurisation & Automatisation",
          desc: "Environnements de développement et de production isolés sous Docker avec pipelines CI/CD fiables.",
        },
      },
      categories: {
        languages: "Langages",
        mobile: "Dév Mobile",
        web: "Web & Frameworks",
        databases: "Bases de Données",
        tools: "Outils & DevOps",
      },
    },
    work: {
      badge: "Projets Récents",
      title1: "Projets",
      title2: "Sélectionnés",
      desc: "Une sélection rigoureuse d'applications full-stack et d'architectures logicielles axées sur la performance, la robustesse et le design.",
      healthcare: {
        tag: "01 • VEDETTE",
        domain: "Système Médical & Santé",
        subtitle: "Plateforme Hospitalière Full-Stack",
        desc: "Plateforme complète de gestion médicale permettant l'administration centralisée des patients, médecins, consultations et dossiers médicaux, articulée autour d'une API REST Spring Boot robuste et d'un client React dynamique.",
        badge: "Gestion Médicale & Hospitalière",
      },
      logitrack: {
        tag: "02 • LOGISTIQUE",
        domain: "Plateforme Supply Chain",
        subtitle: "Système de Gestion Logistique",
        desc: "Plateforme de gestion logistique complète avec contrôle d'accès multi-rôles (ADMIN, MANAGER, AGENT), suivi en temps réel des commandes, pagination côté serveur et interface Material UI réactive.",
      },
      fleetflow: {
        tag: "03 • FLOTTE & DEVOPS",
        domain: "Gestion d'Entreprise",
        subtitle: "Gestion de Flotte Automobile & CI/CD",
        desc: "Système d'orchestration de flotte de véhicules et de livraisons avec architecture DTO MapStruct, pipelines CI/CD automatisés via GitHub Actions et documentation Swagger interactive.",
      },
      btnBackend: "Code Backend",
      btnFrontend: "Code Frontend",
      btnRepo: "Voir le Dépôt",
    },
    experience: {
      badge: "Parcours Professionnel",
      title1: "Expérience",
      title2: "Professionnelle.",
      desc: "Mon parcours professionnel et mes réalisations concrètes dans le développement web et logiciel moderne.",
      skaii: {
        role: "Poste : DÉVELOPPEUR INFORMATIQUE",
        service: "Service : DÉVELOPPEUR WEB",
        period: "15/10/2026 — Présent",
        currentBadge: "En poste",
        desc: "Développement d'applications web d'entreprise et de services backend robustes en utilisant React et Spring Boot. Conception de schémas relationnels et d'APIs REST scalables.",
        responsibilitiesTitle: "// Missions & Responsabilités Clés",
        responsibilities: [
          "Développement d'interfaces web réactives et de composants interactifs avec React.",
          "Architecture et implémentation d'APIs REST modulaires et sécurisées avec Spring Boot et Java.",
          "Conception et optimisation des bases de données relationnelles avec MySQL, Hibernate et JPA.",
          "Gestion des versions et workflows de travail collaboratif avec Git.",
        ],
        techLabel: "Technologies :",
      },
    },
    education: {
      badge: "Diplômes & Formation",
      title1: "Parcours",
      title2: "Académique.",
      desc: "Bases scientifiques et techniques solides combinées à une formation spécialisée en génie logiciel.",
      degreeType: "Diplôme d'État",
      activeBadge: "En cours",
      secondaryType: "Enseignement Secondaire",
      bts: {
        degree: "BTS en Développement des Systèmes d'Information (DSI)",
        institution: "Lycée Technique — Béni Mellal, Maroc",
        period: "2024 — Présent",
      },
      bac: {
        degree: "Baccalauréat en Sciences Physiques",
        institution: "Lycée Qualifiant Hassan II — Béni Mellal, Maroc",
        period: "2023 — 2024",
      },
    },
    certifications: {
      badge: "Certifications Vérifiées",
      title1: "Certifications",
      title2: "Professionnelles.",
      desc: "Certifications reconnues par l'industrie validant les compétences en réseaux, cybersécurité et programmation.",
      verifiedBadge: "Vérifié",
      btnPdf: "Voir le Certificat PDF",
      items: {
        cyber: {
          title: "Introduction à la Cybersécurité",
          issuer: "Cisco Networking Academy",
        },
        hardware: {
          title: "Les Bases du Matériel Informatique",
          issuer: "Cisco Networking Academy",
        },
        python: {
          title: "Python Essentials 1",
          issuer: "Cisco Networking Academy",
        },
      },
    },
    hackathons: {
      badge: "Sur le Terrain • Hackathons & Coding Compétitif",
      title1: "Rida en Action &",
      title2: "Hackathons.",
      desc: "Au-delà du code théorique : concevoir, prototyper et livrer des solutions robustes sous la pression des hackathons intensifs de 24h à 48h.",
      projectTag: "Projet de Hackathon",
      roleLabel: "Mon Rôle Clé",
      impactLabel: "Contributions & Réalisations",
      teamLabel: "Travail d'Équipe Agile",
      formatLabel: "Sprint en Présentiel",
      photosLabel: "Photos du Terrain & Attestations",
      activeBadge: "Événement en Vedette",
      viewAllPhotos: "Cliquez sur une photo pour l'agrandir en plein écran",
      inActionBadge: "Rida Taki sur le Terrain",
      hacktoberfest: {
        title: "Hacktoberfest Hack Day Béni Mellal 2026",
        desc: "Participation en présentiel au Hacktoberfest Hack Day organisé avec le Robotics & AI Club FPBM (partenaires officiels MLH & DigitalOcean). Une journée riche en live-coding, exploration d'architectures modernes en Java / Spring Boot et synergies autour de l'IA.",
        tag: "Événement Tech & Open Source • Partenaires MLH & DigitalOcean",
        date: "28 Octobre 2026",
        role: "Développeur Full Stack & Contributeur Open Source",
        quote: "Keep learning, keep building, keep innovating!",
        certificateLabel: "Voir l'Attestation Officielle de Participation",
        roleDetails: [
          "Immersion dans les standards open source et architectures d'entreprise Java / Spring Boot",
          "Échanges approfondis avec des passionnés et ingénieurs en IA et robotique",
          "Attestation officielle décernée par DigitalOcean & Major League Hacking (MLH)",
        ],
        photoCaptions: [
          "Rida au poste de travail avec ses stickers de dev (Docker, Go, Linux)",
          "Prise de notes stratégiques et modélisation logicielle pendant les sessions",
          "Vue de l'amphithéâtre avec présentation technique et code ouvert sur laptop",
          "Attestation officielle de participation délivrée par DigitalOcean × MLH",
        ],
      },
      foottech: {
        title: "Hackathon National FootTech 2026",
        desc: "Finaliste du hackathon national sport & technologie. Direction technique et développement intensif d'une solution complète combinant une architecture backend Spring Boot, des APIs REST sécurisées, un tableau de bord React et une interface mobile Flutter sous forte contrainte de temps.",
        tag: "Compétition Nationale • Finaliste",
        date: "2026",
        role: "Lead Développeur Full Stack & Mobile",
        quote: "Transformer une vision d'équipe en un MVP fonctionnel sous contrainte de temps.",
        certificateLabel: "Voir le Projet",
        roleDetails: [
          "Architecture Backend & APIs REST : conception Spring Boot et modélisation MySQL",
          "Interfaces Réactives & Mobile : dashboard React et vues cross-platform Flutter",
          "Coordination d'équipe, planification agile du sprint et pitch devant le jury",
        ],
        photoCaptions: [
          "Rida en discussion technique & architecture avec son coéquipier",
          "Concentration maximale : modélisation des entités et conception du système",
          "L'équipe au grand complet (5 membres) autour de la table de travail",
          "Affiche officielle de présentation du projet FootTech",
        ],
      },
      rally: {
        title: "Hackathon Rally AI & Innovation",
        desc: "Participation à un challenge d'innovation axé sur l'automatisation, l'intégration de flux intelligents et le prototypage rapide avec Python et FastAPI.",
        tag: "Challenge IA & Algorithmes",
        date: "2026",
        role: "Développeur Algorithmique & Backend",
        quote: "Accélérer la résolution de problèmes grâce aux pipelines de données intelligents.",
        roleDetails: [
          "Automatisation de flux de données et création d'APIs performantes avec FastAPI",
          "Expérimentation avec des modèles d'IA et de classification sous contrainte de temps",
          "Résolution algorithmique collaborative et livraison d'un prototype fonctionnel",
        ],
        photoCaptions: [
          "Bannière officielle du Hackathon Rally AI & Innovation",
        ],
      },
    },
    resume: {
      badge: "Curriculum Vitae Officiel",
      title1: "Prêt à",
      title2: "collaborer ?",
      desc: "Téléchargez mon CV actualisé pour découvrir en détail mes compétences techniques, mon parcours et mes projets.",
      btnDownload: "Télécharger mon CV (PDF)",
    },
    contact: {
      badge: "Me Contacter",
      title1: "Construisons quelque chose",
      title2: "de remarquable ensemble.",
      desc: "Je suis ouvert aux stages, missions freelance et opportunités d'emploi. Si vous recherchez un développeur passionné par les architectures solides et les interfaces soignées — échangeons.",
      socialsHeader: "Réseaux Professionnels",
      formTitle: "Envoyer un Message",
      formDirect: "// Contact Direct",
      labelName: "Nom & Prénom",
      placeholderName: "Votre nom complet",
      labelEmail: "Adresse Email",
      placeholderEmail: "nom@domaine.com",
      labelSubject: "Objet du Message",
      placeholderSubject: "Proposition de projet / Opportunité",
      labelMessage: "Votre Message",
      placeholderMessage: "Décrivez votre projet ou votre offre...",
      btnSend: "Envoyer le Message",
      btnSending: "Envoi en cours...",
      toastSuccessTitle: "Message envoyé !",
      toastSuccessDesc: "Votre message a été transmis avec succès.",
      toastErrorTitle: "Échec de l'envoi",
      toastErrorDesc: "Veuillez réessayer ou m'écrire directement à takirida72@gmail.com",
    },
    mobileMenu: {
      directContact: "// Contact Direct",
      socialChannels: "// Réseaux Sociaux",
      languageTitle: "// Langue / Language",
      credit: "DESIGN & CODE PAR RIDA TAKI",
      location: "BÉNI MELLAL, MAROC",
    },
    footer: {
      rights: "Tous droits réservés.",
      tagline: "Conçu avec précision & passion",
    },
  },
};
