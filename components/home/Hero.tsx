import Image from "next/image";
import { ArrowRight, Phone, ShieldCheck, Wrench, Zap } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { siteConfig } from "@/lib/site-config";

const marqueeItems = [
  "URGENCIAS PRIORITARIAS",
  "REFORMAS INTEGRALES",
  "MANTENIMIENTO DE NAVES",
  "ELECTRICIDAD",
  "FONTANERÍA",
  "CLIMATIZACIÓN",
  "CARPINTERÍA",
  "OBRAS PARA CONSTRUCTORAS",
];

const trust = [
  { icon: ShieldCheck, label: "12 meses de garantía*" },
  { icon: Zap, label: "Respuesta <4h en Barcelona" },
  { icon: Wrench, label: "Equipo de oficio propio" },
];

export function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-cobalt-950 text-white">
      {/* Fondo: foto velada + tech */}
      <Image src="/img/hero.jpg" alt="" fill priority sizes="100vw" className="-z-20 object-cover" aria-hidden />
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-cobalt-950/96 via-cobalt-950/90 to-cobalt-900/75" aria-hidden />
      <div className="absolute inset-0 -z-10 bg-grid-tech bg-grid opacity-30" aria-hidden />
      <div className="absolute inset-0 -z-10 bg-cobalt-radial opacity-70" aria-hidden />
      <div className="absolute -right-40 -top-24 -z-10 h-[520px] w-[520px] rounded-full bg-cobalt-500/25 blur-3xl" aria-hidden />
      <div className="absolute -bottom-40 -left-32 -z-10 h-[440px] w-[440px] rounded-full bg-copper-500/15 blur-3xl" aria-hidden />

      {/* Marquee superior fino */}
      <div className="relative border-b border-white/10">
        <div className="flex animate-marquee whitespace-nowrap py-2.5">
          {[...marqueeItems, ...marqueeItems].map((item, i) => (
            <span
              key={i}
              className="mx-5 flex items-center gap-2.5 text-[11px] font-semibold uppercase tracking-[0.2em] text-white/45"
            >
              <span className="h-1 w-1 rounded-full bg-cyan-400" />
              {item}
            </span>
          ))}
        </div>
      </div>

      <Container className="relative pt-14 pb-20 sm:pt-20 sm:pb-28">
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-10">
          {/* Izquierda */}
          <div className="lg:col-span-7">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-cobalt-100 backdrop-blur">
              <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" />
              Multiservicios técnicos · Madrid + Barcelona
            </span>

            <h1 className="mt-6 font-display text-display-xl text-white">
              Reformas, urgencias{" "}
              <br className="hidden sm:block" />y todo{" "}
              <span className="text-copper-400">lo demás.</span>{" "}
              <span className="text-white/95">Bien hechas.</span>
            </h1>

            <p className="mt-6 max-w-xl text-pretty text-lg text-cobalt-100/80">
              Equipo de oficio en Madrid y Barcelona. Electricidad, fontanería, climatización,
              carpintería y obra. Particulares, empresas y constructoras. Tú llamas, vamos y lo
              resolvemos.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Button href={siteConfig.contact.phoneTel} variant="primary" size="lg">
                <Phone className="h-5 w-5" />
                Hablar con un técnico
              </Button>
              <Button href="/contacto" variant="outline" size="lg">
                Pedir presupuesto
                <ArrowRight className="h-4 w-4" />
              </Button>
            </div>

            <div className="mt-9 flex flex-wrap gap-2.5">
              {trust.map(({ icon: Icon, label }) => (
                <span
                  key={label}
                  className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.06] px-3.5 py-1.5 text-xs font-semibold text-cobalt-100/90 backdrop-blur"
                >
                  <Icon className="h-3.5 w-3.5 text-cyan-400" />
                  {label}
                </span>
              ))}
            </div>
          </div>

          {/* Derecha — tarjeta glass */}
          <div className="lg:col-span-5">
            <div className="relative rounded-3xl border border-white/[0.12] bg-white/[0.07] p-6 shadow-elevate backdrop-blur-xl sm:p-7">
              <div className="pointer-events-none absolute inset-x-8 -top-px h-px bg-cyan-line" />

              <div className="flex items-center gap-3">
                <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-cobalt-500 text-white shadow-glow-cobalt">
                  <Wrench className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-cobalt-100/70">
                    Presupuesto sin sorpresas
                  </p>
                  <p className="font-display text-lg font-semibold text-white">Cuéntanos qué pasa</p>
                </div>
              </div>

              <p className="mt-5 text-sm leading-relaxed text-cobalt-100/75">
                Un tubo roto a las 11 de la noche. Una reforma completa de baño. La instalación
                eléctrica de tu local. Lo describes, vamos y te decimos qué cuesta.
              </p>

              <div className="mt-6 space-y-2">
                <a
                  href={siteConfig.contact.phoneTel}
                  className="flex items-center justify-between rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm transition hover:border-cyan-400/40 hover:bg-white/[0.08]"
                >
                  <span className="flex items-center gap-2 text-cobalt-100/80">
                    <Phone className="h-4 w-4" />
                    Teléfono directo
                  </span>
                  <span className="font-semibold text-white">{siteConfig.contact.phone}</span>
                </a>
                <a
                  href={siteConfig.contact.whatsapp}
                  className="flex items-center justify-between rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm transition hover:border-cyan-400/40 hover:bg-white/[0.08]"
                >
                  <span className="text-cobalt-100/80">WhatsApp con fotos</span>
                  <span className="font-semibold text-cyan-400">Enviar →</span>
                </a>
                <a
                  href="/contacto"
                  className="flex items-center justify-between rounded-xl bg-copper-500 px-4 py-3 text-sm font-semibold text-white shadow-glow-copper transition hover:bg-copper-600"
                >
                  Formulario de presupuesto
                  <ArrowRight className="h-4 w-4" />
                </a>
              </div>

              <p className="mt-5 text-[11px] font-medium uppercase tracking-wider text-cobalt-100/50">
                Particulares · Constructoras · Inmobiliarias · Comercios
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
