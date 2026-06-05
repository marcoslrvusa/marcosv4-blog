import { NextResponse } from "next/server";

const GOOGLE_SHEETS_WEBHOOK = process.env.GOOGLE_SHEETS_WEBHOOK_URL;

export async function POST(req: Request) {
  try {
    const { email, name } = await req.json();

    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json(
        { error: "Email inválido." },
        { status: 400 }
      );
    }

    const lead = {
      email,
      name: name || "",
      source: "marcosv4.cloud",
      subscribedAt: new Date().toISOString(),
    };

    if (GOOGLE_SHEETS_WEBHOOK) {
      const response = await fetch(GOOGLE_SHEETS_WEBHOOK, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(lead),
      });

      if (!response.ok) {
        console.error("Newsletter webhook error:", await response.text());
      }
    }

    console.log("Newsletter lead captured:", lead);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Newsletter API error:", error);
    return NextResponse.json(
      { error: "Erro interno do servidor." },
      { status: 500 }
    );
  }
}
