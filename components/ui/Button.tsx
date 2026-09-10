import Link from "next/link";
import { forwardRef, type AnchorHTMLAttributes, type ButtonHTMLAttributes, type ReactNode } from "react";
import { cn } from "@/lib/cn";

type Variant = "primary" | "secondary" | "ghost" | "outline" | "dark" | "coral";
type Size = "sm" | "md" | "lg";

const baseClasses =
  "inline-flex items-center justify-center gap-2 rounded-full font-semibold transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed select-none whitespace-nowrap";

const variants: Record<Variant, string> = {
  // Cobalto sólido con resplandor — CTA principal
  primary:
    "bg-cobalt-500 text-white shadow-glow-cobalt hover:bg-cobalt-600 hover:shadow-elevate active:scale-[0.98]",
  // Oscuro
  secondary: "bg-ink-900 text-white hover:bg-ink-800 active:scale-[0.98]",
  // Cobre — acento
  coral:
    "bg-copper-500 text-white shadow-glow-copper hover:bg-copper-600 active:scale-[0.98]",
  // Claro con borde fino
  ghost:
    "bg-white text-ink-900 border border-ink-200 shadow-soft hover:border-cobalt-300 hover:bg-ink-50",
  // Sobre fondos oscuros
  outline:
    "bg-white/10 text-white border border-white/25 backdrop-blur hover:bg-white/20 hover:border-white/40",
  // Blanco sobre oscuro (CTA en secciones oscuras)
  dark: "bg-white text-cobalt-700 hover:bg-cobalt-50 active:scale-[0.98]",
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
  Omit<ButtonHTMLAttributes<HTMLButtonElement>, keyof CommonProps> & { href?: undefined };
type ButtonAsLink = CommonProps &
  Omit<AnchorHTMLAttributes<HTMLAnchorElement>, keyof CommonProps> & { href: string };
type ButtonProps = ButtonAsButton | ButtonAsLink;

export const Button = forwardRef<HTMLButtonElement | HTMLAnchorElement, ButtonProps>(
  function Button({ variant = "primary", size = "md", className, children, ...props }, ref) {
    const classes = cn(baseClasses, variants[variant], sizes[size], className);

    if ("href" in props && props.href) {
      const { href, ...rest } = props;
      const isExternal =
        /^https?:\/\//.test(href) || href.startsWith("tel:") || href.startsWith("mailto:");

      if (isExternal) {
        return (
          <a ref={ref as React.Ref<HTMLAnchorElement>} href={href} className={classes} {...(rest as AnchorHTMLAttributes<HTMLAnchorElement>)}>
            {children}
          </a>
        );
      }
      return (
        <Link ref={ref as React.Ref<HTMLAnchorElement>} href={href} className={classes} {...(rest as AnchorHTMLAttributes<HTMLAnchorElement>)}>
          {children}
        </Link>
      );
    }

    return (
      <button ref={ref as React.Ref<HTMLButtonElement>} className={classes} {...(props as ButtonHTMLAttributes<HTMLButtonElement>)}>
        {children}
      </button>
    );
  },
);
