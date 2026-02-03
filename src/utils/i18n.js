import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";
import enTranslations from "./locales/en/translation";
import frTranslations from "./locales/fr/translation";

const resources = {
  en: {
    translation: enTranslations.en.translation
  },
  fr: {
    translation: frTranslations.fr.translation
  }
};

// Initialize i18next
i18n
  .use(LanguageDetector) // Detect user language
  .use(initReactI18next) // Pass to react-i18next
  .init({
    resources,
    fallbackLng: "en", // Default language if detection fails
    // Remove hardcoded lng to allow automatic detection
    
    detection: {
      // Language detection options - prioritize browser language first
      order: ['navigator', 'localStorage', 'htmlTag', 'path', 'subdomain'],
      // Only cache to localStorage after detection
      caches: ['localStorage'],
      // Look for exact matches first (fr, en), then language family matches (fr-CA -> fr)
      lookupFromPathIndex: 0,
      lookupFromSubdomainIndex: 0,
      // Convert browser language codes to our supported languages
      convertDetectedLanguage: (lng) => {
        // Extract base language code (e.g., 'fr-CA' -> 'fr', 'en-US' -> 'en')
        const baseLanguage = lng.split('-')[0].toLowerCase();
        // Return 'fr' if base language is French, otherwise default to 'en'
        return baseLanguage === 'fr' ? 'fr' : 'en';
      }
    },

    interpolation: {
      escapeValue: false,

      // Custom formatter for dates
      format: (value, format, lng) => {
        if (format === "date") {
          return new Intl.DateTimeFormat(lng, {
            year: "numeric",
            month: "long",
            day: "numeric",
          }).format(value);
        }

        return value;
      },
    },

    // Enable debug mode in development
    debug: process.env.NODE_ENV === 'development',
  });

export default i18n;
