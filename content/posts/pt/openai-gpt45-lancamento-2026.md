---
title: "OpenAI Lança GPT-4.5: O Último Modelo Puramente Autoregressivo Antes do GPT-5"
brief: "OpenAI apresenta GPT-4.5 em março de 2026 com melhorias significativas em raciocínio matemático (+18%), contexto de 256K tokens e redução de 40% nas alucinações. Posicionado como o 'bridge' para o GPT-5, previsto para o segundo semestre, o modelo traz a arquitetura Orion com inovações em eficiência."
date: 2026-03-05
tags:
  - OpenAI
  - Arquitetura
coverImage: /images/openai-cover.jpg
---

Em 5 de março de 2026, a OpenAI lançou o GPT-4.5, o que a própria empresa chama de "o último modelo puramente autoregressivo antes do GPT-5". Batizado internamente de Orion, o novo modelo traz avanços incrementais mas significativos — e revela muito sobre a estratégia da OpenAI para 2026: consolidar antes de revolucionar.

Os números falam por si. O GPT-4.5 alcançou 91.3% no MATH (contra 86.8% do GPT-4), 97.1% no MMLU-Pro e 92.4% no HumanEval. Em raciocínio multi-hop (benchmark MuSiQue), o modelo teve um salto de 72% para 84%. O contexto máximo foi expandido de 128K para 256K tokens — o suficiente para processar livros completos ou bases de código de grande porte.

## O Que Mudou na Arquitetura

O GPT-4.5 é baseado na arquitetura Orion, que a OpenAI vinha desenvolvendo desde 2024. As principais inovações são:

1. **Atenção híbrida**: combina atenção densa nas primeiras camadas com atenção esparsa (via sliding window + global tokens) nas camadas superiores. Isso reduziu o custo de inferência para sequências longas em 35% em relação ao GPT-4
2. **Pré-treinamento escalável**: o modelo foi treinado com 18 trilhões de tokens (vs 12T do GPT-4), com filtragem de qualidade 4x mais rigorosa — a OpenAI afirma que descartou 40% dos tokens candidatos por baixa qualidade
3. **Alinhamento refinado**: o sistema de reward model foi substituído por aprendizado por preferência direta (DPO) em escala, com 2 milhões de pares de preferência anotados por especialistas humanos

A redução de alucinações — 40% menos que o GPT-4, segundo a OpenAI — veio de um truque de pós-treinamento: o modelo foi exposto a perguntas propositalmente ambíguas ou sem resposta e treinado a responder "Não tenho informação suficiente para responder" em vez de inventar.

## Posicionamento Estratégico

O GPT-4.5 é claramente um modelo de transição. A OpenAI está segurando o GPT-5 para o segundo semestre de 2026 enquanto trabalha em uma arquitetura pós-autoregressiva que promete raciocínio verdadeiramente planejado, não apenas predição do próximo token.

O preço do GPT-4.5 reflete a estratégia: US$0.015/token de entrada e US$0.06/token de saída — 25% mais barato que o GPT-4, alinhado com a guerra de preços desencadeada pelo Llama 4 e DeepSeek R1. A OpenAI está sacrificando margem para manter market share enquanto prepara o salto para o GPT-5.

## O Que Isso Significa

O GPT-4.5 mostra que a OpenAI está jogando o jogo da consolidação enquanto prepara o próximo salto. O modelo não é revolucionário, mas é significativamente melhor que o GPT-4 e dramaticamente mais eficiente. Para empresas que constroem sobre a API da OpenAI, o GPT-4.5 oferece qualidade superior com custo menor — mas a verdadeira expectativa está no GPT-5. Se o GPT-5 entregar o que a OpenAI promete (raciocínio planejado, não preditivo), pode redefinir o patamar da indústria. Até lá, GPT-4.5 é o melhor modelo disponível da OpenAI — mas não o mais interessante do mercado.
