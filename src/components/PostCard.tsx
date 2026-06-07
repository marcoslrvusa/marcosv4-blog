import Link from "next/link"
import type { Post } from "@/lib/types"
import { Clock, ArrowUpRight } from "lucide-react"

export default function PostCard({ post, locale = "pt", index = 0 }: { post: Post; locale?: string; index?: number }) {
  const date = new Date(post.publishedAt).toLocaleDateString(
    locale === "en" ? "en-US" : locale === "es" ? "es-ES" : "pt-BR",
    { day: "numeric", month: "long", year: "numeric" }
  )

  const prefix = locale === "pt" ? "" : `/${locale}`

  const readingTime = Math.max(1, Math.ceil((post.content?.markdown?.length || 1000) / 1000))

  return (
    <Link href={`${prefix}/posts/${post.slug}`} className="group block">
      <article className="premium-card rounded-xl overflow-hidden h-full flex flex-col">
        {post.coverImage?.url && (
          <div className="relative aspect-[16/9] overflow-hidden bg-card/80">
            <img
              src={post.coverImage.url}
              alt={post.title}
              loading="lazy"
              decoding="async"
              className="h-full w-full object-cover transition-all duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent opacity-80" />
            <div className="absolute bottom-3 left-3 flex flex-wrap gap-1.5">
              {post.tags?.slice(0, 2).map((tag) => (
                <span
                  key={tag.slug}
                  className="px-2 py-0.5 rounded-md text-[10px] font-mono font-medium border border-v4-red/20 bg-background/80 text-v4-red backdrop-blur-sm"
                >
                  {tag.name}
                </span>
              ))}
            </div>
          </div>
        )}

        <div className="flex flex-col flex-1 p-5">
          <div className="flex items-center gap-3 text-[11px] font-mono text-muted-foreground mb-2">
            <time dateTime={post.publishedAt}>{date}</time>
            <span className="w-1 h-1 rounded-full bg-border" />
            <span className="flex items-center gap-1">
              <Clock className="w-3 h-3" />
              {readingTime} min
            </span>
          </div>

          <h2 className="text-base font-bold leading-snug text-foreground transition-colors group-hover:text-v4-red mb-2">
            {post.title}
          </h2>

          {post.brief && (
            <p className="text-sm text-muted-foreground leading-relaxed line-clamp-2 flex-1">
              {post.brief}
            </p>
          )}

          <div className="flex items-center gap-1.5 mt-4 text-xs font-medium text-muted-foreground group-hover:text-v4-red transition-colors">
            Ler artigo <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </div>
        </div>
      </article>
    </Link>
  )
}
