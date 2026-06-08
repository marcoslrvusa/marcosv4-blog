import { getAllLocalPosts } from "@/lib/content";
import { getPublication } from "@/lib/hashnode";
import Image from "next/image";
import PostCard from "@/components/PostCard";
import HeroSearch from "@/components/HeroSearch";
import Sidebar from "@/components/Sidebar";
import MateriaisRicos from "@/components/MateriaisRicos";
import SiliconFlowModelBox from "@/components/SiliconFlowModelBox"
import LLMLogosBar from "@/components/LLMLogosBar";
import LLMPricingCards from "@/components/LLMPricingCards";
import {
  Brain, BarChart3, BadgeCheck, Sparkles, ArrowRight,
} from "lucide-react";
import Link from "next/link";
import { getTranslations } from "next-intl/server";

export const revalidate = 300;

const topics = [
  { label: "Cases de IA", slug: "ia", color: "text-v4-red", border: "border-v4-red/20" },
  { label: "Mercado", slug: "mercado", color: "text-accent-gold", border: "border-accent-gold/20" },
  { label: "AI Search", slug: "ai-search", color: "text-accent-amber", border: "border-accent-amber/20" },
  { label: "Arquitetura AI", slug: "arquitetura", color: "text-accent-gold", border: "border-accent-gold/20" },
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
    <div className="mx-auto">

      {/* Hero Section — Clarity-inspired split layout */}
      <section className="relative overflow-hidden border-b border-border/50">
        <div className="mx-auto max-w-6xl px-6 py-10 sm:py-14 lg:py-20">
          <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">

            {/* Left: Content */}
            <div className="flex-1 min-w-0 animate-fade-in">
              <div className="flex items-center gap-2 mb-3">
                <span className="font-mono text-[11px] font-bold uppercase tracking-widest text-muted-foreground/60">
                  by{' '}
                  <span className="text-v4-red">Marcos Luciano</span>
                </span>
                <span className="h-3 w-px bg-border" />
                <span className="flex h-1.5 w-1.5 rounded-full bg-v4-red animate-pulse" />
                <span className="font-mono text-[10px] font-semibold uppercase tracking-widest text-v4-red">
                  AI First
                </span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-sans font-bold leading-tight tracking-tight text-foreground">
                {t("hero.title")}
              </h1>

              <p className="mt-3 max-w-xl text-sm sm:text-base leading-relaxed text-muted">
                {t("hero.description")}
              </p>

              <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-1">
                <span className="font-mono text-[11px] text-muted-foreground">
                  <span className="text-v4-red font-semibold">{total}</span> artigos
                </span>
                <span className="font-mono text-[9px] text-muted-foreground/30">/</span>
                <span className="font-mono text-[11px] text-muted-foreground">Google & Meta Certified</span>
                <span className="font-mono text-[9px] text-muted-foreground/30">/</span>
                <span className="font-mono text-[11px] text-muted-foreground">12+ anos</span>
                <span className="font-mono text-[9px] text-muted-foreground/30">/</span>
                <span className="font-mono text-[11px] text-muted-foreground">DataCamp</span>
              </div>

              <div className="mt-6 flex flex-wrap items-center gap-3">
                <Link
                  href={`/${locale === "pt" ? "" : locale}/consulting`}
                  className="inline-flex items-center gap-2 rounded-lg bg-v4-red px-5 py-2.5 text-sm font-semibold text-background transition-all hover:bg-v4-red/90 hover:shadow-lg hover:shadow-v4-red/20"
                >
                  {t("hero.cta")}
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  href={`#posts`}
                  className="inline-flex items-center gap-2 rounded-lg border border-border px-5 py-2.5 text-sm font-medium text-muted-foreground transition-all hover:border-v4-red/30 hover:text-v4-red hover:bg-v4-red/5"
                >
                  Explorar Artigos
                </Link>
              </div>

              <div className="mt-6 max-w-lg">
                <HeroSearch locale={locale} />
              </div>
            </div>

            {/* Right: Image with profile picture overlay */}
            <div className="flex-shrink-0 w-full lg:w-[400px] xl:w-[460px] animate-fade-in-delay-1">
              <div className="relative rounded-2xl overflow-hidden border border-border/50 shadow-2xl shadow-black/30">
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent z-10" />
                <div className="absolute inset-0 bg-gradient-to-l from-v4-red/20 via-v4-red/5 to-transparent z-10" />
                <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-background to-transparent z-10" />
                <Image
                  src="/images/hero.webp"
                  alt="AI Infrastructure"
                  width={1024}
                  height={693}
                  className="w-full h-auto object-cover scale-105"
                  priority
                />
                {/* Profile picture — floating at bottom-right overlap */}
                <div className="absolute -bottom-5 -right-2 z-20">
                  <div className="relative">
                    <div className="absolute inset-0 rounded-full bg-v4-red/20 blur-md animate-pulse" />
                    <Image
                      src="/profile.png"
                      alt="Marcos Luciano"
                      width={72}
                      height={72}
                      className="relative rounded-full ring-[3px] ring-v4-red/40 ring-offset-2 ring-offset-background object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <LLMLogosBar />
      </section>

      {/* LLM Pricing Cards — comparison section */}
      <LLMPricingCards locale={locale} />

      {/* SiliconFlow Model Box — featured models */}
      <SiliconFlowModelBox locale={locale} />

      {/* Topics Pills — below hero */}
      <div className="mx-auto max-w-6xl px-6 py-6">
        <div className="flex flex-wrap items-center gap-2">
          <span className="font-mono text-[10px] text-muted-foreground/50 uppercase tracking-widest mr-1">Tópicos</span>
          {topicCounts.map((t) => (
            <Link
              key={t.slug}
              href={`/topic/${t.slug}`}
              className="inline-flex items-center gap-1.5 rounded-full border border-border bg-card/50 px-3 py-1 font-mono text-[11px] text-muted-foreground transition-all hover:border-v4-red/30 hover:text-v4-red hover:bg-v4-red/5"
            >
              {t.label}
              <span className="text-[10px] text-muted-foreground/60">{t.count}</span>
            </Link>
          ))}
        </div>
      </div>

      {/* Main content wrapper */}
      <div className="mx-auto max-w-6xl px-6 pb-16">

      {/* Materiais Ricos */}
      <MateriaisRicos locale={locale} />

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
          <section id="posts" className="animate-fade-in-delay-1">
            {pagePosts.length > 0 ? (
              <>
                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
                  {pagePosts.map(({ node }) => (
                    <div key={node.id} className="animate-fade-in-delay-2">
                      <PostCard post={node} locale={locale} />
                    </div>
                  ))}
                  </div>

                  {/* ADSENSE — IN-FEED (entre grid de posts e paginação) */}
                <div className="adsense-placeholder border-2 border-dashed border-v4-red/30 rounded-xl p-6 text-center bg-v4-red/[0.02]">
                  <div className="flex items-center justify-center gap-2 mb-2">
                    <span className="inline-block w-2 h-2 rounded-full bg-v4-red animate-pulse" />
                    <span className="font-mono text-[10px] uppercase tracking-widest text-v4-red font-bold">
                      ESPAÇO RESERVADO — ADSENSE IN-FEED
                    </span>
                  </div>
                  <p className="font-mono text-[9px] text-v4-red/50">Display responsivo — Cole o código do AdSense aqui</p>
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
  </div>
  );
}
