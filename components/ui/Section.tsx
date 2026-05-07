import type { ReactNode } from "react";
import { cn } from "@/lib/cn";
import { Container } from "./Container";

type Tone = "light" | "muted" | "dark" | "premium" | "accent" | "cream" | "cobalt" | "sun" | "mint";
type Pad = "sm" | "md" | "lg" | "xl";

const tones: Record<Tone, string> = {
  light: "bg-cream-50 text-ink-900",
  cream: "bg-cream-100 text-ink-900",
  muted: "bg-cream-200 text-ink-900",
  cobalt: "bg-brand-600 text-white",
  sun: "bg-sun-400 text-ink-900",
  mint: "bg-mint-100 text-ink-900",
  // Compat
  dark: "bg-ink-900 text-cream-50",
  premium: "bg-brand-600 text-white",
  accent: "bg-coral-500 text-white",
};

const pads: Record<Pad, string> = {
  sm: "py-10 sm:py-12",
  md: "py-14 sm:py-20",
  lg: "py-20 sm:py-28",
  xl: "py-28 sm:py-36",
};

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
      {decorative && tone === "cobalt" && (
        <>
          <div className="absolute inset-0 -z-10 bg-dots-soft bg-dots opacity-30" />
          <div className="absolute -right-32 -top-32 -z-10 h-80 w-80 rounded-full bg-sun-400/30 blur-3xl" />
          <div className="absolute -bottom-32 -left-20 -z-10 h-72 w-72 rounded-full bg-coral-500/30 blur-3xl" />
        </>
      )}
      {decorative && tone === "cream" && (
        <>
          <div className="absolute inset-0 -z-10 bg-dots-soft bg-dots opacity-40" />
        </>
      )}
      {decorative && tone === "sun" && (
        <>
          <div className="absolute inset-0 -z-10 bg-dots-soft bg-dots opacity-25" />
        </>
      )}
      <Container size={size} className={innerClassName}>
        {children}
      </Container>
    </section>
  );
}
