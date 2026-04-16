"use server";

import { Resend } from "resend";
import { getDictionary } from "@/i18n/getDictionary";
import { isLocale, type Locale } from "@/i18n/config";

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
    const localeValue = (formData.get("locale") as string) ?? "en";
    const locale: Locale = isLocale(localeValue) ? localeValue : "en";
    const dictionary = getDictionary(locale);
    const messages = dictionary.serverAction;

    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const message = formData.get("message") as string;
    const budget = ((formData.get("budget") as string) ?? "").trim();
    const interests = formData.getAll("interest").filter(Boolean) as Array<
      "webdevelopment" | "drone" | "print"
    >;
    const website = (formData.get("website") as string) ?? "";
    const formStartedAtRaw = formData.get("formStartedAt") as string;

    if (!name || !email || !message || !budget) {
      return { error: messages.requiredFields };
    }

    if (budget.length > 500) {
      return { error: messages.budgetTooLong };
    }

    if (interests.length === 0) {
      return {
        error: messages.noInterests,
      };
    }

    // Lightweight bot protection:
    // 1) Honeypot field should stay empty for humans.
    // 2) Submissions faster than 3 seconds are likely automated.
    if (website.trim().length > 0) {
      return { error: messages.honeypotRejected };
    }

    const formStartedAt = Number(formStartedAtRaw);
    const elapsedMs = Date.now() - formStartedAt;
    if (!Number.isFinite(formStartedAt) || elapsedMs < 3000) {
      return { error: messages.resubmit };
    }

    const localizedInterests = interests.map(
      (interest) => messages.interestLabels[interest]
    );
    const interestsText = localizedInterests.join(", ");
    const interestsHtml = escapeHtml(interestsText);

    const { error } = await resend.emails.send({
      from: "Contact Form <noreply@helloberlin365.com>",
      to: ["helloberlin365@gmail.com"],
      replyTo: email,
      subject: `${messages.subjectPrefix}: ${name} - ${interestsText}`,
      html: `
        <h2>${messages.emailHeading}</h2>
        <p><strong>${messages.emailLabels.name}:</strong> ${escapeHtml(name)}</p>
        <p><strong>${messages.emailLabels.email}:</strong> ${escapeHtml(email)}</p>
        <p><strong>${messages.emailLabels.topics}:</strong> ${interestsHtml}</p>
        <p><strong>${messages.emailLabels.budget}:</strong> ${escapeHtml(budget)}</p>
        <p><strong>${messages.emailLabels.message}:</strong></p>
        <p>${escapeHtml(message).replace(/\n/g, "<br>")}</p>
      `,
    });

    if (error) {
      console.error("Resend error:", error);
      return {
        error: messages.sendFailed,
      };
    }

    return { success: messages.sendSuccess };
  } catch (error) {
    console.error("Server error:", error);
    return {
      error: getDictionary("en").serverAction.genericError,
    };
  }
}
