"use client";

import React, { useEffect, useState, useCallback } from "react";
import { Command } from "cmdk";
import {
  Search,
  FileText,
  Mail,
  Sparkles,
  Globe,
  X,
  Briefcase,
  GraduationCap,
  Award,
  Trophy,
  User,
  Wrench,
  Send,
} from "lucide-react";
import { FaGithub, FaLinkedin, FaWhatsapp, FaInstagram } from "react-icons/fa";
import { triggerGoldConfetti, triggerSideCannons } from "@/lib/confetti";
import { toast } from "sonner";
import { useLanguage } from "./LanguageProvider";

export default function CommandPalette() {
  const [open, setOpen] = useState(false);
  const { lang, toggleLang } = useLanguage();

  // Keyboard shortcut listener (Cmd+K / Ctrl+K)
  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if ((e.key === "k" || e.key === "K") && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((prev) => !prev);
      }
      if (e.key === "Escape" && open) {
        setOpen(false);
      }
    };

    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, [open]);

  const navigateTo = useCallback((id: string) => {
    setOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  }, []);

  const copyEmail = () => {
    navigator.clipboard.writeText("takirida72@gmail.com");
    toast.success("Email copié !", {
      description: "takirida72@gmail.com copié dans le presse-papier.",
    });
    setOpen(false);
  };

  const downloadCV = () => {
    triggerGoldConfetti();
    const link = document.createElement("a");
    link.href = "/docs/Rida_Taki_CV.pdf";
    link.download = "Rida_Taki_CV.pdf";
    link.target = "_blank";
    link.click();
    toast.success("Téléchargement du CV lancé !", {
      description: "Le CV de Rida Taki est en cours de téléchargement.",
    });
    setOpen(false);
  };

  const openLink = (url: string) => {
    window.open(url, "_blank", "noopener,noreferrer");
    setOpen(false);
  };

  return (
    <>
      {/* Floating Trigger Pill Button (Bottom Right) */}
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="fixed bottom-6 right-6 z-40 flex items-center gap-2.5 rounded-full border border-white/15 bg-black/80 px-4 py-2.5 text-xs font-mono font-medium text-white shadow-2xl backdrop-blur-xl transition-all duration-300 hover:scale-105 hover:border-[#D9A441] hover:shadow-[0_0_25px_rgba(217,164,65,0.35)] group cursor-pointer"
        aria-label="Ouvrir le menu de commande (Cmd+K)"
      >
        <span className="flex h-5 w-5 items-center justify-center rounded-md bg-white/10 text-[11px] font-bold text-[#D9A441] group-hover:bg-[#D9A441] group-hover:text-black transition-colors">
          ⌘K
        </span>
        <span className="hidden sm:inline text-gray-300 group-hover:text-white">
          {lang === "fr" ? "Navigation Rapide" : "Quick Actions"}
        </span>
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#D9A441] opacity-75" />
          <span className="relative inline-flex rounded-full h-2 w-2 bg-[#D9A441]" />
        </span>
      </button>

      {/* Command Palette Modal Backdrop */}
      {open && (
        <div
          className="fixed inset-0 z-50 flex items-start justify-center pt-16 sm:pt-28 px-4 bg-black/75 backdrop-blur-md animate-in fade-in duration-200"
          onClick={() => setOpen(false)}
        >
          {/* Modal Container */}
          <div
            className="relative w-full max-w-xl overflow-hidden rounded-2xl border border-white/15 bg-neutral-950/95 shadow-2xl shadow-black/80 ring-1 ring-white/10 backdrop-blur-2xl animate-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Top Gold Gradient Bar */}
            <div className="h-1 w-full bg-gradient-to-r from-transparent via-[#D9A441] to-transparent" />

            <Command
              className="w-full bg-transparent text-white focus:outline-none"
              loop
            >
              {/* Search Bar */}
              <div className="flex items-center border-b border-white/10 px-4 py-3">
                <Search size={18} className="text-[#D9A441] shrink-0 mr-3" />
                <Command.Input
                  autoFocus
                  placeholder={
                    lang === "fr"
                      ? "Rechercher une section, une action, un projet..."
                      : "Search sections, quick actions, projects..."
                  }
                  className="w-full bg-transparent text-sm font-sans text-white placeholder-gray-500 focus:outline-none"
                />
                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  className="rounded-lg p-1 text-gray-400 hover:bg-white/10 hover:text-white transition-colors cursor-pointer"
                >
                  <X size={16} />
                </button>
              </div>

              {/* Items List */}
              <Command.List className="max-h-[380px] overflow-y-auto p-2 scrollbar-thin scrollbar-thumb-white/10">
                <Command.Empty className="py-8 text-center text-xs font-mono text-gray-500">
                  {lang === "fr" ? "Aucun résultat trouvé." : "No results found."}
                </Command.Empty>

                {/* Group: Navigation */}
                <Command.Group
                  heading={lang === "fr" ? "Navigation" : "Navigation"}
                  className="px-2 py-1.5 text-[10px] font-mono uppercase tracking-wider text-gray-400 font-semibold"
                >
                  <Command.Item
                    value="about a propos profile bio presentation"
                    onSelect={() => navigateTo("about")}
                    className="flex cursor-pointer items-center justify-between rounded-xl px-3 py-2.5 text-xs text-gray-300 transition-colors data-[selected=true]:bg-white/10 data-[selected=true]:text-white hover:bg-white/10 hover:text-white"
                  >
                    <div className="flex items-center gap-3">
                      <User size={15} className="text-[#D9A441]" />
                      <span>{lang === "fr" ? "À propos & Profil" : "About & Profile"}</span>
                    </div>
                    <span className="text-[10px] font-mono text-gray-500">#about</span>
                  </Command.Item>

                  <Command.Item
                    value="skills competences stack tech java react flutter spring"
                    onSelect={() => navigateTo("skills")}
                    className="flex cursor-pointer items-center justify-between rounded-xl px-3 py-2.5 text-xs text-gray-300 transition-colors data-[selected=true]:bg-white/10 data-[selected=true]:text-white hover:bg-white/10 hover:text-white"
                  >
                    <div className="flex items-center gap-3">
                      <Wrench size={15} className="text-[#D9A441]" />
                      <span>{lang === "fr" ? "Compétences Techniques" : "Skills & Stack"}</span>
                    </div>
                    <span className="text-[10px] font-mono text-gray-500">#skills</span>
                  </Command.Item>

                  <Command.Item
                    value="work projets healthcare logitrack auto parc portfolio"
                    onSelect={() => navigateTo("work")}
                    className="flex cursor-pointer items-center justify-between rounded-xl px-3 py-2.5 text-xs text-gray-300 transition-colors data-[selected=true]:bg-white/10 data-[selected=true]:text-white hover:bg-white/10 hover:text-white"
                  >
                    <div className="flex items-center gap-3">
                      <Briefcase size={15} className="text-[#D9A441]" />
                      <span>{lang === "fr" ? "Projets Réalisés" : "Projects & Work"}</span>
                    </div>
                    <span className="text-[10px] font-mono text-gray-500">#work</span>
                  </Command.Item>

                  <Command.Item
                    value="experience stage rsi entreprise poste carriere"
                    onSelect={() => navigateTo("experience")}
                    className="flex cursor-pointer items-center justify-between rounded-xl px-3 py-2.5 text-xs text-gray-300 transition-colors data-[selected=true]:bg-white/10 data-[selected=true]:text-white hover:bg-white/10 hover:text-white"
                  >
                    <div className="flex items-center gap-3">
                      <Briefcase size={15} className="text-emerald-400" />
                      <span>{lang === "fr" ? "Expérience Professionnelle" : "Professional Experience"}</span>
                    </div>
                    <span className="text-[10px] font-mono text-gray-500">#experience</span>
                  </Command.Item>

                  <Command.Item
                    value="education formation diplome ista enaa master licence"
                    onSelect={() => navigateTo("education")}
                    className="flex cursor-pointer items-center justify-between rounded-xl px-3 py-2.5 text-xs text-gray-300 transition-colors data-[selected=true]:bg-white/10 data-[selected=true]:text-white hover:bg-white/10 hover:text-white"
                  >
                    <div className="flex items-center gap-3">
                      <GraduationCap size={15} className="text-[#D9A441]" />
                      <span>{lang === "fr" ? "Formation & Diplômes" : "Education & Degrees"}</span>
                    </div>
                    <span className="text-[10px] font-mono text-gray-500">#education</span>
                  </Command.Item>

                  <Command.Item
                    value="certifications cisco cybersecurite hardware python badge"
                    onSelect={() => navigateTo("certifications")}
                    className="flex cursor-pointer items-center justify-between rounded-xl px-3 py-2.5 text-xs text-gray-300 transition-colors data-[selected=true]:bg-white/10 data-[selected=true]:text-white hover:bg-white/10 hover:text-white"
                  >
                    <div className="flex items-center gap-3">
                      <Award size={15} className="text-emerald-400" />
                      <span>{lang === "fr" ? "Certifications Cisco" : "Cisco Certifications"}</span>
                    </div>
                    <span className="text-[10px] font-mono text-gray-500">#certifications</span>
                  </Command.Item>

                  <Command.Item
                    value="hackathons competition benirac khouribga 2eme place podium"
                    onSelect={() => navigateTo("hackathons")}
                    className="flex cursor-pointer items-center justify-between rounded-xl px-3 py-2.5 text-xs text-gray-300 transition-colors data-[selected=true]:bg-white/10 data-[selected=true]:text-white hover:bg-white/10 hover:text-white"
                  >
                    <div className="flex items-center gap-3">
                      <Trophy size={15} className="text-[#D9A441]" />
                      <span>{lang === "fr" ? "Hackathons & Compétitions" : "Hackathons & Awards"}</span>
                    </div>
                    <span className="text-[10px] font-mono text-gray-500">#hackathons</span>
                  </Command.Item>

                  <Command.Item
                    value="resume cv pdf telecharger curriculum"
                    onSelect={() => navigateTo("resume")}
                    className="flex cursor-pointer items-center justify-between rounded-xl px-3 py-2.5 text-xs text-gray-300 transition-colors data-[selected=true]:bg-white/10 data-[selected=true]:text-white hover:bg-white/10 hover:text-white"
                  >
                    <div className="flex items-center gap-3">
                      <FileText size={15} className="text-[#D9A441]" />
                      <span>{lang === "fr" ? "Section CV" : "Resume Section"}</span>
                    </div>
                    <span className="text-[10px] font-mono text-gray-500">#resume</span>
                  </Command.Item>

                  <Command.Item
                    value="contact message email whatsapp formulaire envoyer"
                    onSelect={() => navigateTo("contact")}
                    className="flex cursor-pointer items-center justify-between rounded-xl px-3 py-2.5 text-xs text-gray-300 transition-colors data-[selected=true]:bg-white/10 data-[selected=true]:text-white hover:bg-white/10 hover:text-white"
                  >
                    <div className="flex items-center gap-3">
                      <Send size={15} className="text-emerald-400" />
                      <span>{lang === "fr" ? "Contact & Message" : "Contact & Message"}</span>
                    </div>
                    <span className="text-[10px] font-mono text-gray-500">#contact</span>
                  </Command.Item>
                </Command.Group>

                {/* Group: Actions Rapides */}
                <Command.Group
                  heading={lang === "fr" ? "Actions Rapides" : "Quick Actions"}
                  className="px-2 py-1.5 text-[10px] font-mono uppercase tracking-wider text-gray-400 font-semibold mt-2 border-t border-white/5 pt-3"
                >
                  <Command.Item
                    value="telecharger cv download pdf resume confetti"
                    onSelect={downloadCV}
                    className="flex cursor-pointer items-center justify-between rounded-xl px-3 py-2.5 text-xs text-gray-300 transition-colors data-[selected=true]:bg-[#D9A441]/15 data-[selected=true]:text-[#D9A441] hover:bg-[#D9A441]/15 hover:text-[#D9A441]"
                  >
                    <div className="flex items-center gap-3">
                      <FileText size={15} className="text-[#D9A441]" />
                      <span>{lang === "fr" ? "Télécharger le CV (PDF)" : "Download Resume (PDF)"}</span>
                    </div>
                    <span className="rounded-md border border-[#D9A441]/30 bg-[#D9A441]/10 px-2 py-0.5 text-[10px] font-mono text-[#D9A441]">
                      Action
                    </span>
                  </Command.Item>

                  <Command.Item
                    value="copier email copy takirida72@gmail.com adresse"
                    onSelect={copyEmail}
                    className="flex cursor-pointer items-center justify-between rounded-xl px-3 py-2.5 text-xs text-gray-300 transition-colors data-[selected=true]:bg-white/10 data-[selected=true]:text-white hover:bg-white/10 hover:text-white"
                  >
                    <div className="flex items-center gap-3">
                      <Mail size={15} className="text-emerald-400" />
                      <span>takirida72@gmail.com</span>
                    </div>
                    <span className="text-[10px] font-mono text-gray-500">
                      {lang === "fr" ? "Copier" : "Copy"}
                    </span>
                  </Command.Item>

                  <Command.Item
                    value="whatsapp message direct chat 212649487957"
                    onSelect={() => openLink("https://wa.me/212649487957")}
                    className="flex cursor-pointer items-center justify-between rounded-xl px-3 py-2.5 text-xs text-gray-300 transition-colors data-[selected=true]:bg-white/10 data-[selected=true]:text-white hover:bg-white/10 hover:text-white"
                  >
                    <div className="flex items-center gap-3">
                      <FaWhatsapp size={15} className="text-emerald-400" />
                      <span>{lang === "fr" ? "Discuter sur WhatsApp" : "Chat on WhatsApp"}</span>
                    </div>
                    <span className="text-[10px] font-mono text-gray-500">+212 649-487957</span>
                  </Command.Item>

                  <Command.Item
                    value="langue language switch toggle francais english"
                    onSelect={() => {
                      toggleLang();
                      setOpen(false);
                      toast.success(
                        lang === "fr" ? "Switched to English" : "Passé en Français"
                      );
                    }}
                    className="flex cursor-pointer items-center justify-between rounded-xl px-3 py-2.5 text-xs text-gray-300 transition-colors data-[selected=true]:bg-white/10 data-[selected=true]:text-white hover:bg-white/10 hover:text-white"
                  >
                    <div className="flex items-center gap-3">
                      <Globe size={15} className="text-[#D9A441]" />
                      <span>
                        {lang === "fr" ? "Passer en Anglais (EN)" : "Switch to French (FR)"}
                      </span>
                    </div>
                    <span className="text-[10px] font-mono text-gray-500 uppercase">{lang}</span>
                  </Command.Item>

                  <Command.Item
                    value="confetti fete celebration gold cannons"
                    onSelect={() => {
                      triggerSideCannons();
                      toast.success("✨ Célébration Dorée !", {
                        description: "Confettis lancés avec succès.",
                      });
                      setOpen(false);
                    }}
                    className="flex cursor-pointer items-center justify-between rounded-xl px-3 py-2.5 text-xs text-gray-300 transition-colors data-[selected=true]:bg-white/10 data-[selected=true]:text-white hover:bg-white/10 hover:text-white"
                  >
                    <div className="flex items-center gap-3">
                      <Sparkles size={15} className="text-[#D9A441]" />
                      <span>{lang === "fr" ? "Lancer les Confettis Dorés" : "Launch Gold Confetti"}</span>
                    </div>
                    <span className="text-[10px] font-mono text-[#D9A441]">Party 🎉</span>
                  </Command.Item>
                </Command.Group>

                {/* Group: Réseaux Sociaux */}
                <Command.Group
                  heading={lang === "fr" ? "Réseaux & Liens" : "Socials & Links"}
                  className="px-2 py-1.5 text-[10px] font-mono uppercase tracking-wider text-gray-400 font-semibold mt-2 border-t border-white/5 pt-3"
                >
                  <Command.Item
                    value="github code repo profil git"
                    onSelect={() => openLink("https://github.com/Rida1019-taki")}
                    className="flex cursor-pointer items-center justify-between rounded-xl px-3 py-2.5 text-xs text-gray-300 transition-colors data-[selected=true]:bg-white/10 data-[selected=true]:text-white hover:bg-white/10 hover:text-white"
                  >
                    <div className="flex items-center gap-3">
                      <FaGithub size={15} className="text-white" />
                      <span>GitHub</span>
                    </div>
                    <span className="text-[10px] font-mono text-gray-500">@Rida1019-taki</span>
                  </Command.Item>

                  <Command.Item
                    value="linkedin profil reseau carriere"
                    onSelect={() => openLink("https://www.linkedin.com/in/rida-taki-bb44a8350")}
                    className="flex cursor-pointer items-center justify-between rounded-xl px-3 py-2.5 text-xs text-gray-300 transition-colors data-[selected=true]:bg-white/10 data-[selected=true]:text-white hover:bg-white/10 hover:text-white"
                  >
                    <div className="flex items-center gap-3">
                      <FaLinkedin size={15} className="text-[#0A66C2]" />
                      <span>LinkedIn</span>
                    </div>
                    <span className="text-[10px] font-mono text-gray-500">rida-taki</span>
                  </Command.Item>

                  <Command.Item
                    value="instagram photos reseau social"
                    onSelect={() => openLink("https://www.instagram.com/rida_taki_10?igsh=OW5pZnI2Mjh2ejBv")}
                    className="flex cursor-pointer items-center justify-between rounded-xl px-3 py-2.5 text-xs text-gray-300 transition-colors data-[selected=true]:bg-white/10 data-[selected=true]:text-white hover:bg-white/10 hover:text-white"
                  >
                    <div className="flex items-center gap-3">
                      <FaInstagram size={15} className="text-[#E4405F]" />
                      <span>Instagram</span>
                    </div>
                    <span className="text-[10px] font-mono text-gray-500">@rida_taki_10</span>
                  </Command.Item>
                </Command.Group>
              </Command.List>

              {/* Palette Footer */}
              <div className="flex items-center justify-between border-t border-white/10 bg-white/[0.02] px-4 py-2.5 text-[11px] font-mono text-gray-400">
                <div className="flex items-center gap-3">
                  <span className="flex items-center gap-1">
                    <kbd className="rounded border border-white/20 bg-white/5 px-1.5 py-0.5 text-[10px] text-gray-300">
                      ↑↓
                    </kbd>{" "}
                    {lang === "fr" ? "Naviguer" : "Navigate"}
                  </span>
                  <span className="flex items-center gap-1">
                    <kbd className="rounded border border-white/20 bg-white/5 px-1.5 py-0.5 text-[10px] text-gray-300">
                      ↵
                    </kbd>{" "}
                    {lang === "fr" ? "Sélectionner" : "Select"}
                  </span>
                </div>
                <div className="flex items-center gap-1">
                  <kbd className="rounded border border-white/20 bg-white/5 px-1.5 py-0.5 text-[10px] text-gray-300">
                    ESC
                  </kbd>{" "}
                  {lang === "fr" ? "Fermer" : "Close"}
                </div>
              </div>
            </Command>
          </div>
        </div>
      )}
    </>
  );
}
