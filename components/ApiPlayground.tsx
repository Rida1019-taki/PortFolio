"use client";

import React, { useState } from "react";
import { Play, Copy, Check, Server, ShieldCheck, Database, Zap, Sparkles, Terminal } from "lucide-react";
import { playClick, playSuccess } from "@/lib/sound";
import { toast } from "sonner";

interface EndpointSpec {
  id: string;
  method: "GET" | "POST";
  path: string;
  summary: string;
  description: string;
  requestBody?: object;
  response: object;
}

const ENDPOINTS: EndpointSpec[] = [
  {
    id: "profile",
    method: "GET",
    path: "/api/v1/engineer/profile",
    summary: "Profil Développeur & Stack",
    description: "Retourne les métadonnées officielles de Rida Taki, rôles Spring Security et disponibilité.",
    response: {
      status: "SUCCESS",
      statusCode: 200,
      timestamp: new Date().toISOString(),
      data: {
        fullName: "Rida Taki",
        title: "Full Stack & Mobile Developer",
        specialization: "Java 21 / Spring Boot 3 & React",
        location: {
          city: "Oued Zem",
          region: "Béni Mellal-Khénifra",
          country: "Maroc",
          timezone: "Africa/Casablanca (UTC+1)",
        },
        credentials: [
          "Diplôme ISTA — Full Stack Development",
          "Master ENAA — Ingénierie du Web & Architectures Logicielles",
        ],
        certifications: [
          "Cisco Networking Academy — Introduction to Cybersecurity",
          "Cisco Networking Academy — Computer Hardware Fundamentals",
          "Cisco Networking Academy — Python Essentials 1",
        ],
        availability: "Immediate",
        preferredRoles: ["Java / Spring Boot Engineer", "Full Stack Developer", "Android / Mobile Engineer"],
      },
    },
  },
  {
    id: "healthcare",
    method: "GET",
    path: "/api/v1/projects/healthcare/architecture",
    summary: "Architecture HealthCare+ (Spring Boot)",
    description: "Spécification technique de l'application phare : sécurité JWT, couche JPA et modèle de données.",
    response: {
      projectId: "healthcare-core",
      name: "HealthCare+ Patient Management Suite",
      framework: "Spring Boot 3.3.4",
      javaVersion: "Java 21 LTS",
      architecture: "Modular Monolith / N-Tier Architecture",
      security: {
        authType: "Stateless JWT with Refresh Tokens",
        roleBasedAccess: ["ROLE_ADMIN", "ROLE_DOCTOR", "ROLE_PATIENT"],
        corsPolicy: "Strict Origin Isolation",
      },
      persistence: {
        database: "MySQL 8.0 Enterprise",
        orm: "Hibernate 6 / Spring Data JPA",
        pooling: "HikariCP (Max 20 connections)",
      },
      metrics: {
        activePatientsManaged: 1540,
        averageQueryLatencyMs: 18.4,
        uptime: "99.98%",
      },
    },
  },
  {
    id: "hire",
    method: "POST",
    path: "/api/v1/recruiter/dispatch-offer",
    summary: "Dispatcher une Opportunité (POST)",
    description: "Simule la soumission d'une proposition de poste avec validation Bean Validation (JSR 380).",
    requestBody: {
      companyName: "Tech Enterprise",
      recruiterEmail: "talent@techcorp.com",
      contractType: "CDI / Hybride / Remote",
      position: "Full Stack Java / Spring Boot Developer",
      preferredStartDate: "Immediate",
    },
    response: {
      status: "CREATED",
      statusCode: 201,
      message: "Proposition transmise avec succès au service de messagerie de Rida Taki.",
      auditTrail: {
        queueId: "MSG-SPRING-7849",
        encryptedPayload: true,
        dispatchStatus: "DELIVERED_TO_INBOX",
      },
      nextStep: "Notification transmise sur takirida72@gmail.com. Réponse sous 24h ouvrées.",
    },
  },
];

