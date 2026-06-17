"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Cookie } from "lucide-react";

const STORAGE_KEY = "spu-cookie-consent";
const COOKIE_MAX_AGE = 60 * 60 * 24 * 365; // 12 meses

type Consent = {
  necessary: true;
  analytics: boolean;
  marketing: boolean;
  ts: number;
};

function persist(consent: Consent) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(consent));
    const value = `${consent.analytics ? "1" : "0"}${consent.marketing ? "1" : "0"}`;
    document.cookie = `spu_cookie_consent=${value}; path=/; max-age=${COOKIE_MAX_AGE}; SameSite=Lax`;
  } catch {
    /* almacenamiento no disponible */
  }
  // Punto de enganche para futuras cargas de scripts (Google Analytics / Ads)
  // según el consentimiento. De momento no hay scripts no esenciales.
}

export function CookieConsent() {
  const [open, setOpen] = useState(false);
  const [showConfig, setShowConfig] = useState(false);
  const [analytics, setAnalytics] = useState(false);
  const [marketing, setMarketing] = useState(false);

  useEffect(() => {
    let hasConsent = false;
    try {
      hasConsent = !!localStorage.getItem(STORAGE_KEY);
    } catch {
      hasConsent = false;
    }
    if (!hasConsent) setOpen(true);

    const reopen = () => {
      setShowConfig(true);
      setOpen(true);
    };
    window.addEventListener("open-cookie-settings", reopen);
    return () => window.removeEventListener("open-cookie-settings", reopen);
  }, []);

  if (!open) return null;

  const decide = (a: boolean, m: boolean) => {
    persist({ necessary: true, analytics: a, marketing: m, ts: Date.now() });
    setOpen(false);
    setShowConfig(false);
  };

  return (
    <div className="fixed inset-x-0 bottom-0 z-[60] p-3 sm:p-4">
      <div className="mx-auto max-w-3xl rounded-3xl border-2 border-ink-900 bg-cream-50 p-5 shadow-sticker sm:p-6">
        <div className="flex items-start gap-3">
          <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl border-2 border-ink-900 bg-sun-400 text-ink-900">
            <Cookie className="h-5 w-5" />
          </span>
          <div className="min-w-0">
            <h2 className="font-display text-lg font-bold text-ink-900">Usamos cookies</h2>
            <p className="mt-1 text-sm text-ink-700">
              Usamos cookies técnicas necesarias para que la web funcione. Con tu permiso, usaremos
              también cookies analíticas y publicitarias para mejorar el sitio y medir nuestras
              campañas. Puedes aceptarlas, rechazarlas o configurarlas. Más información en la{" "}
              <Link href="/cookies" className="font-bold text-brand-700 underline underline-offset-2 hover:text-coral-600">
                Política de cookies
              </Link>{" "}
              y la{" "}
              <Link href="/privacidad" className="font-bold text-brand-700 underline underline-offset-2 hover:text-coral-600">
                Política de privacidad
              </Link>
              .
            </p>
          </div>
        </div>

        {showConfig && (
          <div className="mt-4 space-y-2.5 border-t-2 border-ink-900/10 pt-4">
            <ConfigRow
              label="Técnicas (necesarias)"
              desc="Imprescindibles para el funcionamiento del sitio. Siempre activas."
              checked
              disabled
            />
            <ConfigRow
              label="Analíticas"
              desc="Nos ayudan a entender cómo se usa la web (Google Analytics)."
              checked={analytics}
              onChange={setAnalytics}
            />
            <ConfigRow
              label="Publicitarias"
              desc="Permiten medir y gestionar nuestras campañas (Google Ads)."
              checked={marketing}
              onChange={setMarketing}
            />
          </div>
        )}

        <div className="mt-4 flex flex-wrap gap-2.5">
          <button
            type="button"
            onClick={() => decide(true, true)}
            className="inline-flex items-center justify-center rounded-full border-2 border-ink-900 bg-sun-400 px-5 py-2.5 text-sm font-bold text-ink-900 shadow-sticker transition hover:-translate-y-0.5 hover:shadow-[6px_6px_0_0_rgba(26,26,26,1)]"
          >
            Aceptar todas
          </button>
          <button
            type="button"
            onClick={() => decide(false, false)}
            className="inline-flex items-center justify-center rounded-full border-2 border-ink-900 bg-cream-50 px-5 py-2.5 text-sm font-bold text-ink-900 transition hover:bg-cream-100"
          >
            Solo necesarias
          </button>
          {showConfig ? (
            <button
              type="button"
              onClick={() => decide(analytics, marketing)}
              className="inline-flex items-center justify-center rounded-full border-2 border-ink-900 bg-brand-600 px-5 py-2.5 text-sm font-bold text-white shadow-sticker transition hover:-translate-y-0.5 hover:shadow-[6px_6px_0_0_rgba(26,26,26,1)]"
            >
              Guardar preferencias
            </button>
          ) : (
            <button
              type="button"
              onClick={() => setShowConfig(true)}
              className="inline-flex items-center justify-center rounded-full px-4 py-2.5 text-sm font-bold text-ink-700 underline underline-offset-2 transition hover:text-ink-900"
            >
              Configurar
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

function ConfigRow({
  label,
  desc,
  checked,
  disabled,
  onChange,
}: {
  label: string;
  desc: string;
  checked: boolean;
  disabled?: boolean;
  onChange?: (v: boolean) => void;
}) {
  return (
    <label className={`flex items-start justify-between gap-3 ${disabled ? "opacity-70" : "cursor-pointer"}`}>
      <span className="min-w-0">
        <span className="block text-sm font-bold text-ink-900">{label}</span>
        <span className="block text-xs text-ink-600">{desc}</span>
      </span>
      <input
        type="checkbox"
        checked={checked}
        disabled={disabled}
        onChange={(e) => onChange?.(e.target.checked)}
        className="mt-1 h-5 w-5 shrink-0 cursor-pointer rounded border-2 border-ink-900 text-brand-600 focus:ring-brand-600 disabled:cursor-not-allowed"
      />
    </label>
  );
}
