import type { Metadata } from "next";
import LinkedInIcon from "@/components/LinkedInIcon";

export const metadata: Metadata = {
  title: "Sobre",
  description: "Sobre Marcos Peretto — AI Lead na V4 Company",
};

export default function About() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-16 sm:py-24">
      <section className="mb-12">
        <div className="mb-2 flex items-center gap-2">
          <span className="h-1.5 w-1.5 rounded-full bg-v4-red" />
          <span className="text-xs font-medium uppercase tracking-widest text-gray-400">
            Sobre
          </span>
        </div>
        <h1 className="font-serif text-3xl leading-tight tracking-tight text-gray-900 sm:text-4xl">
          Marcos Peretto
        </h1>
        <p className="mt-2 text-base text-gray-500">
          AI Lead na V4 Company · 12 anos de SEO · Estratégia Digital
        </p>
      </section>

      <div className="prose prose-sm max-w-none prose-gray prose-headings:font-serif prose-a:text-v4-red prose-a:no-underline hover:prose-a:underline prose-code:rounded prose-code:bg-gray-100 prose-code:px-1.5 prose-code:py-0.5 prose-code:text-sm prose-code:font-normal">
        <h2>Trajetória</h2>
        <p>
          Há 12 anos atuando com SEO — desde a era dos links pagos no Orkut até a
          era dos agentes de IA. Essa jornada me deu uma visão única sobre como
          a descoberta de informação evolui: do PageRank ao RankBrain, do
          BERT aos Overviews generativos.
        </p>
        <p>
          Hoje, como <strong>AI Lead na V4 Company</strong>, lidero a adoção de
          inteligência artificial na unidade, conectando estratégia de negócios
          com o que há de mais novo em tecnologia de modelos de linguagem,
          agentes e automação.
        </p>

        <h2>O que você encontra aqui</h2>
        <p>
          Este blog é meu laboratório de ideias. Artigos que conectam:
        </p>
        <ul>
          <li>
            <strong>Tecnologia e Inovação</strong> — análises de lançamentos,
            modelos, plataformas e o que eles realmente significam
          </li>
          <li>
            <strong>Geopolítica e Economia</strong> — o impacto da AI no
            equilíbrio de poder entre nações e na economia global
          </li>
          <li>
            <strong>SEO → GEO</strong> — como a descoberta está mudando na era
            dos motores generativos
          </li>
          <li>
            <strong>Estratégia</strong> — frameworks para tomar decisões
            melhores em um mundo que muda a cada trimestre
          </li>
        </ul>

        <h2>Fale comigo</h2>
        <p>
          Conteúdo, parcerias, palestras ou só trocar uma ideia sobre AI e
          tecnologia. Estou no{" "}
          <a
            href="https://linkedin.com/in/marcosperetto"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
          .
        </p>
      </div>

      <div className="mt-12 rounded-lg border border-gray-100 bg-gray-50 p-6">
        <div className="flex items-center gap-4">
          <div className="flex h-14 w-14 items-center justify-center rounded-full bg-v4-red text-white font-bold text-lg">
            MP
          </div>
          <div>
            <p className="font-semibold text-gray-900">Marcos Peretto</p>
            <p className="text-sm text-gray-500">
              AI Lead @ V4 Company · SEO desde 2014
            </p>
            <a
              href="https://linkedin.com/in/marcosperetto"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-1 inline-flex items-center gap-1 text-xs text-v4-red hover:underline"
            >
              <LinkedInIcon className="h-3 w-3" />
              Conectar no LinkedIn
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
