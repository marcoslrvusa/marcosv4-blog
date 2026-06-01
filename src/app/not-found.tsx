import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-24 text-center">
      <div className="mb-4 font-mono text-6xl font-bold text-border">404</div>
      <div className="mb-6 font-mono text-sm text-muted-foreground">
        <span className="text-v4-red">$</span> cat /dev/null 2&gt;&amp;1
        <br />
        cat: /dev/null: Página não encontrada
      </div>
      <h1 className="mb-2 text-xl font-semibold">
        Página não encontrada
      </h1>
      <p className="mb-8 text-sm text-muted">
        O artigo que você procura não existe ou foi removido.
      </p>
      <Link
        href="/"
        className="inline-flex items-center gap-1 rounded-lg border border-border px-4 py-2 font-mono text-sm font-medium text-muted-foreground transition-colors hover:border-v4-red hover:text-v4-red"
      >
        ← voltar ao início
      </Link>
    </div>
  );
}
