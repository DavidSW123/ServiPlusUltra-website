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

const cardVariants = [
  { bg: "bg-cream-50", iconBg: "bg-brand-600 text-white", bullet: "bg-coral-500" },
  { bg: "bg-sun-400", iconBg: "bg-coral-500 text-white", bullet: "bg-brand-700" },
  { bg: "bg-mint-100", iconBg: "bg-brand-600 text-white", bullet: "bg-coral-500" },
  { bg: "bg-coral-500 text-white", iconBg: "bg-sun-400 text-ink-900", bullet: "bg-cream-50" },
  { bg: "bg-cream-50", iconBg: "bg-coral-500 text-white", bullet: "bg-brand-600" },
  { bg: "bg-brand-600 text-cream-50", iconBg: "bg-sun-400 text-ink-900", bullet: "bg-sun-400" },
];

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
          const v = cardVariants[idx % cardVariants.length];
          return (
            <article
              key={f.title}
              className={`group relative flex flex-col rounded-3xl border-2 border-ink-900 p-6 shadow-sticker transition hover:-translate-y-1 hover:shadow-[6px_6px_0_0_rgba(26,26,26,1)] ${v.bg}`}
            >
              <span
                className={`flex h-12 w-12 items-center justify-center rounded-2xl border-2 border-ink-900 ${v.iconBg}`}
              >
                <f.icon className="h-5 w-5" strokeWidth={2.2} />
              </span>
              <h3 className="mt-5 font-display text-xl font-bold">{f.title}</h3>
              <p className="mt-2 text-sm opacity-90">{f.description}</p>

              {f.bullets && f.bullets.length > 0 && (
                <ul className="mt-4 space-y-1.5 border-t-2 border-ink-900/15 pt-4 text-sm">
                  {f.bullets.map((b) => (
                    <li key={b} className="flex items-start gap-2">
                      <span className={`mt-1.5 inline-block h-1.5 w-1.5 shrink-0 rounded-full ${v.bullet}`} />
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
