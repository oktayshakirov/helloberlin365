"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Send } from "lucide-react";
import { sendEmail } from "@/app/actions";
import { useActionState, useEffect, useState } from "react";

export function Contact() {
  const [state, formAction] = useActionState(sendEmail, { error: "" } as
    | { error: string }
    | { success: string });
  const [formStartedAt, setFormStartedAt] = useState("");

  useEffect(() => {
    setFormStartedAt(Date.now().toString());
  }, []);

  return (
    <section id="contact" className="py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-text-primary mb-4">Kontakt</h2>
          <p className="text-xl text-text-secondary">
            Wählen Sie passende Themen und nennen Sie Ihr ungefähres Budget –
            wir melden uns mit einem Vorschlag.
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
                <input
                  type="hidden"
                  name="formStartedAt"
                  value={formStartedAt}
                />
                <input
                  type="text"
                  name="website"
                  tabIndex={-1}
                  autoComplete="off"
                  className="hidden"
                  aria-hidden="true"
                />
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

                <fieldset className="rounded-lg border border-border-primary p-4">
                  <legend className="text-text-primary font-medium px-1">
                    Wofür interessieren Sie sich?{" "}
                    <span className="text-text-secondary font-normal text-sm">
                      (eine oder mehrere Optionen)
                    </span>
                  </legend>
                  <div className="mt-3 flex flex-row flex-wrap items-center gap-x-8 gap-y-3">
                    <label className="flex cursor-pointer items-center gap-2.5 text-text-secondary">
                      <input
                        type="checkbox"
                        name="interest"
                        value="Webentwicklung"
                        className="h-[1.125rem] w-[1.125rem] shrink-0 cursor-pointer rounded border border-border-primary bg-surface-primary accent-primary text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-surface-primary"
                      />
                      <span className="text-sm sm:text-base">
                        Webentwicklung
                      </span>
                    </label>
                    <label className="flex cursor-pointer items-center gap-2.5 text-text-secondary">
                      <input
                        type="checkbox"
                        name="interest"
                        value="Drohnenaufnahmen"
                        className="h-[1.125rem] w-[1.125rem] shrink-0 cursor-pointer rounded border border-border-primary bg-surface-primary accent-primary text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-surface-primary"
                      />
                      <span className="text-sm sm:text-base">
                        Drohnenaufnahmen
                      </span>
                    </label>
                    <label className="flex cursor-pointer items-center gap-2.5 text-text-secondary">
                      <input
                        type="checkbox"
                        name="interest"
                        value="Print"
                        className="h-[1.125rem] w-[1.125rem] shrink-0 cursor-pointer rounded border border-border-primary bg-surface-primary accent-primary text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-surface-primary"
                      />
                      <span className="text-sm sm:text-base">Printdesign</span>
                    </label>
                  </div>
                </fieldset>

                <div className="space-y-2">
                  <label htmlFor="budget" className="text-text-primary">
                    Ungefähres Budget
                  </label>
                  <input
                    id="budget"
                    type="text"
                    name="budget"
                    required
                    maxLength={500}
                    placeholder="z. B. ca. 3.000 €, flexibel, oder: erst Beratung"
                    className="w-full p-3 rounded-lg bg-surface-primary border border-border-primary text-text-primary placeholder-text-muted"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-text-primary">Nachricht</label>
                  <textarea
                    name="message"
                    rows={5}
                    placeholder="Was brauchen Sie genau? Ziel, Zeitrahmen, bestehende Website …"
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
