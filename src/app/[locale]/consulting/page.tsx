import { getTranslations } from "next-intl/server"
import ConsultingHero from "@/components/ConsultingHero"
import ConsultingProblem from "@/components/ConsultingProblem"
import ConsultingAudience from "@/components/ConsultingAudience"
import ConsultingServices from "@/components/ConsultingServices"
import ConsultingProcess from "@/components/ConsultingProcess"
import ConsultingResults from "@/components/ConsultingResults"
import ConsultingBio from "@/components/ConsultingBio"
import ConsultingLeadCapture from "@/components/ConsultingLeadCapture"
import ConsultingFaq from "@/components/ConsultingFaq"
import ConsultingWhatsApp from "@/components/ConsultingWhatsApp"
import ConsultingStickyCta from "@/components/ConsultingStickyCta"

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: "consulting" })
  return {
    title: t("metaTitle"),
    description: t("metaDescription"),
    openGraph: {
      title: t("metaTitle"),
      description: t("metaDescription"),
      locale: locale === "pt" ? "pt_BR" : locale === "en" ? "en_US" : "es_ES",
    },
  }
}

export default async function ConsultingPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Consultoria AI First",
    provider: {
      "@type": "Person",
      name: "Marcos Luciano",
      jobTitle: "AI Lead & AI Consultant",
      url: "https://marcosv4.cloud",
    },
    description: "Consultoria especializada em inteligência artificial, AI Search (AEO/GEO), arquitetura de sistemas inteligentes e SEO estratégico.",
    areaServed: ["BR", "US", "ES"],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Serviços de Consultoria AI",
      itemListElement: [
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "AI Strategy & Roadmap" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "AI Search (AEO & GEO)" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "SEO Estratégico & Performance" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "AI Ops & Automação Inteligente" } },
      ],
    },
  }

  const aggregateRatingSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: "Consultoria AI First",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      bestRating: "5",
      ratingCount: "30",
      reviewCount: "30",
    },
    review: [
      {
        "@type": "Review",
        author: { "@type": "Person", name: "Cliente" },
        reviewRating: { "@type": "Rating", ratingValue: "5" },
        reviewBody: "Resultado além do esperado. A arquitetura de IA que desenharam para nós transformou a operação.",
      },
    ],
  }

  const courseSchema = {
    "@context": "https://schema.org",
    "@type": "Course",
    name: "AI First Consulting Program",
    description: "Programa de consultoria em inteligência artificial para empresas.",
    provider: {
      "@type": "Person",
      name: "Marcos Luciano",
      jobTitle: "AI Lead",
    },
  }

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Início", item: "https://marcosv4.cloud" },
      { "@type": "ListItem", position: 2, name: "Consultoria AI", item: `https://marcosv4.cloud/${locale === "pt" ? "" : locale + "/"}consulting` },
    ],
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(aggregateRatingSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(courseSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <ConsultingHero />
      <ConsultingProblem />
      <ConsultingAudience />
      <ConsultingServices />
      <ConsultingProcess />
      <ConsultingResults />
      <ConsultingBio />
      <ConsultingLeadCapture />
      <ConsultingFaq />
      <ConsultingWhatsApp />
      <ConsultingStickyCta />
    </>
  )
}
