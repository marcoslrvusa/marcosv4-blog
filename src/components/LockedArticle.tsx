"use client";
import { ReactNode, useState, FormEvent } from "react";
import { Mail, Lock, Sparkles, Loader2 } from "lucide-react";
import { trackEvent } from "@/lib/gtag";

interface Props {
  slug: string;
  children: ReactNode;
  teaser?: string[];
  toc?: string[];
}

export default function LockedArticle({ slug, children, teaser, toc }: Props) {
  const key = `has_unlocked_${slug}`;
  const [state, setState] = useState<"form" | "loading" | "unlocked">(() => {
    if (typeof window === "undefined") return "form";
    if (localStorage.getItem(key)) return "unlocked";
    return "form";
  });
  const [error, setError] = useState("");

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!name.trim() || !email.trim()) return;

    setState("loading");
    setError("");
    trackEvent("unlock_button_click", { article_title: slug });

    try {
      const res = await fetch("/api/unlock/article", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, slug }),
      });

      if (!res.ok) throw new Error("Erro ao processar solicitação");

      trackEvent("sign_up", { article_title: slug, method: "locked_article" });
      trackEvent("generate_lead", { article_title: slug });

      if (typeof window !== "undefined") {
        localStorage.setItem(key, "1");
      }

      setState("unlocked");
    } catch {
      setState("form");
      setError("Ocorreu um erro. Tente novamente.");
    }
  }

  if (state === "unlocked") {
    return <>{children}</>;
  }

  return (
    <section className="not-prose my-8 rounded-2xl border border-border bg-gradient-to-b from-card via-card to-v4-red/5 p-6 shadow-2xl shadow-black/20">
      <div className="flex items-start gap-4">
        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-v4-red/10">
          <Lock className="h-6 w-6 text-v4-red" />
        </div>
        <div>
          <h2 className="text-lg font-semibold">
            Conteúdo exclusivo para pessoas reais
          </h2>
          <p className="mt-1 text-sm text-muted-foreground">
            Este artigo trancado inclui checklists editáveis, scripts e
            modelos prontos para você copiar.
          </p>
        </div>
      </div>

      {teaser && teaser.length > 0 && (
        <div className="mt-6 space-y-2">
          <h3 className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
            O que você libera ao preencher
          </h3>
          <ul className="space-y-1.5">
            {teaser.map((item, idx) => (
              <li key={idx} className="flex items-start gap-2 text-sm">
                <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-v4-red" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      )}

      <form onSubmit={handleSubmit} className="mt-6 flex flex-col gap-3">
        <div className="grid gap-3 sm:grid-cols-2">
          <input
            type="text"
            name="name"
            required
            placeholder="Nome"
            value={name}
            onChange={(e) => setName(e.target.value)}
            onFocus={() => trackEvent("view_form", { article_title: slug })}
            className="w-full rounded-lg border border-border bg-background px-4 py-2.5 text-sm"
          />
          <input
            type="email"
            name="email"
            required
            placeholder="E-mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full rounded-lg border border-border bg-background px-4 py-2.5 text-sm"
          />
        </div>
        <button
          type="submit"
          disabled={state === "loading"}
          className="inline-flex items-center justify-center gap-2 rounded-lg bg-v4-red px-5 py-2.5 text-sm font-semibold text-background transition-all hover:bg-v4-red/90 hover:shadow-lg hover:shadow-v4-red/20 disabled:opacity-70"
        >
          {state === "loading" ? (
            <Loader2 className="h-4 w-4 animate-spin" />
          ) : (
            <Sparkles className="h-4 w-4" />
          )}
          Liberar conteúdo agora
        </button>
      </form>

      {error && (
        <p className="mt-3 text-xs text-v4-red">{error}</p>
      )}

      <p className="mt-4 text-[11px] text-muted-foreground">
        Ao preencher, você aceita receber e-mails pontuais sobre IA, n8n e
        crescimento. Sem spam. Descadastre-se quando quiser.
      </p>
    </section>
  );
}
