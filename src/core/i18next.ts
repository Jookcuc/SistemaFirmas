import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import { StringsAuth } from "./strings/";

i18next
  .use(initReactI18next)
  .init({
    resources: StringsAuth,
    lng: "es", // Idioma predeterminado
    fallbackLng: "en", // Idioma de respaldo
    interpolation: {
      escapeValue: false,
    },
  });

export default i18next;
