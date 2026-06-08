import { OpenAIIcon, AnthropicIcon, GoogleAIcon, MetaAIcon, MistralIcon, CohereIcon } from "./LLMIcons"

function DeepSeekTextIcon({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <rect x="4" y="4" width="16" height="16" rx="4" className="fill-current opacity-20" />
      <text x="12" y="16" textAnchor="middle" className="fill-current text-[11px] font-bold" fontFamily="system-ui">D</text>
    </svg>
  )
}

function PerplexityIcon({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <circle cx="12" cy="12" r="8" className="stroke-current stroke-[1.5] opacity-30" />
      <path d="M12 4v16M4 12h16" className="stroke-current stroke-[1.5] opacity-50" />
      <circle cx="12" cy="12" r="3" className="fill-current" />
    </svg>
  )
}

const logos = [
  { name: "OpenAI", icon: OpenAIIcon, href: "https://openai.com" },
  { name: "Anthropic", icon: AnthropicIcon, href: "https://anthropic.com" },
  { name: "Google AI", icon: GoogleAIcon, href: "https://ai.google" },
  { name: "Meta AI", icon: MetaAIcon, href: "https://ai.meta.com" },
  { name: "Mistral", icon: MistralIcon, href: "https://mistral.ai" },
  { name: "Cohere", icon: CohereIcon, href: "https://cohere.com" },
  { name: "DeepSeek", icon: DeepSeekTextIcon, href: "https://deepseek.com" },
  { name: "Perplexity", icon: PerplexityIcon, href: "https://perplexity.ai" },
]

export default function LLMLogosBar() {
  return (
    <section className="border-b border-border bg-card/20">
      <div className="mx-auto max-w-6xl px-6 py-6">
        <div className="overflow-hidden">
          <div className="flex items-center gap-12 marquee-track">
            {[...logos, ...logos].map((logo, i) => {
              const Icon = logo.icon
              return (
                <a
                  key={i}
                  href={logo.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 shrink-0 group"
                >
                  <span className="text-muted-foreground/60 group-hover:text-foreground transition-colors">
                    <Icon className="h-5 w-5" />
                  </span>
                  <span className="text-xs text-muted-foreground/50 group-hover:text-foreground transition-colors whitespace-nowrap">
                    {logo.name}
                  </span>
                </a>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
