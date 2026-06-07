import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

// NOTE: MVP rápido com SQLite local. Em produção, troque por um banco externo (Postgres, Airtable, etc.).
// Se quiser usar agora, instale o pacote:
//
//   npm install better-sqlite3 && npm install -D @types/better-sqlite3
//
// E descomente as linhas abaixo:

// import Database from "better-sqlite3";
// const db = new Database("leads.sqlite");
// db.exec(`
//   CREATE TABLE IF NOT EXISTS leads (
//     id INTEGER PRIMARY KEY,
//     name TEXT NOT NULL,
//     email TEXT NOT NULL,
//     slug TEXT NOT NULL,
//     created_at TEXT DEFAULT (datetime('now'))
//   )
// `);

const schema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  slug: z.string(),
});

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, slug } = schema.parse(body);

    // eslint-disable-next-line no-console
    console.info("[LEAD] New registration:", { name, email, slug });

    // Se quiser usar o banco real, descomente:
    // const stmt = db.prepare(
    //   "INSERT INTO leads (name, email, slug, created_at) VALUES (?, ?, ?, datetime('now'))"
    // );
    // stmt.run(name, email, slug);

    return NextResponse.json({ success: true });
  } catch (err) {
    // eslint-disable-next-line no-console
    console.error("[LEAD] Error:", err);
    return NextResponse.json(
      { error: "Erro ao processar solicitação" },
      { status: 400 }
    );
  }
}
