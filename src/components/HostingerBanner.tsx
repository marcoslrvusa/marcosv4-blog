import { ExternalLink, Server, Sparkles, Zap, Tag } from "lucide-react"
import Image from "next/image"

interface HostingerBannerProps {
  variant?: "sidebar" | "inline" | "hero" | "post"
  locale?: string
}

const AFFILIATE_URL = "https://www.hostinger.com/br/hospedagem-n8n?REFERRALCODE=MARCOSLUCIANO20"
const DISCOUNT_CODE = "MARCOSLUCIANO20"

const labels = {
  pt: {
    title: "N8N + VPS Hostinger: de R$ 29/mês",
    desc: "Rode n8n, Ollama, Open WebUI e OpenClaw em servidores AMD EPYC com NVMe. Setup em 5 minutos. Cupom exclusivo.",
    cta: "ATIVAR CUPOM 20% OFF",
    tag: "ECONOMIZE 20% — CÓDIGO EXCLUSIVO",
    urgency: "Oferta por tempo limitado",
    discount: "20% OFF",
  },
  en: {
    title: "N8N + VPS Hostinger: from $9.99/mo",
    desc: "Run n8n, Ollama, Open WebUI and OpenClaw on AMD EPYC servers with NVMe. 5-minute setup. Exclusive coupon.",
    cta: "CLAIM 20% OFF",
    tag: "SAVE 20% — EXCLUSIVE CODE",
    urgency: "Limited time offer",
    discount: "20% OFF",
  },
  es: {
    title: "N8N + VPS Hostinger: desde R$ 29/mes",
    desc: "Ejecuta n8n, Ollama, Open WebUI y OpenClaw en servidores AMD EPYC con NVMe. Setup en 5 minutos. Cupón exclusivo.",
    cta: "ACTIVAR CUPÓN 20% OFF",
    tag: "AHORRA 20% — CÓDIGO EXCLUSIVO",
    urgency: "Oferta por tiempo limitado",
    discount: "20% OFF",
  },
}

