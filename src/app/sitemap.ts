import { WEBSITE_BASE_URL } from "@/constants/company";
import type { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const defaultPages = [
    {
      url: `${WEBSITE_BASE_URL}/`,
      lastModified: new Date(),
      changeFrequency: "daily" as const,
      priority: 1,
    },
  ];

  const sitemap = [...defaultPages];

  return sitemap;
}
