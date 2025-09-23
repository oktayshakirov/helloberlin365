"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Send } from "lucide-react";
import { sendEmail } from "@/app/actions";
import { useActionState } from "react";

export function Contact() {
  const [state, formAction] = useActionState(sendEmail, { error: "" } as
    | { error: string }
    | { success: string });

  return (
    <section id="contact" className="py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-text-primary mb-4">Kontakt</h2>
          <p className="text-xl text-text-secondary">
            Lassen Sie uns über Ihr Webentwicklung, Fotografie oder Printdesign
            Projekt sprechen
          </p>
        </div>

        <div className="w-full">
          <Card className="glass-card">
            <CardHeader>
              <CardTitle className="text-text-primary flex items-center gap-2">
                <Send className="h-5 w-5" />
                Nachricht senden
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form action={formAction} className="space-y-6">
                {"error" in state && state.error && (
                  <div className="p-3 bg-red-100 border border-red-300 text-red-700 rounded-lg">
                    {state.error}
                  </div>
                )}
                {"success" in state && state.success && (
                  <div className="p-3 bg-green-100 border border-green-300 text-green-700 rounded-lg">
                    {state.success}
                  </div>
                )}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-text-primary">Name</label>
                    <input
                      type="text"
                      name="name"
                      placeholder="Ihr Name"
                      required
                      className="w-full p-3 rounded-lg bg-surface-primary border border-border-primary text-text-primary placeholder-text-muted"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-text-primary">E-Mail</label>
                    <input
                      type="email"
                      name="email"
                      placeholder="ihre.email@beispiel.com"
                      required
                      className="w-full p-3 rounded-lg bg-surface-primary border border-border-primary text-text-primary placeholder-text-muted"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-text-primary">Nachricht</label>
                  <textarea
                    name="message"
                    rows={5}
                    placeholder="Erzählen Sie uns von Ihrem Projekt..."
                    required
                    className="w-full p-3 rounded-lg bg-surface-primary border border-border-primary text-text-primary placeholder-text-muted"
                  />
                </div>
                <Button type="submit" className="w-full">
                  Nachricht senden
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
