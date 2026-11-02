"use client";

import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import { toast } from "sonner";
import {
  Mail,
  Send,
  MessageSquare,
  Copy,
  Check,
  MapPin,
  Clock,
  Sparkles,
  Phone,
  ExternalLink,
} from "lucide-react";
import {
  FaGithub,
  FaLinkedin,
  FaWhatsapp,
  FaDiscord,
  FaInstagram,
} from "react-icons/fa";

interface ContactShowcaseProps {
  t: {
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
    btnSending: string;
    btnSend: string;
    toastSuccessTitle: string;
    toastSuccessDesc: string;
  };
}

export default function ContactShowcase({ t }: ContactShowcaseProps) {
  const [loading, setLoading] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const emailAddress = "rida.taki10@gmail.com";
  const whatsappNumber = "+212 649-487957";
  const whatsappUrl = "https://wa.me/212649487957";

  const copyEmailToClipboard = () => {
    navigator.clipboard.writeText(emailAddress);
    setCopiedEmail(true);
    toast.success("Email copié !", {
      description: "L'adresse rida.taki10@gmail.com a été copiée dans votre presse-papier.",
    });
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
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
      toast.success(t.toastSuccessTitle || "Message envoyé avec succès !", {
        description:
          t.toastSuccessDesc ||
          "Merci pour votre message. Je vous répondrai dans les plus brefs délais.",
      });
    } catch (error) {
      console.error(error);
      toast.error("Échec de l'envoi", {
        description: "Une erreur est survenue. Veuillez réessayer dans quelques instants ou me contacter sur WhatsApp.",
      });
    } finally {
      setLoading(false);
    }
  };

  const socials = [
    {
      icon: <FaGithub size={18} />,
      href: "https://github.com/Rida1019-taki",
      label: "GitHub",
      color: "#ffffff",
      hoverStyle: "hover:bg-white/20 hover:text-white hover:border-white/40",
    },
    {
      icon: <FaLinkedin size={18} />,
      href: "https://www.linkedin.com/in/rida-taki-bb44a8350",
      label: "LinkedIn",
      color: "#0A66C2",
      hoverStyle: "hover:bg-[#0A66C2]/20 hover:text-[#0A66C2] hover:border-[#0A66C2]/50",
    },
    {
      icon: <FaWhatsapp size={18} />,
      href: whatsappUrl,
      label: "WhatsApp",
      color: "#25D366",
      hoverStyle: "hover:bg-[#25D366]/20 hover:text-[#25D366] hover:border-[#25D366]/50",
    },
    {
      icon: <FaDiscord size={18} />,
      href: "https://discord.com/users/rida_taki",
      label: "Discord",
      color: "#5865F2",
      hoverStyle: "hover:bg-[#5865F2]/20 hover:text-[#5865F2] hover:border-[#5865F2]/50",
    },
    {
      icon: <FaInstagram size={18} />,
      href: "https://www.instagram.com/rida_taki_10?igsh=OW5pZnI2Mjh2ejBv",
      label: "Instagram",
      color: "#E4405F",
      hoverStyle: "hover:bg-[#E4405F]/20 hover:text-[#E4405F] hover:border-[#E4405F]/50",
    },
  ];

  return (
    <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.02] p-6 sm:p-10 lg:p-14 backdrop-blur-2xl shadow-2xl">
      {/* Ambient Orbs */}
      <div className="absolute -top-32 -right-32 h-96 w-96 rounded-full bg-[#D9A441]/10 blur-[130px] pointer-events-none" />
      <div className="absolute -bottom-32 -left-32 h-96 w-96 rounded-full bg-emerald-500/10 blur-[130px] pointer-events-none" />

      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
        
        {/* ─── LEFT COLUMN: DIRECT REACH & HOTLINES ─── */}
        <div className="lg:col-span-6 space-y-8">
          <div className="space-y-4">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-semibold text-[#D9A441] backdrop-blur-md">
              <Mail size={14} />
              <span>{t.badge}</span>
            </span>

            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight">
              <span>{t.title1} </span>
              <br />
              <span className="text-[#D9A441] font-extrabold">{t.title2}</span>
            </h2>

            <p className="text-base text-gray-300 leading-relaxed font-normal">
              {t.desc}
            </p>
          </div>

          {/* Quick Direct Channel Cards */}
          <div className="space-y-3 pt-2">
            
            {/* WhatsApp Quick Chat */}
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-between p-4 rounded-2xl border border-white/10 bg-white/[0.02] hover:border-[#25D366]/50 hover:bg-[#25D366]/5 transition-all duration-300"
            >
              <div className="flex items-center gap-3.5">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-[#25D366]/40 bg-[#25D366]/10 text-[#25D366]">
                  <FaWhatsapp size={22} />
                </div>
                <div>
                  <div className="text-xs font-mono uppercase tracking-wider text-white/50">
                    Discussion Directe WhatsApp
                  </div>
                  <div className="text-sm font-bold text-white group-hover:text-[#25D366] transition-colors font-mono">
                    {whatsappNumber}
                  </div>
                </div>
              </div>
              <ExternalLink size={15} className="text-gray-400 group-hover:text-[#25D366] transition-colors" />
            </a>

            {/* Email Direct with 1-Click Copy */}
            <div className="flex items-center justify-between p-4 rounded-2xl border border-white/10 bg-white/[0.02] hover:border-[#D9A441]/50 hover:bg-[#D9A441]/5 transition-all duration-300">
              <div className="flex items-center gap-3.5">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-[#D9A441]/40 bg-[#D9A441]/10 text-[#D9A441]">
                  <Mail size={20} />
                </div>
                <div>
                  <div className="text-xs font-mono uppercase tracking-wider text-white/50">
                    Email Professionnel
                  </div>
                  <div className="text-sm font-bold text-white font-mono">
                    {emailAddress}
                  </div>
                </div>
              </div>

              <button
                type="button"
                onClick={copyEmailToClipboard}
                title="Copier l'email"
                className="flex items-center gap-1.5 rounded-lg border border-white/15 bg-white/5 px-3 py-1.5 text-xs font-mono text-gray-300 hover:border-[#D9A441] hover:text-[#D9A441] transition-all"
              >
                {copiedEmail ? <Check size={14} className="text-emerald-400" /> : <Copy size={14} />}
                <span>{copiedEmail ? "Copié !" : "Copier"}</span>
              </button>
            </div>

            {/* Location & Availability Card */}
            <div className="flex items-center gap-3.5 p-4 rounded-2xl border border-white/5 bg-white/[0.01]">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-gray-400">
                <MapPin size={20} className="text-[#D9A441]" />
              </div>
              <div>
                <div className="text-xs font-mono uppercase tracking-wider text-white/50">
                  Localisation & Mobilité
                </div>
                <div className="text-xs sm:text-sm font-medium text-gray-300">
                  Béni Mellal, Maroc • Disponible en présentiel, hybride ou télétravail
                </div>
              </div>
            </div>

          </div>

          {/* Social Links Row */}
          <div className="space-y-3 pt-2">
            <span className="text-xs font-mono uppercase tracking-widest text-white/50 block">
              {t.socialsHeader || "Réseaux Professionnels :"}
            </span>

            <div className="flex flex-wrap gap-3">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className={`flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-gray-300 transition-all duration-300 hover:scale-110 shadow-md ${s.hoverStyle}`}
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* ─── RIGHT COLUMN: GLASS CONTACT FORM ─── */}
        <div className="lg:col-span-6">
          <form
            onSubmit={handleSubmit}
            className="space-y-5 rounded-3xl border border-white/10 bg-black/70 p-6 sm:p-8 backdrop-blur-2xl shadow-2xl"
          >
            {/* Form Header */}
            <div className="flex items-center justify-between border-b border-white/10 pb-4">
              <h3 className="text-lg sm:text-xl font-bold text-white">
                {t.formTitle}
              </h3>
              <span className="text-xs font-mono text-[#D9A441] flex items-center gap-1.5">
                <Clock size={12} />
                <span>Réponse &lt; 24h</span>
              </span>
            </div>

            {/* Form Fields */}
            <div className="space-y-4">
              {/* Name */}
              <div>
                <label className="mb-2 block text-xs font-mono uppercase tracking-wider text-gray-400">
                  {t.labelName}
                </label>
                <input
                  name="from_name"
                  type="text"
                  required
                  placeholder={t.placeholderName}
                  className="w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-white placeholder-gray-500 backdrop-blur-md transition-all focus:border-[#D9A441] focus:outline-none focus:ring-1 focus:ring-[#D9A441]"
                />
              </div>

              {/* Email */}
              <div>
                <label className="mb-2 block text-xs font-mono uppercase tracking-wider text-gray-400">
                  {t.labelEmail}
                </label>
                <input
                  name="from_email"
                  type="email"
                  required
                  placeholder={t.placeholderEmail}
                  className="w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-white placeholder-gray-500 backdrop-blur-md transition-all focus:border-[#D9A441] focus:outline-none focus:ring-1 focus:ring-[#D9A441]"
                />
              </div>

              {/* Subject */}
              <div>
                <label className="mb-2 block text-xs font-mono uppercase tracking-wider text-gray-400">
                  {t.labelSubject}
                </label>
                <input
                  name="subject"
                  type="text"
                  required
                  placeholder={t.placeholderSubject}
                  className="w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-white placeholder-gray-500 backdrop-blur-md transition-all focus:border-[#D9A441] focus:outline-none focus:ring-1 focus:ring-[#D9A441]"
                />
              </div>

              {/* Message */}
              <div>
                <label className="mb-2 block text-xs font-mono uppercase tracking-wider text-gray-400">
                  {t.labelMessage}
                </label>
                <textarea
                  name="message"
                  required
                  rows={4}
                  placeholder={t.placeholderMessage}
                  className="w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-white placeholder-gray-500 backdrop-blur-md transition-all focus:border-[#D9A441] focus:outline-none focus:ring-1 focus:ring-[#D9A441] resize-none"
                />
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={loading}
              className="group relative flex w-full items-center justify-center gap-2.5 rounded-xl bg-gradient-to-r from-[#D9A441] to-[#B8860B] py-3.5 text-sm font-bold text-black shadow-lg shadow-[#D9A441]/20 transition-all duration-300 hover:scale-[1.01] hover:shadow-[0_0_25px_rgba(217,164,65,0.4)] disabled:opacity-50 disabled:hover:scale-100"
            >
              {loading ? (
                <>
                  <div className="h-4 w-4 rounded-full border-2 border-black border-t-transparent animate-spin" />
                  <span>{t.btnSending}</span>
                </>
              ) : (
                <>
                  <Send size={15} className="transition-transform group-hover:translate-x-0.5" />
                  <span>{t.btnSend}</span>
                </>
              )}
            </button>
          </form>
        </div>

      </div>
    </div>
  );
}
