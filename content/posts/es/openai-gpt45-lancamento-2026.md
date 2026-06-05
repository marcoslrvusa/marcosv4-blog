---
title: "OpenAI Lanza GPT-4.5: El Último Modelo Puramente Autorregresivo Antes del GPT-5"
brief: "OpenAI presenta GPT-4.5 en marzo de 2026 con mejoras significativas en razonamiento matemático (+18%), contexto de 256K tokens y reducción del 40% en alucinaciones. Posicionado como el 'puente' hacia GPT-5, previsto para el segundo semestre, el modelo trae la arquitectura Orion con innovaciones en eficiencia."
date: 2026-03-05
tags:
  - OpenAI
  - Arquitectura
coverImage: /images/openai-cover.jpg
---

El 5 de marzo de 2026, OpenAI lanzó GPT-4.5, lo que la propia empresa llama "el último modelo puramente autorregresivo antes del GPT-5". Bautizado internamente como Orion, el nuevo modelo trae avances incrementales pero significativos — y revela mucho sobre la estrategia de OpenAI para 2026: consolidar antes de revolucionar.

Los números hablan por sí solos. GPT-4.5 alcanzó 91.3% en MATH (frente a 86.8% de GPT-4), 97.1% en MMLU-Pro y 92.4% en HumanEval. En razonamiento multi-hop (benchmark MuSiQue), el modelo dio un salto del 72% al 84%. El contexto máximo se expandió de 128K a 256K tokens — suficiente para procesar libros completos o bases de código de gran tamaño.

## Lo Que Cambió en la Arquitectura

GPT-4.5 se basa en la arquitectura Orion, que OpenAI venía desarrollando desde 2024. Las principales innovaciones son:

1. **Atención híbrida**: combina atención densa en las primeras capas con atención dispersa (mediante sliding window + global tokens) en las capas superiores. Esto redujo el costo de inferencia para secuencias largas en un 35% respecto a GPT-4
2. **Preentrenamiento escalable**: el modelo fue entrenado con 18 billones de tokens (vs 12T de GPT-4), con filtrado de calidad 4 veces más riguroso — OpenAI afirma que descartó el 40% de los tokens candidatos por baja calidad
3. **Alineación refinada**: el sistema de reward model fue reemplazado por aprendizaje por preferencia directa (DPO) a escala, con 2 millones de pares de preferencia anotados por expertos humanos

La reducción de alucinaciones — 40% menos que GPT-4, según OpenAI — provino de un truco de post-entrenamiento: el modelo fue expuesto a preguntas deliberadamente ambiguas o sin respuesta y entrenado para responder "No tengo información suficiente para responder" en lugar de inventar.

## Posicionamiento Estratégico

GPT-4.5 es claramente un modelo de transición. OpenAI está reservando GPT-5 para el segundo semestre de 2026 mientras trabaja en una arquitectura post-autorregresiva que promete razonamiento verdaderamente planificado, no solo predicción del siguiente token.

El precio de GPT-4.5 refleja la estrategia: US$0.015/token de entrada y US$0.06/token de salida — 25% más barato que GPT-4, alineado con la guerra de precios desencadenada por Llama 4 y DeepSeek R1. OpenAI está sacrificando margen para mantener cuota de mercado mientras prepara el salto hacia GPT-5.

## Lo Que Esto Significa

GPT-4.5 muestra que OpenAI está jugando el juego de la consolidación mientras prepara el próximo salto. El modelo no es revolucionario, pero es significativamente mejor que GPT-4 y dramáticamente más eficiente. Para las empresas que construyen sobre la API de OpenAI, GPT-4.5 ofrece calidad superior con menor costo — pero la verdadera expectativa está en GPT-5. Si GPT-5 cumple lo que OpenAI promete (razonamiento planificado, no predictivo), podría redefinir el nivel de la industria. Hasta entonces, GPT-4.5 es el mejor modelo disponible de OpenAI — pero no el más interesante del mercado.
