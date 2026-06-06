import { Cloud, Building2, BookOpen, ArrowRight, Server, Sparkles,
  Shield, Target, Zap, TrendingUp, CheckCircle2, XCircle, Star,
  BarChart3, Brain, BadgeCheck, ChevronDown } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import HostingerBanner from "./HostingerBanner"
import LLMLogosBar from "./LLMLogosBar"
import ModelHighlights from "./ModelHighlights"

interface ProductsPageProps {
  locale: string
}

const productsData = {
  pt: {
    seo: {
      title: "Produtos AI — Infraestrutura, Arquitetura e Educação em IA | V4 Company",
      description: "Infraestrutura de IA gerenciada (IAAS), arquitetura corporativa e playbook educativo. Soluções benchmark com margens transparentes para empresas que querem AI First de verdade.",
    },
    hero: {
      tag: "Soluções Empresariais",
      title: "Infraestrutura de IA que sua empresa merece",
      subtitle: "Você não precisa de mais ferramentas. Você precisa de quem entende do stack inteiro — do VPS ao agente em produção.",
      cta: "Solicitar Proposta",
      ctaSecondary: "Tirar Dúvidas no WhatsApp",
    },
    pain: {
      title: "O verdadeiro custo de não ter IA",
      subtitle: "Enquanto você decide, seus concorrentes já estão automatizando.",
      items: [
        {
          icon: XCircle,
          color: "text-v4-red",
          pain: "Horas perdidas com tarefas repetitivas que um agente AI faria em segundos",
          gain: "Automação 24/7 de atendimento, suporte e processos internos",
        },
        {
          icon: XCircle,
          color: "text-v4-red",
          pain: "Dados sensíveis enviados para APIs externas sem controle",
          gain: "Modelos rodando no seu VPS, com seus dados, sob seu controle",
        },
        {
          icon: XCircle,
          color: "text-v4-red",
          pain: "Dependência de ferramentas SaaS que custam caro e não se integram",
          gain: "Stack unificado: Ollama + Open WebUI + OpenClaw em um só lugar",
        },
        {
          icon: XCircle,
          color: "text-v4-red",
          pain: "Profissionais de IA escassos e salários acima de R$ 30k/mês",
          gain: "Infraestrutura gerenciada por especialista, sem contratar time interno",
        },
      ],
    },
    products: {
      title: "Escolha o nível de maturidade ideal",
      subtitle: "Do gerenciamento completo ao aprendizado hands-on. Três produtos, um ecossistema.",
    },
    objections: {
      title: "Perguntas que empresas como a sua fazem",
      subtitle: "Respostas diretas baseadas em 12+ anos de mercado — sem rodeios.",
      faq: [
        {
          q: "\"É muito caro. Não temos orçamento para IA agora.\"",
          a: "Entendo. Mas o custo de NÃO fazer IA é maior. Cada hora da sua equipe gasta com tarefas repetitivas é dinheiro que poderia estar gerando receita. Nosso IAAS começa com R$ 5.997 de setup + R$ 597/mês — menos que o salário de um estagiário. E em 30 dias você já vê resultado. Invista ou fique para trás.",
        },
        {
          q: "\"Não temos equipe técnica para manter isso.\"",
          a: "Por isso existe o IAAS. Nós gerenciamos o servidor, o stack, a segurança, os backups e as atualizações. Você só precisa usar. O OpenClaw já vem configurado com WhatsApp, Telegram e Discord. Sua equipe aprende a operar em 2 horas. Nós damos suporte 24h.",
        },
        {
          q: "\"Já usamos ChatGPT/OpenAI. Por que precisamos de mais?\"",
          a: "ChatGPT é excelente para uso pessoal. Para uma empresa, você precisa de: (1) controle total dos dados, (2) modelos rodando localmente sem depender de API de terceiros, (3) agentes conectados aos seus sistemas, (4) personalização completa. Com nosso stack, você tem tudo isso pagando uma fração do custo de APIs externas acima de 50k requisições/mês.",
        },
        {
          q: "\"E se não funcionar? Já queimamos dinheiro com tecnologia antes.\"",
          a: "Justa. Por isso nossos produtos têm camadas de segurança: diagnóstico de maturidade antes de qualquer implementação, roadmap 30-60-90 dias com entregas semanais, arquitetura validada por casos reais (Nvidia, Microsoft, Google). E suporte 24h para correção imediata. Não é promessa, é processo.",
        },
        {
          q: "\"Preciso de aprovação da diretoria. Como justifico o investimento?\"",
          a: "Fornecemos um ROI calculator personalizado antes da compra. Empresas típicas reduzem custos operacionais em 40% nos primeiros 60 dias. O IAAS se paga sozinho. Fornecemos também case studies, benchmark do setor e uma proposta formal com escopo, prazos e entregáveis. É só levar para a diretoria.",
        },
        {
          q: "\"Já temos um fornecedor de tecnologia.\"",
          a: "Ótimo. Então você sabe o que custa e o que entrega. Nossa proposta é: comparamos lado a lado. Mostramos onde seu fornecedor atual deixa gaps (controle de dados, personalização, custo de escala) e como nosso stack integrado resolve. Sem compromisso. Se não formos melhores, não fechamos.",
        },
      ],
    },
    trust: {
      title: "Por que empresas confiam na V4 Company",
      items: [
        { icon: BarChart3, value: "150+", label: "Artigos publicados", desc: "Análises de IA lidas por milhares de profissionais" },
        { icon: BadgeCheck, value: "12+", label: "Anos de experiência", desc: "De SEO a AI Architecture, sempre na vanguarda" },
        { icon: Brain, value: "Google & Meta", label: "Certificações oficiais", desc: "Qualificação reconhecida pelas big techs" },
        { icon: TrendingUp, value: "95%", label: "Satisfação", desc: "Clientes que recomendam e voltam" },
      ],
    },
    cta: {
      title: "Pronto para levar sua empresa ao próximo nível?",
      subtitle: "Agende uma call de 30 minutos. Sem pitching. Sem pressão. Só diagnóstico e proposta.",
      cta: "Solicitar Proposta",
      ctaSecondary: "Ver Cases de Sucesso",
    },
  },
  en: {
    seo: {
      title: "AI Products — Infrastructure, Architecture & Education | V4 Company",
      description: "Managed AI Infrastructure (IAAS), enterprise architecture, and educational playbook. Benchmark-priced solutions with transparent margins.",
    },
    hero: {
      tag: "Enterprise Solutions",
      title: "The AI Infrastructure Your Business Deserves",
      subtitle: "You don't need more tools. You need someone who owns the entire stack — from VPS to production agents.",
      cta: "Request Proposal",
      ctaSecondary: "Ask Questions on WhatsApp",
    },
    pain: {
      title: "The real cost of NOT having AI",
      subtitle: "While you decide, your competitors are already automating.",
      items: [
        {
          icon: XCircle, color: "text-v4-red",
          pain: "Hours lost on repetitive tasks an AI agent would handle in seconds",
          gain: "24/7 automation of customer support, service desk, and internal processes",
        },
        {
          icon: XCircle, color: "text-v4-red",
          pain: "Sensitive data sent to external APIs with no control",
          gain: "Models running on your VPS, with your data, under your control",
        },
        {
          icon: XCircle, color: "text-v4-red",
          pain: "Expensive SaaS tools that don't integrate with each other",
          gain: "Unified stack: Ollama + Open WebUI + OpenClaw in one place",
        },
        {
          icon: XCircle, color: "text-v4-red",
          pain: "AI talent is scarce — salaries above $8k/month",
          gain: "Managed infrastructure by a specialist, no internal team required",
        },
      ],
    },
    products: {
      title: "Choose your maturity level",
      subtitle: "From full management to hands-on learning. Three products, one ecosystem.",
    },
    objections: {
      title: "Questions companies like yours ask",
      subtitle: "Straight answers from 12+ years in the market — no fluff.",
      faq: [
        {
          q: "\"It's too expensive. We don't have budget for AI right now.\"",
          a: "I understand. But the cost of NOT doing AI is higher. Every hour your team spends on repetitive tasks is money that could generate revenue. Our IAAS starts at $1,997 setup + $199/month — less than an intern's salary. And you see results in 30 days. Invest or fall behind.",
        },
        {
          q: "\"We don't have a technical team to maintain this.\"",
          a: "That's exactly why IAAS exists. We manage the server, the stack, security, backups, and updates. You just use it. OpenClaw comes pre-configured with WhatsApp, Telegram, and Discord. Your team learns to operate it in 2 hours. We provide 24h support.",
        },
        {
          q: "\"We already use ChatGPT/OpenAI. Why do we need more?\"",
          a: "ChatGPT is great for personal use. For a business, you need: (1) full data control, (2) local models without third-party API dependency, (3) agents connected to your systems, (4) full customization. With our stack, you get all this at a fraction of the cost of external APIs beyond 50k requests/month.",
        },
        {
          q: "\"What if it doesn't work? We've burned money on tech before.\"",
          a: "Fair. That's why our products have safety layers: maturity assessment before any implementation, 30-60-90 day roadmap with weekly deliverables, architecture validated by real cases (Nvidia, Microsoft, Google). And 24h support for immediate fixes. Not a promise — a process.",
        },
        {
          q: "\"I need board approval. How do I justify this?\"",
          a: "We provide a personalized ROI calculator before purchase. Typical companies reduce operating costs by 40% in the first 60 days. IAAS pays for itself. We also provide case studies, industry benchmarks, and a formal proposal with scope, timeline, and deliverables. Ready for the boardroom.",
        },
        {
          q: "\"We already have a technology provider.\"",
          a: "Great. Then you know what it costs and what it delivers. Our proposal: we compare side by side. We show where your current provider leaves gaps (data control, customization, scale costs) and how our integrated stack solves them. No commitment. If we're not better, we don't close.",
        },
      ],
    },
    trust: {
      title: "Why companies trust V4 Company",
      items: [
        { icon: BarChart3, value: "150+", label: "Published articles", desc: "AI analysis read by thousands of professionals" },
        { icon: BadgeCheck, value: "12+", label: "Years of experience", desc: "From SEO to AI Architecture, always ahead" },
        { icon: Brain, value: "Google & Meta", label: "Official certifications", desc: "Recognition by the biggest tech companies" },
        { icon: TrendingUp, value: "95%", label: "Satisfaction rate", desc: "Clients who recommend and return" },
      ],
    },
    cta: {
      title: "Ready to take your company to the next level?",
      subtitle: "Book a 30-minute call. No pitching. No pressure. Just diagnosis and proposal.",
      cta: "Request Proposal",
      ctaSecondary: "View Case Studies",
    },
  },
  es: {
    seo: {
      title: "Productos AI — Infraestructura, Arquitectura y Educación en IA | V4 Company",
      description: "Infraestructura de IA gestionada (IAAS), arquitectura corporativa y playbook educativo. Soluciones benchmark con márgenes transparentes.",
    },
    hero: {
      tag: "Soluciones Empresariales",
      title: "La infraestructura de IA que tu empresa merece",
      subtitle: "No necesitas más herramientas. Necesitas a alguien que entienda el stack completo — del VPS al agente en producción.",
      cta: "Solicitar Propuesta",
      ctaSecondary: "Resolver Dudas por WhatsApp",
    },
    pain: {
      title: "El verdadero costo de NO tener IA",
      subtitle: "Mientras decides, tus competidores ya están automatizando.",
      items: [
        {
          icon: XCircle, color: "text-v4-red",
          pain: "Horas perdidas en tareas repetitivas que un agente AI haría en segundos",
          gain: "Automatización 24/7 de atención, soporte y procesos internos",
        },
        {
          icon: XCircle, color: "text-v4-red",
          pain: "Datos sensibles enviados a APIs externas sin control",
          gain: "Modelos en tu VPS, con tus datos, bajo tu control",
        },
        {
          icon: XCircle, color: "text-v4-red",
          pain: "Dependencia de herramientas SaaS caras que no se integran",
          gain: "Stack unificado: Ollama + Open WebUI + OpenClaw en un solo lugar",
        },
        {
          icon: XCircle, color: "text-v4-red",
          pain: "Profesionales de IA escasos con salarios above $8k/mes",
          gain: "Infraestructura gestionada por especialista, sin contratar equipo interno",
        },
      ],
    },
    products: {
      title: "Elige tu nivel de madurez ideal",
      subtitle: "Desde gestión completa hasta aprendizaje práctico. Tres productos, un ecosistema.",
    },
    objections: {
      title: "Preguntas que empresas como la tuya hacen",
      subtitle: "Respuestas directas basadas en 12+ años de mercado — sin rodeos.",
      faq: [
        {
          q: "\"Es muy caro. No tenemos presupuesto para IA ahora.\"",
          a: "Lo entiendo. Pero el costo de NO hacer IA es mayor. Cada hora de tu equipo en tareas repetitivas es dinero que podría generar ingresos. Nuestro IAAS comienza con $1,997 de setup + $199/mes — menos que el salario de un becario. Y en 30 días ves resultados.",
        },
        {
          q: "\"No tenemos equipo técnico para mantenerlo.\"",
          a: "Por eso existe el IAAS. Nosotros gestionamos el servidor, el stack, la seguridad, los backups y las actualizaciones. Tú solo usas. OpenClaw viene preconfigurado con WhatsApp, Telegram y Discord. Soporte 24h incluido.",
        },
        {
          q: "\"Ya usamos ChatGPT/OpenAI. ¿Por qué necesitamos más?\"",
          a: "ChatGPT es excelente para uso personal. Para una empresa necesitas: (1) control total de datos, (2) modelos locales sin depender de API externa, (3) agentes conectados a tus sistemas, (4) personalización completa. Con nuestro stack tienes todo por una fracción del costo.",
        },
        {
          q: "\"¿Y si no funciona? Ya quemamos dinero en tecnología antes.\"",
          a: "Justo. Por eso nuestros productos tienen capas de seguridad: diagnóstico de madurez antes de implementar, roadmap 30-60-90 días con entregas semanales, arquitectura validada por casos reales. Y soporte 24h para corrección inmediata.",
        },
        {
          q: "\"Necesito aprobación de la directiva. ¿Cómo justifico la inversión?\"",
          a: "Entregamos un ROI calculator personalizado antes de la compra. Empresas típicas reducen costos operativos en 40% en los primeros 60 días. Fornecemos también case studies, benchmark del sector y propuesta formal con alcance y plazos.",
        },
        {
          q: "\"Ya tenemos un proveedor de tecnología.\"",
          a: "Perfecto. Nuestra propuesta: comparamos lado a lado. Mostramos dónde tu proveedor actual deja gaps y cómo nuestro stack integrado los resuelve. Sin compromiso. Si no somos mejores, no cerramos.",
        },
      ],
    },
    trust: {
      title: "Por qué las empresas confían en V4 Company",
      items: [
        { icon: BarChart3, value: "150+", label: "Artículos publicados", desc: "Análisis de IA leídos por miles" },
        { icon: BadgeCheck, value: "12+", label: "Años de experiencia", desc: "De SEO a AI Architecture, siempre a la vanguardia" },
        { icon: Brain, value: "Google & Meta", label: "Certificaciones oficiales", desc: "Reconocimiento de las big techs" },
        { icon: TrendingUp, value: "95%", label: "Satisfacción", desc: "Clientes que recomiendan y vuelven" },
      ],
    },
    cta: {
      title: "¿Listo para llevar tu empresa al siguiente nivel?",
      subtitle: "Agenda una llamada de 30 minutos. Sin pitching. Sin presión. Solo diagnóstico y propuesta.",
      cta: "Solicitar Propuesta",
      ctaSecondary: "Ver Casos de Éxito",
    },
  },
}

