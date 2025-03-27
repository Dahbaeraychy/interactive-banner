import {
  COMPANY_BASE_URL,
  COMPANY_DESCRIPTION,
  COMPANY_NAME,
} from "@/constants/company";

export const metadataConfig = {
  metadataBase: new URL(COMPANY_BASE_URL),
  title: {
    default: COMPANY_NAME,
    template: `%s | ${COMPANY_NAME}`,
  },
  description: COMPANY_DESCRIPTION,
  keywords: [COMPANY_NAME],
  assets: [`${COMPANY_BASE_URL}/assets`],
  manifest: `${COMPANY_BASE_URL}/manifest.webmanifest`,
  category: "technology",
  generator: "Next.js",
  applicationName: COMPANY_NAME,
  authors: [{ name: "Toluwalope Akinkunmi", url: COMPANY_BASE_URL }],
  creator: "Toluwalope Akinkunmi",
  publisher: "Toluwalope Akinkunmi",
  formatDetection: {
    email: true,
    address: false,
    telephone: true,
  },
  alternates: {
    canonical: "/",
    languages: {
      "en-US": "/en-US",
    },
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/icon.png",
    shortcut: "/shortcut-icon.png",
    apple: "/apple-icon.png",
  },
  openGraph: {
    title: COMPANY_NAME,
    description: COMPANY_DESCRIPTION,
    type: "website",
    url: COMPANY_BASE_URL,
    images: [
      {
        url: `${COMPANY_BASE_URL}/logo.png`,
        width: 1200,
        height: 630,
        alt: COMPANY_NAME,
      },
    ],
  },
  twitter: {
    handle: "@gemspaysolution",
    site: "@gemspaysolution",
    card: "summary_large_image",
  },
  verification: {
    google: "google",
  },
};
