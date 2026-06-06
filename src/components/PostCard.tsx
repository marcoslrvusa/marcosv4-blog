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
        {/* Image Container */}
        {post.coverImage?.url && (
          <div className="relative aspect-[16/9] overflow-hidden bg-[#0c0c18]">
            <img
              src={post.coverImage.url}
              alt={post.title}
              className="h-full w-full object-cover transition-all duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#050508] via-transparent to-transparent opacity-60" />
            <div className="absolute bottom-3 left-3 flex flex-wrap gap-1.5">
              {post.tags?.slice(0, 2).map((tag) => (
                <span
                  key={tag.slug}
                  className="px-2 py-0.5 rounded-md text-[10px] font-mono font-medium border border-[#e50914]/20 bg-[#050508]/80 text-[#e50914] backdrop-blur-sm"
                >
                  {tag.name}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Content */}
        <div className="flex flex-col flex-1 p-5">
          {/* Meta */}
          <div className="flex items-center gap-3 text-[11px] font-mono text-[#6b6b80] mb-2">
            <time dateTime={post.publishedAt}>{date}</time>
            <span className="w-1 h-1 rounded-full bg-[#1a1a2e]" />
            <span className="flex items-center gap-1">
              <Clock className="w-3 h-3" />
              {readingTime} min
            </span>
          </div>

          {/* Title */}
          <h2 className="text-base font-bold leading-snug text-[#e8e8f0] transition-colors group-hover:text-[#e50914] mb-2">
            {post.title}
          </h2>

          {/* Brief */}
          {post.brief && (
            <p className="text-sm text-[#8888a0] leading-relaxed line-clamp-2 flex-1">
              {post.brief}
            </p>
          )}

          {/* CTA */}
          <div className="flex items-center gap-1.5 mt-4 text-xs font-medium text-[#6b6b80] group-hover:text-[#e50914] transition-colors">
            Ler artigo <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </div>
        </div>
      </article>
    </Link>
  )
}
