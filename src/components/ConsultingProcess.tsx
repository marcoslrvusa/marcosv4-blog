"use client"

import { useTranslations } from "next-intl"
import { CheckCircle2 } from "lucide-react"

export default function ConsultingProcess() {
  const t = useTranslations("consulting.process")
  const steps = t.raw("steps") as { step: string; title: string; desc: string }[]

  return (
    <section className="relative px-4 py-24 max-w-4xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-sans font-bold text-[#e8e8f0] mb-4">
          {t("title")}
        </h2>
        <p className="text-[#8888a0] max-w-xl mx-auto">{t("subtitle")}</p>
      </div>
      <div className="relative">
        {/* Vertical line */}
        <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-[#e50914] via-[#00d4ff] to-transparent hidden md:block" />
        <div className="space-y-12">
          {steps.map((step, i) => (
            <div key={i} className="relative flex items-start gap-6 md:gap-10 group">
              <div className="hidden md:flex shrink-0 w-16 h-16 rounded-full bg-[#0c0c18] border border-[#1a1a2e] items-center justify-center z-10 group-hover:border-[#e50914]/30 transition-colors">
                <span className="font-mono text-lg font-bold text-[#e50914]">{step.step}</span>
              </div>
              <div className="glass-card rounded-xl p-6 md:p-8 border border-[#1a1a2e] flex-1 group-hover:border-[#e50914]/20 transition-all duration-300">
                <div className="flex items-center gap-3 mb-3">
                  <CheckCircle2 className="w-5 h-5 text-[#e50914]" />
                  <h3 className="text-xl font-sans font-semibold text-[#e8e8f0]">{step.title}</h3>
                </div>
                <p className="text-sm text-[#8888a0] leading-relaxed">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
