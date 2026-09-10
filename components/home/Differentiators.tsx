import { Calendar, Eye, ShieldCheck, Wrench } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";

const items = [
  {
    icon: Calendar,
    title: "Plazos que se cumplen",
    desc: "Si decimos 3 semanas, son 3 semanas. Para constructoras es crítico; en casa, odiamos dejarte sin agua. El plazo va por escrito en el presupuesto.",
  },
  {
    icon: Eye,
    title: "Presupuesto sin trucos",
    desc: "Te visitamos y te mostramos qué hay que hacer. Todo incluido: materiales, mano de obra y limpieza. Si aparece algo raro, te avisamos antes de seguir.",
  },
  {
    icon: Wrench,
    title: "Técnicos que saben",
    desc: "No mandamos oficinistas con llave inglesa. Electricistas, fontaneros y reformistas con oficio real, que han visto de todo.",
  },
  {
    icon: ShieldCheck,
    title: "Si falla, volvemos",
    desc: "Garantía de 12 meses* en mano de obra. No es marketing: sabemos que lo que entregamos funciona. Si pasa algo, una llamada y estamos.",
  },
];

export function Differentiators() {
  return (
    <Section tone="cobalt" pad="lg" decorative>
      <div className="grid gap-12 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <SectionHeading
            tone="dark"
            eyebrow="Por qué nos llaman"
            title={
              <>
                Hacemos el trabajo <span className="text-copper-400">bien</span>. Y punto.
              </>
            }
            subtitle="No somos los más baratos. Somos los que dicen lo que hacen — y hacen lo que dicen."
          />
          <p className="mt-6 max-w-md text-xs text-cobalt-100/50">
            * La garantía cubre defectos imputables a la mano de obra; no cubre mal uso, modificaciones
            por terceros ni desgaste normal. Detalles en el presupuesto.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:col-span-7">
          {items.map((item) => (
            <div
              key={item.title}
              className="group rounded-2xl border border-white/10 bg-white/[0.05] p-6 backdrop-blur-md transition duration-300 hover:border-cyan-400/30 hover:bg-white/[0.08]"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-cobalt-500/20 text-cyan-400 ring-1 ring-white/10">
                <item.icon className="h-5 w-5" strokeWidth={2} />
              </span>
              <h3 className="mt-4 font-display text-lg font-semibold text-white">{item.title}</h3>
              <p className="mt-2 text-sm text-cobalt-100/70">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
