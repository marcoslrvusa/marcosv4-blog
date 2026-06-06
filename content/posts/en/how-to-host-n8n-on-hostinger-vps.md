---
title: "How to Host n8n on Hostinger VPS with 20% Discount — Complete 2026 Guide"
brief: "Install n8n, Ollama, Open WebUI and OpenClaw on a Hostinger AMD EPYC VPS with NVMe for only $9.99/mo. Full step‑by‑step guide, SEO‑optimized."
date: 2026-06-06
tags:
  - n8n
  - hostinger
  - vps
  - ai
  - lowcost
coverImage: "https://www.hostinger.com/cdn-cgi/imagedelivery/LqiWLm-3MGbYHtFuUbcBtA/27c0d1e4-bf79-4991-2094-6e75860add00/public"
---

<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "How to host n8n on Hostinger VPS",
  "description": "Step‑by‑step guide to install n8n, Ollama, Open WebUI and OpenClaw on a Hostinger VPS with 20% discount using code MARCOSLUCIANO20.",
  "image": "https://www.hostinger.com/cdn-cgi/imagedelivery/LqiWLm-3MGbYHtFuUbcBtA/27c0d1e4-bf79-4991-2094-6e75860add00/public",
  "estimatedCost": "$9.99/mo",
  "totalTime": "PT30M",
  "supply": [
    {"@type": "HowToSupply", "name": "Coupon code MARCOSLUCIANO20"},
    {"@type": "HowToSupply", "name": "Hostinger account"}
  ],
  "tool": [
    {"@type": "HowToTool", "name": "Docker"},
    {"@type": "HowToTool", "name": "Git"},
    {"@type": "HowToTool", "name": "Terminal"}
  ],
  "step": [
    {"@type": "HowToStep", "text": "Create a Hostinger account and apply coupon MARCOSLUCIANO20 for 20% OFF.", "url": "https://www.hostinger.com/br/hospedagem-n8n?REFERRALCODE=MARCOSLUCIANO20"},
    {"@type": "HowToStep", "text": "Select the AMD EPYC 4GB/80GB SSD plan – $9.99/mo after discount."},
    {"@type": "HowToStep", "text": "SSH into the VPS: `ssh root@YOUR_VPS_IP`.", "image": "https://guiadohost.com/wp-content/uploads/2025/09/n8nhostinger.png?w=1024"},
    {"@type": "HowToStep", "text": "Install Docker: `curl -fsSL https://get.docker.com -o get-docker.sh && sh get-docker.sh`"},
    {"@type": "HowToStep", "text": "Clone n8n repo and build Docker image."},
    {"@type": "HowToStep", "text": "Run n8n container on port 5678."},
    {"@type": "HowToStep", "text": "Install Ollama for local LLMs: `curl -fsSL https://ollama.com/install.sh | sh` and `ollama pull llama2`."},
    {"@type": "HowToStep", "text": "Deploy Open WebUI: `docker run -d -p 3000:8080 -e OLLAMA_HOST=localhost:11434 ghcr.io/open-webui/open-webui`"},
    {"@type": "HowToStep", "text": "Deploy OpenClaw for multi‑channel bots: `git clone https://github.com/OpenClaw/openclaw.git && cd openclaw && docker compose up -d`"},
    {"@type": "HowToStep", "text": "Test everything: `http://YOUR_VPS_IP:5678` (n8n), `http://YOUR_VPS_IP:3000` (WebUI), `http://YOUR_VPS_IP:5000` (OpenClaw)."}
  ]
}
</script>

## Why Choose Hostinger for AI Workloads?

- **AMD EPYC + NVMe SSD** – consistent performance for local LLM inference.
- **Unbeatable price** – $9.99/mo after 20 % off with coupon **MARCOSLUCIANO20**.
- **24/7 support** and a global network for low latency.
- **Easy scaling** – add RAM/CPU with a few clicks.

> **⚡️ Authority tip:** Before installing, ensure ports 5678 (n8n), 3000 (WebUI) and 5000 (OpenClaw) are open in the VPS firewall.

