import { getPublication } from "@/lib/hashnode";
import { getAllLocalPosts } from "@/lib/content";
import PostCard from "@/components/PostCard";
import { FileCode, Brain, BarChart3, BadgeCheck } from "lucide-react";

export const revalidate = 300;

const badges = [
  { label: "Senior Developer", icon: FileCode },
  { label: "Data Scientist", icon: BarChart3 },
  { label: "AI Lead", icon: Brain },
  { label: "Publicitário", icon: BadgeCheck },
];

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
    <div className="mx-auto max-w-3xl px-6 py-16 sm:py-24">
      <section className="mb-16 animate-fade-in">
        <div className="mb-4 flex flex-wrap gap-2">
          {badges.map((badge) => {
            const Icon = badge.icon;
            return (
              <span
                key={badge.label}
                className="inline-flex items-center gap-1.5 rounded-full border border-border bg-card px-3 py-1 font-mono text-[11px] font-medium uppercase tracking-wider text-muted-foreground"
              >
                <Icon className="h-3 w-3" />
                {badge.label}
              </span>
            );
          })}
        </div>

        <h1 className="mt-6 font-sans text-4xl font-bold leading-tight tracking-tight sm:text-5xl">
          <span className="text-muted">$ </span>
          <span className="text-foreground">echo</span>
          <span className="text-v4-red"> &quot;</span>
          <span>Tecnologia, AI e Estratégia</span>
          <span className="text-v4-red">&quot;</span>
        </h1>
        <p className="mt-4 max-w-xl text-base leading-relaxed text-muted">
          Senior Developer e AI Lead na V4 Company. Pós-graduado em Ciência de
          Dados. Escrevo sobre inteligência artificial, tecnologia, estratégia
          digital e a interseção entre marketing e engenharia.
        </p>
        <div className="mt-6 flex gap-4 text-sm">
          <div className="flex items-center gap-1.5 text-muted">
            <span className="font-semibold text-foreground">{total || 0}</span>
            <span>{total === 1 ? "artigo" : "artigos"} publicados</span>
          </div>
          <div className="flex items-center gap-1.5 text-muted">
            <span className="text-xs">atualizado em {new Date().toLocaleDateString("pt-BR")}</span>
          </div>
          {usingLocal && (
            <div className="flex items-center gap-1.5 font-mono text-[11px] text-muted-foreground">
              <span className="text-accent-cyan">*</span>conteúdo local
            </div>
          )}
        </div>
      </section>

      <section className="animate-fade-in-delay-1">
        <div className="mb-6 flex items-center gap-3">
          <span className="font-mono text-xs font-medium text-muted-foreground">
            $ ls -la artigos/
          </span>
          <div className="h-px flex-1 bg-border" />
        </div>

        {posts.length > 0 ? (
          <div className="space-y-4">
            {posts.map(({ node }) => (
              <div key={node.id} className="animate-fade-in-delay-2">
                <PostCard post={node} />
              </div>
            ))}
          </div>
        ) : (
          <div className="rounded-xl border border-border bg-card p-12 text-center">
            <p className="font-mono text-sm text-muted-foreground">
              Nenhum artigo publicado ainda.
            </p>
          </div>
        )}
      </section>
    </div>
  );
}
