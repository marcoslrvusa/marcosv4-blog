# Workflow de Conteúdo

## Criar um novo artigo

```bash
npm run new-post "Título do Artigo"
```

Isso cria `content/posts/titulo-do-artigo.md` com frontmatter preenchido.

## Templates disponíveis

- `scripts/templates/case-ai.md` — Case de empresa (Nvidia, Google, OpenAI, etc)
- `scripts/templates/conjuntura.md` — Resumo semanal do mercado
- `scripts/templates/guia-arquitetura.md` — Guia prático de implementação

## Usar um template

Copie o template desejado para `content/posts/` e edite.

## Publicar

```bash
git add content/posts/seu-artigo.md
git commit -m "Novo artigo: Título"
git push
```

O Vercel faz deploy automático.
