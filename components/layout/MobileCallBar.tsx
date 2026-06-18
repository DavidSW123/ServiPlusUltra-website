import { Phone } from "lucide-react";
import { siteConfig } from "@/lib/site-config";

/** Barra fija inferior, solo en móvil/tablet, con llamada directa + WhatsApp. */
export function MobileCallBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t-2 border-ink-900 bg-cream-50 p-2 lg:hidden">
      <div className="flex gap-2">
        <a
          href={siteConfig.contact.phoneTel}
          className="flex flex-1 items-center justify-center gap-2 rounded-full border-2 border-ink-900 bg-sun-400 px-4 py-3 text-sm font-bold text-ink-900"
          aria-label={`Llamar al ${siteConfig.contact.phone}`}
        >
          <Phone className="h-4 w-4" />
          Llamar
        </a>
        <a
          href={siteConfig.contact.whatsapp}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-1 items-center justify-center gap-2 rounded-full border-2 border-ink-900 bg-cream-50 px-4 py-3 text-sm font-bold text-ink-900"
        >
          WhatsApp
        </a>
      </div>
    </div>
  );
}
