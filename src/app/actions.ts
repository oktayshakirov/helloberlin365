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
      return { error: "All fields are required" };
    }

    const { error } = await resend.emails.send({
      from: "Contact Form <noreply@helloberlin365.com>",
      to: ["contact@helloberlin365.com"],
      replyTo: email,
      subject: `New Contact Form Submission from ${name}`,
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
      return { error: "Failed to send email. Please try again." };
    }

    return { success: "Message sent successfully!" };
  } catch (error) {
    console.error("Server error:", error);
    return { error: "Something went wrong. Please try again." };
  }
}
