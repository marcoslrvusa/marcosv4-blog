"use client"

import { useTranslations } from "next-intl"
import Link from "next/link"
import { GraduationCap, ArrowRight, CheckCircle2, BookOpen, Brain, BarChart3, Layers } from "lucide-react"

const paths = [
  {
    icon: Brain,
    title: "AI Cases",
    desc: "Cases replicáveis de arquiteturas reais",
    href: "/topic/ia",
    color: "#00ff88",
    count: "40+",
  },
  {
    icon: BarChart3,
    title: "Mercado de IA",
    desc: "Conjuntura e análises de mercado",
    href: "/topic/mercado",
    color: "#00d4ff",
    count: "30+",
  },
  {
    icon: Layers,
    title: "AI Search",
    desc: "SEO, AEO e GEO para motores generativos",
    href: "/topic/ai-search",
    color: "#8b5cf6",
    count: "20+",
  },
  {
    icon: BookOpen,
    title: "Arquitetura AI",
    desc: "Guias práticos de implementação",
    href: "/topic/arquitetura",
    color: "#f59e0b",
    count: "25+",
  },
]

export default function LearningPath() {
  return (
    <section className="section-premium py-16 md:py-20">
      <div className="mx-auto max-w-5xl px-6">
        <div className="flex items-center gap-2 mb-8">
          <GraduationCap className="w-4 h-4 text-[#00ff88]" />
          <span className="font-mono text-xs font-medium uppercase tracking-widest text-[#6b6b80]">
            $ ./learning-path.sh
          </span>
          <div className="h-px flex-1 bg-gradient-to-r from-[#1a1a2e] to-transparent" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {paths.map((path, i) => {
            const Icon = path.icon
            return (
              <Link
                key={i}
                href={path.href}
                className="premium-card rounded-xl p-5 group animate-fade-in"
                style={{ animationDelay: `${i * 100}ms` }}
              >
                <div className="flex items-center gap-3 mb-3">
                  <div
                    className="flex h-10 w-10 items-center justify-center rounded-xl"
                    style={{ background: `${path.color}10`, border: `1px solid ${path.color}20` }}
                  >
                    <Icon className="h-5 w-5" style={{ color: path.color }} />
                  </div>
                  <span
                    className="font-mono text-[10px] font-bold uppercase tracking-wider"
                    style={{ color: path.color }}
                  >
                    {path.count} artigos
                  </span>
                </div>
                <h3 className="text-base font-bold text-[#e8e8f0] mb-1">{path.title}</h3>
                <p className="text-xs text-[#8888a0] leading-relaxed mb-3">{path.desc}</p>
                <div className="flex items-center gap-1.5 text-xs font-medium" style={{ color: path.color }}>
                  Explorar <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                </div>
              </Link>
            )
          })}
        </div>
      </div>
    </section>
  )
}
