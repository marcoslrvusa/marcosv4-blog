---
title: "Google Cloud Next: TPU Sunfish y Zebrafish — La Nueva Generación de Aceleradores de IA"
brief: "Google anuncia TPU Sunfish (entrenamiento) y Zebrafish (inferencia) en Cloud Next. Comparativa de rendimiento, eficiencia energética y cómo se posicionan frente a NVIDIA Blackwell y AMD."
date: 2026-04-15
tags:
  - Google
  - Hardware
  - Arquitectura
coverImage: /images/articles/placeholder-ai.svg
---

En el Google Cloud Next de 2026, realizado el 15 de abril en Las Vegas, Google reveló su nueva generación de TPUs: Sunfish para entrenamiento y Zebrafish para inferencia. Por primera vez, Google separa claramente las arquitecturas de entrenamiento e inferencia, un movimiento que señala madurez en el mercado de silicio personalizado para IA y un desafío directo al dominio de NVIDIA.

## Sunfish: La Potencia de Entrenamiento

La TPU Sunfish está construida en proceso de 3nm de TSMC y ofrece 3,2 petaflops en FP8 por chip — 2,4 veces el rendimiento de la TPU v6e (Trillium). Cada pod Sunfish conecta 16.384 chips mediante una nueva interconexión óptica llamada Pulsar, que ofrece 4,8 Tbps por chip con latencia de 2 microsegundos entre cualesquiera dos puntos del cluster.

El diferencial está en el nuevo MXU (Matrix Multiply Unit) de séptima generación, que soporta precisión mixta FP4/FP8/FP16 con escalado automático. En benchmarks internos, Google demostró entrenamiento de un modelo de 500B parámetros 3,1 veces más rápido que en clusters equivalentes de NVIDIA Blackwell B200, con un 40% menos de consumo energético.

## Zebrafish: La Eficiencia en Inferencia

La TPU Zebrafish es un chip dedicado exclusivamente para inferencia, algo que NVIDIA aún no hace — sus GPUs son híbridas. Con solo 50W de TDP (frente a 700W+ de una GPU de inferencia), Zebrafish está optimizada para servir modelos con latencia ultrabaja. Son 512 TOPS en INT8 con soporte nativo a sparse activation, mecanismos de atención que descartan el 60% de los tokens irrelevantes sin pérdida de calidad.

Google afirma que servir Gemini 3.1 Flash con 128K tokens de contexto en una Zebrafish cuesta US$0.08 por millón de tokens — 5 veces más barato que la misma carga de trabajo en una L40S de NVIDIA. Para cargas de trabajo de alta escala, esto representa ahorros de millones de dólares anuales.

## Posicionamiento en el Mercado

Con Sunfish y Zebrafish, Google ataca a NVIDIA en dos frentes: rendimiento máximo para entrenamiento (Sunfish) y costo mínimo para inferencia (Zebrafish). La estrategia es clara: ofrecer el camino más eficiente para quienes ya están en el ecosistema Google Cloud, especialmente a través de GKE y Vertex AI. NVIDIA aún lidera en flexibilidad y ecosistema de software, pero la diferencia de costo se está volviendo demasiado grande para ignorarla.

## Lo Que Esto Significa

La separación entre chips de entrenamiento e inferencia es una tendencia que llegó para quedarse. Zebrafish, en particular, representa una amenaza real al dominio de NVIDIA en inferencia — el segmento que más crece en el mercado de IA. Para las empresas que operan modelos en producción con alto volumen de llamadas, la migración a TPU Zebrafish puede reducir costos de inferencia entre un 70-80%. El vínculo con Google Cloud, sin embargo, es la contrapartida. NVIDIA necesita responder con su propia arquitectura dedicada de inferencia, o arriesga perder el segmento más lucrativo del mercado en los próximos años.
