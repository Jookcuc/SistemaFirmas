import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import { StringsAuth } from "./strings/";
import { StringsHistorialDocumentos } from "./strings/";

i18next
  .use(initReactI18next)
  .init({
    resources: {
      es: {
        auth: StringsAuth.es,
        historialDocumentos: StringsHistorialDocumentos.es,
      },
      en: {
        auth: StringsAuth.en,
        historialDocumentos: StringsHistorialDocumentos.en,
      },
    },
    lng: "es", // Idioma predeterminado
    fallbackLng: "en", // Idioma de respaldo
    interpolation: {
      escapeValue: false,
    },
  });

export default i18next;
