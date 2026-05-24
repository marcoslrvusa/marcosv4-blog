import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sobre",
  description: "Sobre Marcos Luciano — AI Lead na V4 Company",
};

export default function About() {
  return (
    <div className="mx-auto max-w-5xl px-6">
      <section className="border-b border-v4-gray-100 py-20 sm:py-28">
        <div className="mx-auto max-w-3xl">
          <div className="mb-6 flex items-center gap-3">
            <div className="h-0.5 w-8 bg-v4-red" />
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-v4-gray-400">
              Sobre
            </span>
          </div>

          <div className="flex flex-col items-start gap-8 sm:flex-row sm:items-center">
            <div className="relative shrink-0">
              <div className="h-24 w-24 overflow-hidden rounded-full border-2 border-v4-gray-100 sm:h-32 sm:w-32">
                <div className="flex h-full w-full items-center justify-center bg-v4-red text-2xl font-bold text-white sm:text-3xl">
                  ML
                </div>
              </div>
              <div className="absolute -bottom-1 -right-1 h-6 w-6 rounded-full border-2 border-white bg-v4-red flex items-center justify-center">
                <svg className="h-3 w-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </div>
            </div>

            <div>
              <h1 className="font-sans text-3xl font-extrabold leading-tight tracking-tight text-v4-gray-900 sm:text-4xl">
                Marcos Luciano
              </h1>
              <p className="mt-1 text-sm font-semibold uppercase tracking-wider text-v4-gray-400">
                AI Lead na V4 Company · 12 anos de SEO · Estratégia Digital
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-3xl">
          <div className="grid gap-12 sm:grid-cols-2">
            <div>
              <h2 className="mb-4 text-[10px] font-bold uppercase tracking-[0.2em] text-v4-gray-400">
                Trajetória
              </h2>
              <div className="space-y-4 text-sm leading-relaxed text-v4-gray-600">
                <p>
                  Há 12 anos atuando com SEO — desde a era dos links pagos no Orkut até a
                  era dos agentes de IA. Essa jornada me deu uma visão única sobre como
                  a descoberta de informação evolui: do PageRank ao RankBrain, do
                  BERT aos Overviews generativos.
                </p>
                <p>
                  Hoje, como <strong className="font-bold text-v4-gray-900">AI Lead na V4 Company</strong>, lidero a adoção de
                  inteligência artificial na unidade, conectando estratégia de negócios
                  com o que há de mais novo em tecnologia de modelos de linguagem,
                  agentes e automação.
                </p>
              </div>
            </div>

            <div>
              <h2 className="mb-4 text-[10px] font-bold uppercase tracking-[0.2em] text-v4-gray-400">
                O que você encontra aqui
              </h2>
              <ul className="space-y-3">
                {[
                  {
                    title: "Tecnologia e Inovação",
                    desc: "Análises de lançamentos, modelos, plataformas e o que eles realmente significam",
                  },
                  {
                    title: "Geopolítica e Economia",
                    desc: "O impacto da AI no equilíbrio de poder entre nações e na economia global",
                  },
                  {
                    title: "SEO → GEO",
                    desc: "Como a descoberta está mudando na era dos motores generativos",
                  },
                  {
                    title: "Estratégia",
                    desc: "Frameworks para tomar decisões melhores em um mundo que muda a cada trimestre",
                  },
                ].map((item) => (
                  <li key={item.title} className="border-l-2 border-v4-red pl-4">
                    <p className="text-sm font-bold text-v4-gray-900">{item.title}</p>
                    <p className="text-xs text-v4-gray-500">{item.desc}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-16 rounded-sm border border-v4-gray-100 bg-v4-gray-50 p-6 sm:p-8">
            <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-center">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-v4-red text-lg font-bold text-white">
                ML
              </div>
              <div className="flex-1">
                <p className="font-bold text-v4-gray-900">Marcos Luciano</p>
                <p className="text-xs text-v4-gray-500">
                  AI Lead @ V4 Company · SEO desde 2014
                </p>
              </div>
              <a
                href="https://linkedin.com/in/marcosperetto"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-sm border border-v4-red px-4 py-2 text-[10px] font-bold uppercase tracking-wider text-v4-red transition-colors hover:bg-v4-red hover:text-white"
              >
                <svg className="h-3 w-3" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
                Conectar
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
