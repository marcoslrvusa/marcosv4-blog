---
title: "Cómo hospedar n8n en VPS de Hostinger con 20% de descuento — Guía completa 2026"
brief: "Instala n8n, Ollama, Open WebUI y OpenClaw en un VPS Hostinger AMD EPYC con NVMe por solo $9.99/mes. Guía paso a paso, optimizada para SEO."
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
  "name": "Cómo hospedar n8n en VPS de Hostinger",
  "description": "Guía paso a paso para instalar n8n, Ollama, Open WebUI y OpenClaw en un VPS Hostinger con 20% de descuento usando el código MARCOSLUCIANO20.",
  "image": "https://www.hostinger.com/cdn-cgi/imagedelivery/LqiWLm-3MGbYHtFuUbcBtA/27c0d1e4-bf79-4991-2094-6e75860add00/public",
  "estimatedCost": "$9.99/mes",
  "totalTime": "PT30M",
  "supply": [
    {"@type": "HowToSupply", "name": "Código de cupón MARCOSLUCIANO20"},
    {"@type": "HowToSupply", "name": "Cuenta Hostinger"}
  ],
  "tool": [
    {"@type": "HowToTool", "name": "Docker"},
    {"@type": "HowToTool", "name": "Git"},
    {"@type": "HowToTool", "name": "Terminal"}
  ],
  "step": [
    {"@type": "HowToStep", "text": "Crea una cuenta en Hostinger y aplica el cupón MARCOSLUCIANO20 para obtener 20% de descuento.", "url": "https://www.hostinger.com/br/hospedagem-n8n?REFERRALCODE=MARCOSLUCIANO20"},
    {"@type": "HowToStep", "text": "Selecciona el plan VPS AMD EPYC 4GB/80GB SSD por $9.99/mes (después del descuento)."},
    {"@type": "HowToStep", "text": "Accede por SSH a la VPS: `ssh root@TU_IP_VPS`.", "image": "https://guiadohost.com/wp-content/uploads/2025/09/n8nhostinger.png?w=1024"},
    {"@type": "HowToStep", "text": "Instala Docker: `curl -fsSL https://get.docker.com -o get-docker.sh && sh get-docker.sh`"},
    {"@type": "HowToStep", "text": "Clona el repositorio n8n y construye la imagen Docker."},
    {"@type": "HowToStep", "text": "Ejecuta el contenedor n8n en el puerto 5678."},
    {"@type": "HowToStep", "text": "Instala Ollama para LLM locales: `curl -fsSL https://ollama.com/install.sh | sh` y `ollama pull llama2`."},
    {"@type": "HowToStep", "text": "Despliega Open WebUI: `docker run -d -p 3000:8080 -e OLLAMA_HOST=localhost:11434 ghcr.io/open-webui/open-webui`"},
    {"@type": "HowToStep", "text": "Despliega OpenClaw para bots multicanal: `git clone https://github.com/OpenClaw/openclaw.git && cd openclaw && docker compose up -d`"},
    {"@type": "HowToStep", "text": "Prueba todo: `http://TU_IP_VPS:5678` (n8n), `http://TU_IP_VPS:3000` (WebUI), `http://TU_IP_VPS:5000` (OpenClaw)."}
  ]
}
</script>

## ¿Por qué elegir Hostinger para cargas de IA?

- **CPU AMD EPYC + SSD NVMe** – rendimiento estable para inferencia de LLM locales.
- **Precio imbatible** – $9.99/mes con 20 % de descuento usando el cupón **MARCOSLUCIANO20**.
- **Soporte 24/7** y red global para baja latencia.
- **Escalado fácil** – aumenta RAM/CPU con pocos clics.

> **⚡️ Consejo de autoridad:** Antes de instalar, verifica que los puertos 5678 (n8n), 3000 (WebUI) y 5000 (OpenClaw) estén abiertos en el firewall de la VPS.

## Pasos detallados

### 1️⃣ Crea tu cuenta Hostinger y aplica el cupón

<HostingerBanner variant="hero" locale="es" />

### 2️⃣ Selecciona el plan VPS adecuado