export default function ApiPlayground() {
  const [selectedEndpoint, setSelectedEndpoint] = useState<EndpointSpec>(ENDPOINTS[0]);
  const [isLoading, setIsLoading] = useState(false);
  const [activeTab, setActiveTab] = useState<"response" | "headers" | "curl">("response");
  const [copied, setCopied] = useState(false);

  const handleSend = () => {
    playClick();
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      playSuccess();
      toast.success(`HTTP 200 OK — ${selectedEndpoint.path}`, {
        description: "Requête exécutée en 36ms.",
      });
    }, 450);
  };

  const copyJson = () => {
    navigator.clipboard.writeText(JSON.stringify(selectedEndpoint.response, null, 2));
    setCopied(true);
    toast.success("JSON copié dans le presse-papier !");
    setTimeout(() => setCopied(false), 2000);
  };

  const curlCommand = `curl -X ${selectedEndpoint.method} "https://api.rida-taki.dev${selectedEndpoint.path}" \\
  -H "Accept: application/json" \\
  -H "Authorization: Bearer dev_session_token_rida"`;

  return (
    <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-black/85 backdrop-blur-2xl shadow-2xl p-6 sm:p-8 space-y-6">
      {/* Background Ambient Glow */}
      <div className="absolute -top-24 right-1/4 h-64 w-96 rounded-full bg-[#D9A441]/10 blur-3xl pointer-events-none" />

      {/* Header Bar */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-white/10 pb-5">
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-[#D9A441]/30 bg-[#D9A441]/10 px-3 py-1 text-xs font-mono font-semibold text-[#D9A441]">
              <Server size={13} />
              <span>Spring Boot REST API Sandbox</span>
            </span>
            <span className="rounded-full border border-emerald-500/30 bg-emerald-500/10 px-2.5 py-0.5 text-[10px] font-mono text-emerald-400">
              v3.3.4
            </span>
          </div>
          <p className="text-xs sm:text-sm text-gray-400 font-mono">
            Simulateur d&apos;appels API en direct pour tester les payloads et l&apos;architecture backend.
          </p>
        </div>

        {/* Endpoint Selector Pills */}
        <div className="flex flex-wrap items-center gap-2">
          {ENDPOINTS.map((ep) => {
            const isSelected = selectedEndpoint.id === ep.id;
            return (
              <button
                key={ep.id}
                type="button"
                onClick={() => {
                  playClick();
                  setSelectedEndpoint(ep);
                }}
                className={`inline-flex items-center gap-2 rounded-xl px-3 py-1.5 text-xs font-mono font-semibold transition-all ${
                  isSelected
                    ? "border border-[#D9A441] bg-[#D9A441]/15 text-white shadow-[0_0_15px_rgba(217,164,65,0.25)]"
                    : "border border-white/10 bg-white/5 text-gray-400 hover:border-white/20 hover:text-white"
                } cursor-pointer`}
              >
                <span
                  className={`text-[10px] font-bold px-1.5 py-0.5 rounded ${
                    ep.method === "GET"
                      ? "bg-emerald-500/20 text-emerald-400"
                      : "bg-amber-500/20 text-amber-400"
                  }`}
                >
                  {ep.method}
                </span>
                <span>{ep.summary}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* URL Request Bar */}
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2 rounded-2xl border border-white/15 bg-neutral-950 p-2 shadow-inner">
        <div className="flex items-center gap-2 flex-1 px-3 py-1 font-mono text-xs sm:text-sm overflow-x-auto">
          <span
            className={`font-bold px-2 py-1 rounded text-xs ${
              selectedEndpoint.method === "GET"
                ? "bg-emerald-500/20 text-emerald-400 border border-emerald-500/30"
                : "bg-amber-500/20 text-amber-400 border border-amber-500/30"
            }`}
          >
            {selectedEndpoint.method}
          </span>
          <span className="text-gray-500 hidden sm:inline">https://api.rida-taki.dev</span>
          <span className="text-white font-semibold">{selectedEndpoint.path}</span>
        </div>

        <button
          type="button"
          onClick={handleSend}
          disabled={isLoading}
          className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#D9A441] to-[#B8860B] px-5 py-2.5 text-xs font-bold font-mono text-black shadow-lg shadow-[#D9A441]/20 transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_20px_rgba(217,164,65,0.4)] cursor-pointer disabled:opacity-50"
        >
          {isLoading ? (
            <>
              <span className="h-3 w-3 animate-spin rounded-full border-2 border-black border-t-transparent" />
              <span>Exécution...</span>
            </>
          ) : (
            <>
              <Play size={13} className="fill-black" />
              <span>Send Request</span>
            </>
          )}
        </button>
      </div>

      {/* Response Panel */}
      <div className="rounded-2xl border border-white/10 bg-neutral-950 overflow-hidden">
        {/* Response Tabs & Meta Bar */}
        <div className="flex flex-wrap items-center justify-between border-b border-white/10 px-4 py-2.5 bg-white/[0.02]">
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => setActiveTab("response")}
              className={`px-3 py-1 text-xs font-mono rounded-lg transition-colors cursor-pointer ${
                activeTab === "response"
                  ? "bg-white/10 text-white font-bold"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              Body (JSON)
            </button>
            <button
              type="button"
              onClick={() => setActiveTab("headers")}
              className={`px-3 py-1 text-xs font-mono rounded-lg transition-colors cursor-pointer ${
                activeTab === "headers"
                  ? "bg-white/10 text-white font-bold"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              Headers
            </button>
            <button
              type="button"
              onClick={() => setActiveTab("curl")}
              className={`px-3 py-1 text-xs font-mono rounded-lg transition-colors cursor-pointer ${
                activeTab === "curl"
                  ? "bg-white/10 text-white font-bold"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              cURL
            </button>
          </div>

          <div className="flex items-center gap-3 text-[11px] font-mono text-gray-400">
            <span className="flex items-center gap-1.5 text-emerald-400 font-bold">
              <span className="h-2 w-2 rounded-full bg-emerald-400" />
              200 OK
            </span>
            <span className="text-gray-600">|</span>
            <span>36 ms</span>
            <span className="text-gray-600">|</span>
            <span>1.4 KB</span>
            <button
              type="button"
              onClick={copyJson}
              title="Copier le JSON"
              className="ml-2 flex h-6 w-6 items-center justify-center rounded border border-white/10 bg-white/5 text-gray-300 hover:text-white cursor-pointer"
            >
              {copied ? <Check size={12} className="text-emerald-400" /> : <Copy size={12} />}
            </button>
          </div>
        </div>

        {/* Tab Body Content */}
        <div className="p-4 sm:p-5 font-mono text-xs max-h-[360px] overflow-y-auto scrollbar-thin scrollbar-thumb-white/10">
          {activeTab === "response" && (
            <pre className="text-gray-300 leading-relaxed overflow-x-auto whitespace-pre">
              <code>{JSON.stringify(selectedEndpoint.response, null, 2)}</code>
            </pre>
          )}

          {activeTab === "headers" && (
            <div className="space-y-1.5 text-gray-300 font-mono text-xs">
              <div><span className="text-[#D9A441]">Content-Type:</span> application/json;charset=UTF-8</div>
              <div><span className="text-[#D9A441]">Server:</span> Tomcat/10.1.28 (Spring Boot Embedded)</div>
              <div><span className="text-[#D9A441]">X-Frame-Options:</span> DENY</div>
              <div><span className="text-[#D9A441]">X-Content-Type-Options:</span> nosniff</div>
              <div><span className="text-[#D9A441]">Cache-Control:</span> no-cache, no-store, max-age=0</div>
              <div><span className="text-[#D9A441]">X-Powered-By:</span> Spring-Security-6.3.3</div>
            </div>
          )}

          {activeTab === "curl" && (
            <div className="space-y-3">
              <pre className="text-emerald-400 leading-relaxed overflow-x-auto whitespace-pre bg-black/50 p-3 rounded-xl border border-white/5">
                <code>{curlCommand}</code>
              </pre>
              <button
                type="button"
                onClick={() => {
                  navigator.clipboard.writeText(curlCommand);
                  toast.success("Commande cURL copiée !");
                }}
                className="inline-flex items-center gap-1.5 text-xs text-gray-400 hover:text-white font-mono cursor-pointer"
              >
                <Copy size={12} />
                <span>Copier la commande cURL</span>
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
