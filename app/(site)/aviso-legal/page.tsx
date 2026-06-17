import type { Metadata } from "next";
import { LegalDoc } from "@/components/legal/LegalDoc";
import { avisoLegal } from "@/lib/legal-content";

export const metadata: Metadata = {
  title: "Aviso legal",
  description:
    "Aviso legal de ServiPlusUltra Solutions S.L. — datos identificativos, condiciones de uso, propiedad intelectual y legislación aplicable.",
  alternates: { canonical: "/aviso-legal" },
  robots: { index: true, follow: true },
};

export default function AvisoLegalPage() {
  return <LegalDoc doc={avisoLegal} />;
}
