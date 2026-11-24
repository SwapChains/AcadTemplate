# Forja — Template para Academias

One-page moderno e animado para academias, com foco em conversão via WhatsApp.

## Rodar

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # gera ./dist, pronto para qualquer hospedagem estática
```

## Personalizar

| O quê | Onde |
|---|---|
| Nome, contatos, WhatsApp, horários, textos | `src/data/site.ts` |
| Cores, fontes, espaçamentos, velocidade das animações | `src/styles/tokens.css` |
| Fotos | `src/assets/` (otimizadas automaticamente no build) |
| Favicon e imagem de compartilhamento | `public/` |
| Domínio (SEO/canonical) | `site` em `astro.config.mjs` |
