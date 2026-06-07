export const modelsData: Record<string, {
  slug: string
  name: string
  hfPath: string
  provider: string
  providerSlug: string
  context: string
  maxOutput: string
  inputPrice: string
  outputPrice: string
  releaseDate: string
  license: string
  description: string
  longDescription: string
  tags: string[]
  features: string[]
  useCases: { title: string; desc: string }[]
  benchmarks: { label: string; value: string }[]
}> = {
  "deepseek-v4-pro": {
    slug: "deepseek-v4-pro",
    name: "DeepSeek-V4-Pro",
    hfPath: "deepseek-ai/DeepSeek-V4-Pro",
    provider: "DeepSeek",
    providerSlug: "deepseek",
    context: "1049K",
    maxOutput: "393K",
    inputPrice: "1.60",
    outputPrice: "3.48",
    releaseDate: "April 24, 2026",
    license: "MIT",
    description: "DeepSeek-V4-Pro é o modelo MoE open-source flagship da DeepSeek com 1.6T parâmetros totais e 49B ativados, construído para raciocínio de nível frontier, codificação e tarefas agentivas.",
    longDescription: "DeepSeek-V4-Pro é o modelo open-source mais avançado da DeepSeek, utilizando arquitetura Mixture-of-Experts (MoE) com 1.6 trilhões de parâmetros totais e 49 bilhões ativados por token. Suporta uma janela de contexto de 1 milhão de tokens e três modos de esforço de raciocínio (Think), atingindo performance de ponta em benchmarks de codificação como LiveCodeBench e Codeforces — rivalizando com modelos fechados líderes de mercado.",
    tags: ["deepseek", "moé", "open-source", "raciocínio", "coding", "1M contexto"],
    features: [
      "Arquitetura MoE com 1.6T parâmetros totais, 49B ativados",
      "Janela de contexto de 1M tokens (1049K)",
      "Três modos de raciocínio: Think, Think Deep, Think Max",
      "Performance top-tier em LiveCodeBench e Codeforces",
      "Licença MIT — uso comercial permitido",
      "Suporte a function calling e tool use",
      "Otimizado para tarefas agentivas e cadeias longas",
    ],
    useCases: [
      { title: "Codificação Avançada", desc: "Geração, revisão e depuração de código em escala com raciocínio profundo" },
      { title: "Agentes Autônomos", desc: "Execução de tarefas complexas com múltiplas etapas e ferramentas" },
      { title: "Pesquisa e Análise", desc: "Processamento de documentos longos e análise de grandes volumes de dados" },
      { title: "Raciocínio Matemático", desc: "Resolução de problemas matemáticos avançados e provas formais" },
    ],
    benchmarks: [
      { label: "LiveCodeBench", value: "Top 3" },
      { label: "Codeforces", value: "Top 5%" },
      { label: "MATH", value: "96.8%" },
      { label: "HumanEval", value: "92.4%" },
    ],
  },

  "minimax-m3": {
    slug: "minimax-m3",
    name: "MiniMax-M3",
    hfPath: "MiniMaxAI/MiniMax-M3",
    provider: "MiniMax AI",
    providerSlug: "minimax",
    context: "1049K",
    maxOutput: "131K",
    inputPrice: "0.30",
    outputPrice: "1.20",
    releaseDate: "June 1, 2026",
    license: "APACHE-2.0",
    description: "MiniMax-M3 é o modelo multimodal de codificação e agente da MiniMax, construído com arquitetura MiniMax Sparse Attention (MSA) e suporte a vídeo e imagem.",
    longDescription: "MiniMax-M3 representa um avanço significativo em modelos multimodais, utilizando a arquitetura proprietária MiniMax Sparse Attention (MSA) que otimiza o processamento de longos contextos. Suporta até 1 milhão de tokens de contexto e aceita entradas de imagem e vídeo. O modelo é projetado para geração de código, fluxos agentivos, uso de ferramentas, compreensão de contexto longo e raciocínio multi-etapas, com performance forte em benchmarks como SWE-Bench Pro, Terminal-Bench 2.1 e MCP Atlas.",
    tags: ["minimax", "multimodal", "coding", "agente", "video", "imagem", "1M contexto"],
    features: [
      "Arquitetura MiniMax Sparse Attention (MSA)",
      "Janela de contexto de 1M tokens (1049K)",
      "Suporte a imagem e vídeo como input",
      "Performance top-tier em SWE-Bench Pro",
      "Otimizado para tool use e fluxos agentivos",
      "Raciocínio multi-etapas com longa duração",
      "Suporte a function calling nativo",
    ],
    useCases: [
      { title: "Codificação Multimodal", desc: "Geração de código com contexto visual e documentação técnica" },
      { title: "Análise de Vídeo", desc: "Compreensão e sumarização de conteúdo em vídeo" },
      { title: "Agentes com Ferramentas", desc: "Execução autônoma de tarefas com chamadas de API e ferramentas" },
      { title: "Processamento de Longos Documentos", desc: "Análise de contratos, papers e relatórios extensos" },
    ],
    benchmarks: [
      { label: "SWE-Bench Pro", value: "State-of-the-art" },
      { label: "Terminal-Bench 2.1", value: "Top position" },
      { label: "MCP Atlas", value: "Leading score" },
      { label: "MMLU", value: "89.2%" },
    ],
  },

  "nex-n2-pro": {
    slug: "nex-n2-pro",
    name: "Nex-N2-Pro",
    hfPath: "nex-agi/Nex-N2-Pro",
    provider: "Nex AGI",
    providerSlug: "nex-agi",
    context: "262K",
    maxOutput: "256K",
    inputPrice: "0.00",
    outputPrice: "0.00",
    releaseDate: "June 2, 2026",
    license: "APACHE-2.0",
    description: "Nex-N2-Pro é o modelo de pensamento agentivo da Nex AGI, adaptando profundidade de raciocínio por etapa com 30-50% menos tokens de pensamento.",
    longDescription: "Nex-N2 é uma família de modelos de pensamento com Agentic Thinking — eles decidem adaptativamente quando e quão profundamente raciocinar, unificando a cognição do agente em codificação, busca e uso de ferramentas em um único paradigma coerente. O N2-Pro alcança SOTA entre modelos abertos em SWE-Verified, SWE-Pro, Terminal Bench 2.0, Tau3, WildClawBench e BFCL V4. Oferece Adaptive Thinking: ajusta automaticamente a profundidade de raciocínio por etapa, usando 30-50% menos tokens de pensamento com performance igual ou superior. É compatível com Claude Code, Cursor, OpenClaw e harnesses agentivos.",
    tags: ["nex-agi", "agentic-thinking", "coding", "adaptive", "open-source", "ferramentas"],
    features: [
      "Adaptive Thinking — profundidade de raciocínio adaptativa",
      "30-50% menos tokens de pensamento vs raciocínio sempre-ativo",
      "SOTA entre modelos abertos em SWE-Verified e SWE-Pro",
      "Top-tier em agentic coding com loops de dev completos",
      "Deep search em BrowseComp, Wild Search, FinSearch",
      "Plug-and-play com Claude Code, Cursor, OpenClaw",
      "Suporte a function calling e tool use",
    ],
    useCases: [
      { title: "Agentic Coding", desc: "Loops completos de desenvolvimento com raciocínio adaptativo" },
      { title: "Deep Search", desc: "Pesquisa profunda na web com compreensão contextual" },
      { title: "Automação de Tarefas", desc: "Execução de fluxos complexos com múltiplas ferramentas" },
      { title: "Produtividade", desc: "Assistência em tarefas do mundo real com eficiência de tokens" },
    ],
    benchmarks: [
      { label: "SWE-Verified", value: "SOTA open-source" },
      { label: "SWE-Pro", value: "SOTA open-source" },
      { label: "Terminal Bench 2.0", value: "Leading" },
      { label: "BFCL V4", value: "Top position" },
    ],
  },

  "kimi-k2-6": {
    slug: "kimi-k2-6",
    name: "Kimi-K2.6",
    hfPath: "moonshotai/Kimi-K2.6",
    provider: "Moonshot AI",
    providerSlug: "moonshot-ai",
    context: "262K",
    maxOutput: "262K",
    inputPrice: "0.77",
    outputPrice: "4.00",
    releaseDate: "April 21, 2026",
    license: "APACHE-2.0",
    description: "Kimi K2.6 é o modelo agentivo multimodal open-source da Moonshot AI, com arquitetura MoE de 1T parâmetros e 32B ativados.",
    longDescription: "Kimi K2.6 é o modelo agentivo multimodal open-source mais avançado da Moonshot AI, alcançando estado-da-arte entre modelos abertos em benchmarks como HLE with tools, SWE-Bench Pro e BrowseComp. Construído em arquitetura MoE com 1 trilhão de parâmetros totais e 32 bilhões ativados, suporta janela de contexto de 256K tokens (extensível) e entradas multimodais (imagem e vídeo) via encoder MoonViT. É otimizado para cargas agentivas: sustenta 4.000+ chamadas de ferramenta por 12+ horas de execução contínua, escala para 300 sub-agentes paralelos × 4.000 etapas por execução, produzindo 100+ arquivos a partir de um único prompt.",
    tags: ["moonshot", "kimi", "agentivo", "multimodal", "MoE", "tool-calling", "open-source"],
    features: [
      "Arquitetura MoE com 1T parâmetros totais, 32B ativados",
      "Janela de contexto de 256K tokens (262K max output)",
      "Encoder MoonViT para imagem e vídeo",
      "Sustenta 4.000+ tool calls por 12+ horas contínuas",
      "300 sub-agentes paralelos × 4.000 etapas",
      "Modos Thinking e Instant com function calling",
      "Score SOTA em HLE with tools, SWE-Bench Pro, BrowseComp",
    ],
    useCases: [
      { title: "Agentes de Longa Duração", desc: "Execução contínua de tarefas por 12+ horas com centenas de tool calls" },
      { title: "Geração Multi-arquivo", desc: "Produção de 100+ arquivos a partir de um único prompt" },
      { title: "Automação Empresarial", desc: "Fluxos complexos com sub-agentes paralelos e coordenação" },
      { title: "Análise Multimodal", desc: "Compreensão de imagem e vídeo com raciocínio integrado" },
    ],
    benchmarks: [
      { label: "HLE with tools", value: "SOTA open-source" },
      { label: "SWE-Bench Pro", value: "SOTA open-source" },
      { label: "BrowseComp", value: "SOTA open-source" },
      { label: "MMMU", value: "85.7%" },
    ],
  },
}

export function getModelBySlug(slug: string) {
  return modelsData[slug] || null
}

export function getAllModelSlugs() {
  return Object.keys(modelsData)
}

export function getAllModels() {
  return Object.values(modelsData)
}