const productCards = [
  {
    icon: Cloud, color: "text-v4-red", bg: "bg-v4-red/10",
    title: "IAAS — AI Infrastructure as a Service",
    tagline: "Infraestrutura gerenciada",
    desc: "VPS Hostinger AMD EPYC pré-configurado com stack completo de IA: Docker, Ollama, Open WebUI, OpenClaw. Monitoramento 24/7, backups automáticos, SSL, domínio. Você usa, nós gerenciamos.",
    features: ["VPS Hostinger dedicado (AMD EPYC + NVMe)", "Docker + Portainer + Ollama + Open WebUI", "OpenClaw Gateway multi-canal (WhatsApp/Telegram/Discord)", "Monitoramento 24/7 + alertas proativos", "Backups automáticos criptografados", "SSL automático + domínio .com.br", "Suporte técnico prioritário 24h", "Relatórios mensais de performance"],
    investment: "R$ 5.997",
    investDetail: "setup + R$ 597/mês gestão · margem 65%",
    gradient: "from-v4-red via-accent-gold to-accent-amber",
  },
  {
    icon: Building2, color: "text-accent-gold", bg: "bg-accent-gold/10",
    title: "AI Architecture & Process Design",
    tagline: "Consultoria corporativa",
    desc: "Arquitetura completa de IA para sua empresa: pipelines RAG, orquestração de agentes, governance framework, segurança e auditoria. Projeto entregue em 15 dias.",
    features: ["Diagnóstico de maturidade em IA", "Design de arquitetura RAG + agentes", "Pipeline de processos automatizados", "Governança, compliance e auditoria", "Plano de rollout 30-60-90 dias", "Workshop de alinhamento com equipe técnica", "Documentação técnica completa", "1 mês de suporte pós-implementação"],
    investment: "R$ 24.997",
    investDetail: "investimento único · margem 75%",
    gradient: "from-accent-gold to-accent-amber",
  },
  {
    icon: BookOpen, color: "text-accent-amber", bg: "bg-accent-amber/10",
    title: "AI Playbook — Do Zero ao IAAS",
    tagline: "Educação + templates",
    desc: "Aprenda a construir sua própria infraestrutura de IA do zero. PDF + vídeos + scripts + templates. Do VPS aos agentes em produção — o mesmo stack que usamos nos clientes enterprise.",
    features: ["PDF + 8h de vídeo passo a passo", "Scripts de deploy automatizados", "Templates de arquitetura RAG + agentes", "Stack: Ollama + WebUI + OpenClaw + ChromaDB", "Otimizado para Hostinger VPS (15+ CPUs)", "Acesso vitalício + atualizações perpétuas", "Comunidade exclusiva de alunos", "Suporte via Discord por 6 meses"],
    investment: "R$ 497",
    investDetail: "acesso vitalício · margem 90%",
    gradient: "from-accent-amber to-v4-red",
  },
]

