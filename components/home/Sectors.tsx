import { Building, Factory, Home, Store, Users2 } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { Eyebrow } from "@/components/ui/Eyebrow";

const sectors = [
  {
    icon: Home,
    title: "Hogares particulares",
    desc: "Pisos, casas y unifamiliares. Reparaciones puntuales, mantenimiento y mejoras.",
    bg: "bg-cream-50",
    iconBg: "bg-brand-600 text-white",
  },
  {
    icon: Users2,
    title: "Comunidades de vecinos",
    desc: "Coordinamos con administradores y presidentes. Trato profesional y facturación clara.",
    bg: "bg-mint-100",
    iconBg: "bg-coral-500 text-white",
  },
  {
    icon: Store,
    title: "Comercios y locales",
    desc: "Iluminación, climatización y mantenimiento sin parar tu actividad. Trabajamos en horarios compatibles.",
    bg: "bg-sun-400",
    iconBg: "bg-ink-900 text-sun-400",
  },
  {
    icon: Building,
    title: "Oficinas",
    desc: "Reparaciones rápidas, instalaciones y mantenimiento técnico para que tu equipo no pare.",
    bg: "bg-coral-500 text-white",
    iconBg: "bg-sun-400 text-ink-900",
  },
  {
    icon: Factory,
    title: "Inmobiliarias y constructoras",
    desc: "Apoyamos con remates eléctricos, climatización y manitas. Cumplimos plazos y entregamos limpio.",
    bg: "bg-brand-600 text-white",
    iconBg: "bg-sun-400 text-ink-900",
  },
];

export function Sectors() {
  return (
    <Section tone="cream" pad="lg" decorative>
      <div className="mx-auto max-w-3xl text-center">
        <div className="flex justify-center">
          <Eyebrow tone="mint" sticker>
            ✦ Para quién trabajamos
          </Eyebrow>
        </div>
        <h2 className="mt-6 font-display text-display-lg text-ink-900">
          Particulares, comunidades, negocios.{" "}
          <span className="relative inline-block text-coral-500">
            <span className="relative z-10">Mismo nivel</span>
            <span className="absolute inset-x-0 bottom-1 -z-0 h-3 bg-sun-400" aria-hidden />
          </span>{" "}
          de servicio.
        </h2>
        <p className="mx-auto mt-5 max-w-2xl text-pretty text-lg text-ink-700">
          Adaptamos el trato y los horarios a cada cliente. Lo que no cambia es la transparencia y el cuidado del trabajo.
        </p>
      </div>

      <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
        {sectors.map((sector) => (
          <div
            key={sector.title}
            className={`group rounded-3xl border-2 border-ink-900 p-5 shadow-sticker transition hover:-translate-y-1 hover:shadow-[6px_6px_0_0_rgba(26,26,26,1)] ${sector.bg}`}
          >
            <span
              className={`flex h-11 w-11 items-center justify-center rounded-xl border-2 border-ink-900 ${sector.iconBg}`}
            >
              <sector.icon className="h-5 w-5" strokeWidth={2.2} />
            </span>
            <h3 className="mt-4 font-display text-base font-bold leading-tight">{sector.title}</h3>
            <p className="mt-2 text-sm opacity-90">{sector.desc}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}
