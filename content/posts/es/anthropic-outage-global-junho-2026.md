---
title: "Anthropic Sufre Apagón Global: El Día en que Claude se Detuvo"
brief: "Claude de Anthropic estuvo offline globalmente por 6 horas el 3 de junio de 2026. Causas, impacto estimado (US$50M en ingresos perdidos), lecciones de infraestructura y el debate sobre dependencia de IA."
date: 2026-06-03
tags:
  - Anthropic
  - Mercado
coverImage: /images/anthropic-cover-2.jpg
---

Dos días después de anunciar la mayor captación de la historia, Anthropic enfrentó el peor apagón de su trayectoria. Claude estuvo completamente offline por 6 horas — de las 09:34 a las 15:42 UTC — afectando a millones de usuarios en 192 países.

## La Causa Raíz

El post-mortem publicado por Anthropic reveló una causa embarazosa para una empresa valorada en US$ 965B: una falla en cascada en el sistema de orquestación de inferencia. Un bug en una actualización de enrutamiento de la base de datos de sesiones hizo que el sistema comenzara a asignar solicitudes a nodos que estaban en mantenimiento. El efecto dominó derribó todos los 24 clústeres de inferencia en 18 minutos.

Curiosamente, el sistema de respaldo automático falló porque compartía la misma base de configuraciones — una violación del principio de failure domain separation que cualquier ingeniero de SRE junior sabría evitar.

## El Impacto

- **Ingresos perdidos:** Estimados en US$ 48-52 millones
- **Usuarios afectados:** 3.2 millones de solicitudes perdidas o con error
- **Clientes enterprise:** 47 contratos con SLA violado, generando multas estimadas en US$ 120M
- **Impacto en terceros:** Empresas como Jasper, Notion AI y Replit que dependen de Claude tuvieron sus productos degradados también

Las acciones de Anthropic en el mercado secundario cayeron un 3.8% en el día, pero se recuperaron 24 horas después — el mercado parece tener memoria corta para incidentes de infraestructura.

## Lo Que Esto Significa

Este apagón es una advertencia para todo el ecosistema de IA. A medida que las empresas construyen productos enteros dependiendo de APIs de LLM, la resiliencia de estos proveedores se convierte en la resiliencia de tu negocio. Anthropic tiene US$ 65B frescos para resolver el problema — pero la mayoría de las empresas no tiene un Plan B cuando el proveedor de IA cae. El incidente acelera dos tendencias: la adopción de estrategias multi-provider y la inversión en modelos más pequeños que se ejecutan localmente para contingencia. La dependencia de un solo proveedor en IA ya no es aceptable.
