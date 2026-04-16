import type { MetadataRoute } from "next";
import { locales } from "@/i18n/config";

const baseUrl = "https://helloberlin365.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  return locales.map((locale) => ({
    url: `${baseUrl}/${locale}`,
    lastModified: now,
    changeFrequency: "weekly",
    priority: locale === "de" ? 1 : 0.9,
  }));
}
