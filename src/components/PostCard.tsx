import Link from "next/link";
import type { Post } from "@/lib/types";

function getTagColor(tag: string) {
  const colors: Record<string, string> = {
    nvidia: "text-accent-emerald border-accent-emerald/20 bg-accent-emerald/5",
    openai: "text-accent-cyan border-accent-cyan/20 bg-accent-cyan/5",
    google: "text-accent-amber border-accent-amber/20 bg-accent-amber/5",
    microsoft: "text-accent-purple border-accent-purple/20 bg-accent-purple/5",
    arquitetura: "text-v4-red border-v4-red/20 bg-v4-red/5",
    "ai ops": "text-accent-emerald border-accent-emerald/20 bg-accent-emerald/5",
    mercado: "text-accent-cyan border-accent-cyan/20 bg-accent-cyan/5",
    estratégia: "text-accent-amber border-accent-amber/20 bg-accent-amber/5",
  };
  const key = tag.toLowerCase();
  return colors[key] || "text-muted-foreground border-border bg-card";
}

export default function PostCard({ post }: { post: Post }) {
  const date = new Date(post.publishedAt).toLocaleDateString("pt-BR", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  const readingTime = Math.max(
    1,
    Math.ceil((post.content?.markdown?.length || 0) / 1000)
  );

  return (
    <Link href={`/posts/${post.slug}`} className="group block">
      <article className="glass-card rounded-xl p-5 transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,255,136,0.04)] hover:border-accent-emerald/20">
        <div className="flex items-center gap-2 text-xs text-muted">
          <time dateTime={post.publishedAt}>{date}</time>
          <span className="text-muted-foreground">·</span>
          <span className="text-muted-foreground">{readingTime} min de leitura</span>
          {post.tags?.slice(0, 2).map((tag) => (
            <span
              key={tag.slug}
              className={`rounded-md border px-2 py-0.5 font-mono text-[10px] uppercase tracking-wider ${getTagColor(tag.name)}`}
            >
              {tag.name}
            </span>
          ))}
        </div>
        <h2 className="mt-3 text-base font-semibold leading-snug text-foreground transition-colors group-hover:text-accent-emerald">
          {post.title}
        </h2>
        {post.brief && (
          <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-muted">
            {post.brief}
          </p>
        )}
        <div className="mt-4 flex items-center gap-1 text-xs font-medium text-muted-foreground group-hover:text-accent-emerald transition-colors">
          Ler artigo
          <span className="transition-transform group-hover:translate-x-0.5">→</span>
        </div>
      </article>
    </Link>
  );
}
