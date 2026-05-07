import { CheckCircle2, Clock4, Phone, ShieldAlert } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Section } from "@/components/ui/Section";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { siteConfig } from "@/lib/site-config";

type Props = {
  title?: string;
  description?: string;
  bullets?: string[];
};

export function ServiceUrgencies({
  title = "Urgencias con tiempos reales, no con promesas vacías",
  description = "Cuando algo falla, el reloj corre. Damos prioridad a las urgencias, pero sin jugar con tu tiempo. En Barcelona nos comprometemos, siempre que haya técnico disponible, a acudir en menos de 4 horas. En Madrid y resto de servicios, buscamos contigo un horario realista.",
  bullets = [
    "Te decimos el tiempo estimado desde la primera llamada",
    "Si algo se complica, te avisamos — no desaparecemos",
    "Preferimos hacer un buen trabajo una vez, en lugar de correr y volver dos",
  ],
}: Props) {
  return (
    <Section tone="cobalt" pad="lg" decorative>
      <div className="grid gap-10 lg:grid-cols-12 lg:items-center">
        <div className="lg:col-span-7">
          <Eyebrow tone="coral" sticker>
            <ShieldAlert className="h-3.5 w-3.5" />
            Urgencias
          </Eyebrow>
          <h2 className="mt-6 font-display text-display-md text-cream-50 sm:text-display-lg">
            {title}
          </h2>
          <p className="mt-5 max-w-2xl text-pretty text-base text-cream-100/90 sm:text-lg">
            {description}
          </p>

          <ul className="mt-8 space-y-3">
            {bullets.map((b) => (
              <li
                key={b}
                className="flex items-start gap-3 rounded-2xl border-2 border-cream-50/15 bg-cream-50/5 px-4 py-3 text-sm font-semibold text-cream-100/90"
              >
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-mint-300" />
                {b}
              </li>
            ))}
          </ul>
        </div>

        <div className="relative lg:col-span-5">
          {/* Sticker rotado */}
          <div className="absolute -top-4 -right-3 z-20 rotate-sticker-2 rounded-full border-2 border-ink-900 bg-coral-500 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-white shadow-sticker">
            ★ Prioridad alta
          </div>

          <div className="relative rounded-3xl border-2 border-ink-900 bg-cream-50 p-7 text-ink-900 shadow-sticker">
            <div className="flex items-center gap-3">
              <span className="flex h-12 w-12 items-center justify-center rounded-2xl border-2 border-ink-900 bg-coral-500 text-white">
                <Clock4 className="h-6 w-6" />
              </span>
              <h3 className="font-display text-xl font-bold">¿Necesitas a alguien ya?</h3>
            </div>
            <p className="mt-4 text-sm text-ink-700">
              Si la urgencia no puede esperar, llámanos directamente. Te decimos al momento si podemos
              acudir y en qué plazo aproximado.
            </p>
            <div className="mt-5 grid gap-2.5">
              <Button href={siteConfig.contact.phoneTel} variant="primary" size="md">
                <Phone className="h-4 w-4" />
                Llamar a urgencias
              </Button>
              <Button href={siteConfig.contact.whatsapp} variant="coral" size="md">
                Mandar fotos por WhatsApp
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
