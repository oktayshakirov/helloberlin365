import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import GoogleAnalytics from "@/utils/GoogleAnalytics";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Hello Berlin 365 - Ihre Kreativagentur",
  description:
    "Professionelle Webentwicklung, Fotografie und Printmedien in Berlin. Ihre Marke. Unsere Mission. Jeden Tag.",
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
        {children}
      </body>
    </html>
  );
}
