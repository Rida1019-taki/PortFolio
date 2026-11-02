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
    foottech: {
      title: string;
      desc: string;
    };
    rally: {
      title: string;
      desc: string;
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
      desc: "From resilient backends to fluid mobile applications — these are the core tools and frameworks I rely on daily.",
      skillsSuffix: "Skills",
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
      badge: "Competitive Coding",
      title1: "Innovation &",
      title2: "Hackathons.",
      desc: "Fast-paced challenges that sharpen my problem-solving skills, rapid prototyping, and collaborative engineering under high pressure.",
      projectTag: "Hackathon Project",
      foottech: {
        title: "FootTech National Hackathon 2026",
        desc: "Finalist in the national sports-tech hackathon. Developed an innovative technical solution under high-pressure constraints.",
      },
      rally: {
        title: "Hackathon Rally AI & Innovation",
        desc: "Participated in an intensive algorithmic and AI challenge focusing on automated data processing and machine learning workflows.",
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
      desc: "Des architectures backend résilientes aux applications mobiles fluides — voici l'ensemble de mes outils et frameworks quotidiens.",
      skillsSuffix: "Compétences",
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
      badge: "Coding Compétitif",
      title1: "Innovation &",
      title2: "Hackathons.",
      desc: "Défis intensifs qui affûtent ma résolution de problèmes, mon prototypage rapide et l'esprit d'équipe sous contrainte.",
      projectTag: "Projet de Hackathon",
      foottech: {
        title: "Hackathon National FootTech 2026",
        desc: "Finaliste du hackathon national sport & technologie. Conception et implémentation d'une solution innovante sous fortes contraintes de temps.",
      },
      rally: {
        title: "Hackathon Rally AI & Innovation",
        desc: "Participation à un challenge d'innovation et d'IA axé sur l'automatisation, le traitement de données et les flux intelligents.",
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
