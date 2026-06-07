import { Cloud, Building2, BookOpen } from "lucide-react"
import Link from "next/link"
import HostingerBanner from "./HostingerBanner"

interface ProductsSectionProps {
  locale: string
}

const products = {
  pt: {
    tag: "Soluções Empresariais",
    title: "Infraestrutura de IA para empresas",
    desc: "De infraestrutura gerenciada a arquitetura corporativa. Produtos com precificação benchmark do setor e margens transparentes.",
    cta: "Solicitar Proposta",
    items: [
      {
        icon: Cloud,
        gradient: "from-v4-red via-accent-gold to-accent-amber",
        color: "text-v4-red",
        bg: "bg-v4-red/10",
        title: "IAAS — AI Infrastructure as a Service",
        tagline: "Infraestrutura gerenciada",
        desc: "VPS Hostinger AMD EPYC pré-configurado com stack completo de IA: Docker, Ollama, Open WebUI, OpenClaw. Monitoramento 24/7, backups automáticos, SSL, domínio. Você usa, nós gerenciamos.",
        features: [
          "VPS Hostinger dedicado (AMD EPYC + NVMe)",
          "Docker + Portainer + Ollama + Open WebUI",
          "OpenClaw Gateway multi-canal (WhatsApp/Telegram/Discord)",
          "Monitoramento 24/7 + alertas proativos",
          "Backups automáticos criptografados",
          "SSL automático + domínio .com.br",
          "Suporte técnico prioritário 24h",
          "Relatórios mensais de performance",
        ],
        investment: "R$ 5.997",
        investDetail: "setup + R$ 597/mês gestão · margem 65% (benchmark IAAS: 55-70%)",
      },
      {
        icon: Building2,
        gradient: "from-accent-gold to-accent-amber",
        color: "text-accent-gold",
        bg: "bg-accent-gold/10",
        title: "AI Architecture & Process Design",
        tagline: "Consultoria corporativa",
        desc: "Arquitetura completa de IA para sua empresa: pipelines RAG, orquestração de agentes, governance framework, segurança e auditoria. Projeto entregue em 15 dias.",
        features: [
          "Diagnóstico de maturidade em IA",
          "Design de arquitetura RAG + agentes",
          "Pipeline de processos automatizados",
          "Governança, compliance e auditoria",
          "Plano de rollout 30-60-90 dias",
          "Workshop de alinhamento com equipe técnica",
          "Documentação técnica completa",
          "1 mês de suporte pós-implementação",
        ],
        investment: "R$ 24.997",
        investDetail: "investimento único · margem 75% (benchmark consultoria: 70-85%)",
      },
      {
        icon: BookOpen,
        gradient: "from-accent-amber to-v4-red",
        color: "text-accent-amber",
        bg: "bg-accent-amber/10",
        title: "AI Playbook — Do Zero ao IAAS",
        tagline: "Educação + templates",
        desc: "Aprenda a construir sua própria infraestrutura de IA do zero. PDF + vídeos + scripts + templates. Do VPS aos agentes em produção — o mesmo stack que usamos nos clientes enterprise.",
        features: [
          "PDF + 8h de vídeo passo a passo",
          "Scripts de deploy automatizados",
          "Templates de arquitetura RAG + agentes",
          "Stack: Ollama + WebUI + OpenClaw + ChromaDB",
          "Otimizado para Hostinger VPS (15+ CPUs)",
          "Acesso vitalício + atualizações perpétuas",
          "Comunidade exclusiva de alunos",
          "Suporte via Discord por 6 meses",
        ],
        investment: "R$ 497",
        investDetail: "acesso vitalício · margem 90% (benchmark produto digital: 85-95%)",
      },
    ],
  },
  en: {
    tag: "Enterprise Solutions",
    title: "AI Infrastructure for Business",
    desc: "From managed infrastructure to enterprise architecture. Industry-benchmarked pricing with transparent margins.",
    cta: "Request Proposal",
    items: [
      {
        icon: Cloud,
        gradient: "from-v4-red via-accent-gold to-accent-amber",
        color: "text-v4-red",
        bg: "bg-v4-red/10",
        title: "IAAS — AI Infrastructure as a Service",
        tagline: "Managed infrastructure",
        desc: "Pre-configured Hostinger AMD EPYC VPS with full AI stack: Docker, Ollama, Open WebUI, OpenClaw. 24/7 monitoring, auto backups, SSL, domain. You use, we manage.",
        features: [
          "Dedicated Hostinger VPS (AMD EPYC + NVMe)",
          "Docker + Portainer + Ollama + Open WebUI",
          "OpenClaw multi-channel gateway (WhatsApp/Telegram/Discord)",
          "24/7 monitoring with proactive alerts",
          "Encrypted automated backups",
          "Auto SSL + included domain",
          "24h priority technical support",
          "Monthly performance reports",
        ],
        investment: "$1.997",
        investDetail: "setup + $199/month management · 65% margin (IAAS benchmark: 55-70%)",
      },
      {
        icon: Building2,
        gradient: "from-accent-gold to-accent-amber",
        color: "text-accent-gold",
        bg: "bg-accent-gold/10",
        title: "AI Architecture & Process Design",
        tagline: "Enterprise consulting",
        desc: "Complete AI architecture for your business: RAG pipelines, agent orchestration, governance framework, security and audit. Delivered in 15 days.",
        features: [
          "AI maturity assessment",
          "RAG + agent architecture design",
          "Automated process pipeline",
          "Governance, compliance & audit",
          "30-60-90 day rollout plan",
          "Technical team alignment workshop",
          "Complete technical documentation",
          "1 month post-implementation support",
        ],
        investment: "$8.997",
        investDetail: "one-time investment · 75% margin (consulting benchmark: 70-85%)",
      },
      {
        icon: BookOpen,
        gradient: "from-accent-amber to-v4-red",
        color: "text-accent-amber",
        bg: "bg-accent-amber/10",
        title: "AI Playbook — Zero to IAAS",
        tagline: "Education + templates",
        desc: "Learn to build your own AI infrastructure from scratch. PDF + videos + scripts + templates. From VPS to production agents — the same stack we use in enterprise clients.",
        features: [
          "PDF + 8h step-by-step video",
          "Automated deploy scripts",
          "RAG + agent architecture templates",
          "Stack: Ollama + WebUI + OpenClaw + ChromaDB",
          "Optimized for Hostinger VPS (15+ CPUs)",
          "Lifetime access + perpetual updates",
          "Exclusive student community",
          "6-month Discord support",
        ],
        investment: "$197",
        investDetail: "lifetime access · 90% margin (digital product benchmark: 85-95%)",
      },
    ],
  },
  es: {
    tag: "Soluciones Empresariales",
    title: "Infraestructura de IA para empresas",
    desc: "Desde infraestructura gestionada hasta arquitectura corporativa. Precios benchmark del sector con márgenes transparentes.",
    cta: "Solicitar Propuesta",
    items: [
      {
        icon: Cloud,
        gradient: "from-v4-red via-accent-gold to-accent-amber",
        color: "text-v4-red",
        bg: "bg-v4-red/10",
        title: "IAAS — AI Infrastructure as a Service",
        tagline: "Infraestructura gestionada",
        desc: "VPS Hostinger AMD EPYC preconfigurado con stack completo de IA: Docker, Ollama, Open WebUI, OpenClaw. Monitoreo 24/7, backups automáticos, SSL, dominio. Tú usas, nosotros gestionamos.",
        features: [
          "VPS Hostinger dedicado (AMD EPYC + NVMe)",
          "Docker + Portainer + Ollama + Open WebUI",
          "OpenClaw Gateway multicanal (WhatsApp/Telegram/Discord)",
          "Monitoreo 24/7 + alertas proactivos",
          "Backups automáticos cifrados",
          "SSL automático + dominio incluido",
          "Soporte técnico prioritario 24h",
          "Informes mensuales de rendimiento",
        ],
        investment: "$1.997",
        investDetail: "setup + $199/mes gestión · margen 65% (benchmark IAAS: 55-70%)",
      },
      {
        icon: Building2,
        gradient: "from-accent-gold to-accent-amber",
        color: "text-accent-gold",
        bg: "bg-accent-gold/10",
        title: "AI Architecture & Process Design",
        tagline: "Consultoría corporativa",
        desc: "Arquitectura completa de IA para tu empresa: pipelines RAG, orquestación de agentes, governance framework, seguridad y auditoría. Proyecto entregado en 15 días.",
        features: [
          "Diagnóstico de madurez en IA",
          "Diseño de arquitectura RAG + agentes",
          "Pipeline de procesos automatizados",
          "Gobernanza, compliance y auditoría",
          "Plan de rollout 30-60-90 días",
          "Workshop de alineación con equipo técnico",
          "Documentación técnica completa",
          "1 mes de soporte post-implementación",
        ],
        investment: "$8.997",
        investDetail: "inversión única · margen 75% (benchmark consultoría: 70-85%)",
      },
      {
        icon: BookOpen,
        gradient: "from-accent-amber to-v4-red",
        color: "text-accent-amber",
        bg: "bg-accent-amber/10",
        title: "AI Playbook — De Cero a IAAS",
        tagline: "Educación + plantillas",
        desc: "Aprende a construir tu propia infraestructura de IA desde cero. PDF + videos + scripts + plantillas. Del VPS a los agentes en producción — el mismo stack que usamos en clientes enterprise.",
        features: [
          "PDF + 8h de video paso a paso",
          "Scripts de deploy automatizados",
          "Plantillas de arquitectura RAG + agentes",
          "Stack: Ollama + WebUI + OpenClaw + ChromaDB",
          "Optimizado para Hostinger VPS (15+ CPUs)",
          "Acceso vitalicio + actualizaciones perpetuas",
          "Comunidad exclusiva de alumnos",
          "Soporte via Discord por 6 meses",
        ],
        investment: "$197",
        investDetail: "acceso vitalicio · margen 90% (benchmark producto digital: 85-95%)",
      },
    ],
  },
}

