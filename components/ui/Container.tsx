import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

type Props = {
  children: ReactNode;
  className?: string;
  size?: "narrow" | "wide";
  as?: "div" | "section" | "header" | "footer" | "nav" | "main" | "article";
};

export function Container({ children, className, size = "wide", as: Tag = "div" }: Props) {
  return (
    <Tag className={cn(size === "narrow" ? "container-narrow" : "container-wide", className)}>
      {children}
    </Tag>
  );
}
