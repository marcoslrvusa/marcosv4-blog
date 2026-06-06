"use client"

import { useTranslations } from "next-intl"
import { ArrowRight, Sparkles, Shield } from "lucide-react"

export default function ConsultingHero() {
  const t = useTranslations("consulting.hero")
  const ctaT = useTranslations("consulting.ctaSection")

  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 pt-24 pb-16 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-v4-red/5 via-transparent to-transparent pointer-events-none" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-v4-red/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <span className="inline-block px-4 py-1.5 mb-6 text-xs font-mono tracking-wider uppercase text-v4-red border border-v4-red/30 rounded-full animate-fade-in">
          {t("tag")}
        </span>

        <div className="flex items-center justify-center gap-2 mb-6 animate-fade-in-delay-1">
          <span className="w-2 h-2 rounded-full bg-v4-red status-pulse" />
          <span className="text-xs font-mono text-muted-foreground">{t("available")}</span>
        </div>

        <h1 className="text-4xl md:text-6xl lg:text-7xl font-sans font-bold leading-tight mb-6 animate-fade-in-delay-1">
          <span className="text-gradient">{t("title")}</span>
        </h1>

        <p className="max-w-2xl mx-auto text-lg md:text-xl text-muted-foreground mb-8 animate-fade-in-delay-2">
          {t("subtitle")}
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10 animate-fade-in-delay-3">
          <a
            href="#lead-capture"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-v4-red text-background font-semibold text-lg hover:bg-v4-red/90 transition-all duration-300 group shadow-lg shadow-v4-red/25"
          >
            {t("cta")}
            <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
          </a>
          <span className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-mono text-muted-foreground border border-border rounded-full">
            <Shield className="w-3.5 h-3.5 text-accent-gold" />
            {ctaT("guarantee")}
          </span>
        </div>

        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-card border border-border animate-fade-in-delay-3">
          <Sparkles className="w-4 h-4 text-accent-gold" />
          <span className="text-xs font-mono text-muted-foreground">
            {t("urgency")}
          </span>
        </div>
      </div>
    </section>
  )
}
