import Link from "next/link";
import Image from "next/image";
import { Clock, Mail, MapPin, Phone, ShieldCheck } from "lucide-react";
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

function Column({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-cyan-400">{title}</h3>
      <ul className="mt-4 space-y-2.5 text-sm">{children}</ul>
    </div>
  );
}

export function Footer() {
  return (
    <footer className="relative isolate overflow-hidden bg-cobalt-950 text-cobalt-100/80">
      <div className="absolute inset-0 -z-10 bg-grid-tech bg-grid opacity-30" aria-hidden />
      <div className="absolute -right-32 -top-32 -z-10 h-80 w-80 rounded-full bg-cobalt-500/20 blur-3xl" aria-hidden />
      <div className="absolute -bottom-32 -left-24 -z-10 h-72 w-72 rounded-full bg-copper-500/10 blur-3xl" aria-hidden />

      <Container className="py-14 sm:py-20">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <Image src="/logo-dark.png" alt="ServiPlusUltra Solutions S.L." width={875} height={404} className="h-20 w-auto" />
            <p className="mt-5 max-w-md text-sm text-cobalt-100/70">
              Multiservicios técnicos en Madrid y Barcelona. Electricidad, climatización, reformas y
              reparaciones con técnicos de oficio, presupuesto sin sorpresas y trabajo que dura.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <a href={siteConfig.contact.phoneTel} className="inline-flex items-center gap-2 rounded-full bg-cobalt-500 px-5 py-2.5 text-sm font-semibold text-white shadow-glow-cobalt transition hover:bg-cobalt-600">
                <Phone className="h-4 w-4" />
                {siteConfig.contact.phone}
              </a>
              <a href={siteConfig.contact.whatsapp} className="inline-flex items-center gap-2 rounded-full border border-white/20 px-5 py-2.5 text-sm font-semibold text-white transition hover:border-white/40 hover:bg-white/5">
                Enviar WhatsApp
              </a>
            </div>

            <ul className="mt-8 space-y-3 text-sm">
              <li className="flex items-start gap-3">
                <Mail className="mt-0.5 h-4 w-4 text-cyan-400" />
                <a href={siteConfig.contact.emailLink} className="hover:text-white">{siteConfig.contact.email}</a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 text-cyan-400" />
                <span>Madrid · Barcelona y áreas metropolitanas</span>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="mt-0.5 h-4 w-4 text-cyan-400" />
                <span>
                  {siteConfig.hours.weekdays}
                  <br />
                  <span className="text-cobalt-100/50">{siteConfig.hours.weekend}</span>
                </span>
              </li>
              <li className="flex items-start gap-3">
                <ShieldCheck className="mt-0.5 h-4 w-4 text-copper-400" />
                <span>{siteConfig.legal.company} · CIF {siteConfig.legal.cif}</span>
              </li>
            </ul>
          </div>

          <div className="lg:col-span-7">
            <div className="grid gap-8 sm:grid-cols-3">
              <Column title="Servicios">
                {servicesNav.map((i) => (
                  <li key={i.href}>
                    <Link href={i.href} className="text-cobalt-100/75 transition hover:text-white">{i.label}</Link>
                  </li>
                ))}
              </Column>
              <Column title="Cobertura">
                {citiesNav.map((i) => (
                  <li key={i.href}>
                    <Link href={i.href} className="text-cobalt-100/75 transition hover:text-white">{i.label}</Link>
                  </li>
                ))}
                <li><Link href="/contacto" className="text-cobalt-100/75 transition hover:text-white">Pedir presupuesto</Link></li>
              </Column>
              <Column title="Empresa">
                <li><Link href="/contacto" className="text-cobalt-100/75 transition hover:text-white">Contacto</Link></li>
                {legalNav.map((i) => (
                  <li key={i.href}>
                    <Link href={i.href} className="text-cobalt-100/75 transition hover:text-white">{i.label}</Link>
                  </li>
                ))}
                <li><CookiePreferencesButton className="text-cobalt-100/75 transition hover:text-white" /></li>
              </Column>
            </div>

            <div className="mt-10 rounded-2xl border border-white/10 bg-white/[0.05] p-6 backdrop-blur">
              <h3 className="font-display text-lg font-semibold text-white">¿Una avería o necesitas presupuesto?</h3>
              <p className="mt-1.5 text-sm text-cobalt-100/70">
                Cuéntanos lo que ocurre y te respondemos en menos de 24 horas en horario laboral.
              </p>
              <Link href="/contacto" className="mt-4 inline-flex items-center gap-2 rounded-full bg-copper-500 px-5 py-2.5 text-sm font-semibold text-white shadow-glow-copper transition hover:bg-copper-600">
                Pedir presupuesto sin compromiso →
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-3 border-t border-white/10 pt-6 text-xs text-cobalt-100/50 sm:flex-row sm:items-center">
          <p>© {new Date().getFullYear()} {siteConfig.legal.company}. Todos los derechos reservados.</p>
          <p className="font-medium">Diseño y desarrollo by <span className="text-cyan-400">SW Labs</span></p>
        </div>
      </Container>
    </footer>
  );
}
