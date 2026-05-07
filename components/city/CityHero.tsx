import { ArrowRight, MapPin, Phone, Star } from "lucide-react";
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
    <section className="relative isolate overflow-hidden border-b-2 border-ink-900 bg-cream-100 text-ink-900">
      <div className="absolute inset-0 -z-10 bg-dots-soft bg-dots opacity-35" aria-hidden />
      <div
        className="absolute -top-24 right-[-10%] -z-10 h-[420px] w-[420px] rounded-full bg-sun-400/30 blur-3xl"
        aria-hidden
      />
      <div
        className="absolute -bottom-20 left-[-10%] -z-10 h-[320px] w-[320px] rounded-full bg-coral-500/25 blur-3xl"
        aria-hidden
      />

      <Container className="relative pt-12 pb-20 sm:pt-16 sm:pb-24 lg:pt-20 lg:pb-28">
        <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-7">
            <span className="inline-flex items-center gap-2 rounded-full border-2 border-ink-900 bg-coral-500 px-3 py-1 text-xs font-bold uppercase tracking-wider text-white shadow-sticker rotate-sticker-1">
              <MapPin className="h-3 w-3" />
              Cobertura · {city}
            </span>
            <h1 className="mt-6 text-balance font-display text-display-xl text-ink-900">{title}</h1>
            <p className="mt-5 max-w-2xl text-pretty text-base text-ink-700 sm:text-lg">
              {description}
            </p>

            <div className="mt-7 inline-flex items-start gap-3 rounded-2xl border-2 border-ink-900 bg-mint-100 p-4 shadow-sticker">
              <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border-2 border-ink-900 bg-brand-600 text-white">
                <Phone className="h-4 w-4" />
              </span>
              <p className="text-sm font-semibold text-ink-800">{eta}</p>
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Button href={siteConfig.contact.phoneTel} variant="primary" size="lg">
                <Phone className="h-5 w-5" />
                Llamar · {siteConfig.contact.phone}
              </Button>
              <Button href="/contacto" variant="ghost" size="lg">
                Pedir presupuesto en {city}
                <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
          </div>

          <div className="relative lg:col-span-5">
            {/* Sticker rotado */}
            <div className="absolute -top-4 -left-3 z-20 hidden rotate-sticker-3 rounded-full border-2 border-ink-900 bg-sun-400 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-ink-900 shadow-sticker sm:block">
              <Star className="mr-1 inline h-3 w-3 fill-current" />
              {zones.length}+ zonas activas
            </div>

            <div className="rounded-3xl border-2 border-ink-900 bg-brand-600 p-6 text-cream-50 shadow-sticker sm:p-7">
              <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-sun-400">
                Zonas que cubrimos en {city}
              </p>
              <ul className="mt-4 flex flex-wrap gap-1.5">
                {zones.map((zone) => (
                  <li
                    key={zone}
                    className="rounded-full border-2 border-cream-50/25 bg-cream-50/10 px-3 py-1.5 text-xs font-semibold text-cream-50"
                  >
                    {zone}
                  </li>
                ))}
              </ul>
              <p className="mt-5 text-xs text-cream-100/60">
                Si tu zona no aparece, escríbenos. Vamos ampliando cobertura según la demanda.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
