---
title: "Anthropic Sofre Outage Global: O Dia em que o Claude Parou"
brief: "Claude da Anthropic ficou offline globalmente por 6 horas em 3 de junho de 2026. Causas, impacto estimado (US$50M em receita perdida), lições de infraestrutura e o debate sobre dependência de IA."
date: 2026-06-03
tags:
  - Anthropic
  - Mercado
coverImage: /images/anthropic-cover.jpg
---

Dois dias após anunciar a maior captação da história, a Anthropic enfrentou o pior outage de sua trajetória. O Claude ficou completamente offline por 6 horas — das 09:34 às 15:42 UTC — afetando milhões de usuários em 192 países.

## A Causa Raiz

O post-mortem publicado pela Anthropic revelou uma causa embaraçosa para uma empresa avaliada em US$ 965B: uma falha em cascata no sistema de orquestração de inferência. Um bug em uma atualização de roteamento do banco de dados de sessões fez com que o sistema começasse a alocar requisições para nós que estavam em manutenção. O efeito dominó derrubou todos os 24 clusters de inferência em 18 minutos.

Curiosamente, o sistema de backup automático falhou porque compartilhava o mesmo banco de configurações — uma violação do princípio de failure domain separation que qualquer engenheiro de SRE júnior saberia evitar.

## O Impacto

- **Receita perdida:** Estimada em US$ 48-52 milhões
- **Usuários afetados:** 3.2 milhões de requisições perdidas ou com erro
- **Clientes enterprise:** 47 contratos com SLA violado, gerando multas estimadas em US$ 120M
- **Impacto em terceiros:** Empresas como Jasper, Notion AI e Replit que dependem do Claude tiveram seus produtos degradados também

Ações da Anthropic no mercado secundário caíram 3.8% no dia, mas se recuperaram 24 horas depois — o mercado parece ter uma memória curta para incidentes de infraestrutura.

## O Que Isso Significa

Este outage é um aviso para todo o ecossistema de IA. À medida que empresas constroem produtos inteiros dependendo de APIs de LLM, a resiliência desses provedores se torna resiliência do seu negócio. A Anthropic tem US$ 65B frescos para resolver o problema — mas a maioria das empresas não tem plano B quando o provedor de IA cai. O incidente acelera duas tendências: a adoção de estratégias multi-provider e o investimento em modelos menores que rodam localmente para fallback. Dependência de fornecedor único em IA não é mais aceitável.
