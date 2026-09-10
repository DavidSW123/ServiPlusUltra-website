import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Building2 } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";

const madridZones = ["Centro", "Salamanca", "Chamberí", "Chamartín", "Tetuán", "Retiro", "Arganzuela", "Moncloa", "Pozuelo de Alarcón", "Las Rozas", "Alcobendas", "Majadahonda"];
const barcelonaZones = ["Eixample", "Gràcia", "Sarrià-Sant Gervasi", "Les Corts", "Sant Martí", "Ciutat Vella", "Horta-Guinardó", "Nou Barris", "Sant Andreu", "L'Hospitalet", "Badalona", "Sant Cugat"];

function CityCard({ slug, title, subtitle, eta, zones, image }: { slug: string; title: string; subtitle: string; eta: string; zones: string[]; image: string }) {
  return (
    <Link href={slug} className="group flex flex-col overflow-hidden rounded-2xl border border-ink-200 bg-white shadow-soft transition duration-300 hover:-translate-y-1 hover:border-cobalt-200 hover:shadow-card">
      <div className="relative aspect-[21/9] overflow-hidden">
        <Image
          src={image}
          alt={`ServiPlusUltra — servicio técnico a domicilio en ${title}`}
          fill
          sizes="(max-width: 1024px) 100vw, 50vw"
          className="object-cover transition duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-cobalt-950/85 via-cobalt-950/30 to-transparent" aria-hidden />
        <div className="absolute inset-x-6 bottom-4 flex items-end justify-between">
          <div>
            <span className="text-[10px] font-semibold uppercase tracking-[0.16em] text-cobalt-100/80">{subtitle}</span>
            <h3 className="font-display text-4xl font-bold text-white sm:text-5xl">{title}</h3>
          </div>
          <span className="flex h-11 w-11 items-center justify-center rounded-full bg-white/95 text-cobalt-600 transition group-hover:bg-cobalt-500 group-hover:text-white">
            <ArrowRight className="h-4 w-4" />
          </span>
        </div>
      </div>

      <div className="flex flex-1 flex-col p-7">
        <p className="flex items-start gap-2 text-sm text-ink-600">
          <Building2 className="mt-0.5 h-4 w-4 shrink-0 text-copper-500" />
          {eta}
        </p>

        <div className="mt-6 border-t border-ink-100 pt-5">
          <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-ink-400">Zonas que cubrimos</p>
          <ul className="mt-3 flex flex-wrap gap-1.5">
            {zones.map((zone) => (
              <li key={zone} className="rounded-full border border-ink-200 bg-ink-50 px-2.5 py-1 text-xs font-medium text-ink-600">{zone}</li>
            ))}
          </ul>
        </div>

        <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-cobalt-600 transition group-hover:gap-2.5">
          Ver servicios en {title}
          <ArrowRight className="h-4 w-4" />
        </span>
      </div>
    </Link>
  );
}

export function CitiesCoverage() {
  return (
    <Section tone="light" pad="lg">
      <div className="mx-auto max-w-3xl text-center">
        <SectionHeading
          align="center"
          eyebrow="Cobertura"
          title={
            <>
              Nos movemos por <span className="text-cobalt-600">Madrid y Barcelona</span>, tú no.
            </>
          }
          subtitle="Servicio puramente a domicilio. Sin tienda, sin exposición. Preferimos invertir el tiempo en llegar hasta tu casa, tu negocio o tu comunidad."
        />
      </div>

      <div className="mt-12 grid gap-6 lg:grid-cols-2">
        <CityCard slug="/madrid" title="Madrid" subtitle="Ciudad y área metropolitana" eta="Buscamos contigo el horario más realista posible." zones={madridZones} image="/img/madrid.jpg" />
        <CityCard slug="/barcelona" title="Barcelona" subtitle="Ciudad y área metropolitana" eta="Llegada en menos de 4 horas en urgencias (sujeto a disponibilidad)." zones={barcelonaZones} image="/img/barcelona.jpg" />
      </div>
    </Section>
  );
}
