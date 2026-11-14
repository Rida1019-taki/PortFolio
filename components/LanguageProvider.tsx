"use client";

import React, { createContext, useContext, useEffect, useState } from "react";
import { Language, TranslationSchema, translations } from "@/lib/translations";

interface LanguageContextType {
  lang: Language;
  setLang: (lang: Language) => void;
  toggleLang: () => void;
  t: TranslationSchema;
  mounted: boolean;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<Language>("en");
  const [mounted, setMounted] = useState(false);

  // Saved language lives in localStorage, so it can only be read after mount (SSR-safe hydration).
  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);
    try {
      const saved = localStorage.getItem("preferred_lang") as Language | null;
      if (saved === "en" || saved === "fr") {
        setLangState(saved);
      } else {
        // Check browser language or default to en
        const browserLang = navigator.language.slice(0, 2);
        if (browserLang === "fr") {
          setLangState("fr");
        } else {
          setLangState("en");
        }
      }
    } catch {
      setLangState("en");
    }
  }, []);

  const setLang = (newLang: Language) => {
    setLangState(newLang);
    try {
      localStorage.setItem("preferred_lang", newLang);
      document.documentElement.lang = newLang;
    } catch {
      // Ignore
    }
  };

  const toggleLang = () => {
    const next = lang === "en" ? "fr" : "en";
    setLang(next);
  };

  const t = translations[lang];

  return (
    <LanguageContext.Provider value={{ lang, setLang, toggleLang, t, mounted }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
