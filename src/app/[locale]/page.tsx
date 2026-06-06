import { getAllLocalPosts } from "@/lib/content";
import { getPublication } from "@/lib/hashnode";
import Image from "next/image";
import PostCard from "@/components/PostCard";
import TerminalText from "@/components/TerminalText";
import HeroSearch from "@/components/HeroSearch";
import Sidebar from "@/components/Sidebar";
import {
  Brain, BarChart3, BadgeCheck, Sparkles,
  BookOpen,
} from "lucide-react";
import Link from "next/link";
import { getTranslations } from "next-intl/server";

export const revalidate = 300;

const topics = [
  { label: "Cases de IA", slug: "ia", icon: Brain, color: "text-v4-red", border: "border-v4-red/20" },
  { label: "Mercado", slug: "mercado", icon: null, color: "text-accent-gold", border: "border-accent-gold/20" },
  { label: "AI Search", slug: "ai-search", icon: null, color: "text-accent-amber", border: "border-accent-amber/20" },
  { label: "Arquitetura AI", slug: "arquitetura", icon: null, color: "text-accent-gold", border: "border-accent-gold/20" },
];

const PER_PAGE = 6;

export default async function Home({
  params,
  searchParams,
}: {
  params: Promise<{ locale: string }>;
  searchParams: Promise<{ page?: string }>;
}) {
  const { locale } = await params;
  const { page: pageParam } = await searchParams;
  const currentPage = Math.max(1, parseInt(pageParam || "1", 10) || 1);
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

  const totalPages = Math.max(1, Math.ceil(total / PER_PAGE));
  const safePage = Math.min(currentPage, totalPages);
  const start = (safePage - 1) * PER_PAGE;
  const pagePosts = posts.slice(start, start + PER_PAGE);

  const prefix = locale === "pt" ? "" : `/${locale}`;

  return (
    <div className="mx-auto px-6 py-16 sm:py-24">

      {/* Hero Section */}
      <section className="mx-auto max-w-5xl mb-16 animate-fade-in">
        <div className="mb-8 flex items-center gap-2">
          <span className="status-pulse flex h-2 w-2 rounded-full bg-v4-red" />
          <span className="font-mono text-[11px] font-medium uppercase tracking-widest text-v4-red">
            {t("tagline")}
          </span>
        </div>

        <div className="mb-8 flex items-center gap-4 rounded-xl border border-border bg-card/50 p-4">
          <Image
            src="/profile.png"
            alt="Marcos Luciano"
            width={64}
            height={64}
            className="rounded-full ring-2 ring-v4-red/20 object-cover"
            priority
          />
          <div className="min-w-0 flex-1">
            <div className="flex items-center gap-2">
              <h2 className="text-base font-semibold text-foreground">
                Marcos Luciano
              </h2>
              <span className="rounded-md border border-v4-red/10 bg-v4-red/5 px-1.5 py-0.5 font-mono text-[10px] text-v4-red">
                {t("badges.lead")}
              </span>
            </div>
            <p className="mt-0.5 text-sm text-muted">
              AI Lead @ V4 Company
            </p>
            <div className="mt-1 flex flex-wrap gap-1.5">
              <span className="inline-flex items-center gap-1 rounded-md border border-accent-gold/10 bg-accent-gold/5 px-1.5 py-0.5 font-mono text-[9px] uppercase tracking-wider text-accent-gold/80">
                <Brain className="h-2.5 w-2.5" />
                {t("badges.specialist")}
              </span>
              <span className="inline-flex items-center gap-1 rounded-md border border-accent-amber/10 bg-accent-amber/5 px-1.5 py-0.5 font-mono text-[9px] uppercase tracking-wider text-accent-amber/80">
                <BarChart3 className="h-2.5 w-2.5" />
                {t("badges.datacamp")}
              </span>
              <span className="inline-flex items-center gap-1 rounded-md border border-accent-gold/10 bg-accent-gold/5 px-1.5 py-0.5 font-mono text-[9px] uppercase tracking-wider text-accent-gold/80">
                <BadgeCheck className="h-2.5 w-2.5" />
                {t("badges.xp")}
              </span>
            </div>
          </div>
        </div>

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
          <span className="text-v4-red"> &quot;</span>
          <span className="bg-gradient-to-r from-v4-red via-accent-gold to-accent-gold bg-clip-text text-transparent">
            {t("hero.title")}
          </span>
          <span className="text-v4-red">&quot;</span>
        </h1>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted">
          {t("hero.description")}
        </p>

        <div className="mt-6">
          <TerminalText lines={[
            "whoami  \u2192 AI Lead @ V4 Company",
            "skills  \u2192 AI Search \u00B7 SEO \u00B7 Growth \u00B7 Architecture",
            "mission \u2192 Engineering AI Lead",
          ]} />
        </div>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-6">
          <div className="flex items-center gap-2 text-sm">
            <Sparkles className="h-3.5 w-3.5 text-muted-foreground" />
            <span className="text-xs text-muted-foreground">
              {t("updated")} {new Date().toLocaleDateString(locale === "en" ? "en-US" : locale === "es" ? "es-ES" : "pt-BR")}
            </span>
          </div>
          {usingLocal && (
            <div className="flex items-center gap-1.5 font-mono text-[11px] text-muted-foreground">
              <span className="text-v4-red">*</span>{t("localContent")}
            </div>
          )}
        </div>

        <div className="mt-8">
          <HeroSearch locale={locale} />
        </div>
      </section>

      {/* Main Content + Sidebar */}
      <div className="mx-auto max-w-6xl grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-8 lg:gap-12">

        {/* Left — Posts */}
        <div>

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

          {/* Posts Grid */}
          <section className="animate-fade-in-delay-1">
            {pagePosts.length > 0 ? (
              <>
                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
                  {pagePosts.map(({ node }) => (
                    <div key={node.id} className="animate-fade-in-delay-2">
                      <PostCard post={node} locale={locale} />
                    </div>
                  ))}
                </div>

                {totalPages > 1 && (
                  <nav className="mt-10 flex items-center justify-center gap-2" aria-label="Pagination">
                    {safePage > 1 && (
                      <Link
                        href={`${prefix}/?page=${safePage - 1}`}
                        className="rounded-lg border border-border px-3 py-2 font-mono text-xs text-muted-foreground transition-colors hover:border-v4-red/30 hover:text-v4-red"
                      >
                        \u2190 {t("prev")}
                      </Link>
                    )}
                    <div className="flex items-center gap-1">
                      {Array.from({ length: Math.min(totalPages, 7) }, (_, i) => {
                        let pageNum: number;
                        if (totalPages <= 7) {
                          pageNum = i + 1;
                        } else if (safePage <= 4) {
                          pageNum = i + 1;
                        } else if (safePage >= totalPages - 3) {
                          pageNum = totalPages - 6 + i;
                        } else {
                          pageNum = safePage - 3 + i;
                        }
                        return (
                          <Link
                            key={pageNum}
                            href={`${prefix}/?page=${pageNum}`}
                            className={`rounded-lg px-3 py-2 font-mono text-xs transition-colors ${
                              pageNum === safePage
                                ? "bg-v4-red/10 text-v4-red"
                                : "text-muted-foreground hover:text-v4-red"
                            }`}
                          >
                            {pageNum}
                          </Link>
                        );
                      })}
                    </div>
                    {safePage < totalPages && (
                      <Link
                        href={`${prefix}/?page=${safePage + 1}`}
                        className="rounded-lg border border-border px-3 py-2 font-mono text-xs text-muted-foreground transition-colors hover:border-v4-red/30 hover:text-v4-red"
                      >
                        {t("next")} \u2192
                      </Link>
                    )}
                  </nav>
                )}
              </>
            ) : (
              <div className="glass-card rounded-xl p-12 text-center">
                <p className="font-mono text-sm text-muted-foreground">
                  {t("noPosts")}
                </p>
              </div>
            )}
          </section>
        </div>

        {/* Right — Sidebar */}
        <div className="lg:sticky lg:top-24 lg:self-start">
          <Sidebar locale={locale} topicCounts={topicCounts} />
        </div>
      </div>
    </div>
  );
}
