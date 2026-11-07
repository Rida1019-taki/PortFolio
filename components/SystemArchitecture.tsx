"use client";

import React, { useState } from "react";
import {
  Layers,
  ShieldCheck,
  Server,
  Database,
  Cpu,
  Smartphone,
  Globe,
  ArrowRight,
  Code2,
  CheckCircle2,
  Zap,
  Activity,
  Copy,
  Check,
} from "lucide-react";
import { playClick } from "@/lib/sound";
import { toast } from "sonner";

interface ArchitectureNode {
  id: string;
  title: string;
  subtitle: string;
  icon: React.ComponentType<{ size?: number; className?: string }>;
  accentColor: string;
  glowColor: string;
  protocol: string;
  latency: string;
  responsibilities: string[];
  techStack: string[];
  codeSnippet: string;
}

const NODES: ArchitectureNode[] = [
  {
    id: "clients",
    title: "1. Client & Presentation Tier",
    subtitle: "Web UI & Mobile Applications",
    icon: Globe,
    accentColor: "#5a8fd4",
    glowColor: "rgba(90, 143, 212, 0.25)",
    protocol: "HTTPS / WSS • HTTP/2",
    latency: "< 25 ms",
    responsibilities: [
      "Client Web React.js & Next.js avec rendu réactif et state management optimisé",
      "Application mobile native Android (Kotlin) et cross-platform Flutter",
      "Intercepteurs Axios pour l'injection automatique des tokens JWT",
      "Validation côté client et gestion offline des requêtes",
    ],
    techStack: ["React 19", "Next.js", "TypeScript", "Kotlin", "Flutter", "Tailwind CSS"],
    codeSnippet: `// Axios HTTP Client with Automatic JWT Injection
const apiClient = axios.create({
  baseURL: "https://api.rida-taki.dev/v1",
  headers: { "Content-Type": "application/json" }
});

apiClient.interceptors.request.use((config) => {
  const token = localStorage.getItem("auth_token");
  if (token) config.headers.Authorization = \`Bearer \${token}\`;
  return config;
});`,
  },
  {
    id: "security",
    title: "2. API Gateway & Security Filter",
    subtitle: "Authentication, RBAC & Protection",
    icon: ShieldCheck,
    accentColor: "#D9A441",
    glowColor: "rgba(217, 164, 65, 0.25)",
    protocol: "Spring Security 6.3 • Bearer JWT",
    latency: "3.2 ms",
    responsibilities: [
      "Filtre OncePerRequestFilter pour la validation cryptographique des signatures JWT",
      "Contrôle d'accès basé sur les rôles (RBAC) : ROLE_ADMIN, ROLE_DOCTOR, ROLE_USER",
      "Isolation CORS stricte et protection contre les attaques CSRF & XSS",
      "Limitation du débit (Rate Limiting) et journalisation sécurisée des accès",
    ],
    techStack: ["Spring Security 6", "jjwt 0.12", "CORS Configuration", "BCrypt Hashing"],
    codeSnippet: `@Component
public class JwtAuthenticationFilter extends OncePerRequestFilter {
    @Autowired
    private JwtService jwtService;

    @Override
    protected void doFilterInternal(HttpServletRequest req, 
                                    HttpServletResponse res, 
                                    FilterChain chain) throws IOException, ServletException {
        final String authHeader = req.getHeader("Authorization");
        if (authHeader == null || !authHeader.startsWith("Bearer ")) {
            chain.doFilter(req, res);
            return;
        }
        final String jwt = authHeader.substring(7);
        if (jwtService.isTokenValid(jwt)) {
            SecurityContextHolder.getContext().setAuthentication(jwtService.getAuthentication(jwt));
        }
        chain.doFilter(req, res);
    }
}`,
  },
  {
    id: "services",
    title: "3. Business Logic & Domain Services",
    subtitle: "Spring Boot 3 REST Controllers & Services",
    icon: Server,
    accentColor: "#10B981",
    glowColor: "rgba(16, 185, 129, 0.25)",
    protocol: "RESTful JSON • Spring MVC",
    latency: "12.4 ms",
    responsibilities: [
      "Architecture en couches découplées : Controllers, Services Métiers, DTOs & Mappers",
      "Gestion transactionnelle déclarative (@Transactional) garantissant l'atomicité ACID",
      "Validation stricte des payloads entrants avec Bean Validation (JSR-380)",
      "Gestion centralisée des exceptions avec @RestControllerAdvice et DTOs d'erreur",
    ],
    techStack: ["Spring Boot 3.3", "Java 21 LTS", "MapStruct", "Jakarta Validation", "Lombok"],
    codeSnippet: `@Service
@Transactional
@RequiredArgsConstructor
public class PatientManagementService {
    private final PatientRepository patientRepository;
    private final PatientMapper patientMapper;

    public PatientResponseDTO registerPatient(@Valid PatientCreateDTO dto) {
        if (patientRepository.existsByCin(dto.getCin())) {
            throw new ResourceConflictException("Patient déjà enregistré avec ce CIN");
        }
        Patient patient = patientMapper.toEntity(dto);
        patient.setRegistrationDate(Instant.now());
        return patientMapper.toDto(patientRepository.save(patient));
    }
}`,
  },
  {
    id: "persistence",
    title: "4. ORM & Persistence Layer",
    subtitle: "Spring Data JPA & Hibernate 6",
    icon: Database,
    accentColor: "#e07040",
    glowColor: "rgba(224, 112, 64, 0.25)",
    protocol: "JDBC • HikariCP Pool",
    latency: "4.8 ms",
    responsibilities: [
      "Mapping objet-relationnel avancé avec Hibernate 6 et requêtes JPQL/Native optimisées",
      "Gestion intelligente des relations (@OneToMany, @ManyToMany) et prévention du problème N+1",
      "Pool de connexions ultra-performant HikariCP avec monitoring actif",
      "Auditing automatique (@CreatedDate, @LastModifiedBy) via JPA Auditing",
    ],
    techStack: ["Spring Data JPA", "Hibernate 6", "HikariCP", "Flyway Migration"],
    codeSnippet: `public interface PatientRepository extends JpaRepository<Patient, Long> {
    @Query("SELECT p FROM Patient p LEFT JOIN FETCH p.consultations WHERE p.id = :id")
    Optional<Patient> findByIdWithConsultations(@Param("id") Long id);

    @Query("SELECT new com.app.dto.PatientSummaryDTO(p.id, p.fullName, count(c)) " +
           "FROM Patient p LEFT JOIN p.consultations c GROUP BY p.id, p.fullName")
    Page<PatientSummaryDTO> findAllSummarized(Pageable pageable);
}`,
  },
  {
    id: "storage",
    title: "5. Data Storage & Relational Database",
    subtitle: "MySQL 8.0 & In-Memory Redis Cache",
    icon: Cpu,
    accentColor: "#A78BFA",
    glowColor: "rgba(167, 139, 250, 0.25)",
    protocol: "TCP/IP 3306 & Redis 6379",
    latency: "1.2 ms",
    responsibilities: [
      "Persistance relationnelle robuste avec moteur InnoDB, clés étrangères et index composites",
      "Transactions conformes aux normes ACID garantissant l'intégrité absolue des données",
      "Mise en cache intelligente Redis pour les sessions utilisateurs et requêtes fréquentes",
      "Stratégies de sauvegarde périodique et réplication sécurisée",
    ],
    techStack: ["MySQL 8.0", "Redis", "InnoDB", "B-Tree Indexes", "ACID Compliance"],
    codeSnippet: `-- MySQL 8.0 DDL Schema with Foreign Constraints & Composite Indexes
CREATE TABLE patients (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    cin VARCHAR(20) NOT NULL UNIQUE,
    full_name VARCHAR(150) NOT NULL,
    email VARCHAR(100),
    phone VARCHAR(30),
    status ENUM('ACTIVE', 'ARCHIVED', 'EMERGENCY') DEFAULT 'ACTIVE',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    INDEX idx_patient_lookup (cin, status)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;`,
  },
];

