---
title: "Como hospedar n8n na VPS da Hostinger com 20% de desconto — Guia definitivo 2026"
brief: "Instale n8n, Ollama, Open WebUI e OpenClaw em uma VPS Hostinger AMD EPYC com NVMe por apenas R$ 29/mês. Guia completo, otimizado para SEO e AEO."
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
  "name": "Como hospedar n8n na VPS da Hostinger",
  "description": "Passo a passo para instalar n8n, Ollama, Open WebUI e OpenClaw em uma VPS Hostinger com 20% de desconto usando o código MARCOSLUCIANO20.",
  "image": "https://www.hostinger.com/cdn-cgi/imagedelivery/LqiWLm-3MGbYHtFuUbcBtA/27c0d1e4-bf79-4991-2094-6e75860add00/public",
  "estimatedCost": "R$ 29/mês",
  "totalTime": "PT30M",
  "supply": [
    {"@type": "HowToSupply", "name": "Código de cupom MARCOSLUCIANO20"},
    {"@type": "HowToSupply", "name": "Conta Hostinger"}
  ],
  "tool": [
    {"@type": "HowToTool", "name": "Docker"},
    {"@type": "HowToTool", "name": "Git"},
    {"@type": "HowToTool", "name": "Terminal"}
  ],
  "step": [
    {"@type": "HowToStep", "text": "Crie sua conta Hostinger e ative o cupom MARCOSLUCIANO20 para 20% OFF.", "url": "https://www.hostinger.com/br/hospedagem-n8n?REFERRALCODE=MARCOSLUCIANO20"},
    {"@type": "HowToStep", "text": "Selecione o plano VPS AMD EPYC 4GB/80GB SSD por R$ 29/mês (após desconto)."},
    {"@type": "HowToStep", "text": "Acesse o terminal da VPS via SSH.", "image": "https://guiadohost.com/wp-content/uploads/2025/09/n8nhostinger.png?w=1024"},
    {"@type": "HowToStep", "text": "Instale Docker: `curl -fsSL https://get.docker.com -o get-docker.sh && sh get-docker.sh`"},
    {"@type": "HowToStep", "text": "Clone o repositório n8n: `git clone https://github.com/n8n-io/n8n.git && cd n8n`"},
    {"@type": "HowToStep", "text": "Construa a imagem Docker: `docker build -t n8n .`"},
    {"@type": "HowToStep", "text": "Inicie o container com variáveis de ambiente adequadas (porta 5678, webhook, etc.)."},
    {"@type": "HowToStep", "text": "Instale Ollama para rodar LLMs localmente: `curl -fsSL https://ollama.com/install.sh | sh`"},
    {"@type": "HowToStep", "text": "Instale Open WebUI: `docker run -d -p 3000:8080 --name openwebui -e OLLAMA_HOST=localhost:11434 ghcr.io/open-webui/open-webui`"},
    {"@type": "HowToStep", "text": "Instale OpenClaw para integração de múltiplos canais: `git clone https://github.com/OpenClaw/openclaw.git && cd openclaw && docker compose up -d`"},
    {"@type": "HowToStep", "text": "Teste tudo: acesse `http://YOUR_VPS_IP:5678` para n8n, `http://YOUR_VPS_IP:3000` para Open WebUI, `http://YOUR_VPS_IP:5000` para OpenClaw."}
  ]
}
</script>

## Por que escolher a Hostinger para IA?

- **CPU AMD EPYC NVMe** – desempenho consistente para modelos LLMs locais.
- **Preço imbatível** – a partir de **R$ 29/mês** com 20 % de desconto usando o cupom **MARCOSLUCIANO20**.
- **Suporte 24h** e **rede global** que garante baixa latência.
- **Facilidade de escalonamento** – aumente RAM/CPU em poucos cliques.

> **⚡️ Dica de autoridade:** Antes de instalar, verifique a disponibilidade de portas 5678 (n8n), 3000 (Open WebUI) e 5000 (OpenClaw) no firewall da VPS.

## Passo a passo (detalhado)

### 1️⃣ Crie sua conta Hostinger e ative o cupom

Clique no botão abaixo para ser redirecionado ao site da Hostinger com seu código já aplicado:

<HostingerBanner variant="hero" locale="pt" />

### 2️⃣ Selecione o plano VPS ideal

