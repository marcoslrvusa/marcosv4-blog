import { getPublication } from "@/lib/hashnode";
import PostCard from "@/components/PostCard";

export const revalidate = 300;

export default async function Home() {
  let posts: { node: import("@/lib/types").Post }[] = [];
  let total = 0;

  try {
    const pub = await getPublication();
    posts = pub.posts.edges;
    total = pub.posts.totalDocuments;
  } catch {
    // Hashnode ainda não configurado — fallback para dados locais
  }

  return (
    <div className="mx-auto max-w-3xl px-6 py-16 sm:py-24">
      <section className="mb-16">
        <div className="mb-2 flex items-center gap-2">
          <span className="h-1.5 w-1.5 rounded-full bg-v4-red" />
          <span className="text-xs font-medium uppercase tracking-widest text-gray-400">
            AI Lead na V4 Company
          </span>
        </div>
        <h1 className="font-serif text-4xl leading-tight tracking-tight text-gray-900 sm:text-5xl">
          Tecnologia,{" "}
          <span className="text-v4-red">AI</span> e Estratégia
        </h1>
        <p className="mt-4 max-w-xl text-base leading-relaxed text-gray-500">
          Análises sobre inteligência artificial, geopolítica, SEO e o impacto
          da tecnologia nos negócios. Por Marcos Peretto — 12 anos de SEO, AI
          Lead na V4 Company.
        </p>
        <div className="mt-6 flex gap-4 text-sm">
          <div className="flex items-center gap-1.5 text-gray-400">
            <span className="font-semibold text-gray-900">{total || 14}</span>
            <span>artigos</span>
          </div>
          <div className="flex items-center gap-1.5 text-gray-400">
            <span className="font-semibold text-gray-900">IA</span>
            <span>+SEO</span>
          </div>
        </div>
      </section>

      <section>
        <div className="mb-8 flex items-center gap-3">
          <div className="h-px flex-1 bg-gray-100" />
          <span className="text-xs font-medium uppercase tracking-widest text-gray-400">
            Últimos Artigos
          </span>
          <div className="h-px flex-1 bg-gray-100" />
        </div>

        {posts.length > 0 ? (
          <div>
            {posts.map(({ node }) => (
              <PostCard key={node.id} post={node} />
            ))}
          </div>
        ) : (
          <div className="rounded-lg border border-gray-100 bg-gray-50 p-8 text-center">
            <p className="text-sm text-gray-400">
              Blog em configuração. Em breve, os primeiros artigos serão publicados.
            </p>
          </div>
        )}
      </section>
    </div>
  );
}
