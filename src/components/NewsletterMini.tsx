"use client";

import { useState, FormEvent } from "react";
import { Mail, Check, Loader2 } from "lucide-react";

export default function NewsletterMini({ locale = "pt" }: { locale?: string }) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!email) return;

    setStatus("loading");
    setMessage("");

    try {
      const res = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, name: "", locale }),
      });

      const data = await res.json();

      if (res.ok) {
        setStatus("success");
        setMessage(
          locale === "en" ? "You're in! 🎉" : locale === "es" ? "¡Listo! 🎉" : "Confirmado! 🎉",
        );
        setEmail("");
      } else {
        setStatus("error");
        setMessage(data.error || "Algo deu errado.");
      }
    } catch {
      setStatus("error");
      setMessage("Algo deu errado.");
    }
  }

  return (
    <div className="gradient-border rounded-xl">
      <div className="p-4">
        <div className="mb-3 flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
          <Mail className="h-3.5 w-3.5 text-accent-emerald" />
          <span>
            {locale === "en" ? "Newsletter" : locale === "es" ? "Newsletter" : "Newsletter"}
          </span>
        </div>
        {status === "success" ? (
          <div className="flex items-center gap-2 rounded-lg bg-accent-emerald/5 px-3 py-2">
            <Check className="h-4 w-4 text-accent-emerald shrink-0" />
            <p className="text-xs text-accent-emerald">{message}</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex gap-2">
            <input
              type="email"
              required
              placeholder={
                locale === "en"
                  ? "your@email.com"
                  : locale === "es"
                  ? "tu@email.com"
                  : "seu@email.com"
              }
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="min-w-0 flex-1 rounded-lg border border-border bg-card px-3 py-2 font-sans text-xs text-foreground placeholder:text-muted-foreground focus:border-accent-emerald/50 focus:outline-none focus:ring-1 focus:ring-accent-emerald/20"
            />
            <button
              type="submit"
              disabled={status === "loading"}
              className="shrink-0 rounded-lg bg-accent-emerald px-3 py-2 text-xs font-semibold text-black transition-all hover:bg-accent-emerald/90 disabled:opacity-60"
            >
              {status === "loading" ? (
                <Loader2 className="h-3.5 w-3.5 animate-spin" />
              ) : (
                <Mail className="h-3.5 w-3.5" />
              )}
            </button>
          </form>
        )}
        {status === "error" && (
          <p className="mt-1.5 text-[10px] text-v4-red">{message}</p>
        )}
      </div>
    </div>
  );
}
