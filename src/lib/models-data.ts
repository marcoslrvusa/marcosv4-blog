function m(
  slug: string, name: string, hfPath: string, provider: string, providerSlug: string,
  context: string, maxOutput: string, inputPrice: string, outputPrice: string,
  cachedInput: string | null, releaseDate: string, license: string,
  description: string, longDescription: string, tags: string[], features: string[],
  useCases: { title: string; desc: string }[],
  benchmarks: { label: string; value: string }[]
) {
  return { slug, name, hfPath, provider, providerSlug, context, maxOutput, inputPrice, outputPrice, cachedInput, releaseDate, license, description, longDescription, tags, features, useCases, benchmarks }
}

export const modelsData: Record<string, ReturnType<typeof m>> = {
  "deepseek-v4-pro": m(
    "deepseek-v4-pro", "DeepSeek-V4-Pro", "deepseek-ai/DeepSeek-V4-Pro",
    "DeepSeek", "deepseek", "1049K", "393K", "1.60", "3.48", "0.145",
    "April 24, 2026", "MIT",
    "DeepSeek-V4-Pro é o modelo MoE open-source flagship da DeepSeek com 1.6T parâmetros totais e 49B ativados, construído para raciocínio de nível frontier, codificação e tarefas agentivas.",
    "DeepSeek-V4-Pro é o modelo open-source mais avançado da DeepSeek, utilizando arquitetura Mixture-of-Experts (MoE) com 1.6 trilhões de parâmetros totais e 49 bilhões ativados por token. Suporta uma janela de contexto de 1 milhão de tokens e três modos de esforço de raciocínio (Think), atingindo performance de ponta em benchmarks de codificação como LiveCodeBench e Codeforces — rivalizando com modelos fechados líderes de mercado. O modelo é liberado sob licença MIT, permitindo uso comercial e fine-tuning.",
    ["deepseek", "moé", "open-source", "raciocínio", "coding", "1M contexto"],
    [
      "Arquitetura MoE com 1.6T parâmetros totais, 49B ativados",
      "Janela de contexto de 1M tokens (1049K)",
      "Três modos de raciocínio: Think, Think Deep, Think Max",
      "Performance top-tier em LiveCodeBench e Codeforces",
      "Licença MIT — uso comercial permitido",
      "Suporte a function calling e tool use",
    ],
    [
      { title: "Codificação Avançada", desc: "Geração, revisão e depuração de código em escala com raciocínio profundo" },
      { title: "Agentes Autônomos", desc: "Execução de tarefas complexas com múltiplas etapas e ferramentas" },
      { title: "Pesquisa e Análise", desc: "Processamento de documentos longos e análise de grandes volumes de dados" },
      { title: "Raciocínio Matemático", desc: "Resolução de problemas matemáticos avançados e provas formais" },
    ],
    [
      { label: "LiveCodeBench", value: "Top 3" },
      { label: "Codeforces", value: "Top 5%" },
      { label: "MATH", value: "96.8%" },
      { label: "HumanEval", value: "92.4%" },
    ]
  ),

  "deepseek-v4-flash": m(
    "deepseek-v4-flash", "DeepSeek-V4-Flash", "deepseek-ai/DeepSeek-V4-Flash",
    "DeepSeek", "deepseek", "1049K", "393K", "0.13", "0.28", "0.028",
    "April 24, 2026", "MIT",
    "DeepSeek-V4-Flash é o modelo MoE open-source da DeepSeek com 284B parâmetros totais e apenas 13B ativados, entregando geração de alta velocidade sem sacrificar capacidade.",
    "DeepSeek-V4-Flash é o modelo open-source mais recente da DeepSeek, apresentando 284B parâmetros totais com apenas 13B ativados durante inferência, oferecendo geração de alta velocidade sem sacrificar capacidade. Com suporte nativo a janela de contexto de 1M tokens e três modos de raciocínio — Non-Think, Think High e Think Max — oferece escalonamento flexível de inteligência, de tarefas cotidianas a raciocínio complexo, sob licença MIT.",
    ["deepseek", "flash", "moé", "alta-velocidade", "open-source"],
    [
      "284B parâmetros totais, apenas 13B ativados (alta velocidade)",
      "Janela de contexto de 1M tokens (1049K)",
      "Três modos: Non-Think, Think High, Think Max",
      "Geração de alta velocidade sem sacrificar qualidade",
      "Licença MIT — uso comercial permitido",
    ],
    [
      { title: "Chat em Tempo Real", desc: "Respostas rápidas com modo Non-Think para conversação fluida" },
      { title: "Raciocínio Rápido", desc: "Modo Think High para tarefas que exigem equilíbrio entre velocidade e profundidade" },
      { title: "Análise de Documentos", desc: "Processamento de contexto longo de até 1M tokens" },
    ],
    [
      { label: "Velocidade", value: "3x mais rápido" },
      { label: "Custo", value: "12x menor" },
      { label: "MMLU", value: "88.5%" },
    ]
  ),

  "minimax-m3": m(
    "minimax-m3", "MiniMax-M3", "MiniMaxAI/MiniMax-M3",
    "MiniMax AI", "minimax", "1049K", "131K", "0.30", "1.20", "0.06",
    "June 1, 2026", "APACHE-2.0",
    "MiniMax-M3 é o modelo multimodal de codificação e agente da MiniMax, construído com arquitetura MiniMax Sparse Attention (MSA) e suporte a vídeo e imagem.",
    "MiniMax-M3 representa um avanço significativo em modelos multimodais, utilizando a arquitetura proprietária MiniMax Sparse Attention (MSA) que otimiza o processamento de longos contextos. Suporta até 1 milhão de tokens de contexto e aceita entradas de imagem e vídeo. O modelo é projetado para geração de código, fluxos agentivos, uso de ferramentas, compreensão de contexto longo e raciocínio multi-etapas, com performance forte em benchmarks como SWE-Bench Pro, Terminal-Bench 2.1 e MCP Atlas.",
    ["minimax", "multimodal", "coding", "agente", "video", "imagem", "1M contexto"],
    [
      "Arquitetura MiniMax Sparse Attention (MSA)",
      "Janela de contexto de 1M tokens (1049K)",
      "Suporte a imagem e vídeo como input",
      "Performance top-tier em SWE-Bench Pro",
      "Otimizado para tool use e fluxos agentivos",
      "Raciocínio multi-etapas com longa duração",
    ],
    [
      { title: "Codificação Multimodal", desc: "Geração de código com contexto visual e documentação técnica" },
      { title: "Análise de Vídeo", desc: "Compreensão e sumarização de conteúdo em vídeo" },
      { title: "Agentes com Ferramentas", desc: "Execução autônoma de tarefas com chamadas de API e ferramentas" },
      { title: "Processamento de Longos Documentos", desc: "Análise de contratos, papers e relatórios extensos" },
    ],
    [
      { label: "SWE-Bench Pro", value: "SOTA" },
      { label: "Terminal-Bench 2.1", value: "Top" },
      { label: "MCP Atlas", value: "Leading" },
      { label: "MMLU", value: "89.2%" },
    ]
  ),

  "nex-n2-pro": m(
    "nex-n2-pro", "Nex-N2-Pro", "nex-agi/Nex-N2-Pro",
    "Nex AGI", "nex-agi", "262K", "256K", "0.00", "0.00", null,
    "June 2, 2026", "APACHE-2.0",
    "Nex-N2-Pro é o modelo de pensamento agentivo da Nex AGI com Agentic Thinking, adaptando profundidade de raciocínio por etapa com 30-50% menos tokens.",
    "Nex-N2 é uma família de modelos de pensamento com Agentic Thinking — eles decidem adaptativamente quando e quão profundamente raciocinar, unificando a cognição do agente em codificação, busca e uso de ferramentas em um único paradigma coerente. O N2-Pro alcança SOTA entre modelos abertos em SWE-Verified, SWE-Pro, Terminal Bench 2.0, Tau3, WildClawBench e BFCL V4. Oferece Adaptive Thinking: ajusta automaticamente a profundidade de raciocínio por etapa, usando 30-50% menos tokens de pensamento com performance igual ou superior. É compatível com Claude Code, Cursor, OpenClaw e harnesses agentivos.",
    ["nex-agi", "agentic-thinking", "coding", "adaptive", "open-source"],
    [
      "Adaptive Thinking — profundidade de raciocínio adaptativa",
      "30-50% menos tokens de pensamento vs raciocínio sempre-ativo",
      "SOTA entre modelos abertos em SWE-Verified e SWE-Pro",
      "Top-tier em agentic coding com loops de dev completos",
      "Deep search em BrowseComp, Wild Search, FinSearch",
      "Plug-and-play com Claude Code, Cursor, OpenClaw",
    ],
    [
      { title: "Agentic Coding", desc: "Loops completos de desenvolvimento com raciocínio adaptativo" },
      { title: "Deep Search", desc: "Pesquisa profunda na web com compreensão contextual" },
      { title: "Automação de Tarefas", desc: "Execução de fluxos complexos com múltiplas ferramentas" },
      { title: "Produtividade", desc: "Assistência em tarefas do mundo real com eficiência de tokens" },
    ],
    [
      { label: "SWE-Verified", value: "SOTA" },
      { label: "SWE-Pro", value: "SOTA" },
      { label: "Terminal Bench 2.0", value: "Leading" },
      { label: "BFCL V4", value: "Top" },
    ]
  ),

  "kimi-k2-6": m(
    "kimi-k2-6", "Kimi-K2.6", "moonshotai/Kimi-K2.6",
    "Moonshot AI", "moonshot-ai", "262K", "262K", "0.77", "4.00", "0.20",
    "April 21, 2026", "APACHE-2.0",
    "Kimi K2.6 é o modelo agentivo multimodal open-source da Moonshot AI, com arquitetura MoE de 1T parâmetros e 32B ativados.",
    "Kimi K2.6 é o modelo agentivo multimodal open-source mais avançado da Moonshot AI, alcançando estado-da-arte entre modelos abertos em benchmarks como HLE with tools, SWE-Bench Pro e BrowseComp. Construído em arquitetura MoE com 1 trilhão de parâmetros totais e 32 bilhões ativados, suporta janela de contexto de 256K tokens e entradas multimodais (imagem e vídeo) via encoder MoonViT. É otimizado para cargas agentivas: sustenta 4.000+ chamadas de ferramenta por 12+ horas de execução contínua, escala para 300 sub-agentes paralelos × 4.000 etapas por execução.",
    ["moonshot", "kimi", "agentivo", "multimodal", "MoE", "tool-calling"],
    [
      "Arquitetura MoE com 1T parâmetros totais, 32B ativados",
      "Janela de contexto de 256K tokens (262K max output)",
      "Encoder MoonViT para imagem e vídeo",
      "Sustenta 4.000+ tool calls por 12+ horas contínuas",
      "300 sub-agentes paralelos × 4.000 etapas",
      "Modos Thinking e Instant com function calling",
    ],
    [
      { title: "Agentes de Longa Duração", desc: "Execução contínua de tarefas por 12+ horas com centenas de tool calls" },
      { title: "Geração Multi-arquivo", desc: "Produção de 100+ arquivos a partir de um único prompt" },
      { title: "Automação Empresarial", desc: "Fluxos complexos com sub-agentes paralelos e coordenação" },
      { title: "Análise Multimodal", desc: "Compreensão de imagem e vídeo com raciocínio integrado" },
    ],
    [
      { label: "HLE with tools", value: "SOTA" },
      { label: "SWE-Bench Pro", value: "SOTA" },
      { label: "BrowseComp", value: "SOTA" },
      { label: "MMMU", value: "85.7%" },
    ]
  ),

  "hy3-preview": m(
    "hy3-preview", "Hy3-preview", "tencent/Hy3-preview",
    "Tencent", "tencent", "262K", "262K", "0.066", "0.26", "0.029",
    "April 7, 2026", "TENCEN HY COMMUNITY",
    "Hy3-preview é o modelo MoE de 295B parâmetros da Tencent Hunyuan, construído para cargas agentivas de produção com apenas 21B ativados por token.",
    "Hy3-preview é um modelo de linguagem Mixture-of-Experts (MoE) de 295B parâmetros da Tencent Hunyuan, construído para cargas de trabalho agentivas de produção. Com apenas 21B parâmetros ativados por token e suporte nativo a contexto de 256K, ele lida com tarefas complexas como refatoração de código cross-file, análise de documentos longos e uso de ferramentas multi-etapas. Hy3 pontua próximo ao estado-da-arte em SWE-bench Verified e benchmarks STEM avançados, oferecendo três modos de inferência (no_think, think_low, think_high).",
    ["tencent", "hunyuan", "moé", "agente", "produção", "STEM"],
    [
      "295B parâmetros totais, apenas 21B ativados",
      "Contexto nativo de 256K tokens",
      "Três modos de inferência: no_think, think_low, think_high",
      "Refatoração de código cross-file",
      "Análise de documentos longos",
      "Custo por token significativamente reduzido",
    ],
    [
      { title: "Agentes de Produção", desc: "Cargas agentivas contínuas com ferramentas multi-etapas" },
      { title: "Refatoração de Código", desc: "Modificação cross-file em bases de código complexas" },
      { title: "Análise Científica", desc: "Raciocínio STEM avançado e análise de papers" },
      { title: "Automação Empresarial", desc: "Fluxos de trabalho com múltiplas etapas e ferramentas" },
    ],
    [
      { label: "SWE-bench Verified", value: "Near SOTA" },
      { label: "STEM", value: "Avançado" },
      { label: "Custo", value: "75% menor" },
    ]
  ),

  "glm-5-1": m(
    "glm-5-1", "GLM-5.1", "zai-org/GLM-5.1",
    "Z.ai", "z-ai", "205K", "131K", "1.40", "4.40", "0.26",
    "April 3, 2026", "APACHE-2.0",
    "GLM-5.1 é o modelo flagship da Z.ai (Zhipu AI) construído para engenharia agentiva — execução contínua por horas ou mais, refinando estratégia continuamente.",
    "GLM-5.1 é o modelo de próxima geração da Z.ai (Zhipu AI), construído para engenharia agentiva. É projetado para executar continuamente por horas ou até mais, refinando sua estratégia conforme trabalha — quanto mais tempo executa, melhores os resultados. Suporta contexto de 205K tokens e oferece performance competitiva em raciocínio, codificação e tarefas agentivas de longa duração.",
    ["z-ai", "glm", "agente", "engenharia", "longa-duração", "chatglm"],
    [
      "Execução contínua por horas com refinamento de estratégia",
      "Janela de contexto de 205K tokens",
      "Arquitetura otimizada para tarefas agentivas",
      "Performance competitiva em raciocínio e codificação",
      "Licença Apache 2.0",
    ],
    [
      { title: "Engenharia Agentiva", desc: "Execução contínua com refinamento progressivo de estratégia" },
      { title: "Análise Prolongada", desc: "Processamento de tarefas complexas que exigem raciocínio estendido" },
      { title: "Codificação", desc: "Geração e refatoração de código com contexto de longa duração" },
    ],
    [
      { label: "Agente Contínuo", value: "Líder" },
      { label: "Contexto", value: "205K" },
      { label: "MMLU", value: "91.2%" },
    ]
  ),

  "glm-5v-turbo": m(
    "glm-5v-turbo", "GLM-5V-Turbo", "zai-org/GLM-5V-Turbo",
    "Z.ai", "z-ai", "205K", "131K", "1.20", "4.00", "0.24",
    "March 30, 2026", "APACHE-2.0",
    "GLM-5V-Turbo é a versão multimodal turbo do GLM-5 da Z.ai, combinando compreensão visual com raciocínio agentivo de longa duração.",
    "GLM-5V-Turbo é a variante multimodal otimizada do GLM-5, combinando compreensão visual com raciocínio agentivo. Suporta contexto de 205K tokens e oferece performance acelerada para tarefas que exigem processamento simultâneo de texto e imagem com execução agentiva contínua.",
    ["z-ai", "glm", "multimodal", "visão", "turbo", "agente"],
    [
      "Compreensão visual + raciocínio agentivo",
      "Janela de contexto de 205K tokens",
      "Versão turbo com latência reduzida",
      "Processamento simultâneo de texto e imagem",
      "Licença Apache 2.0",
    ],
    [
      { title: "Análise Visual", desc: "Compreensão de imagens com raciocínio contextual profundo" },
      { title: "Documentos Multimodais", desc: "Processamento de relatórios com gráficos, tabelas e texto" },
      { title: "Agentes Visuais", desc: "Agentes que compreendem screenshots e imagens de interface" },
    ],
    [
      { label: "Visão + Texto", value: "Multimodal" },
      { label: "Contexto", value: "205K" },
      { label: "Latência", value: "2x mais rápido" },
    ]
  ),

  "qwen3-6-35b-a3b": m(
    "qwen3-6-35b-a3b", "Qwen3.6-35B-A3B", "Qwen/Qwen3.6-35B-A3B",
    "Qwen", "qwen", "262K", "262K", "0.20", "1.60", null,
    "May 9, 2026", "APACHE-2.0",
    "Qwen3.6-35B-A3B é o modelo MoE da série Qwen3.6 com 35B parâmetros totais e ~3B ativos, entregando performance robusta com uso eficiente de computação.",
    "Qwen3.6-35B-A3B é um modelo de linguagem da série Qwen3.6 da Alibaba, com arquitetura Mixture of Experts (MoE) de 35 bilhões de parâmetros totais e aproximadamente 3 bilhões de parâmetros ativos por inferência. Suporta modos thinking e non-thinking, oferecendo troca flexível entre resposta rápida e raciocínio profundo. Contexto nativo de 262K tokens.",
    ["qwen", "alibaba", "moé", "eficiente", "thinking", "open-source"],
    [
      "Arquitetura MoE com 35B totais, ~3B ativos",
      "Modos thinking e non-thinking intercambiáveis",
      "Contexto nativo de 262K tokens",
      "Eficiência computacional com performance robusta",
      "Licença Apache 2.0",
    ],
    [
      { title: "Chat Eficiente", desc: "Respostas rápidas com modo non-thinking para alta produtividade" },
      { title: "Raciocínio Profundo", desc: "Modo thinking para problemas complexos que exigem análise" },
      { title: "Processamento de Longos Textos", desc: "Contexto de 262K tokens para documentação extensa" },
    ],
    [
      { label: "Eficiência", value: "10x menos compute" },
      { label: "MMLU", value: "85.3%" },
      { label: "Contexto", value: "262K" },
    ]
  ),

  "qwen3-6-27b": m(
    "qwen3-6-27b", "Qwen3.6-27B", "Qwen/Qwen3.6-27B",
    "Qwen", "qwen", "262K", "262K", "0.30", "3.20", null,
    "May 9, 2026", "APACHE-2.0",
    "Qwen3.6-27B é o primeiro modelo dense open-weight da série Qwen3.6, com melhorias específicas para geração de código, workflows agentivos e desenvolvimento real.",
    "Qwen3.6-27B é o primeiro modelo dense de peso aberto da série Qwen3.6, com melhorias direcionadas para geração de código, fluxos agentivos e tarefas de desenvolvimento reais. Comparado ao Qwen3.5-27B, entrega ganhos significativos em desenvolvimento frontend, raciocínio em nível de repositório, uso de ferramentas e resolução de problemas complexos. Suporta compreensão visual com contexto nativo de 262.144 tokens e preservação de contexto de raciocínio entre turnos.",
    ["qwen", "alibaba", "dense", "coding", "agente", "visão"],
    [
      "Modelo dense com 27B parâmetros",
      "Contexto nativo de 262K tokens",
      "Compreensão visual integrada",
      "Preservação de raciocínio entre turnos",
      "Ganhos em code, frontend e tool use sobre Qwen3.5",
    ],
    [
      { title: "Desenvolvimento Frontend", desc: "Geração de código com compreensão de UI e componentes" },
      { title: "Raciocínio em Repositório", desc: "Análise e modificação de código multi-arquivo" },
      { title: "Tool Use", desc: "Uso de ferramentas e APIs com contexto preservado" },
      { title: "Compreensão Visual", desc: "Análise de imagens com contexto de 262K tokens" },
    ],
    [
      { label: "Code Generation", value: "Avançado" },
      { label: "Frontend", value: "Líder" },
      { label: "Contexto", value: "262K" },
      { label: "MMLU", value: "87.1%" },
    ]
  ),

  "qwen3-5-397b-a17b": m(
    "qwen3-5-397b-a17b", "Qwen3.5-397B-A17B", "Qwen/Qwen3.5-397B-A17B",
    "Qwen", "qwen", "262K", "262K", "0.39", "2.34", null,
    "May 9, 2026", "APACHE-2.0",
    "Qwen3.5-397B-A17B é o modelo de visão-linguagem mais recente da série Qwen, com arquitetura MoE de 397B parâmetros totais e 17B ativados.",
    "Qwen3.5-397B-A17B é o mais recente modelo de visão-linguagem da série Qwen, com arquitetura Mixture-of-Experts (MoE) de 397B parâmetros totais e 17B ativados. Suporta nativamente 256K tokens de contexto, extensível para aproximadamente 1M tokens, com suporte a 201 idiomas, compreensão unificada de visão-linguagem, chamada de ferramentas e modo de raciocínio (thinking).",
    ["qwen", "alibaba", "moé", "visão-linguagem", "multimodal", "1M contexto"],
    [
      "Arquitetura MoE com 397B totais, 17B ativados",
      "Contexto nativo de 256K, extensível a ~1M",
      "Suporte a 201 idiomas",
      "Compreensão unificada visão-linguagem",
      "Tool calling e modo thinking",
    ],
    [
      { title: "Visão-Linguagem", desc: "Compreensão avançada de imagens com descrição em texto" },
      { title: "Análise Multilíngue", desc: "Processamento em 201 idiomas com contexto longo" },
      { title: "Raciocínio Visual", desc: "Resolução de problemas que exigem compreensão de imagem e texto" },
    ],
    [
      { label: "Parâmetros", value: "397B MoE" },
      { label: "Idiomas", value: "201" },
      { label: "Contexto", value: "256K→1M" },
      { label: "MMLU", value: "90.5%" },
    ]
  ),

  "qwen3-5-122b-a10b": m(
    "qwen3-5-122b-a10b", "Qwen3.5-122B-A10B", "Qwen/Qwen3.5-122B-A10B",
    "Qwen", "qwen", "262K", "262K", "0.26", "2.08", null,
    "May 9, 2026", "APACHE-2.0",
    "Qwen3.5-122B-A10B é o modelo MoE de médio porte da série Qwen, com 122B parâmetros totais e 10B ativados para eficiência computacional.",
    "Qwen3.5-122B-A10B é a variante MoE de médio porte da série Qwen3.5, com 122B parâmetros totais e 10B ativados. Oferece equilíbrio entre capacidade e eficiência computacional, suportando contexto de 262K tokens, múltiplos idiomas e compreensão visual integrada.",
    ["qwen", "alibaba", "moé", "médio-porte", "eficiente"],
    [
      "Arquitetura MoE com 122B totais, 10B ativados",
      "Contexto de 262K tokens",
      "Equilíbrio entre capacidade e eficiência",
      "Compreensão visual integrada",
      "Licença Apache 2.0",
    ],
    [
      { title: "Processamento Eficiente", desc: "Alta capacidade com custo computacional reduzido" },
      { title: "Análise de Documentos", desc: "Contexto de 262K tokens para relatórios extensos" },
      { title: "Raciocínio Multimodal", desc: "Compreensão de texto e imagem integrada" },
    ],
    [
      { label: "Parâmetros", value: "122B MoE" },
      { label: "Custo-benefício", value: "Ideal" },
      { label: "Contexto", value: "262K" },
    ]
  ),
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
