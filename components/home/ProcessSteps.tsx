import { CheckCircle2, MessageSquareText, PhoneCall, Wrench } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { Eyebrow } from "@/components/ui/Eyebrow";

const steps = [
  {
    n: "01",
    title: "Nos cuentas qué pasa",
    desc: "Llamada o WhatsApp con tu situación. Si puedes, manda foto o vídeo — afinamos diagnóstico y precio orientativo antes de salir.",
    icon: PhoneCall,
    bg: "bg-cream-50",
    accent: "text-brand-600",
    iconBg: "bg-brand-600 text-white",
  },
  {
    n: "02",
    title: "Te damos un plan claro",
    desc: "Te explicamos las opciones, el rango de precio y el tiempo estimado según urgencia y ciudad. Sin compromiso.",
    icon: MessageSquareText,
    bg: "bg-sun-400",
    accent: "text-coral-600",
    iconBg: "bg-coral-500 text-white",
  },
  {
    n: "03",
    title: "Vamos y lo dejamos funcionando",
    desc: "Hacemos el trabajo, comprobamos que todo va bien y te explicamos en lenguaje normal qué hemos hecho.",
    icon: Wrench,
    bg: "bg-mint-100",
    accent: "text-brand-700",
    iconBg: "bg-brand-600 text-white",
  },
  {
    n: "04",
    title: "Garantía y seguimiento",
    desc: "Garantía por escrito. Si algo no termina de ir bien, volvemos. Preferimos hacerlo bien una vez que correr.",
    icon: CheckCircle2,
    bg: "bg-coral-500 text-white",
    accent: "text-sun-400",
    iconBg: "bg-sun-400 text-ink-900",
  },
];

export function ProcessSteps() {
  return (
    <Section tone="cream" pad="lg" decorative>
      <div className="mx-auto max-w-3xl text-center">
        <div className="flex justify-center">
          <Eyebrow tone="sun" sticker>
            ✦ Cómo trabajamos
          </Eyebrow>
        </div>
        <h2 className="mt-6 font-display text-display-lg text-ink-900">
          De la primera llamada al{" "}
          <span className="relative inline-block text-coral-500">
            <span className="relative z-10">«ya está arreglado»</span>
            <span className="absolute inset-x-0 bottom-1 -z-0 h-3 bg-sun-400" aria-hidden />
          </span>
          .
        </h2>
        <p className="mx-auto mt-5 max-w-2xl text-pretty text-lg text-ink-700">
          No necesitas saber de electricidad ni de herramientas. Para eso estamos nosotros. Tú entiendes
          lo justo: qué pasa, qué vamos a hacer y cuánto cuesta.
        </p>
      </div>

      <ol className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {steps.map((step) => (
          <li
            key={step.n}
            className={`relative rounded-3xl border-2 border-ink-900 p-6 shadow-sticker transition hover:-translate-y-1 hover:shadow-[6px_6px_0_0_rgba(26,26,26,1)] ${step.bg}`}
          >
            <div className="flex items-center justify-between">
              <span
                className={`flex h-12 w-12 items-center justify-center rounded-2xl border-2 border-ink-900 ${step.iconBg}`}
              >
                <step.icon className="h-5 w-5" strokeWidth={2.2} />
              </span>
              <span className={`font-display text-5xl font-bold leading-none ${step.accent}`}>
                {step.n}
              </span>
            </div>
            <h3 className="mt-5 font-display text-lg font-bold">{step.title}</h3>
            <p className="mt-2 text-sm opacity-90">{step.desc}</p>
          </li>
        ))}
      </ol>
    </Section>
  );
}
