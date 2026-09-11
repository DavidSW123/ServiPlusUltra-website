import { ArrowRight, MapPin, Phone } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { siteConfig } from "@/lib/site-config";

type Props = {
  city: string;
  title: React.ReactNode;
  description: string;
  zones: string[];
  eta: string;
};

export function CityHero({ city, title, description, zones, eta }: Props) {
  return (
    <section className="relative isolate overflow-hidden bg-cobalt-950 text-white">
      <div className="absolute inset-0 -z-10 bg-grid-tech bg-grid opacity-40" aria-hidden />
      <div className="absolute inset-0 -z-10 bg-cobalt-radial opacity-70" aria-hidden />
      <div
        className="absolute -right-40 top-0 -z-10 h-96 w-96 rounded-full bg-cobalt-500/25 blur-3xl"
        aria-hidden
      />
      <div
        className="absolute -bottom-24 -left-24 -z-10 h-80 w-80 rounded-full bg-copper-500/15 blur-3xl"
        aria-hidden
      />

      <Container className="relative pt-14 pb-20 sm:pt-20 sm:pb-24 lg:pt-24 lg:pb-28">
        <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-7">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-cobalt-100 backdrop-blur">
              <MapPin className="h-3.5 w-3.5 text-cyan-400" />
              Cobertura · {city}
            </span>
            <h1 className="mt-6 text-balance font-display text-display-lg text-white sm:text-display-xl">
              {title}
            </h1>
            <p className="mt-5 max-w-2xl text-pretty text-base text-cobalt-100/80 sm:text-lg">
              {description}
            </p>

            <div className="mt-7 inline-flex items-start gap-3 rounded-2xl border border-white/12 bg-white/[0.06] p-4 backdrop-blur">
              <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-cobalt-500/20 text-cyan-400 ring-1 ring-white/10">
                <Phone className="h-4 w-4" />
              </span>
              <p className="text-sm font-medium text-cobalt-50">{eta}</p>
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Button href={siteConfig.contact.phoneTel} variant="primary" size="lg">
                <Phone className="h-5 w-5" />
                Llamar · {siteConfig.contact.phone}
              </Button>
              <Button href="/contacto" variant="outline" size="lg">
                Pedir presupuesto en {city}
                <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
          </div>

          <div className="relative lg:col-span-5">
            <div className="rounded-3xl border border-white/10 bg-white/[0.05] p-6 backdrop-blur-md sm:p-7">
              <div className="flex items-center justify-between">
                <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-cyan-400">
                  Zonas que cubrimos en {city}
                </p>
                <span className="rounded-full border border-white/12 bg-white/[0.06] px-2.5 py-1 text-[11px] font-semibold text-cobalt-100">
                  {zones.length}+ zonas
                </span>
              </div>
              <ul className="mt-4 flex flex-wrap gap-1.5">
                {zones.map((zone) => (
                  <li
                    key={zone}
                    className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-xs font-medium text-cobalt-50"
                  >
                    {zone}
                  </li>
                ))}
              </ul>
              <p className="mt-5 text-xs text-cobalt-100/60">
                Si tu zona no aparece, escríbenos. Vamos ampliando cobertura según la demanda.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
