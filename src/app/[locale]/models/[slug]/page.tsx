import { notFound } from "next/navigation"
import Link from "next/link"
import { getModelBySlug, getAllModelSlugs } from "@/lib/models-data"
import { ArrowRight, ExternalLink, Calendar, Cpu, BarChart3, Zap, CheckCircle, Copy, Server, Sparkles } from "lucide-react"

export const revalidate = 86400

export async function generateStaticParams() {
  const slugs = getAllModelSlugs()
  return slugs.map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string; slug: string }> }) {
  const { slug } = await params
  const model = getModelBySlug(slug)
  if (!model) return { title: "Modelo não encontrado" }

  const title = `${model.name} - Modelo ${model.provider} | Preço, Contexto e Benchmarks`
  const description = model.description

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "article",
      locale: "pt_BR",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
    alternates: {
      canonical: `/models/${model.slug}`,
    },
  }
}

export default async function ModelPage({ params }: { params: Promise<{ locale: string; slug: string }> }) {
  const { locale, slug } = await params
  const model = getModelBySlug(slug)
  if (!model) notFound()

  const prefix = locale === "pt" ? "" : `/${locale}`

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Início", item: `https://marcosv4.cloud${prefix}` },
      { "@type": "ListItem", position: 2, name: "Modelos LLM", item: `https://marcosv4.cloud${prefix}/models` },
      { "@type": "ListItem", position: 3, name: model.name, item: `https://marcosv4.cloud${prefix}/models/${model.slug}` },
    ],
  }

  const productSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: model.name,
    applicationCategory: "AI Model",
    description: model.description,
    offers: {
      "@type": "Offer",
      price: model.inputPrice,
      priceCurrency: "USD",
      priceValidUntil: "2027-12-31",
    },
    author: { "@type": "Organization", name: model.provider },
    datePublished: model.releaseDate,
  }

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: `O que é o ${model.name}?`,
        acceptedAnswer: { "@type": "Answer", text: model.description },
      },
      {
        "@type": "Question",
        name: `Qual o preço do ${model.name} por milhão de tokens?`,
        acceptedAnswer: { "@type": "Answer", text: `O ${model.name} custa $${model.inputPrice}/M tokens para input e $${model.outputPrice}/M tokens para output no SiliconFlow, em modelo serverless pay-per-use.` },
      },
      {
        "@type": "Question",
        name: `Qual o contexto máximo do ${model.name}?`,
        acceptedAnswer: { "@type": "Answer", text: `O ${model.name} suporta até ${model.context} tokens de contexto (${parseInt(model.context) >= 1000 ? "mais de 1 milhão" : model.context + " mil"} tokens).` },
      },
      {
        "@type": "Question",
        name: `O ${model.name} é open-source?`,
        acceptedAnswer: { "@type": "Answer", text: `Sim, o ${model.name} é distribuído sob licença ${model.license}, permitindo uso comercial e fine-tuning.` },
      },
    ],
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* Breadcrumb */}
      <div className="mx-auto max-w-6xl px-6 pt-6">
        <nav className="flex items-center gap-2 font-mono text-[10px] text-muted-foreground/50">
          <Link href={`${prefix}`} className="hover:text-v4-red transition-colors">Início</Link>
          <span>/</span>
          <span className="text-muted-foreground/30">models</span>
          <span>/</span>
          <span className="text-foreground/60">{model.slug}</span>
        </nav>
      </div>

      {/* Model Hero */}
      <section className="mx-auto max-w-6xl px-6 py-10">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-3">
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-v4-red animate-pulse" />
              <span className="font-mono text-[10px] uppercase tracking-widest text-v4-red font-semibold">{model.provider}</span>
              <span className="text-muted-foreground/20">/</span>
              <span className="font-mono text-[10px] text-muted-foreground/50">Modelo LLM</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-sans font-bold text-foreground leading-tight mb-4">
              {model.name}
            </h1>

            <div className="flex items-center gap-2 mb-6">
              <code className="px-3 py-1.5 rounded-lg bg-card border border-border font-mono text-xs text-muted-foreground">
                {model.hfPath}
              </code>
              <button
                onClick={() => navigator.clipboard.writeText(model.hfPath)}
                className="p-1.5 rounded-lg border border-border hover:border-v4-red/30 transition-colors"
                aria-label="Copiar HuggingFace path"
              >
                <Copy className="h-3.5 w-3.5 text-muted-foreground" />
              </button>
            </div>

            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed mb-6 max-w-2xl">
              {model.longDescription}
            </p>

            {/* Quick Stats */}
            <div className="flex flex-wrap gap-4 mb-8">
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-card border border-border/50">
                <Calendar className="h-3.5 w-3.5 text-muted-foreground" />
                <span className="font-mono text-[11px] text-muted-foreground">{model.releaseDate}</span>
              </div>
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-card border border-border/50">
                <Cpu className="h-3.5 w-3.5 text-muted-foreground" />
                <span className="font-mono text-[11px] text-muted-foreground">{model.license}</span>
              </div>
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-card border border-border/50">
                <Server className="h-3.5 w-3.5 text-muted-foreground" />
                <span className="font-mono text-[11px] text-muted-foreground">SiliconFlow</span>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap gap-3">
              <a
                href={`https://cloud.siliconflow.com/me/playground/chat`}
                target="_blank"
                rel="noopener"
                className="inline-flex items-center gap-2 rounded-lg bg-v4-red px-5 py-2.5 text-sm font-semibold text-background transition-all hover:bg-v4-red/90 hover:shadow-lg hover:shadow-v4-red/20"
              >
                Testar no Playground
                <ExternalLink className="h-4 w-4" />
              </a>
              <a
                href={`https://huggingface.co/${model.hfPath}`}
                target="_blank"
                rel="noopener"
                className="inline-flex items-center gap-2 rounded-lg border border-border px-5 py-2.5 text-sm font-medium text-muted-foreground transition-all hover:border-v4-red/30 hover:text-v4-red"
              >
                HuggingFace
                <ExternalLink className="h-4 w-4" />
              </a>
              <Link
                href={`${prefix}/consulting`}
                className="inline-flex items-center gap-2 rounded-lg border border-v4-red/20 px-5 py-2.5 text-sm font-medium text-v4-red transition-all hover:bg-v4-red/5"
              >
                Preciso de ajuda com IA
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>

          {/* Pricing Card */}
          <div className="lg:w-80 shrink-0">
            <div className="rounded-xl border border-border/50 bg-card/50 p-6 sticky top-24">
              <div className="flex items-center gap-2 mb-4">
                <Zap className="h-4 w-4 text-v4-red" />
                <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground font-semibold">
                  Serverless — Pay-per-use
                </span>
              </div>

              <div className="grid grid-cols-2 gap-3 mb-6">
                <div className="text-center py-3 rounded-lg bg-card border border-border/30">
                  <p className="text-[10px] font-mono text-muted-foreground/60 uppercase tracking-wider mb-1">Input</p>
                  <p className="text-xl font-bold text-foreground">${model.inputPrice}</p>
                  <p className="text-[9px] font-mono text-muted-foreground/40">/ M tokens</p>
                </div>
                <div className="text-center py-3 rounded-lg bg-card border border-border/30">
                  <p className="text-[10px] font-mono text-muted-foreground/60 uppercase tracking-wider mb-1">Output</p>
                  <p className="text-xl font-bold text-v4-red">${model.outputPrice}</p>
                  <p className="text-[9px] font-mono text-muted-foreground/40">/ M tokens</p>
                </div>
              </div>

              <div className="space-y-2 mb-6">
                <div className="flex items-center justify-between text-xs">
                  <span className="text-muted-foreground">Contexto</span>
                  <span className="font-semibold text-foreground font-mono">{model.context}</span>
                </div>
                <div className="flex items-center justify-between text-xs">
                  <span className="text-muted-foreground">Max Output</span>
                  <span className="font-semibold text-foreground font-mono">{model.maxOutput}</span>
                </div>
                <div className="flex items-center justify-between text-xs">
                  <span className="text-muted-foreground">Licença</span>
                  <span className="font-semibold text-foreground font-mono">{model.license}</span>
                </div>
              </div>

              <a
                href={`https://www.siliconflow.com/models/${model.slug}`}
                target="_blank"
                rel="noopener"
                className="flex items-center justify-center gap-2 rounded-lg bg-v4-red/10 border border-v4-red/20 px-4 py-2.5 text-xs font-semibold text-v4-red transition-all hover:bg-v4-red hover:text-background"
              >
                Ver no SiliconFlow
                <ExternalLink className="h-3 w-3" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="mx-auto max-w-6xl px-6 pb-16">
        <div className="border-t border-border/30 pt-10">
          <h2 className="text-xl font-bold text-foreground mb-6">Principais Características</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {model.features.map((feature, i) => (
              <div key={i} className="flex items-start gap-3 p-3 rounded-lg bg-card/30 border border-border/20">
                <CheckCircle className="h-4 w-4 text-v4-red shrink-0 mt-0.5" />
                <span className="text-sm text-muted-foreground">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benchmarks */}
      <section className="border-t border-border/30 bg-card/20">
        <div className="mx-auto max-w-6xl px-6 py-12">
          <div className="flex items-center gap-2 mb-6">
            <BarChart3 className="h-4 w-4 text-v4-red" />
            <h2 className="text-xl font-bold text-foreground">Benchmarks</h2>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {model.benchmarks.map((b, i) => (
              <div key={i} className="text-center p-4 rounded-xl border border-border/30 bg-card/50">
                <p className="text-2xl font-bold text-v4-red mb-1">{b.value}</p>
                <p className="text-xs text-muted-foreground font-mono">{b.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="mx-auto max-w-6xl px-6 py-12">
        <div className="flex items-center gap-2 mb-6">
          <Sparkles className="h-4 w-4 text-v4-red" />
          <h2 className="text-xl font-bold text-foreground">Casos de Uso</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {model.useCases.map((uc, i) => (
            <div key={i} className="p-5 rounded-xl border border-border/30 bg-card/30 hover:border-v4-red/20 transition-colors">
              <h3 className="text-sm font-semibold text-foreground mb-2">{uc.title}</h3>
              <p className="text-xs text-muted-foreground leading-relaxed">{uc.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ Schema visible */}
      <section className="border-t border-border/30 bg-card/20">
        <div className="mx-auto max-w-6xl px-6 py-12">
          <h2 className="text-xl font-bold text-foreground mb-6">Perguntas Frequentes</h2>
          <div className="space-y-3 max-w-3xl">
            {[
              { q: `O que é o ${model.name}?`, a: model.description },
              { q: `Quanto custa o ${model.name}?`, a: `O modelo custa $${model.inputPrice}/M tokens para entrada e $${model.outputPrice}/M tokens para saída no SiliconFlow, em regime serverless.` },
              { q: `Qual o contexto máximo do ${model.name}?`, a: `${model.context} tokens de contexto, com saída máxima de ${model.maxOutput} tokens.` },
              { q: `${model.name} é open-source?`, a: `Sim, licenciado sob ${model.license}. Pode ser baixado do HuggingFace em ${model.hfPath}.` },
              { q: `Como usar o ${model.name}?`, a: `Disponível via API no SiliconFlow, compatível com OpenAI SDK. Basta configurar a API key e endpoint.` },
            ].map((faq, i) => (
              <details key={i} className="group rounded-lg border border-border/30 bg-card/30 open:border-v4-red/20 transition-all">
                <summary className="flex items-center justify-between p-4 cursor-pointer text-sm font-medium text-foreground hover:text-v4-red transition-colors">
                  {faq.q}
                  <span className="text-muted-foreground/50 group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <div className="px-4 pb-4 text-sm text-muted-foreground leading-relaxed">
                  {faq.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="mx-auto max-w-6xl px-6 py-12 text-center">
        <div className="rounded-xl border border-v4-red/20 bg-v4-red/[0.02] p-8">
          <h2 className="text-xl font-bold text-foreground mb-2">Quer usar {model.name} no seu projeto?</h2>
          <p className="text-sm text-muted-foreground mb-6 max-w-lg mx-auto">
            Oferecemos infraestrutura gerenciada com o stack completo: Ollama + Open WebUI + OpenClaw. Do VPS aos agentes em produção.
          </p>
          <Link
            href={`${prefix}/consulting`}
            className="inline-flex items-center gap-2 rounded-lg bg-v4-red px-6 py-3 text-sm font-semibold text-background transition-all hover:bg-v4-red/90 hover:shadow-lg hover:shadow-v4-red/20"
          >
            Solicitar Consultoria
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </>
  )
}
