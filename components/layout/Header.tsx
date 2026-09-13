"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, Phone, X } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/cn";
import { siteConfig } from "@/lib/site-config";

const navItems = [
  { href: "/", label: "Inicio" },
  { href: "/electricidad", label: "Electricidad" },
  { href: "/climatizacion", label: "Climatización" },
  { href: "/reparaciones-manitas", label: "Manitas" },
  { href: "/reformas", label: "Reformas" },
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

  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
      const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
      window.addEventListener("keydown", onKey);
      return () => {
        document.body.style.overflow = "";
        window.removeEventListener("keydown", onKey);
      };
    }
    document.body.style.overflow = "";
  }, [open]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname?.startsWith(href);

  return (
    <>
      {/* Topbar */}
      <div className="hidden bg-ink-950 text-white/70 md:block">
        <div className="container-wide flex h-9 items-center justify-between text-xs">
          <span className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" />
            {siteConfig.hours.weekdays}
          </span>
          <div className="flex items-center gap-4">
            <a href={siteConfig.contact.phoneTel} className="flex items-center gap-1.5 transition hover:text-white">
              <Phone className="h-3.5 w-3.5" />
              {siteConfig.contact.phone}
            </a>
            <span className="text-white/25">·</span>
            <span className="tracking-wide text-cyan-400">Madrid · Barcelona</span>
          </div>
        </div>
      </div>

      <header
        className={cn(
          "sticky top-0 z-40 w-full border-b transition-all duration-300",
          scrolled
            ? "border-ink-200 bg-white/90 shadow-soft backdrop-blur-md"
            : "border-transparent bg-white/70 backdrop-blur-sm",
        )}
      >
        <div className="container-wide flex h-16 items-center justify-between gap-4 sm:h-[72px]">
          <Link href="/" className="inline-flex shrink-0 items-center gap-2.5" aria-label="ServiPlusUltra Solutions S.L. — Inicio">
            <Image
              src="/logo-icon.png"
              alt=""
              width={192}
              height={192}
              priority
              className="h-10 w-10 rounded-xl sm:h-11 sm:w-11"
            />
            <span className="flex flex-col leading-none">
              <span className="font-display text-lg font-bold tracking-tight text-ink-900 sm:text-xl">
                ServiPlus<span className="text-cobalt-500">Ultra</span>
              </span>
              <span className="mt-0.5 text-[10px] font-semibold uppercase tracking-[0.16em] text-ink-400">
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
                      "rounded-full px-3.5 py-2 text-sm font-medium transition",
                      isActive(item.href)
                        ? "bg-cobalt-50 text-cobalt-700"
                        : "text-ink-600 hover:bg-ink-50 hover:text-ink-900",
                    )}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex items-center gap-2">
            <Button href={siteConfig.contact.phoneTel} variant="primary" size="sm" className="hidden sm:inline-flex" aria-label={`Llamar al ${siteConfig.contact.phone}`}>
              <Phone className="h-4 w-4" />
              <span className="hidden md:inline">Llamar ahora</span>
              <span className="md:hidden">Llamar</span>
            </Button>

            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-ink-200 bg-white text-ink-700 transition hover:border-cobalt-300 hover:text-cobalt-600 lg:hidden"
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
            open ? "pointer-events-auto translate-y-0 opacity-100" : "pointer-events-none -translate-y-2 opacity-0",
          )}
        >
          <div className="mx-3 mt-2 overflow-hidden rounded-2xl border border-ink-200 bg-white shadow-elevate">
            <nav aria-label="Navegación móvil" className="p-2">
              <ul className="space-y-1">
                {navItems.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className={cn(
                        "flex items-center justify-between rounded-xl px-4 py-3 text-base font-medium transition",
                        isActive(item.href) ? "bg-cobalt-50 text-cobalt-700" : "text-ink-700 hover:bg-ink-50",
                      )}
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
              <div className="mt-3 grid grid-cols-2 gap-2 p-2">
                <Button href={siteConfig.contact.phoneTel} variant="primary" size="md">
                  <Phone className="h-4 w-4" /> Llamar
                </Button>
                <Button href={siteConfig.contact.whatsapp} variant="ghost" size="md">
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
