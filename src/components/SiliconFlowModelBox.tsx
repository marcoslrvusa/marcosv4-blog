import Link from "next/link"
import { ArrowRight } from "lucide-react"

interface Props {
  locale: string
}

const models = [
  { name: "MiniMax-M3", provider: "MiniMaxAI", slug: "minimax-m3", context: "1049K", maxOutput: "131K", inputPrice: "$0.3", outputPrice: "$1.2", release: "Jun 1, 2026" },
  { name: "DeepSeek-V4-Pro", provider: "DeepSeek", slug: "deepseek-v4-pro", context: "1049K", maxOutput: "393K", inputPrice: "$1.6", outputPrice: "$3.48", release: "Apr 24, 2026" },
  { name: "Nex-N2-Pro", provider: "Nex AGI", slug: "nex-n2-pro", context: "262K", maxOutput: "256K", inputPrice: "$0.0", outputPrice: "$0.0", release: "Jun 2, 2026" },
  { name: "Kimi-K2.6", provider: "Moonshot AI", slug: "kimi-k2-6", context: "262K", maxOutput: "262K", inputPrice: "$0.77", outputPrice: "$4.0", release: "Apr 21, 2026" },
  { name: "DeepSeek-V4-Flash", provider: "DeepSeek", slug: "deepseek-v4-flash", context: "1049K", maxOutput: "393K", inputPrice: "$0.13", outputPrice: "$0.28", release: "Apr 24, 2026" },
  { name: "Hy3-preview", provider: "Tencent", slug: "hy3-preview", context: "262K", maxOutput: "262K", inputPrice: "$0.066", outputPrice: "$0.26", release: "Apr 7, 2026" },
]

export default function SiliconFlowModelBox({ locale }: Props) {
  const prefix = locale === "pt" ? "" : `/${locale}`

  return (
    <section className="py-12">
      <div className="mx-auto max-w-6xl px-6">

        <div className="mb-8">
          <h2 className="text-xl font-bold text-foreground mb-1">Modelos disponíveis</h2>
          <p className="text-sm text-muted-foreground">Modelos open-source com preço por token via SiliconFlow.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {models.map((m) => (
            <Link
              key={m.slug}
              href={`${prefix}/models/${m.slug}`}
              className="block rounded-xl border border-border/50 bg-card p-4 hover:bg-card/80 transition-colors"
            >
              <div className="flex items-start justify-between mb-2">
                <div>
                  <div className="flex items-center gap-2 mb-0.5">
                    <span className="text-xs font-medium text-muted-foreground">{m.provider}</span>
                    <span className="text-[9px] font-mono px-1 py-0.5 rounded bg-card/80 border border-border/30 text-muted-foreground/50 uppercase">chat</span>
                  </div>
                  <h3 className="text-base font-semibold text-foreground">{m.name}</h3>
                </div>
                <ArrowRight className="h-3.5 w-3.5 text-muted-foreground/30 mt-1.5 shrink-0" />
              </div>

              <div className="text-xs text-muted-foreground/60 mb-3 font-mono">
                Release on: {m.release}
              </div>

              <div className="flex items-center gap-3 text-xs text-muted-foreground/60 font-mono mb-3">
                <span>Total Context: <span className="text-foreground font-semibold">{m.context}</span></span>
                <span className="text-muted-foreground/20">|</span>
                <span>Max output: <span className="text-foreground font-semibold">{m.maxOutput}</span></span>
              </div>

              <div className="flex items-center gap-3 text-xs font-mono">
                <span>
                  Input: <span className="text-foreground font-semibold">${m.inputPrice}</span>
                  <span className="text-muted-foreground/40"> / M Tokens</span>
                </span>
                <span className="text-muted-foreground/20">|</span>
                <span>
                  Output: <span className="text-foreground font-semibold">${m.outputPrice}</span>
                  <span className="text-muted-foreground/40"> / M Tokens</span>
                </span>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-6 text-center">
          <a
            href="https://www.siliconflow.com/models"
            target="_blank"
            rel="noopener"
            className="inline-flex items-center gap-1 text-xs text-muted-foreground/50 hover:text-foreground transition-colors font-mono"
          >
            Ver todos no SiliconFlow
            <ArrowRight className="h-3 w-3" />
          </a>
        </div>

      </div>
    </section>
  )
}
