import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section id="home" className="pt-20 pb-16 px-4">
      <div className="max-w-7xl mx-auto text-center">
        <div className="space-y-8">
          <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight">
            Hello Berlin 365
          </h1>
          <p className="text-2xl md:text-3xl text-[#9e0031] font-semibold">
            Ihre Marke. Unsere Mission. Jeden Tag.
          </p>
          <p className="text-lg md:text-xl text-white/80 max-w-3xl mx-auto">
            Wir sind Ihre Kreativagentur für moderne digitale Lösungen und
            professionelle Fotografie.
          </p>
          <Button
            size="lg"
            className="bg-[#9e0031] hover:bg-[#9e0031]/90 text-white text-lg px-8 py-4"
          >
            Projekt starten
          </Button>
        </div>
      </div>
    </section>
  );
}
