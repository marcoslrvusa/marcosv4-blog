import type { Metadata } from "next";
import LinkedInIcon from "@/components/LinkedInIcon";
import {
  FileCode,
  Brain,
  BarChart3,
  GraduationCap,
  Award,
  Building2,
  BadgeCheck,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Sobre",
  description:
    "Marcos Peretto — Senior Developer, Data Scientist & AI Lead na V4 Company",
};

const certs = [
  { label: "Pós-Graduação em Ciência de Dados", icon: GraduationCap },
  { label: "MBA em Marketing Digital", icon: GraduationCap },
  { label: "Google Advanced SEO", icon: BadgeCheck },
  { label: "AWS Certified Cloud Practitioner", icon: BadgeCheck },
  { label: "Meta Certified Media Buyer", icon: BadgeCheck },
  { label: "Scrum Master (PSM I)", icon: BadgeCheck },
  { label: "Google Analytics Individual Qualification", icon: BadgeCheck },
  { label: "Python for Data Science (IBM)", icon: BadgeCheck },
];

const techStack = [
  "Next.js",
  "TypeScript",
  "Python",
  "Node.js",
  "Tailwind CSS",
  "React",
  "FastAPI",
  "PostgreSQL",
  "Docker",
  "Git",
  "GraphQL",
  "n8n",
  "LLMs / AI Agents",
  "Gemini API",
  "Google Cloud",
  "Meta Ads API",
  "GA4 / GTM",
  "Looker Studio",
];

export default function About() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-16 sm:py-24">
      <section className="animate-fade-in">
        <div className="mb-2 flex items-center gap-2">
          <span className="font-mono text-xs text-muted-foreground">$ cat about.md</span>
        </div>
        <h1 className="text-3xl font-bold leading-tight tracking-tight sm:text-4xl">
          Marcos <span className="text-v4-red">Peretto</span>
        </h1>
        <p className="mt-2 text-base text-muted">
          Senior Developer · Data Scientist · Publicitário
        </p>
      </section>

      <div className="mt-12 space-y-12 animate-fade-in-delay-1">
        <section>
          <div className="mb-4 flex items-center gap-2">
            <Building2 className="h-4 w-4 text-v4-red" />
            <h2 className="font-semibold text-foreground">Atualmente</h2>
          </div>
          <p className="text-sm leading-relaxed text-muted">
            <strong className="text-foreground">AI Lead na V4 Company</strong>,
            onde lidero a adoção de inteligência artificial na unidade,
            conectando estratégia de negócios com o que há de mais novo em
            modelos de linguagem, agentes e automação. São 12 anos de SEO e
            marketing digital — do PageRank ao RankBrain, do BERT aos Overviews
            generativos.
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
            <FileCode className="h-4 w-4 text-accent-emerald" />
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
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-v4-red" />
              <span><strong className="text-foreground">Tecnologia e Inovação</strong> — análises de lançamentos, modelos, plataformas e o que eles realmente significam</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent-cyan" />
              <span><strong className="text-foreground">Engenharia + Marketing</strong> — a visão de quem constrói e quem planeja, na mesma cabeça</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent-emerald" />
              <span><strong className="text-foreground">SEO → AI Search</strong> — como a descoberta está mudando na era dos motores generativos</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent-amber" />
              <span><strong className="text-foreground">Estratégia</strong> — frameworks para tomar decisões melhores em um mundo que muda a cada trimestre</span>
            </li>
          </ul>
        </section>
      </div>

      <div className="mt-12 animate-fade-in-delay-2">
        <div className="gradient-border rounded-xl p-5">
          <div className="flex items-center gap-4">
            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-v4-red text-white font-bold text-lg">
              MP
            </div>
            <div className="min-w-0 flex-1">
              <p className="font-semibold text-foreground">Marcos Peretto</p>
              <p className="text-sm text-muted">
                Senior Developer · AI Lead @ V4 Company · Pós em Ciência de Dados
              </p>
              <a
                href="https://linkedin.com/in/marcosperetto"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-1 inline-flex items-center gap-1 text-xs font-medium text-v4-red hover:underline"
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
