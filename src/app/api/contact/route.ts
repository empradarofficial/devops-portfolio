import { NextResponse } from "next/server";
import { createContact } from "@/lib/data/contacts";
import { contactFormSchema } from "@/lib/validations/contact";

export const runtime = "nodejs";

export async function POST(request: Request) {
  try {
    const contentType = request.headers.get("content-type") ?? "";
    if (!contentType.includes("application/json")) {
      return NextResponse.json(
        { success: false, message: "Expected application/json" },
        { status: 415 },
      );
    }

    const body: unknown = await request.json();
    const parsed = contactFormSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        {
          success: false,
          message: "Validation failed",
          errors: parsed.error.flatten().fieldErrors,
        },
        { status: 400 },
      );
    }

    const result = await createContact(parsed.data);

    if (!result.ok) {
      return NextResponse.json(
        { success: false, message: result.message },
        { status: 502 },
      );
    }

    return NextResponse.json({
      success: true,
      message: "Message received. I will respond within 1–2 business days.",
      id: result.id,
    });
  } catch (error) {
    console.error("[contact] unexpected error:", error);
    return NextResponse.json(
      {
        success: false,
        message: "Unable to process your message. Please try again.",
      },
      { status: 500 },
    );
  }
}
