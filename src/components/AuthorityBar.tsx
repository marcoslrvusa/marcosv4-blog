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
  { icon: Newspaper, text: "140+ Artigos", sub: "Técnicos publicados" },
  { icon: Award, text: "AI Lead", sub: "V4 Company" },
  { icon: GraduationCap, text: "Data Scientist", sub: "DataCamp Certificado" },
  { icon: Star, text: "12+ Anos XP", sub: "SEO desde 2014" },
]

export default function AuthorityBar() {
  return (
    <section className="section-authority border-y border-[#1a1a2e] py-12 md:py-16">
      <div className="mx-auto max-w-5xl px-6">
        {/* Credentials Grid */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-12">
          {credentials.map((item, i) => {
            const Icon = item.icon
            return (
              <div key={i} className="authority-card rounded-xl p-4 text-center hover:bg-[#00ff88]/[0.02] transition-all duration-300 group">
                <div className="flex justify-center mb-2">
                  <Icon className="h-5 w-5 text-[#00ff88] group-hover:scale-110 transition-transform duration-300" />
                </div>
                <div className="text-sm font-bold text-[#e8e8f0]">{item.text}</div>
                <div className="text-[10px] font-mono text-[#6b6b80] mt-0.5">{item.sub}</div>
              </div>
            )
          })}
        </div>

        {/* Media Logo Marquee */}
        <div className="relative overflow-hidden">
          <div className="flex items-center gap-2 mb-4">
            <Star className="w-3.5 h-3.5 text-[#fbbf24]" />
            <span className="font-mono text-[10px] font-medium uppercase tracking-widest text-[#6b6b80]">
              Presença e Reconhecimento
            </span>
            <div className="h-px flex-1 bg-gradient-to-r from-[#1a1a2e] to-transparent" />
          </div>
          <div className="overflow-hidden">
            <div className="flex gap-8 marquee-track">
              {[...mediaLogos, ...mediaLogos].map((item, i) => (
                <div key={i} className="flex items-center gap-3 shrink-0 px-6 py-3 rounded-lg border border-[#1a1a2e] bg-[#0c0c18]/50">
                  <div className="w-2 h-2 rounded-full bg-[#00ff88]/50" />
                  <span className="text-sm font-medium text-[#e8e8f0] whitespace-nowrap">{item.name}</span>
                  <span className="text-[10px] font-mono text-[#6b6b80] whitespace-nowrap">{item.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
