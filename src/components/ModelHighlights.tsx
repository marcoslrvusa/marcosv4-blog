import Image from "next/image"
import Link from "next/link"

const models = [
  {
    name: "GPT‑4",
    logo: "https://openai.com/content/images/2022/12/openai-avatar.png",
    desc: "Modelo avançado da OpenAI, ótimo para tarefas complexas e linguagem natural.",
    link: "https://openai.com",
  },
  {
    name: "Claude",
    logo: "https://logo.clearbit.com/anthropic.com",
    desc: "IA da Anthropic focada em segurança e respostas alinhadas.",
    link: "https://anthropic.com",
  },
  {
    name: "Gemini",
    logo: "https://developers.google.com/static/ai/images/google-ai.png",
    desc: "Modelo multimodal da Google, combina texto e imagem.",
    link: "https://ai.google",
  },
]

export default function ModelHighlights() {
  return (
    <section className="border-t border-b border-border/30 bg-card/10 py-8">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-center text-2xl font-bold mb-6 text-foreground">Modelos de LLM em destaque</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {models.map((m, i) => (
            <div key={i} className="gradient-border rounded-xl p-5 text-center bg-card">
              <Image src={m.logo} alt={m.name} width={64} height={64} className="mx-auto mb-3" />
              <h3 className="font-semibold text-lg text-foreground mb-2">{m.name}</h3>
              <p className="text-sm text-muted-foreground mb-3">{m.desc}</p>
              <Link href={m.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-v4-red text-sm font-medium hover:underline">
                Saiba mais
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
