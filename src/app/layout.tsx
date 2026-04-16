import { Inter } from "next/font/google";
import "./globals.css";
import GoogleAnalytics from "@/utils/GoogleAnalytics";
import { headers } from "next/headers";
import { cookies } from "next/headers";
import {
  defaultLocale,
  isLocale,
  localeCookieName,
  type Locale,
} from "@/i18n/config";

const inter = Inter({ subsets: ["latin"] });

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const headerStore = await headers();

  const cookieStore = await cookies();
  const localeCookie = cookieStore.get(localeCookieName)?.value;

  const headerLocale = headerStore.get("x-locale");
  const geoCountry = headerStore.get("x-vercel-ip-country")?.toUpperCase();
  const geoLocale: Locale = geoCountry === "DE" ? "de" : defaultLocale;

  const headerLocaleValue: Locale | null = isLocale(headerLocale ?? "")
    ? (headerLocale as Locale)
    : null;

  const cookieLocaleValue: Locale | null = isLocale(localeCookie ?? "")
    ? (localeCookie as Locale)
    : null;

  const htmlLang: Locale =
    headerLocaleValue ?? cookieLocaleValue ?? geoLocale ?? defaultLocale;

  return (
    <html
      lang={htmlLang}
      suppressHydrationWarning
    >
      <body
        suppressHydrationWarning
        className={`${inter.className} bg-gradient-custom min-h-screen`}
      >
        <GoogleAnalytics />
        {children}
      </body>
    </html>
  );
}
