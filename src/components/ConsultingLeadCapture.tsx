"use client"

import { useState, FormEvent } from "react"
import { useTranslations } from "next-intl"
import { Mail, User, Building2, MessageSquare, ArrowRight, Check, Loader2, Shield } from "lucide-react"

export default function ConsultingLeadCapture() {
  const t = useTranslations("consulting.ctaSection")
  const [formData, setFormData] = useState({ name: "", email: "", company: "", pain: "" })
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle")
  const [message, setMessage] = useState("")

  function handleChange(field: string, value: string) {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault()
    if (!formData.name || !formData.email) return
    setStatus("loading")
    try {
      const res = await fetch("/api/consulting", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      })
      const data = await res.json()
      if (res.ok) {
        setStatus("success")
        setMessage("Recebemos sua solicitação! Entraremos em contato em até 24h.")
        setFormData({ name: "", email: "", company: "", pain: "" })
      } else {
        setStatus("error")
        setMessage(data.error || "Algo deu errado. Tente novamente.")
      }
    } catch {
      setStatus("error")
      setMessage("Algo deu errado. Tente novamente.")
    }
  }

  return (
    <section id="lead-capture" className="relative px-4 py-24 max-w-2xl mx-auto">
      <div className="text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-sans font-bold text-[#e8e8f0] mb-4">{t("title")}</h2>
        <p className="text-[#8888a0] max-w-lg mx-auto">{t("description")}</p>
      </div>

      <div className="gradient-border rounded-xl p-6 md:p-8 bg-[#0c0c18]">
        {status === "success" ? (
          <div className="text-center py-8">
            <div className="w-16 h-16 rounded-full bg-[#e50914]/10 flex items-center justify-center mx-auto mb-4">
              <Check className="w-8 h-8 text-[#e50914]" />
            </div>
            <p className="text-lg font-semibold text-[#e50914]">{message}</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-xs font-mono text-[#6b6b80] uppercase tracking-wider mb-1.5">
                <User className="w-3 h-3 inline mr-1" /> Nome
              </label>
              <input type="text" required value={formData.name} onChange={e => handleChange("name", e.target.value)}
                placeholder="Seu nome" className="w-full rounded-lg border border-[#1a1a2e] bg-[#050508] px-4 py-3 text-sm text-[#e8e8f0] placeholder:text-[#6b6b80] focus:border-[#e50914]/50 focus:outline-none focus:ring-1 focus:ring-[#e50914]/20" />
            </div>
            <div>
              <label className="block text-xs font-mono text-[#6b6b80] uppercase tracking-wider mb-1.5">
                <Mail className="w-3 h-3 inline mr-1" /> Email
              </label>
              <input type="email" required value={formData.email} onChange={e => handleChange("email", e.target.value)}
                placeholder="seu@email.com" className="w-full rounded-lg border border-[#1a1a2e] bg-[#050508] px-4 py-3 text-sm text-[#e8e8f0] placeholder:text-[#6b6b80] focus:border-[#e50914]/50 focus:outline-none focus:ring-1 focus:ring-[#e50914]/20" />
            </div>
            <div>
              <label className="block text-xs font-mono text-[#6b6b80] uppercase tracking-wider mb-1.5">
                <Building2 className="w-3 h-3 inline mr-1" /> Empresa
              </label>
              <input type="text" value={formData.company} onChange={e => handleChange("company", e.target.value)}
                placeholder="Sua empresa (opcional)" className="w-full rounded-lg border border-[#1a1a2e] bg-[#050508] px-4 py-3 text-sm text-[#e8e8f0] placeholder:text-[#6b6b80] focus:border-[#e50914]/50 focus:outline-none focus:ring-1 focus:ring-[#e50914]/20" />
            </div>
            <div>
              <label className="block text-xs font-mono text-[#6b6b80] uppercase tracking-wider mb-1.5">
                <MessageSquare className="w-3 h-3 inline mr-1" /> Qual seu maior desafio com IA?
              </label>
              <textarea rows={3} value={formData.pain} onChange={e => handleChange("pain", e.target.value)}
                placeholder="Conte um pouco sobre o que sua empresa precisa..." className="w-full rounded-lg border border-[#1a1a2e] bg-[#050508] px-4 py-3 text-sm text-[#e8e8f0] placeholder:text-[#6b6b80] focus:border-[#e50914]/50 focus:outline-none focus:ring-1 focus:ring-[#e50914]/20" />
            </div>
            <button type="submit" disabled={status === "loading"}
              className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-[#e50914] px-6 py-4 text-base font-semibold text-[#050508] transition-all hover:bg-[#e50914]/90 disabled:opacity-60">
              {status === "loading" ? <Loader2 className="w-5 h-5 animate-spin" /> : <><ArrowRight className="w-5 h-5" /> {t("cta")}</>}
            </button>
            <div className="flex items-center gap-2 justify-center pt-2">
              <Shield className="w-3.5 h-3.5 text-[#6b6b80]" />
              <p className="text-xs text-[#6b6b80]">{t("guarantee")}</p>
            </div>
          </form>
        )}
        {status === "error" && <p className="text-sm text-[#ff3344] mt-4 text-center">{message}</p>}
      </div>
    </section>
  )
}
