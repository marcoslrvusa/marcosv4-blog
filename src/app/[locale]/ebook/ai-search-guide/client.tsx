"use client";

import { useState, FormEvent } from "react";
import { Mail, Check, Loader2, Download, Printer, ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function EbookClient({
  locale,
  html,
  translations,
}: {
  locale: string;
  html: string;
  translations: Record<string, string>;
}) {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  const hrIndex = html.indexOf("<hr");
  const previewHtml = hrIndex > 0 ? html.slice(0, hrIndex) : html.slice(0, 1000);

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!email) return;

    setStatus("loading");
    setMessage("");

    try {
      const res = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, name, locale, resource: "ebook-ai-search" }),
      });

      const data = await res.json();

      if (res.ok) {
        setStatus("success");
        setMessage(translations.success);
      } else {
        setStatus("error");
        setMessage(data.error || translations.error);
      }
    } catch {
      setStatus("error");
      setMessage(translations.error);
    }
  }

  return (
    <div className="mx-auto max-w-3xl px-6 py-16 sm:py-24">
      <Link
        href={`/${locale === "pt" ? "" : locale}`}
        className="mb-8 inline-flex items-center gap-1.5 text-xs font-mono text-muted-foreground hover:text-v4-red transition-colors"
      >
        <ArrowLeft className="h-3 w-3" /> {locale === "en" ? "Back to home" : locale === "es" ? "Volver al inicio" : "Voltar ao in\u00EDcio"}
      </Link>

      <div className="mb-8">
        <div className="mb-2 flex items-center gap-2">
          <span className="status-pulse flex h-2 w-2 rounded-full bg-v4-red" />
          <span className="font-mono text-[11px] font-medium uppercase tracking-widest text-v4-red">
            {locale === "en" ? "FREE EBOOK" : "E-BOOK GR\u00C1TIS"}
          </span>
        </div>
        <h1 className="text-3xl font-bold leading-tight tracking-tight sm:text-4xl">
          {translations.title}
        </h1>
        <p className="mt-3 text-base leading-relaxed text-muted">
          {translations.description}
        </p>
      </div>

      {status === "success" ? (
        <div className="space-y-8">
          <div className="flex items-center gap-3 rounded-xl border border-v4-red/20 bg-v4-red/5 px-6 py-4">
            <Check className="h-6 w-6 text-v4-red" />
            <div>
              <p className="font-semibold text-v4-red">{translations.downloadReady}</p>
              <p className="text-sm text-muted">{translations.success}</p>
            </div>
          </div>

          <button
            onClick={() => window.print()}
            className="inline-flex items-center gap-2 rounded-lg bg-v4-red px-6 py-3 text-sm font-semibold text-background transition-all hover:bg-v4-red/90"
          >
            <Printer className="h-4 w-4" />
            {translations.printCta}
          </button>

          <div
            className="prose prose-sm max-w-none prose-invert prose-headings:font-bold prose-headings:text-foreground prose-a:text-v4-red prose-strong:text-foreground prose-code:rounded-md prose-code:bg-v4-red/5 prose-code:px-1.5 prose-code:py-0.5 prose-code:font-mono prose-code:text-sm prose-code:text-v4-red prose-code:font-normal prose-blockquote:border-l-v4-red prose-blockquote:text-muted prose-hr:border-border"
            dangerouslySetInnerHTML={{ __html: html }}
          />
        </div>
      ) : (
        <div className="space-y-8">
          <div className="rounded-xl border border-v4-red/20 bg-v4-red/[0.02] px-6 py-4">
            <p className="text-sm text-muted">
              {translations.previewNote}
            </p>
          </div>

          <div
            className="prose prose-sm max-w-none prose-invert prose-headings:font-bold prose-headings:text-foreground prose-a:text-v4-red prose-strong:text-foreground prose-code:rounded-md prose-code:bg-v4-red/5 prose-code:px-1.5 prose-code:py-0.5 prose-code:font-mono prose-code:text-sm prose-code:text-v4-red prose-code:font-normal prose-blockquote:border-l-v4-red prose-blockquote:text-muted prose-hr:border-border"
            dangerouslySetInnerHTML={{ __html: previewHtml }}
          />

          <div className="gradient-border rounded-xl p-6 sm:p-8">
            <div className="flex flex-col gap-4">
              <div className="flex items-start gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-v4-red/10">
                  <Mail className="h-5 w-5 text-v4-red" />
                </div>
                <div>
                  <h3 className="text-base font-semibold text-foreground">
                    {translations.formTitle}
                  </h3>
                  <p className="mt-1 text-sm text-muted">
                    {translations.formDescription}
                  </p>
                </div>
              </div>

              <form onSubmit={handleSubmit} className="flex flex-col gap-3 sm:flex-row">
                <div className="flex flex-1 flex-col gap-2 sm:flex-row">
                  <input
                    type="text"
                    placeholder={translations.namePlaceholder}
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="flex-1 rounded-lg border border-border bg-card px-4 py-2.5 font-sans text-sm text-foreground placeholder:text-muted-foreground focus:border-v4-red/50 focus:outline-none focus:ring-1 focus:ring-v4-red/20"
                  />
                  <input
                    type="email"
                    required
                    placeholder={translations.emailPlaceholder}
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
                    <Download className="h-4 w-4" />
                  )}
                  {translations.cta}
                </button>
              </form>

              {status === "error" && (
                <p className="text-sm text-v4-red">{message}</p>
              )}

              <p className="text-xs text-muted-foreground">
                {locale === "en"
                  ? "No spam. Unsubscribe anytime."
                  : locale === "es"
                  ? "Sin spam. Date de baja cuando quieras."
                  : "Sem spam. Descadastre-se quando quiser."}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
