import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import en from "./translations/en/global.json";
import fr from "./translations/fr/global.json";
import i18next from "i18next";
import { I18nextProvider } from "react-i18next";

const savedLang = localStorage.getItem("lang") || "en";

i18next.init({
  interpolation: { escapeValue: false },
  lng: savedLang,
  fallbackLng: "en",
  ns: ["global"],
  defaultNS: "global",
  resources: {
    en: { global: en },
    fr: { global: fr },
  },
  detection: {
    order: ["localStorage", "navigator"],
    caches: ["localStorage"],
  },
});

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <I18nextProvider i18n={i18next}>
      <App />
    </I18nextProvider>
  </StrictMode>
);
