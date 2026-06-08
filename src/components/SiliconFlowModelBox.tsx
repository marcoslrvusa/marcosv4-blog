import Link from "next/link"
import { DeepSeekIcon, MiniMaxIcon, NexAGIIcon, MoonshotIcon } from "./LLMIcons"
import { ArrowRight } from "lucide-react"

interface Props {
  locale: string
}

const models = [
  {
    name: "DeepSeek V4 Pro",
    brand: "DeepSeek",
    slug: "deepseek-v4-pro",
    context: "1049K",
    maxOutput: "393K",
    inputPrice: "$1.6",
    outputPrice: "$3.48",
    icon: DeepSeekIcon,
    color: "text-blue-400",
    bg: "bg-blue-400/10",
    border: "hover:border-blue-400/30",
  },
  {
    name: "MiniMax M3",
    brand: "MiniMax AI",
    slug: "minimax-m3",
    context: "1049K",
    maxOutput: "131K",
    inputPrice: "$0.3",
    outputPrice: "$1.2",
    icon: MiniMaxIcon,
    color: "text-purple-400",
    bg: "bg-purple-400/10",
    border: "hover:border-purple-400/30",
  },
  {
    name: "Nex-N2-Pro",
    brand: "Nex AGI",
    slug: "nex-n2-pro",
    context: "262K",
    maxOutput: "256K",
    inputPrice: "$0.0",
    outputPrice: "$0.0",
    icon: NexAGIIcon,
    color: "text-emerald-400",
    bg: "bg-emerald-400/10",
    border: "hover:border-emerald-400/30",
  },
  {
    name: "Kimi K2.6",
    brand: "Moonshot AI",
    slug: "kimi-k2-6",
    context: "262K",
    maxOutput: "262K",
    inputPrice: "$0.77",
    outputPrice: "$4.0",
    icon: MoonshotIcon,
    color: "text-amber-400",
    bg: "bg-amber-400/10",
    border: "hover:border-amber-400/30",
  },
]

export default function SiliconFlowModelBox({ locale }: Props) {
  const prefix = locale === "pt" ? "" : `/${locale}`

  return (
    <section className="py-16">
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center mb-10">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-border/30 bg-card/50 font-mono text-[11px] uppercase tracking-widest text-muted-foreground mb-4">
            LLMs disponíveis
          </span>
          <h2 className="text-3xl font-bold text-foreground">
            Preços por token
          </h2>
          <p className="text-sm text-muted-foreground mt-2 max-w-2xl mx-auto">
            Modelos open-source disponíveis via SiliconFlow com pagamento por uso.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {models.map((m, i) => {
            const Icon = m.icon
            return (
              <Link
                key={i}
                href={`${prefix}/models/${m.slug}`}
                className={`group relative rounded-xl border border-border/50 bg-card p-5 transition-all ${m.border}`}
              >
                {/* Header */}
                <div className="flex items-center gap-3 mb-4">
                  <div className={`w-10 h-10 rounded-xl ${m.bg} flex items-center justify-center ${m.color}`}>
                    <Icon className="h-5 w-5" />
                  </div>
                  <div>
                    <span className="text-[11px] font-semibold text-muted-foreground uppercase tracking-wider block leading-none mb-1">
                      {m.brand}
                    </span>
                    <h3 className="text-base font-bold text-foreground leading-tight">{m.name}</h3>
                  </div>
                </div>

                {/* Specs row */}
                <div className="flex items-center gap-3 mb-4 text-xs text-muted-foreground font-mono">
                  <span className="inline-flex items-center gap-1">
                    <span className="text-muted-foreground/50">Contexto</span>
                    <span className="font-semibold text-foreground">{m.context}</span>
                  </span>
                  <span className="text-muted-foreground/20">|</span>
                  <span className="inline-flex items-center gap-1">
                    <span className="text-muted-foreground/50">Max</span>
                    <span className="font-semibold text-foreground">{m.maxOutput}</span>
                  </span>
                </div>

                {/* Pricing */}
                <div className="grid grid-cols-2 gap-3">
                  <div className="rounded-lg bg-card/80 border border-border/20 p-3 text-center">
                    <div className="text-[10px] font-mono text-muted-foreground/50 uppercase tracking-wider mb-0.5">Input</div>
                    <div className="text-lg font-bold text-foreground tracking-tight">{m.inputPrice}</div>
                    <div className="text-[9px] font-mono text-muted-foreground/40">/M tokens</div>
                  </div>
                  <div className="rounded-lg bg-card/80 border border-border/20 p-3 text-center">
                    <div className="text-[10px] font-mono text-muted-foreground/50 uppercase tracking-wider mb-0.5">Output</div>
                    <div className="text-lg font-bold text-foreground tracking-tight">{m.outputPrice}</div>
                    <div className="text-[9px] font-mono text-muted-foreground/40">/M tokens</div>
                  </div>
                </div>

                {/* CTA */}
                <div className="mt-4 flex items-center justify-center gap-1.5 text-xs font-mono text-muted-foreground/50 group-hover:text-v4-red transition-colors">
                  Ver ficha completa
                  <ArrowRight className="h-3 w-3" />
                </div>
              </Link>
            )
          })}
        </div>
      </div>
    </section>
  )
}
