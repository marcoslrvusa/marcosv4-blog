import { ArrowRight, Cpu, Sparkles, Zap } from "lucide-react"
import Link from "next/link"

interface LLMPricingCardsProps {
  locale: string
}

const modelsData = [
  {
    name: "GPT‑4o",
    provider: "OpenAI",
    context: "128K",
    maxOutput: "16K",
    input: "$2.50",
    output: "$10.00",
    icon: "⚡",
    color: "text-emerald-400",
    borderColor: "border-emerald-500/20",
    bgColor: "bg-emerald-500/5",
    badgeBg: "bg-emerald-500/10",
  },
  {
    name: "Claude 3.5 Sonnet",
    provider: "Anthropic",
    context: "200K",
    maxOutput: "8K",
    input: "$3.00",
    output: "$15.00",
    icon: "🎯",
    color: "text-orange-400",
    borderColor: "border-orange-500/20",
    bgColor: "bg-orange-500/5",
    badgeBg: "bg-orange-500/10",
  },
  {
    name: "Gemini 2.0 Flash",
    provider: "Google",
    context: "1M",
    maxOutput: "8K",
    input: "$0.10",
    output: "$0.40",
    icon: "🌀",
    color: "text-blue-400",
    borderColor: "border-blue-500/20",
    bgColor: "bg-blue-500/5",
    badgeBg: "bg-blue-500/10",
  },
  {
    name: "DeepSeek-V3",
    provider: "DeepSeek",
    context: "128K",
    maxOutput: "8K",
    input: "$0.50",
    output: "$2.00",
    icon: "🧠",
    color: "text-purple-400",
    borderColor: "border-purple-500/20",
    bgColor: "bg-purple-500/5",
    badgeBg: "bg-purple-500/10",
  },
  {
    name: "Llama 3.1 405B",
    provider: "Meta",
    context: "128K",
    maxOutput: "8K",
    input: "$0.57",
    output: "$2.40",
    icon: "🦙",
    color: "text-cyan-400",
    borderColor: "border-cyan-500/20",
    bgColor: "bg-cyan-500/5",
    badgeBg: "bg-cyan-500/10",
  },
  {
    name: "Mistral Large 2",
    provider: "Mistral",
    context: "128K",
    maxOutput: "8K",
    input: "$2.00",
    output: "$6.00",
    icon: "🌬️",
    color: "text-rose-400",
    borderColor: "border-rose-500/20",
    bgColor: "bg-rose-500/5",
    badgeBg: "bg-rose-500/10",
  },
]

const dict = {
  pt: {
    tag: "Modelos de IA",
    title: "Preços de LLMs por Milhão de Tokens",
    desc: "Compare os principais modelos do mercado. Preços em USD por milhão de tokens (input/output).",
    inputLabel: "Input",
    outputLabel: "Output",
    contextLabel: "Contexto",
    cta: "Precisa de ajuda para escolher?",
    ctaSub: "Consultoria especializada em arquitetura de IA",
    ctaLink: "Solicitar Orçamento",
  },
  en: {
    tag: "AI Models",
    title: "LLM Pricing per Million Tokens",
    desc: "Compare the top models in the market. Prices in USD per million tokens (input/output).",
    inputLabel: "Input",
    outputLabel: "Output",
    contextLabel: "Context",
    cta: "Need help choosing?",
    ctaSub: "Expert AI architecture consulting",
    ctaLink: "Request Proposal",
  },
  es: {
    tag: "Modelos de IA",
    title: "Precios de LLMs por Millón de Tokens",
    desc: "Compara los principales modelos del mercado. Precios en USD por millón de tokens (input/output).",
    inputLabel: "Input",
    outputLabel: "Output",
    contextLabel: "Contexto",
    cta: "¿Necesitas ayuda para elegir?",
    ctaSub: "Consultoría especializada en arquitectura de IA",
    ctaLink: "Solicitar Presupuesto",
  },
}

