import { ExternalLink, Server, Sparkles } from "lucide-react"

interface HostingerBannerProps {
  variant?: "sidebar" | "inline" | "hero" | "post"
  locale?: string
}

const links = {
  pt: "https://hostinger.com/ir/v4company",
  en: "https://hostinger.com/ir/v4company",
  es: "https://hostinger.com/ir/v4company",
}

const labels = {
  pt: {
    title: "Hospedagem VPS com IA",
    desc: "Rode Ollama, Open WebUI e OpenClaw em servidores AMD EPYC com NVMe. IA integrada de gerenciamento.",
    cta: "Conhecer Hostinger",
    tag: "Recomendado por Marcos Luciano",
  },
  en: {
    title: "AI-Ready VPS Hosting",
    desc: "Run Ollama, Open WebUI, and OpenClaw on AMD EPYC servers with NVMe. AI-powered management included.",
    cta: "Visit Hostinger",
    tag: "Recommended by Marcos Luciano",
  },
  es: {
    title: "VPS Hosting para IA",
    desc: "Ejecuta Ollama, Open WebUI y OpenClaw en servidores AMD EPYC con NVMe. Gestión con IA incluida.",
    cta: "Conocer Hostinger",
    tag: "Recomendado por Marcos Luciano",
  },
}

export default function HostingerBanner({ variant = "sidebar", locale = "pt" }: HostingerBannerProps) {
  const l = labels[locale as keyof typeof labels] || labels.pt
  const href = links[locale as keyof typeof links] || links.pt

  if (variant === "sidebar") {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer sponsored"
        className="group flex flex-col gap-3 rounded-xl border border-v4-red/10 bg-gradient-to-br from-v4-red/[0.03] to-transparent p-5 transition-all hover:border-v4-red/20 hover:bg-v4-red/[0.06]"
      >
        <div className="flex items-center gap-3">
          <div className="rounded-lg border border-v4-red/20 bg-v4-red/5 p-2">
            <Server className="h-4 w-4 text-v4-red" />
          </div>
          <div className="min-w-0 flex-1">
            <p className="text-xs font-semibold text-foreground group-hover:text-v4-red transition-colors">{l.title}</p>
            <p className="font-mono text-[9px] text-muted-foreground uppercase tracking-wider mt-0.5">{l.tag}</p>
          </div>
          <ExternalLink className="h-3.5 w-3.5 shrink-0 text-muted-foreground transition-all group-hover:translate-x-0.5 group-hover:text-v4-red" />
        </div>
        <p className="text-[11px] text-muted-foreground/80 leading-relaxed">{l.desc}</p>
        <span className="inline-flex items-center justify-center gap-1.5 rounded-lg bg-v4-red/10 px-3 py-1.5 text-[10px] font-semibold text-v4-red transition-all group-hover:bg-v4-red group-hover:text-background w-full">
          {l.cta}
          <Sparkles className="h-3 w-3" />
        </span>
      </a>
    )
  }

  if (variant === "inline") {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer sponsored"
        className="group flex items-center gap-4 rounded-xl border border-border bg-card/50 p-4 transition-all hover:border-v4-red/20 hover:bg-v4-red/[0.03]"
      >
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-v4-red/10">
          <Server className="h-5 w-5 text-v4-red" />
        </div>
        <div className="min-w-0 flex-1">
          <p className="text-sm font-medium text-foreground group-hover:text-v4-red transition-colors">{l.title}</p>
          <p className="text-xs text-muted-foreground">{l.desc}</p>
        </div>
        <span className="shrink-0 rounded-lg bg-v4-red px-3 py-1.5 text-[10px] font-semibold text-background transition-all group-hover:bg-v4-red/90">
          {l.cta}
        </span>
      </a>
    )
  }

  if (variant === "hero") {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer sponsored"
        className="group flex items-center justify-between gap-4 rounded-xl border border-v4-red/10 bg-gradient-to-r from-v4-red/[0.04] to-transparent p-5 transition-all hover:from-v4-red/[0.08] hover:border-v4-red/20"
      >
        <div className="flex items-center gap-4">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-v4-red/10">
            <Server className="h-6 w-6 text-v4-red" />
          </div>
          <div>
            <p className="text-sm font-semibold text-foreground">{l.title}</p>
            <p className="text-xs text-muted-foreground">{l.desc}</p>
            <p className="font-mono text-[9px] text-muted-foreground/60 uppercase tracking-wider mt-0.5">{l.tag}</p>
          </div>
        </div>
        <span className="shrink-0 inline-flex items-center gap-1.5 rounded-lg bg-v4-red px-4 py-2 text-xs font-semibold text-background transition-all group-hover:bg-v4-red/90">
          {l.cta}
          <Sparkles className="h-3.5 w-3.5" />
        </span>
      </a>
    )
  }

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer sponsored"
      className="group flex items-center gap-3 rounded-xl border border-border bg-card/50 p-4 transition-all hover:border-v4-red/20 hover:bg-v4-red/[0.03]"
    >
      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-v4-red/10">
        <Server className="h-4 w-4 text-v4-red" />
      </div>
      <div className="min-w-0 flex-1">
        <p className="text-xs font-medium text-foreground group-hover:text-v4-red transition-colors">{l.title}</p>
        <p className="font-mono text-[9px] text-muted-foreground uppercase tracking-wider">{l.tag}</p>
      </div>
      <span className="shrink-0 rounded-lg bg-v4-red px-2.5 py-1 text-[9px] font-semibold text-background">
        {l.cta}
      </span>
    </a>
  )
}