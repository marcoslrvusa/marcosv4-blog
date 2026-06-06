"use client"

import { useTranslations } from "next-intl"
import { useLocale } from "next-intl"
import { TrendingUp, Building2, FileText, Clock, ArrowRight } from "lucide-react"

const statIcons = [TrendingUp, Building2, FileText, Clock] as const

export default function ConsultingHero() {
  const t = useTranslations("consulting.hero")
  const locale = useLocale()

  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 pt-24 pb-16 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#e50914]/5 via-transparent to-transparent pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto text-center">
        <span className="inline-block px-4 py-1.5 mb-6 text-xs font-mono tracking-wider uppercase text-[#e50914] border border-[#e50914]/30 rounded-full animate-fade-in">
          {t("tag")}
        </span>

        <div className="flex items-center justify-center gap-2 mb-4 animate-fade-in-delay-1">
          <span className="w-2 h-2 rounded-full bg-[#e50914] status-pulse" />
          <span className="text-xs font-mono text-[#6b6b80]">disponível para novos projetos</span>
        </div>

        <h1 className="text-4xl md:text-6xl lg:text-7xl font-sans font-bold leading-tight mb-6 animate-fade-in-delay-1">
          <span className="text-gradient">{t("title")}</span>
        </h1>

        <p className="max-w-2xl mx-auto text-lg md:text-xl text-[#8888a0] mb-10 animate-fade-in-delay-2">
          {t("subtitle")}
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12 animate-fade-in-delay-3">
          {(
            ["projects", "clients", "reports", "time"] as const
          ).map((key, i) => {
            const Icon = statIcons[i]
            const stat = t.raw("stats")[key] as { value: string; label: string }
            return (
              <div
                key={key}
                className="glass-card rounded-xl p-5 border border-[#1a1a2e] hover:border-[#e50914]/20 transition-all duration-300"
              >
                <Icon className="w-5 h-5 text-[#e50914] mb-3 mx-auto" />
                <div className="text-2xl md:text-3xl font-bold text-[#e8e8f0] font-sans">
                  {stat.value}
                </div>
                <div className="text-xs text-[#6b6b80] font-mono mt-1 uppercase tracking-wider">
                  {stat.label}
                </div>
              </div>
            )
          })}
        </div>

        <a
          href="#lead-capture"
          className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-[#e50914] text-[#050508] font-semibold text-lg hover:bg-[#e50914]/90 transition-all duration-300 animate-fade-in-delay-3 group"
        >
          {t("cta")}
          <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
        </a>
      </div>
    </section>
  )
}
