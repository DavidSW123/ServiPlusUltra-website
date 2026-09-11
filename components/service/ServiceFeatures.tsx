import type { LucideIcon } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";

export type Feature = {
  icon: LucideIcon;
  title: string;
  description: string;
  bullets?: string[];
};

type Props = {
  eyebrow: string;
  title: React.ReactNode;
  subtitle?: string;
  features: Feature[];
  tone?: "light" | "muted" | "cream";
};

export function ServiceFeatures({ eyebrow, title, subtitle, features }: Props) {
  return (
    <Section tone="cream" pad="lg" decorative>
      <div className="mx-auto max-w-3xl text-center">
        <SectionHeading
          eyebrow={eyebrow}
          title={title}
          subtitle={subtitle}
          align="center"
        />
      </div>

      <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {features.map((f, idx) => {
          const isCopper = idx % 3 === 2;
          return (
            <article
              key={f.title}
              className="group flex flex-col rounded-2xl border border-ink-200 bg-white p-6 shadow-soft transition duration-300 hover:-translate-y-1 hover:border-cobalt-200 hover:shadow-card"
            >
              <span
                className={
                  isCopper
                    ? "flex h-12 w-12 items-center justify-center rounded-xl bg-copper-50 text-copper-600 ring-1 ring-copper-100"
                    : "flex h-12 w-12 items-center justify-center rounded-xl bg-cobalt-50 text-cobalt-600 ring-1 ring-cobalt-100"
                }
              >
                <f.icon className="h-5 w-5" strokeWidth={2} />
              </span>
              <h3 className="mt-5 font-display text-xl font-semibold text-ink-900">{f.title}</h3>
              <p className="mt-2 text-sm text-ink-500">{f.description}</p>

              {f.bullets && f.bullets.length > 0 && (
                <ul className="mt-4 space-y-1.5 border-t border-ink-100 pt-4 text-sm text-ink-600">
                  {f.bullets.map((b) => (
                    <li key={b} className="flex items-start gap-2">
                      <span
                        className={`mt-1.5 inline-block h-1.5 w-1.5 shrink-0 rounded-full ${
                          isCopper ? "bg-copper-500" : "bg-cobalt-500"
                        }`}
                      />
                      {b}
                    </li>
                  ))}
                </ul>
              )}
            </article>
          );
        })}
      </div>
    </Section>
  );
}
