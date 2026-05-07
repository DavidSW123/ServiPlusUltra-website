import type { Metadata } from "next";
import { Clock, Mail, MapPin, Phone, ShieldCheck } from "lucide-react";
import { ContactForm } from "@/components/contact/ContactForm";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Contacto y presupuesto sin compromiso",
  description:
    "Contacta con ServiPlusUltra Solutions S.L. — multiservicios premium en Madrid y Barcelona. Llamada, WhatsApp o formulario. Te respondemos en menos de 24 horas en horario laboral.",
};

export default function ContactoPage() {
  return (
    <>
      {/* HERO */}
      <section className="relative isolate overflow-hidden bg-night-950 text-white">
        <div className="absolute inset-0 -z-20 bg-premium-gradient" aria-hidden />
        <div className="absolute inset-0 -z-10 bg-grid-dark bg-grid opacity-30" aria-hidden />
        <div
          className="absolute -top-32 right-[-10%] -z-10 h-[420px] w-[420px] rounded-full bg-spark-500/15 blur-3xl"
          aria-hidden
        />

        <Container className="relative pt-12 pb-12 sm:pt-16 sm:pb-16">
          <Eyebrow tone="dark">Contacto</Eyebrow>
          <h1 className="mt-5 max-w-3xl text-balance font-display text-display-lg text-white sm:text-display-xl">
            Cuéntanos qué necesitas. Te respondemos{" "}
            <span className="text-ultra-gradient">en menos de 24 horas</span>.
          </h1>
          <p className="mt-5 max-w-2xl text-pretty text-base text-white/80 sm:text-lg">
            Llamada directa, WhatsApp con fotos o formulario. Elige cómo prefieres y te damos una
            primera orientación de precio y plazo, sin compromiso.
          </p>
        </Container>
      </section>

      {/* GRID: contacto directo + formulario */}
      <section className="bg-ink-50">
        <Container className="py-14 sm:py-20">
          <div className="grid gap-10 lg:grid-cols-12">
            {/* Datos de contacto */}
            <aside className="lg:col-span-5">
              <h2 className="font-display text-2xl font-semibold text-ink-900 sm:text-3xl">
                Atención directa
              </h2>
              <p className="mt-2 text-sm text-ink-600">
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
                <ContactItem
                  icon={ShieldCheck}
                  label="Empresa"
                  value={siteConfig.legal.company}
                />
              </ul>

              <div className="mt-8 rounded-3xl border border-ink-200 bg-white p-6 shadow-soft">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-brand-900">
                  ¿Caso urgente?
                </p>
                <p className="mt-2 text-sm text-ink-700">
                  No esperes a que respondamos al formulario. Llámanos directamente y te decimos al
                  momento si podemos ayudarte y en qué plazo.
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  <a
                    href={siteConfig.contact.phoneTel}
                    className="inline-flex items-center gap-2 rounded-full bg-accent-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-accent-700"
                  >
                    <Phone className="h-4 w-4" />
                    Llamar ahora
                  </a>
                  <a
                    href={siteConfig.contact.whatsapp}
                    className="inline-flex items-center gap-2 rounded-full border border-ink-200 bg-white px-5 py-2.5 text-sm font-semibold text-ink-800 transition hover:border-ink-300 hover:bg-ink-50"
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
              <p className="mt-2 text-sm text-ink-600">
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
    <li className="flex items-start gap-4 rounded-2xl border border-ink-200 bg-white p-4 shadow-soft transition hover:border-ink-300">
      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-50 ring-1 ring-brand-100">
        <Icon className="h-4 w-4 text-brand-900" />
      </span>
      <div className="min-w-0">
        <p className="text-xs font-semibold uppercase tracking-[0.14em] text-ink-500">{label}</p>
        <p
          className={`mt-1 truncate ${highlight ? "font-display text-xl font-bold text-ink-900" : "text-sm text-ink-800"}`}
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
