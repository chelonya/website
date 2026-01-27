/** @type {import('astro-i18next').AstroI18nextConfig} */
export default {
  defaultLocale: "en",
  locales: ["en", "es"],
  routes: {
    es: {
      "about-us": "nosotros",
      "services": "servicios",
      "projects": "proyectos",
      "what-to-expect": "que-esperar",
      "faq": "preguntas-frecuentes",
      "register": "registrarse",
    }
  },
  showDefaultLocale: false,
};
