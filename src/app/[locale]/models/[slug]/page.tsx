import { notFound } from "next/navigation"
import Link from "next/link"
import { getModelBySlug } from "@/lib/models-data"
import { ExternalLink } from "lucide-react"
import CopyButton from "@/components/CopyButton"

export default async function ModelPage({ params }: { params: Promise<{ locale: string; slug: string }> }) {
  const { locale, slug } = await params
  const model = getModelBySlug(slug)
  if (!model) notFound()

  const prefix = locale === "pt" ? "" : `/${locale}`

  return (
    <div className="mx-auto max-w-6xl px-6 py-8">
      <nav className="flex items-center gap-2 text-xs text-muted-foreground/50 font-mono mb-8">
        <Link href={`${prefix}`} className="hover:text-foreground transition-colors">Início</Link>
        <span>/</span>
        <span className="text-muted-foreground/30">models</span>
        <span>/</span>
        <span className="text-foreground/60">{model.slug}</span>
      </nav>

      <div className="flex flex-col lg:flex-row gap-10 lg:gap-16">
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-3">
            <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">{model.provider}</span>
            <span className="text-muted-foreground/20">·</span>
            <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-card border border-border/40 text-muted-foreground/60 uppercase">chat</span>
          </div>

          <h1 className="text-3xl sm:text-4xl font-bold text-foreground leading-tight mb-3">{model.name}</h1>

          <div className="flex items-center gap-2 mb-5">
            <code className="text-xs font-mono text-muted-foreground/60 px-2.5 py-1 rounded-lg bg-card border border-border/40">
              {model.hfPath}
            </code>
            <CopyButton text={model.hfPath} />
          </div>

          <p className="text-sm text-muted-foreground leading-relaxed mb-6 max-w-xl">{model.longDescription}</p>

          <div className="flex flex-wrap gap-2.5 mb-8">
            <a href="https://cloud.siliconflow.com/me/playground/chat" target="_blank" rel="noopener"
              className="inline-flex items-center gap-1.5 rounded-lg bg-foreground text-background px-4 py-2 text-sm font-medium hover:opacity-90">
              Open in Playground <ExternalLink className="h-3.5 w-3.5" />
            </a>
            <a href={`https://huggingface.co/${model.hfPath}`} target="_blank" rel="noopener"
              className="inline-flex items-center gap-1.5 rounded-lg border border-border px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground">
              HuggingFace <ExternalLink className="h-3.5 w-3.5" />
            </a>
            <a href={`https://www.siliconflow.com/models/${model.slug}`} target="_blank" rel="noopener"
              className="inline-flex items-center gap-1.5 rounded-lg border border-border px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground">
              SiliconFlow <ExternalLink className="h-3.5 w-3.5" />
            </a>
          </div>
        </div>

        <div className="lg:w-72 shrink-0">
          <div className="rounded-xl border border-border/50 bg-card p-5">
            <div className="text-[10px] font-mono uppercase tracking-wider text-muted-foreground/50 mb-4">
              Serverless — Pay-per-use
            </div>
            <div className="grid grid-cols-2 gap-2 mb-4">
              <div className="text-center py-2.5 rounded-lg bg-card/80 border border-border/20">
                <div className="text-[9px] font-mono text-muted-foreground/50 uppercase mb-0.5">Input</div>
                <div className="text-lg font-bold text-foreground">${model.inputPrice}</div>
                <div className="text-[9px] font-mono text-muted-foreground/40">/ M tokens</div>
              </div>
              <div className="text-center py-2.5 rounded-lg bg-card/80 border border-border/20">
                <div className="text-[9px] font-mono text-muted-foreground/50 uppercase mb-0.5">Output</div>
                <div className="text-lg font-bold text-foreground">${model.outputPrice}</div>
                <div className="text-[9px] font-mono text-muted-foreground/40">/ M tokens</div>
              </div>
            </div>
            <div className="space-y-1.5 text-xs">
              <div className="flex justify-between">
                <span className="text-muted-foreground/60">Total Context</span>
                <span className="font-semibold text-foreground font-mono">{model.context}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground/60">Max output</span>
                <span className="font-semibold text-foreground font-mono">{model.maxOutput}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground/60">Release</span>
                <span className="font-semibold text-foreground font-mono">{model.releaseDate}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground/60">License</span>
                <span className="font-semibold text-foreground font-mono">{model.license}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
