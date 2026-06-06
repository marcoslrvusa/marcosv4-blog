"use client"

import { useTranslations } from "next-intl"
import Image from "next/image"
import { Award, ExternalLink, Quote } from "lucide-react"

export default function ConsultingBio() {
  const t = useTranslations("consulting.bio")

  return (
    <section className="relative px-4 py-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-v4-red/[0.02] via-transparent to-transparent pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <span className="inline-block px-3 py-1 mb-4 text-xs font-mono tracking-wider uppercase text-muted-foreground border border-border rounded-full">
            {t("tag")}
          </span>
        </div>

        <div className="glass-card rounded-2xl p-8 md:p-12 flex flex-col md:flex-row items-center gap-8 md:gap-12">
          <div className="shrink-0">
            <div className="relative w-40 h-40 md:w-48 md:h-48 rounded-2xl overflow-hidden border-2 border-v4-red/20">
              <Image
                src="/profile.png"
                alt={t("name")}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 160px, 192px"
              />
            </div>
            <div className="flex justify-center gap-2 mt-4">
              <a
                href="https://linkedin.com/in/marcoslrvieira"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono text-v4-red border border-v4-red/30 rounded-full hover:bg-v4-red/10 transition-colors"
              >
                <ExternalLink className="w-3.5 h-3.5" />
                LinkedIn
              </a>
            </div>
          </div>

          <div className="flex-1 text-center md:text-left">
            <Quote className="w-8 h-8 text-v4-red/30 mb-4 mx-auto md:mx-0" />

            <h3 className="text-2xl md:text-3xl font-sans font-bold text-foreground mb-2">
              {t("name")}
            </h3>

            <p className="text-sm text-muted-foreground leading-relaxed mb-6 max-w-xl">
              {t("description")}
            </p>

            <div className="flex flex-wrap gap-3 justify-center md:justify-start">
              {(t.raw("credentials") as string[]).map((cred, i) => (
                <span
                  key={i}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono bg-card border border-border rounded-full text-muted-foreground"
                >
                  <Award className="w-3.5 h-3.5 text-accent-gold" />
                  {cred}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
