import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site-config";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteConfig.url;
  const now = new Date();

  const main = ["", "/electricidad", "/climatizacion", "/reparaciones-manitas", "/madrid", "/barcelona"];
  const legal = ["/aviso-legal", "/privacidad", "/cookies"];

  const entries: MetadataRoute.Sitemap = [
    ...main.map((path) => ({
      url: `${base}${path}`,
      lastModified: now,
      changeFrequency: (path === "" ? "weekly" : "monthly") as "weekly" | "monthly",
      priority: path === "" ? 1 : 0.8,
    })),
    {
      url: `${base}/contacto`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.9,
    },
    ...legal.map((path) => ({
      url: `${base}${path}`,
      lastModified: now,
      changeFrequency: "yearly" as const,
      priority: 0.3,
    })),
  ];

  return entries;
}
