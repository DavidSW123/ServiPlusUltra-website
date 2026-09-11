import { ArrowRight, Phone, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { siteConfig } from "@/lib/site-config";

type Props = {
  eyebrow: string;
  title: React.ReactNode;
  description: string;
  highlights?: string[];
  ctaPrimaryLabel?: string;
};

export function ServiceHero({
  eyebrow,
  title,
  description,
  highlights = [],
  ctaPrimaryLabel = "Llamar ahora",
}: Props) {
  return (
    <section className="relative isolate overflow-hidden bg-cobalt-950 text-white">
      <div className="absolute inset-0 -z-10 bg-grid-tech bg-grid opacity-40" aria-hidden />
      <div className="absolute inset-0 -z-10 bg-cobalt-radial opacity-70" aria-hidden />
      <div
        className="absolute -right-40 top-0 -z-10 h-96 w-96 rounded-full bg-cobalt-500/25 blur-3xl"
        aria-hidden
      />
      <div
        className="absolute -bottom-32 -left-24 -z-10 h-80 w-80 rounded-full bg-copper-500/15 blur-3xl"
        aria-hidden
      />

      <Container className="relative pt-14 pb-16 sm:pt-20 sm:pb-24 lg:pt-24">
        <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-cobalt-100 backdrop-blur">
          <Sparkles className="h-3.5 w-3.5 text-cyan-400" />
          {eyebrow}
        </span>

        <h1 className="mt-6 max-w-3xl text-balance font-display text-display-lg text-white sm:text-display-xl">
          {title}
        </h1>

        <p className="mt-5 max-w-2xl text-pretty text-base text-cobalt-100/80 sm:text-lg">
          {description}
        </p>

        {highlights.length > 0 && (
          <ul className="mt-7 flex flex-wrap gap-2">
            {highlights.map((h) => (
              <li
                key={h}
                className="rounded-full border border-white/12 bg-white/[0.06] px-3.5 py-1.5 text-xs font-semibold text-cobalt-50 backdrop-blur"
              >
                {h}
              </li>
            ))}
          </ul>
        )}

        <div className="mt-8 flex flex-wrap items-center gap-3">
          <Button href={siteConfig.contact.phoneTel} variant="primary" size="lg">
            <Phone className="h-5 w-5" />
            {ctaPrimaryLabel} · {siteConfig.contact.phone}
          </Button>
          <Button href={siteConfig.contact.whatsapp} variant="coral" size="lg">
            Enviar fotos por WhatsApp
            <ArrowRight className="h-4 w-4" />
          </Button>
        </div>
      </Container>
    </section>
  );
}
