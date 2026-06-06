import ProductsPage from "@/components/ProductsPage"
import type { Metadata } from "next"

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params

  const metas: Record<string, Metadata> = {
    pt: {
      title: "Produtos AI — Infraestrutura, Arquitetura e Educação em IA | V4 Company",
      description: "Infraestrutura de IA gerenciada (IAAS), arquitetura corporativa e playbook educativo. Soluções benchmark com margens transparentes para empresas que querem AI First de verdade.",
    },
    en: {
      title: "AI Products — Infrastructure, Architecture & Education | V4 Company",
      description: "Managed AI Infrastructure (IAAS), enterprise architecture, and educational playbook. Benchmark-priced solutions with transparent margins.",
    },
    es: {
      title: "Productos AI — Infraestructura, Arquitectura y Educación en IA | V4 Company",
      description: "Infraestructura de IA gestionada (IAAS), arquitectura corporativa y playbook educativo. Soluciones benchmark con márgenes transparentes.",
    },
  }

  return metas[locale] || metas.pt
}

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  return <ProductsPage locale={locale} />
}