function FaqItem({ q, a, defaultOpen = false }: { q: string; a: string; defaultOpen?: boolean }) {
  return (
    <details open={defaultOpen} className="group border border-border/50 rounded-xl overflow-hidden transition-all hover:border-v4-red/20">
      <summary className="flex items-start gap-3 px-5 py-4 cursor-pointer list-none text-sm font-medium text-foreground hover:text-v4-red transition-colors">
        <ChevronDown className="w-4 h-4 mt-0.5 shrink-0 text-muted-foreground group-open:rotate-180 transition-transform" />
        {q}
      </summary>
      <div className="px-5 pb-5 pt-1">
        <p className="text-sm text-muted-foreground leading-relaxed border-t border-border/50 pt-3">
          {a}
        </p>
      </div>
    </details>
  )
}

export default function ProductsPage({ locale }: ProductsPageProps) {
  const d = productsData[locale as keyof typeof productsData] || productsData.pt
  const prefix = locale === "pt" ? "" : `/${locale}`

  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `https://marcosv4.cloud${prefix}/produtos-ai`,
        url: `https://marcosv4.cloud${prefix}/produtos-ai`,
        name: d.seo.title,
        description: d.seo.description,
        isPartOf: { "@id": "https://marcosv4.cloud/#website" },
        breadcrumb: { "@id": `https://marcosv4.cloud${prefix}/produtos-ai/#breadcrumb` },
      },
      {
        "@type": "BreadcrumbList",
        "@id": `https://marcosv4.cloud${prefix}/produtos-ai/#breadcrumb`,
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Início", item: "https://marcosv4.cloud" },
          { "@type": "ListItem", position: 2, name: "Produtos AI", item: `https://marcosv4.cloud${prefix}/produtos-ai` },
        ],
      },
      {
        "@type": "ItemList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "IAAS — AI Infrastructure as a Service" },
          { "@type": "ListItem", position: 2, name: "AI Architecture & Process Design" },
          { "@type": "ListItem", position: 3, name: "AI Playbook — Do Zero ao IAAS" },
        ],
      },
      {
        "@type": "FAQPage",
        mainEntity: d.objections.faq.map((item) => ({
          "@type": "Question",
          name: item.q,
          acceptedAnswer: { "@type": "Answer", text: item.a },
        })),
      },
      {
        "@type": "Service",
        name: "V4 Company AI Solutions",
        provider: { "@type": "Organization", name: "V4 Company" },
        areaServed: ["BR", "US", "ES"],
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Produtos AI",
          itemListElement: [
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "IAAS — AI Infrastructure as a Service" } },
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "AI Architecture & Process Design" } },
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "AI Playbook — Do Zero ao IAAS" } },
          ],
        },
      },
    ],
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      {/* Hero */}
        <LLMLogosBar />
        <ModelHighlights />
      <section className="relative overflow-hidden border-b border-border/50">
        <div className="mx-auto max-w-6xl px-6 py-14 sm:py-20">
          <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-14">
            <div className="flex-1 min-w-0 animate-fade-in">
              <div className="flex items-center gap-2 mb-3">
                <span className="flex h-1.5 w-1.5 rounded-full bg-v4-red animate-pulse" />
                <span className="font-mono text-[10px] font-semibold uppercase tracking-widest text-v4-red">
                  {d.hero.tag}
                </span>
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-sans font-bold leading-tight tracking-tight text-foreground">
                {d.hero.title}
              </h1>
              <p className="mt-3 max-w-xl text-sm sm:text-base leading-relaxed text-muted">
                {d.hero.subtitle}
              </p>
              <div className="mt-6 flex flex-wrap items-center gap-3">
                <Link
                  href={`/${locale === "pt" ? "" : locale}/consulting#lead-capture`}
                  className="inline-flex items-center gap-2 rounded-lg bg-v4-red px-5 py-2.5 text-sm font-semibold text-background transition-all hover:bg-v4-red/90 hover:shadow-lg hover:shadow-v4-red/20"
                >
                  {d.hero.cta}
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <a
                  href="https://wa.me/5531999999999?text=Ol%C3%A1!%20Gostaria%20de%20saber%20mais%20sobre%20os%20produtos%20AI."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg border border-border px-5 py-2.5 text-sm font-medium text-muted-foreground transition-all hover:border-v4-red/30 hover:text-v4-red hover:bg-v4-red/5"
                >
                  {d.hero.ctaSecondary}
                </a>
              </div>
            </div>
            <div className="flex-shrink-0 w-full lg:w-[420px] xl:w-[480px] animate-fade-in-delay-1">
              <div className="relative rounded-2xl overflow-hidden border border-border/50 shadow-2xl shadow-black/30">
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent z-10" />
                <div className="absolute inset-0 bg-gradient-to-l from-v4-red/20 via-v4-red/5 to-transparent z-10" />
                <Image
                  src="/images/hero.webp"
                  alt="AI Solutions"
                  width={1024}
                  height={693}
                  className="w-full h-auto object-cover scale-105"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pain section: objection → reframe */}
      <section className="border-b border-border/50">
        <div className="mx-auto max-w-6xl px-6 py-14 sm:py-20">
          <div className="text-center mb-10">
            <span className="inline-block px-3 py-1 mb-4 text-xs font-mono tracking-wider uppercase text-v4-red border border-v4-red/30 rounded-full">
              {locale === "pt" ? "Dor vs Desejo" : locale === "es" ? "Dolor vs Deseo" : "Pain vs Desire"}
            </span>
            <h2 className="text-2xl sm:text-3xl font-sans font-bold text-foreground mb-3">{d.pain.title}</h2>
            <p className="text-sm text-muted-foreground max-w-xl mx-auto">{d.pain.subtitle}</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
            {d.pain.items.map((item, i) => {
              const Icon = item.icon
              const GainIcon = CheckCircle2
              return (
                <div key={i} className="gradient-border rounded-xl bg-card p-5">
                  <div className="flex items-start gap-3 mb-3">
                    <Icon className={`w-5 h-5 ${item.color} shrink-0 mt-0.5`} />
                    <div>
                      <p className="text-xs text-muted-foreground leading-relaxed">{item.pain}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 border-t border-border/50 pt-3 mt-3">
                    <GainIcon className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                    <p className="text-xs text-foreground font-medium leading-relaxed">{item.gain}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Products */}
      <section className="border-b border-border/50">
        <div className="mx-auto max-w-6xl px-6 py-14 sm:py-20">
          <div className="text-center mb-10">
            <span className="inline-block px-3 py-1 mb-4 text-xs font-mono tracking-wider uppercase text-v4-red border border-v4-red/30 rounded-full">
              $ ls -la produtos-ai/
            </span>
            <h2 className="text-2xl sm:text-3xl font-sans font-bold text-foreground mb-3">{d.products.title}</h2>
            <p className="text-sm text-muted-foreground max-w-xl mx-auto">{d.products.subtitle}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-10">
            {productCards.map((item, i) => {
              const Icon = item.icon
              return (
                <div key={i} className="group gradient-border rounded-xl bg-card overflow-hidden transition-all duration-300 hover:shadow-[0_0_30px_-5px_rgba(229,9,20,0.1)] flex flex-col">
                  <div className="p-6 flex flex-col h-full">
                    <div className={`w-12 h-12 rounded-xl ${item.bg} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className={`w-6 h-6 ${item.color}`} />
                    </div>
                    <div className="flex items-center gap-2 mb-3">
                      <div className="inline-block px-2 py-0.5 text-[10px] font-mono tracking-wider uppercase text-v4-red border border-v4-red/20 rounded-full">
                        {item.investment}
                      </div>
                      <span className="font-mono text-[9px] text-muted-foreground/50 uppercase tracking-wider">{item.tagline}</span>
                    </div>
                    <h3 className="text-base font-sans font-semibold text-foreground mb-2">{item.title}</h3>
                    <p className="text-xs text-muted-foreground leading-relaxed mb-4">{item.desc}</p>
                    <ul className="space-y-1.5 mb-5 flex-1">
                      {item.features.map((f, j) => (
                        <li key={j} className="text-[11px] text-muted-foreground flex items-start gap-2">
                          <span className="text-v4-red mt-0.5 shrink-0">›</span>
                          {f}
                        </li>
                      ))}
                    </ul>
                    <div className="border-t border-border pt-4 mt-auto">
                      <p className="text-[10px] text-muted-foreground/60 font-mono mb-3">{item.investDetail}</p>
                      <Link
                        href={`/${locale === "pt" ? "" : locale}/consulting#lead-capture`}
                        className="inline-flex items-center justify-center gap-2 rounded-lg bg-v4-red/10 text-v4-red border border-v4-red/20 px-4 py-2.5 text-xs font-semibold transition-all hover:bg-v4-red hover:text-background w-full group/link"
                      >
                        {d.hero.cta}
                        <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover/link:translate-x-0.5" />
                      </Link>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* FAQ — Objection handling NLP */}
      <section className="border-b border-border/50">
        <div className="mx-auto max-w-3xl px-6 py-14 sm:py-20">
          <div className="text-center mb-10">
            <span className="inline-block px-3 py-1 mb-4 text-xs font-mono tracking-wider uppercase text-v4-red border border-v4-red/30 rounded-full">
              {locale === "pt" ? "Quebra de Objeções" : locale === "es" ? "Rompiendo Objeciones" : "Objection Handling"}
            </span>
            <h2 className="text-2xl sm:text-3xl font-sans font-bold text-foreground mb-3">{d.objections.title}</h2>
            <p className="text-sm text-muted-foreground max-w-xl mx-auto">{d.objections.subtitle}</p>
          </div>
          <div className="space-y-3">
            {d.objections.faq.map((item, i) => (
              <FaqItem key={i} q={item.q} a={item.a} defaultOpen={i === 0} />
            ))}
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="border-b border-border/50">
        <div className="mx-auto max-w-6xl px-6 py-14 sm:py-20">
          <div className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl font-sans font-bold text-foreground mb-3">{d.trust.title}</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {d.trust.items.map((item, i) => {
              const Icon = item.icon
              return (
                <div key={i} className="gradient-border rounded-xl bg-card p-5 text-center hover:border-v4-red/20 transition-all">
                  <Icon className="w-6 h-6 text-v4-red mx-auto mb-3" />
                  <p className="text-xl font-bold text-foreground font-sans">{item.value}</p>
                  <p className="text-xs font-semibold text-muted-foreground mt-0.5">{item.label}</p>
                  <p className="text-[10px] text-muted-foreground/60 mt-1 leading-relaxed">{item.desc}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section>
        <div className="mx-auto max-w-3xl px-6 py-14 sm:py-20 text-center">
          <h2 className="text-2xl sm:text-3xl font-sans font-bold text-foreground mb-3">{d.cta.title}</h2>
          <p className="text-sm text-muted-foreground max-w-lg mx-auto mb-8">{d.cta.subtitle}</p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <Link
              href={`/${locale === "pt" ? "" : locale}/consulting#lead-capture`}
              className="inline-flex items-center gap-2 rounded-lg bg-v4-red px-6 py-3 text-sm font-semibold text-background transition-all hover:bg-v4-red/90 hover:shadow-lg hover:shadow-v4-red/20"
            >
              {d.cta.cta}
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href={`/${locale === "pt" ? "" : locale}/consulting`}
              className="inline-flex items-center gap-2 rounded-lg border border-border px-6 py-3 text-sm font-medium text-muted-foreground transition-all hover:border-v4-red/30 hover:text-v4-red hover:bg-v4-red/5"
            >
              {d.cta.ctaSecondary}
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
