import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section id="home" className="pt-20 pb-16 px-4">
      <div className="max-w-7xl mx-auto text-center">
        <div className="space-y-8">
          <h1 className="text-5xl md:text-7xl font-bold text-text-primary leading-tight">
            Hello Berlin 365
          </h1>
          <p className="text-2xl md:text-3xl text-primary font-semibold">
            Your Brand. Our Mission. Every Day.
          </p>
          <p className="text-lg md:text-xl text-text-secondary max-w-3xl mx-auto">
            Wir sind Ihre Kreativagentur für moderne digitale Lösungen und
            professionelle Fotografie.
          </p>
          <Button size="lg" className="text-lg px-8 py-4">
            Projekt starten
          </Button>
        </div>
      </div>
    </section>
  );
}