export default function ProductsSection({ locale }: ProductsSectionProps) {
  const t = products[locale as keyof typeof products] || products.pt

  return (
    <section className="mx-auto max-w-6xl px-6 mb-16 animate-fade-in" id="produtos">
      <div className="mb-8 flex items-center gap-3">
        <span className="font-mono text-xs font-medium text-muted-foreground">
          $ ls -la produtos-ai/
        </span>
        <div className="h-px flex-1 bg-gradient-to-r from-border to-transparent" />
      </div>

      <div className="text-center mb-10">
        <span className="inline-block px-3 py-1 mb-4 text-xs font-mono tracking-wider uppercase text-v4-red border border-v4-red/30 rounded-full">
          {t.tag}
        </span>
        <h2 className="text-2xl md:text-3xl font-sans font-bold text-foreground mb-3">
          {t.title}
        </h2>
        <p className="text-sm text-muted-foreground max-w-xl mx-auto">
          {t.desc}
        </p>
      </div>

      {/* HOSTINGER BANNER — HERO (topo da seção de produtos) */}
      <div className="mb-10 border border-dashed border-accent-gold/30 rounded-xl p-3">
        <div className="flex items-center gap-2 mb-2 px-1">
          <span className="inline-block w-2 h-2 rounded-full bg-accent-gold" />
          <span className="font-mono text-[9px] uppercase tracking-widest text-accent-gold font-semibold">
            Comece agora a usar a AI em outro nível
          </span>
        </div>
        <HostingerBanner variant="hero" locale={locale} />
      </div>

      {/* HOSTINGER BANNER — INLINE (entre produtos e próximos passos) */}
      <div className="border border-dashed border-accent-gold/30 rounded-xl p-3">
        <div className="flex items-center gap-2 mb-2 px-1">
          <span className="inline-block w-2 h-2 rounded-full bg-accent-gold" />
          <span className="font-mono text-[9px] uppercase tracking-widest text-accent-gold font-semibold">
            Comece agora a usar a AI em outro nível
          </span>
        </div>
        <HostingerBanner variant="inline" locale={locale} />
      </div>
    </section>
  )
}