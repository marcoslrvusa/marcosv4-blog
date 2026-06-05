import { getAllLocalPosts } from "@/lib/content";
import { getPublication } from "@/lib/hashnode";
import Image from "next/image";
import PostCard from "@/components/PostCard";
import NewsletterForm from "@/components/NewsletterForm";
import TerminalText from "@/components/TerminalText";
import EbookCta from "@/components/EbookCta";
import HeroSearch from "@/components/HeroSearch";
import {
  Brain, BarChart3, BadgeCheck, Sparkles,
  BookOpen, Briefcase, Layers, ChevronRight, TrendingUp,
} from "lucide-react";
import Link from "next/link";
import { getTranslations } from "next-intl/server";

export const revalidate = 300;

const topics = [
  { label: "Cases de IA", slug: "ia", icon: Brain, color: "text-accent-emerald", border: "border-accent-emerald/20" },
  { label: "Mercado", slug: "mercado", icon: TrendingUp, color: "text-accent-cyan", border: "border-accent-cyan/20" },
  { label: "AI Search", slug: "ai-search", icon: Layers, color: "text-accent-amber", border: "border-accent-amber/20" },
  { label: "Arquitetura AI", slug: "arquitetura", icon: Briefcase, color: "text-purple-400", border: "border-purple-400/20" },
];

