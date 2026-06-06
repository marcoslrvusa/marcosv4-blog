"use client"

import { Award, Mic, Newspaper, GraduationCap, Star, ExternalLink } from "lucide-react"

const mediaLogos = [
  { name: "Google", label: "Google I/O 2025" },
  { name: "Hashnode", label: "Hashnode Bootcamp" },
  { name: "DataCamp", label: "DataCamp Workspace" },
  { name: "V4 Company", label: "AI Lead" },
  { name: "LinkedIn", label: "Top Voice" },
]

const credentials = [
  { icon: Mic, text: "Palestrante", sub: "Google I/O, Hashnode, DataCamp" },
  { icon: Newspaper, text: "140+ Artigos", sub: "T\u00E9cnicos publicados" },
  { icon: Award, text: "AI Lead", sub: "V4 Company" },
  { icon: GraduationCap, text: "Data Scientist", sub: "DataCamp Certificado" },
  { icon: Star, text: "12+ Anos XP", sub: "SEO desde 2014" },
]

export default function AuthorityBar() {
  return (
    <section className="section-authority border-y border-border py-12 md:py-16">
      <div className="mx-auto max-w-5xl px-6">
        {/* Credentials Grid */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-12">
          {credentials.map((item, i) => {
            const Icon = item.icon
            return (
              <div key={i} className="authority-card rounded-xl p-4 text-center transition-all duration-300 group">
                <div className="flex justify-center mb-2">
                  <Icon className="h-5 w-5 text-v4-red group-hover:scale-110 transition-transform duration-300" />
                </div>
                <div className="text-sm font-bold text-foreground">{item.text}</div>
                <div className="text-[10px] font-mono text-muted-foreground mt-0.5">{item.sub}</div>
              </div>
            )
          })}
        </div>

        {/* Media Logo Marquee */}
        <div className="relative overflow-hidden">
          <div className="flex items-center gap-2 mb-4">
            <Star className="w-3.5 h-3.5 text-accent-gold" />
            <span className="font-mono text-[10px] font-medium uppercase tracking-widest text-muted-foreground">
              Presen\u00E7a e Reconhecimento
            </span>
            <div className="h-px flex-1 bg-gradient-to-r from-border to-transparent" />
          </div>
          <div className="overflow-hidden">
            <div className="flex gap-8 marquee-track">
              {[...mediaLogos, ...mediaLogos].map((item, i) => (
                <div key={i} className="flex items-center gap-3 shrink-0 px-6 py-3 rounded-lg border border-border bg-card/50">
                  <div className="w-2 h-2 rounded-full bg-v4-red/50" />
                  <span className="text-sm font-medium text-foreground whitespace-nowrap">{item.name}</span>
                  <span className="text-[10px] font-mono text-muted-foreground whitespace-nowrap">{item.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
