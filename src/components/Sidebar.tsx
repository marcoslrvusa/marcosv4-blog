import Image from "next/image"
import Link from "next/link"
import { Brain, TrendingUp, Layers, Briefcase, ChevronRight, ArrowUpRight, BookOpen, Mail } from "lucide-react"
import NewsletterForm from "@/components/NewsletterForm"
import EbookCta from "@/components/EbookCta"
import type { Post } from "@/lib/types"

const topics = [
  { label: "Cases de IA", slug: "ia", icon: Brain, color: "text-v4-red", border: "border-v4-red/20" },
  { label: "Mercado", slug: "mercado", icon: TrendingUp, color: "text-accent-gold", border: "border-accent-gold/20" },
  { label: "AI Search", slug: "ai-search", icon: Layers, color: "text-accent-amber", border: "border-accent-amber/20" },
  { label: "Arquitetura AI", slug: "arquitetura", icon: Briefcase, color: "text-accent-gold", border: "border-accent-gold/20" },
]

export default function Sidebar({
  locale,
  topicCounts,
}: {
  locale: string
  topicCounts: { label: string; slug: string; count: number }[]
}) {
  return (
    <aside className="flex flex-col gap-6">
      {/* Author card */}
      <div className="premium-card rounded-xl p-5">
        <div className="flex items-center gap-3 mb-4">
          <Image
            src="/profile.png"
            alt="Marcos Luciano"
            width={44}
            height={44}
            className="rounded-full ring-2 ring-v4-red/20 object-cover shrink-0"
          />
          <div className="min-w-0">
            <p className="text-sm font-semibold text-foreground">Marcos Luciano</p>
            <p className="text-xs text-muted-foreground">AI Lead @ V4 Company</p>
          </div>
        </div>
        <Link
          href={`/${locale === "pt" ? "" : locale}/consulting`}
          className="flex items-center justify-between rounded-lg border border-v4-red/20 bg-v4-red/5 px-4 py-2.5 text-sm font-medium text-v4-red transition-all hover:bg-v4-red/10"
        >
          <span>Consultoria AI</span>
          <ArrowUpRight className="h-3.5 w-3.5" />
        </Link>
      </div>

      {/* Topics */}
      <div className="premium-card rounded-xl p-5">
        <div className="flex items-center gap-2 mb-3">
          <Mail className="h-3.5 w-3.5 text-v4-red" />
          <span className="font-mono text-[10px] font-medium uppercase tracking-widest text-muted-foreground">
            Tópicos
          </span>
        </div>
        <div className="flex flex-col gap-1">
          {topics.map((topic) => {
            const Icon = topic.icon
            const count = topicCounts.find((t) => t.slug === topic.slug)?.count || 0
            return (
              <Link
                key={topic.slug}
                href={`/topic/${topic.slug}`}
                className="group flex items-center gap-2.5 rounded-lg px-3 py-2 text-sm text-muted-foreground transition-all hover:bg-v4-red/5 hover:text-v4-red"
              >
                <Icon className="h-3.5 w-3.5 shrink-0" />
                <span className="flex-1">{topic.label}</span>
                <span className="font-mono text-[10px] text-muted-foreground">{count}</span>
                <ChevronRight className="h-3 w-3 opacity-0 transition-all group-hover:opacity-100 group-hover:text-v4-red" />
              </Link>
            )
          })}
        </div>
      </div>

      {/* Newsletter */}
      <NewsletterForm locale={locale} />

      {/* Ebook lead magnet */}
      <EbookCta locale={locale} />

      {/* LinkedIn */}
      <a
        href="https://linkedin.com/in/marcoslrvieira"
        target="_blank"
        rel="noopener noreferrer"
        className="group flex items-center gap-3 rounded-xl border border-v4-red/10 bg-v4-red/[0.02] px-5 py-4 transition-all hover:border-v4-red/20 hover:bg-v4-red/[0.04]"
      >
        <div className="rounded-lg border border-v4-red/20 bg-v4-red/5 p-2">
          <svg className="h-4 w-4 text-v4-red" fill="currentColor" viewBox="0 0 24 24">
            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
          </svg>
        </div>
        <div className="min-w-0 flex-1">
          <p className="text-sm font-medium text-foreground group-hover:text-v4-red">LinkedIn</p>
          <p className="font-mono text-[10px] text-muted-foreground">Acompanhe no LinkedIn</p>
        </div>
        <ChevronRight className="h-4 w-4 text-muted-foreground transition-all group-hover:translate-x-0.5 group-hover:text-v4-red" />
      </a>

      {/* Consulting sticky CTA */}
      <div className="premium-card rounded-xl p-5 text-center sticky bottom-6">
        <p className="text-xs font-semibold text-foreground mb-1">Quer levar AI a sério?</p>
        <p className="font-mono text-[10px] text-muted-foreground mb-3">
          Agende uma conversationa gratuita
        </p>
        <Link
          href={`/${locale === "pt" ? "" : locale}/consulting`}
          className="inline-flex items-center gap-2 rounded-lg bg-v4-red px-4 py-2 text-xs font-semibold text-background transition-all hover:bg-v4-red/90"
        >
          Falar com consultor
          <ArrowUpRight className="h-3 w-3" />
        </Link>
      </div>
    </aside>
  )
}
