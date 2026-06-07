import LockedArticle from "@/components/LockedArticle";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Guia Prático: Como Estruturar uma Unidade de IA em Menos de 30 Dias",
  description: "Passo a passo completo para montar time, ferramentas e pipeline de conteúdo orientado por IA. Inclui templates de Sprint, OKRs e scripts prontos.",
};

export default function Page() {
  return (
    <article className="mx-auto max-w-3xl px-6 py-10">
      <header className="mb-8">
        <span className="font-mono text-[10px] uppercase tracking-widest text-v4-red">
          Artigo Bloqueado
        </span>
        <h1 className="mt-2 text-3xl font-bold">
          Guia Prático: Como Estruturar uma Unidade de IA em Menos de 30 Dias
        </h1>
        <p className="mt-3 text-sm text-muted-foreground">
          Porque montar um time de IA não é só sobre contratar gente. É sobre
          ferramentas, processos e ritmo de entrega.
        </p>
      </header>

      <section className="mb-10 rounded-xl border border-border bg-card/50 p-6">
        <h2 className="text-lg font-semibold">Resumo do que está dentro</h2>
        <ul className="mt-4 space-y-2">
          <li className="flex items-start gap-2 text-sm">
            <span className="mt-0.5 h-1.5 w-1.5 rounded-full bg-v4-red" />
            Playbook de 7 dias para automatizar 3 rotinas de marketing com n8n.
          </li>
          <li className="flex items-start gap-2 text-sm">
            <span className="mt-0.5 h-1.5 w-1.5 rounded-full bg-v4-red" />
            Modelo de OKRs de IA editável (Notion + Planilha) com metas
            realistas de curto prazo.
          </li>
          <li className="flex items-start gap-2 text-sm">
            <span className="mt-0.5 h-1.5 w-1.5 rounded-full bg-v4-red" />
            Scripts em JavaScript/TypeScript para conectar OpenAI, DeepSeek ou
            modelos privados.
          </li>
        </ul>
      </section>

      <LockedArticle
        slug="guia-ia-performance"
        teaser={[
          "Sprint de 7 dias detalhado (dia a dia, ferramentas, entregas).",
          "Estrutura de OKR pronta para copiar e adaptar.",
          "Galeria de prompts reais usados em clientes de performance.",
        ]}
      >
        <section className="prose prose-neutral">
          <h2>Semana 0 — Definição de escopo</h2>
          <p>
            Antes de contratar qualquer pessoa ou API, você precisa decidir
            <strong> quais rotinas</strong> vão ser automatizadas primeiro.
          </p>
          <ul>
            <li>Relatórios de Google Ads e Meta Ads.</li>
            <li>Extração de insights de reviews/pesquisas de satisfação.</li>
            <li>Geração de rascunhos de anúncios e e‑mails.</li>
          </ul>

          <h3>Template: Roteiro da primeira sprint</h3>
          <ul>
            <li>
              <strong>Dia 1–2:</strong> Levantamento de rotinas e APIs.
            </li>
            <li>
              <strong>Dia 3–4:</strong> Prototipação de 1 fluxo no n8n.
            </li>
            <li>
              <strong>Dia 5–6:</strong> Integração com Google Sheets + e‑mail.
            </li>
            <li>
              <strong>Dia 7:</strong> Teste em produção com 1 cliente real.
            </li>
          </ul>

          <h2>Semana 1 — Infraestrutura mínima viável</h2>
          <p>
            Nada de Kubernetes, nada de microserviços. Você só precisa:
          </p>
          <ul>
            <li>
              Um cluster de execução de n8n (VPS, Render, Railway ou hostinger).
            </li>
            <li>
              Acesso a APIs pagas ou privadas (OpenAI, Anthropic, DeepSeek,
              outros).
            </li>
          </ul>

          <h3>Playbook n8n</h3>
          <ul>
            <li>
              Fluxo 1: puxa relatórios de custo/resultado do Google/Meta.
            </li>
            <li>
              Fluxo 2: consolida em uma planilha e dispara e‑mail com alerta se
              CAC subir acima de X.
            </li>
            <li>
              Fluxo 3: lê reviews/pesquisas e gera insights semanais de CSAT.
            </li>
          </ul>

          <h2>Semana 2 — Modelos e prompts</h2>
          <p>
            Aqui você vai começar a colocar IA generativa para funcionar de
            verdade.
          </p>
          <ul>
            <li>
              <strong>Prompts de análise:</strong> instrua o modelo a devolver
              sempre JSON, com campos numéricos e textuais.
            </li>
            <li>
              <strong>Prompts criativos:</strong> use persona + limitador de
              tom + exemplos.
            </li>
          </ul>

          <h2>Semana 3 — Documentação e escala</h2>
          <p>
            Se ninguém souber como usar o que foi feito, o trabalho morre
            contigo.
          </p>
          <ul>
            <li>Documente 1 fluxo por dia em vídeo de 3 minutos.</li>
            <li>Salve em Notion (ou Drive) com tags por cliente/projeto.</li>
          </ul>
        </section>
      </LockedArticle>
    </article>
  );
}
