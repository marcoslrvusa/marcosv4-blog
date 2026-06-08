import Link from "next/link"
import { ArrowUpRight } from "lucide-react"

interface Props {
  locale: string
}

const models = [
  { name: "MiniMax-M3", provider: "MiniMaxAI", slug: "minimax-m3", context: "1049K", inputPrice: "$0.3", outputPrice: "$1.2" },
  { name: "DeepSeek-V4-Pro", provider: "DeepSeek", slug: "deepseek-v4-pro", context: "1049K", inputPrice: "$1.6", outputPrice: "$3.48" },
  { name: "Nex-N2-Pro", provider: "Nex AGI", slug: "nex-n2-pro", context: "262K", inputPrice: "$0.0", outputPrice: "$0.0" },
  { name: "Kimi-K2.6", provider: "Moonshot AI", slug: "kimi-k2-6", context: "262K", inputPrice: "$0.77", outputPrice: "$4.0" },
  { name: "DeepSeek-V4-Flash", provider: "DeepSeek", slug: "deepseek-v4-flash", context: "1049K", inputPrice: "$0.13", outputPrice: "$0.28" },
  { name: "Hy3-preview", provider: "Tencent", slug: "hy3-preview", context: "262K", inputPrice: "$0.066", outputPrice: "$0.26" },
]

export default function SiliconFlowModelBox({ locale }: Props) {
  const prefix = locale === "pt" ? "" : `/${locale}`

  return (
    <section className="mx-auto max-w-6xl px-6 mb-16 animate-fade-in">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-lg font-bold text-foreground">Infrastructure I've Mastered</h2>
          <p className="text-sm text-muted-foreground">I don't just use models. I build the systems that make them work in production.</p>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
        {models.map((m) => (
          <Link
            key={m.slug}
            href={`${prefix}/models/${m.slug}`}
            className="card block p-4 group"
          >
            <div className="flex items-start justify-between mb-2">
              <div>
                <span className="text-xs text-muted-foreground">{m.provider}</span>
                <h3 className="text-sm font-semibold text-foreground mt-0.5">{m.name}</h3>
              </div>
              <ArrowUpRight className="h-3.5 w-3.5 text-muted-foreground/30 group-hover:text-foreground transition-colors mt-1 shrink-0" />
            </div>

            <div className="flex items-center gap-3 text-xs text-muted-foreground font-mono">
              <span>{m.context} ctx</span>
              <span className="text-border">·</span>
              <span>Input <span className="text-foreground">${m.inputPrice}</span></span>
              <span className="text-border">·</span>
              <span>Output <span className="text-foreground">${m.outputPrice}</span></span>
            </div>

            <div className="mt-3 pt-3 border-t border-border flex items-center gap-1 text-xs text-muted-foreground/50 group-hover:text-accent transition-colors">
              <span>Ver detalhes</span>
              <ArrowUpRight className="h-3 w-3" />
            </div>
          </Link>
        ))}
      </div>

      <div className="mt-6 text-center">
        <a
          href="https://www.siliconflow.com/models"
          target="_blank"
          rel="noopener"
          className="inline-flex items-center gap-1 text-xs text-muted-foreground/50 hover:text-foreground transition-colors"
        >
          Ver todos no SiliconFlow
          <ArrowUpRight className="h-3 w-3" />
        </a>
      </div>
    </section>
  )
}
