"use client"

import { useState } from "react"
import { useTranslations } from "next-intl"
import PostCard from "@/components/PostCard"
import {
  Brain, TrendingUp, Layers, Briefcase,
  BookOpen, Clock, Filter
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
  const [filter, setFilter] = useState<string>("all")

  const tags = [...new Set(topic.posts.flatMap(({ node }) => node.tags?.map(t => t.slug) || []))]
  const subTags = tags.filter(t => t !== topic.slug).slice(0, 6)

  const filteredPosts = filter === "all"
    ? topic.posts
    : topic.posts.filter(({ node }) =>
        node.tags?.some(t => t.slug.includes(filter))
      )

  const totalMinutes = filteredPosts.reduce((acc, { node }) => {
    const mins = Math.max(1, Math.ceil((node.content?.markdown?.length || 1000) / 1000))
    return acc + mins
  }, 0)

  return (
    <div className="mx-auto max-w-6xl">
      {/* Hero */}
      <section className="mb-12">
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

          {/* Stats row */}
          <div className="mt-8 grid grid-cols-3 gap-3 border-t border-border/50 pt-6">
            <div className="text-center">
              <p className="font-mono text-lg font-bold text-foreground">{topic.articles}</p>
              <p className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground">artigos</p>
            </div>
            <div className="text-center">
              <p className="font-mono text-lg font-bold text-foreground">{totalMinutes}</p>
              <p className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground">min leitura</p>
            </div>
            <div className="text-center">
              <p className="font-mono text-lg font-bold text-foreground">{subTags.length}</p>
              <p className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground">subtópicos</p>
            </div>
          </div>
        </div>
      </section>

      {/* Filter bar */}
      {subTags.length > 0 && (
        <div className="mb-8 flex items-center gap-2 overflow-x-auto pb-2">
          <Filter className="w-4 h-4 text-muted-foreground shrink-0" />
          <button
            onClick={() => setFilter("all")}
            className={`whitespace-nowrap rounded-lg px-3 py-1.5 font-mono text-xs transition-colors ${
              filter === "all"
                ? "bg-v4-red/10 text-v4-red border border-v4-red/20"
                : "text-muted-foreground border border-border hover:border-v4-red/20 hover:text-v4-red"
            }`}
          >
            Todos
          </button>
          {subTags.map(tag => (
            <button
              key={tag}
              onClick={() => setFilter(tag)}
              className={`whitespace-nowrap rounded-lg px-3 py-1.5 font-mono text-xs transition-colors ${
                filter === tag
                  ? "bg-v4-red/10 text-v4-red border border-v4-red/20"
                  : "text-muted-foreground border border-border hover:border-v4-red/20 hover:text-v4-red"
              }`}
            >
              {tag}
            </button>
          ))}
        </div>
      )}

      {/* Posts grid */}
      <section>
        <div className="flex items-center gap-3 mb-8">
          <BookOpen className="w-4 h-4" style={{ color: topic.color }} />
          <span className="font-mono text-xs font-medium text-muted-foreground uppercase tracking-wider">
            $ ls -la {topic.slug}/ | {filteredPosts.length} entries
          </span>
          <div className="h-px flex-1 bg-gradient-to-r from-border to-transparent" />
        </div>

        {filteredPosts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {filteredPosts.map(({ node }, i) => (
              <div key={node.id} className="animate-fade-in" style={{ animationDelay: `${i * 60}ms` }}>
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
