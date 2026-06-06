"use client"

import { useEffect, useState } from "react"
import { useTranslations } from "next-intl"
import { ArrowRight } from "lucide-react"

export default function ConsultingStickyCta() {
  const t = useTranslations("consulting.stickyCta")
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => setVisible(window.scrollY > 700)
    handleScroll()
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className={`fixed bottom-0 left-0 right-0 z-50 border-t border-[#1a1a2e] bg-[#050508]/95 backdrop-blur-xl transition-all duration-500 ${visible ? "translate-y-0 opacity-100" : "translate-y-full opacity-0"}`}>
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between gap-4">
        <span className="text-sm text-[#e8e8f0] hidden sm:block">{t("title")}</span>
        <a href="#lead-capture" onClick={(e) => { e.preventDefault(); document.getElementById("lead-capture")?.scrollIntoView({ behavior: "smooth" }) }}
          className="inline-flex items-center gap-2 rounded-xl bg-[#e50914] px-5 py-2.5 text-sm font-semibold text-[#050508] hover:bg-[#e50914]/90 transition-all shrink-0">
          {t("cta")} <ArrowRight className="w-4 h-4" />
        </a>
      </div>
    </div>
  )
}