export default function LLMPricingCards({ locale }: LLMPricingCardsProps) {
  const t = dict[locale as keyof typeof dict] || dict.pt

  return (
    <section className="mx-auto max-w-6xl px-6 mb-16 animate-fade-in">
      <div className="mb-8 flex items-center gap-3">
        <span className="font-mono text-xs font-medium text-muted-foreground">
          $ cat models/pricing.json
        </span>
        <div className="h-px flex-1 bg-gradient-to-r from-border to-transparent" />
      </div>

      <div className="text-center mb-10">
        <span className="inline-flex items-center gap-1.5 px-3 py-1 mb-4 text-xs font-mono tracking-wider uppercase text-v4-red border border-v4-red/30 rounded-full">
          <Cpu className="w-3 h-3" />
          {t.tag}
        </span>
        <h2 className="text-2xl md:text-3xl font-sans font-bold text-foreground mb-3">
          {t.title}
        </h2>
        <p className="text-sm text-muted-foreground max-w-xl mx-auto">
          {t.desc}
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {modelsData.map((model, i) => (
          <div
            key={i}
            className={`group rounded-xl border ${model.borderColor} ${model.bgColor} bg-card/50 backdrop-blur-sm p-5 transition-all duration-300 hover:shadow-[0_0_30px_-5px_rgba(229,9,20,0.08)] hover:border-v4-red/20`}
          >
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2.5">
                <span className="text-xl">{model.icon}</span>
                <div>
                  <h3 className="text-sm font-semibold text-foreground leading-tight">{model.name}</h3>
                  <p className="text-[10px] font-mono text-muted-foreground/60">{model.provider}</p>
                </div>
              </div>
              <div className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-md ${model.badgeBg} ${model.color}`}>
                <Zap className="w-2.5 h-2.5" />
                <span className="text-[10px] font-mono font-semibold tracking-tight">LLM</span>
              </div>
            </div>

            <div className="flex items-center gap-3 mb-4">
              <div className="flex-1 text-center py-2 rounded-lg bg-card/50 border border-border/30">
                <p className="text-[10px] font-mono text-muted-foreground/60 uppercase tracking-wider">{t.contextLabel}</p>
                <p className="text-sm font-semibold text-foreground">{model.context}</p>
              </div>
              <div className="flex-1 text-center py-2 rounded-lg bg-card/50 border border-border/30">
                <p className="text-[10px] font-mono text-muted-foreground/60 uppercase tracking-wider">{t.inputLabel}</p>
                <p className="text-sm font-semibold text-v4-red">${model.input}</p>
              </div>
              <div className="flex-1 text-center py-2 rounded-lg bg-card/50 border border-border/30">
                <p className="text-[10px] font-mono text-muted-foreground/60 uppercase tracking-wider">{t.outputLabel}</p>
                <p className="text-sm font-semibold text-accent-gold">${model.output}</p>
              </div>
            </div>

            <div className="border-t border-border/30 pt-3 flex items-center justify-between">
              <span className="text-[10px] font-mono text-muted-foreground/50">
                /M tokens
              </span>
              <span className="text-[10px] font-mono text-muted-foreground/50">
                max {model.maxOutput}
              </span>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 rounded-xl border border-v4-red/20 bg-v4-red/[0.02] p-6 text-center">
        <div className="flex items-center justify-center gap-2 mb-2">
          <Sparkles className="w-4 h-4 text-v4-red" />
          <p className="text-sm font-semibold text-foreground">{t.cta}</p>
        </div>
        <p className="text-xs text-muted-foreground mb-4">{t.ctaSub}</p>
        <Link
          href={`/${locale === "pt" ? "" : locale}/consulting`}
          className="inline-flex items-center gap-2 rounded-lg bg-v4-red px-5 py-2.5 text-sm font-semibold text-background transition-all hover:bg-v4-red/90 hover:shadow-lg hover:shadow-v4-red/20"
        >
          {t.ctaLink}
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </section>
  )
}
