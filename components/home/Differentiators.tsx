import { Calendar, Eye, ShieldCheck, Wrench } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { Eyebrow } from "@/components/ui/Eyebrow";

export function Differentiators() {
  return (
    <Section tone="cobalt" pad="lg" decorative>
      <div className="mx-auto max-w-3xl text-center">
        <div className="flex justify-center">
          <Eyebrow tone="sun" sticker>
            ★ Por qué nos llaman
          </Eyebrow>
        </div>
        <h2 className="mt-6 font-display text-display-lg text-cream-50">
          Hacemos el trabajo{" "}
          <span className="relative inline-block text-sun-400">
            <span className="relative z-10">bien.</span>
            <span className="absolute inset-x-0 bottom-1 -z-0 h-3 bg-coral-500/70" aria-hidden />
          </span>{" "}
          Y punto.
        </h2>
        <p className="mx-auto mt-5 max-w-2xl text-pretty text-lg text-cream-100/90">
          No somos los más baratos. Somos los que dicen lo que hacen — y hacen lo que dicen.
        </p>
      </div>

      {/* Grid asimétrico */}
      <div className="mt-14 grid gap-5 lg:grid-cols-12">
        {/* Item 1 GRANDE — Plazos */}
        <div className="relative rounded-3xl border-2 border-ink-900 bg-cream-50 p-7 shadow-sticker lg:col-span-7 lg:row-span-2 lg:p-9">
          <div className="absolute -top-4 right-8 rotate-sticker-2 rounded-full border-2 border-ink-900 bg-coral-500 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-white shadow-sticker">
            Datos 2024
          </div>
          <div className="flex h-14 w-14 items-center justify-center rounded-2xl border-2 border-ink-900 bg-coral-500 text-white">
            <Calendar className="h-7 w-7" strokeWidth={2.2} />
          </div>
          <h3 className="mt-6 font-display text-3xl font-bold text-ink-900">Plazos que se cumplen</h3>
          <p className="mt-3 text-base text-ink-700">
            Si decimos 3 semanas, son 3 semanas. Para constructoras es crítico. Para reformas en casa, odiamos
            que estén sin agua 6 meses porque algo se paró.
          </p>

          <div className="mt-6 flex items-end gap-3 rounded-2xl border-2 border-ink-900 bg-sun-400 p-5">
            <span className="font-display text-6xl font-bold leading-none text-ink-900">96%</span>
            <span className="pb-1 text-sm font-bold uppercase leading-tight text-ink-900">
              Obras entregadas a tiempo
            </span>
          </div>
        </div>

        {/* Item 2 — Presupuesto sin trucos */}
        <div className="relative rounded-3xl border-2 border-ink-900 bg-sun-400 p-7 shadow-sticker lg:col-span-5">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl border-2 border-ink-900 bg-brand-600 text-white">
            <Eye className="h-6 w-6" strokeWidth={2.2} />
          </div>
          <h3 className="mt-5 font-display text-2xl font-bold text-ink-900">Presupuesto sin trucos</h3>
          <p className="mt-2 text-sm text-ink-800">
            Te visitamos, te mostramos qué hay que hacer. Todo incluido: materiales, mano de obra, limpieza.
            Si aparece algo raro, te avisamos antes de seguir.
          </p>
        </div>

        {/* Item 3 — Técnicos que saben */}
        <div className="relative rounded-3xl border-2 border-ink-900 bg-mint-100 p-7 shadow-sticker lg:col-span-5">
          <div className="absolute -top-3 right-6 rotate-sticker-1 rounded-full border-2 border-ink-900 bg-ink-900 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-sun-400 shadow-sticker">
            ★ 15 años promedio
          </div>
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl border-2 border-ink-900 bg-coral-500 text-white">
            <Wrench className="h-6 w-6" strokeWidth={2.2} />
          </div>
          <h3 className="mt-5 font-display text-2xl font-bold text-ink-900">Técnicos que saben</h3>
          <p className="mt-2 text-sm text-ink-800">
            No mandamos oficinistas con llave inglesa. Electricistas, fontaneros y reformistas con oficio
            real, que han visto de todo.
          </p>
        </div>

        {/* Item 4 GRANDE — Garantía */}
        <div className="relative rounded-3xl border-2 border-ink-900 bg-ink-900 p-7 shadow-sticker lg:col-span-12 lg:p-9">
          <div className="grid gap-6 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-7">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl border-2 border-sun-400 bg-sun-400 text-ink-900">
                <ShieldCheck className="h-7 w-7" strokeWidth={2.2} />
              </div>
              <h3 className="mt-6 font-display text-3xl font-bold text-cream-50">
                Si falla, <span className="text-sun-400">volvemos.</span>
              </h3>
              <p className="mt-3 text-base text-cream-100/90">
                Garantía de <strong className="text-sun-400">12 meses*</strong> en mano de obra. No es
                marketing — es que sabemos que lo que entregamos va a funcionar. Si pasa algo, una llamada
                y estamos.
              </p>
              <p className="mt-4 text-xs text-cream-100/60">
                * Sujeto a condiciones. La garantía cubre defectos imputables a la mano de obra y no
                cubre daños por mal uso, modificaciones por terceros o desgaste normal. Detalles en el
                presupuesto.
              </p>
            </div>
            <div className="flex justify-end lg:col-span-5">
              <div className="rotate-sticker-2 rounded-3xl border-2 border-sun-400 bg-sun-400 p-6 text-center shadow-[6px_6px_0_0_rgba(255,255,255,0.15)]">
                <span className="block font-display text-7xl font-bold leading-none text-ink-900">12</span>
                <span className="mt-1 block text-xs font-bold uppercase tracking-wider text-ink-900">
                  Meses de garantía*
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
