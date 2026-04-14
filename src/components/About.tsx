import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Heart, Users } from "lucide-react";

export function About() {
  return (
    <section id="about" className="py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-text-primary mb-4">
            Über Hello Berlin 365
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <Card className="glass-card">
            <CardHeader className="text-center">
              <CardTitle className="text-text-primary flex items-center justify-center gap-2">
                <Heart className="h-6 w-6 text-primary" />
                Unsere Philosophie
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-text-secondary leading-relaxed text-lg">
                Wir glauben, dass eine Webseite mehr ist als nur ein Werkzeug –
                sie ist das digitale Zuhause Ihrer Marke. Ein solches Zuhause
                braucht beides: ein starkes Fundament, das Stabilität gibt, und
                eine Seele, die es mit Leben füllt.
              </p>
              <p className="text-text-secondary leading-relaxed text-lg mt-4">
                Unsere Philosophie vereint genau das. Durch die Verbindung von
                präziser Programmierung, starken Drohnenaufnahmen und kreativem
                Design schaffen wir digitale Erlebnisse, die technisch
                überzeugen und sich echt anfühlen – für einen Markenauftritt mit
                Charakter.
              </p>
            </CardContent>
          </Card>

          <Card className="glass-card">
            <CardHeader className="text-center">
              <CardTitle className="text-text-primary flex items-center justify-center gap-2">
                <Users className="h-6 w-6 text-primary" />
                Unsere Arbeitsweise
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3 text-text-secondary text-lg leading-relaxed">
                <li>• Klare Prozesse von Strategie bis Umsetzung</li>
                <li>• Transparente Kommunikation und verlässliche Termine</li>
                <li>• Technisch saubere Entwicklung mit Fokus auf Performance</li>
                <li>• Flexible Pakete für Web, Mobile, Drone und Print</li>
                <li>• Fokus auf messbare Ergebnisse und nachhaltiges Wachstum</li>
                <li>• Laufende Optimierung nach Livegang statt Stillstand</li>
                <li>• Skalierbare Lösungen, die mit Ihrem Unternehmen mitwachsen</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
