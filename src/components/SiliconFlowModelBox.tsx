import Link from "next/link"
import { DeepSeekIcon, MiniMaxIcon, NexAGIIcon, MoonshotIcon } from "./LLMIcons"
import { ArrowRight } from "lucide-react"

const models = [
  {
    name: "DeepSeek V4 Pro",
    brand: "DeepSeek",
    slug: "deepseek-v4-pro",
    context: "1049K tokens",
    output: "393K tokens max",
    inputPrice: "$ 1.6 / M",
    outputPrice: "$ 3.48 / M",
    icon: DeepSeekIcon,
    color: "text-blue-400",
    bg: "bg-blue-400/10",
  },
  {
    name: "MiniMax M3",
    brand: "MiniMax AI",
    slug: "minimax-m3",
    context: "1049K tokens",
    output: "131K tokens max",
    inputPrice: "$ 0.3 / M",
    outputPrice: "$ 1.2 / M",
    icon: MiniMaxIcon,
    color: "text-purple-400",
    bg: "bg-purple-400/10",
  },
  {
    name: "Nex-N2-Pro",
    brand: "Nex AGI",
    slug: "nex-n2-pro",
    context: "262K tokens",
    output: "256K tokens max",
    inputPrice: "$ 0.0 / M",
    outputPrice: "$ 0.0 / M",
    icon: NexAGIIcon,
    color: "text-emerald-400",
    bg: "bg-emerald-400/10",
  },
  {
    name: "Kimi K2.6",
    brand: "Moonshot AI",
    slug: "kimi-k2-6",
    context: "262K tokens",
    output: "262K tokens max",
    inputPrice: "$ 0.77 / M",
    outputPrice: "$ 4.0 / M",
    icon: MoonshotIcon,
    color: "text-amber-400",
    bg: "bg-amber-400/10",
  },
]

export default function SiliconFlowModelBox() {
  return (
    <section className="border-t border-border/20 bg-card/5 py-12">
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center mb-8">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-v4-red/20 bg-v4-red/5 font-mono text-[10px] uppercase tracking-widest text-v4-red mb-3">
            Modelos em Destaque
          </span>
          <h2 className="text-2xl font-bold text-foreground">
            LLMs com preço <span className="text-gradient-v4">previsível</span>
          </h2>
          <p className="text-sm text-muted-foreground mt-1 max-w-xl mx-auto">
            Execute modelos de IA poderosos via SiliconFlow com preço por token.
          </p>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
          {models.map((m, i) => {
            const Icon = m.icon
            return (
              <Link
                key={i}
                href={`/models/${m.slug}`}
                className="group relative rounded-xl border border-border/40 bg-card/40 p-4 hover:border-v4-red/20 hover:bg-card-hover transition-all"
              >
                <div className="flex items-center gap-2.5 mb-3">
                  <div className={`w-9 h-9 rounded-lg ${m.bg} flex items-center justify-center ${m.color}`}>
                    <Icon className="h-4 w-4" />
                  </div>
                  <div className="min-w-0">
                    <span className="text-[10px] font-semibold text-v4-red uppercase tracking-wider block leading-none mb-0.5">
                      {m.brand}
                    </span>
                    <h3 className="text-sm font-bold text-foreground leading-tight">{m.name}</h3>
                  </div>
                </div>

                <div className="flex items-center justify-between text-[10px] text-muted-foreground font-mono mb-3">
                  <span>Ctx: {m.context}</span>
                  <span>Out: {m.output}</span>
                </div>

                <div className="grid grid-cols-2 gap-2">
                  <div className="rounded-lg bg-card/80 border border-border/30 p-2 text-center">
                    <div className="text-[9px] font-mono text-muted-foreground uppercase tracking-wider">Input</div>
                    <div className="text-sm font-bold text-foreground">{m.inputPrice}</div>
                  </div>
                  <div className="rounded-lg bg-card/80 border border-border/30 p-2 text-center">
                    <div className="text-[9px] font-mono text-muted-foreground uppercase tracking-wider">Output</div>
                    <div className="text-sm font-bold text-foreground">{m.outputPrice}</div>
                  </div>
                </div>

                <div className="mt-3 flex items-center justify-center gap-1 text-[9px] font-mono text-muted-foreground/40 group-hover:text-v4-red transition-colors">
                  Ver detalhes
                  <ArrowRight className="h-2.5 w-2.5" />
                </div>
              </Link>
            )
          })}
        </div>
      </div>
    </section>
  )
}
