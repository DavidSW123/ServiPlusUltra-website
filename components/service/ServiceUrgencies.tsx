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
          <Eyebrow tone="dark">
            <ShieldAlert className="h-3.5 w-3.5 text-cyan-400" />
            Urgencias
          </Eyebrow>
          <h2 className="mt-6 font-display text-display-md text-white sm:text-display-lg">
            {title}
          </h2>
          <p className="mt-5 max-w-2xl text-pretty text-base text-cobalt-100/80 sm:text-lg">
            {description}
          </p>

          <ul className="mt-8 space-y-3">
            {bullets.map((b) => (
              <li
                key={b}
                className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/[0.05] px-4 py-3 text-sm font-medium text-cobalt-50 backdrop-blur"
              >
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-cyan-400" />
                {b}
              </li>
            ))}
          </ul>
        </div>

        <div className="relative lg:col-span-5">
          <div className="relative rounded-3xl border border-ink-200 bg-white p-7 text-ink-900 shadow-elevate">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-copper-100 bg-copper-50 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-copper-700">
              Prioridad alta
            </span>
            <div className="mt-5 flex items-center gap-3">
              <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-cobalt-500 text-white shadow-glow-cobalt">
                <Clock4 className="h-6 w-6" />
              </span>
              <h3 className="font-display text-xl font-semibold">¿Necesitas a alguien ya?</h3>
            </div>
            <p className="mt-4 text-sm text-ink-500">
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