- **4 GB RAM / 80 GB SSD** – suficiente para n8n + Ollama + pequenos modelos.
- **Preço:** R$ 29/mês (após desconto).

### 3️⃣ Conecte ao terminal via SSH

```bash
ssh root@YOUR_VPS_IP
```

> **⚙️ AEO tip:** Use uma conexão com saída de 100 Mbps para garantir baixa latência ao baixar imagens Docker.

### 4️⃣ Instale Docker (necessário para todos os componentes)

```bash
curl -fsSL https://get.docker.com -o get-docker.sh && sh get-docker.sh
```

### 5️⃣ Implante n8n

```bash
git clone https://github.com/n8n-io/n8n.git && cd n8n
docker build -t n8n .
docker run -d -p 5678:5678 --name n8n n8n
```

### 6️⃣ Instale Ollama (LLM local)

```bash
curl -fsSL https://ollama.com/install.sh | sh
ollama pull llama2
```

### 7️⃣ Instale Open WebUI (interface ChatGPT‑like)

```bash
docker run -d -p 3000:8080 \
  -e OLLAMA_HOST=localhost:11434 \
  --name openwebui ghcr.io/open-webui/open-webui
```

### 8️⃣ Instale OpenClaw (multicanal)

```bash
git clone https://github.com/OpenClaw/openclaw.git && cd openclaw
docker compose up -d
```

### 9️⃣ Teste & valide

- **n8n:** `http://YOUR_VPS_IP:5678`
- **Open WebUI:** `http://YOUR_VPS_IP:3000`
- **OpenClaw:** `http://YOUR_VPS_IP:5000`

### 🔥 Otimização de performance (WebCore Vitals)

- **Lazy‑load** imagens com `loading="lazy"`.
- **Compressão** Brotli/Gzip ativada no Nginx da VPS.
- **Cache‑Control** para assets estáticos (`max‑age=31536000`).
- **Serve‑static** via CDN (Cloudflare) para melhorar LCP.

### 📈 SEO avançado (AEO, GEO, Schema)

- **Título SEO**: `Como hospedar n8n na VPS da Hostinger – Guia 2026 + Cupom 20%`
- **Meta‑description**: `Instale n8n, Ollama, Open WebUI e OpenClaw em uma VPS Hostinger AMD EPYC por R$ 29/mês. Guia passo‑a‑passo com código de desconto MARCOSLUCIANO20.`
- **Keywords**: `n8n hostinger, VPS barato IA, cupom hostinger 20%, ollama hostinger, open webui docker`.
- **Geo‑targeting**: inclua `hreflang` nas tags de idioma (já configurado no site). Use **Google Search Console** para definir região `BR`.
- **Schema**: já incluído como **HowTo** acima; também adicionamos **Article** schema via `layout.tsx`.

### 💰 Ganhe dinheiro com a afiliação

> **Disclaimer:** Este post contém links de afiliado. Ao comprar usando o cupom, ganho comissão sem custo extra para você.

```html
<!-- ADSENSE POST (300x250) – cole seu código aqui -->
<div class="adsense-placeholder border-2 border-dashed border-v4-red/30 rounded-xl p-6 text-center bg-v4-red/[0.02]">
  <p class="font-mono text-[9px] text-v4-red/50">300x250 / In‑Article — Cole o código do AdSense aqui</p>
</div>
```

### 🎯 Estratégia de conteúdo futuro

- **Artigos complementares**: `Como otimizar Ollama para inferência de 8 GB`, `Integração de n8n com WhatsApp via OpenClaw`, `Benchmark de VPS Hostinger vs DigitalOcean para IA`.
- **Vídeo tutorial** (embed do YouTube) – aumentará tempo de permanência.
- **Checklist PDF** para download (CTA de newsletter).

---

## Conclusão

Com a **Hostinger** você tem performance de CPU AMD EPYC, SSD NVMe e um preço que cabe no bolso. Use o cupom **MARCOSLUCIANO20** para garantir **20 % de desconto** e siga este guia para rodar n8n, Ollama, Open WebUI e OpenClaw em menos de 30 minutos.

**🚀 Comece agora:**

<HostingerBanner variant="inline" locale="pt" />

---

**Tags:** #n8n #hostinger #vps #ai #lowcost #ollama #openwebui #openclaw
