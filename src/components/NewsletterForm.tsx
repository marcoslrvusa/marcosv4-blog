"use client";

import { useState, FormEvent } from "react";
import { Mail, Check, Loader2, Sparkles } from "lucide-react";
import { useTranslations } from "next-intl";

export default function NewsletterForm({ locale = "pt" }: { locale?: string }) {
  const t = useTranslations("newsletter");
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
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
        body: JSON.stringify({ email, name, locale }),
      });

      const data = await res.json();

      if (res.ok) {
        setStatus("success");
        setMessage(t("success"));
        setEmail("");
        setName("");
      } else {
        setStatus("error");
        setMessage(data.error || t("error"));
      }
    } catch {
      setStatus("error");
      setMessage(t("error"));
    }
  }

  return (
    <div className="gradient-border rounded-xl p-6 sm:p-8">
      <div className="flex flex-col gap-4">
        <div className="flex items-start gap-3">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-v4-red/10">
            <Mail className="h-5 w-5 text-v4-red" />
          </div>
          <div>
            <h3 className="text-base font-semibold text-foreground">
              {t("title")}
            </h3>
            <p className="mt-1 text-sm text-muted">
              {t("description")}
            </p>
          </div>
        </div>

        {status === "success" ? (
          <div className="flex items-center gap-2 rounded-lg bg-v4-red/5 px-4 py-3">
            <Check className="h-5 w-5 text-v4-red" />
            <p className="text-sm text-v4-red">{message}</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col gap-3 sm:flex-row">
            <div className="flex flex-1 flex-col gap-2 sm:flex-row">
              <input
                type="text"
                placeholder={t("namePlaceholder")}
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="flex-1 rounded-lg border border-border bg-card px-4 py-2.5 font-sans text-sm text-foreground placeholder:text-muted-foreground focus:border-v4-red/50 focus:outline-none focus:ring-1 focus:ring-v4-red/20"
              />
              <input
                type="email"
                required
                placeholder={t("emailPlaceholder")}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 rounded-lg border border-border bg-card px-4 py-2.5 font-sans text-sm text-foreground placeholder:text-muted-foreground focus:border-v4-red/50 focus:outline-none focus:ring-1 focus:ring-v4-red/20"
              />
            </div>
            <button
              type="submit"
              disabled={status === "loading"}
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-v4-red px-5 py-2.5 text-sm font-semibold text-background transition-all hover:bg-v4-red/90 disabled:opacity-60"
            >
              {status === "loading" ? (
                <Loader2 className="h-4 w-4 animate-spin" />
              ) : (
                <Sparkles className="h-4 w-4" />
              )}
              {t("cta")}
            </button>
          </form>
        )}

        {status === "error" && (
          <p className="text-sm text-v4-red">{message}</p>
        )}

        <p className="text-xs text-muted-foreground">
          {locale === "en"
            ? "No spam. Unsubscribe anytime. Your data will not be shared."
            : locale === "es"
            ? "Sin spam. Date de baja cuando quieras. Tus datos no ser\u00E1n compartidos."
            : "Sem spam. Descadastre-se quando quiser. Seus dados n\u00E3o ser\u00E3o compartilhados."}
        </p>
      </div>
    </div>
  );
}
