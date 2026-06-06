import Image from "next/image"

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
]

export default function LLMLogosBar() {
  return (
    <div className="overflow-x-auto whitespace-nowrap py-4 bg-card/30 border-t border-b border-border/30">
      <div className="flex items-center space-x-8 px-6 marquee-track">
        {logos.map((logo, i) => (
          <a key={i} href={logo.href} target="_blank" rel="noopener noreferrer" className="inline-block">
            <Image src={logo.src} alt={logo.alt} width={48} height={48} className="object-contain" />
          </a>
        ))}
      </div>
    </div>
  )
}
