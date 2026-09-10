import { Award, Clock4, MapPinned, ShieldCheck, Star, Users } from "lucide-react";
import { Container } from "@/components/ui/Container";

const items = [
  { icon: ShieldCheck, label: "Trabajo garantizado", sub: "Garantía por escrito" },
  { icon: Star, label: "Atención personal", sub: "Hablas con un técnico real" },
  { icon: Clock4, label: "Llegada en <4h", sub: "Urgencias Barcelona" },
  { icon: MapPinned, label: "Madrid + Barcelona", sub: "Y áreas metropolitanas" },
  { icon: Users, label: "Hogares y empresas", sub: "Particulares y constructoras" },
  { icon: Award, label: "Sin sustos", sub: "Presupuesto previo claro" },
];

export function TrustBar() {
  return (
    <section className="border-b border-ink-200 bg-white">
      <Container>
        <ul className="grid grid-cols-2 gap-x-6 gap-y-6 py-8 sm:grid-cols-3 lg:grid-cols-6">
          {items.map(({ icon: Icon, label, sub }) => (
            <li key={label} className="flex items-start gap-3">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-cobalt-50 text-cobalt-600 ring-1 ring-cobalt-100">
                <Icon className="h-5 w-5" strokeWidth={2} />
              </span>
              <div className="min-w-0">
                <p className="text-sm font-semibold text-ink-900">{label}</p>
                <p className="truncate text-xs text-ink-500">{sub}</p>
              </div>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
