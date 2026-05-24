import Link from "next/link";
import type { Post } from "@/lib/types";

export default function PostCard({ post, index = 0 }: { post: Post; index?: number }) {
  const date = new Date(post.publishedAt).toLocaleDateString("pt-BR", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <article className="group border-b border-v4-gray-100 py-8 first:pt-0 last:border-0">
      <div className="flex items-start gap-5">
        <div className="hidden sm:flex h-10 w-10 shrink-0 items-center justify-center rounded-sm bg-v4-gray-50 text-xs font-bold text-v4-gray-300">
          {String(index + 1).padStart(2, "0")}
        </div>
        <div className="min-w-0 flex-1">
          <div className="mb-3 flex flex-wrap items-center gap-3 text-[10px] text-v4-gray-400 uppercase tracking-wider font-semibold">
            <time dateTime={post.publishedAt}>{date}</time>
            {post.tags?.slice(0, 2).map((tag) => (
              <span
                key={tag.slug}
                className="rounded-sm bg-v4-red-light px-2 py-0.5 text-[10px] font-bold text-v4-red"
              >
                {tag.name}
              </span>
            ))}
          </div>
          <Link href={`/posts/${post.slug}`}>
            <h2 className="mb-2 text-lg font-bold leading-snug text-v4-gray-900 transition-colors group-hover:text-v4-red">
              {post.title}
            </h2>
          </Link>
          {post.brief && (
            <p className="line-clamp-2 text-sm leading-relaxed text-v4-gray-500">
              {post.brief}
            </p>
          )}
        </div>
      </div>
    </article>
  );
}
