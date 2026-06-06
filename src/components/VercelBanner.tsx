import { ExternalLink, Code2, Sparkles, ArrowUpRight } from "lucide-react"
import Image from "next/image"

interface VercelBannerProps {
  variant?: "sidebar" | "inline" | "hero"
  locale?: string
}

const VERCEL_REF = "https://v0.app/ref/D0O49I"

const labels = {
  pt: {
    title: "Deploy em segundos com Vercel",
    desc: "Frontend cloud que developers amam. Deploy automático, edge functions, AI SDK. Comece grátis.",
    cta: "Explorar Vercel",
    tag: "Plataforma dos builders",
    elite: "Para quem constrói o futuro",
  },
  en: {
    title: "Ship faster with Vercel",
    desc: "The frontend cloud. Auto-deploy, edge functions, AI SDK. Start free.",
    cta: "Explore Vercel",
    tag: "The platform for builders",
    elite: "For those building the future",
  },
  es: {
    title: "Deploy en segundos con Vercel",
    desc: "Frontend cloud que los developers aman. Deploy automático, edge functions, AI SDK. Empieza gratis.",
    cta: "Explorar Vercel",
    tag: "Plataforma de los builders",
    elite: "Para quienes construyen el futuro",
  },
}

export default function VercelBanner({ variant = "sidebar", locale = "pt" }: VercelBannerProps) {
  const l = labels[locale as keyof typeof labels] || labels.pt

  if (variant === "sidebar") {
    return (
      <a
        href={VERCEL_REF}
        target="_blank"
        rel="noopener noreferrer sponsored"
        className="group flex flex-col gap-3 rounded-xl border border-border/80 bg-gradient-to-br from-card/80 to-card/30 p-5 transition-all hover:border-v4-red/15 hover:bg-card/90"
      >
        <div className="flex items-center gap-3">
          <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-border/60 bg-background/50">
            <svg viewBox="0 0 24 24" className="h-5 w-5 text-foreground" fill="currentColor">
              <path d="M22.27 19.385H1.73L12 4.615l10.27 14.77zM3.73 18.615H20.27L12 6.385l-8.27 12.23z" />
            </svg>
          </div>
          <div className="min-w-0 flex-1">
            <p className="text-xs font-medium text-foreground group-hover:text-v4-red transition-colors">{l.title}</p>
            <p className="font-mono text-[9px] text-muted-foreground uppercase tracking-wider mt-0.5">{l.tag}</p>
          </div>
          <ArrowUpRight className="h-3.5 w-3.5 shrink-0 text-muted-foreground transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-v4-red" />
        </div>
        <p className="text-[11px] text-muted-foreground/70 leading-relaxed">{l.desc}</p>
        <span className="inline-flex items-center justify-center gap-1.5 rounded-lg border border-border/60 bg-background/50 px-3 py-1.5 text-[10px] font-medium text-foreground transition-all group-hover:border-v4-red/20 group-hover:text-v4-red w-full">
          {l.cta}
          <svg viewBox="0 0 24 24" className="h-3 w-3" fill="currentColor">
            <path d="M22.27 19.385H1.73L12 4.615l10.27 14.77zM3.73 18.615H20.27L12 6.385l-8.27 12.23z" />
          </svg>
        </span>
      </a>
    )
  }

  if (variant === "inline") {
    return (
      <a
        href={VERCEL_REF}
        target="_blank"
        rel="noopener noreferrer sponsored"
        className="group flex items-center gap-4 rounded-xl border border-border/80 bg-gradient-to-r from-card/50 to-card/20 p-4 transition-all hover:border-v4-red/15"
      >
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-border/60 bg-background/50">
          <svg viewBox="0 0 24 24" className="h-5 w-5 text-foreground" fill="currentColor">
            <path d="M22.27 19.385H1.73L12 4.615l10.27 14.77zM3.73 18.615H20.27L12 6.385l-8.27 12.23z" />
          </svg>
        </div>
        <div className="min-w-0 flex-1">
          <p className="text-sm font-medium text-foreground group-hover:text-v4-red transition-colors">{l.title}</p>
          <p className="text-xs text-muted-foreground">{l.desc}</p>
        </div>
        <span className="shrink-0 inline-flex items-center gap-1.5 rounded-lg border border-border/60 bg-background/50 px-3 py-1.5 text-[10px] font-medium text-foreground transition-all hover:border-v4-red/20 hover:text-v4-red">
          {l.cta}
          <ArrowUpRight className="h-3 w-3" />
        </span>
      </a>
    )
  }

  return (
    <a
      href={VERCEL_REF}
      target="_blank"
      rel="noopener noreferrer sponsored"
      className="group relative flex flex-col md:flex-row items-center gap-4 overflow-hidden rounded-xl border border-border/80 bg-gradient-to-r from-card/60 via-card/30 to-card/10 p-6 transition-all hover:border-v4-red/15"
    >
      {/* Hero image */}
      <Image
        src="https://media.licdn.com/dms/image/sync/v2/D4E27AQHUyTzMHSLpYg/articleshare-shrink_800/B4EZ3WVWqxJcAM-/0/1777417416204?e=2147483647&v=beta&t=-_bgniKsvwv7nB1fsRXAsczGA76ZXyXiOJFkA3w2tzs"
        alt="Vercel Banner"
        width={320}
        height={180}
        className="rounded-xl object-cover"
      />
      <div className="flex flex-col gap-2">
        <p className="text-base font-semibold text-foreground mb-1">{l.title}</p>
        <p className="text-sm text-muted-foreground">{l.desc}</p>
        <p className="font-mono text-[10px] text-muted-foreground/50 mt-1 uppercase tracking-wider">{l.elite}</p>
        <span className="inline-flex items-center gap-2 rounded-lg bg-foreground/5 border border-border/60 px-4 py-2.5 text-xs font-medium text-foreground transition-all hover:bg-foreground/10 hover:text-v4-red">
          {l.cta}
          <ArrowUpRight className="h-3.5 w-3.5" />
        </span>
      </div>
    </a>
  )
}
