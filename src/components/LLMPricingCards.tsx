import { ExternalLink, Sparkles } from "lucide-react"
import Link from "next/link"
import {
  OpenAIIcon, AnthropicIcon, GoogleAIcon, DeepSeekIcon,
  MetaAIcon, MistralIcon, MiniMaxIcon, NexAGIIcon, MoonshotIcon,
} from "./LLMIcons"

interface LLMPricingCardsProps {
  locale: string
}

const modelsData = [
  {
    name: "GPT‑4o",
    provider: "OpenAI",
    slug: null,
    context: "128K",
    maxOutput: "16K",
    input: "2.50",
    output: "10.00",
    icon: OpenAIIcon,
    color: "text-emerald-400",
  },
  {
    name: "Claude 3.5 Sonnet",
    provider: "Anthropic",
    slug: null,
    context: "200K",
    maxOutput: "8K",
    input: "3.00",
    output: "15.00",
    icon: AnthropicIcon,
    color: "text-orange-400",
  },
  {
    name: "Gemini 2.0 Flash",
    provider: "Google",
    slug: null,
    context: "1M",
    maxOutput: "8K",
    input: "0.10",
    output: "0.40",
    icon: GoogleAIcon,
    color: "text-blue-400",
  },
  {
    name: "DeepSeek-V4-Pro",
    provider: "DeepSeek",
    slug: "deepseek-v4-pro",
    context: "1049K",
    maxOutput: "393K",
    input: "1.60",
    output: "3.48",
    icon: DeepSeekIcon,
    color: "text-cyan-400",
  },
  {
    name: "MiniMax-M3",
    provider: "MiniMax AI",
    slug: "minimax-m3",
    context: "1049K",
    maxOutput: "131K",
    input: "0.30",
    output: "1.20",
    icon: MiniMaxIcon,
    color: "text-purple-400",
  },
  {
    name: "Nex-N2-Pro",
    provider: "Nex AGI",
    slug: "nex-n2-pro",
    context: "262K",
    maxOutput: "256K",
    input: "0.00",
    output: "0.00",
    icon: NexAGIIcon,
    color: "text-emerald-400",
  },
  {
    name: "Kimi K2.6",
    provider: "Moonshot AI",
    slug: "kimi-k2-6",
    context: "262K",
    maxOutput: "262K",
    input: "0.77",
    output: "4.00",
    icon: MoonshotIcon,
    color: "text-amber-400",
  },
]

const dict = {
  pt: {
    tag: "Inferência de Alta Velocidade",
    title: "para Texto, Imagem, Vídeo e Além",
    desc: "Uma API para todos os modelos LLM e multimodais — open source e comerciais.",
    inputLabel: "Input",
    outputLabel: "Output",
    contextLabel: "Contexto",
    perMillion: "/ M tokens",
    cta: "Ver todos os modelos no SiliconFlow",
    detail: "Detalhes",
  },
  en: {
    tag: "High-Speed Inference",
    title: "for Text, Image, Video, and Beyond",
    desc: "One API for all open and commercial LLMs & multimodal models.",
    inputLabel: "Input",
    outputLabel: "Output",
    contextLabel: "Context",
    perMillion: "/ M tokens",
    cta: "View all models on SiliconFlow",
    detail: "Details",
  },
  es: {
    tag: "Inferencia de Alta Velocidad",
    title: "para Texto, Imagen, Video y Más",
    desc: "Una API para todos los modelos LLM y multimodales — open source y comerciales.",
    inputLabel: "Input",
    outputLabel: "Output",
    contextLabel: "Contexto",
    perMillion: "/ M tokens",
    cta: "Ver todos los modelos en SiliconFlow",
    detail: "Detalles",
  },
}

