import { NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, company, pain } = body

    if (!name || !email) {
      return NextResponse.json({ error: "Nome e email são obrigatórios." }, { status: 400 })
    }

    // Log the lead
    console.log("[Consulting Lead]", { name, email, company, pain, timestamp: new Date().toISOString() })

    // Here you would integrate with your CRM (HubSpot, RD Station, etc.)
    // For now, we store in a simple log and return success
    // TODO: Integrate with CRM webhook

    return NextResponse.json({ success: true })
  } catch {
    return NextResponse.json({ error: "Erro interno do servidor." }, { status: 500 })
  }
}
