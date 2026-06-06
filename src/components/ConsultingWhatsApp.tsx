"use client"

import { useTranslations } from "next-intl"
import { MessageCircle, ArrowRight } from "lucide-react"

export default function ConsultingWhatsApp() {
  const t = useTranslations("consulting.whatsapp")

  const whatsappNumber = t("number")
  const whatsappText = encodeURIComponent(t("message"))
  const whatsappUrl = `https://wa.me/${whatsappNumber.replace(/\D/g, "")}?text=${whatsappText}`

  return (
    <section className="relative px-4 py-24 max-w-3xl mx-auto">
      <div className="text-center mb-10">
        <span className="inline-block px-3 py-1 mb-4 text-xs font-mono tracking-wider uppercase text-muted-foreground border border-border rounded-full">
          {t("tag")}
        </span>
      </div>

      <div className="gradient-border rounded-2xl p-8 md:p-12 bg-card text-center">
        <div className="w-16 h-16 rounded-full bg-v4-red/10 flex items-center justify-center mx-auto mb-6">
          <MessageCircle className="w-8 h-8 text-v4-red" />
        </div>

        <h2 className="text-2xl md:text-3xl font-sans font-bold text-foreground mb-4">
          {t("title")}
        </h2>

        <p className="text-muted-foreground max-w-md mx-auto mb-8">
          {t("description")}
        </p>

        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-v4-red text-background font-semibold text-lg hover:bg-v4-red/90 transition-all duration-300 group"
        >
          {t("cta")}
          <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
        </a>

        <p className="text-xs text-muted-foreground mt-4 font-mono">
          {whatsappNumber}
        </p>
      </div>
    </section>
  )
}
