---
title: "Mercado de IA: Resumen de la Semana — NVIDIA+Microsoft, GPT-5.5 en los Agents y el Avance Chino (03 Jun 2026)"
brief: "Resumen semanal de los principales movimientos del mercado de inteligencia artificial: NVIDIA anuncia asociación con Microsoft para agentes Windows, OpenAI libera GPT-5.5 para todos los planes, China avanza con modelo abierto competitivo y nuevas investigaciones en agentes físicos."
date: 2026-06-03
tags:
  - Mercado
  - IA
coverImage: /images/resumo-semana-cover.svg
---

![Mercado de IA — Resumen de la Semana](/images/resumo-semana-cover.svg)

## Semana Caliente: El Mercado de IA No Para

Esta fue una semana densa en anuncios. Mientras el mercado digiere las implicaciones del Microsoft Build, NVIDIA anuncia una asociación estratégica con Microsoft, OpenAI libera acceso general a GPT-5.5 y China demuestra que no se queda atrás en modelos abiertos.

Voy directo a lo que importa.

---

## 1. NVIDIA + Microsoft: Agentes de IA en Windows

NVIDIA y Microsoft anunciaron una **plataforma unificada para deploy de agentes de IA** que cubre desde Windows desktop hasta la nube.

### Lo que se anunció

- **NVIDIA NIM para Windows**: Modelos optimizados ejecutándose localmente en GPUs NVIDIA
- **Azure Local AI**: Deploy de agentes en edge computing con Windows
- **DGX Cloud + Azure AI**: Entrenamiento y fine-tuning integrados

### Por qué esto importa

Por primera vez, una empresa puede **entrenar un agente en la nube (Azure/DGX) y ejecutarlo localmente en el Windows de un empleado** — con los mismos pesos, misma precisión, misma latencia.

Para empresas latinoamericanas que aún dudan en adoptar IA por cuestiones de privacidad de datos (LGPD), esto es un punto de inflexión: los agentes que se ejecutan **localmente** resuelven buena parte de las objeciones regulatorias.

---

## 2. OpenAI Libera GPT-5.5 para Todos los Planes

GPT-5.5, antes disponible solo para suscriptores Pro y equipos, fue liberado para **todos los planes de ChatGPT**, incluyendo el plan gratuito (con límites).

### Lo que cambia

| Plan | Antes | Ahora |
|------|-------|-------|
| Gratuito | GPT-5 mini | GPT-5.5 (con límites de uso) |
| Plus | GPT-5 | GPT-5.5 (límite mayor) |
| Pro | GPT-5.5 | GPT-5.5 sin restricciones |
| Team/Enterprise | GPT-5 | GPT-5.5 + Codex incluido |

### Impacto práctico

- Los usuarios gratuitos ahora tienen acceso a **razonamiento muy superior** a costo cero
- La diferencia entre planes pagos y gratuitos ahora es **volumen**, no calidad
- Codex incluido en el plan Enterprise acelera la adopción de agentes en empresas

El mensaje de OpenAI es claro: **la calidad del modelo ya no es un diferenciador de precio** — el diferenciador es infraestructura, agentes y capacidad de integración.

---

## 3. China: Modelo Abierto Qwen 3.5 Supera a GPT-5 en Benchmarks

Alibaba lanzó el **Qwen 3.5-72B**, un modelo abierto que supera a GPT-5 en benchmarks de razonamiento matemático (MATH) y código (HumanEval), y empata en conocimiento general (MMLU).

### Datos del modelo

- **Parámetros**: 72B (activa) + 256B (MoE total)
- **Licencia**: Apache 2.0 (uso comercial permitido)
- **Entrenamiento**: 22 billones de tokens, 70% multilingüe (incluyendo portugués)
- **Contexto**: 256K tokens

### Por qué esto importa

Qwen 3.5 tiene rendimiento **comparable al GPT-5** pero:
- Es gratuito y abierto
- Corre en hardware local (2x RTX 6000 Ada es suficiente)
- Puede ser fine-tuneado con datos en español/portugués

Para empresas latinoamericanas que quieren **independencia de API estadounidense**, Qwen 3.5 es la alternativa más viable hoy.

---

## 4. Investigación: Agentes Físicos con Aprendizaje por Refuerzo

Dos papers relevantes salieron esta semana:

### NVIDIA Research en CVPR

NVIDIA presentó en CVPR 2026 técnicas de **grasping avanzado para robots** usando aprendizaje por refuerzo con simulación en paralelo en Isaac Sim.

El avance: robots que aprenden a **tomar objetos nunca vistos antes** con 94% de éxito después de entrenamiento en simulación — sin necesidad de datos reales.

### DeepMind: Agentes que Aprenden con Instrucciones en Lenguaje Natural

DeepMind publicó un paper donde agentes en entorno simulado aprenden tareas complejas **solo con instrucciones en lenguaje natural**, sin reward engineering.

El modelo usa un **LLM como juez interno**: el agente propone acciones, el LLM evalúa si la acción es consistente con la instrucción, y el agente ajusta su comportamiento basado en el feedback.

---

## 5. Qué Observar la Próxima Semana

1. **WWDC 2026 (Apple)**: Rumores de que Apple anunciará su propia plataforma de agentes integrada en iOS y macOS — asistentes on-device con privacidad como diferencial
2. **Databricks + MosaicML**: Nuevo modelo abierto enfocado en análisis de datos y SQL
3. **Regulación Europea AI Act**: Las primeras multas comienzan a aplicarse a empresas que no estén en compliance

---

## Análisis de la Semana

Tres tendencias se consolidan:

1. **Los modelos abiertos alcanzan a los modelos cerrados** — Qwen 3.5 prueba que open-source ya no es sinónimo de calidad inferior. Esto cambia la dinámica de precios y acceso.

2. **Los agentes son la prioridad número 1** — Todas las big techs están asignando recursos desproporcionados a agentes vs modelos puros. El mercado ya entendió que el valor está en la orquestación.

3. **Latinoamérica necesita moverse** — Con modelos abiertos competitivos, agentes ejecutándose localmente (LGPD-friendly) y plataformas accesibles (Azure AI Agent Service), ya no hay excusa para no empezar.

La pregunta que dejo: **¿qué está construyendo tu empresa con IA esta semana?**

---

*Marcos Luciano es Senior Media Buyer, AI & SEO Specialist en V4 Company. Escribe diariamente sobre inteligencia artificial, arquitectura de sistemas IA y el mercado de tecnología. [Sígame en LinkedIn](https://linkedin.com/in/marcoslrvieira) para recibir actualizaciones diarias.*
