# Website Models

Coleção de templates de websites para estabelecimentos: modernos, animados e rápidos.
Feitos com [Astro](https://astro.build), que gera HTML estático e quase nenhum JavaScript.

## Estrutura

```
.
├── gallery/                 # Página inicial das demos (lista os templates sozinha)
├── templates/
│   └── academia-01/         # Cada template é um projeto Astro independente
│       ├── template.json    # Nome/categoria/descrição exibidos na galeria
│       ├── src/data/site.ts # Todo o conteúdo editável
│       └── src/styles/tokens.css  # Cores, fontes, espaçamentos
├── docs/                    # Planos e decisões de cada template
├── scripts/build-all.mjs    # Gera ./dist com galeria + todos os templates
└── .github/workflows/       # Deploy automático no GitHub Pages
```

Cada template é **autossuficiente** (não depende de código compartilhado), para que possa ser
entregue/vendido como uma pasta só.

## Comandos

```bash
npm install                 # instala tudo (npm workspaces)
npm run dev                 # galeria em http://localhost:4321
npm run dev:academia-01     # um template específico
npm run build               # gera ./dist (galeria + todos os templates)
npm run preview             # serve ./dist localmente
```

## Novo template

1. Copie uma pasta de `templates/` (ex.: `academia-01` → `barbearia-01`).
2. Mude o `name` no `package.json` e os dados em `template.json`.
3. Adicione um script `dev:<nome>` no `package.json` da raiz (opcional).
4. `npm install`. A galeria e o deploy já incluem o novo template.

Pastas iniciadas com `_` são ignoradas pela galeria e pelo build.

## Publicar no GitHub Pages

1. Crie um repositório no GitHub e envie este projeto para a branch `main`.
2. No repositório: **Settings → Pages → Source: GitHub Actions**.
3. A cada push em `main`, as demos ficam em `https://<usuario>.github.io/<repositorio>/`.

Este repositório publica **só o template `academia-01` na raiz** (variável `ROOT_TEMPLATE`
em `.github/workflows/deploy.yml`). Remova essa variável para publicar a galeria com todos os templates.
