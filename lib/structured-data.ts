import { siteConfig } from "./site-config";

/** LocalBusiness (negocio de construcción/servicios a domicilio) para todo el sitio. */
export const localBusinessJsonLd: Record<string, unknown> = {
  "@context": "https://schema.org",
  "@type": "HomeAndConstructionBusiness",
  name: siteConfig.legalName,
  alternateName: siteConfig.name,
  url: siteConfig.url,
  telephone: siteConfig.contact.phoneRaw,
  email: siteConfig.contact.email,
  image: `${siteConfig.url}/logo.png`,
  logo: `${siteConfig.url}/logo.png`,
  description: siteConfig.description,
  address: {
    "@type": "PostalAddress",
    streetAddress: "Carrer d'Aribau 168, 1º 1ª",
    addressLocality: "Barcelona",
    postalCode: "08036",
    addressRegion: "Barcelona",
    addressCountry: "ES",
  },
  areaServed: [
    { "@type": "City", name: "Madrid" },
    { "@type": "City", name: "Barcelona" },
  ],
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "08:00",
      closes: "20:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Saturday"],
      opens: "09:00",
      closes: "14:00",
    },
  ],
  priceRange: "€€",
  knowsAbout: [
    "Electricidad",
    "Climatización",
    "Fontanería",
    "Carpintería",
    "Reparaciones del hogar",
    "Reformas",
  ],
};

/** FAQPage a partir de una lista de preguntas/respuestas. */
export function faqJsonLd(items: { q: string; a: string }[]): Record<string, unknown> {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  };
}
