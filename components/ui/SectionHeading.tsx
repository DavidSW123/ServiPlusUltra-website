import type { ReactNode } from "react";
import { cn } from "@/lib/cn";
import { Eyebrow } from "./Eyebrow";

type Props = {
  eyebrow?: string;
  title: ReactNode;
  subtitle?: ReactNode;
  align?: "left" | "center";
  tone?: "light" | "dark" | "coral" | "sun" | "mint";
  className?: string;
  as?: "h1" | "h2" | "h3";
};

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "left",
  tone = "light",
  className,
  as: Heading = "h2",
}: Props) {
  const isDark = tone === "dark";
  return (
    <div
      className={cn(
        "max-w-3xl",
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      {eyebrow && (
        <div className={cn(align === "center" && "flex justify-center")}>
          <Eyebrow tone={tone === "light" ? "coral" : tone} sticker>
            {eyebrow}
          </Eyebrow>
        </div>
      )}
      <Heading
        className={cn(
          "mt-6 text-balance font-display tracking-tight",
          Heading === "h1"
            ? "text-display-xl"
            : Heading === "h2"
              ? "text-display-md sm:text-display-lg"
              : "text-2xl sm:text-3xl font-bold",
          isDark ? "text-cream-50" : "text-ink-900",
        )}
      >
        {title}
      </Heading>
      {subtitle && (
        <p
          className={cn(
            "mt-5 text-pretty text-base sm:text-lg",
            isDark ? "text-cream-100/85" : "text-ink-700",
          )}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
