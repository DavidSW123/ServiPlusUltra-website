import type { Metadata } from "next";
import { Clock, Mail, MapPin, Phone, ShieldCheck, Star } from "lucide-react";
import { ContactForm } from "@/components/contact/ContactForm";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
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
      <section className="relative isolate overflow-hidden border-b-2 border-ink-900 bg-brand-600 text-cream-50">
        <div className="absolute inset-0 -z-10 bg-dots-soft bg-dots opacity-25" aria-hidden />
        <div
          className="absolute -top-24 right-[-10%] -z-10 h-[420px] w-[420px] rounded-full bg-sun-400/30 blur-3xl"
          aria-hidden
        />
        <div
          className="absolute -bottom-28 -left-12 -z-10 h-[320px] w-[320px] rounded-full bg-coral-500/30 blur-3xl"
          aria-hidden
        />

        <Container className="relative pt-12 pb-12 sm:pt-16 sm:pb-16">
          <Eyebrow tone="sun" sticker>
            <Star className="h-3.5 w-3.5 fill-current" />
            Contacto
          </Eyebrow>
          <h1 className="mt-6 max-w-3xl text-balance font-display text-display-lg text-cream-50 sm:text-display-xl">
            Cuéntanos qué necesitas. Te respondemos{" "}
            <span className="text-sun-400">en menos de 24 horas</span>.
          </h1>
          <p className="mt-5 max-w-2xl text-pretty text-base text-cream-100/90 sm:text-lg">
            Llamada directa, WhatsApp con fotos o formulario. Elige cómo prefieres y te damos una
            primera orientación de precio y plazo, sin compromiso.
          </p>
        </Container>
      </section>

      {/* GRID: contacto directo + formulario */}
      <section className="bg-cream-50">
        <Container className="py-14 sm:py-20">
          <div className="grid gap-10 lg:grid-cols-12">
            {/* Datos de contacto */}
            <aside className="lg:col-span-5">
              <h2 className="font-display text-2xl font-bold text-ink-900 sm:text-3xl">
                Atención directa
              </h2>
              <p className="mt-2 text-sm text-ink-700">
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

              <div className="mt-8 rounded-3xl border-2 border-ink-900 bg-sun-400 p-6 shadow-sticker">
                <p className="text-xs font-bold uppercase tracking-[0.16em] text-ink-900">
                  ¿Caso urgente?
                </p>
                <p className="mt-2 text-sm text-ink-800">
                  No esperes a que respondamos al formulario. Llámanos directamente y te decimos al
                  momento si podemos ayudarte y en qué plazo.
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  <a
                    href={siteConfig.contact.phoneTel}
                    className="inline-flex items-center gap-2 rounded-full border-2 border-ink-900 bg-ink-900 px-5 py-2.5 text-sm font-bold text-sun-400 shadow-sticker transition hover:-translate-y-0.5 hover:shadow-[6px_6px_0_0_rgba(26,26,26,1)]"
                  >
                    <Phone className="h-4 w-4" />
                    Llamar ahora
                  </a>
                  <a
                    href={siteConfig.contact.whatsapp}
                    className="inline-flex items-center gap-2 rounded-full border-2 border-ink-900 bg-coral-500 px-5 py-2.5 text-sm font-bold text-white shadow-sticker transition hover:-translate-y-0.5 hover:shadow-[6px_6px_0_0_rgba(26,26,26,1)]"
                  >
                    WhatsApp con fotos
                  </a>
                </div>
              </div>
            </aside>

            {/* Formulario */}
            <div className="lg:col-span-7">
              <h2 className="font-display text-2xl font-bold text-ink-900 sm:text-3xl">
                Pedir presupuesto sin compromiso
              </h2>
              <p className="mt-2 text-sm text-ink-700">
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
    <li className="flex items-start gap-4 rounded-2xl border-2 border-ink-900 bg-cream-50 p-4 shadow-sticker transition hover:-translate-y-0.5 hover:shadow-[6px_6px_0_0_rgba(26,26,26,1)]">
      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border-2 border-ink-900 bg-brand-600 text-white">
        <Icon className="h-5 w-5" />
      </span>
      <div className="min-w-0">
        <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-ink-500">{label}</p>
        <p
          className={`mt-1 ${highlight ? "font-display text-xl font-bold text-ink-900" : "truncate text-sm font-semibold text-ink-800"}`}
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
