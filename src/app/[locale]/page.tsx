import { About } from "@/components/About";
import { Contact } from "@/components/Contact";
import { Customers } from "@/components/Customers";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { Navbar } from "@/components/Navbar";
import { Offerings } from "@/components/Offerings";
import { SEOSchema } from "@/components/SEOSchema";
import { Services } from "@/components/Services";
import { isLocale, type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/getDictionary";
import { notFound } from "next/navigation";

type LocalePageProps = {
  params: Promise<{ locale: string }>;
};

export default async function HomePage({ params }: LocalePageProps) {
  const { locale } = await params;

  if (!isLocale(locale)) {
    notFound();
  }

  const currentLocale = locale as Locale;
  const dictionary = getDictionary(currentLocale);

  return (
    <div className="min-h-screen">
      <Navbar locale={currentLocale} dictionary={dictionary} />
      <Hero locale={currentLocale} dictionary={dictionary} />
      <Services dictionary={dictionary} />
      <Customers dictionary={dictionary} />
      <Offerings dictionary={dictionary} />
      <About dictionary={dictionary} />
      <Contact locale={currentLocale} dictionary={dictionary} />
      <Footer locale={currentLocale} dictionary={dictionary} />
      <SEOSchema dictionary={dictionary} locale={currentLocale} />
    </div>
  );
}
