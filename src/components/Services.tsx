import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Code, Camera, Printer } from "lucide-react";

export function Services() {
  return (
    <section id="services" className="py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-text-primary mb-4">
            Unsere Dienstleistungen
          </h2>
          <p className="text-xl text-text-secondary">
            Professionelle Lösungen für Ihr Unternehmen
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="glass-card hover:scale-105 transition-all duration-300">
            <CardHeader className="text-center">
              <div className="mx-auto mb-4 p-3 bg-primary-light rounded-full w-fit">
                <Code className="h-8 w-8 text-primary" />
              </div>
              <CardTitle className="text-text-primary">Websites</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-text-secondary text-center">
                Design und Entwicklung moderner, responsiver Websites mit
                Next.js und TypeScript.
              </p>
            </CardContent>
          </Card>

          <Card className="glass-card hover:scale-105 transition-all duration-300">
            <CardHeader className="text-center">
              <div className="mx-auto mb-4 p-3 bg-primary-light rounded-full w-fit">
                <Camera className="h-8 w-8 text-primary" />
              </div>
              <CardTitle className="text-text-primary">Fotografie</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-text-secondary text-center">
                Produktfotografie, Unternehmensfotografie (Standorte, Teams,
                Events).
              </p>
            </CardContent>
          </Card>

          <Card className="glass-card hover:scale-105 transition-all duration-300">
            <CardHeader className="text-center">
              <div className="mx-auto mb-4 p-3 bg-primary-light rounded-full w-fit">
                <Printer className="h-8 w-8 text-primary" />
              </div>
              <CardTitle className="text-text-primary">Printmedien</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-text-secondary text-center">
                Visitenkarten, Speisekarten, Flyer, Merchandise.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
