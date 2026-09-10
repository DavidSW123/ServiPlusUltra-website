import { ArrowRight, Phone } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { siteConfig } from "@/lib/site-config";

type Props = { title?: string; subtitle?: string };

export function CtaBanner({
  title = "Reforma, urgencia o lo que sea.",
  subtitle = "Mándanos fotos, cuéntanos qué necesitas. Te damos presupuesto en 24 horas, sin bobadas. Si es algo que sabemos hacer, te decimos sí. Si no, te lo decimos antes de que pierdas tiempo.",
}: Props) {
  return (
    <section className="bg-ink-50">
      <Container className="py-14 sm:py-20">
        <div className="relative isolate overflow-hidden rounded-[32px] bg-cobalt-gradient p-8 shadow-elevate sm:p-12 lg:p-16">
          <div className="absolute inset-0 -z-10 bg-grid-tech bg-grid opacity-40" aria-hidden />
          <div className="absolute inset-0 -z-10 bg-cobalt-radial opacity-70" aria-hidden />
          <div className="absolute -right-24 -top-24 -z-10 h-72 w-72 rounded-full bg-cyan-500/20 blur-3xl" aria-hidden />
          <div className="absolute -bottom-24 -left-24 -z-10 h-72 w-72 rounded-full bg-copper-500/20 blur-3xl" aria-hidden />

          <div className="grid gap-8 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-7">
              <h2 className="text-balance font-display text-display-md text-white sm:text-display-lg">
                {title.includes("lo que sea") ? (
                  <>
                    {title.split("lo que sea")[0]}
                    <span className="text-copper-400">lo que sea.</span>
                  </>
                ) : (
                  title
                )}
              </h2>
              <p className="mt-4 max-w-xl text-pretty text-base text-cobalt-100/80 sm:text-lg">{subtitle}</p>
            </div>
            <div className="flex flex-wrap gap-3 lg:col-span-5 lg:justify-end">
              <Button href={siteConfig.contact.phoneTel} variant="dark" size="lg">
                <Phone className="h-5 w-5" />
                {siteConfig.contact.phone}
              </Button>
              <Button href="/contacto" variant="outline" size="lg">
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
