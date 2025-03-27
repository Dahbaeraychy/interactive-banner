import type { Metadata } from "next";
import "./globals.css";
import { DM_Sans } from "next/font/google";
import {
  COMPANY_BASE_URL,
  COMPANY_DESCRIPTION,
  COMPANY_NAME,
} from "@/constants/company";
import { metadataConfig } from "./metadata";
import AppProvider from "../providers/AppProvider/AppProvider";
// import Navbar from "@/components/shared/Navbar/Navbar";
// import Footer from "@/components/shared/Footer/Footer";

const DMSans = DM_Sans({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
});

export async function generateMetadata(): Promise<Metadata> {
  return metadataConfig;
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org/",
    "@type": "Website",
    name: COMPANY_NAME,
    url: COMPANY_BASE_URL,
    description: COMPANY_DESCRIPTION,
  };

  return (
    <html lang="en">
      <head>
        <link rel="apple-touch-icon" href="/logo.png" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="manifest" href="/manifest.webmanifest" />
        <meta name="theme-color" content="#000" />
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>

      <body
        className={`${DMSans.variable} antialiased w-full overflow-x-hidden bg-white dark:bg-black `}
      >
        <AppProvider>
          {/* <Navbar /> */}

          <div className="tracking-tight ">{children}</div>

          {/* <Footer /> */}
        </AppProvider>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
}