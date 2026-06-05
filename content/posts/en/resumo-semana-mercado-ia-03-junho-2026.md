---
title: "AI Market: Weekly Roundup — NVIDIA+Microsoft, GPT-5.5 on Agents, and Chinese Advances (Jun 03, 2026)"
brief: "Weekly roundup of the main movements in the artificial intelligence market: NVIDIA announces partnership with Microsoft for Windows agents, OpenAI releases GPT-5.5 to all plans, China advances with competitive open model, and new research in physical agents."
date: 2026-06-03
tags:
  - Market
  - AI
coverImage: /images/resumo-semana-cover.svg
---

![AI Market — Weekly Roundup](/images/resumo-semana-cover.svg)

## Hot Week: The AI Market Doesn't Stop

This was a dense week for announcements. While the market digests the implications of Microsoft Build, NVIDIA announces a strategic partnership with Microsoft, OpenAI releases general access to GPT-5.5, and China shows it's not falling behind on open models.

Let's get straight to what matters.

---

## 1. NVIDIA + Microsoft: AI Agents on Windows

NVIDIA and Microsoft announced a **unified platform for AI agent deployment** covering everything from Windows desktop to the cloud.

### What was announced

- **NVIDIA NIM for Windows**: Optimized models running locally on NVIDIA GPUs
- **Azure Local AI**: Agent deployment on edge computing with Windows
- **DGX Cloud + Azure AI**: Integrated training and fine-tuning

### Why this matters

For the first time, a company can **train an agent in the cloud (Azure/DGX) and run it locally on an employee's Windows machine** — with the same weights, same accuracy, same latency.

For Brazilian companies that still hesitate to adopt AI due to data privacy concerns (LGPD), this is a turning point: agents running **locally** resolve most regulatory objections.

---

## 2. OpenAI Releases GPT-5.5 to All Plans

GPT-5.5, previously available only to Pro and Team subscribers, has been released to **all ChatGPT plans**, including the free plan (with limits).

### What changes

| Plan | Before | Now |
|------|--------|-----|
| Free | GPT-5 mini | GPT-5.5 (with usage limits) |
| Plus | GPT-5 | GPT-5.5 (higher limit) |
| Pro | GPT-5.5 | GPT-5.5 with no restrictions |
| Team/Enterprise | GPT-5 | GPT-5.5 + Codex included |

### Practical impact

- Free users now have access to **far superior reasoning** at zero cost
- The difference between paid and free plans is now **volume**, not quality
- Codex included in the Enterprise plan accelerates agent adoption in companies

OpenAI's message is clear: **model quality is no longer a price differentiator** — the differentiator is infrastructure, agents, and integration capability.

---

## 3. China: Open Model Qwen 3.5 Surpasses GPT-5 in Benchmarks

Alibaba released **Qwen 3.5-72B**, an open model that surpasses GPT-5 in mathematical reasoning (MATH) and code (HumanEval) benchmarks, and ties in general knowledge (MMLU).

### Model specs

- **Parameters**: 72B (active) + 256B (total MoE)
- **License**: Apache 2.0 (commercial use allowed)
- **Training**: 22 trillion tokens, 70% multilingual (including Portuguese)
- **Context**: 256K tokens

### Why this matters for Brazil

Qwen 3.5 has performance **comparable to GPT-5** but:
- It's free and open
- Runs on local hardware (2x RTX 6000 Ada is sufficient)
- Can be fine-tuned with Portuguese data

For Brazilian companies seeking **independence from US APIs**, Qwen 3.5 is the most viable alternative today.

---

## 4. Research: Physical Agents with Reinforcement Learning

Two relevant papers came out this week:

### NVIDIA Research at CVPR

NVIDIA presented at CVPR 2026 advanced **grasping techniques for robots** using reinforcement learning with parallel simulation in Isaac Sim.

The breakthrough: robots that learn to **pick up objects never seen before** with 94% success after simulation training — without any real-world data.

### DeepMind: Agents That Learn from Natural Language Instructions

DeepMind published a paper where agents in a simulated environment learn complex tasks **using only natural language instructions**, without reward engineering.

The model uses an **LLM as internal judge**: the agent proposes actions, the LLM evaluates whether the action is consistent with the instruction, and the agent adjusts its behavior based on the feedback.

---

## 5. What to Watch Next Week

1. **WWDC 2026 (Apple)**: Rumors that Apple will announce its own agent platform integrated with iOS and macOS — on-device assistants with privacy as a differentiator
2. **Databricks + MosaicML**: New open model focused on data analysis and SQL
3. **EU AI Act Regulation**: First fines begin to apply for non-compliant companies

---

## Weekly Analysis

Three trends are consolidating:

1. **Open models catch up to closed models** — Qwen 3.5 proves that open-source is no longer synonymous with inferior quality. This changes pricing dynamics and access.

2. **Agents are priority number 1** — All big techs are allocating disproportionate resources to agents vs. pure models. The market has already understood that value lies in orchestration.

3. **Brazil needs to move** — With competitive open models, locally running agents (LGPD-friendly), and accessible platforms (Azure AI Agent Service), there's no more excuse not to start.

The question I leave you with: **what is your company building with AI this week?**

---

*Marcos Luciano is Senior Media Buyer, AI & SEO Specialist at V4 Company. He writes daily about artificial intelligence, AI system architecture, and the technology market. [Follow on LinkedIn](https://linkedin.com/in/marcoslrvieira) for daily updates.*
