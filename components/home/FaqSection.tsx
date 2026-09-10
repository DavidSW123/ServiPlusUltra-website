"use client";

import { ChevronDown } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { JsonLd } from "@/components/seo/JsonLd";
import { faqJsonLd } from "@/lib/structured-data";
import { cn } from "@/lib/cn";

type FaqItem = { q: string; a: string };

const defaultItems: FaqItem[] = [
  { q: "¿Cuánto tarda una reforma?", a: "Baño pequeño: 1-2 semanas. Baño completo: 3-4 semanas. Reforma integral de piso: 6-10 semanas. Pero depende de si es todo nuevo o si hay sorpresas. En la visita te decimos el plazo real." },
  { q: "¿Cuánto cuesta?", a: "Depende. Un cambio de grifería: desde 500€. Baño completo: 3.000-8.000€. Reforma integral: el que te dé el presupuesto. Lo importante es que en el presupuesto va todo. No te cobramos luego \"ah, es que la fontanería estaba podrida\"." },
  { q: "¿Trabajáis con constructoras?", a: "Sí. Somos equipo fijo para varias. Cumplimos plazos porque sabemos que eso es lo que os importa. Si tenéis un trabajo específico o necesitáis alguien de confianza, llamad." },
  { q: "¿Qué pasa si hay sorpresas en la obra?", a: "Te avisamos. Si aparece algo que no se veía (tuberías rotas, cables viejos que hay que cambiar), hacemos una foto, os lo enseñamos y os decimos cuánto más cuesta. Vosotros decidís." },
  { q: "¿Hacéis garantía?", a: "Claro. 12 meses en mano de obra (sujeto a condiciones: cubre defectos imputables a la mano de obra; no cubre mal uso, modificaciones por terceros ni desgaste normal). Si algo no va, avisáis y volvemos. Pero es que lo que entregamos funciona." },
];

export function FaqSection({ items = defaultItems }: { items?: FaqItem[] }) {
  return (
    <Section tone="cream" pad="lg">
      <JsonLd data={faqJsonLd(items)} />
      <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-5">
          <Eyebrow>Preguntas frecuentes</Eyebrow>
          <h2 className="mt-5 font-display text-display-md text-ink-900 sm:text-display-lg">
            Lo que <span className="text-cobalt-600">nos preguntan</span> siempre.
          </h2>
          <p className="mt-5 max-w-md text-base text-ink-500">
            Si tu pregunta no está, llama. Hablamos en directo y te sacamos de dudas.
          </p>
        </div>

        <div className="lg:col-span-7">
          <ul className="divide-y divide-ink-200 overflow-hidden rounded-2xl border border-ink-200 bg-white shadow-soft">
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
      <details className="group" {...(defaultOpen && { open: true })}>
        <summary className={cn("flex cursor-pointer list-none items-center justify-between gap-4 px-6 py-5 transition hover:bg-ink-50")}>
          <span className="font-display text-base font-semibold text-ink-900 sm:text-lg">{q}</span>
          <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-ink-200 text-ink-500 transition group-open:rotate-180 group-open:border-cobalt-500 group-open:bg-cobalt-500 group-open:text-white">
            <ChevronDown className="h-4 w-4" />
          </span>
        </summary>
        <div className="px-6 pb-6 text-sm leading-relaxed text-ink-600">{a}</div>
      </details>
    </li>
  );
}
