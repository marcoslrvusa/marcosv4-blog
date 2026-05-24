import { getPost, getAllPostSlugs as getHashnodeSlugs } from "@/lib/hashnode";
import { getLocalPost, getAllLocalSlugs } from "@/lib/content";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

export const revalidate = 300;

export async function generateStaticParams() {
  const localSlugs = getAllLocalSlugs();
  let hashnodeSlugs: string[] = [];
  try {
    hashnodeSlugs = await getHashnodeSlugs();
  } catch {
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

  return (
    <article className="mx-auto max-w-5xl px-6">
      <header className="border-b border-v4-gray-100 py-16 sm:py-20">
        <div className="mx-auto max-w-3xl">
          <div className="mb-6 flex flex-wrap items-center gap-3 text-[10px] text-v4-gray-400 uppercase tracking-wider font-semibold">
            <time dateTime={post.publishedAt}>{date}</time>
            {post.tags?.slice(0, 3).map((tag) => (
              <span
                key={tag.slug}
                className="rounded-sm bg-v4-red-light px-2 py-0.5 font-bold text-v4-red"
              >
                {tag.name}
              </span>
            ))}
          </div>

          <h1 className="font-sans text-3xl font-extrabold leading-tight tracking-tight text-v4-gray-900 sm:text-4xl">
            {post.title}
          </h1>

          {post.brief && (
            <p className="mt-4 text-sm leading-relaxed text-v4-gray-500 max-w-xl">
              {post.brief}
            </p>
          )}

          <div className="mt-8 flex items-center justify-between border-t border-v4-gray-100 pt-6">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-v4-red text-xs font-bold text-white">
                ML
              </div>
              <div>
                <p className="text-xs font-bold text-v4-gray-900">
                  Marcos Luciano
                </p>
                <p className="text-[10px] text-v4-gray-400">
                  AI Lead @ V4 Company
                </p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <a
                href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(articleUrl)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-sm border border-v4-gray-200 px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider text-v4-gray-500 transition-colors hover:border-v4-red hover:text-v4-red"
              >
                <svg className="h-3 w-3" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
                Compartilhar
              </a>
              <a
                href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(post.title)}&url=${encodeURIComponent(articleUrl)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-sm border border-v4-gray-200 px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider text-v4-gray-500 transition-colors hover:border-v4-red hover:text-v4-red"
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
        <div className="mx-auto max-w-3xl -mt-px">
          <div className="overflow-hidden">
            <img
              src={post.coverImage.url}
              alt={post.title}
              className="w-full object-cover"
            />
          </div>
        </div>
      )}

      <div className="mx-auto max-w-3xl py-12 sm:py-16">
        <div
          className="prose prose-sm max-w-none"
          dangerouslySetInnerHTML={{ __html: post.content.html }}
        />
      </div>

      <footer className="mx-auto max-w-3xl border-t border-v4-gray-100 py-12 sm:py-16">
        <div className="rounded-sm border border-v4-gray-100 bg-v4-gray-50 p-6 sm:p-8">
          <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-center">
            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-v4-red text-lg font-bold text-white">
              ML
            </div>
            <div className="flex-1">
              <p className="font-bold text-v4-gray-900">Marcos Luciano</p>
              <p className="text-xs text-v4-gray-500">
                AI Lead na V4 Company. 12 anos de SEO. Escrevo sobre tecnologia,
                estratégia e o impacto da IA no mundo.
              </p>
            </div>
            <a
              href="https://linkedin.com/in/marcosperetto"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-sm border border-v4-red px-4 py-2 text-[10px] font-bold uppercase tracking-wider text-v4-red transition-colors hover:bg-v4-red hover:text-white"
            >
              <svg className="h-3 w-3" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
              Conectar no LinkedIn
            </a>
          </div>
        </div>
      </footer>
    </article>
  );
}