export default async function Home({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "home" });

  let posts: { node: import("@/lib/types").Post }[] = [];
  let total = 0;
  let usingLocal = false;

  try {
    const pub = await getPublication();
    posts = pub.posts.edges;
    total = pub.posts.totalDocuments;
  } catch {
    const localPosts = getAllLocalPosts(locale);
    posts = localPosts.map((p) => ({ node: p }));
    total = localPosts.length;
    usingLocal = true;
  }

  const tags = posts.flatMap(({ node }) => node.tags?.map((t) => t.slug) || []);
  const topicCounts = topics.map((t) => ({
    ...t,
    count: tags.filter((tag) => tag.includes(t.slug)).length,
  }));

  return (
    <div className="mx-auto max-w-3xl px-6 py-16 sm:py-24">
      {/* Hero Section */}
      <section className="mb-16 animate-fade-in">
        <div className="mb-8 flex items-center gap-2">
          <span className="status-pulse flex h-2 w-2 rounded-full bg-accent-emerald" />
          <span className="font-mono text-[11px] font-medium uppercase tracking-widest text-accent-emerald">
            {t("tagline")}
          </span>
        </div>

        <div className="mb-8 flex items-center gap-4 rounded-xl border border-border bg-card/50 p-4">
          <Image
            src="/profile.png"
            alt="Marcos Luciano"
            width={64}
            height={64}
            className="rounded-full ring-2 ring-accent-emerald/20 object-cover"
            priority
          />
          <div className="min-w-0 flex-1">
            <div className="flex items-center gap-2">
              <h2 className="text-base font-semibold text-foreground">
                Marcos Luciano
              </h2>
              <span className="rounded-md border border-accent-emerald/10 bg-accent-emerald/5 px-1.5 py-0.5 font-mono text-[10px] text-accent-emerald">
                {t("badges.lead")}
              </span>
            </div>
            <p className="mt-0.5 text-sm text-muted">
              AI Lead @ V4 Company
            </p>
            <div className="mt-1 flex flex-wrap gap-1.5">
              <span className="inline-flex items-center gap-1 rounded-md border border-accent-cyan/10 bg-accent-cyan/5 px-1.5 py-0.5 font-mono text-[9px] uppercase tracking-wider text-accent-cyan/80">
                <Brain className="h-2.5 w-2.5" />
                {t("badges.specialist")}
              </span>
              <span className="inline-flex items-center gap-1 rounded-md border border-accent-amber/10 bg-accent-amber/5 px-1.5 py-0.5 font-mono text-[9px] uppercase tracking-wider text-accent-amber/80">
                <BarChart3 className="h-2.5 w-2.5" />
                {t("badges.datacamp")}
              </span>
              <span className="inline-flex items-center gap-1 rounded-md border border-purple-400/10 bg-purple-400/5 px-1.5 py-0.5 font-mono text-[9px] uppercase tracking-wider text-purple-400/80">
                <BadgeCheck className="h-2.5 w-2.5" />
                {t("badges.xp")}
              </span>
            </div>
          </div>
        </div>

        {/* Stats + Search */}
        <div className="mb-8 grid grid-cols-2 gap-3 sm:grid-cols-4">
          <div className="rounded-xl border border-border bg-card/30 p-3 text-center">
            <p className="font-mono text-xl font-bold text-foreground">{total}</p>
            <p className="mt-0.5 font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
              {t("stats.articles")}
            </p>
          </div>
          <div className="rounded-xl border border-border bg-card/30 p-3 text-center">
            <p className="font-mono text-xl font-bold text-foreground">12+</p>
            <p className="mt-0.5 font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
              {t("stats.xp")}
            </p>
          </div>
          <div className="rounded-xl border border-border bg-card/30 p-3 text-center">
            <p className="font-mono text-xl font-bold text-foreground">8</p>
            <p className="mt-0.5 font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
              {t("stats.certs")}
            </p>
          </div>
          <div className="rounded-xl border border-border bg-card/30 p-3 text-center">
            <p className="font-mono text-xl font-bold text-foreground">4</p>
            <p className="mt-0.5 font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
              {t("stats.topics")}
            </p>
          </div>
        </div>

        <h1 className="font-sans text-3xl font-bold leading-tight tracking-tight sm:text-5xl">
          <span className="text-[#555]">$ </span>
          <span className="text-foreground">echo</span>
          <span className="text-accent-emerald"> &quot;</span>
          <span className="bg-gradient-to-r from-accent-emerald via-accent-cyan to-purple-400 bg-clip-text text-transparent">
            {t("hero.title")}
          </span>
          <span className="text-accent-emerald">&quot;</span>
        </h1>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted">
          {t("hero.description")}
        </p>

        <div className="mt-6">
          <TerminalText lines={[
            "whoami  → AI Lead @ V4 Company",
            "skills  → AI Search · SEO · Growth · Architecture",
            "mission → Engineering AI Lead",
          ]} />
        </div>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-6">
          <div className="flex items-center gap-2 text-sm">
            <Sparkles className="h-3.5 w-3.5 text-accent-cyan" />
            <span className="text-xs text-muted-foreground">
              {t("updated")} {new Date().toLocaleDateString(locale === "en" ? "en-US" : locale === "es" ? "es-ES" : "pt-BR")}
            </span>
          </div>
          {usingLocal && (
            <div className="flex items-center gap-1.5 font-mono text-[11px] text-muted-foreground">
              <span className="text-accent-emerald">*</span>{t("localContent")}
            </div>
          )}
        </div>

        <div className="mt-8">
          <HeroSearch locale={locale} />
        </div>
      </section>

      {/* Divider */}
      <div className="mb-8 flex items-center gap-3 animate-fade-in-delay-1">
        <span className="font-mono text-xs font-medium text-muted-foreground">
          $ ls -la {t("divider")}/
        </span>
        <div className="h-px flex-1 bg-gradient-to-r from-border to-transparent" />
        <span className="font-mono text-[10px] text-muted-foreground">
          {total} {t("results")}
        </span>
      </div>

      {/* Posts */}
      <section className="animate-fade-in-delay-1">
        {posts.length > 0 ? (
          <div className="space-y-4">
            {posts.map(({ node }) => (
              <div key={node.id} className="animate-fade-in-delay-2">
                <PostCard post={node} locale={locale} />
              </div>
            ))}
          </div>
        ) : (
          <div className="glass-card rounded-xl p-12 text-center">
            <p className="font-mono text-sm text-muted-foreground">
              {t("noPosts")}
            </p>
          </div>
        )}
      </section>

      {/* Topics Grid */}
      <section className="mt-16 animate-fade-in-delay-2">
        <div className="mb-6 flex items-center gap-3">
          <span className="font-mono text-xs font-medium text-muted-foreground">
            $ tree {t("topics").toLowerCase().replace(/\s+/g, "-")}/
          </span>
          <div className="h-px flex-1 bg-gradient-to-r from-border to-transparent" />
        </div>
        <div className="grid gap-3 sm:grid-cols-2">
          {topicCounts.map((topic) => {
            const Icon = topic.icon;
            return (
              <Link
                key={topic.slug}
                href={`/posts?tag=${topic.slug}`}
                className="group rounded-xl border border-border bg-card/30 p-4 transition-all hover:border-accent-emerald/30 hover:bg-card/60"
              >
                <div className="flex items-center gap-3">
                  <div className={`rounded-lg border ${topic.border} p-2 ${topic.color}`}>
                    <Icon className="h-4 w-4" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-sm font-medium text-foreground">{topic.label}</p>
                    <p className="font-mono text-[11px] text-muted-foreground">
                      {topic.count} {topic.count === 1 ? t("common.article", {}) : t("common.articles", {})}
                    </p>
                  </div>
                  <ChevronRight className="h-4 w-4 text-muted-foreground opacity-0 transition-all group-hover:opacity-100 group-hover:text-accent-emerald" />
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      {/* Lead Magnet */}
      <section className="mt-12 animate-fade-in-delay-2">
        <EbookCta locale={locale} />
      </section>

      {/* LinkedIn Authority */}
      <section className="mt-12 animate-fade-in-delay-3">
        <a
          href="https://linkedin.com/in/marcoslrvieira"
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center gap-3 rounded-xl border border-accent-emerald/10 bg-accent-emerald/[0.02] px-5 py-4 transition-all hover:border-accent-emerald/20 hover:bg-accent-emerald/[0.04]"
        >
          <div className="rounded-lg border border-accent-emerald/20 bg-accent-emerald/5 p-2">
            <svg className="h-5 w-5 text-accent-emerald" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
          </div>
          <div className="min-w-0 flex-1">
            <p className="text-sm font-medium text-foreground group-hover:text-accent-emerald">
              {t("linkedin")}
            </p>
            <p className="font-mono text-[11px] text-muted-foreground">
              {t("linkedinSub")}
            </p>
          </div>
          <ChevronRight className="h-4 w-4 text-muted-foreground transition-all group-hover:translate-x-0.5 group-hover:text-accent-emerald" />
        </a>
      </section>

      {/* Newsletter Form */}
      <section className="mt-12 animate-fade-in-delay-3">
        <NewsletterForm locale={locale} />
      </section>
    </div>
  );
}
