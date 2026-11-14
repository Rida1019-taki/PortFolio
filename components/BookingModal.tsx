"use client";

import React, { useState } from "react";
import {
  Calendar,
  Clock,
  Video,
  CheckCircle2,
  X,
  Sparkles,
  User,
  Building,
  Mail,
  Send,
  ArrowRight,
} from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { playClick, playSuccess } from "@/lib/sound";
import { triggerGoldConfetti } from "@/lib/confetti";
import { toast } from "sonner";
import { useLanguage } from "@/components/LanguageProvider";

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const TOPICS = [
  { id: "job", label: { fr: "Entretien Recrutement (CDI / Poste)", en: "Job Interview (Full-time / Role)" }, icon: "💼" },
  { id: "freelance", label: { fr: "Projet Web / Freelance", en: "Web Project / Freelance" }, icon: "🚀" },
  { id: "coffee", label: { fr: "Échange Technique / Networking", en: "Tech Chat / Networking" }, icon: "☕" },
];

const TIME_SLOTS = ["10:00", "11:30", "14:30", "16:00", "17:30"];

export default function BookingModal({ isOpen, onClose }: BookingModalProps) {
  const { lang } = useLanguage();
  const [topic, setTopic] = useState("job");
  const [selectedSlot, setSelectedSlot] = useState("14:30");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [isBooked, setIsBooked] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email) {
      toast.error(
        lang === "fr"
          ? "Veuillez renseigner votre nom et votre adresse email."
          : "Please enter your name and email address."
      );
      return;
    }

    playSuccess();
    triggerGoldConfetti();
    setIsBooked(true);

    const message =
      lang === "fr"
        ? `Bonjour Rida, je souhaite réserver un créneau de 15 min (${topic}) le créneau ${selectedSlot}. De la part de ${name} (${company || "Recruteur"}), email: ${email}`
        : `Hello Rida, I'd like to book a 15-min slot (${topic}) at ${selectedSlot}. From ${name} (${company || "Recruiter"}), email: ${email}`;
    const whatsappUrl = `https://wa.me/212649487957?text=${encodeURIComponent(message)}`;

    toast.success(lang === "fr" ? "Rendez-vous préparé avec succès !" : "Meeting request prepared successfully!", {
      description:
        lang === "fr"
          ? "Vous pouvez également finaliser la confirmation sur WhatsApp."
          : "You can also finalize the confirmation on WhatsApp.",
    });
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-xl max-h-[90vh] overflow-y-auto rounded-3xl border border-white/15 bg-neutral-950 p-5 sm:p-8 shadow-2xl shadow-black/90 backdrop-blur-2xl animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Gold Gradient Bar */}
        <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-transparent via-[#D9A441] to-transparent" />

        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          aria-label={lang === "fr" ? "Fermer" : "Close"}
          className="absolute top-5 right-5 rounded-full p-2 text-gray-400 hover:bg-white/10 hover:text-white transition-colors cursor-pointer"
        >
          <X size={18} />
        </button>

        {!isBooked ? (
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Modal Header */}
            <div className="space-y-1">
              <div className="inline-flex items-center gap-2 rounded-full border border-[#D9A441]/30 bg-[#D9A441]/10 px-3 py-1 text-xs font-mono font-semibold text-[#D9A441]">
                <Calendar size={13} />
                <span>15-Min Intro Call</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                {lang === "fr" ? "Planifier un échange avec Rida Taki" : "Schedule a call with Rida Taki"}
              </h3>
              <p className="text-xs text-gray-400 font-mono">
                {lang === "fr"
                  ? "Choisissez le format et le créneau idéal pour discuter d'un poste ou d'un projet."
                  : "Pick the format and the ideal time slot to discuss a role or a project."}
              </p>
            </div>

            {/* Topic Select */}
            <div className="space-y-2">
              <label className="text-xs font-mono text-gray-300 font-semibold">
                {lang === "fr" ? "Objet de la rencontre :" : "Meeting topic:"}
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                {TOPICS.map((t) => (
                  <button
                    key={t.id}
                    type="button"
                    onClick={() => {
                      playClick();
                      setTopic(t.id);
                    }}
                    className={`flex items-center gap-2 rounded-xl border p-2.5 text-xs font-mono text-left transition-all cursor-pointer ${
                      topic === t.id
                        ? "border-[#D9A441] bg-[#D9A441]/15 text-white font-bold"
                        : "border-white/10 bg-white/5 text-gray-400 hover:text-white hover:border-white/20"
                    }`}
                  >
                    <span>{t.icon}</span>
                    <span className="line-clamp-1">{t.label[lang]}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Time Slot Picker */}
            <div className="space-y-2">
              <div className="flex items-center justify-between text-xs font-mono text-gray-300 font-semibold">
                <span>{lang === "fr" ? "Créneau horaire (Fuseau Maroc : UTC+1) :" : "Time slot (Morocco time: UTC+1):"}</span>
                <span className="text-[#D9A441] flex items-center gap-1">
                  <Video size={12} />
                  Google Meet
                </span>
              </div>
              <div className="flex flex-wrap gap-2">
                {TIME_SLOTS.map((slot) => (
                  <button
                    key={slot}
                    type="button"
                    onClick={() => {
                      playClick();
                      setSelectedSlot(slot);
                    }}
                    className={`rounded-xl border px-3.5 py-1.5 text-xs font-mono font-semibold transition-all cursor-pointer ${
                      selectedSlot === slot
                        ? "border-emerald-500 bg-emerald-500/20 text-emerald-400 shadow-[0_0_15px_rgba(16,185,129,0.3)]"
                        : "border-white/10 bg-white/5 text-gray-400 hover:border-white/20 hover:text-white"
                    }`}
                  >
                    {slot}
                  </button>
                ))}
              </div>
            </div>

            {/* Form Fields */}
            <div className="space-y-3">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="text-[11px] font-mono text-gray-400">{lang === "fr" ? "Votre Nom *" : "Your Name *"}</label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder={lang === "fr" ? "ex. Sarah Bensouda" : "e.g. Sarah Bensouda"}
                    className="w-full rounded-xl border border-white/10 bg-white/5 px-3.5 py-2 text-xs text-white placeholder-gray-500 focus:border-[#D9A441] focus:outline-none font-mono"
                  />
                </div>
                <div>
                  <label className="text-[11px] font-mono text-gray-400">{lang === "fr" ? "Entreprise / Organisation" : "Company / Organization"}</label>
                  <input
                    type="text"
                    value={company}
                    onChange={(e) => setCompany(e.target.value)}
                    placeholder={lang === "fr" ? "ex. DevCorp Maroc" : "e.g. DevCorp Morocco"}
                    className="w-full rounded-xl border border-white/10 bg-white/5 px-3.5 py-2 text-xs text-white placeholder-gray-500 focus:border-[#D9A441] focus:outline-none font-mono"
                  />
                </div>
              </div>

              <div>
                <label className="text-[11px] font-mono text-gray-400">{lang === "fr" ? "Adresse Email Professionnelle *" : "Work Email Address *"}</label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder={lang === "fr" ? "nom@entreprise.com" : "name@company.com"}
                  className="w-full rounded-xl border border-white/10 bg-white/5 px-3.5 py-2 text-xs text-white placeholder-gray-500 focus:border-[#D9A441] focus:outline-none font-mono"
                />
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="flex w-full items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-[#D9A441] to-[#B8860B] py-3 text-xs font-bold font-mono text-black shadow-lg shadow-[#D9A441]/20 transition-all hover:scale-[1.02] hover:shadow-[0_0_25px_rgba(217,164,65,0.4)] cursor-pointer"
            >
              <span>{lang === "fr" ? "Confirmer la Demande d'Appel" : "Confirm Call Request"}</span>
              <ArrowRight size={14} />
            </button>
          </form>
        ) : (
          /* Confirmation Success Screen */
          <div className="py-6 text-center space-y-5 animate-in zoom-in-95 duration-200">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl border border-emerald-500/40 bg-emerald-500/10 text-emerald-400 shadow-[0_0_30px_rgba(16,185,129,0.3)]">
              <CheckCircle2 size={36} />
            </div>

            <div className="space-y-2">
              <h3 className="text-xl font-bold               text-white">
                              {lang === "fr" ? "Demande Enregistrée avec Succès !" : "Request Successfully Submitted!"}
                            </h3>
                            {lang === "fr" ? (
                              <p className="text-xs text-gray-300 font-mono max-w-md mx-auto leading-relaxed">
                                Merci {name}. Rida Taki a bien reçu votre demande pour le créneau de <span className="text-[#D9A441] font-bold">{selectedSlot}</span>. Une confirmation par email vous sera adressée rapidement.
                              </p>
                            ) : (
                              <p className="text-xs text-gray-300 font-mono max-w-md mx-auto leading-relaxed">
                                Thank you {name}. Rida Taki has received your request for the <span className="text-[#D9A441] font-bold">{selectedSlot}</span> slot. An email confirmation will be sent to you shortly.
                              </p>
                            )}
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
              <a
                href={`https://wa.me/212649487957?text=${encodeURIComponent(
                  lang === "fr"
                    ? `Bonjour Rida, je viens de réserver un créneau de 15 min (${selectedSlot}) sur votre portfolio. De la part de ${name} (${company}).`
                    : `Hello Rida, I just booked a 15-min slot (${selectedSlot}) on your portfolio. From ${name} (${company}).`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl bg-emerald-600 px-5 py-2.5 text-xs font-bold text-white transition-all hover:bg-emerald-500 shadow-lg shadow-emerald-600/20"
              >
                <FaWhatsapp size={15} />
                <span>{lang === "fr" ? "Confirmer aussi sur WhatsApp" : "Also confirm on WhatsApp"}</span>
              </a>

              <button
                type="button"
                onClick={onClose}
                className="rounded-xl border border-white/15 bg-white/5 px-4 py-2.5 text-xs font-mono text-gray-300 hover:text-white"
              >
                {lang === "fr" ? "Fermer" : "Close"}
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
