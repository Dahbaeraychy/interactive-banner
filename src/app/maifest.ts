import { MetadataRoute } from "next";
import { WEBSITE_NAME, WEBSITE_TAGLINE } from "@/constants/company";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: WEBSITE_NAME,
    short_name: WEBSITE_NAME,
    description: WEBSITE_TAGLINE,
    start_url: "/",
    display: "standalone",
    background_color: "#000000",
    theme_color: "#ffffff",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
      {
        src: "/icon.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/icons/android-chrome-192x192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/icons/android-chrome-512x512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}
