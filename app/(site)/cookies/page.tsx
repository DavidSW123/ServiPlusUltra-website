import type { Metadata } from "next";
import { LegalDoc } from "@/components/legal/LegalDoc";
import { cookies } from "@/lib/legal-content";

export const metadata: Metadata = {
  title: "Política de cookies",
  description:
    "Política de cookies de ServiPlusUltra Solutions S.L. — qué cookies usamos, con qué finalidad y cómo aceptarlas, rechazarlas o revocar tu consentimiento.",
  alternates: { canonical: "/cookies" },
  robots: { index: true, follow: true },
};

export default function CookiesPage() {
  return <LegalDoc doc={cookies} />;
}
