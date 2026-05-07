import Link from "next/link";
import { cn } from "@/lib/cn";

/**
 * Logo de ServiPlusUltra (Bold & Friendly).
 *
 * Wordmark con "Ultra" en color coral + lion mark en sticker style.
 * Cuando esté el PNG oficial, sustituir el bloque <svg> por <Image>.
 */

type Props = {
  className?: string;
  variant?: "full" | "compact" | "icon";
  tone?: "light" | "dark";
  href?: string | null;
};

export function Logo({ className, variant = "full", tone = "light", href = "/" }: Props) {
  const isDark = tone === "dark";

  const wordmark = (
    <span className={cn("flex flex-col leading-none", variant === "icon" && "sr-only")}>
      <span
        className={cn(
          "font-display text-lg font-bold tracking-tight sm:text-xl",
          isDark ? "text-cream-50" : "text-ink-900",
        )}
      >
        ServiPlus<span className="text-coral-500">Ultra</span>
      </span>
      {variant === "full" && (
        <span
          className={cn(
            "mt-0.5 text-[10px] font-bold uppercase tracking-[0.18em]",
            isDark ? "text-sun-400" : "text-ink-500",
          )}
        >
          ★ Multiservicios
        </span>
      )}
    </span>
  );

  const lionMark = (
    <span
      className={cn(
        "relative flex h-10 w-10 items-center justify-center rounded-xl border-2 border-ink-900 shadow-sticker sm:h-11 sm:w-11",
        isDark ? "bg-sun-400" : "bg-brand-600",
      )}
      aria-hidden="true"
    >
      {/* Placeholder SVG: león geométrico estilizado. */}
      <svg
        viewBox="0 0 40 40"
        className={cn("h-7 w-7", isDark ? "text-ink-900" : "text-sun-400")}
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M20 6 L26 10 L29 16 L31 22 L28 28 L20 32 L12 28 L9 22 L11 16 L14 10 Z" />
        <path d="M14 18 L18 16 L20 19 L22 16 L26 18" />
        <path d="M16 22 L20 24 L24 22" />
        <circle cx="16" cy="18" r="1" fill="currentColor" />
        <circle cx="24" cy="18" r="1" fill="currentColor" />
      </svg>
    </span>
  );

  const content = (
    <span className={cn("inline-flex items-center gap-3", className)}>
      {lionMark}
      {wordmark}
    </span>
  );

  if (!href) return content;

  return (
    <Link href={href} className="inline-flex" aria-label="ServiPlusUltra — Inicio">
      {content}
    </Link>
  );
}
