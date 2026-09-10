import { CheckCircle2, MessageSquareText, PhoneCall, Wrench } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";

const steps = [
  { n: "01", title: "Nos cuentas qué pasa", desc: "Llamada o WhatsApp con tu situación. Si puedes, manda foto o vídeo — afinamos diagnóstico y precio orientativo antes de salir.", icon: PhoneCall },
  { n: "02", title: "Te damos un plan claro", desc: "Te explicamos las opciones, el rango de precio y el tiempo estimado según urgencia y ciudad. Sin compromiso.", icon: MessageSquareText },
  { n: "03", title: "Vamos y lo dejamos hecho", desc: "Hacemos el trabajo, comprobamos que todo va bien y te explicamos en lenguaje normal qué hemos hecho.", icon: Wrench },
  { n: "04", title: "Garantía y seguimiento", desc: "Garantía por escrito. Si algo no termina de ir bien, volvemos. Preferimos hacerlo bien una vez que correr.", icon: CheckCircle2 },
];

export function ProcessSteps() {
  return (
    <Section tone="light" pad="lg">
      <div className="mx-auto max-w-3xl text-center">
        <SectionHeading
          align="center"
          eyebrow="Cómo trabajamos"
          title={
            <>
              De la primera llamada al <span className="text-cobalt-600">«ya está»</span>.
            </>
          }
          subtitle="No necesitas saber de electricidad ni de herramientas. Para eso estamos nosotros: qué pasa, qué vamos a hacer y cuánto cuesta."
        />
      </div>

      <ol className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {steps.map((step, i) => (
          <li key={step.n} className="relative rounded-2xl border border-ink-200 bg-white p-6 shadow-soft transition duration-300 hover:-translate-y-1 hover:border-cobalt-200 hover:shadow-card">
            <div className="flex items-center justify-between">
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-cobalt-500 text-white shadow-glow-cobalt">
                <step.icon className="h-5 w-5" strokeWidth={2} />
              </span>
              <span className="font-display text-4xl font-bold leading-none text-ink-100">{step.n}</span>
            </div>
            <h3 className="mt-5 font-display text-lg font-semibold text-ink-900">{step.title}</h3>
            <p className="mt-2 text-sm text-ink-500">{step.desc}</p>
            {i < steps.length - 1 && (
              <span className="absolute right-0 top-11 hidden h-px w-6 translate-x-full bg-ink-200 lg:block" aria-hidden />
            )}
          </li>
        ))}
      </ol>
    </Section>
  );
}
