"use client"

import { useTranslations } from "next-intl"
import PostCard from "@/components/PostCard"
import Link from "next/link"
import {
  Brain, TrendingUp, Layers, Briefcase, ArrowRight,
  BookOpen, ChevronRight, Sparkles, Award, Star
} from "lucide-react"
import type { Post } from "@/lib/types"

interface TopicData {
  slug: string
  label: string
  description: string
  icon: typeof Brain
  color: string
  gradient: string
  badgeColor: string
  articles: number
  posts: { node: Post }[]
}

export default function TopicHubPage({ topic, locale }: { topic: TopicData; locale: string }) {
  const Icon = topic.icon
  const t = useTranslations("home")
  const prefix = locale === "pt" ? "" : `/${locale}`

  return (
    <div className="mx-auto max-w-5xl px-6 py-16 sm:py-24">
      {/* Hero */}
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
                <h1 className="text-3xl md:text-5xl font-bold text-[#e8e8f0]">{topic.label}</h1>
                <span className={`trust-badge shrink-0`} style={{ borderColor: `${topic.color}30`, background: `${topic.color}08`, color: topic.color }}>
                  {topic.articles} {topic.articles === 1 ? "artigo" : "artigos"}
                </span>
              </div>
              <p className="text-base md:text-lg text-[#8888a0] max-w-2xl leading-relaxed">{topic.description}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Articles Grid */}
      <section>
        <div className="flex items-center gap-3 mb-10">
          <BookOpen className="w-4 h-4" style={{ color: topic.color }} />
          <span className="font-mono text-xs font-medium text-[#6b6b80] uppercase tracking-wider">
            $ ls -la {topic.slug}/ | {topic.articles} entries
          </span>
          <div className="h-px flex-1 bg-gradient-to-r from-[#1a1a2e] to-transparent" />
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
            <p className="font-mono text-sm text-[#6b6b80]">Nenhum artigo publicado nesta categoria ainda.</p>
          </div>
        )}
      </section>
    </div>
  )
}
