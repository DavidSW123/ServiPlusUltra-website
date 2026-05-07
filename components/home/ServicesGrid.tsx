import Link from "next/link";
import { ArrowUpRight, Hammer, Snowflake, Zap } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { Eyebrow } from "@/components/ui/Eyebrow";

type ServiceCard = {
  slug: string;
  number: string;
  title: string;
  tagline: string;
  description: string;
  bullets: string[];
  icon: typeof Zap;
  /** color del bloque entero */
  variant: "cobalt" | "cream" | "sun";
  /** sticker badge */
  badge: string;
};

const services: ServiceCard[] = [
  {
    slug: "/electricidad",
    number: "01",
    title: "Electricidad",
    tagline: "Desde un enchufe a una nueva instalación",
    description:
      "Urgencias eléctricas, reformas completas, cambios de cuadro por normativa y mantenimiento preventivo en comercios.",
    bullets: [
      "Urgencias 24h sin esperas",
      "Reforma completa de instalación",
      "Cambio de cuadro antiguo",
      "Mantenimiento empresas",
    ],
    icon: Zap,
    variant: "cobalt",
    badge: "URGENCIAS 24H",
  },
  {
    slug: "/climatizacion",
    number: "02",
    title: "Climatización",
    tagline: "A/C, calefacción y mantenimiento",
    description:
      "Instalar un split porque te asfixias en verano. Renovar el sistema completo. Mantenimiento de climatización para tu negocio.",
    bullets: [
      "Instalación de splits",
      "Reforma completa de clima",
      "Sistemas de calefacción",
      "Mantenimiento y reparaciones",
    ],
    icon: Snowflake,
    variant: "cream",
    badge: "★ GARANTÍA 3 AÑOS",
  },
  {
    slug: "/reparaciones-manitas",
    number: "03",
    title: "Lo demás",
    tagline: "Fontanería, carpintería, pintura...",
    description:
      "Tubo roto. Reforma de baño. Colgar muebles. Pintar. Arreglar lo que sea. Si hay que hacer un trabajito, llamanos.",
    bullets: [
      "Fontanería (tuberías, fugas)",
      "Carpintería (puertas, armarios)",
      "Albañilería, pintura, acabados",
      "Eso que no sabes a quién llamar",
    ],
    icon: Hammer,
    variant: "sun",
    badge: "EQUIPO PROPIO",
  },
];

const variantStyles = {
  cobalt: {
    bg: "bg-brand-600",
    text: "text-white",
    sub: "text-cream-100",
    body: "text-cream-100/90",
    bullet: "bg-sun-400",
    bulletText: "text-cream-50",
    number: "text-sun-400",
    icon: "bg-sun-400 text-ink-900",
    link: "text-sun-400",
    badgeBg: "bg-sun-400 text-ink-900",
  },
  cream: {
    bg: "bg-cream-50",
    text: "text-ink-900",
    sub: "text-coral-600",
    body: "text-ink-700",
    bullet: "bg-coral-500",
    bulletText: "text-ink-700",
    number: "text-brand-600",
    icon: "bg-coral-500 text-white",
    link: "text-coral-600",
    badgeBg: "bg-coral-500 text-white",
  },
  sun: {
    bg: "bg-sun-400",
    text: "text-ink-900",
    sub: "text-brand-700",
    body: "text-ink-800",
    bullet: "bg-brand-600",
    bulletText: "text-ink-800",
    number: "text-coral-500",
    icon: "bg-brand-600 text-white",
    link: "text-brand-700",
    badgeBg: "bg-brand-600 text-white",
  },
} as const;

export function ServicesGrid() {
  return (
    <Section tone="cream" pad="lg" decorative>
      <div className="mx-auto max-w-3xl text-center">
        <div className="flex justify-center">
          <Eyebrow tone="coral" sticker>
            ● Servicios
          </Eyebrow>
        </div>
        <h2 className="mt-6 font-display text-display-lg text-ink-900">
          Tres especialidades.{" "}
          <span className="relative inline-block">
            <span className="relative z-10">Un solo equipo</span>
            <span className="absolute inset-x-0 bottom-1 -z-0 h-3 bg-sun-400" aria-hidden />
          </span>{" "}
          de <span className="text-coral-500">oficio.</span>
        </h2>
        <p className="mx-auto mt-5 max-w-2xl text-pretty text-lg text-ink-700">
          Llamas, escuchamos, vamos. Sin ramificaciones, sin sub-contratas, sin sorpresas.
        </p>
      </div>

      <div className="mt-14 grid gap-6 lg:grid-cols-3">
        {services.map((service) => {
          const v = variantStyles[service.variant];
          return (
            <Link
              key={service.slug}
              href={service.slug}
              className={`group relative flex flex-col rounded-3xl border-2 border-ink-900 p-7 shadow-sticker transition hover:-translate-y-1 hover:shadow-[8px_8px_0_0_rgba(26,26,26,1)] ${v.bg}`}
            >
              {/* Sticker badge rotado */}
              <div
                className={`absolute -top-3 right-5 rotate-sticker-2 rounded-full border-2 border-ink-900 px-3 py-1 text-[10px] font-bold uppercase tracking-wider shadow-sticker ${v.badgeBg}`}
              >
                {service.badge}
              </div>

              {/* Número grande + icono */}
              <div className="flex items-start justify-between">
                <span className={`font-display text-7xl font-bold leading-none ${v.number}`}>
                  {service.number}
                </span>
                <span
                  className={`flex h-14 w-14 items-center justify-center rounded-2xl border-2 border-ink-900 ${v.icon}`}
                >
                  <service.icon className="h-7 w-7" strokeWidth={2.2} />
                </span>
              </div>

              <h3 className={`mt-8 font-display text-3xl font-bold ${v.text}`}>
                {service.title}
              </h3>
              <p className={`mt-1 text-sm font-semibold ${v.sub}`}>{service.tagline}</p>
              <p className={`mt-4 text-sm ${v.body}`}>{service.description}</p>

              <ul className={`mt-5 space-y-2 border-t-2 border-ink-900/15 pt-5 text-sm ${v.bulletText}`}>
                {service.bullets.map((bullet) => (
                  <li key={bullet} className="flex items-start gap-2">
                    <span className={`mt-1.5 inline-block h-1.5 w-1.5 shrink-0 rounded-full ${v.bullet}`} />
                    {bullet}
                  </li>
                ))}
              </ul>

              <span className={`mt-7 inline-flex items-center gap-1.5 text-sm font-bold ${v.link}`}>
                Ver detalle del servicio
                <ArrowUpRight className="h-4 w-4 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </span>
            </Link>
          );
        })}
      </div>

      {/* Banda inferior de confianza */}
      <div className="mx-auto mt-14 max-w-4xl rounded-full border-2 border-ink-900 bg-ink-900 px-6 py-3 text-center text-sm font-bold uppercase tracking-wider text-cream-50 shadow-sticker">
        <span className="text-sun-400">★</span> Trabajamos con{" "}
        <span className="text-sun-400">Particulares</span> ·{" "}
        <span className="text-sun-400">Constructoras</span> ·{" "}
        <span className="text-sun-400">Inmobiliarias</span> ·{" "}
        <span className="text-sun-400">Comercios</span>
      </div>
    </Section>
  );
}
