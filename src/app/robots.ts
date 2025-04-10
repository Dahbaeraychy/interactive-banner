import type { MetadataRoute } from "next";
import { WEBSITE_BASE_URL } from "@/constants/company";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: ["/"],
      disallow: ["/search?q="],
    },
    sitemap: `${WEBSITE_BASE_URL}/sitemap.xml`,
    host: WEBSITE_BASE_URL,
  };
}
