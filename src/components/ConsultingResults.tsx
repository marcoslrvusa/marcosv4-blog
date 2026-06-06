"use client"

import { useTranslations } from "next-intl"
import { TrendingUp, DollarSign, BarChart4, ShieldCheck } from "lucide-react"

const icons = [TrendingUp, DollarSign, BarChart4, ShieldCheck]

export default function ConsultingResults() {
  const t = useTranslations("consulting.results")
  const items = t.raw("items") as { number: string; label: string; desc: string }[]

  return (
    <section className="relative px-4 py-24 max-w-6xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-sans font-bold text-[#e8e8f0] mb-4">{t("title")}</h2>
        <p className="text-[#8888a0] max-w-xl mx-auto">{t("subtitle")}</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {items.map((item, i) => {
          const Icon = icons[i] || TrendingUp
          return (
            <div key={i} className="gradient-border rounded-xl p-6 md:p-8 bg-[#0c0c18] animate-fade-in" style={{ animationDelay: `${i * 150}ms` }}>
              <div className="flex items-start gap-4">
                <div className="shrink-0 w-12 h-12 rounded-xl bg-[#1a1a2e] flex items-center justify-center">
                  <Icon className="w-6 h-6 text-[#00d4ff]" />
                </div>
                <div>
                  <div className="text-3xl md:text-4xl font-bold text-[#00ff88] font-sans mb-1">{item.number}</div>
                  <div className="text-sm font-semibold text-[#e8e8f0] mb-1">{item.label}</div>
                  <div className="text-xs text-[#6b6b80]">{item.desc}</div>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}
