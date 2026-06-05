"use client";

import { useState } from "react";
import { BookOpen } from "lucide-react";

interface GlossaryEntry {
  term: string;
  definition: string;
}

const glossary: Record<string, GlossaryEntry[]> = {
  pt: [
    { term: "LLM", definition: "Modelo de linguagem de grande escala — rede neural treinada em bilhões de textos para gerar e compreender linguagem natural." },
    { term: "RAG", definition: "Geração aumentada por recuperação — técnica que combina busca em base de conhecimento com LLM para respostas mais precisas e atuais." },
    { term: "Fine-tuning", definition: "Ajuste fino — processo de treinar um modelo pré-treinado em dados específicos para especializá-lo em uma tarefa." },
    { term: "Token", definition: "Unidade básica de processamento de texto. Um token pode ser uma palavra, parte de uma palavra ou caractere." },
    { term: "Transformer", definition: "Arquitetura neural baseada em atenção que revolucionou a IA generativa — base de todos os LLMs modernos." },
    { term: "Embedding", definition: "Vetor numérico que representa o significado de um texto, permitindo busca semântica e comparação por similaridade." },
    { term: "Agente AI", definition: "Sistema autônomo que usa LLM para planejar, executar ferramentas e tomar decisões para atingir um objetivo." },
    { term: "MoE", definition: "Mixture of Experts — arquitetura que ativa apenas subconjuntos do modelo por tarefa, ganhando eficiência sem aumentar custo." },
    { term: "GPT", definition: "Generative Pre-trained Transformer — família de modelos da OpenAI que popularizou a IA generativa." },
    { term: "Alucinação", definition: "Fenômeno onde o modelo gera informações falsas ou inventadas com alta confiança, sem base nos dados de treinamento." },
  ],
  en: [
    { term: "LLM", definition: "Large Language Model — neural network trained on billions of texts to generate and understand natural language." },
    { term: "RAG", definition: "Retrieval-Augmented Generation — technique combining knowledge base search with LLM for more accurate, current answers." },
    { term: "Fine-tuning", definition: "Process of training a pre-trained model on specific data to specialize it for a particular task." },
    { term: "Token", definition: "Basic unit of text processing. A token can be a word, part of a word, or a character." },
    { term: "Transformer", definition: "Attention-based neural architecture that revolutionized generative AI — the foundation of all modern LLMs." },
    { term: "Embedding", definition: "Numerical vector representing the meaning of text, enabling semantic search and similarity comparison." },
    { term: "AI Agent", definition: "Autonomous system using an LLM to plan, use tools, and make decisions to achieve a goal." },
    { term: "MoE", definition: "Mixture of Experts — architecture activating only subsets of the model per task, gaining efficiency without higher cost." },
    { term: "GPT", definition: "Generative Pre-trained Transformer — OpenAI's model family that popularized generative AI." },
    { term: "Hallucination", definition: "Phenomenon where the model generates false or fabricated information with high confidence, with no basis in training data." },
  ],
  es: [
    { term: "LLM", definition: "Modelo de lenguaje de gran escala — red neuronal entrenada en billones de textos para generar y comprender lenguaje natural." },
    { term: "RAG", definition: "Generación aumentada por recuperación — técnica que combina búsqueda en base de conocimiento con LLM para respuestas más precisas." },
    { term: "Fine-tuning", definition: "Ajuste fino — proceso de entrenar un modelo preentrenado en datos específicos para especializarlo en una tarea." },
    { term: "Token", definition: "Unidad básica de procesamiento de texto. Un token puede ser una palabra, parte de una palabra o un carácter." },
    { term: "Transformer", definition: "Arquitectura neuronal basada en atención que revolucionó la IA generativa — base de todos los LLMs modernos." },
    { term: "Embedding", definition: "Vector numérico que representa el significado de un texto, permitiendo búsqueda semántica y comparación por similitud." },
    { term: "Agente IA", definition: "Sistema autónomo que usa un LLM para planificar, ejecutar herramientas y tomar decisiones para lograr un objetivo." },
    { term: "MoE", definition: "Mixture of Experts — arquitectura que activa solo subconjuntos del modelo por tarea, ganando eficiencia sin aumentar costo." },
    { term: "GPT", definition: "Generative Pre-trained Transformer — familia de modelos de OpenAI que popularizó la IA generativa." },
    { term: "Alucinación", definition: "Fenómeno donde el modelo genera información falsa o inventada con alta confianza, sin base en los datos de entrenamiento." },
  ],
};

export default function AiGlossary({ locale = "pt" }: { locale?: string }) {
  const [collapsed, setCollapsed] = useState(false);
  const entries = glossary[locale] || glossary.pt;

  const title = locale === "en" ? "AI Glossary" : locale === "es" ? "Glosario IA" : "Glossário IA";

  return (
    <div className="gradient-border rounded-xl">
      <div className="p-4">
        <button
          onClick={() => setCollapsed(!collapsed)}
          className="flex w-full items-center gap-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground"
        >
          <BookOpen className="h-3.5 w-3.5 text-accent-purple" />
          <span>{title}</span>
          <svg
            className={`ml-auto h-3 w-3 transition-transform duration-200 ${collapsed ? "-rotate-90" : ""}`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>
        {!collapsed && (
          <dl className="mt-3 space-y-2">
            {entries.map((entry) => (
              <div key={entry.term}>
                <dt className="font-mono text-xs font-semibold text-accent-emerald">
                  {entry.term}
                </dt>
                <dd className="mt-0.5 text-[11px] leading-relaxed text-muted-foreground">
                  {entry.definition}
                </dd>
              </div>
            ))}
          </dl>
        )}
      </div>
    </div>
  );
}
