import { Award, Clock4, MapPinned, ShieldCheck, Star, Users } from "lucide-react";
import { Container } from "@/components/ui/Container";

const items = [
  {
    icon: ShieldCheck,
    label: "Trabajo garantizado",
    sub: "Garantía por escrito",
    bg: "bg-mint-100",
  },
  {
    icon: Star,
    label: "Atención personal",
    sub: "Hablas con un técnico real",
    bg: "bg-sun-400",
  },
  {
    icon: Clock4,
    label: "Llegada en <4h",
    sub: "Urgencias Barcelona",
    bg: "bg-coral-500 text-white",
  },
  {
    icon: MapPinned,
    label: "Madrid + Barcelona",
    sub: "Y áreas metropolitanas",
    bg: "bg-cream-50",
  },
  {
    icon: Users,
    label: "Hogares y empresas",
    sub: "Particulares, comunidades, comercios",
    bg: "bg-brand-600 text-white",
  },
  {
    icon: Award,
    label: "Sin sustos",
    sub: "Presupuesto previo claro",
    bg: "bg-sun-400",
  },
];

export function TrustBar() {
  return (
    <section className="border-y-2 border-ink-900 bg-cream-100">
      <Container>
        <ul className="grid grid-cols-2 gap-3 py-6 sm:grid-cols-3 lg:grid-cols-6">
          {items.map(({ icon: Icon, label, sub, bg }) => (
            <li
              key={label}
              className={`flex items-start gap-3 rounded-2xl border-2 border-ink-900 p-3 shadow-sticker ${bg}`}
            >
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border-2 border-ink-900 bg-cream-50">
                <Icon className="h-4 w-4 text-ink-900" strokeWidth={2.4} />
              </span>
              <div className="min-w-0">
                <p className="text-sm font-bold leading-tight">{label}</p>
                <p className="mt-0.5 truncate text-xs opacity-80">{sub}</p>
              </div>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
