/**
 * Configuración central del sitio.
 *
 * Estos valores se usan como fallback cuando Sanity no está conectado.
 * Una vez activo el CMS, el contenido editable vendrá de Sanity y estos
 * valores quedarán solo para datos estructurales (URL, redes, etc.).
 */

export const siteConfig = {
  name: "ServiPlusUltra",
  legalName: "ServiPlusUltra Solutions S.L.",
  tagline: "Multiservicios premium en Madrid y Barcelona",
  description:
    "Electricidad, climatización y reparaciones del hogar a domicilio en Madrid y Barcelona. Técnicos cualificados, transparencia y soluciones que duran.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://www.serviplusultrasolutionssl.com",

  contact: {
    phone: "+34 641 482 762",
    phoneRaw: "+34641482762",
    phoneTel: "tel:+34641482762",
    whatsapp: "https://wa.me/34641482762",
    whatsappRaw: "34641482762",
    email: "info@serviplusultrasolutionssl.com",
    emailLink: "mailto:info@serviplusultrasolutionssl.com",
  },

  hours: {
    weekdays: "Lunes a viernes · 8:00 — 20:00",
    weekend: "Sábados · 9:00 — 14:00 (urgencias bajo consulta)",
    note: "Atención prioritaria en urgencias todos los días",
  },

  cities: [
    {
      slug: "madrid",
      name: "Madrid",
      label: "Madrid y alrededores",
      eta: "Tiempo de respuesta orientativo",
    },
    {
      slug: "barcelona",
      name: "Barcelona",
      label: "Barcelona y alrededores",
      eta: "Compromiso de llegada en menos de 4 horas (sujeto a disponibilidad)",
    },
  ] as const,

  services: [
    {
      slug: "electricidad",
      title: "Electricidad",
      shortTitle: "Electricidad",
      tagline: "Electricistas que dan la cara",
      description:
        "Averías, cuadros eléctricos, enchufes, iluminación y mejoras de seguridad. Diagnóstico claro y reparación duradera.",
    },
    {
      slug: "climatizacion",
      title: "Climatización",
      shortTitle: "Climatización",
      tagline: "Frío en agosto, calor en enero",
      description:
        "Instalación, mantenimiento y reparación de aire acondicionado, bombas de calor y ventilación residencial y comercial.",
    },
    {
      slug: "reparaciones-manitas",
      title: "Reparaciones y manitas",
      shortTitle: "Manitas",
      tagline: "Eso que nunca llega a hacerse",
      description:
        "Pequeñas reparaciones del hogar, montaje de muebles, fijaciones, remates de obra y todos esos arreglos que se acumulan.",
    },
  ] as const,

  social: {
    instagram: "",
    facebook: "",
    linkedin: "",
  },

  legal: {
    company: "ServiPlusUltra Solutions S.L.",
    cif: "B-26892760",
    address: "Carrer d'Aribau 168, 1º 1ª, 08036 Barcelona",
    registro: "Registro Mercantil de Barcelona — [Tomo ___, Folio ___, Hoja ___, Inscripción ___]",
    updated: "17 de junio de 2026",
  },
} as const;

export type Service = (typeof siteConfig.services)[number];
export type City = (typeof siteConfig.cities)[number];
