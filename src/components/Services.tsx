import { FeatureSteps } from "@/components/ui/carousel";

export function Services() {
  const features = [
    {
      step: "Webdesign & Entwicklung",
      title: "Webdesign & Entwicklung",
      content:
        "Moderne, responsive Websites mit WordPress und individuellem Design. SEO-optimiert und mobilfreundlich für alle Unternehmen.",
      image: "/images/website.jpg",
    },
    {
      step: "Drohnenfoto & Drohnenvideo",
      title: "Drohnenfoto & Drohnenvideo",
      content:
        "Professionelle Luftaufnahmen und Drohnenvideos für Ihr Unternehmen. Ideal für Website, Social Media, Immobilien, Events und Printmedien.",
      image: "/images/drone.jpg",
    },
    {
      step: "Printdesign",
      title: "Printdesign",
      content:
        "Individuell gestaltete Visitenkarten, Flyer, Broschüren und Preislisten. Kreative Gestaltung für professionellen ersten Eindruck.",
      image: "/images/printmedia.jpg",
    },
  ];

  return (
    <section id="services" className="py-8 md:py-16 lg:py-20">
      <div className="max-w-7xl mx-auto">
        <FeatureSteps
          features={features}
          title="Unsere Services"
          description="Wir machen Ihr Unternehmen stark - online, offline und überall."
          className="bg-transparent"
        />
      </div>
    </section>
  );
}
