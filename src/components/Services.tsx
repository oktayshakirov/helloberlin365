import { FeatureSteps } from "@/components/ui/carousel";

export function Services() {
  const features = [
    {
      step: "Webdesign & Entwicklung",
      title: "Webdesign & Entwicklung",
      content:
        "Wir erstellen moderne, responsive Websites, die Ihr Unternehmen optimal präsentieren und online sichtbar machen.",
      image: "/images/website.jpg",
    },
    {
      step: "Business-Fotografie",
      title: "Business-Fotografie",
      content:
        "Hochwertige Produkt-, Team- und Locationfotos sowie Eventaufnahmen, die Ihre Marke authentisch zeigen.",
      image: "/images/photography.jpg",
    },
    {
      step: "Printmedien",
      title: "Printmedien",
      content:
        "Individuell gestaltete Visitenkarten, Flyer, Broschüren und Preislisten, die Kunden überzeugen und Vertrauen schaffen.",
      image: "/images/printmedia.jpg",
    },
  ];

  return (
    <section id="services" className=" px-4">
      <div className="max-w-7xl mx-auto">
        <FeatureSteps
          features={features}
          title="Unsere Services"
          description="Wir machen Ihr Unternehmen stark – online, offline und überall."
          className="bg-transparent"
        />
      </div>
    </section>
  );
}
