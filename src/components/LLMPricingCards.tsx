import { ArrowUpRight } from "lucide-react"
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
    context: "1049K",
    input: "0.30", output: "1.20",
    icon: MiniMaxIcon, bestValue: true,
  },
  {
    name: "DeepSeek-V4-Pro",
    provider: "DeepSeek",
    slug: "deepseek-v4-pro",
    context: "1049K",
    input: "1.60", output: "3.48",
    icon: DeepSeekIcon,
  },
  {
    name: "Nex-N2-Pro",
    provider: "Nex AGI",
    slug: "nex-n2-pro",
    context: "262K",
    input: "0.00", output: "0.00",
    icon: NexAGIIcon,
  },
  {
    name: "DeepSeek-V4-Flash",
    provider: "DeepSeek",
    slug: "deepseek-v4-flash",
    context: "1049K",
    input: "0.13", output: "0.28",
    icon: DeepSeekIcon,
  },
  {
    name: "Kimi K2.6",
    provider: "Moonshot AI",
    slug: "kimi-k2-6",
    context: "262K",
    input: "0.77", output: "4.00",
    icon: MoonshotIcon,
  },
  {
    name: "Hy3-preview",
    provider: "Tencent",
    slug: "hy3-preview",
    context: "262K",
    input: "0.066", output: "0.26",
    icon: TencentIcon,
  },
  {
    name: "GLM-5.1",
    provider: "Z.ai",
    slug: "glm-5-1",
    context: "205K",
    input: "1.40", output: "4.40",
    icon: ZaiIcon,
  },
  {
    name: "Qwen3.6-35B-A3B",
    provider: "Qwen",
    slug: "qwen3-6-35b-a3b",
    context: "262K",
    input: "0.20", output: "1.60",
    icon: QwenIcon,
  },
  {
    name: "Qwen3.6-27B",
    provider: "Qwen",
    slug: "qwen3-6-27b",
    context: "262K",
    input: "0.30", output: "3.20",
    icon: QwenIcon,
  },
  {
    name: "GLM-5V-Turbo",
    provider: "Z.ai",
    slug: "glm-5v-turbo",
    context: "205K",
    input: "1.20", output: "4.00",
    icon: ZaiIcon,
  },
  {
    name: "Qwen3.5-397B-A17B",
    provider: "Qwen",
    slug: "qwen3-5-397b-a17b",
    context: "262K",
    input: "0.39", output: "2.34",
    icon: QwenIcon,
  },
  {
    name: "Qwen3.5-122B-A10B",
    provider: "Qwen",
    slug: "qwen3-5-122b-a10b",
    context: "262K",
    input: "0.26", output: "2.08",
    icon: QwenIcon,
  },
]

function ModelCard({ model, locale }: { model: typeof modelsData[0]; locale: string }) {
  const Icon = model.icon
  const prefix = locale === "pt" ? "" : `/${locale}`

  return (
    <Link
      href={`${prefix}/models/${model.slug}`}
      className={`card block p-4 group ${model.bestValue ? "border-accent/30" : ""}`}
    >
      <div className="flex items-center gap-3 mb-3">
        <span className="text-muted-foreground/70 group-hover:text-foreground transition-colors">
          <Icon className="h-4 w-4" />
        </span>
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-1.5">
            <h3 className="text-sm font-semibold text-foreground leading-tight truncate">{model.name}</h3>
            {model.bestValue && (
              <span className="text-[10px] font-medium text-accent px-1.5 py-0.5 rounded-full border border-accent/20 bg-accent-subtle leading-none">
                best value
              </span>
            )}
          </div>
          <p className="text-xs text-muted-foreground truncate">{model.provider}</p>
        </div>
        <ArrowUpRight className="h-3.5 w-3.5 text-muted-foreground/30 group-hover:text-foreground transition-colors shrink-0" />
      </div>

      <div className="grid grid-cols-3 gap-2 mb-2">
        <div className="text-center py-1.5 rounded-lg bg-card-hover/50 border border-border">
          <p className="text-[10px] font-mono text-muted-foreground/60 uppercase tracking-wider">Context</p>
          <p className="text-xs font-semibold text-foreground">{model.context}</p>
        </div>
        <div className="text-center py-1.5 rounded-lg bg-card-hover/50 border border-border">
          <p className="text-[10px] font-mono text-muted-foreground/60 uppercase tracking-wider">Input</p>
          <p className="text-xs font-semibold text-foreground">${model.input}</p>
        </div>
        <div className="text-center py-1.5 rounded-lg bg-card-hover/50 border border-border">
          <p className="text-[10px] font-mono text-muted-foreground/60 uppercase tracking-wider">Output</p>
          <p className="text-xs font-semibold text-foreground">${model.output}</p>
        </div>
      </div>

      <div className="pt-2 border-t border-border flex items-center justify-between">
        <span className="text-[10px] text-muted-foreground/40">/ M tokens</span>
        <span className="text-[10px] text-muted-foreground/50 group-hover:text-accent transition-colors inline-flex items-center gap-0.5">
          Ver detalhes <ArrowUpRight className="h-3 w-3" />
        </span>
      </div>
    </Link>
  )
}

export default function LLMPricingCards({ locale }: LLMPricingCardsProps) {
  return (
    <section className="mx-auto max-w-6xl px-6 mb-16 animate-fade-in">
      <div className="text-center mb-8">
        <span className="text-xs text-muted-foreground uppercase tracking-wider mb-2 inline-block">LLM Inference</span>
        <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-2 leading-tight">
          Models I build infrastructure around
        </h2>
        <p className="text-sm text-muted-foreground max-w-xl mx-auto">
          Each model below runs in production at scale. The value isn't the API call — it's the system built around it.
        </p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-3">
        {modelsData.map((model, i) => (
          <ModelCard key={i} model={model} locale={locale} />
        ))}
      </div>

      <div className="mt-8 text-center">
        <a
          href="https://www.siliconflow.com/models"
          target="_blank"
          rel="noopener"
          className="inline-flex items-center gap-1 text-xs text-muted-foreground/50 hover:text-foreground transition-colors"
        >
          Todos os modelos no SiliconFlow
          <ArrowUpRight className="h-3 w-3" />
        </a>
      </div>
    </section>
  )
}
