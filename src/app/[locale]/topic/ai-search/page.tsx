import { getAllLocalPosts } from "@/lib/content"
import { getPublication } from "@/lib/hashnode"
import { getTranslations } from "next-intl/server"
import { Layers } from "lucide-react"
import TopicHubPage from "@/components/TopicHubPage"
import type { Post } from "@/lib/types"

export const revalidate = 300

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  return {
    title: "AI Search — AI First",
    description: "SEO, AEO e GEO na era dos motores generativos. Guias práticos para ser encontrado por ChatGPT, Perplexity e Google AI Overviews.",
  }
}

export default async function TopicAiSearchPage({ params }: { params: Promise<{ locale: string }> }) {
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
    node.tags?.some((t) => t.slug.includes("ai-search"))
  )

  return (
    <TopicHubPage
      topic={{
        slug: "ai-search",
        label: "AI Search",
        description: "SEO, AEO e GEO na era dos motores generativos. Estratégias práticas para ser encontrado por ChatGPT, Perplexity, Google AI Overviews e os buscadores do futuro.",
        icon: Layers,
        color: "#8b5cf6",
        gradient: "from-[#8b5cf6] to-[#6366f1]",
        badgeColor: "purple",
        articles: filtered.length,
        posts: filtered,
      }}
      locale={locale}
    />
  )
}
