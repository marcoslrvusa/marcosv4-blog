import Link from "next/link";
import type { Post } from "@/lib/types";

export default function PostCard({ post }: { post: Post }) {
  const date = new Date(post.publishedAt).toLocaleDateString("pt-BR", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <article className="group border-b border-gray-100 py-8 first:pt-0 last:border-0">
      <div className="flex items-start gap-2">
        <div className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-v4-red" />
        <div className="min-w-0 flex-1">
          <div className="mb-2 flex flex-wrap items-center gap-2 text-xs text-gray-400">
            <time dateTime={post.publishedAt}>{date}</time>
            {post.tags?.slice(0, 2).map((tag) => (
              <span
                key={tag.slug}
                className="rounded-full bg-v4-red-light px-2 py-0.5 text-xs font-medium text-v4-red-dark"
              >
                {tag.name}
              </span>
            ))}
          </div>
          <Link href={`/posts/${post.slug}`}>
            <h2 className="mb-2 text-lg font-semibold leading-snug text-gray-900 transition-colors group-hover:text-v4-red">
              {post.title}
            </h2>
          </Link>
          {post.brief && (
            <p className="line-clamp-2 text-sm leading-relaxed text-gray-500">
              {post.brief}
            </p>
          )}
        </div>
      </div>
    </article>
  );
}
