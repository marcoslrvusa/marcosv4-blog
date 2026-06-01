import { getPost, getAllPostSlugs as getHashnodeSlugs } from "@/lib/hashnode";
import { getLocalPost, getAllLocalSlugs } from "@/lib/content";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { Calendar, Tag } from "lucide-react";
import LinkedInIcon from "@/components/LinkedInIcon";

export const revalidate = 300;

export async function generateStaticParams() {
  const localSlugs = getAllLocalSlugs();
  let hashnodeSlugs: string[] = [];
  try {
    hashnodeSlugs = await getHashnodeSlugs();
  } catch {
    // silent
  }
  const allSlugs = [...new Set([...localSlugs, ...hashnodeSlugs])];
  return allSlugs.map((slug: string) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  let post = getLocalPost(slug);
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
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  let post: import("@/lib/types").Post | null = getLocalPost(slug);
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

  const date = new Date(post.publishedAt).toLocaleDateString("pt-BR", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  const articleUrl = `https://marcosv4.cloud/posts/${post.slug}`;
  const shareText = encodeURIComponent(`${post.title} — marcosv4.cloud`);

  return (
    <article className="mx-auto max-w-3xl px-6 py-16 sm:py-24">
      <header className="mb-12 animate-fade-in">
        <div className="mb-4 flex flex-wrap items-center gap-3 font-mono text-xs text-muted">
          <time dateTime={post.publishedAt} className="flex items-center gap-1">
            <Calendar className="h-3 w-3" />
            {date}
          </time>
          {post.tags?.slice(0, 3).map((tag) => (
            <span
              key={tag.slug}
              className="flex items-center gap-1 rounded-md border border-border bg-card px-2 py-0.5 text-[10px] uppercase tracking-wider text-muted-foreground"
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
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-v4-red text-sm font-semibold text-white">
                MP
              </div>
              <div>
                <p className="text-sm font-medium text-foreground">
                  Marcos Peretto
                </p>
                <p className="font-mono text-xs text-muted-foreground">
                  Senior Developer @ V4 Company
                </p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <a
                href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(articleUrl)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-lg border border-border px-3 py-1.5 font-mono text-xs font-medium text-muted-foreground transition-colors hover:border-v4-red hover:text-v4-red"
              >
                <LinkedInIcon className="h-3 w-3" />
                Compartilhar
              </a>
              <a
                href={`https://twitter.com/intent/tweet?text=${shareText}&url=${encodeURIComponent(articleUrl)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-lg border border-border px-3 py-1.5 font-mono text-xs font-medium text-muted-foreground transition-colors hover:border-v4-red hover:text-v4-red"
              >
                <svg className="h-3 w-3" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
                Postar
              </a>
            </div>
          </div>
        </div>
      </header>

      {post.coverImage?.url && (
        <div className="mb-12 overflow-hidden rounded-xl animate-fade-in-delay-1">
          <img
            src={post.coverImage.url}
            alt={post.title}
            className="w-full object-cover"
          />
        </div>
      )}

      <div
        className="prose prose-sm max-w-none prose-invert prose-headings:font-bold prose-headings:tracking-tight prose-headings:text-foreground prose-a:text-v4-red prose-a:no-underline hover:prose-a:underline prose-strong:text-foreground prose-code:rounded-md prose-code:bg-card prose-code:px-1.5 prose-code:py-0.5 prose-code:font-mono prose-code:text-sm prose-code:text-accent-cyan prose-code:font-normal prose-pre:rounded-xl prose-pre:border prose-pre:border-border prose-pre:bg-card prose-pre:text-sm prose-blockquote:border-l-v4-red prose-blockquote:text-muted prose-figure:my-8 prose-img:rounded-xl animate-fade-in-delay-1"
        dangerouslySetInnerHTML={{ __html: post.content.html }}
      />

      <footer className="mt-16 animate-fade-in-delay-2">
        <div className="gradient-border rounded-xl p-5">
          <div className="flex items-center gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-v4-red text-white font-bold text-lg">
              MP
            </div>
            <div className="min-w-0 flex-1">
              <p className="font-semibold text-foreground">Marcos Peretto</p>
              <p className="text-sm text-muted">
                Senior Developer · AI Lead @ V4 Company · Pós em Ciência de Dados.
                Escrevo sobre tecnologia, estratégia e o impacto da IA no mundo.
              </p>
              <a
                href="https://linkedin.com/in/marcosperetto"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-1 inline-flex items-center gap-1 text-xs font-medium text-v4-red hover:underline"
              >
                <LinkedInIcon className="h-3 w-3" />
                Conectar no LinkedIn
              </a>
            </div>
          </div>
        </div>
      </footer>
    </article>
  );
}
