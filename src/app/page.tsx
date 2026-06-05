import { getAllLocalPosts } from "@/lib/content";
import { getPublication } from "@/lib/hashnode";
import Image from "next/image";
import PostCard from "@/components/PostCard";
import NewsletterForm from "@/components/NewsletterForm";
import { Brain, BarChart3, BadgeCheck, TrendingUp, Sparkles } from "lucide-react";

export const revalidate = 300;

const badges = [
  { label: "Senior Media Buyer", icon: TrendingUp },
  { label: "AI & SEO Specialist", icon: Brain },
  { label: "DataCamp Data Scientist", icon: BarChart3 },
  { label: "12+ Anos XP", icon: BadgeCheck },
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
      {/* Hero Section */}
      <section className="mb-16 animate-fade-in">
        <div className="mb-6 flex items-center gap-2">
          <span className="status-pulse flex h-2 w-2 rounded-full bg-accent-emerald" />
          <span className="font-mono text-[11px] font-medium uppercase tracking-widest text-accent-emerald">
            AI Authority — Brasil
          </span>
        </div>

        {/* Author Card */}
        <div className="mb-6 flex items-center gap-4 rounded-xl border border-border bg-card/50 p-4">
          <Image
            src="/profile.png"
            alt="Marcos Luciano"
            width={72}
            height={72}
            className="rounded-full ring-2 ring-accent-emerald/20 object-cover"
            priority
          />
          <div>
            <h2 className="text-lg font-semibold text-foreground">
              Marcos Luciano
            </h2>
            <p className="text-sm text-muted">
              Senior Media Buyer · AI & SEO Specialist
            </p>
          </div>
        </div>

        <div className="mb-4 flex flex-wrap gap-2">
          {badges.map((badge) => {
            const Icon = badge.icon;
            return (
              <span
                key={badge.label}
                className="inline-flex items-center gap-1.5 rounded-full border border-accent-emerald/10 bg-accent-emerald/5 px-3 py-1 font-mono text-[11px] font-medium uppercase tracking-wider text-accent-emerald/80"
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
          <span className="text-accent-emerald"> &quot;</span>
          <span className="text-gradient">
            Inteligência Artificial & Arquitetura AI
          </span>
          <span className="text-accent-emerald">&quot;</span>
        </h1>
        <p className="mt-4 max-w-xl text-base leading-relaxed text-muted">
          Senior Media Buyer, AI & SEO Specialist com 12+ anos de experiência.
          Escrevo sobre inteligência artificial, arquitetura de sistemas AI, cases
          replicáveis de Nvidia/Microsoft/Google/OpenAI e o mercado de IA no Brasil.
        </p>

        <div className="mt-6 flex items-center gap-6 text-sm">
          <div className="flex items-center gap-1.5 text-muted">
            <span className="font-semibold text-foreground">{total || 0}</span>
            <span>{total === 1 ? "artigo" : "artigos"} publicados</span>
          </div>
          <div className="flex items-center gap-1.5 text-muted">
            <Sparkles className="h-3.5 w-3.5 text-accent-cyan" />
            <span className="text-xs text-muted-foreground">
              atualizado em {new Date().toLocaleDateString("pt-BR")}
            </span>
          </div>
          {usingLocal && (
            <div className="flex items-center gap-1.5 font-mono text-[11px] text-muted-foreground">
              <span className="text-accent-emerald">*</span>conteúdo local
            </div>
          )}
        </div>
      </section>

      {/* Divider */}
      <div className="mb-8 flex items-center gap-3 animate-fade-in-delay-1">
        <span className="font-mono text-xs font-medium text-muted-foreground">
          $ ls -la artigos/
        </span>
        <div className="h-px flex-1 bg-gradient-to-r from-border to-transparent" />
        <span className="font-mono text-[10px] text-muted-foreground">
          {total} resultados
        </span>
      </div>

      {/* Posts */}
      <section className="animate-fade-in-delay-1">
        {posts.length > 0 ? (
          <div className="space-y-4">
            {posts.map(({ node }) => (
              <div key={node.id} className="animate-fade-in-delay-2">
                <PostCard post={node} />
              </div>
            ))}
          </div>
        ) : (
          <div className="glass-card rounded-xl p-12 text-center">
            <p className="font-mono text-sm text-muted-foreground">
              Nenhum artigo publicado ainda.
            </p>
          </div>
        )}
      </section>

      {/* Newsletter Form */}
      <section className="mt-16 animate-fade-in-delay-3">
        <NewsletterForm />
      </section>
    </div>
  );
}
