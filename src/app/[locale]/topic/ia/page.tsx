import { getAllLocalPosts } from "@/lib/content"
import { getPublication } from "@/lib/hashnode"
import { getTranslations } from "next-intl/server"
import { Brain } from "lucide-react"
import TopicHubPage from "@/components/TopicHubPage"
import type { Post } from "@/lib/types"

export const revalidate = 300

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: "home" })
  return {
    title: "Cases de IA — AI First",
    description: "Arquiteturas reais de IA de Nvidia, Microsoft, Google e OpenAI. Cases replicáveis com dados, código e lições aprendidas.",
  }
}

export default async function TopicIaPage({ params }: { params: Promise<{ locale: string }> }) {
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
    node.tags?.some((t) => t.slug.includes("ia"))
  )

  return (
    <TopicHubPage
      topic={{
        slug: "ia",
        label: "Cases de IA",
        description: "Arquiteturas reais de empresas como Nvidia, Microsoft, Google e OpenAI. Cases reproduzíveis com dados, código e lições aprendidas — traduzidos para aplicação prática no seu contexto.",
        icon: Brain,
        color: "#e50914",
        gradient: "from-[#e50914] to-[#00d4ff]",
        badgeColor: "v4-red",
        articles: filtered.length,
        posts: filtered,
      }}
      locale={locale}
    />
  )
}
