import { getLocalPost, getAllLocalSlugs } from "@/lib/content";
import { getPost, getAllPostSlugs as getHashnodeSlugs } from "@/lib/hashnode";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { Calendar, Tag, Clock } from "lucide-react";
import Image from "next/image";
import LinkedInIcon from "@/components/LinkedInIcon";
import NewsletterForm from "@/components/NewsletterForm";
import ReadingProgress from "@/components/ReadingProgress";
import PostSidebar from "@/components/PostSidebar";
import Breadcrumbs from "@/components/Breadcrumbs";
import HostingerBanner from "@/components/HostingerBanner";
import { extractHeadings } from "@/lib/headings";
import { getTranslations } from "next-intl/server";

export const revalidate = 300;

export async function generateStaticParams() {
  const locales = ["pt", "en", "es"];
  const params: { locale: string; slug: string }[] = [];

  for (const locale of locales) {
    const slugs = getAllLocalSlugs(locale);
    for (const slug of slugs) {
      params.push({ locale, slug });
    }
  }

  return params;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { locale, slug } = await params;
  let post = getLocalPost(slug, locale);
  if (!post) {
    try {
      post = await getPost(slug);
    } catch {
      // silent
    }
  }
  if (!post) return { title: "Post não encontrado" };
  return {
    title: post.title,
    description: post.brief,
    openGraph: {
      title: post.title,
      description: post.brief,
      ...(post.coverImage?.url && { images: [{ url: post.coverImage.url }] }),
    },
  };
}

