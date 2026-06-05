---
title: "Google Cloud Next: TPU Sunfish e Zebrafish — A Nova Geração de Aceleradores de IA"
brief: "Google anuncia TPU Sunfish (treinamento) e Zebrafish (inferência) no Cloud Next. Comparativo de performance, eficiência energética e como eles se posicionam contra NVIDIA Blackwell e AMD."
date: 2026-04-15
tags:
  - Google
  - Hardware
  - Arquitetura
coverImage: /images/google-cloud-cover-2.jpg
---

No Google Cloud Next de 2026, realizado em 15 de abril em Las Vegas, o Google revelou sua nova geração de TPUs: Sunfish para treinamento e Zebrafish para inferência. Pela primeira vez, o Google separa claramente as arquiteturas de treino e inferência, um movimento que sinaliza maturidade no mercado de silício customizado para IA e um desafio direto ao domínio da NVIDIA.

## Sunfish: A Potência de Treinamento

A TPU Sunfish é construída em processo de 3nm da TSMC e entrega 3,2 petaflops em FP8 por chip — 2,4x a performance da TPU v6e (Trillium). Cada pod Sunfish conecta 16.384 chips via uma nova interconexão óptica chamada Pulsar, que oferece 4,8 Tbps por chip com latência de 2 microssegundos entre quaisquer dois pontos do cluster.

O diferencial está no novo MXU (Matrix Multiply Unit) de sétima geração, que suporta precisão mista FP4/FP8/FP16 com escalonamento automático. Em benchmarks internos, o Google demonstrou treinamento de um modelo de 500B parâmetros 3,1x mais rápido que em clusters equivalentes de NVIDIA Blackwell B200, com 40% menos consumo energético.

## Zebrafish: A Eficiência em Inferência

A TPU Zebrafish é um chip dedicado exclusivamente para inferência, algo que a NVIDIA ainda não faz — suas GPUs são híbridas. Com apenas 50W de TDP (contra 700W+ de uma GPU de inferência), a Zebrafish é otimizada para servir modelos com latência ultrabaixa. São 512 TOPS em INT8 com suporte nativo a sparse activation, mechanismos de atenção que descartam 60% dos tokens irrelevantes sem perda de qualidade.

O Google afirma que servir o Gemini 3.1 Flash com 128K tokens de contexto em uma Zebrafish custa US$0.08 por milhão de tokens — 5x mais barato que o mesmo workload em uma L40S da NVIDIA. Para workloads de alta escala, isso representa economia de milhões de dólares anuais.

## Posicionamento no Mercado

Com Sunfish e Zebrafish, o Google ataca NVIDIA em duas frentes: performance máxima para treino (Sunfish) e custo mínimo para inferência (Zebrafish). A estratégia é clara: oferecer o caminho mais eficiente para quem já está no ecossistema Google Cloud, especialmente via GKE e Vertex AI. A NVIDIA ainda lidera em flexibilidade e ecossistema de software, mas a diferença de custo está ficando grande demais para ignorar.

## O Que Isso Significa

A separação entre chips de treino e inferência é uma tendência que veio para ficar. A Zebrafish, em particular, representa uma ameaça real ao domínio da NVIDIA em inferência — o segmento que mais cresce no mercado de IA. Para empresas que operam modelos em produção com alto volume de chamadas, a migração para TPU Zebrafish pode reduzir custos de inferência em 70-80%. O vinculo com o Google Cloud, no entanto, é a contrapartida. A NVIDIA precisa responder com sua própria arquitetura dedicada de inferência, ou arrisca perder o segmento mais lucrativo do mercado nos próximos anos.
