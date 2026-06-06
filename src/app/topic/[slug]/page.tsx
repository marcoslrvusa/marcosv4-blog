import { getLocale, getTranslations } from "next-intl/server"
import { getAllLocalPosts } from "@/lib/content"
import { getPublication } from "@/lib/hashnode"
import TopicHubPage from "@/components/TopicHubPage"
import type { Post } from "@/lib/types"

const topics: Record<string, { label: string; description: string; color: string; gradient: string; badgeColor: string; tagFilter: string }> = {
  ia: {
    label: "Cases de IA",
    description: "Arquiteturas reais de empresas como Nvidia, Microsoft, Google e OpenAI. Cases reproduzíveis com dados, código e lições aprendidas — traduzidos para aplicação prática no seu contexto.",
    color: "#e50914",
    gradient: "from-[#e50914] to-[#f59e0b]",
    badgeColor: "v4-red",
    tagFilter: "ia",
  },
  mercado: {
    label: "Mercado de IA",
    description: "Análises de conjuntura, movimentos do mercado, aquisições, regulamentação e o que os lançamentos realmente significam para profissionais e empresas de tecnologia.",
    color: "#f59e0b",
    gradient: "from-[#f59e0b] to-[#e50914]",
    badgeColor: "amber",
    tagFilter: "mercado",
  },
  "ai-search": {
    label: "AI Search",
    description: "SEO, AEO e GEO na era dos motores generativos. Estratégias práticas para ser encontrado por ChatGPT, Perplexity, Google AI Overviews e os buscadores do futuro.",
    color: "#e50914",
    gradient: "from-[#e50914] to-[#f59e0b]",
    badgeColor: "v4-red",
    tagFilter: "ai-search",
  },
  arquitetura: {
    label: "Arquitetura AI",
    description: "Padrões de design, infraestrutura e guias práticos para construir sistemas com LLMs, agentes autônomos, RAG e automação inteligente em produção.",
    color: "#f59e0b",
    gradient: "from-[#f59e0b] to-[#e50914]",
    badgeColor: "amber",
    tagFilter: "arquitetura",
  },
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const locale = await getLocale()
  const t = await getTranslations({ locale, namespace: "home" })
  const topic = topics[slug]
  if (!topic) return { title: "Not Found" }
  return {
    title: `${topic.label} — AI First`,
    description: topic.description,
  }
}

export default async function TopicPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const locale = await getLocale()
  const topic = topics[slug]

  if (!topic) {
    return (
      <div className="mx-auto max-w-5xl px-6 py-24 text-center">
        <h1 className="text-2xl font-bold text-foreground mb-4">Tópico não encontrado</h1>
        <p className="text-muted-foreground">O tópico que você procura não existe.</p>
      </div>
    )
  }

  let posts: { node: Post }[] = []
  try {
    const pub = await getPublication()
    posts = pub.posts.edges
  } catch {
    const localPosts = getAllLocalPosts(locale)
    posts = localPosts.map((p) => ({ node: p }))
  }

  const filtered = posts.filter(({ node }) =>
    node.tags?.some((t) => t.slug.includes(topic.tagFilter))
  )

  return (
    <TopicHubPage
      topic={{
        slug,
        label: topic.label,
        description: topic.description,
        color: topic.color,
        gradient: topic.gradient,
        badgeColor: topic.badgeColor,
        articles: filtered.length,
        posts: filtered,
      }}
      locale={locale}
    />
  )
}
