import type { ReactNode } from "react";
import { cn } from "@/lib/cn";
import { Container } from "./Container";

type Tone = "light" | "muted" | "dark" | "premium" | "accent" | "cream" | "cobalt" | "sun" | "mint";
type Pad = "sm" | "md" | "lg" | "xl";

const tones: Record<Tone, string> = {
  light: "bg-white text-ink-900",
  cream: "bg-ink-50 text-ink-900",
  muted: "bg-ink-50 text-ink-900",
  mint: "bg-cobalt-50 text-ink-900",
  sun: "bg-ink-50 text-ink-900",
  // Bandas oscuras cobalto
  cobalt: "bg-cobalt-950 text-white",
  dark: "bg-cobalt-950 text-white",
  premium: "bg-cobalt-950 text-white",
  accent: "bg-copper-500 text-white",
};

const pads: Record<Pad, string> = {
  sm: "py-10 sm:py-12",
  md: "py-14 sm:py-20",
  lg: "py-20 sm:py-28",
  xl: "py-28 sm:py-36",
};

const isDark = (t: Tone) => t === "cobalt" || t === "dark" || t === "premium";

type Props = {
  children: ReactNode;
  className?: string;
  innerClassName?: string;
  tone?: Tone;
  pad?: Pad;
  size?: "narrow" | "wide";
  id?: string;
  decorative?: boolean;
};

export function Section({
  children,
  className,
  innerClassName,
  tone = "cream",
  pad = "md",
  size = "wide",
  id,
  decorative = false,
}: Props) {
  return (
    <section id={id} className={cn("relative isolate overflow-hidden", tones[tone], pads[pad], className)}>
      {decorative && isDark(tone) && (
        <>
          <div className="absolute inset-0 -z-10 bg-grid-tech bg-grid opacity-40" aria-hidden />
          <div className="absolute inset-0 -z-10 bg-cobalt-radial opacity-70" aria-hidden />
          <div className="absolute -right-40 top-0 -z-10 h-96 w-96 rounded-full bg-cobalt-500/25 blur-3xl" aria-hidden />
          <div className="absolute -left-40 bottom-0 -z-10 h-96 w-96 rounded-full bg-copper-500/15 blur-3xl" aria-hidden />
        </>
      )}
      {decorative && !isDark(tone) && (
        <div className="absolute inset-0 -z-10 bg-grid-light bg-grid opacity-50" aria-hidden />
      )}
      <Container size={size} className={innerClassName}>
        {children}
      </Container>
    </section>
  );
}
