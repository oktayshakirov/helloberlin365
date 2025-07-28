import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Send, Mail, Phone } from "lucide-react";

export function Contact() {
  return (
    <section id="contact" className="py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">Kontakt</h2>
          <p className="text-xl text-white/80">
            Lassen Sie uns über Ihr Projekt sprechen
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <Card className="glass-card">
            <CardHeader>
              <CardTitle className="text-white flex items-center gap-2">
                <Send className="h-5 w-5" />
                Nachricht senden
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form className="space-y-6">
                <div className="space-y-2">
                  <label className="text-white">Name</label>
                  <input
                    type="text"
                    placeholder="Ihr Name"
                    className="w-full p-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/50"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-white">E-Mail</label>
                  <input
                    type="email"
                    placeholder="ihre.email@beispiel.com"
                    className="w-full p-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/50"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-white">Nachricht</label>
                  <textarea
                    rows={5}
                    placeholder="Erzählen Sie uns von Ihrem Projekt..."
                    className="w-full p-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/50"
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full bg-[#9e0031] hover:bg-[#9e0031]/90 text-white"
                >
                  Nachricht senden
                </Button>
              </form>
            </CardContent>
          </Card>

          <div className="space-y-6">
            <div className="glass-card p-6">
              <h3 className="text-xl font-semibold text-white mb-4">
                Kontakt aufnehmen
              </h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Mail className="h-5 w-5 text-[#9e0031]" />
                  <div>
                    <p className="text-white font-medium">E-Mail</p>
                    <p className="text-white/80">info@helloberlin365.com</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="h-5 w-5 text-[#9e0031]" />
                  <div>
                    <p className="text-white font-medium">Telefon</p>
                    <p className="text-white/80">+49 30 12345678</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
