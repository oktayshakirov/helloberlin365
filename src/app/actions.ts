"use server";

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendEmail(
  prevState: { error: string } | { success: string },
  formData: FormData
): Promise<{ error: string } | { success: string }> {
  try {
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const message = formData.get("message") as string;

    if (!name || !email || !message) {
      return { error: "Alle Felder sind erforderlich" };
    }

    const { error } = await resend.emails.send({
      from: "Contact Form <noreply@helloberlin365.com>",
      to: ["helloberlin365@gmail.com"],
      replyTo: email,
      subject: `New Email from ${name}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, "<br>")}</p>
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
