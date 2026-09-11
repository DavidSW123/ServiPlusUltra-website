import type { Metadata } from "next";
import { Clock, Mail, MapPin, Phone, ShieldCheck, Sparkles } from "lucide-react";
import { ContactForm } from "@/components/contact/ContactForm";
import { Container } from "@/components/ui/Container";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Contacto y presupuesto sin compromiso",
  description:
    "Contacta con ServiPlusUltra Solutions S.L. — multiservicios en Madrid y Barcelona. Llamada, WhatsApp o formulario. Te respondemos en menos de 24 horas en horario laboral.",
  alternates: { canonical: "/contacto" },
};

export default function ContactoPage() {
  return (
    <>
      {/* HERO */}
      <section className="relative isolate overflow-hidden bg-cobalt-950 text-white">
        <div className="absolute inset-0 -z-10 bg-grid-tech bg-grid opacity-40" aria-hidden />
        <div className="absolute inset-0 -z-10 bg-cobalt-radial opacity-70" aria-hidden />
        <div
          className="absolute -right-40 top-0 -z-10 h-96 w-96 rounded-full bg-cobalt-500/25 blur-3xl"
          aria-hidden
        />
        <div
          className="absolute -bottom-28 -left-24 -z-10 h-80 w-80 rounded-full bg-copper-500/15 blur-3xl"
          aria-hidden
        />

        <Container className="relative pt-14 pb-14 sm:pt-20 sm:pb-16">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-cobalt-100 backdrop-blur">
            <Sparkles className="h-3.5 w-3.5 text-cyan-400" />
            Contacto
          </span>
          <h1 className="mt-6 max-w-3xl text-balance font-display text-display-lg text-white sm:text-display-xl">
            Cuéntanos qué necesitas. Te respondemos{" "}
            <span className="text-copper-400">en menos de 24 horas</span>.
          </h1>
          <p className="mt-5 max-w-2xl text-pretty text-base text-cobalt-100/80 sm:text-lg">
            Llamada directa, WhatsApp con fotos o formulario. Elige cómo prefieres y te damos una
            primera orientación de precio y plazo, sin compromiso.
          </p>
        </Container>
      </section>

      {/* GRID: contacto directo + formulario */}
      <section className="relative isolate overflow-hidden bg-ink-50">
        <div className="absolute inset-0 -z-10 bg-grid-light bg-grid opacity-50" aria-hidden />
        <Container className="py-14 sm:py-20">
          <div className="grid gap-10 lg:grid-cols-12">
            {/* Datos de contacto */}
            <aside className="lg:col-span-5">
              <h2 className="font-display text-2xl font-semibold text-ink-900 sm:text-3xl">
                Atención directa
              </h2>
              <p className="mt-2 text-sm text-ink-500">
                Si tu caso es urgente, lo más rápido es llamarnos. Si puedes esperar y prefieres
                dejarlo por escrito, usa el formulario.
              </p>

              <ul className="mt-7 space-y-3">
                <ContactItem
                  icon={Phone}
                  label="Teléfono"
                  value={siteConfig.contact.phone}
                  href={siteConfig.contact.phoneTel}
                  highlight
                />
                <ContactItem
                  icon={Mail}
                  label="Email"
                  value={siteConfig.contact.email}
                  href={siteConfig.contact.emailLink}
                />
                <ContactItem
                  icon={MapPin}
                  label="Cobertura"
                  value="Madrid · Barcelona y áreas metropolitanas"
                />
                <ContactItem
                  icon={Clock}
                  label="Horario"
                  value={`${siteConfig.hours.weekdays} · ${siteConfig.hours.weekend}`}
                />
                <ContactItem icon={ShieldCheck} label="Empresa" value={siteConfig.legal.company} />
              </ul>

              <div className="relative mt-8 overflow-hidden rounded-3xl bg-cobalt-950 p-6 text-white shadow-elevate">
                <div className="absolute inset-0 -z-10 bg-grid-tech bg-grid opacity-30" aria-hidden />
                <div className="absolute inset-0 -z-10 bg-cobalt-radial opacity-60" aria-hidden />
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-cyan-400">
                  ¿Caso urgente?
                </p>
                <p className="mt-2 text-sm text-cobalt-100/80">
                  No esperes a que respondamos al formulario. Llámanos directamente y te decimos al
                  momento si podemos ayudarte y en qué plazo.
                </p>
                <div className="mt-4 flex flex-wrap gap-2.5">
                  <a
                    href={siteConfig.contact.phoneTel}
                    className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-cobalt-700 transition hover:bg-cobalt-50 active:scale-[0.98]"
                  >
                    <Phone className="h-4 w-4" />
                    Llamar ahora
                  </a>
                  <a
                    href={siteConfig.contact.whatsapp}
                    className="inline-flex items-center gap-2 rounded-full bg-copper-500 px-5 py-2.5 text-sm font-semibold text-white shadow-glow-copper transition hover:bg-copper-600 active:scale-[0.98]"
                  >
                    WhatsApp con fotos
                  </a>
                </div>
              </div>
            </aside>

            {/* Formulario */}
            <div className="lg:col-span-7">
              <h2 className="font-display text-2xl font-semibold text-ink-900 sm:text-3xl">
                Pedir presupuesto sin compromiso
              </h2>
              <p className="mt-2 text-sm text-ink-500">
                Cuéntanos lo que ocurre con todo el detalle que puedas. Cuanta más información,
                mejor podremos orientarte.
              </p>
              <div className="mt-6">
                <ContactForm />
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}

function ContactItem({
  icon: Icon,
  label,
  value,
  href,
  highlight = false,
}: {
  icon: typeof Phone;
  label: string;
  value: string;
  href?: string;
  highlight?: boolean;
}) {
  const content = (
    <li className="flex items-start gap-4 rounded-2xl border border-ink-200 bg-white p-4 shadow-soft transition duration-300 hover:-translate-y-0.5 hover:border-cobalt-200 hover:shadow-card">
      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-cobalt-50 text-cobalt-600 ring-1 ring-cobalt-100">
        <Icon className="h-5 w-5" />
      </span>
      <div className="min-w-0">
        <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-ink-400">{label}</p>
        <p
          className={`mt-1 ${highlight ? "font-display text-xl font-bold text-ink-900" : "truncate text-sm font-medium text-ink-700"}`}
        >
          {value}
        </p>
      </div>
    </li>
  );

  if (href) {
    return (
      <a href={href} className="block">
        {content}
      </a>
    );
  }
  return content;
}
