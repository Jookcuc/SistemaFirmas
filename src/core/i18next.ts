import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import es from "./lang/es";


i18next
  .use(initReactI18next)
  .init({
    resources: {
      es
    },
    lng: "es", // Idioma predeterminado
    fallbackLng: "en", // Idioma de respaldo
    interpolation: {
      escapeValue: false,
    },
  });

export default i18next;
