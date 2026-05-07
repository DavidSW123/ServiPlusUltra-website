import { ArrowRight, Phone, Star, Wrench } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { siteConfig } from "@/lib/site-config";

const marqueeItems = [
  "URGENCIAS 24H",
  "REFORMAS DE VIVIENDAS",
  "MANTENIMIENTO DE NAVES",
  "ELECTRICIDAD",
  "FONTANERÍA",
  "CLIMATIZACIÓN",
  "CARPINTERÍA",
  "OBRAS PARA CONSTRUCTORAS",
];

export function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-cream-100">
      {/* Marquee superior */}
      <div className="border-y-2 border-ink-900 bg-brand-600 py-2 text-cream-50">
        <div className="flex animate-marquee whitespace-nowrap">
          {[...marqueeItems, ...marqueeItems].map((item, i) => (
            <span key={i} className="mx-6 flex items-center gap-3 text-sm font-bold uppercase tracking-wider">
              <span className="text-sun-400">★</span>
              {item}
            </span>
          ))}
        </div>
      </div>

      <Container className="relative pt-12 pb-20 sm:pt-16 sm:pb-24 lg:pt-20 lg:pb-28">
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-12">
          {/* Columna izquierda */}
          <div className="lg:col-span-7">
            {/* Sticker rotado superior */}
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border-2 border-ink-900 bg-coral-500 px-3 py-1 text-xs font-bold uppercase tracking-wider text-white shadow-sticker rotate-sticker-1">
              <Star className="h-3.5 w-3.5 fill-current" />
              4,9 EN 327 RESEÑAS · MADRID + BARCELONA
            </div>

            <h1 className="font-display text-display-xl text-ink-900">
              Reformas, urgencias{" "}
              <br className="hidden sm:block" />y todo{" "}
              <span className="relative inline-block">
                <span className="relative z-10">lo demás.</span>
                <span className="absolute inset-x-0 bottom-1 -z-0 h-3 bg-sun-400" aria-hidden />
              </span>
              <br className="hidden sm:block" />
              <span className="text-coral-500">Bien hechas.</span>
            </h1>

            <p className="mt-6 max-w-2xl text-pretty text-lg text-ink-700">
              Equipo de oficio en Madrid y Barcelona. Electricidad, fontanería, climatización, carpintería.
              Particulares, empresas y constructoras. Tú llamas, nosotros vamos, lo resolvemos.
            </p>

            {/* CTAs */}
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Button href={siteConfig.contact.phoneTel} variant="primary" size="lg">
                <Phone className="h-5 w-5" />
                Hablar con un técnico
              </Button>
              <Button href="/contacto" variant="ghost" size="lg">
                Pedir presupuesto
                <ArrowRight className="h-4 w-4" />
              </Button>
            </div>

            {/* Pills de datos */}
            <div className="mt-10 flex flex-wrap gap-3">
              <DataPill bg="bg-brand-600" text="text-white" value="1.247" label="Obras realizadas" />
              <DataPill bg="bg-sun-400" text="text-ink-900" value="<4h" label="Respuesta urgencias" />
              <DataPill bg="bg-mint-100" text="text-ink-900" value="15 años" label="De oficio" />
            </div>
          </div>

          {/* Columna derecha — Tarjeta presupuesto + Stickers flotantes */}
          <div className="relative lg:col-span-5">
            {/* Sticker flotante 1 */}
            <div className="absolute -top-6 -left-4 z-20 hidden rotate-sticker-3 sm:block">
              <div className="rounded-full border-2 border-ink-900 bg-sun-400 px-4 py-2 text-xs font-bold uppercase shadow-sticker">
                Garantía 3 años ✦
              </div>
            </div>

            {/* Sticker flotante 2 */}
            <div className="absolute -bottom-4 -right-2 z-20 hidden rotate-sticker-2 sm:block">
              <div className="rounded-full border-2 border-ink-900 bg-coral-500 px-4 py-2 text-xs font-bold uppercase text-white shadow-sticker">
                Sin sub-contratas
              </div>
            </div>

            {/* Tarjeta principal */}
            <div className="relative rounded-3xl border-2 border-ink-900 bg-cream-50 p-7 shadow-sticker sm:p-8">
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl border-2 border-ink-900 bg-coral-500 text-white">
                  <Wrench className="h-6 w-6" />
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.16em] text-ink-600">
                    Presupuesto sin sorpresas
                  </p>
                  <p className="font-display text-xl font-bold text-ink-900">Cuéntanos qué pasa</p>
                </div>
              </div>

              <p className="mt-5 text-sm leading-relaxed text-ink-700">
                Un tubo roto a las 11 de la noche. Una reforma completa de baño. La instalación
                eléctrica de tu local. Lo describes, vamos, te decimos qué cuesta.
              </p>

              <div className="mt-6 space-y-2.5">
                <a
                  href={siteConfig.contact.phoneTel}
                  className="flex items-center justify-between rounded-2xl border-2 border-ink-900 bg-cream-100 px-4 py-3 text-sm font-semibold transition hover:bg-sun-400"
                >
                  <span className="flex items-center gap-2 text-ink-700">
                    <Phone className="h-4 w-4" />
                    Teléfono directo
                  </span>
                  <span className="font-bold text-ink-900">{siteConfig.contact.phone}</span>
                </a>
                <a
                  href={siteConfig.contact.whatsapp}
                  className="flex items-center justify-between rounded-2xl border-2 border-ink-900 bg-mint-100 px-4 py-3 text-sm font-semibold transition hover:bg-mint-200"
                >
                  <span className="text-ink-700">WhatsApp con fotos</span>
                  <span className="font-bold text-ink-900">Enviar →</span>
                </a>
                <a
                  href="/contacto"
                  className="flex items-center justify-between rounded-2xl border-2 border-ink-900 bg-brand-600 px-4 py-3 text-sm font-bold text-white transition hover:bg-brand-700"
                >
                  Formulario de presupuesto
                  <ArrowRight className="h-4 w-4" />
                </a>
              </div>

              <p className="mt-5 text-[11px] font-semibold uppercase tracking-wider text-ink-500">
                Madrid + Barcelona · Particulares, comercios y constructoras
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

function DataPill({ bg, text, value, label }: { bg: string; text: string; value: string; label: string }) {
  return (
    <div
      className={`flex items-center gap-3 rounded-full border-2 border-ink-900 px-4 py-2 shadow-sticker ${bg} ${text}`}
    >
      <span className="font-display text-2xl font-bold leading-none">{value}</span>
      <span className="text-xs font-bold uppercase leading-tight tracking-wider">{label}</span>
    </div>
  );
}
