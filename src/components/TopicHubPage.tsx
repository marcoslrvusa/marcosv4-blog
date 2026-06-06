"use client"

import { useTranslations } from "next-intl"
import PostCard from "@/components/PostCard"
import {
  Brain, TrendingUp, Layers, Briefcase,
  BookOpen
} from "lucide-react"
import type { Post } from "@/lib/types"

const iconMap: Record<string, typeof Brain> = {
  ia: Brain,
  mercado: TrendingUp,
  "ai-search": Layers,
  arquitetura: Briefcase,
}

interface TopicData {
  slug: string
  label: string
  description: string
  color: string
  gradient: string
  badgeColor: string
  articles: number
  posts: { node: Post }[]
}

export default function TopicHubPage({ topic, locale }: { topic: TopicData; locale: string }) {
  const Icon = iconMap[topic.slug] || Brain
  const prefix = locale === "pt" ? "" : `/${locale}`

  return (
    <div className="mx-auto max-w-5xl px-6 py-16 sm:py-24">
      <section className="mb-20">
        <div className="flex items-center gap-2 mb-4">
          <span className="status-pulse flex h-2 w-2 rounded-full" style={{ backgroundColor: topic.color }} />
          <span className="font-mono text-[11px] font-medium uppercase tracking-widest" style={{ color: topic.color }}>
            $ cd {topic.slug}/
          </span>
        </div>

        <div className="premium-card rounded-2xl p-8 md:p-12">
          <div className="flex flex-col md:flex-row md:items-center gap-6 md:gap-8">
            <div className="shrink-0 flex h-20 w-20 md:h-24 md:w-24 items-center justify-center rounded-2xl" style={{ background: `${topic.color}10`, border: `1px solid ${topic.color}20` }}>
              <Icon className="h-10 w-10 md:h-12 md:w-12" style={{ color: topic.color }} />
            </div>
            <div className="min-w-0 flex-1">
              <div className="flex items-center gap-3 mb-2">
                <h1 className="text-3xl md:text-5xl font-bold text-foreground">{topic.label}</h1>
                <span className="trust-badge shrink-0" style={{ borderColor: `${topic.color}30`, background: `${topic.color}08`, color: topic.color }}>
                  {topic.articles} {topic.articles === 1 ? "artigo" : "artigos"}
                </span>
              </div>
              <p className="text-base md:text-lg text-muted-foreground max-w-2xl leading-relaxed">{topic.description}</p>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="flex items-center gap-3 mb-10">
          <BookOpen className="w-4 h-4" style={{ color: topic.color }} />
          <span className="font-mono text-xs font-medium text-muted-foreground uppercase tracking-wider">
            $ ls -la {topic.slug}/ | {topic.articles} entries
          </span>
          <div className="h-px flex-1 bg-gradient-to-r from-border to-transparent" />
        </div>

        {topic.posts.length > 0 ? (
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            {topic.posts.map(({ node }, i) => (
              <div key={node.id} className="animate-fade-in" style={{ animationDelay: `${i * 80}ms` }}>
                <PostCard post={node} locale={locale} />
              </div>
            ))}
          </div>
        ) : (
          <div className="premium-card rounded-xl p-12 text-center">
            <p className="font-mono text-sm text-muted-foreground">Nenhum artigo publicado nesta categoria ainda.</p>
          </div>
        )}
      </section>
    </div>
  )
}
