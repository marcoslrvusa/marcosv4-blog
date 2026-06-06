"use client"

import { useTranslations } from "next-intl"
import { AlertTriangle, Search, Zap, Users } from "lucide-react"

const icons = [AlertTriangle, Search, Zap, Users] as const

export default function ConsultingProblem() {
  const t = useTranslations("consulting.problem")

  return (
    <section className="relative px-4 py-24 max-w-6xl mx-auto">
      <div className="text-center mb-16">
        <span className="inline-block px-3 py-1 mb-4 text-xs font-mono tracking-wider uppercase text-[#8888a0] border border-[#1a1a2e] rounded-full">
          {t("tag")}
        </span>
        <h2 className="text-3xl md:text-4xl font-sans font-bold text-[#e8e8f0] mb-4">
          {t("title")}
        </h2>
        <p className="text-[#8888a0] max-w-xl mx-auto">{t("description")}</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {(t.raw("points") as { title: string; description: string }[]).map(
          (point, i) => {
            const Icon = icons[i] || AlertTriangle
            return (
              <div
                key={i}
                className="glass-card rounded-xl p-6 border border-[#1a1a2e] hover:border-[#00d4ff]/30 hover:shadow-[0_0_30px_-5px_rgba(0,212,255,0.15)] transition-all duration-300 group"
              >
                <div className="flex items-start gap-4">
                  <div className="shrink-0 w-10 h-10 rounded-lg bg-[#1a1a2e] flex items-center justify-center group-hover:bg-[#00d4ff]/10 transition-colors duration-300">
                    <Icon className="w-5 h-5 text-[#00d4ff]" />
                  </div>
                  <div>
                    <h3 className="text-lg font-sans font-semibold text-[#e8e8f0] mb-2">
                      {point.title}
                    </h3>
                    <p className="text-sm text-[#8888a0] leading-relaxed">
                      {point.description}
                    </p>
                  </div>
                </div>
              </div>
            )
          }
        )}
      </div>
    </section>
  )
}
