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
  const dark = tone === "dark";
  return (
    <div className={cn("max-w-3xl", align === "center" && "mx-auto text-center", className)}>
      {eyebrow && (
        <div className={cn(align === "center" && "flex justify-center")}>
          <Eyebrow tone={tone}>{eyebrow}</Eyebrow>
        </div>
      )}
      <Heading
        className={cn(
          "mt-5 text-balance font-display tracking-tight",
          Heading === "h1"
            ? "text-display-xl"
            : Heading === "h2"
              ? "text-display-md sm:text-display-lg"
              : "text-2xl font-semibold sm:text-3xl",
          dark ? "text-white" : "text-ink-900",
        )}
      >
        {title}
      </Heading>
      {subtitle && (
        <p className={cn("mt-5 text-pretty text-base sm:text-lg", dark ? "text-cobalt-100/80" : "text-ink-500")}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
