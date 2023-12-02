import React from "react";
import { initReactI18next } from "react-i18next";
import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import enTranslation from "./locales/en/translation.json";
import hiTranslation from "./locales/hi/translation.json";

// Initialize i18next
i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .use(LanguageDetector) // detect user's language

  .init({
    resources: {
      en: {
        translation: enTranslation,
      },
      hi: {
        translation: hiTranslation,
      },
    },
    fallbackLng: "en", // fallback language
    interpolation: {
      escapeValue: false, // not needed for React
    },
  });
