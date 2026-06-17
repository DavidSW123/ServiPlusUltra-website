import type { Metadata } from "next";
import { LegalDoc } from "@/components/legal/LegalDoc";
import { privacidad } from "@/lib/legal-content";

export const metadata: Metadata = {
  title: "Política de privacidad",
  description:
    "Política de privacidad de ServiPlusUltra Solutions S.L. — qué datos tratamos, con qué finalidad, base jurídica, destinatarios y tus derechos conforme al RGPD.",
  alternates: { canonical: "/privacidad" },
  robots: { index: true, follow: true },
};

export default function PrivacidadPage() {
  return <LegalDoc doc={privacidad} />;
}
