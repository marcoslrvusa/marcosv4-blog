import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-24 text-center">
      <div className="mb-4 text-6xl font-serif text-gray-200">404</div>
      <h1 className="text-xl font-semibold text-gray-900 mb-2">
        Página não encontrada
      </h1>
      <p className="text-sm text-gray-500 mb-6">
        O artigo que você procura não existe ou foi removido.
      </p>
      <Link
        href="/"
        className="inline-flex items-center gap-1 text-sm font-medium text-v4-red hover:underline"
      >
        ← Voltar para o início
      </Link>
    </div>
  );
}
