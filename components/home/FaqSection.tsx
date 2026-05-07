"use client";

import { ChevronDown } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { cn } from "@/lib/cn";

type FaqItem = { q: string; a: string };

const defaultItems: FaqItem[] = [
  {
    q: "¿Cuánto tarda una reforma?",
    a: "Baño pequeño: 1-2 semanas. Baño completo: 3-4 semanas. Reforma integral de piso: 6-10 semanas. Pero depende de si es todo nuevo o si hay sorpresas. En la visita te decimos el plazo real.",
  },
  {
    q: "¿Cuánto cuesta?",
    a: "Depende. Un cambio de grifería: desde 500€. Baño completo: 3.000-8.000€. Reforma integral: el que te dé el presupuesto. Lo importante es que en el presupuesto va todo. No te cobra luego \"ah, es que la fontanería estaba podrida\".",
  },
  {
    q: "¿Trabajáis con constructoras?",
    a: "Sí. Somos equipo fijo para varias. Cumplimos plazos porque sabemos que eso es lo que os importa. Si tenéis un trabajo específico o necesitáis alguien de confianza, llamad.",
  },
  {
    q: "¿Qué pasa si hay sorpresas en la obra?",
    a: "Te avisamos. Para vosotros, la obra estaba bien. Si aparece algo que no se veía (tuberías rotas, cables viejos que hay que cambiar), hacemos una foto, os lo enseñamos y os decimos cuánto más cuesta. Vosotros decidís.",
  },
  {
    q: "¿Hacéis garantía?",
    a: "Claro. 12 meses en mano de obra (sujeto a condiciones: cubre defectos imputables a la mano de obra; no cubre mal uso, modificaciones por terceros ni desgaste normal). Si algo no va, avisáis y volvemos. Pero es que lo que entregamos funciona.",
  },
];

export function FaqSection({ items = defaultItems }: { items?: FaqItem[] }) {
  return (
    <Section tone="cream" pad="lg">
      <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-5">
          <Eyebrow tone="mint" sticker>
            ✦ Lo más típico
          </Eyebrow>
          <h2 className="mt-6 font-display text-display-lg text-ink-900">
            Cosas que{" "}
            <span className="relative inline-block text-coral-500">
              <span className="relative z-10">nos preguntan</span>
              <span className="absolute inset-x-0 bottom-1 -z-0 h-3 bg-sun-400" aria-hidden />
            </span>{" "}
            siempre.
          </h2>
          <p className="mt-5 max-w-md text-pretty text-base text-ink-700">
            Si tu pregunta no está, llama. Hablamos en directo y te sacamos de dudas.
          </p>
        </div>

        <div className="lg:col-span-7">
          <ul className="space-y-3">
            {items.map((item, idx) => (
              <FaqRow key={item.q} {...item} defaultOpen={idx === 0} />
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
}

function FaqRow({ q, a, defaultOpen = false }: FaqItem & { defaultOpen?: boolean }) {
  return (
    <li>
      <details
        className="group rounded-3xl border-2 border-ink-900 bg-cream-50 shadow-sticker transition open:bg-sun-400"
        {...(defaultOpen && { open: true })}
      >
        <summary
          className={cn(
            "flex cursor-pointer list-none items-center justify-between gap-4 px-6 py-5 transition",
          )}
        >
          <span className="font-display text-base font-bold text-ink-900 sm:text-lg">{q}</span>
          <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border-2 border-ink-900 bg-cream-100 text-ink-900 transition group-open:rotate-180 group-open:bg-ink-900 group-open:text-sun-400">
            <ChevronDown className="h-4 w-4" strokeWidth={2.5} />
          </span>
        </summary>
        <div className="border-t-2 border-ink-900/15 px-6 pb-6 pt-4 text-sm text-ink-800">{a}</div>
      </details>
    </li>
  );
}
