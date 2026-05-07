import Link from "next/link";
import { ArrowRight, Building2, MapPinned } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { Eyebrow } from "@/components/ui/Eyebrow";

const madridZones = [
  "Centro",
  "Salamanca",
  "Chamberí",
  "Chamartín",
  "Tetuán",
  "Retiro",
  "Arganzuela",
  "Moncloa",
  "Pozuelo de Alarcón",
  "Las Rozas",
  "Alcobendas",
  "Majadahonda",
];

const barcelonaZones = [
  "Eixample",
  "Gràcia",
  "Sarrià-Sant Gervasi",
  "Les Corts",
  "Sant Martí",
  "Ciutat Vella",
  "Horta-Guinardó",
  "Nou Barris",
  "Sant Andreu",
  "L'Hospitalet",
  "Badalona",
  "Sant Cugat",
];

export function CitiesCoverage() {
  return (
    <Section tone="cream" pad="lg" decorative>
      <div className="mx-auto max-w-3xl text-center">
        <div className="flex justify-center">
          <Eyebrow tone="coral" sticker>
            ✦ Cobertura
          </Eyebrow>
        </div>
        <h2 className="mt-6 font-display text-display-lg text-ink-900">
          Nos movemos por{" "}
          <span className="relative inline-block">
            <span className="relative z-10 text-brand-600">Madrid y Barcelona</span>
            <span className="absolute inset-x-0 bottom-1 -z-0 h-3 bg-sun-400" aria-hidden />
          </span>
          , tú no.
        </h2>
        <p className="mx-auto mt-5 max-w-2xl text-pretty text-lg text-ink-700">
          Servicio puramente a domicilio. Sin tienda, sin exposición. Preferimos invertir el tiempo en
          llegar hasta tu casa, tu negocio o tu comunidad.
        </p>
      </div>

      <div className="mt-12 grid gap-6 lg:grid-cols-2">
        <CityCard
          slug="/madrid"
          title="Madrid"
          subtitle="Ciudad y área metropolitana"
          eta="Buscamos contigo el horario más realista posible"
          zones={madridZones}
          variant="cobalt"
        />
        <CityCard
          slug="/barcelona"
          title="Barcelona"
          subtitle="Ciudad y área metropolitana"
          eta="Llegada en menos de 4 horas en urgencias (sujeto a disponibilidad)"
          zones={barcelonaZones}
          variant="sun"
        />
      </div>
    </Section>
  );
}

const variantStyles = {
  cobalt: {
    bg: "bg-brand-600",
    text: "text-cream-50",
    sub: "text-cream-100/85",
    badge: "border-cream-50 text-cream-50",
    badgeBg: "bg-cream-50/10",
    title: "text-cream-50",
    arrow: "border-sun-400 text-sun-400 group-hover:bg-sun-400 group-hover:text-ink-900",
    info: "text-cream-100/90",
    infoIcon: "text-sun-400",
    line: "border-cream-50/15",
    label: "text-cream-100/60",
    chip: "border-cream-50/20 bg-cream-50/10 text-cream-100/85",
    cta: "text-sun-400 group-hover:text-cream-50",
  },
  sun: {
    bg: "bg-sun-400",
    text: "text-ink-900",
    sub: "text-ink-800",
    badge: "border-ink-900 text-ink-900",
    badgeBg: "bg-cream-50",
    title: "text-ink-900",
    arrow: "border-ink-900 text-ink-900 group-hover:bg-ink-900 group-hover:text-sun-400",
    info: "text-ink-800",
    infoIcon: "text-coral-500",
    line: "border-ink-900/15",
    label: "text-ink-800/70",
    chip: "border-ink-900 bg-cream-50 text-ink-900",
    cta: "text-coral-600 group-hover:text-ink-900",
  },
} as const;

function CityCard({
  slug,
  title,
  subtitle,
  eta,
  zones,
  variant,
}: {
  slug: string;
  title: string;
  subtitle: string;
  eta: string;
  zones: string[];
  variant: keyof typeof variantStyles;
}) {
  const v = variantStyles[variant];

  return (
    <Link
      href={slug}
      className={`group relative overflow-hidden rounded-3xl border-2 border-ink-900 p-7 shadow-sticker transition hover:-translate-y-1 hover:shadow-[8px_8px_0_0_rgba(26,26,26,1)] ${v.bg}`}
    >
      <div className="flex items-start justify-between gap-4">
        <div>
          <span
            className={`inline-flex items-center gap-2 rounded-full border-2 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.16em] ${v.badge} ${v.badgeBg}`}
          >
            <MapPinned className="h-3 w-3" />
            {subtitle}
          </span>
          <h3 className={`mt-5 font-display text-4xl font-bold sm:text-5xl ${v.title}`}>
            {title}
          </h3>
        </div>
        <span
          className={`flex h-11 w-11 items-center justify-center rounded-full border-2 transition ${v.arrow}`}
        >
          <ArrowRight className="h-4 w-4" />
        </span>
      </div>

      <p className={`mt-5 flex items-start gap-2 text-sm font-semibold ${v.info}`}>
        <Building2 className={`mt-0.5 h-4 w-4 shrink-0 ${v.infoIcon}`} />
        {eta}
      </p>

      <div className={`mt-6 border-t-2 pt-5 ${v.line}`}>
        <p className={`text-[10px] font-bold uppercase tracking-[0.16em] ${v.label}`}>
          Zonas que cubrimos
        </p>
        <ul className="mt-3 flex flex-wrap gap-1.5">
          {zones.map((zone) => (
            <li
              key={zone}
              className={`rounded-full border-2 px-2.5 py-1 text-xs font-semibold ${v.chip}`}
            >
              {zone}
            </li>
          ))}
        </ul>
      </div>

      <span className={`mt-6 inline-flex items-center gap-1.5 text-sm font-bold ${v.cta}`}>
        Ver servicios en {title}
        <ArrowRight className="h-4 w-4" />
      </span>
    </Link>
  );
}
