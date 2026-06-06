import { BookOpen, CheckSquare, FileCode, Download } from "lucide-react"
import Link from "next/link"

interface MateriaisRicosProps {
  locale: string
}

const materials = [
  {
    id: "ebook",
    icon: BookOpen,
    gradient: "from-v4-red via-accent-gold to-accent-amber",
    color: "text-v4-red",
    bg: "bg-v4-red/10",
    hoverBg: "group-hover:bg-v4-red/20",
  },
  {
    id: "checklist",
    icon: CheckSquare,
    gradient: "from-accent-gold to-accent-amber",
    color: "text-accent-gold",
    bg: "bg-accent-gold/10",
    hoverBg: "group-hover:bg-accent-gold/20",
  },
  {
    id: "template",
    icon: FileCode,
    gradient: "from-accent-amber to-v4-red",
    color: "text-accent-amber",
    bg: "bg-accent-amber/10",
    hoverBg: "group-hover:bg-accent-amber/20",
  },
]

const titles = {
  pt: {
    section: "Materiais Ricos",
    description: "Recursos gratuitos para dominar AI Search e ser encontrado por IAs generativas",
    items: {
      ebook: {
        title: "Guia Prático de AI Search",
        desc: "Aprenda como ser encontrado pelo ChatGPT, Perplexity e Google AI Overviews em 5 passos práticos.",
        file: "/downloads/guia-ai-search-pt.pdf",
      },
      checklist: {
        title: "Checklist AI Search",
        desc: "8 passos objetivos para otimizar seu conteúdo para extração por IAs generativas.",
        file: "/downloads/checklist-ai-search-pt.pdf",
      },
      template: {
        title: "Template de Artigo AEO",
        desc: "Estrutura pronta de artigo otimizado para Answer Engine Optimization.",
        file: "/downloads/template-artigo-aeo-pt.pdf",
      },
    },
  },
  en: {
    section: "Free Resources",
    description: "Free resources to master AI Search and get found by generative AIs",
    items: {
      ebook: {
        title: "AI Search Practical Guide",
        desc: "Learn how to get found by ChatGPT, Perplexity, and Google AI Overviews in 5 practical steps.",
        file: "/downloads/ai-search-guide-en.pdf",
      },
      checklist: {
        title: "AI Search Checklist",
        desc: "8 objective steps to optimize your content for generative AI extraction.",
        file: "/downloads/checklist-ai-search-en.pdf",
      },
      template: {
        title: "AEO Article Template",
        desc: "Ready-to-use article structure optimized for Answer Engine Optimization.",
        file: "/downloads/template-artigo-aeo-en.pdf",
      },
    },
  },
  es: {
    section: "Recursos Gratuitos",
    description: "Recursos gratuitos para dominar AI Search y ser encontrado por IAs generativas",
    items: {
      ebook: {
        title: "Guía Práctica de AI Search",
        desc: "Aprende cómo ser encontrado por ChatGPT, Perplexity y Google AI Overviews en 5 pasos prácticos.",
        file: "/downloads/guia-ai-search-es.pdf",
      },
      checklist: {
        title: "Checklist AI Search",
        desc: "8 pasos objetivos para optimizar tu contenido para extracción por IAs generativas.",
        file: "/downloads/checklist-ai-search-es.pdf",
      },
      template: {
        title: "Plantilla de Artículo AEO",
        desc: "Estructura lista de artículo optimizado para Answer Engine Optimization.",
        file: "/downloads/template-artigo-aeo-es.pdf",
      },
    },
  },
}

const ctaLabels = {
  pt: "Baixar PDF",
  en: "Download PDF",
  es: "Descargar PDF",
}

const authorLabel = {
  pt: "Por Marcos Luciano · AI Lead & AI Search Specialist @ V4 Company",
  en: "By Marcos Luciano · AI Lead & AI Search Specialist @ V4 Company",
  es: "Por Marcos Luciano · AI Lead & AI Search Specialist @ V4 Company",
}

export default function MateriaisRicos({ locale }: MateriaisRicosProps) {
  const t = titles[locale as keyof typeof titles] || titles.pt
  const cta = ctaLabels[locale as keyof typeof ctaLabels] || ctaLabels.pt
  const author = authorLabel[locale as keyof typeof authorLabel] || authorLabel.pt

  return (
    <section className="mx-auto max-w-6xl px-6 mb-16 animate-fade-in">
      <div className="mb-8 flex items-center gap-3">
        <span className="font-mono text-xs font-medium text-muted-foreground">
          $ ls -la materiais-ricos/
        </span>
        <div className="h-px flex-1 bg-gradient-to-r from-border to-transparent" />
      </div>

      <div className="text-center mb-10">
        <h2 className="text-2xl md:text-3xl font-sans font-bold text-foreground mb-3">
          {t.section}
        </h2>
        <p className="text-sm text-muted-foreground max-w-xl mx-auto">
          {t.description}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {materials.map((mat) => {
          const item = t.items[mat.id as keyof typeof t.items]
          const Icon = mat.icon
          return (
            <div
              key={mat.id}
              className="group gradient-border rounded-xl bg-card overflow-hidden transition-all duration-300 hover:shadow-[0_0_30px_-5px_rgba(229,9,20,0.1)]"
            >
              <div className="p-6 flex flex-col h-full">
                <div className={`w-12 h-12 rounded-xl ${mat.bg} flex items-center justify-center mb-4 ${mat.hoverBg} transition-colors duration-300`}>
                  <Icon className={`w-6 h-6 ${mat.color}`} />
                </div>

                <h3 className="text-base font-sans font-semibold text-foreground mb-2">
                  {item.title}
                </h3>

                <p className="text-xs text-muted-foreground leading-relaxed mb-4 flex-1">
                  {item.desc}
                </p>

                <p className="text-[10px] font-mono text-muted-foreground/60 mb-4 leading-relaxed">
                  {author}
                </p>

                <Link
                  href={item.file}
                  download
                  className="inline-flex items-center justify-center gap-2 rounded-lg bg-v4-red/10 text-v4-red border border-v4-red/20 px-4 py-2.5 text-xs font-semibold transition-all hover:bg-v4-red hover:text-background group/link"
                >
                  <Download className="w-3.5 h-3.5 transition-transform group-hover/link:-translate-y-0.5" />
                  {cta}
                </Link>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}