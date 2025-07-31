import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Code, Camera, Printer } from "lucide-react";

export function Services() {
  return (
    <section id="services" className="py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-text-primary mb-4">
            Unsere Services
          </h2>
          <p className="text-xl text-text-secondary">
            Wir machen Ihr Unternehmen stark – online, offline und überall.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="glass-card hover:scale-105 transition-all duration-300">
            <CardHeader className="text-center">
              <div className="mx-auto mb-4 p-3  rounded-full w-fit">
                <Code className="h-8 w-8 text-primary" />
              </div>
              <CardTitle className="text-text-primary">
                Webdesign & Entwicklung
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-text-secondary text-center">
                Wir erstellen moderne, responsive Websites, die Ihr Unternehmen
                optimal präsentieren und online sichtbar machen.
              </p>
            </CardContent>
          </Card>

          <Card className="glass-card hover:scale-105 transition-all duration-300">
            <CardHeader className="text-center">
              <div className="mx-auto mb-4 p-3  rounded-full w-fit">
                <Camera className="h-8 w-8 text-primary" />
              </div>
              <CardTitle className="text-text-primary">
                Business-Fotografie
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-text-secondary text-center">
                Hochwertige Produkt-, Team- und Locationfotos sowie
                Eventaufnahmen, die Ihre Marke authentisch zeigen.
              </p>
            </CardContent>
          </Card>

          <Card className="glass-card hover:scale-105 transition-all duration-300">
            <CardHeader className="text-center">
              <div className="mx-auto mb-4 p-3  rounded-full w-fit">
                <Printer className="h-8 w-8 text-primary" />
              </div>
              <CardTitle className="text-text-primary">Printmedien</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-text-secondary text-center">
                Individuell gestaltete Visitenkarten, Flyer, Broschüren und
                Preislisten, die Kunden überzeugen und Vertrauen schaffen.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
