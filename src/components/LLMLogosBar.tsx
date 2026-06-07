import Image from "next/image"
import { Sparkles } from "lucide-react"

const logos = [
  {
    alt: "OpenAI",
    src: "https://openai.com/content/images/2022/12/openai-avatar.png",
    href: "https://openai.com",
  },
  {
    alt: "Anthropic",
    src: "https://avatars.githubusercontent.com/u/130685559?s=200&v=4",
    href: "https://anthropic.com",
  },
  {
    alt: "Google AI",
    src: "https://developers.google.com/static/ai/images/google-ai.png",
    href: "https://ai.google",
  },
  {
    alt: "Meta AI",
    src: "https://logo.clearbit.com/meta.com",
    href: "https://ai.meta.com",
  },
  {
    alt: "Mistral AI",
    src: "https://logo.clearbit.com/mistral.ai",
    href: "https://mistral.ai",
  },
  {
    alt: "Cohere",
    src: "https://logo.clearbit.com/cohere.com",
    href: "https://cohere.com",
  },
  {
    alt: "DeepSeek",
    src: "https://logo.clearbit.com/deepseek.com",
    href: "https://deepseek.com",
  },
  {
    alt: "Perplexity",
    src: "https://logo.clearbit.com/perplexity.ai",
    href: "https://perplexity.ai",
  },
]

export default function LLMLogosBar() {
  return (
    <section className="border-b border-border/30 bg-card/20">
      <div className="mx-auto max-w-6xl px-6 py-6">
        <div className="flex items-center justify-center gap-2 mb-4">
          <Sparkles className="w-3.5 h-3.5 text-v4-red" />
          <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground/60 font-medium">
            Principais Modelos de IA do Mercado
          </span>
          <Sparkles className="w-3.5 h-3.5 text-v4-red" />
        </div>
        <div className="overflow-hidden">
          <div className="flex items-center gap-12 marquee-track">
            {[...logos, ...logos].map((logo, i) => (
              <a
                key={i}
                href={logo.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 shrink-0 transition-all duration-300 hover:opacity-80"
              >
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  width={28}
                  height={28}
                  className="rounded-full object-contain ring-1 ring-border/30"
                />
                <span className="text-xs font-medium text-muted-foreground/70 whitespace-nowrap">
                  {logo.alt}
                </span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