export default function HostingerBanner({ variant = "sidebar", locale = "pt" }: HostingerBannerProps) {
  const l = labels[locale as keyof typeof labels] || labels.pt

  if (variant === "sidebar") {
    return (
      <a
        href={AFFILIATE_URL}
        target="_blank"
        rel="noopener noreferrer sponsored"
        className="group flex flex-col gap-3 rounded-xl border-2 border-v4-red/20 bg-gradient-to-br from-v4-red/[0.05] to-v4-red/[0.01] p-5 transition-all hover:border-v4-red/40 hover:shadow-[0_0_20px_-5px_rgba(229,9,20,0.15)]"
      >
        <div className="flex items-center gap-3">
          <div className="relative h-10 w-10 shrink-0 overflow-hidden rounded-lg border border-v4-red/20">
            <Image
              src="https://guiadohost.com/wp-content/uploads/2025/09/n8nhostinger.png?w=128"
              alt="Hostinger + n8n"
              fill
              className="object-cover"
            />
          </div>
          <div className="min-w-0 flex-1">
            <p className="text-xs font-bold text-foreground group-hover:text-v4-red transition-colors leading-tight">{l.title}</p>
            <div className="flex items-center gap-1.5 mt-0.5">
              <Tag className="h-2.5 w-2.5 text-accent-gold" />
              <span className="font-mono text-[9px] font-bold text-accent-gold uppercase tracking-wider">{DISCOUNT_CODE}</span>
            </div>
          </div>
          <div className="shrink-0 rounded-md bg-accent-gold px-2 py-1">
            <span className="font-mono text-[9px] font-bold text-background">{l.discount}</span>
          </div>
        </div>
        <p className="text-[11px] text-muted-foreground/80 leading-relaxed">{l.desc}</p>
        <div className="flex items-center gap-2">
          <span className="inline-flex items-center justify-center gap-1.5 rounded-lg bg-v4-red px-3 py-2 text-[10px] font-bold text-background transition-all hover:bg-v4-red/90 flex-1">
            {l.cta}
            <Zap className="h-3 w-3" />
          </span>
        </div>
        <p className="font-mono text-[8px] text-muted-foreground/40 text-center uppercase tracking-widest">{l.urgency}</p>
      </a>
    )
  }

  if (variant === "inline") {
    return (
      <a
        href={AFFILIATE_URL}
        target="_blank"
        rel="noopener noreferrer sponsored"
        className="group flex items-center gap-4 rounded-xl border border-v4-red/20 bg-gradient-to-r from-v4-red/[0.04] to-transparent p-4 transition-all hover:border-v4-red/30 hover:bg-v4-red/[0.06]"
      >
        <div className="relative h-12 w-12 shrink-0 overflow-hidden rounded-lg border border-v4-red/20">
          <Image
            src="https://guiadohost.com/wp-content/uploads/2025/09/n8nhostinger.png?w=128"
            alt="Hostinger + n8n"
            fill
            className="object-cover"
          />
        </div>
        <div className="min-w-0 flex-1">
          <div className="flex items-center gap-2 mb-0.5">
            <p className="text-sm font-semibold text-foreground group-hover:text-v4-red transition-colors">{l.title}</p>
            <span className="rounded bg-accent-gold/20 px-1.5 py-0.5 font-mono text-[9px] font-bold text-accent-gold">{DISCOUNT_CODE}</span>
          </div>
          <p className="text-xs text-muted-foreground">{l.desc}</p>
        </div>
        <span className="shrink-0 inline-flex items-center gap-1.5 rounded-lg bg-v4-red px-3 py-2 text-[10px] font-bold text-background transition-all hover:bg-v4-red/90">
          {l.cta}
        </span>
      </a>
    )
  }

  if (variant === "hero") {
    return (
      <a
        href={AFFILIATE_URL}
        target="_blank"
        rel="noopener noreferrer sponsored"
        className="group relative flex items-center justify-between gap-4 overflow-hidden rounded-xl border border-v4-red/20 bg-gradient-to-r from-v4-red/[0.06] via-v4-red/[0.02] to-transparent p-6 transition-all hover:from-v4-red/[0.1] hover:border-v4-red/30"
      >
        <div className="absolute right-0 top-0 h-full w-1/3 opacity-[0.04]">
          <div className="h-full w-full bg-gradient-to-l from-v4-red to-transparent" />
        </div>
        <div className="flex items-center gap-5">
          <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-xl border border-v4-red/20">
            <Image
              src="https://guiadohost.com/wp-content/uploads/2025/09/n8nhostinger.png?w=256"
              alt="Hostinger + n8n"
              fill
              className="object-cover"
            />
          </div>
          <div>
            <div className="flex items-center gap-2 mb-1">
              <p className="text-base font-bold text-foreground">{l.title}</p>
              <span className="rounded-md bg-accent-gold px-2 py-0.5 font-mono text-[9px] font-bold text-background">{l.discount}</span>
            </div>
            <p className="text-sm text-muted-foreground">{l.desc}</p>
            <p className="font-mono text-[10px] text-accent-gold font-semibold mt-1">Cupom: {DISCOUNT_CODE}</p>
          </div>
        </div>
        <span className="shrink-0 inline-flex items-center gap-1.5 rounded-lg bg-v4-red px-5 py-3 text-xs font-bold text-background transition-all hover:bg-v4-red/90 shadow-lg shadow-v4-red/20">
          {l.cta}
          <Zap className="h-4 w-4" />
        </span>
      </a>
    )
  }

  return (
    <a
      href={AFFILIATE_URL}
      target="_blank"
      rel="noopener noreferrer sponsored"
      className="group flex items-center gap-4 rounded-xl border border-v4-red/20 bg-gradient-to-r from-v4-red/[0.03] to-transparent p-4 transition-all hover:border-v4-red/30 hover:shadow-[0_0_15px_-3px_rgba(229,9,20,0.1)]"
    >
      <div className="relative h-10 w-10 shrink-0 overflow-hidden rounded-lg border border-v4-red/20">
        <Image
          src="https://guiadohost.com/wp-content/uploads/2025/09/n8nhostinger.png?w=128"
          alt="Hostinger + n8n"
          fill
          className="object-cover"
        />
      </div>
      <div className="min-w-0 flex-1">
        <div className="flex items-center gap-2">
          <p className="text-xs font-semibold text-foreground group-hover:text-v4-red transition-colors">{l.title}</p>
          <span className="rounded bg-accent-gold/20 px-1.5 py-0.5 font-mono text-[8px] font-bold text-accent-gold">{DISCOUNT_CODE}</span>
        </div>
        <p className="font-mono text-[9px] text-muted-foreground">{l.tag}</p>
      </div>
      <span className="shrink-0 rounded-lg bg-v4-red px-2.5 py-1.5 text-[9px] font-bold text-background">
        {l.cta}
      </span>
    </a>
  )
}
