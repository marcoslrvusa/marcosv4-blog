import type { Metadata } from "next";
import Image from "next/image";
import LinkedInIcon from "@/components/LinkedInIcon";
import { getTranslations } from "next-intl/server";
import {
  Brain,
  BarChart3,
  GraduationCap,
  Award,
  Building2,
  BadgeCheck,
  TrendingUp,
} from "lucide-react";

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
  "Python", "SQL", "Google Analytics 4", "Google Ads",
  "Meta Ads", "SEMrush", "Looker Studio", "Power BI",
  "n8n", "LLMs / AI Agents", "Gemini API", "Next.js",
  "TypeScript", "Node.js", "Tailwind CSS", "React",
  "Docker", "GA4 / GTM",
];

export default async function About({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "about" });

  return (
    <div className="mx-auto max-w-3xl px-6 py-16 sm:py-24">
      <section className="animate-fade-in">
        <div className="mb-2 flex items-center gap-2">
          <span className="font-mono text-xs text-muted-foreground">$ cat about.md</span>
        </div>

        {/* Profile Header */}
        <div className="mb-8 flex flex-col items-center gap-5 text-center sm:flex-row sm:text-left">
          <Image
            src="/profile.png"
            alt="Marcos Luciano"
            width={140}
            height={140}
            className="rounded-full ring-2 ring-accent-emerald/20 object-cover shrink-0"
            priority
          />
          <div>
            <h1 className="text-3xl font-bold leading-tight tracking-tight sm:text-4xl">
              Marcos <span className="text-accent-emerald">Luciano</span>
            </h1>
            <p className="mt-1 text-base text-muted">
              AI Lead · AI & SEO Specialist · Publicitário
            </p>
          </div>
        </div>
      </section>

      {/* Photo Gallery */}
      <section className="mt-8 animate-fade-in-delay-1">
        <div className="mb-4 flex items-center gap-2">
          <span className="font-mono text-xs text-muted-foreground"># {t("galleryLabel")}</span>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="overflow-hidden rounded-xl border border-border">
            <Image
              src="/images/marcos-relax.png"
              alt="Marcos Luciano — relaxado"
              width={600}
              height={400}
              className="h-full w-full object-cover"
            />
          </div>
          <div className="overflow-hidden rounded-xl border border-border">
            <Image
              src="/images/dale.png"
              alt="Marcos Luciano — Dale"
              width={600}
              height={400}
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </section>

      <div className="mt-12 space-y-12 animate-fade-in-delay-1">
        <section>
          <div className="mb-4 flex items-center gap-2">
            <Building2 className="h-4 w-4 text-accent-emerald" />
            <h2 className="font-semibold text-foreground">{t("currentRole")}</h2>
          </div>
          <p className="text-sm leading-relaxed text-muted">
            <strong className="text-foreground">{t("currentRole")}</strong>, {t("currentDesc")}
          </p>
        </section>

        <section>
          <div className="mb-4 flex items-center gap-2">
            <GraduationCap className="h-4 w-4 text-accent-cyan" />
            <h2 className="font-semibold text-foreground">{t("education")}</h2>
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
            <h2 className="font-semibold text-foreground">{t("stack")}</h2>
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
            <h2 className="font-semibold text-foreground">{t("whatYouFind")}</h2>
          </div>
          <ul className="space-y-2 text-sm leading-relaxed text-muted">
            {(t.raw("items") as string[]).map((item: string, i: number) => (
              <li key={i} className="flex items-start gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent-emerald" />
                <span dangerouslySetInnerHTML={{ __html: item }} />
              </li>
            ))}
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
                AI Lead · AI & SEO Specialist · DataCamp Data Scientist
              </p>
              <a
                href="https://linkedin.com/in/marcoslrvieira"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-1 inline-flex items-center gap-1 text-xs font-medium text-accent-emerald hover:underline"
              >
                <LinkedInIcon className="h-3 w-3" />
                {t("connectLinkedin")}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
