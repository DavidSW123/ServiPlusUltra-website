import Link from "next/link";
import { forwardRef, type AnchorHTMLAttributes, type ButtonHTMLAttributes, type ReactNode } from "react";
import { cn } from "@/lib/cn";

type Variant = "primary" | "secondary" | "ghost" | "outline" | "dark" | "coral";
type Size = "sm" | "md" | "lg";

const baseClasses =
  "inline-flex items-center justify-center gap-2 rounded-full font-bold transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed select-none whitespace-nowrap border-2 border-ink-900";

const variants: Record<Variant, string> = {
  // Yellow chunky — CTA principal (Bold & Friendly)
  primary:
    "bg-sun-400 text-ink-900 shadow-sticker hover:-translate-y-0.5 hover:shadow-[6px_6px_0_0_rgba(26,26,26,1)] active:translate-y-0 active:shadow-[2px_2px_0_0_rgba(26,26,26,1)]",
  // Cobalt — secondary CTA
  secondary:
    "bg-brand-600 text-white shadow-sticker hover:-translate-y-0.5 hover:shadow-[6px_6px_0_0_rgba(26,26,26,1)] active:translate-y-0 active:shadow-[2px_2px_0_0_rgba(26,26,26,1)]",
  // Coral — accent
  coral:
    "bg-coral-500 text-white shadow-sticker hover:-translate-y-0.5 hover:shadow-[6px_6px_0_0_rgba(26,26,26,1)] active:translate-y-0 active:shadow-[2px_2px_0_0_rgba(26,26,26,1)]",
  // Ghost — fondo claro/cream
  ghost:
    "bg-cream-50 text-ink-900 hover:bg-cream-100 shadow-sticker hover:-translate-y-0.5 hover:shadow-[6px_6px_0_0_rgba(26,26,26,1)]",
  // Outline para sobre fondos oscuros
  outline:
    "bg-transparent text-ink-900 border-ink-900 hover:bg-ink-900 hover:text-cream-100",
  // Dark
  dark: "bg-ink-900 text-cream-50 hover:bg-ink-800 shadow-sticker hover:-translate-y-0.5 hover:shadow-[6px_6px_0_0_rgba(255,212,59,1)]",
};

const sizes: Record<Size, string> = {
  sm: "px-4 py-2 text-sm",
  md: "px-5 py-2.5 text-sm",
  lg: "px-7 py-3.5 text-base",
};

type CommonProps = {
  variant?: Variant;
  size?: Size;
  children: ReactNode;
  className?: string;
};

type ButtonAsButton = CommonProps &
  Omit<ButtonHTMLAttributes<HTMLButtonElement>, keyof CommonProps> & {
    href?: undefined;
  };

type ButtonAsLink = CommonProps &
  Omit<AnchorHTMLAttributes<HTMLAnchorElement>, keyof CommonProps> & {
    href: string;
  };

type ButtonProps = ButtonAsButton | ButtonAsLink;

export const Button = forwardRef<HTMLButtonElement | HTMLAnchorElement, ButtonProps>(
  function Button({ variant = "primary", size = "md", className, children, ...props }, ref) {
    const classes = cn(baseClasses, variants[variant], sizes[size], className);

    if ("href" in props && props.href) {
      const { href, ...rest } = props;
      const isExternal = /^https?:\/\//.test(href) || href.startsWith("tel:") || href.startsWith("mailto:");

      if (isExternal) {
        return (
          <a
            ref={ref as React.Ref<HTMLAnchorElement>}
            href={href}
            className={classes}
            {...(rest as AnchorHTMLAttributes<HTMLAnchorElement>)}
          >
            {children}
          </a>
        );
      }

      return (
        <Link
          ref={ref as React.Ref<HTMLAnchorElement>}
          href={href}
          className={classes}
          {...(rest as AnchorHTMLAttributes<HTMLAnchorElement>)}
        >
          {children}
        </Link>
      );
    }

    return (
      <button
        ref={ref as React.Ref<HTMLButtonElement>}
        className={classes}
        {...(props as ButtonHTMLAttributes<HTMLButtonElement>)}
      >
        {children}
      </button>
    );
  },
);
