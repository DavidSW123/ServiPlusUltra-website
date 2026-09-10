import Link from "next/link";
import { ArrowUpRight, Hammer, Snowflake, Zap } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";

type ServiceCard = {
  slug: string;
  number: string;
  title: string;
  tagline: string;
  description: string;
  bullets: string[];
  icon: typeof Zap;
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
    bullets: ["Urgencias sin esperas", "Reforma completa de instalación", "Cambio de cuadro antiguo", "Mantenimiento empresas"],
    icon: Zap,
    badge: "Atención urgente",
  },
  {
    slug: "/climatizacion",
    number: "02",
    title: "Climatización",
    tagline: "A/C, calefacción y mantenimiento",
    description:
      "Instalar un split porque te asfixias en verano. Renovar el sistema completo. Mantenimiento de climatización para tu negocio.",
    bullets: ["Instalación de splits", "Reforma completa de clima", "Sistemas de calefacción", "Mantenimiento y reparaciones"],
    icon: Snowflake,
    badge: "Garantía 12 meses*",
  },
  {
    slug: "/reparaciones-manitas",
    number: "03",
    title: "Reformas y reparaciones",
    tagline: "Fontanería, carpintería, obra, pintura...",
    description:
      "Desde un tubo roto o una reforma de baño hasta obra integral. Fontanería, carpintería, albañilería, pintura y acabados.",
    bullets: ["Fontanería (tuberías, fugas)", "Carpintería (puertas, armarios)", "Reformas de todos los tamaños", "Albañilería, pintura, acabados"],
    icon: Hammer,
    badge: "Equipo propio",
  },
];

export function ServicesGrid() {
  return (
    <Section tone="cream" pad="lg">
      <div className="mx-auto max-w-3xl text-center">
        <SectionHeading
          align="center"
          eyebrow="Servicios"
          title={
            <>
              Tres especialidades. Un solo equipo de <span className="text-cobalt-600">oficio</span>.
            </>
          }
          subtitle="Llamas, escuchamos, vamos. Sin ramificaciones, sin sub-contratas, sin sorpresas."
        />
      </div>

      <div className="mt-14 grid gap-6 lg:grid-cols-3">
        {services.map((service) => (
          <Link
            key={service.slug}
            href={service.slug}
            className="group relative flex flex-col overflow-hidden rounded-2xl border border-ink-200 bg-white p-7 shadow-soft transition duration-300 hover:-translate-y-1 hover:border-cobalt-200 hover:shadow-card"
          >
            <span className="pointer-events-none absolute inset-x-0 top-0 h-0.5 origin-left scale-x-0 bg-gradient-to-r from-cobalt-500 to-cyan-400 transition-transform duration-300 group-hover:scale-x-100" aria-hidden />

            <div className="flex items-start justify-between">
              <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-cobalt-50 text-cobalt-600 ring-1 ring-cobalt-100 transition group-hover:bg-cobalt-500 group-hover:text-white">
                <service.icon className="h-7 w-7" strokeWidth={2} />
              </span>
              <span className="font-display text-5xl font-bold leading-none text-ink-100 transition group-hover:text-copper-400">
                {service.number}
              </span>
            </div>

            <span className="mt-6 inline-flex w-fit items-center gap-1.5 rounded-full bg-copper-50 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-copper-700">
              {service.badge}
            </span>

            <h3 className="mt-3 font-display text-2xl font-semibold text-ink-900">{service.title}</h3>
            <p className="mt-1 text-sm font-medium text-cobalt-600">{service.tagline}</p>
            <p className="mt-3 text-sm text-ink-500">{service.description}</p>

            <ul className="mt-5 space-y-2 border-t border-ink-100 pt-5 text-sm">
              {service.bullets.map((b) => (
                <li key={b} className="flex items-start gap-2 text-ink-600">
                  <span className="mt-1.5 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-cobalt-400" />
                  {b}
                </li>
              ))}
            </ul>

            <span className="mt-7 inline-flex items-center gap-1.5 text-sm font-semibold text-cobalt-600 transition group-hover:gap-2.5">
              Ver detalle del servicio
              <ArrowUpRight className="h-4 w-4" />
            </span>
          </Link>
        ))}
      </div>

      <div className="mx-auto mt-12 max-w-4xl rounded-2xl border border-ink-200 bg-white px-6 py-4 text-center text-sm text-ink-500 shadow-soft">
        <span className="font-semibold text-ink-900">Trabajamos con</span> particulares · constructoras ·
        inmobiliarias · comercios
      </div>
    </Section>
  );
}
