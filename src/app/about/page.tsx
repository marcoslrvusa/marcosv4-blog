import type { Metadata } from "next";
import Image from "next/image";
import LinkedInIcon from "@/components/LinkedInIcon";
import {
  Brain,
  BarChart3,
  GraduationCap,
  Award,
  Building2,
  BadgeCheck,
  TrendingUp,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Sobre",
  description:
    "Marcos Luciano — Senior Media Buyer, AI & SEO Specialist na V4 Company",
};

const certs = [
  { label: "DataCamp Data Scientist", icon: GraduationCap },
  { label: "Bacharel em Publicidade — ULBRA", icon: GraduationCap },
  { label: "Google Analytics 4 Certified", icon: BadgeCheck },
  { label: "Google Ads — Search Network", icon: BadgeCheck },
  { label: "Google Ads — AI Shopping Ads", icon: BadgeCheck },
  { label: "Google Ads — Measurement", icon: BadgeCheck },
  { label: "Google Ads — Conversion Optimization", icon: BadgeCheck },
  { label: "Meta Ads (Fundamentos e Métricas)", icon: BadgeCheck },
];

const techStack = [
  "Python",
  "SQL",
  "Google Analytics 4",
  "Google Ads",
  "Meta Ads",
  "SEMrush",
  "Looker Studio",
  "Power BI",
  "n8n",
  "LLMs / AI Agents",
  "Gemini API",
  "Next.js",
  "TypeScript",
  "Node.js",
  "Tailwind CSS",
  "React",
  "Docker",
  "GA4 / GTM",
];

export default function About() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-16 sm:py-24">
      <section className="animate-fade-in">
        <div className="mb-2 flex items-center gap-2">
          <span className="font-mono text-xs text-muted-foreground">$ cat about.md</span>
        </div>

        {/* Profile Header */}
        <div className="mb-6 flex items-center gap-5">
          <Image
            src="/profile.png"
            alt="Marcos Luciano"
            width={96}
            height={96}
            className="rounded-full ring-2 ring-accent-emerald/20 object-cover"
            priority
          />
          <div>
            <h1 className="text-3xl font-bold leading-tight tracking-tight sm:text-4xl">
              Marcos <span className="text-accent-emerald">Luciano</span>
            </h1>
            <p className="mt-1 text-base text-muted">
              Senior Media Buyer · AI & SEO Specialist · Publicitário
            </p>
          </div>
        </div>
      </section>

      <div className="mt-12 space-y-12 animate-fade-in-delay-1">
        <section>
          <div className="mb-4 flex items-center gap-2">
            <Building2 className="h-4 w-4 text-accent-emerald" />
            <h2 className="font-semibold text-foreground">Atualmente</h2>
          </div>
          <p className="text-sm leading-relaxed text-muted">
            <strong className="text-foreground">Senior Media Buyer na V4 Company</strong>,
            com 12+ anos de experiência em SEO, growth e marketing digital.
            Especialista em performance marketing, AI Ops e estratégias de busca
            — do PageRank ao RankBrain, do BERT aos Overviews generativos.
          </p>
        </section>

        <section>
          <div className="mb-4 flex items-center gap-2">
            <GraduationCap className="h-4 w-4 text-accent-cyan" />
            <h2 className="font-semibold text-foreground">Formação & Certificações</h2>
          </div>
          <div className="grid gap-2 sm:grid-cols-2">
            {certs.map((cert) => {
              const Icon = cert.icon;
              return (
                <div
                  key={cert.label}
                  className="flex items-start gap-2.5 rounded-lg border border-border bg-card p-3"
                >
                  <Icon className="mt-0.5 h-4 w-4 shrink-0 text-muted-foreground" />
                  <span className="text-sm text-muted">{cert.label}</span>
                </div>
              );
            })}
          </div>
        </section>

        <section>
          <div className="mb-4 flex items-center gap-2">
            <TrendingUp className="h-4 w-4 text-accent-emerald" />
            <h2 className="font-semibold text-foreground">Stack</h2>
          </div>
          <div className="flex flex-wrap gap-2">
            {techStack.map((tech) => (
              <span
                key={tech}
                className="inline-flex items-center gap-1.5 rounded-md border border-border bg-card px-3 py-1 font-mono text-[11px] font-medium text-muted-foreground"
              >
                <span className="text-accent-cyan">#</span>
                {tech}
              </span>
            ))}
          </div>
        </section>

        <section>
          <div className="mb-4 flex items-center gap-2">
            <Award className="h-4 w-4 text-accent-amber" />
            <h2 className="font-semibold text-foreground">O que você encontra aqui</h2>
          </div>
          <ul className="space-y-2 text-sm leading-relaxed text-muted">
            <li className="flex items-start gap-2">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent-emerald" />
              <span><strong className="text-foreground">Cases de IA Replicáveis</strong> — arquiteturas reais de Nvidia, Microsoft, Google e OpenAI traduzidas para aplicação prática</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent-cyan" />
              <span><strong className="text-foreground">Mercado de IA</strong> — conjuntura, atualizações e o que os lançamentos realmente significam para profissionais</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent-emerald" />
              <span><strong className="text-foreground">AI Search</strong> — SEO, AEO e GEO na era dos motores generativos</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent-amber" />
              <span><strong className="text-foreground">Arquitetura AI</strong> — guias práticos para construir sistemas com LLMs, agentes e automação inteligente</span>
            </li>
          </ul>
        </section>
      </div>

      <div className="mt-12 animate-fade-in-delay-2">
        <div className="gradient-border rounded-xl p-5">
          <div className="flex items-center gap-4">
            <Image
              src="/profile.png"
              alt="Marcos Luciano"
              width={64}
              height={64}
              className="rounded-full ring-2 ring-accent-emerald/20 object-cover"
            />
            <div className="min-w-0 flex-1">
              <p className="font-semibold text-foreground">Marcos Luciano</p>
              <p className="text-sm text-muted">
                Senior Media Buyer · AI & SEO Specialist · DataCamp Data Scientist
              </p>
              <a
                href="https://linkedin.com/in/marcoslrvieira"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-1 inline-flex items-center gap-1 text-xs font-medium text-accent-emerald hover:underline"
              >
                <LinkedInIcon className="h-3 w-3" />
                Conectar no LinkedIn
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
