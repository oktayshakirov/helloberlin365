import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import GoogleAnalytics from "@/utils/GoogleAnalytics";
import { SEOSchema } from "@/components/SEOSchema";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Hello Berlin 365 | Webentwicklung, Fotografie & Print in Berlin",
  description:
    "Professionelle Webseiten, Business-Fotografie und Printdesign in Berlin. 365 Tage Service für Startups, Friseure, Gastronomie & mehr. Jetzt anfragen!",
  keywords:
    "Webentwicklung berlin, business fotografie berlin, printdesign berlin, digitalagentur berlin, webentwicklung berlin, werbeagentur berlin",
  authors: [{ name: "Hello Berlin 365" }],
  creator: "Hello Berlin 365",
  publisher: "Hello Berlin 365",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://helloberlin365.de"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Hello Berlin 365 | Webentwicklung, Fotografie & Print in Berlin",
    description:
      "Professionelle Webseiten, Business-Fotografie und Printdesign in Berlin. 365 Tage Service für Startups, Friseure, Gastronomie & mehr.",
    url: "https://helloberlin365.de",
    siteName: "Hello Berlin 365",
    locale: "de_DE",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Hello Berlin 365 | Webentwicklung, Fotografie & Print in Berlin",
    description:
      "Professionelle Webseiten, Business-Fotografie und Printdesign in Berlin. 365 Tage Service für lokale Unternehmen.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon/favicon.ico", sizes: "any" },
    ],
    apple: [
      {
        url: "/favicon/apple-touch-icon.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],
    other: [
      {
        rel: "icon",
        url: "/favicon/android-chrome-192x192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        rel: "icon",
        url: "/favicon/android-chrome-512x512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  },
  manifest: "/favicon/site.webmanifest",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="de" suppressHydrationWarning>
      <body className={`${inter.className} bg-gradient-custom min-h-screen`}>
        <GoogleAnalytics />
        <SEOSchema />
        {children}
      </body>
    </html>
  );
}
