import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

type Props = {
  children: ReactNode;
  className?: string;
  tone?: "light" | "dark" | "coral" | "sun" | "mint";
  sticker?: boolean;
};

const tones: Record<NonNullable<Props["tone"]>, string> = {
  light: "bg-cream-50 text-ink-900 border-ink-900",
  dark: "bg-ink-900 text-cream-50 border-ink-900",
  coral: "bg-coral-500 text-white border-ink-900",
  sun: "bg-sun-400 text-ink-900 border-ink-900",
  mint: "bg-mint-100 text-ink-900 border-ink-900",
};

const dotColor: Record<NonNullable<Props["tone"]>, string> = {
  light: "bg-coral-500",
  dark: "bg-sun-400",
  coral: "bg-ink-900",
  sun: "bg-coral-500",
  mint: "bg-coral-500",
};

export function Eyebrow({ children, className, tone = "light", sticker = false }: Props) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 rounded-full border-2 px-3 py-1 text-xs font-bold uppercase tracking-[0.14em]",
        tones[tone],
        sticker && "shadow-sticker rotate-sticker-1",
        className,
      )}
    >
      <span className={cn("h-1.5 w-1.5 rounded-full", dotColor[tone])} />
      {children}
    </span>
  );
}
