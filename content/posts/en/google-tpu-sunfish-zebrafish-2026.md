---
title: "Google Cloud Next: TPU Sunfish and Zebrafish — The Next Generation of AI Accelerators"
brief: "Google announces TPU Sunfish (training) and Zebrafish (inference) at Cloud Next. Performance comparison, energy efficiency, and how they position against NVIDIA Blackwell and AMD."
date: 2026-04-15
tags:
  - Google
  - Hardware
  - Architecture
coverImage: /images/articles/placeholder-ai.svg
---

At Google Cloud Next 2026, held on April 15 in Las Vegas, Google revealed its next generation of TPUs: Sunfish for training and Zebrafish for inference. For the first time, Google clearly separates training and inference architectures, a move that signals maturity in the custom AI silicon market and a direct challenge to NVIDIA's dominance.

## Sunfish: The Training Powerhouse

The TPU Sunfish is built on TSMC's 3nm process and delivers 3.2 petaflops in FP8 per chip — 2.4x the performance of the TPU v6e (Trillium). Each Sunfish pod connects 16,384 chips via a new optical interconnect called Pulsar, offering 4.8 Tbps per chip with 2-microsecond latency between any two points in the cluster.

The differentiator lies in the seventh-generation MXU (Matrix Multiply Unit), which supports FP4/FP8/FP16 mixed precision with automatic scaling. In internal benchmarks, Google demonstrated training a 500B parameter model 3.1x faster than on equivalent NVIDIA Blackwell B200 clusters, with 40% less energy consumption.

## Zebrafish: Inference Efficiency

The TPU Zebrafish is a chip dedicated exclusively to inference — something NVIDIA still doesn't do, as its GPUs are hybrid. With only 50W TDP (compared to 700W+ for an inference GPU), Zebrafish is optimized for serving models with ultra-low latency. It delivers 512 TOPS in INT8 with native support for sparse activation, attention mechanisms that discard 60% of irrelevant tokens without quality loss.

Google states that serving Gemini 3.1 Flash with 128K context tokens on a Zebrafish costs US$0.08 per million tokens — 5x cheaper than the same workload on an NVIDIA L40S. For high-scale workloads, this represents millions of dollars in annual savings.

## Market Positioning

With Sunfish and Zebrafish, Google attacks NVIDIA on two fronts: maximum training performance (Sunfish) and minimum inference cost (Zebrafish). The strategy is clear: offer the most efficient path for those already in the Google Cloud ecosystem, especially via GKE and Vertex AI. NVIDIA still leads in flexibility and software ecosystem, but the cost gap is becoming too large to ignore.

## What This Means

The separation between training and inference chips is a trend here to stay. Zebrafish, in particular, represents a real threat to NVIDIA's dominance in inference — the fastest-growing segment of the AI market. For companies operating production models with high call volumes, migrating to TPU Zebrafish can reduce inference costs by 70-80%. The lock-in to Google Cloud, however, is the trade-off. NVIDIA needs to respond with its own dedicated inference architecture, or risk losing the most profitable segment of the market in the coming years.