function ModelCard({ model, locale, t }: { model: typeof modelsData[0]; locale: string; t: typeof dict.pt }) {
  const Icon = model.icon
  const prefix = locale === "pt" ? "" : `/${locale}`
  const content = (
    <>
      <div className="flex items-center gap-2.5 mb-3">
        <span className={model.color}>
          <Icon className="h-5 w-5" />
        </span>
        <div className="flex-1 min-w-0">
          <h3 className="text-sm font-semibold text-foreground leading-tight truncate">{model.name}</h3>
          <p className="text-[10px] font-mono text-muted-foreground/50 truncate">{model.provider}</p>
        </div>
        {model.slug && (
          <span className="shrink-0 text-[9px] font-mono text-muted-foreground/40 group-hover:text-v4-red transition-colors">
            {t.detail} →
          </span>
        )}
      </div>

      <div className="grid grid-cols-3 gap-2 mb-3">
        <div className="text-center py-1.5 rounded-lg bg-card/60 border border-border/20">
          <p className="text-[9px] font-mono text-muted-foreground/50 uppercase tracking-wider">{t.contextLabel}</p>
          <p className="text-xs font-semibold text-foreground">{model.context}</p>
        </div>
        <div className="text-center py-1.5 rounded-lg bg-card/60 border border-border/20">
          <p className="text-[9px] font-mono text-muted-foreground/50 uppercase tracking-wider">{t.inputLabel}</p>
          <p className="text-xs font-semibold text-v4-red">${model.input}</p>
        </div>
        <div className="text-center py-1.5 rounded-lg bg-card/60 border border-border/20">
          <p className="text-[9px] font-mono text-muted-foreground/50 uppercase tracking-wider">{t.outputLabel}</p>
          <p className="text-xs font-semibold text-accent-gold">${model.output}</p>
        </div>
      </div>

      <div className="border-t border-border/20 pt-2 flex items-center justify-between">
        <span className="text-[9px] font-mono text-muted-foreground/40">{t.perMillion}</span>
        <span className="text-[9px] font-mono text-muted-foreground/40">max {model.maxOutput}</span>
      </div>
    </>
  )

  if (model.slug) {
    return (
      <Link
        href={`${prefix}/models/${model.slug}`}
        className="group rounded-xl border border-border/40 bg-card/40 p-4 transition-all duration-300 hover:border-v4-red/20 hover:bg-card/60 hover:shadow-[0_0_20px_-8px_rgba(229,9,20,0.1)] block"
      >
        {content}
      </Link>
    )
  }

  return (
    <div className="rounded-xl border border-border/40 bg-card/40 p-4 transition-all duration-300">
      {content}
    </div>
  )
}

export default function LLMPricingCards({ locale }: LLMPricingCardsProps) {
  const t = dict[locale as keyof typeof dict] || dict.pt

  return (
    <section className="mx-auto max-w-6xl px-6 mb-16 animate-fade-in">
      <div className="text-center mb-12">
        <span className="inline-flex items-center gap-1.5 px-3 py-1 mb-4 text-[11px] font-mono tracking-wider uppercase text-v4-red border border-v4-red/20 rounded-full">
          <span className="w-1.5 h-1.5 rounded-full bg-v4-red animate-pulse" />
          {t.tag}
        </span>
        <h2 className="text-3xl md:text-4xl font-sans font-bold text-foreground mb-3 leading-tight">
          {t.title}
        </h2>
        <p className="text-sm text-muted-foreground max-w-2xl mx-auto">
          {t.desc}
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
        {modelsData.map((model, i) => (
          <ModelCard key={i} model={model} locale={locale} t={t} />
        ))}
      </div>

      <div className="mt-8 text-center">
        <Link
          href="https://www.siliconflow.com/models"
          target="_blank"
          rel="noopener"
          className="inline-flex items-center gap-1.5 text-xs font-mono text-muted-foreground/60 hover:text-v4-red transition-colors"
        >
          {t.cta}
          <ExternalLink className="h-3 w-3" />
        </Link>
      </div>
    </section>
  )
}
