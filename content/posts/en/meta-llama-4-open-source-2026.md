---
title: "Meta Llama 4: The Open-Source Model Changing the Rules of the Game"
brief: "Meta launches Llama 4 with 405B active parameters (1.2T total in MoE architecture), surpassing GPT-4 in reasoning and code benchmarks. The most powerful open-source model ever created sets a new standard for AI openness and pressures the commercial strategies of OpenAI and Anthropic."
date: 2026-02-18
tags:
  - Meta
  - Architecture
  - Open Source
coverImage: /images/meta-cover.jpg
---

On February 18, 2026, Meta launched Llama 4, the most powerful open-source language model ever created. With 405 billion active parameters (1.2 trillion total, thanks to a Mixture of Experts architecture with 16 experts), Llama 4 surpassed GPT-4 in mathematical reasoning (94.1% on MATH), code (89.3% on HumanEval), and contextual understanding (96.2% on MMLU-Pro) benchmarks.

What makes Llama 4 particularly disruptive is that it is not just one model — it is a family. Meta released three variants:

- **Llama 4 405B (active)**: the flagship model, comparable to GPT-4 and Claude 3.5
- **Llama 4 70B**: efficient dense version, surpasses GPT-4-turbo with 1/6 the parameters
- **Llama 4 8B**: edge model, runs on mobile devices with GPT-3.5 performance

All are available under the Llama 4 Community License, which permits commercial use, fine-tuning, and royalty-free redistribution.

## Second-Generation MoE Architecture

Llama 4's major innovation lies in expert routing. Unlike previous MoE models (such as Mixtral 8x7B), Llama 4 uses a two-level hierarchical router: first it selects 2 of 4 "super-experts" (groups of 4 experts each), then activates 2 experts within the selected group. This design reduces routing cost by 40% and improves activation quality by 15% on benchmarks.

In practice, this means Llama 4 405B activates only 25% of parameters per token, resulting in inference speed comparable to a dense 100B parameter model, but with the knowledge capacity of a 1.2T model.

## The Open-Source Effect on the Market

Llama 4's impact was immediate. Hugging Face reported over 500,000 downloads in the first 24 hours. Entire startups are pivoting their strategies — why pay US$0.02/token on OpenAI's API when you can run Llama 4 locally for US$0.002/token on your own hardware?

OpenAI and Anthropic responded with competitive pressure. OpenAI cut its API prices by 30% the day after the launch. Anthropic announced that Claude Code now supports open-source model deployment as a complement to Claude 4. Meta, which invested US$20B in AI infrastructure in 2025, is playing the volume game: free Llama 4 cannibalizes competitor revenue and makes the Meta ecosystem the de facto standard for developers.

## What This Means

Llama 4 is definitive proof that open-source models are not "inferior" — in many cases, they are superior. For the Brazilian market, this is particularly relevant: local companies can now download a frontier model, fine-tune it with proprietary data, and run it on their own infrastructure, without relying on foreign APIs or data sovereignty concerns. The cost of entering the AI game has never been lower.
