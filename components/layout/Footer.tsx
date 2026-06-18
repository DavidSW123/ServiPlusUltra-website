import Link from "next/link";
import { Clock, Mail, MapPin, Phone, ShieldCheck, Star } from "lucide-react";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { CookiePreferencesButton } from "@/components/legal/CookiePreferencesButton";
import { siteConfig } from "@/lib/site-config";

const servicesNav = [
  { href: "/electricidad", label: "Electricidad" },
  { href: "/climatizacion", label: "Climatización" },
  { href: "/reparaciones-manitas", label: "Reparaciones y manitas" },
];

const citiesNav = [
  { href: "/madrid", label: "Servicio en Madrid" },
  { href: "/barcelona", label: "Servicio en Barcelona" },
];

const legalNav = [
  { href: "/aviso-legal", label: "Aviso legal" },
  { href: "/privacidad", label: "Política de privacidad" },
  { href: "/cookies", label: "Política de cookies" },
];

export function Footer() {
  return (
    <footer className="relative isolate overflow-hidden border-t-2 border-ink-900 bg-brand-600 text-cream-50">
      <div className="absolute inset-0 -z-10 bg-dots-soft bg-dots opacity-25" aria-hidden />
      <div
        className="absolute -right-32 -top-32 -z-10 h-80 w-80 rounded-full bg-sun-400/30 blur-3xl"
        aria-hidden
      />
      <div
        className="absolute -bottom-32 -left-20 -z-10 h-72 w-72 rounded-full bg-coral-500/30 blur-3xl"
        aria-hidden
      />

      <Container className="py-14 sm:py-20">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <Image
              src="/logo-dark.png"
              alt="ServiPlusUltra Solutions S.L."
              width={875}
              height={404}
              className="h-16 w-auto"
            />
            <p className="mt-5 max-w-md text-base text-cream-100/90">
              Multiservicios premium en Madrid y Barcelona. Electricidad, climatización y
              reparaciones del hogar con técnicos de oficio, presupuesto sin sorpresas y trabajo
              que dura.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href={siteConfig.contact.phoneTel}
                className="inline-flex items-center gap-2 rounded-full border-2 border-ink-900 bg-sun-400 px-5 py-2.5 text-sm font-bold text-ink-900 shadow-sticker transition hover:-translate-y-0.5 hover:shadow-[6px_6px_0_0_rgba(26,26,26,1)]"
              >
                <Phone className="h-4 w-4" />
                {siteConfig.contact.phone}
              </a>
              <a
                href={siteConfig.contact.whatsapp}
                className="inline-flex items-center gap-2 rounded-full border-2 border-ink-900 bg-coral-500 px-5 py-2.5 text-sm font-bold text-white shadow-sticker transition hover:-translate-y-0.5 hover:shadow-[6px_6px_0_0_rgba(26,26,26,1)]"
              >
                Enviar WhatsApp
              </a>
            </div>

            <ul className="mt-8 space-y-3 text-sm">
              <li className="flex items-start gap-3">
                <Mail className="mt-0.5 h-4 w-4 text-sun-400" />
                <a href={siteConfig.contact.emailLink} className="text-cream-100/90 hover:text-sun-400">
                  {siteConfig.contact.email}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 text-sun-400" />
                <span className="text-cream-100/90">Madrid · Barcelona y áreas metropolitanas</span>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="mt-0.5 h-4 w-4 text-sun-400" />
                <span className="text-cream-100/90">
                  {siteConfig.hours.weekdays}
                  <br />
                  <span className="text-cream-100/60">{siteConfig.hours.weekend}</span>
                </span>
              </li>
              <li className="flex items-start gap-3">
                <ShieldCheck className="mt-0.5 h-4 w-4 text-mint-300" />
                <span className="text-cream-100/90">{siteConfig.legal.company}</span>
              </li>
            </ul>
          </div>

          <div className="lg:col-span-7">
            <div className="grid gap-8 sm:grid-cols-3">
              <div>
                <h3 className="inline-flex items-center gap-1.5 rounded-full border-2 border-ink-900 bg-sun-400 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.16em] text-ink-900 shadow-sticker">
                  <Star className="h-3 w-3 fill-current" />
                  Servicios
                </h3>
                <ul className="mt-5 space-y-2.5 text-sm">
                  {servicesNav.map((item) => (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        className="font-semibold text-cream-100/85 transition hover:text-sun-400"
                      >
                        → {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="inline-flex items-center gap-1.5 rounded-full border-2 border-ink-900 bg-coral-500 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.16em] text-white shadow-sticker">
                  <Star className="h-3 w-3 fill-current" />
                  Cobertura
                </h3>
                <ul className="mt-5 space-y-2.5 text-sm">
                  {citiesNav.map((item) => (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        className="font-semibold text-cream-100/85 transition hover:text-sun-400"
                      >
                        → {item.label}
                      </Link>
                    </li>
                  ))}
                  <li>
                    <Link
                      href="/contacto"
                      className="font-semibold text-cream-100/85 transition hover:text-sun-400"
                    >
                      → Pedir presupuesto
                    </Link>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="inline-flex items-center gap-1.5 rounded-full border-2 border-ink-900 bg-mint-100 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.16em] text-ink-900 shadow-sticker">
                  <Star className="h-3 w-3 fill-current" />
                  Empresa
                </h3>
                <ul className="mt-5 space-y-2.5 text-sm">
                  <li>
                    <Link
                      href="/contacto"
                      className="font-semibold text-cream-100/85 transition hover:text-sun-400"
                    >
                      → Contacto
                    </Link>
                  </li>
                  {legalNav.map((item) => (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        className="font-semibold text-cream-100/85 transition hover:text-sun-400"
                      >
                        → {item.label}
                      </Link>
                    </li>
                  ))}
                  <li>
                    <CookiePreferencesButton className="font-semibold text-cream-100/85 transition hover:text-sun-400" />
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-10 rounded-3xl border-2 border-ink-900 bg-cream-50 p-7 text-ink-900 shadow-sticker">
              <h3 className="font-display text-2xl font-bold">
                ¿Una avería o necesitas{" "}
                <span className="relative inline-block text-coral-500">
                  <span className="relative z-10">presupuesto</span>
                  <span className="absolute inset-x-0 bottom-1 -z-0 h-3 bg-sun-400" aria-hidden />
                </span>
                ?
              </h3>
              <p className="mt-3 text-sm text-ink-700">
                Cuéntanos lo que ocurre y te respondemos en menos de 24 horas en horario laboral.
              </p>
              <Link
                href="/contacto"
                className="mt-5 inline-flex items-center gap-2 rounded-full border-2 border-ink-900 bg-sun-400 px-5 py-2.5 text-sm font-bold text-ink-900 shadow-sticker transition hover:-translate-y-0.5 hover:shadow-[6px_6px_0_0_rgba(26,26,26,1)]"
              >
                Pedir presupuesto sin compromiso →
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-3 border-t-2 border-cream-50/15 pt-6 text-xs text-cream-100/60 sm:flex-row sm:items-center">
          <p>
            © {new Date().getFullYear()} {siteConfig.legal.company}. Todos los derechos reservados.
          </p>
          <p className="font-semibold">
            Diseño y desarrollo by <span className="text-sun-400">SW Labs</span>
          </p>
        </div>
      </Container>
    </footer>
  );
}
