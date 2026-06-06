"use client"

import { useTranslations } from "next-intl"
import { Building2, Briefcase, User } from "lucide-react"

const icons = [Building2, Briefcase, User] as const

export default function ConsultingAudience() {
  const t = useTranslations("consulting.audience")
  const items = t.raw("items") as { type: string; title: string; desc: string }[]

  return (
    <section className="relative px-4 py-24 max-w-6xl mx-auto">
      <div className="text-center mb-16">
        <span className="inline-block px-3 py-1 mb-4 text-xs font-mono tracking-wider uppercase text-muted-foreground border border-border rounded-full">
          {t("tag")}
        </span>
        <h2 className="text-3xl md:text-4xl font-sans font-bold text-foreground mb-4">
          {t("title")}
        </h2>
        <p className="text-muted-foreground max-w-xl mx-auto">{t("description")}</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {items.map((item, i) => {
          const Icon = icons[i] || User
          return (
            <div
              key={i}
              className="group gradient-border rounded-xl p-6 md:p-8 bg-card transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${i * 150}ms` }}
            >
              <div className="w-14 h-14 rounded-full bg-v4-red/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Icon className="w-7 h-7 text-v4-red" />
              </div>

              <span className="inline-block px-3 py-1 mb-3 text-xs font-mono tracking-wider uppercase text-v4-red border border-v4-red/30 rounded-full">
                {item.type}
              </span>

              <h3 className="text-xl font-sans font-bold text-foreground mb-3">
                {item.title}
              </h3>

              <p className="text-sm text-muted-foreground leading-relaxed">
                {item.desc}
              </p>
            </div>
          )
        })}
      </div>
    </section>
  )
}
