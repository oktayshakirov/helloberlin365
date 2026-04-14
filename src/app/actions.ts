"use server";

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

function escapeHtml(text: string): string {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

export async function sendEmail(
  prevState: { error: string } | { success: string },
  formData: FormData
): Promise<{ error: string } | { success: string }> {
  try {
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const message = formData.get("message") as string;
    const budget = ((formData.get("budget") as string) ?? "").trim();
    const interests = formData.getAll("interest").filter(Boolean) as string[];
    const website = (formData.get("website") as string) ?? "";
    const formStartedAtRaw = formData.get("formStartedAt") as string;

    if (!name || !email || !message || !budget) {
      return { error: "Bitte füllen Sie alle Pflichtfelder aus." };
    }

    if (budget.length > 500) {
      return { error: "Das Budgetfeld ist zu lang." };
    }

    if (interests.length === 0) {
      return {
        error:
          "Bitte wählen Sie mindestens ein Thema (Webentwicklung, Drohnenaufnahmen oder Print).",
      };
    }

    // Lightweight bot protection:
    // 1) Honeypot field should stay empty for humans.
    // 2) Submissions faster than 3 seconds are likely automated.
    if (website.trim().length > 0) {
      return { error: "Anfrage konnte nicht verarbeitet werden." };
    }

    const formStartedAt = Number(formStartedAtRaw);
    const elapsedMs = Date.now() - formStartedAt;
    if (!Number.isFinite(formStartedAt) || elapsedMs < 3000) {
      return { error: "Bitte senden Sie das Formular erneut ab." };
    }

    const interestsHtml = escapeHtml(interests.join(", "));

    const { error } = await resend.emails.send({
      from: "Contact Form <noreply@helloberlin365.com>",
      to: ["helloberlin365@gmail.com"],
      replyTo: email,
      subject: `Kontakt: ${name} – ${interests.join(", ")}`,
      html: `
        <h2>Kontaktanfrage (Website)</h2>
        <p><strong>Name:</strong> ${escapeHtml(name)}</p>
        <p><strong>E-Mail:</strong> ${escapeHtml(email)}</p>
        <p><strong>Themen:</strong> ${interestsHtml}</p>
        <p><strong>Budget:</strong> ${escapeHtml(budget)}</p>
        <p><strong>Nachricht:</strong></p>
        <p>${escapeHtml(message).replace(/\n/g, "<br>")}</p>
      `,
    });

    if (error) {
      console.error("Resend error:", error);
      return {
        error:
          "E-Mail konnte nicht gesendet werden. Bitte versuchen Sie es erneut.",
      };
    }

    return { success: "Nachricht erfolgreich gesendet!" };
  } catch (error) {
    console.error("Server error:", error);
    return {
      error: "Etwas ist schiefgelaufen. Bitte versuchen Sie es erneut.",
    };
  }
}
