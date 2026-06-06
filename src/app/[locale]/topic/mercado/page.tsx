import { getAllLocalPosts } from "@/lib/content"
import { getPublication } from "@/lib/hashnode"
import { getTranslations } from "next-intl/server"
import { TrendingUp } from "lucide-react"
import TopicHubPage from "@/components/TopicHubPage"
import type { Post } from "@/lib/types"

export const revalidate = 300

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  return {
    title: "Mercado de IA — AI First",
    description: "Conjuntura, atualizações e análises do mercado de inteligência artificial. O que os lançamentos realmente significam para profissionais e empresas.",
  }
}

export default async function TopicMercadoPage({ params }: { params: Promise<{ locale: string }> }) {
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
    node.tags?.some((t) => t.slug.includes("mercado"))
  )

  return (
    <TopicHubPage
      topic={{
        slug: "mercado",
        label: "Mercado de IA",
        description: "Análises de conjuntura, movimentos do mercado, aquisições, regulamentação e o que os lançamentos realmente significam para profissionais e empresas de tecnologia.",
        icon: TrendingUp,
        color: "#00d4ff",
        gradient: "from-[#00d4ff] to-[#06b6d4]",
        badgeColor: "cyan",
        articles: filtered.length,
        posts: filtered,
      }}
      locale={locale}
    />
  )
}
