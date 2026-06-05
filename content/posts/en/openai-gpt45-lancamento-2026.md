---
title: "OpenAI Launches GPT-4.5: The Last Purely Autoregressive Model Before GPT-5"
brief: "OpenAI presents GPT-4.5 in March 2026 with significant improvements in mathematical reasoning (+18%), 256K token context, and 40% reduction in hallucinations. Positioned as the 'bridge' to GPT-5, expected in the second half of the year, the model features the Orion architecture with efficiency innovations."
date: 2026-03-05
tags:
  - OpenAI
  - Architecture
coverImage: /images/articles/placeholder-ai.svg
---

On March 5, 2026, OpenAI launched GPT-4.5, which the company itself calls "the last purely autoregressive model before GPT-5." Codenamed Orion internally, the new model brings incremental yet significant advances — and reveals much about OpenAI's strategy for 2026: consolidate before revolutionizing.

The numbers speak for themselves. GPT-4.5 achieved 91.3% on MATH (up from 86.8% on GPT-4), 97.1% on MMLU-Pro, and 92.4% on HumanEval. On multi-hop reasoning (MuSiQue benchmark), the model jumped from 72% to 84%. The maximum context was expanded from 128K to 256K tokens — enough to process complete books or large codebases.

## What Changed in the Architecture

GPT-4.5 is based on the Orion architecture, which OpenAI had been developing since 2024. The main innovations are:

1. **Hybrid attention**: combines dense attention in early layers with sparse attention (via sliding window + global tokens) in upper layers. This reduced inference cost for long sequences by 35% compared to GPT-4
2. **Scalable pre-training**: the model was trained on 18 trillion tokens (vs 12T for GPT-4), with 4x more rigorous quality filtering — OpenAI states it discarded 40% of candidate tokens due to low quality
3. **Refined alignment**: the reward model system was replaced by direct preference optimization (DPO) at scale, with 2 million preference pairs annotated by human experts

The hallucination reduction — 40% fewer than GPT-4, according to OpenAI — came from a post-training trick: the model was exposed to deliberately ambiguous or unanswerable questions and trained to respond "I don't have enough information to answer" rather than fabricating.

## Strategic Positioning

GPT-4.5 is clearly a transition model. OpenAI is holding GPT-5 for the second half of 2026 while working on a post-autoregressive architecture that promises truly planned reasoning, not just next-token prediction.

GPT-4.5's pricing reflects the strategy: US$0.015/input token and US$0.06/output token — 25% cheaper than GPT-4, aligned with the price war triggered by Llama 4 and DeepSeek R1. OpenAI is sacrificing margin to maintain market share while preparing the leap to GPT-5.

## What This Means

GPT-4.5 shows OpenAI playing the consolidation game while preparing the next leap. The model isn't revolutionary, but it is significantly better than GPT-4 and dramatically more efficient. For companies building on OpenAI's API, GPT-4.5 offers superior quality at lower cost — but the real expectation lies in GPT-5. If GPT-5 delivers what OpenAI promises (planned, non-predictive reasoning), it could redefine the industry's benchmark. Until then, GPT-4.5 is the best available model from OpenAI — but not the most interesting one in the market.
