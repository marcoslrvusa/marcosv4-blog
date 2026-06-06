"use client"

import { useTranslations } from "next-intl"
import { AlertTriangle, Search, Zap, Users, TrendingDown, ArrowRight } from "lucide-react"

const icons = [TrendingDown, Search, AlertTriangle, Users] as const

export default function ConsultingProblem() {
  const t = useTranslations("consulting.problem")

  return (
    <section className="relative px-4 py-24 max-w-6xl mx-auto">
      <div className="absolute inset-0 bg-gradient-to-b from-v4-red/[0.01] via-transparent to-transparent pointer-events-none" />

      <div className="relative z-10">
        <div className="text-center mb-6">
          <span className="inline-block px-3 py-1 mb-4 text-xs font-mono tracking-wider uppercase text-muted-foreground border border-border rounded-full">
            {t("tag")}
          </span>
          <h2 className="text-3xl md:text-5xl font-sans font-bold text-foreground mb-4 leading-tight">
            {t("title")}
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            {t("description")}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-12">
          {(t.raw("points") as { title: string; description: string }[]).map(
            (point, i) => {
              const Icon = icons[i] || AlertTriangle
              return (
                <div
                  key={i}
                  className="glass-card rounded-xl p-6 hover:shadow-[0_0_30px_-5px_rgba(229,9,20,0.15)] transition-all duration-300 group"
                >
                  <div className="flex items-start gap-4">
                    <div className="shrink-0 w-10 h-10 rounded-lg bg-v4-red/10 flex items-center justify-center group-hover:bg-v4-red/20 transition-colors duration-300">
                      <Icon className="w-5 h-5 text-v4-red" />
                    </div>
                    <div>
                      <h3 className="text-lg font-sans font-semibold text-foreground mb-2">
                        {point.title}
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {point.description}
                      </p>
                    </div>
                  </div>
                </div>
              )
            }
          )}
        </div>

        <div className="text-center mt-10">
          <a
            href="#lead-capture"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-v4-red/30 text-v4-red font-medium text-sm hover:bg-v4-red/10 transition-all duration-300 group"
          >
            {t("cta")}
            <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
          </a>
        </div>
      </div>
    </section>
  )
}
