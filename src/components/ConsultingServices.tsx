"use client"

import { useTranslations } from "next-intl"
import { Bot, Search, BarChart3, Cpu, ArrowRight } from "lucide-react"

const icons = [Bot, Search, BarChart3, Cpu] as const

export default function ConsultingServices() {
  const t = useTranslations("consulting.services")

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

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {(t.raw("items") as { icon: string; title: string; description: string; topics: string[] }[]).map(
          (item, i) => {
            const Icon = icons[i] || Bot
            return (
              <div
                key={i}
                className="group gradient-border rounded-xl p-6 bg-[#0c0c18] border border-[#1a1a2e] hover:border-transparent transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${i * 150}ms` }}
              >
                <div className="w-12 h-12 rounded-xl bg-[#1a1a2e] flex items-center justify-center mb-5 group-hover:bg-[#8b5cf6]/10 transition-colors duration-300">
                  <Icon className="w-6 h-6 text-[#8b5cf6]" />
                </div>

                <h3 className="text-xl font-sans font-semibold text-[#e8e8f0] mb-3">
                  {item.title}
                </h3>

                <p className="text-sm text-[#8888a0] leading-relaxed mb-4">
                  {item.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-5">
                  {item.topics.map((topic, j) => (
                    <span
                      key={j}
                      className="px-2.5 py-1 text-xs font-mono rounded-full bg-[#1a1a2e] text-[#6b6b80] border border-[#1a1a2e]"
                    >
                      {topic}
                    </span>
                  ))}
                </div>

                <a
                  href="#lead-capture"
                  className="inline-flex items-center gap-1.5 text-sm font-medium text-[#e50914] hover:text-[#e50914]/80 transition-colors"
                >
                  Saber Mais
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            )
          }
        )}
      </div>
    </section>
  )
}
