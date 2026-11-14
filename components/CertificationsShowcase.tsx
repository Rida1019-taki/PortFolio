"use client";

import React, { useState } from "react";
import Tilt from "react-parallax-tilt";
import {
  ShieldCheck,
  Laptop2,
  Code2,
  ExternalLink,
  Award,
  FileText,
  CheckCircle2,
  Eye,
  X,
  Sparkles,
  Download,
  Cpu,
  Layers,
  Terminal,
  Shield,
} from "lucide-react";
import { SiCisco, SiPython } from "react-icons/si";
import { useLanguage } from "@/components/LanguageProvider";

export interface CertificateItem {
  id: string;
  title: string;
  category: "all" | "security" | "hardware" | "python";
  issuer: string;
  file: string;
  icon: React.ComponentType<{ size?: number; className?: string }>;
  accentColor: string;
  glowColor: string;
  badge: string;
  domain: string;
  description: string;
  skills: string[];
}

interface CertificationsShowcaseProps {
  t: {
    badge: string;
    title1: string;
    title2: string;
    desc: string;
    verifiedBadge: string;
    btnPdf: string;
  };
}

export default function CertificationsShowcase({ t }: CertificationsShowcaseProps) {
  const [activeFilter, setActiveFilter] = useState<string>("all");
  const [previewDoc, setPreviewDoc] = useState<CertificateItem | null>(null);
  const { lang } = useLanguage();
  const fr = lang === "fr";

  const copy = {
    en: {
      officialAccreditation: "Official Accreditation",
      verified100: "100% Verified",
      heroDesc:
        "Cisco-certified skills spanning systems engineering, network defense and software development.",
      statCertificates: "Certificates",
      statIssuer: "Issuer",
      statProof: "Direct proof",
      verified: "Verified",
      keySkills: "Key Modules & Skills:",
      preview: "Preview",
      officialDoc: "Verified Official Document",
      download: "Download",
      fullScreen: "Full Screen",
      close: "Close",
      authId: "Cisco authentication ID validated",
      closePreview: "Close preview (Esc)",
    },
    fr: {
      officialAccreditation: "Accréditation Officielle",
      verified100: "100% Vérifié",
      heroDesc:
        "Compétences certifiées par Cisco couvrant l'ingénierie des systèmes, la défense réseau et le développement logiciel.",
      statCertificates: "Certificats",
      statIssuer: "Organisme",
      statProof: "Preuves directes",
      verified: "Vérifié",
      keySkills: "Modules & Compétences Clés :",
      preview: "Aperçu",
      officialDoc: "Document Officiel Vérifié",
      download: "Télécharger",
      fullScreen: "Plein Écran",
      close: "Fermer",
      authId: "ID d'authentification Cisco validé",
      closePreview: "Fermer l'aperçu (Esc)",
    },
  }[lang];

  const certificates: CertificateItem[] = [
    {
      id: "cyber",
      title: fr ? "Introduction à la Cybersécurité" : "Introduction to Cybersecurity",
      category: "security",
      issuer: "Cisco Networking Academy",
      file: "/docs/introduction-cybersecurite.pdf",
      icon: ShieldCheck,
      accentColor: "#10B981", // Emerald
      glowColor: "rgba(16, 185, 129, 0.2)",
      badge: "Cisco Certified • Security",
      domain: fr ? "Sécurité Réseau & Défense" : "Network Security & Defense",
      description: fr
        ? "Maîtrise des principes fondamentaux de la sécurité informatique, de la confidentialité des données et de l'atténuation des cybermenaces dans les architectures distribuées."
        : "Command of the core principles of information security, data privacy and cyber threat mitigation across distributed architectures.",
      skills: fr
        ? [
            "Principes de Confidentialité, Intégrité & Disponibilité (CIA)",
            "Analyse & Détection des Cyberattaques & Vulnérabilités",
            "Fondements de la Cryptographie & Protocoles Sécurisés",
            "Protection des Données & Bonnes Pratiques Défensives",
          ]
        : [
            "Confidentiality, Integrity & Availability (CIA) Principles",
            "Cyberattack & Vulnerability Analysis and Detection",
            "Cryptography Fundamentals & Secure Protocols",
            "Data Protection & Defensive Best Practices",
          ],
    },
    {
      id: "hardware",
      title: fr ? "Les Bases du Matériel Informatique" : "Computer Hardware Basics",
      category: "hardware",
      issuer: "Cisco Networking Academy",
      file: "/docs/bases-materiel-informatique.pdf",
      icon: Laptop2,
      accentColor: "#D9A441", // Gold
      glowColor: "rgba(217, 164, 65, 0.2)",
      badge: "Cisco Certified • Systems",
      domain: fr ? "Architecture Systèmes & Hardware" : "Systems & Hardware Architecture",
      description: fr
        ? "Compréhension approfondie de l'architecture matérielle des ordinateurs, de l'assemblage de composants, de la gestion des mémoires et du diagnostic système."
        : "In-depth understanding of computer hardware architecture, component assembly, memory management and system diagnostics.",
      skills: fr
        ? [
            "Architecture des Processeurs, Bus & Cartes Mères",
            "Hiérarchie Mémoire : Cache, RAM & Unités de Stockage",
            "Firmware BIOS/UEFI & Initialisation du Système d'Exploitation",
            "Maintenance Préventive, Diagnostic & Dépannage Matériel",
          ]
        : [
            "Processor, Bus & Motherboard Architecture",
            "Memory Hierarchy: Cache, RAM & Storage Units",
            "BIOS/UEFI Firmware & Operating System Boot",
            "Preventive Maintenance, Diagnostics & Hardware Troubleshooting",
          ],
    },
    {
      id: "python",
      title: "Python Essentials 1",
      category: "python",
      issuer: "Cisco Networking Academy",
      file: "/docs/python-essentials-1.pdf",
      icon: Code2,
      accentColor: "#3B82F6", // Royal Blue
      glowColor: "rgba(59, 130, 246, 0.2)",
      badge: "Cisco Certified • Programming",
      domain: fr ? "Programmation & Algorithmique" : "Programming & Algorithms",
      description: fr
        ? "Fondements avancés du langage Python, de la programmation orientée objet, de la manipulation de structures de données et de la résolution algorithmique de problèmes."
        : "Advanced Python fundamentals, object-oriented programming, data structure manipulation and algorithmic problem solving.",
      skills: fr
        ? [
            "Syntaxe Moderne, Types de Données & Opérateurs Python",
            "Structures de Données : Listes, Tuples, Dictionnaires & Sets",
            "Conception de Fonctions, Portée des Variables & Récursivité",
            "Gestion Robuste des Exceptions & Bonnes Pratiques de Code",
          ]
        : [
            "Modern Python Syntax, Data Types & Operators",
            "Data Structures: Lists, Tuples, Dictionaries & Sets",
            "Function Design, Variable Scope & Recursion",
            "Robust Exception Handling & Coding Best Practices",
          ],
    },
  ];

  const filterTabs = [
    { id: "all", label: fr ? "Toutes les Certifications" : "All Certifications" },
    { id: "security", label: fr ? "Cybersécurité" : "Cybersecurity" },
    { id: "hardware", label: fr ? "Systèmes & Hardware" : "Systems & Hardware" },
    { id: "python", label: fr ? "Python & Algorithmique" : "Python & Algorithms" },
  ];

  const filteredCerts =
    activeFilter === "all"
      ? certificates
      : certificates.filter((c) => c.category === activeFilter);

  return (
    <div className="space-y-12">
      {/* ─── TRUST & AUTHORITY HERO BAR ─── */}
      <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-r from-white/[0.04] via-white/[0.02] to-transparent p-6 sm:p-8 backdrop-blur-2xl">
        <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-[#D9A441]/10 blur-[90px] pointer-events-none" />

        <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-6">
          {/* Left Brand Accreditation */}
          <div className="flex items-center gap-4">
            <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl border border-[#D9A441]/40 bg-[#D9A441]/10 text-[#D9A441] shadow-[0_0_30px_rgba(217,164,65,0.25)]">
              <SiCisco size={34} />
            </div>
            <div className="space-y-1 text-left">
              <div className="flex items-center gap-2">
                <span className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-[#D9A441]">
                  {copy.officialAccreditation}
                </span>
                <span className="inline-flex items-center gap-1 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-2 py-0.5 text-[10px] font-mono font-semibold text-emerald-400">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  {copy.verified100}
                </span>
              </div>
              <h3 className="text-xl sm:text-2xl font-extrabold text-white">
                Cisco Networking Academy
              </h3>
              <p className="text-xs sm:text-sm text-gray-400 max-w-xl">
                {copy.heroDesc}
              </p>
            </div>
          </div>

          {/* Right Stats Quick Counter */}
          <div className="flex items-center gap-3 sm:gap-6 w-full lg:w-auto justify-between lg:justify-end border-t lg:border-t-0 border-white/10 pt-4 lg:pt-0">
            <div className="text-center px-4 py-2 rounded-2xl bg-white/[0.02] border border-white/5">
              <div className="text-2xl font-black text-[#D9A441] font-mono">03</div>
              <div className="text-[10px] font-mono uppercase tracking-wider text-gray-400">{copy.statCertificates}</div>
            </div>
            <div className="text-center px-4 py-2 rounded-2xl bg-white/[0.02] border border-white/5">
              <div className="text-2xl font-black text-emerald-400 font-mono">Cisco</div>
              <div className="text-[10px] font-mono uppercase tracking-wider text-gray-400">{copy.statIssuer}</div>
            </div>
            <div className="text-center px-4 py-2 rounded-2xl bg-white/[0.02] border border-white/5">
              <div className="text-2xl font-black text-blue-400 font-mono">PDF</div>
              <div className="text-[10px] font-mono uppercase tracking-wider text-gray-400">{copy.statProof}</div>
            </div>
          </div>
        </div>
      </div>

      {/* ─── INTERACTIVE FILTER PILLS ─── */}
      <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3">
        {filterTabs.map((tab) => {
          const isActive = activeFilter === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveFilter(tab.id)}
              className={`relative rounded-xl px-4 py-2.5 text-xs sm:text-sm font-semibold transition-all duration-300 ${
                isActive
                  ? "border border-[#D9A441] bg-[#D9A441]/10 text-white shadow-[0_0_20px_rgba(217,164,65,0.25)]"
                  : "border border-white/10 bg-white/[0.02] text-gray-400 hover:border-white/20 hover:bg-white/5 hover:text-white"
              }`}
            >
              {isActive && (
                <span className="absolute -top-1 -right-1 flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#D9A441] opacity-75" />
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#D9A441]" />
                </span>
              )}
              {tab.label}
            </button>
          );
        })}
      </div>

      {/* ─── BENTO GRID CERTIFICATES ─── */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
        {filteredCerts.map((cert) => {
          const Icon = cert.icon;

          return (
            <div key={cert.id} className="h-full">
              <Tilt
                tiltMaxAngleX={6}
                tiltMaxAngleY={6}
                perspective={1000}
                glareEnable={true}
                glareMaxOpacity={0.12}
                glareColor={cert.accentColor}
                glarePosition="all"
                glareBorderRadius="24px"
                className="h-full rounded-3xl"
              >
                <div
                  className="group relative flex flex-col justify-between h-full rounded-3xl border border-white/10 bg-gradient-to-b from-white/[0.05] via-white/[0.02] to-transparent p-1 transition-all duration-500 hover:border-[#D9A441]/60 hover:shadow-[0_20px_50px_-15px_rgba(217,164,65,0.3)]"
                >
              {/* Top Dynamic Ambient Glow */}
              <div
                className="absolute -top-16 -right-16 h-48 w-48 rounded-full blur-[80px] pointer-events-none transition-all duration-500 opacity-60 group-hover:opacity-100"
                style={{ backgroundColor: cert.glowColor }}
              />

              {/* Inner Card Container */}
              <div className="relative h-full rounded-[22px] bg-black/85 p-6 sm:p-7 backdrop-blur-2xl flex flex-col justify-between space-y-6 overflow-hidden">
                
                {/* Upper Section */}
                <div className="space-y-5">
                  
                  {/* Top Bar: Icon + Badge + Verified */}
                  <div className="flex items-center justify-between gap-3">
                    <div
                      className="flex h-14 w-14 items-center justify-center rounded-2xl border transition-all duration-500 group-hover:scale-110"
                      style={{
                        borderColor: `${cert.accentColor}50`,
                        backgroundColor: `${cert.accentColor}15`,
                        color: cert.accentColor,
                        boxShadow: `0 0 25px ${cert.glowColor}`,
                      }}
                    >
                      <Icon size={26} />
                    </div>

                    <div className="flex flex-col items-end gap-1">
                      <span className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-[10px] font-mono font-semibold text-white/70">
                        <Award size={11} className="text-[#D9A441]" />
                        <span>{t.verifiedBadge || copy.verified}</span>
                      </span>
                      <span className="text-[10px] font-mono text-[#D9A441] flex items-center gap-1">
                        <SiCisco size={11} />
                        <span>Cisco Academy</span>
                      </span>
                    </div>
                  </div>

                  {/* Title & Domain */}
                  <div className="space-y-1.5 pt-1">
                    <span className="text-[11px] font-mono font-bold tracking-wider uppercase text-white/50 block">
                      {cert.domain}
                    </span>
                    <h3 className="text-xl font-extrabold text-white leading-snug group-hover:text-[#D9A441] transition-colors duration-300">
                      {cert.title}
                    </h3>
                    <p className="text-xs text-gray-400 leading-relaxed pt-1">
                      {cert.description}
                    </p>
                  </div>

                  {/* Skills Chip List */}
                  <div className="space-y-2 pt-2 border-t border-white/5">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-white/40 block">
                      {copy.keySkills}
                    </span>
                    <div className="grid gap-1.5">
                      {cert.skills.map((skill, sIdx) => (
                        <div
                          key={sIdx}
                          className="flex items-start gap-2 rounded-xl border border-white/5 bg-white/[0.02] px-3 py-2 text-xs text-gray-300 transition-colors duration-300 group-hover:border-white/10"
                        >
                          <CheckCircle2
                            size={13}
                            className="shrink-0 mt-0.5 text-[#D9A441]"
                          />
                          <span className="leading-tight">{skill}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                </div>

                {/* Bottom Actions */}
                <div className="pt-4 border-t border-white/10 space-y-2.5">
                  <div className="grid grid-cols-2 gap-2">
                    {/* Quick In-Page Preview Button */}
                    <button
                      type="button"
                      onClick={() => setPreviewDoc(cert)}
                      className="group/preview inline-flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/5 px-3 py-2.5 text-xs font-semibold text-white transition-all duration-300 hover:border-[#D9A441]/50 hover:bg-[#D9A441]/10 hover:text-[#D9A441]"
                    >
                      <Eye size={14} className="transition-transform duration-300 group-hover/preview:scale-110" />
                      <span>{copy.preview}</span>
                    </button>

                    {/* Direct PDF Link */}
                    <a
                      href={cert.file}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group/link inline-flex items-center justify-center gap-2 rounded-xl border border-[#D9A441]/50 bg-[#D9A441] px-3 py-2.5 text-xs font-bold text-black transition-all duration-300 hover:shadow-[0_0_20px_rgba(217,164,65,0.4)] hover:scale-102"
                    >
                      <FileText size={14} />
                      <span>{t.btnPdf || "PDF"}</span>
                      <ExternalLink size={12} className="transition-transform duration-300 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
                    </a>
                  </div>
                </div>

              </div>
                </div>
              </Tilt>
            </div>
          );
        })}
      </div>

      {/* ─── MODAL PREVIEW LIGHTBOX ─── */}
      {previewDoc && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 sm:p-6 backdrop-blur-xl animate-in fade-in duration-200"
          onClick={() => setPreviewDoc(null)}
        >
          <div
            className="relative w-full max-w-4xl max-h-[92vh] overflow-hidden rounded-3xl border border-white/20 bg-neutral-950 shadow-2xl flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between border-b border-white/10 px-6 py-4 bg-white/[0.02]">
              <div className="flex items-center gap-3">
                <div
                  className="flex h-10 w-10 items-center justify-center rounded-xl border"
                  style={{
                    borderColor: `${previewDoc.accentColor}40`,
                    backgroundColor: `${previewDoc.accentColor}15`,
                    color: previewDoc.accentColor,
                  }}
                >
                  <previewDoc.icon size={20} />
                </div>
                <div>
                  <h4 className="text-base sm:text-lg font-bold text-white">
                    {previewDoc.title}
                  </h4>
                  <div className="flex items-center gap-2 text-xs font-mono text-gray-400">
                    <span className="text-[#D9A441]">Cisco Networking Academy</span>
                    <span>•</span>
                    <span>{copy.officialDoc}</span>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <a
                  href={previewDoc.file}
                  download
                  className="flex h-9 items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-3 text-xs font-semibold text-white transition-all duration-200 hover:border-[#D9A441] hover:text-[#D9A441]"
                >
                  <Download size={14} />
                  <span className="hidden sm:inline">{copy.download}</span>
                </a>
                <a
                  href={previewDoc.file}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-9 items-center gap-2 rounded-xl bg-[#D9A441] px-3 text-xs font-bold text-black transition-all duration-200 hover:shadow-[0_0_20px_rgba(217,164,65,0.4)]"
                >
                  <ExternalLink size={14} />
                  <span className="hidden sm:inline">{copy.fullScreen}</span>
                </a>
                <button
                  type="button"
                  onClick={() => setPreviewDoc(null)}
                  className="flex h-9 w-9 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-gray-400 hover:border-red-500/50 hover:bg-red-500/10 hover:text-red-400 transition-all duration-200 ml-2"
                  aria-label={copy.close}
                >
                  <X size={18} />
                </button>
              </div>
            </div>

            {/* Modal Body: Embedded PDF or Preview Container */}
            <div className="relative flex-1 min-h-[500px] sm:min-h-[620px] bg-neutral-900 overflow-hidden">
              <iframe
                src={`${previewDoc.file}#toolbar=0&navpanes=0&scrollbar=1`}
                className="w-full h-full border-0"
                title={previewDoc.title}
              />
            </div>

            {/* Modal Footer */}
            <div className="flex items-center justify-between border-t border-white/10 px-6 py-3 bg-black/60 text-xs font-mono text-gray-400">
              <span className="flex items-center gap-2">
                <Sparkles size={12} className="text-[#D9A441]" />
                <span>{copy.authId}</span>
              </span>
              <button
                type="button"
                onClick={() => setPreviewDoc(null)}
                className="text-gray-400 hover:text-white transition-colors"
              >
                {copy.closePreview}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
