"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { Menu, Phone, X } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/cn";
import { siteConfig } from "@/lib/site-config";

const navItems = [
  { href: "/", label: "Inicio" },
  { href: "/electricidad", label: "Electricidad" },
  { href: "/climatizacion", label: "Climatización" },
  { href: "/reparaciones-manitas", label: "Manitas" },
  { href: "/madrid", label: "Madrid" },
  { href: "/barcelona", label: "Barcelona" },
  { href: "/contacto", label: "Contacto" },
] as const;

export function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
      const onKey = (e: KeyboardEvent) => {
        if (e.key === "Escape") setOpen(false);
      };
      window.addEventListener("keydown", onKey);
      return () => {
        document.body.style.overflow = "";
        window.removeEventListener("keydown", onKey);
      };
    }
    document.body.style.overflow = "";
  }, [open]);

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname?.startsWith(href);
  };

  return (
    <>
      {/* Topbar superior — estilo sticker, solo desktop */}
      <div className="hidden border-b-2 border-ink-900 bg-ink-900 text-cream-50 md:block">
        <div className="container-wide flex h-9 items-center justify-between text-xs font-semibold">
          <span className="flex items-center gap-2">
            <span className="inline-block h-2 w-2 animate-pulse rounded-full bg-mint-300" />
            <span className="uppercase tracking-wider">{siteConfig.hours.weekdays}</span>
          </span>
          <div className="flex items-center gap-4">
            <a
              href={siteConfig.contact.phoneTel}
              className="flex items-center gap-1.5 transition hover:text-sun-400"
            >
              <Phone className="h-3.5 w-3.5" />
              {siteConfig.contact.phone}
            </a>
            <span className="text-cream-50/40">·</span>
            <span className="uppercase tracking-wider text-sun-400">★ Madrid + Barcelona</span>
          </div>
        </div>
      </div>

      <header
        className={cn(
          "sticky top-0 z-40 w-full border-b-2 transition-all duration-300",
          scrolled
            ? "border-ink-900 bg-cream-50 shadow-sticker"
            : "border-ink-900/0 bg-cream-100/95 backdrop-blur-sm",
        )}
      >
        <div className="container-wide flex h-16 items-center justify-between gap-4 sm:h-[72px]">
          <Link
            href="/"
            className="inline-flex shrink-0 items-center gap-2.5"
            aria-label="ServiPlusUltra Solutions S.L. — Inicio"
          >
            <Image
              src="/logo-icon.png"
              alt=""
              width={192}
              height={192}
              priority
              className="h-10 w-10 rounded-xl border-2 border-ink-900 sm:h-11 sm:w-11"
            />
            <span className="flex flex-col leading-none">
              <span className="font-display text-lg font-bold tracking-tight text-ink-900 sm:text-xl">
                ServiPlus<span className="text-coral-500">Ultra</span>
              </span>
              <span className="mt-0.5 text-[10px] font-bold uppercase tracking-[0.16em] text-ink-500">
                Solutions S.L.
              </span>
            </span>
          </Link>

          <nav className="hidden lg:flex" aria-label="Navegación principal">
            <ul className="flex items-center gap-1">
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={cn(
                      "rounded-full border-2 px-3.5 py-1.5 text-sm font-bold transition",
                      isActive(item.href)
                        ? "border-ink-900 bg-ink-900 text-sun-400 shadow-sticker"
                        : "border-transparent text-ink-700 hover:border-ink-900 hover:bg-sun-400 hover:text-ink-900",
                    )}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex items-center gap-2">
            <Button
              href={siteConfig.contact.phoneTel}
              variant="primary"
              size="sm"
              className="hidden sm:inline-flex"
              aria-label={`Llamar al ${siteConfig.contact.phone}`}
            >
              <Phone className="h-4 w-4" />
              <span className="hidden md:inline">Llamar ahora</span>
              <span className="md:hidden">Llamar</span>
            </Button>

            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              className={cn(
                "inline-flex h-10 w-10 items-center justify-center rounded-full border-2 border-ink-900 bg-cream-50 text-ink-900 shadow-sticker transition hover:bg-sun-400 lg:hidden",
              )}
              aria-label={open ? "Cerrar menú" : "Abrir menú"}
              aria-expanded={open}
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {/* Drawer móvil */}
        <div
          className={cn(
            "fixed inset-x-0 top-16 z-30 origin-top transition-all duration-300 lg:hidden",
            open
              ? "pointer-events-auto translate-y-0 opacity-100"
              : "pointer-events-none -translate-y-2 opacity-0",
          )}
        >
          <div className="mx-3 mt-2 overflow-hidden rounded-3xl border-2 border-ink-900 bg-cream-50 shadow-sticker">
            <nav aria-label="Navegación móvil" className="p-3">
              <ul className="space-y-2">
                {navItems.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className={cn(
                        "flex items-center justify-between rounded-2xl border-2 px-4 py-3 text-base font-bold transition",
                        isActive(item.href)
                          ? "border-ink-900 bg-ink-900 text-sun-400"
                          : "border-ink-900/15 text-ink-800 hover:border-ink-900 hover:bg-sun-400",
                      )}
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
              <div className="mt-3 grid grid-cols-2 gap-2 p-1">
                <Button href={siteConfig.contact.phoneTel} variant="primary" size="md">
                  <Phone className="h-4 w-4" />
                  Llamar
                </Button>
                <Button href={siteConfig.contact.whatsapp} variant="secondary" size="md">
                  WhatsApp
                </Button>
              </div>
            </nav>
          </div>
        </div>
      </header>
    </>
  );
}
