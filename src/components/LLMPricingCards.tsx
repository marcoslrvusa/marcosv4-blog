import { ExternalLink } from "lucide-react"
import Link from "next/link"
import {
  OpenAIIcon, AnthropicIcon, GoogleAIcon, DeepSeekIcon,
  MetaAIcon, MistralIcon, MiniMaxIcon, NexAGIIcon, MoonshotIcon,
  TencentIcon, ZaiIcon, QwenIcon,
} from "./LLMIcons"

interface LLMPricingCardsProps {
  locale: string
}

const modelsData = [
  {
    name: "MiniMax-M3",
    provider: "MiniMax AI",
    slug: "minimax-m3",
    context: "1049K", maxOutput: "131K",
    input: "0.30", output: "1.20",
    icon: MiniMaxIcon, color: "text-purple-400",
  },
  {
    name: "DeepSeek-V4-Pro",
    provider: "DeepSeek",
    slug: "deepseek-v4-pro",
    context: "1049K", maxOutput: "393K",
    input: "1.60", output: "3.48",
    icon: DeepSeekIcon, color: "text-cyan-400",
  },
  {
    name: "Nex-N2-Pro",
    provider: "Nex AGI",
    slug: "nex-n2-pro",
    context: "262K", maxOutput: "256K",
    input: "0.00", output: "0.00",
    icon: NexAGIIcon, color: "text-emerald-400",
  },
  {
    name: "DeepSeek-V4-Flash",
    provider: "DeepSeek",
    slug: "deepseek-v4-flash",
    context: "1049K", maxOutput: "393K",
    input: "0.13", output: "0.28",
    icon: DeepSeekIcon, color: "text-cyan-400",
  },
  {
    name: "Kimi K2.6",
    provider: "Moonshot AI",
    slug: "kimi-k2-6",
    context: "262K", maxOutput: "262K",
    input: "0.77", output: "4.00",
    icon: MoonshotIcon, color: "text-amber-400",
  },
  {
    name: "Hy3-preview",
    provider: "Tencent",
    slug: "hy3-preview",
    context: "262K", maxOutput: "262K",
    input: "0.066", output: "0.26",
    icon: TencentIcon, color: "text-blue-300",
  },
  {
    name: "GLM-5.1",
    provider: "Z.ai",
    slug: "glm-5-1",
    context: "205K", maxOutput: "131K",
    input: "1.40", output: "4.40",
    icon: ZaiIcon, color: "text-violet-400",
  },
  {
    name: "Qwen3.6-35B-A3B",
    provider: "Qwen",
    slug: "qwen3-6-35b-a3b",
    context: "262K", maxOutput: "262K",
    input: "0.20", output: "1.60",
    icon: QwenIcon, color: "text-rose-400",
  },
  {
    name: "Qwen3.6-27B",
    provider: "Qwen",
    slug: "qwen3-6-27b",
    context: "262K", maxOutput: "262K",
    input: "0.30", output: "3.20",
    icon: QwenIcon, color: "text-rose-400",
  },
  {
    name: "GLM-5V-Turbo",
    provider: "Z.ai",
    slug: "glm-5v-turbo",
    context: "205K", maxOutput: "131K",
    input: "1.20", output: "4.00",
    icon: ZaiIcon, color: "text-violet-400",
  },
  {
    name: "Qwen3.5-397B-A17B",
    provider: "Qwen",
    slug: "qwen3-5-397b-a17b",
    context: "262K", maxOutput: "262K",
    input: "0.39", output: "2.34",
    icon: QwenIcon, color: "text-rose-400",
  },
  {
    name: "Qwen3.5-122B-A10B",
    provider: "Qwen",
    slug: "qwen3-5-122b-a10b",
    context: "262K", maxOutput: "262K",
    input: "0.26", output: "2.08",
    icon: QwenIcon, color: "text-rose-400",
  },
]

const dict = {
  pt: {
    tag: "Inferência de Alta Velocidade",
    title: "para Texto, Imagem, Vídeo e Além",
    desc: "Uma API para todos os modelos LLM e multimodais — open source e comerciais.",
    contextLabel: "Contexto", perMillion: "/ M tokens",
    cta: "Ver todos os modelos no SiliconFlow",
    detail: "Detalhes",
  },
  en: {
    tag: "High-Speed Inference",
    title: "for Text, Image, Video, and Beyond",
    desc: "One API for all open and commercial LLMs & multimodal models.",
    contextLabel: "Context", perMillion: "/ M tokens",
    cta: "View all models on SiliconFlow",
    detail: "Details",
  },
  es: {
    tag: "Inferencia de Alta Velocidad",
    title: "para Texto, Imagen, Video y Más",
    desc: "Una API para todos los modelos LLM y multimodales — open source y comerciales.",
    contextLabel: "Contexto", perMillion: "/ M tokens",
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
          <h3 className="text-xs font-semibold text-foreground leading-tight truncate">{model.name}</h3>
          <p className="text-[9px] font-mono text-muted-foreground/50 truncate">{model.provider}</p>
        </div>
        <span className="shrink-0 text-[8px] font-mono text-muted-foreground/40 group-hover:text-v4-red transition-colors">
          {t.detail} →
        </span>
      </div>
      <div className="grid grid-cols-3 gap-1.5 mb-2">
        <div className="text-center py-1 rounded-lg bg-card/60 border border-border/20">
          <p className="text-[8px] font-mono text-muted-foreground/50 uppercase tracking-wider">{t.contextLabel}</p>
          <p className="text-[11px] font-semibold text-foreground">{model.context}</p>
        </div>
        <div className="text-center py-1 rounded-lg bg-card/60 border border-border/20">
          <p className="text-[8px] font-mono text-muted-foreground/50 uppercase tracking-wider">Input</p>
          <p className="text-[11px] font-semibold text-v4-red">${model.input}</p>
        </div>
        <div className="text-center py-1 rounded-lg bg-card/60 border border-border/20">
          <p className="text-[8px] font-mono text-muted-foreground/50 uppercase tracking-wider">Output</p>
          <p className="text-[11px] font-semibold text-accent-gold">${model.output}</p>
        </div>
      </div>
      <div className="border-t border-border/20 pt-1.5 flex items-center justify-between">
        <span className="text-[8px] font-mono text-muted-foreground/40">{t.perMillion}</span>
        <span className="text-[8px] font-mono text-muted-foreground/40">max {model.maxOutput}</span>
      </div>
    </>
  )

  if (model.slug) {
    return (
      <Link
        href={`${prefix}/models/${model.slug}`}
        className="group rounded-lg border border-border/40 bg-card/40 p-3 transition-all duration-300 hover:border-v4-red/20 hover:bg-card/60 hover:shadow-[0_0_20px_-8px_rgba(229,9,20,0.1)] block"
      >
        {content}
      </Link>
    )
  }

  return (
    <div className="rounded-lg border border-border/40 bg-card/40 p-3">
      {content}
    </div>
  )
}

export default function LLMPricingCards({ locale }: LLMPricingCardsProps) {
  const t = dict[locale as keyof typeof dict] || dict.pt

  return (
    <section className="mx-auto max-w-6xl px-6 mb-16 animate-fade-in">
      <div className="text-center mb-10">
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

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-2">
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
