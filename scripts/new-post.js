#!/usr/bin/env node
const fs = require("fs");
const path = require("path");

const args = process.argv.slice(2);
const title = args.join(" ") || "Novo Artigo";
const slug = title
  .toLowerCase()
  .normalize("NFD").replace(/[\u0300-\u036f]/g, "")
  .replace(/[^a-z0-9]+/g, "-")
  .replace(/^-|-$/g, "");
const date = new Date().toISOString().split("T")[0];

const template = `---
title: "${title}"
brief: "Breve descrição do artigo em 1-2 frases."
date: ${date}
tags:
  - IA
  - Mercado
coverImage:
---

## Introdução

Contexto e motivação do artigo.

## O Que Está Acontecendo

Análise do cenário atual.

## Por Que Isso Importa

Implicações práticas e estratégicas.

## O Que Vem a Seguir

Próximos passos e tendências.

---

*Marcos Luciano é Senior Media Buyer, AI & SEO Specialist na V4 Company. Escreve diariamente sobre inteligência artificial, arquitetura de sistemas AI e o mercado de tecnologia. [Siga no LinkedIn](https://linkedin.com/in/marcoslrvieira).*
`;

const postsDir = path.join(process.cwd(), "content/posts");
const filePath = path.join(postsDir, `${slug}.md`);

if (fs.existsSync(filePath)) {
  console.error(`Erro: Já existe um artigo com o slug "${slug}"`);
  process.exit(1);
}

fs.writeFileSync(filePath, template, "utf-8");
console.log(`\n  ✅ Artigo criado: content/posts/${slug}.md\n`);
console.log(`  Titulo: ${title}`);
console.log(`  Data:   ${date}\n`);
