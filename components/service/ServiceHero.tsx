import { ArrowRight, Phone, Star } from "lucide-react";
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
    <section className="relative isolate overflow-hidden border-b-2 border-ink-900 bg-brand-600 text-cream-50">
      <div className="absolute inset-0 -z-10 bg-dots-soft bg-dots opacity-25" aria-hidden />
      <div
        className="absolute -top-24 right-[-12%] -z-10 h-[420px] w-[420px] rounded-full bg-sun-400/30 blur-3xl"
        aria-hidden
      />
      <div
        className="absolute -bottom-32 -left-12 -z-10 h-[320px] w-[320px] rounded-full bg-coral-500/30 blur-3xl"
        aria-hidden
      />

      <Container className="relative pt-12 pb-16 sm:pt-16 sm:pb-20 lg:pt-20 lg:pb-24">
        <span className="inline-flex items-center gap-2 rounded-full border-2 border-ink-900 bg-sun-400 px-3 py-1 text-xs font-bold uppercase tracking-[0.16em] text-ink-900 shadow-sticker rotate-sticker-1">
          <Star className="h-3.5 w-3.5 fill-current" />
          {eyebrow}
        </span>

        <h1 className="mt-6 max-w-3xl text-balance font-display text-display-lg text-cream-50 sm:text-display-xl">
          {title}
        </h1>

        <p className="mt-5 max-w-2xl text-pretty text-base text-cream-100/90 sm:text-lg">
          {description}
        </p>

        {highlights.length > 0 && (
          <ul className="mt-7 flex flex-wrap gap-2">
            {highlights.map((h, i) => (
              <li
                key={h}
                className={`rounded-full border-2 border-ink-900 px-3 py-1.5 text-xs font-bold ${
                  i % 3 === 0
                    ? "bg-sun-400 text-ink-900"
                    : i % 3 === 1
                      ? "bg-cream-50 text-ink-900"
                      : "bg-mint-100 text-ink-900"
                }`}
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