## Detailed Steps

### 1️⃣ Create Hostinger account & apply coupon

<HostingerBanner variant="hero" locale="en" />

### 2️⃣ Choose the right VPS plan

- **4 GB RAM / 80 GB SSD** – sufficient for n8n + Ollama + small models.
- **Price:** $9.99/mo (after discount).

### 3️⃣ SSH into the VPS

```bash
ssh root@YOUR_VPS_IP
```

> **AEO tip:** Use a 100 Mbps outbound connection to quickly pull Docker images.

### 4️⃣ Install Docker (required for all components)

```bash
curl -fsSL https://get.docker.com -o get-docker.sh && sh get-docker.sh
```

### 5️⃣ Deploy n8n

```bash
git clone https://github.com/n8n-io/n8n.git && cd n8n
docker build -t n8n .
docker run -d -p 5678:5678 --name n8n n8n
```

### 6️⃣ Install Ollama (local LLM)

```bash
curl -fsSL https://ollama.com/install.sh | sh
ollama pull llama2
```

### 7️⃣ Install Open WebUI (ChatGPT‑like UI)

```bash
docker run -d -p 3000:8080 \
  -e OLLAMA_HOST=localhost:11434 \
  --name openwebui ghcr.io/open-webui/open-webui
```

### 8️⃣ Install OpenClaw (multichannel bot)

```bash
git clone https://github.com/OpenClaw/openclaw.git && cd openclaw
docker compose up -d
```

### 9️⃣ Test & Validate

- **n8n:** `http://YOUR_VPS_IP:5678`
- **Open WebUI:** `http://YOUR_VPS_IP:3000`
- **OpenClaw:** `http://YOUR_VPS_IP:5000`

### 🔥 WebCore Vitals Optimisation

- **Lazy‑load** images with `loading="lazy"`.
- **Brotli/Gzip** compression enabled on Nginx.
- **Cache‑Control** headers for static assets (`max‑age=31536000`).
- **Serve static** via Cloudflare CDN for better LCP.

### 📈 Advanced SEO (AEO, GEO, Schema)

- **SEO title**: `How to Host n8n on Hostinger VPS – 2026 Guide + 20% Coupon`
- **Meta description**: `Install n8n, Ollama, Open WebUI and OpenClaw on a Hostinger AMD EPYC VPS for $9.99/mo. Step‑by‑step guide with coupon MARCOSLUCIANO20.`
- **Keywords**: `n8n hostinger, cheap AI VPS, hostinger coupon 20%, ollama hostinger, open webui docker`.
- **Geo‑targeting**: hreflang tags already set, use Search Console region `US`.
- **Schema**: HowTo schema above; Article schema added site‑wide.

### 💰 Affiliate earnings

> **Disclaimer:** This post contains affiliate links. Using the coupon gives me a commission at no extra cost to you.

```html
<!-- ADSENSE POST (300x250) – paste your code here -->
<div class="adsense-placeholder border-2 border-dashed border-v4-red/30 rounded-xl p-6 text-center bg-v4-red/[0.02]">
  <p class="font-mono text-[9px] text-v4-red/50">300x250 / In‑Article — Paste AdSense code here</p>
</div>
```

### 🎯 Future content roadmap

- **Complementary articles**: `Optimising Ollama for 8 GB inference`, `Integrating n8n with WhatsApp via OpenClaw`, `Hostinger vs DigitalOcean VPS benchmark for AI`.
- **Video tutorial** (embed YouTube) – boosts dwell time.
- **PDF checklist** download (newsletter CTA).

---

## Conclusion

Hostinger gives you AMD EPYC performance, NVMe storage, and a price that fits any budget. Use coupon **MARCOSLUCIANO20** for **20 % off** and follow this guide to run n8n, Ollama, Open WebUI and OpenClaw in under 30 minutes.

**🚀 Get started now:**

<HostingerBanner variant="inline" locale="en" />

---

**Tags:** #n8n #hostinger #vps #ai #lowcost #ollama #openwebui #openclaw
