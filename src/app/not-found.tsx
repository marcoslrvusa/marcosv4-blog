import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto max-w-5xl px-6 py-24 text-center">
      <div className="mb-4 font-sans text-7xl font-extrabold text-v4-gray-100">
        404
      </div>
      <h1 className="text-lg font-bold text-v4-gray-900 mb-2">
        Página não encontrada
      </h1>
      <p className="text-xs text-v4-gray-500 mb-8">
        O artigo que você procura não existe ou foi removido.
      </p>
      <Link
        href="/"
        className="inline-flex items-center gap-2 rounded-sm border border-v4-red px-5 py-2.5 text-[10px] font-bold uppercase tracking-wider text-v4-red transition-colors hover:bg-v4-red hover:text-white"
      >
        ← Voltar para o início
      </Link>
    </div>
  );
}
