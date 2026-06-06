"use client"

import { useState } from "react"
import { useTranslations } from "next-intl"
import { ChevronDown } from "lucide-react"

export default function ConsultingFaq() {
  const t = useTranslations("consulting.faq")
  const items = t.raw("items") as { q: string; a: string }[]
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": items.map((item) => ({
      "@type": "Question",
      "name": item.q,
      "acceptedAnswer": { "@type": "Answer", "text": item.a }
    }))
  }

  return (
    <section className="relative px-4 py-24 max-w-3xl mx-auto">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <div className="text-center mb-12">
        <h2 className="text-3xl font-sans font-bold text-foreground mb-4">{t("title")}</h2>
      </div>
      <div className="space-y-3">
        {items.map((item, i) => (
          <div key={i} className="glass-card rounded-xl overflow-hidden transition-all duration-300">
            <button onClick={() => setOpenIndex(openIndex === i ? null : i)}
              className="w-full flex items-center justify-between px-6 py-4 text-left transition-colors hover:bg-card-hover">
              <span className="text-sm font-medium text-foreground pr-4">{item.q}</span>
              <ChevronDown className={`w-4 h-4 text-muted-foreground shrink-0 transition-transform duration-300 ${openIndex === i ? "rotate-180" : ""}`} />
            </button>
            <div className={`overflow-hidden transition-all duration-300 ${openIndex === i ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}>
              <div className="px-6 pb-4">
                <p className="text-sm text-muted-foreground leading-relaxed">{item.a}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