- **4 GB RAM / 80 GB SSD** – suficiente para n8n + Ollama + modelos pequeños.
- **Precio:** $9.99/mes (después del descuento).

### 3️⃣ Conéctate por SSH a la VPS

```bash
ssh root@TU_IP_VPS
```

> **Tip AEO:** Usa una conexión de salida de 100 Mbps para descargar rápidamente imágenes Docker.

### 4️⃣ Instala Docker (necesario para todos los componentes)

```bash
curl -fsSL https://get.docker.com -o get-docker.sh && sh get-docker.sh
```

### 5️⃣ Despliega n8n

```bash
git clone https://github.com/n8n-io/n8n.git && cd n8n
docker build -t n8n .
docker run -d -p 5678:5678 --name n8n n8n
```

### 6️⃣ Instala Ollama (LLM local)

```bash
curl -fsSL https://ollama.com/install.sh | sh
ollama pull llama2
```

### 7️⃣ Instala Open WebUI (interfaz estilo ChatGPT)

```bash
docker run -d -p 3000:8080 \
  -e OLLAMA_HOST=localhost:11434 \
  --name openwebui ghcr.io/open-webui/open-webui
```

### 8️⃣ Instala OpenClaw (bot multicanal)

```bash
git clone https://github.com/OpenClaw/openclaw.git && cd openclaw
docker compose up -d
```

### 9️⃣ Prueba y valida

- **n8n:** `http://TU_IP_VPS:5678`
- **Open WebUI:** `http://TU_IP_VPS:3000`
- **OpenClaw:** `http://TU_IP_VPS:5000`

### 🔥 Optimización de WebCore Vitals

- **Lazy‑load** imágenes con `loading="lazy"`.
- **Compresión** Brotli/Gzip activada en Nginx.
- **Cache‑Control** para assets estáticos (`max‑age=31536000`).
- **Servir estático** mediante CDN de Cloudflare para mejorar LCP.

### 📈 SEO avanzado (AEO, GEO, Schema)

- **Título SEO:** `Cómo hospedar n8n en VPS Hostinger – Guía 2026 + Cupón 20%`
- **Meta‑description:** `Instala n8n, Ollama, Open WebUI y OpenClaw en un VPS Hostinger AMD EPYC por $9.99/mes. Guía paso a paso con cupón MARCOSLUCIANO20.`
- **Keywords:** `n8n hostinger, VPS barato IA, cupón hostinger 20%, ollama hostinger, open webui docker`.
- **Geo‑targeting:** etiquetas hreflang ya configuradas, usa Search Console para región `ES`.
- **Schema:** HowTo incluido arriba; también Article schema global.

### 💰 Ganancia de afiliado

> **Descargo de responsabilidad:** Este post contiene enlaces de afiliado. Al usar el cupón, obtengo una comisión sin costo adicional para ti.

```html
<!-- ADSENSE POST (300x250) – inserta tu código aquí -->
<div class="adsense-placeholder border-2 border-dashed border-v4-red/30 rounded-xl p-6 text-center bg-v4-red/[0.02]">
  <p class="font-mono text-[9px] text-v4-red/50">300x250 / In‑Article — Inserta el código de AdSense aquí</p>
</div>
```

### 🎯 Hoja de ruta de contenido futuro

- **Artículos complementarios:** `Optimizar Ollama para inferencia de 8 GB`, `Integrar n8n con WhatsApp vía OpenClaw`, `Benchmark VPS Hostinger vs DigitalOcean para IA`.
- **Tutorial en video** (embed de YouTube) – aumentará el tiempo de permanencia.
- **Checklist PDF** para descarga (CTA de newsletter).

---

## Conclusión

Hostinger te brinda rendimiento AMD EPYC, almacenamiento NVMe y un precio que cabe en cualquier presupuesto. Usa el cupón **MARCOSLUCIANO20** para obtener **20 % de descuento** y sigue esta guía para ejecutar n8n, Ollama, Open WebUI y OpenClaw en menos de 30 minutos.

**🚀 Comienza ahora:**

<HostingerBanner variant="inline" locale="es" />

---

**Etiquetas:** #n8n #hostinger #vps #ai #lowcost #ollama #openwebui #openclaw
