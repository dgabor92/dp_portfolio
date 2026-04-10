import translations from "../../translations.json";

export const sectionIds = ["header", "experience", "service", "contact"];

export function getLocale() {
  if (typeof navigator === "undefined") {
    return "en";
  }

  return navigator.language?.toLowerCase().startsWith("hu") ? "hu" : "en";
}

export function getContent(locale) {
  return translations[locale] ?? translations.en;
}

