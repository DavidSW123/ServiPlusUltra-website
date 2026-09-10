import { Building, Factory, Home, Store, Users2 } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";

const sectors = [
  { icon: Home, title: "Hogares particulares", desc: "Pisos, casas y unifamiliares. Reparaciones puntuales, mantenimiento y mejoras." },
  { icon: Users2, title: "Comunidades de vecinos", desc: "Coordinamos con administradores y presidentes. Trato profesional y facturación clara." },
  { icon: Store, title: "Comercios y locales", desc: "Iluminación, climatización y mantenimiento sin parar tu actividad, en horarios compatibles." },
  { icon: Building, title: "Oficinas", desc: "Reparaciones rápidas, instalaciones y mantenimiento técnico para que tu equipo no pare." },
  { icon: Factory, title: "Inmobiliarias y constructoras", desc: "Remates eléctricos, climatización, manitas y obra. Cumplimos plazos y entregamos limpio." },
];

export function Sectors() {
  return (
    <Section tone="cream" pad="lg" decorative>
      <div className="mx-auto max-w-3xl text-center">
        <SectionHeading
          align="center"
          eyebrow="Para quién trabajamos"
          title={
            <>
              Particulares, comunidades y negocios. <span className="text-cobalt-600">Mismo nivel</span>.
            </>
          }
          subtitle="Adaptamos el trato y los horarios a cada cliente. Lo que no cambia es la transparencia y el cuidado del trabajo."
        />
      </div>

      <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
        {sectors.map((sector) => (
          <div key={sector.title} className="group rounded-2xl border border-ink-200 bg-white p-5 shadow-soft transition duration-300 hover:-translate-y-1 hover:border-cobalt-200 hover:shadow-card">
            <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-cobalt-50 text-cobalt-600 ring-1 ring-cobalt-100 transition group-hover:bg-cobalt-500 group-hover:text-white">
              <sector.icon className="h-5 w-5" strokeWidth={2} />
            </span>
            <h3 className="mt-4 font-display text-base font-semibold leading-tight text-ink-900">{sector.title}</h3>
            <p className="mt-2 text-sm text-ink-500">{sector.desc}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}
