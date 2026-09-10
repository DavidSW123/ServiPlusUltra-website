import { Phone } from "lucide-react";
import { siteConfig } from "@/lib/site-config";

/** Barra fija inferior, solo en móvil/tablet: llamada directa + WhatsApp. */
export function MobileCallBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-ink-200 bg-white/95 p-2 shadow-elevate backdrop-blur lg:hidden">
      <div className="flex gap-2">
        <a
          href={siteConfig.contact.phoneTel}
          className="flex flex-1 items-center justify-center gap-2 rounded-full bg-cobalt-500 px-4 py-3 text-sm font-semibold text-white shadow-glow-cobalt"
          aria-label={`Llamar al ${siteConfig.contact.phone}`}
        >
          <Phone className="h-4 w-4" />
          Llamar
        </a>
        <a
          href={siteConfig.contact.whatsapp}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-1 items-center justify-center gap-2 rounded-full border border-ink-200 bg-white px-4 py-3 text-sm font-semibold text-ink-900"
        >
          WhatsApp
        </a>
      </div>
    </div>
  );
}
