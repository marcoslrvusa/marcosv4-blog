import { getAllLocalPosts } from "@/lib/content";
import { getPublication } from "@/lib/hashnode";
import Image from "next/image";
import PostCard from "@/components/PostCard";
import Sidebar from "@/components/Sidebar";
import MateriaisRicos from "@/components/MateriaisRicos";
import SiliconFlowModelBox from "@/components/SiliconFlowModelBox"
import LLMPricingCards from "@/components/LLMPricingCards";
import HostingerBanner from "@/components/HostingerBanner";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { getTranslations } from "next-intl/server";

export const revalidate = 300;

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

  const totalPages = Math.max(1, Math.ceil(total / PER_PAGE));
  const safePage = Math.min(currentPage, totalPages);
  const start = (safePage - 1) * PER_PAGE;
  const pagePosts = posts.slice(start, start + PER_PAGE);

  const prefix = locale === "pt" ? "" : `/${locale}`;

  return (
    <div className="mx-auto">

      {/* Hero */}
      <section className="hero-ambient border-b border-border">
        <div className="mx-auto max-w-6xl px-6 py-16 sm:py-20 lg:py-24">
          <div className="max-w-3xl">
            <div className="flex items-center gap-4 mb-5">
              <Image
                src="/profile.png"
                alt="Marcos Luciano"
                width={56}
                height={56}
                className="rounded-full ring-2 ring-border object-cover shrink-0"
              />
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="led-dot" />
                  <span className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
                    Marcos Luciano
                  </span>
                </div>
                <p className="text-xs text-muted-foreground/60">Infrastructure Engineer</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <svg className="h-12 w-12 sm:h-14 sm:w-14 shrink-0 mt-1 animate-float" viewBox="0 0 100 100" fill="none" aria-hidden="true">
                <defs>
                  <radialGradient id="brainGlow" cx="50%" cy="50%" r="50%">
                    <stop offset="0%" stopColor="#e50914" stopOpacity="0.15" />
                    <stop offset="100%" stopColor="#e50914" stopOpacity="0" />
                  </radialGradient>
                </defs>
                <circle cx="50" cy="50" r="48" fill="url(#brainGlow)" />
                <path d="M50 8C29 8 12 25 12 46c0 12 6 22 15 29-2 5-5 10-9 14l4 3c5-4 9-9 12-14 5 2 11 3 16 3s11-1 16-3c3 5 7 10 12 14l4-3c-4-4-7-9-9-14 9-7 15-17 15-29 0-21-17-38-38-38z" className="fill-current text-accent/10" />
                <path d="M50 12C31 12 16 27 16 46c0 11 5 20 12 26" className="stroke-current text-accent/30" strokeWidth="1.5" strokeLinecap="round" fill="none">
                  <animate attributeName="stroke-dashoffset" from="0" to="200" dur="3s" repeatCount="indefinite" />
                  <animate attributeName="stroke-dasharray" values="0 200;30 170;30 170;0 200" dur="3s" repeatCount="indefinite" />
                </path>
                <path d="M50 12c19 0 34 15 34 34 0 11-5 20-12 26" className="stroke-current text-accent/30" strokeWidth="1.5" strokeLinecap="round" fill="none">
                  <animate attributeName="stroke-dashoffset" from="200" to="0" dur="3s" repeatCount="indefinite" />
                  <animate attributeName="stroke-dasharray" values="0 200;30 170;30 170;0 200" dur="3s" repeatCount="indefinite" />
                </path>
                <path d="M35 35l5-8M65 35l-5-8M35 55l5 8M65 55l-5-8" className="stroke-current text-accent/20" strokeWidth="1" strokeLinecap="round" />
                <circle cx="50" cy="40" r="12" className="fill-current text-accent/8" />
                <path d="M42 35l8 10 8-10" className="stroke-current text-accent/40" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none">
                  <animate attributeName="opacity" values="0.3;0.8;0.3" dur="2s" repeatCount="indefinite" />
                </path>
                <circle cx="35" cy="35" r="2" className="fill-current text-accent/30">
                  <animate attributeName="opacity" values="0.2;0.7;0.2" dur="1.5s" repeatCount="indefinite" />
                </circle>
                <circle cx="65" cy="35" r="2" className="fill-current text-accent/30">
                  <animate attributeName="opacity" values="0.7;0.2;0.7" dur="1.5s" repeatCount="indefinite" />
                </circle>
                <circle cx="35" cy="55" r="2" className="fill-current text-accent/30">
                  <animate attributeName="opacity" values="0.4;0.9;0.4" dur="2.5s" repeatCount="indefinite" />
                </circle>
                <circle cx="65" cy="55" r="2" className="fill-current text-accent/30">
                  <animate attributeName="opacity" values="0.9;0.4;0.9" dur="2.5s" repeatCount="indefinite" />
                </circle>
              </svg>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight tracking-tight text-foreground">
                {t("hero.title")}
              </h1>
            </div>

            <p className="mt-4 max-w-xl text-sm sm:text-base leading-relaxed text-muted">
              {t("hero.description")}
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-3">
              <Link
                href={`/${locale === "pt" ? "" : locale}/consulting`}
                className="inline-flex items-center gap-2 rounded-lg bg-accent text-white px-5 py-2.5 text-sm font-semibold hover:bg-accent-hover transition-colors"
              >
                {t("hero.cta")}
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href={`#posts`}
                className="inline-flex items-center gap-2 rounded-lg border border-border px-5 py-2.5 text-sm font-medium text-muted-foreground hover:text-foreground hover:border-[#3a3a52] transition-colors"
              >
                Explorar Artigos
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* LLM Pricing Cards */}
      <LLMPricingCards locale={locale} />

      <div className="mx-auto max-w-6xl px-6 mb-8">
        <HostingerBanner variant="inline" locale={locale} />
      </div>

      {/* SiliconFlow Model Box */}
      <SiliconFlowModelBox locale={locale} />

      {/* Main content wrapper */}
      <div className="mx-auto max-w-6xl px-6 pb-16">

        {/* Materiais Ricos */}
        <MateriaisRicos locale={locale} />

        {/* Content + Sidebar */}
        <div className="mx-auto max-w-6xl grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-8 lg:gap-12">

          {/* Left — Posts */}
          <div>

            {/* Divider */}
            <div className="divider mb-8" />

            {/* Posts Grid */}
            <section id="posts" className="animate-fade-in">
              {pagePosts.length > 0 ? (
                <>
                  <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
                    {pagePosts.map(({ node }) => (
                      <div key={node.id} className="animate-fade-in">
                        <PostCard post={node} locale={locale} />
                      </div>
                    ))}
                  </div>

                  {/* AdSense — in-feed */}
                  <div className="card p-4 text-center my-5">
                    <div className="flex items-center justify-center gap-2 mb-1">
                      <span className="text-[10px] font-mono text-muted-foreground/40 uppercase tracking-wider">
                        — AdSpace —
                      </span>
                    </div>
                    <p className="text-[10px] text-muted-foreground/30 font-mono">In-feed</p>
                  </div>

                  {totalPages > 1 && (
                    <nav className="mt-10 flex items-center justify-center gap-2" aria-label="Pagination">
                      {safePage > 1 && (
                        <Link
                          href={`${prefix}/?page=${safePage - 1}`}
                          className="rounded-lg border border-border px-3 py-2 text-xs text-muted-foreground transition-colors hover:text-foreground hover:border-[#3a3a52]"
                        >
                          ← {t("prev")}
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
                              className={`rounded-lg px-3 py-2 text-xs transition-colors ${
                                pageNum === safePage
                                  ? "bg-accent-subtle text-accent"
                                  : "text-muted-foreground hover:text-foreground"
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
                          className="rounded-lg border border-border px-3 py-2 text-xs text-muted-foreground transition-colors hover:text-foreground hover:border-[#3a3a52]"
                        >
                          {t("next")} →
                        </Link>
                      )}
                    </nav>
                  )}
                </>
              ) : (
                <div className="card p-12 text-center">
                  <p className="text-sm text-muted-foreground">
                    {t("noPosts")}
                  </p>
                </div>
              )}
            </section>
          </div>

          {/* Right — Sidebar */}
          <div className="lg:sticky lg:top-24 lg:self-start">
            <Sidebar locale={locale} />
          </div>
        </div>

      </div>
    </div>
  );
}