export default function SystemArchitecture() {
  const [activeNode, setActiveNode] = useState<ArchitectureNode>(NODES[1]); // Default to Security Gateway
  const [copied, setCopied] = useState(false);

  const handleCopyCode = () => {
    navigator.clipboard.writeText(activeNode.codeSnippet);
    setCopied(true);
    toast.success("Code source copié !");
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-black/85 backdrop-blur-2xl shadow-2xl p-6 sm:p-10 space-y-10">
      {/* Background Ambient Glow */}
      <div
        className="absolute top-1/3 left-1/2 -translate-x-1/2 h-72 w-[500px] rounded-full blur-[120px] pointer-events-none transition-all duration-700 opacity-40"
        style={{ backgroundColor: activeNode.glowColor }}
      />

      {/* Header */}
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 border-b border-white/10 pb-6">
        <div>
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-[#D9A441]/30 bg-[#D9A441]/10 px-3.5 py-1 text-xs font-mono font-semibold text-[#D9A441]">
              <Layers size={13} />
              <span>Full Stack System Design Architecture</span>
            </span>
            <span className="rounded-full border border-emerald-500/30 bg-emerald-500/10 px-2.5 py-0.5 text-[10px] font-mono text-emerald-400">
              Interactive
            </span>
          </div>
          <p className="text-xs sm:text-sm text-gray-400 font-mono mt-1">
            Explorez les 5 couches architecturales : de l&apos;interface utilisateur jusqu&apos;à la persistance ACID.
          </p>
        </div>

        <div className="flex items-center gap-2 text-xs font-mono text-gray-400">
          <Activity size={14} className="text-[#D9A441] animate-pulse" />
          <span>Flux de données continu • Latence moyenne : 18ms</span>
        </div>
      </div>

      {/* ─── INTERACTIVE ARCHITECTURE PIPELINE NODES ─── */}
      <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-3 relative">
        {NODES.map((node, idx) => {
          const isSelected = activeNode.id === node.id;
          const NodeIcon = node.icon;

          return (
            <button
              key={node.id}
              type="button"
              onClick={() => {
                playClick();
                setActiveNode(node);
              }}
              className={`group relative flex flex-col justify-between rounded-2xl border p-4 text-left transition-all duration-300 cursor-pointer ${
                isSelected
                  ? "border-[#D9A441] bg-[#D9A441]/10 shadow-[0_0_25px_rgba(217,164,65,0.3)] scale-[1.02]"
                  : "border-white/10 bg-white/[0.02] hover:border-white/20 hover:bg-white/[0.05]"
              }`}
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div
                    className="flex h-10 w-10 items-center justify-center rounded-xl border transition-transform group-hover:scale-110"
                    style={{
                      borderColor: `${node.accentColor}50`,
                      backgroundColor: `${node.accentColor}15`,
                      color: node.accentColor,
                    }}
                  >
                    <NodeIcon size={20} />
                  </div>
                  <span className="text-[10px] font-mono text-gray-500">0{idx + 1}</span>
                </div>

                <div>
                  <h4 className="text-xs font-bold font-mono text-white tracking-wide">
                    {node.title.replace(/^\d+\.\s*/, "")}
                  </h4>
                  <p className="text-[10px] text-gray-400 font-mono mt-0.5 line-clamp-1">
                    {node.subtitle}
                  </p>
                </div>
              </div>

              <div className="flex items-center justify-between pt-3 border-t border-white/5 mt-3 text-[10px] font-mono text-gray-400">
                <span className="text-emerald-400">{node.latency}</span>
                <span className="text-gray-500">{node.protocol.split("•")[0]}</span>
              </div>
            </button>
          );
        })}
      </div>

      {/* ─── NODE DEEP-DIVE INSPECTION DRAWER ─── */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start rounded-2xl border border-white/10 bg-neutral-950 p-6 sm:p-8">
        {/* Left Column: Responsibilities & Stack */}
        <div className="lg:col-span-6 space-y-6">
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <span
                className="h-2.5 w-2.5 rounded-full"
                style={{ backgroundColor: activeNode.accentColor }}
              />
              <span className="text-xs font-mono uppercase tracking-wider text-gray-400">
                Couche sélectionnée
              </span>
            </div>
            <h3 className="text-2xl font-extrabold text-white font-mono tracking-tight">
              {activeNode.title}
            </h3>
            <p className="text-xs font-mono text-[#D9A441] font-semibold">
              Protocole : {activeNode.protocol} • Temps de réponse : {activeNode.latency}
            </p>
          </div>

          {/* Key Responsibilities Checklist */}
          <div className="space-y-2.5">
            <div className="text-xs font-mono font-bold text-gray-300 uppercase tracking-wider">
              Responsabilités Techniques & Sécurité :
            </div>
            <div className="space-y-2">
              {activeNode.responsibilities.map((resp, i) => (
                <div key={i} className="flex items-start gap-2.5 text-xs text-gray-300 leading-relaxed font-mono">
                  <CheckCircle2
                    size={14}
                    className="shrink-0 mt-0.5"
                    style={{ color: activeNode.accentColor }}
                  />
                  <span>{resp}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Tech Stack Pills */}
          <div className="space-y-2 pt-2 border-t border-white/5">
            <div className="text-xs font-mono font-bold text-gray-400">Frameworks & Outils :</div>
            <div className="flex flex-wrap gap-2">
              {activeNode.techStack.map((tech) => (
                <span
                  key={tech}
                  className="rounded-lg border border-white/10 bg-white/5 px-2.5 py-1 text-xs font-mono text-gray-200"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column: Production Code Snippet */}
        <div className="lg:col-span-6 rounded-2xl border border-white/15 bg-black/90 p-4 sm:p-5 space-y-3 font-mono shadow-2xl">
          <div className="flex items-center justify-between border-b border-white/10 pb-3">
            <div className="flex items-center gap-2">
              <span className="h-2.5 w-2.5 rounded-full bg-red-500/80" />
              <span className="h-2.5 w-2.5 rounded-full bg-yellow-500/80" />
              <span className="h-2.5 w-2.5 rounded-full bg-green-500/80" />
              <span className="text-[11px] text-gray-400 ml-2">
                {activeNode.id === "clients"
                  ? "apiClient.ts"
                  : activeNode.id === "security"
                  ? "JwtAuthenticationFilter.java"
                  : activeNode.id === "services"
                  ? "PatientManagementService.java"
                  : activeNode.id === "persistence"
                  ? "PatientRepository.java"
                  : "schema_ddl.sql"}
              </span>
            </div>

            <button
              type="button"
              onClick={handleCopyCode}
              title="Copier le code"
              className="flex h-7 w-7 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-gray-300 hover:text-white transition-colors cursor-pointer"
            >
              {copied ? <Check size={13} className="text-emerald-400" /> : <Copy size={13} />}
            </button>
          </div>

          <pre className="text-xs text-gray-300 leading-relaxed overflow-x-auto max-h-[340px] scrollbar-thin scrollbar-thumb-white/10 whitespace-pre">
            <code>{activeNode.codeSnippet}</code>
          </pre>
        </div>
      </div>
    </div>
  );
}
