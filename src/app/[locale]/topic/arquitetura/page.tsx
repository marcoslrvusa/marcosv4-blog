import { getAllLocalPosts } from "@/lib/content"
import { getPublication } from "@/lib/hashnode"
import { getTranslations } from "next-intl/server"
import { Briefcase } from "lucide-react"
import TopicHubPage from "@/components/TopicHubPage"
import type { Post } from "@/lib/types"

export const revalidate = 300

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  return {
    title: "Arquitetura AI — AI First",
    description: "Guias práticos para construir sistemas com LLMs, agentes e automação inteligente. Arquitetura, infraestrutura e padrões de design para produção.",
  }
}

export default async function TopicArquiteturaPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  let posts: { node: Post }[] = []
  try {
    const pub = await getPublication()
    posts = pub.posts.edges
  } catch {
    const localPosts = getAllLocalPosts(locale)
    posts = localPosts.map((p) => ({ node: p }))
  }

  const filtered = posts.filter(({ node }) =>
    node.tags?.some((t) => t.slug.includes("arquitetura"))
  )

  return (
    <TopicHubPage
      topic={{
        slug: "arquitetura",
        label: "Arquitetura AI",
        description: "Padrões de design, infraestrutura e guias práticos para construir sistemas com LLMs, agentes autônomos, RAG e automação inteligente em produção.",
        icon: Briefcase,
        color: "#f59e0b",
        gradient: "from-[#f59e0b] to-[#f97316]",
        badgeColor: "amber",
        articles: filtered.length,
        posts: filtered,
      }}
      locale={locale}
    />
  )
}
