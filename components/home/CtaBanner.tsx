import { ArrowRight, Phone, Star } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { siteConfig } from "@/lib/site-config";

type Props = {
  title?: string;
  subtitle?: string;
};

export function CtaBanner({
  title = "Reforma, urgencia o lo que sea.",
  subtitle = "Mándanos fotos, cuéntanos qué necesitas. Te damos presupuesto en 24 horas, sin bobadas. Si es algo que sabemos hacer, te decimos sí. Si no, te lo decimos antes de que pierdas tiempo.",
}: Props) {
  return (
    <section className="relative bg-cream-100">
      <Container className="py-14 sm:py-20">
        <div className="relative isolate rounded-[36px] border-2 border-ink-900 bg-sun-400 p-8 shadow-sticker sm:p-12 lg:p-14">
          {/* Sticker rotado */}
          <div className="absolute -top-4 left-12 rotate-sticker-1 rounded-full border-2 border-ink-900 bg-coral-500 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-white shadow-sticker">
            <Star className="mr-1 inline h-3 w-3 fill-current" />
            Respuesta en 24h
          </div>
          <div className="absolute -bottom-3 right-10 hidden rotate-sticker-3 rounded-full border-2 border-ink-900 bg-brand-600 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-white shadow-sticker sm:block">
            Sin compromiso
          </div>

          <div className="grid gap-8 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-7">
              <h2 className="text-balance font-display text-display-md text-ink-900 sm:text-display-lg">
                {title.includes("lo que sea") ? (
                  <>
                    {title.split("lo que sea")[0]}
                    <span className="relative inline-block text-coral-600">
                      <span className="relative z-10">lo que sea.</span>
                      <span className="absolute inset-x-0 bottom-1 -z-0 h-3 bg-cream-100" aria-hidden />
                    </span>
                  </>
                ) : (
                  title
                )}
              </h2>
              <p className="mt-4 max-w-xl text-pretty text-base text-ink-800 sm:text-lg">{subtitle}</p>
            </div>
            <div className="flex flex-wrap gap-3 lg:col-span-5 lg:justify-end">
              <Button href={siteConfig.contact.phoneTel} variant="dark" size="lg">
                <Phone className="h-5 w-5" />
                {siteConfig.contact.phone}
              </Button>
              <Button href="/contacto" variant="ghost" size="lg">
                Pedir presupuesto
                <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
