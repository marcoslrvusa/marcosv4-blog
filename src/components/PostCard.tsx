import Link from "next/link";
import type { Post } from "@/lib/types";

export default function PostCard({ post }: { post: Post }) {
  const date = new Date(post.publishedAt).toLocaleDateString("pt-BR", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <Link href={`/posts/${post.slug}`} className="group block">
      <article className="rounded-xl border border-border bg-card p-5 transition-all hover:border-v4-red/30 hover:bg-card-hover hover:shadow-[0_0_24px_rgba(220,38,38,0.06)]">
        <div className="flex items-center gap-2 text-xs text-muted">
          <time dateTime={post.publishedAt}>{date}</time>
          {post.tags?.slice(0, 2).map((tag) => (
            <span
              key={tag.slug}
              className="rounded-md border border-border bg-background px-2 py-0.5 font-mono text-[10px] uppercase tracking-wider text-muted-foreground"
            >
              {tag.name}
            </span>
          ))}
        </div>
        <h2 className="mt-3 text-base font-semibold leading-snug text-foreground transition-colors group-hover:text-v4-red">
          {post.title}
        </h2>
        {post.brief && (
          <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-muted">
            {post.brief}
          </p>
        )}
        <div className="mt-4 flex items-center gap-1 text-xs font-medium text-muted-foreground group-hover:text-v4-red">
          Ler artigo
          <span className="transition-transform group-hover:translate-x-0.5">→</span>
        </div>
      </article>
    </Link>
  );
}
