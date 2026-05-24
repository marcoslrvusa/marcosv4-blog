import { getPublication } from "@/lib/hashnode";
import { getAllLocalPosts } from "@/lib/content";
import PostCard from "@/components/PostCard";

export const revalidate = 300;

export default async function Home() {
  let posts: { node: import("@/lib/types").Post }[] = [];
  let total = 0;
  let usingLocal = false;

  try {
    const pub = await getPublication();
    posts = pub.posts.edges;
    total = pub.posts.totalDocuments;
  } catch {
    const localPosts = getAllLocalPosts();
    posts = localPosts.map((p) => ({ node: p }));
    total = localPosts.length;
    usingLocal = true;
  }

  return (
    <div className="mx-auto max-w-5xl px-6">
      <section className="border-b border-v4-gray-100 py-20 sm:py-28">
        <div className="mx-auto max-w-3xl">
          <div className="mb-6 flex items-center gap-3">
            <div className="h-0.5 w-8 bg-v4-red" />
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-v4-gray-400">
              AI Lead na V4 Company
            </span>
          </div>
          <h1 className="font-sans text-4xl font-extrabold leading-none tracking-tight text-v4-gray-900 sm:text-6xl">
            Tecnologia,
            <br />
            <span className="text-v4-red">AI</span> e Estratégia
          </h1>
          <p className="mt-6 max-w-xl text-sm leading-relaxed text-v4-gray-500">
            Análises sobre inteligência artificial, geopolítica, SEO e o impacto
            da tecnologia nos negócios. Por Marcos Luciano — 12 anos de SEO, AI
            Lead na V4 Company.
          </p>
          <div className="mt-8 flex gap-6 text-xs">
            <div className="flex items-center gap-2">
              <span className="text-2xl font-bold text-v4-gray-900">{total || 0}</span>
              <span className="text-v4-gray-400 uppercase tracking-wider font-semibold">
                {total === 1 ? "Artigo" : "Artigos"}
              </span>
            </div>
            {usingLocal && (
              <div className="flex items-center gap-2">
                <span className="flex h-2 w-2 rounded-full bg-v4-red" />
                <span className="text-v4-gray-400 uppercase tracking-wider font-semibold">
                  Conteúdo Local
                </span>
              </div>
            )}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-3xl">
          <div className="mb-12 flex items-center gap-4">
            <div className="h-px flex-1 bg-v4-gray-100" />
            <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-v4-gray-400">
              Últimos Artigos
            </span>
            <div className="h-px flex-1 bg-v4-gray-100" />
          </div>

          {posts.length > 0 ? (
            <div>
              {posts.map(({ node }, i) => (
                <PostCard key={node.id} post={node} index={i} />
              ))}
            </div>
          ) : (
            <div className="rounded-sm border border-v4-gray-100 bg-v4-gray-50 p-10 text-center">
              <p className="text-xs text-v4-gray-400">
                Nenhum artigo publicado ainda.
              </p>
            </div>
          )}

          {usingLocal && posts.length > 0 && (
            <div className="mt-10 text-center">
              <p className="text-[10px] text-v4-gray-300 uppercase tracking-wider">
                Este blog usa conteúdo local. Conecte um host Hashnode no .env.local para publicar via headless CMS.
              </p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
