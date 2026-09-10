import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

type Props = {
  children: ReactNode;
  className?: string;
  tone?: "light" | "dark" | "coral" | "sun" | "mint";
  /** compat — ya no dibuja "sticker" */
  sticker?: boolean;
};

const tones: Record<NonNullable<Props["tone"]>, string> = {
  light: "border-cobalt-100 bg-cobalt-50 text-cobalt-700",
  dark: "border-white/15 bg-white/10 text-cobalt-100 backdrop-blur",
  coral: "border-copper-100 bg-copper-50 text-copper-700",
  sun: "border-copper-100 bg-copper-50 text-copper-700",
  mint: "border-cobalt-100 bg-cobalt-50 text-cobalt-700",
};

const dot: Record<NonNullable<Props["tone"]>, string> = {
  light: "bg-cyan-400",
  dark: "bg-cyan-400",
  coral: "bg-copper-500",
  sun: "bg-copper-500",
  mint: "bg-cyan-400",
};

export function Eyebrow({ children, className, tone = "light" }: Props) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em]",
        tones[tone],
        className,
      )}
    >
      <span className={cn("h-1.5 w-1.5 rounded-full", dot[tone])} />
      {children}
    </span>
  );
}
