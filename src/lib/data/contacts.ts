import { prisma } from "@/lib/prisma";
import type { ContactFormValues } from "@/lib/validations/contact";

export type CreateContactResult =
  | { ok: true; id: string }
  | { ok: false; message: string };

/**
 * Persist a validated contact form submission to the `contact` table.
 * Returns only the new row id to minimize payload size.
 */
export async function createContact(
  data: ContactFormValues,
): Promise<CreateContactResult> {
  try {
    const row = await prisma.contact.create({
      data: {
        name: data.name.trim(),
        email: data.email.trim().toLowerCase(),
        company: data.company?.trim() || null,
        subject: data.subject.trim(),
        message: data.message.trim(),
      },
      select: { id: true },
    });

    return { ok: true, id: row.id };
  } catch (error) {
    console.error("[contact] prisma insert failed:", error);
    return {
      ok: false,
      message: "Unable to save your message. Please try again.",
    };
  }
}