export default async function PostPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  const t = await getTranslations({ locale, namespace: "post" });

  let post: import("@/lib/types").Post | null = getLocalPost(slug, locale);
  if (!post) {
    try {
      post = await getPost(slug);
    } catch {
      // silent
    }
  }

  if (!post) {
    notFound();
  }

  const date = new Date(post.publishedAt).toLocaleDateString(
    locale === "en" ? "en-US" : locale === "es" ? "es-ES" : "pt-BR",
    {
      day: "numeric",
      month: "long",
      year: "numeric",
    }
  );

  const readingTime = Math.max(
    1,
    Math.ceil((post.content?.markdown?.length || 0) / 1000)
  );

  const tocItems = extractHeadings(post.content.html);

  const baseUrl = locale === "pt" ? "https://marcosv4.cloud" : `https://marcosv4.cloud/${locale}`;
  const articleUrl = `${baseUrl}/posts/${post.slug}`;
  const shareText = encodeURIComponent(`${post.title} — AI First`);

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.brief,
    image: post.coverImage?.url,
    datePublished: post.publishedAt,
    dateModified: post.publishedAt,
    author: {
      "@type": "Person",
      name: "Marcos Luciano",
      url: "https://marcosv4.cloud/about",
    },
    publisher: {
      "@type": "Organization",
      name: "V4 Company",
      logo: { "@type": "ImageObject", url: "https://marcosv4.cloud/profile.png" },
    },
    mainEntityOfPage: { "@type": "WebPage", "@id": articleUrl },
    wordCount: post.content?.markdown?.length || 0,
  }

  return (
    <>
      <ReadingProgress />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <div className="mx-auto max-w-7xl px-6 py-16 sm:py-24">
        <Breadcrumbs items={[
          { label: "Home", href: `/${locale === "pt" ? "" : locale}` },
          ...(post.tags?.[0] ? [{ label: post.tags[0].name, href: `/topic/${post.tags[0].slug}` }] : []),
          { label: post.title },
        ]} />
        <div className="md:grid md:grid-cols-[1fr_260px] md:gap-8">
          <article>
      <header className="mb-12 animate-fade-in">
        <div className="mb-4 flex flex-wrap items-center gap-3 font-mono text-xs text-muted">
          <time dateTime={post.publishedAt} className="flex items-center gap-1.5">
            <Calendar className="h-3 w-3 text-v4-red" />
            {date}
          </time>
          <span className="flex items-center gap-1.5">
            <Clock className="h-3 w-3 text-accent-gold" />
            {readingTime} {t("minRead")}
          </span>
          {post.tags?.slice(0, 3).map((tag) => (
            <span
              key={tag.slug}
              className="flex items-center gap-1 rounded-md border border-v4-red/10 bg-v4-red/5 px-2 py-0.5 text-[10px] uppercase tracking-wider text-v4-red/80"
            >
              <Tag className="h-2.5 w-2.5" />
              {tag.name}
            </span>
          ))}
        </div>

        <h1 className="text-3xl font-bold leading-tight tracking-tight sm:text-4xl">
          {post.title}
        </h1>

        {post.brief && (
          <p className="mt-4 text-base leading-relaxed text-muted">
            {post.brief}
          </p>
        )}

        <div className="mt-8 border-t border-border pt-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Image
                src="/profile.png"
                alt="Marcos Luciano"
                width={40}
                height={40}
                className="rounded-full ring-2 ring-v4-red/20 object-cover"
              />
              <div>
                <p className="text-sm font-medium text-foreground">
                  Marcos Luciano
                </p>
                <p className="font-mono text-xs text-muted-foreground">
                  AI Lead @ V4 Company
                </p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <a
                href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(articleUrl)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-lg border border-v4-red/20 px-3 py-1.5 font-mono text-xs font-medium text-v4-red transition-all hover:bg-v4-red/10"
              >
                <LinkedInIcon className="h-3 w-3" />
                {t("share")}
              </a>
              <a
                href={`https://twitter.com/intent/tweet?text=${shareText}&url=${encodeURIComponent(articleUrl)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-lg border border-accent-gold/20 px-3 py-1.5 font-mono text-xs font-medium text-accent-gold transition-all hover:bg-accent-gold/10"
              >
                <svg className="h-3 w-3" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
                {t("post")}
              </a>
            </div>
          </div>
        </div>
      </header>

      {post.coverImage?.url && (
        <div className="mb-12 overflow-hidden rounded-xl animate-fade-in-delay-1 ring-1 ring-border">
          <img
            src={post.coverImage.url}
            alt={post.title}
            className="w-full object-cover"
          />
        </div>
      )}

      <div
        className="prose prose-sm max-w-none prose-invert prose-headings:font-bold prose-headings:tracking-tight prose-headings:text-foreground prose-a:text-v4-red prose-a:no-underline hover:prose-a:underline prose-strong:text-foreground prose-code:rounded-md prose-code:bg-v4-red/5 prose-code:px-1.5 prose-code:py-0.5 prose-code:font-mono prose-code:text-sm prose-code:text-v4-red prose-code:font-normal prose-pre:rounded-xl prose-pre:border prose-pre:border-border prose-pre:bg-card prose-pre:text-sm prose-blockquote:border-l-v4-red prose-blockquote:text-muted prose-figure:my-8 prose-img:rounded-xl animate-fade-in-delay-1"
        dangerouslySetInnerHTML={{ __html: post.content.html }}
      />

      {/* Author Bio */}
      <footer className="mt-16 animate-fade-in-delay-2 border-b border-border pb-12">
        <div className="gradient-border rounded-xl p-5">
          <div className="flex items-center gap-4">
            <Image
              src="/profile.png"
              alt="Marcos Luciano"
              width={56}
              height={56}
              className="rounded-full ring-2 ring-v4-red/20 object-cover"
            />
            <div className="min-w-0 flex-1">
              <p className="font-semibold text-foreground">Marcos Luciano</p>
              <p className="text-sm text-muted">
                {t("authorBio")}
              </p>
              <a
                href="https://linkedin.com/in/marcoslrvieira"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-1 inline-flex items-center gap-1 text-xs font-medium text-v4-red hover:underline"
              >
                <LinkedInIcon className="h-3 w-3" />
                {t("connectLinkedin")}
              </a>
            </div>
          </div>
        </div>
      </footer>

      {/* Newsletter */}
      <div className="mt-8 animate-fade-in-delay-3">
        <NewsletterForm locale={locale} />
      </div>

      {/* ADSENSE — POST (após artigo, antes do sidebar) */}
      <div className="adsense-placeholder border-2 border-dashed border-v4-red/30 rounded-xl p-6 text-center bg-v4-red/[0.02]">
        <div className="flex items-center justify-center gap-2 mb-2">
          <span className="inline-block w-2 h-2 rounded-full bg-v4-red animate-pulse" />
          <span className="font-mono text-[10px] uppercase tracking-widest text-v4-red font-bold">
            ESPAÇO RESERVADO — ADSENSE POST
          </span>
        </div>
        <p className="font-mono text-[9px] text-v4-red/50">300x250 / In-Article — Cole o código do AdSense aqui</p>
      </div>

      {/* HOSTINGER BANNER — POST (link de afiliado entre conteúdo e newsletter) */}
      <div className="mt-6 border border-dashed border-accent-gold/30 rounded-xl p-3">
        <div className="flex items-center gap-1.5 mb-2 px-1">
          <span className="inline-block w-1.5 h-1.5 rounded-full bg-accent-gold" />
          <span className="font-mono text-[8px] uppercase tracking-widest text-accent-gold font-semibold">
            LINK DE AFILIADO HOSTINGER
          </span>
        </div>
        <HostingerBanner variant="post" locale={locale} />
      </div>
    </article>

          <div className="mt-12 md:mt-0">
            <div className="md:sticky md:top-24">
              <PostSidebar locale={locale} tocItems={tocItems} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
