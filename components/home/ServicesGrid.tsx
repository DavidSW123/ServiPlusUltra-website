import Link from "next/link";
import Image from "next/image";
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
  image: string;
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
    image: "/img/electricidad.jpg",
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
    image: "/img/climatizacion.jpg",
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
    image: "/img/reformas.jpg",
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
            className="group flex flex-col overflow-hidden rounded-2xl border border-ink-200 bg-white shadow-soft transition duration-300 hover:-translate-y-1 hover:border-cobalt-200 hover:shadow-card"
          >
            <div className="relative aspect-[16/10] overflow-hidden">
              <Image
                src={service.image}
                alt={`ServiPlusUltra — ${service.title} en Madrid y Barcelona`}
                fill
                sizes="(max-width: 1024px) 100vw, 33vw"
                className="object-cover transition duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-cobalt-950/80 via-cobalt-950/20 to-transparent" aria-hidden />
              <span className="absolute left-4 top-4 flex h-11 w-11 items-center justify-center rounded-xl bg-white/95 text-cobalt-600 shadow-soft backdrop-blur">
                <service.icon className="h-6 w-6" strokeWidth={2} />
              </span>
              <span className="absolute right-4 top-3 font-display text-4xl font-bold text-white/90">{service.number}</span>
              <div className="absolute inset-x-4 bottom-3 flex items-end justify-between">
                <h3 className="font-display text-2xl font-semibold text-white">{service.title}</h3>
                <span className="rounded-full bg-copper-500 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-white">
                  {service.badge}
                </span>
              </div>
            </div>

            <div className="flex flex-1 flex-col p-6">
              <p className="text-sm font-medium text-cobalt-600">{service.tagline}</p>
              <p className="mt-2 text-sm text-ink-500">{service.description}</p>

              <ul className="mt-5 space-y-2 border-t border-ink-100 pt-5 text-sm">
                {service.bullets.map((b) => (
                  <li key={b} className="flex items-start gap-2 text-ink-600">
                    <span className="mt-1.5 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-cobalt-400" />
                    {b}
                  </li>
                ))}
              </ul>

              <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-cobalt-600 transition group-hover:gap-2.5">
                Ver detalle del servicio
                <ArrowUpRight className="h-4 w-4" />
              </span>
            </div>
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
