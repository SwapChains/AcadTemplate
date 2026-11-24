# Plano — Template `academia-01` ("Forja Academia")

> Status: **Fases 1 e 2 implementadas com placeholders de foto.**
> Próximo passo: receber as fotos (ver `templates/academia-01/src/assets/raw/LEIA-ME.md`) e seguir para a Fase 3.

## 1. Objetivo

Um site **one-page** para academias de bairro e médio porte que:

- converte visitante em **aula experimental via WhatsApp** (o CTA principal do setor no Brasil);
- passa sensação de energia e qualidade (visual escuro, tipografia grande, movimento);
- carrega rápido no celular em 4G, porque é de lá que vem a maior parte do público;
- pode ser personalizado para um cliente **editando 1 arquivo de dados + 1 de cores + as fotos**.

## 2. Direção visual

| Item | Escolha | Por quê |
|---|---|---|
| Fundo | Quase preto `#0b0b0c` com superfícies `#141416` | Ar "premium/esportivo", fotos se destacam |
| Accent | Verde-limão "volt" `#c6ff3d` | Energético, alto contraste, foge do vermelho/laranja que todos usam |
| Títulos | **Archivo** (variável, eixo de largura em 75%) em CAIXA ALTA | Estreito e pesado, parece pôster esportivo; 1 arquivo de fonte só |
| Texto | **Inter** variável | Legível em telas pequenas |
| Fotos | P&B ou dessaturadas, com accent em detalhes | Unifica fotos de origens diferentes (importante para revenda) |
| Detalhes | Bordas finas, números gigantes vazados (outline), faixas diagonais em marquee | Linguagem gráfica de academia sem clichê |

Variações de cor para vender como "temas": volt (padrão), laranja `#ff5a1f`, vermelho `#ff2e3b`, azul elétrico `#3d7bff`. Só trocando `tokens.css`.

## 3. Estrutura da página (ordem das seções)

1. **Header fixo** — logo, âncoras, botão "Aula grátis". Fica translúcido com blur ao rolar; no mobile vira menu em tela cheia.
2. **Hero** — título enorme ("FORJA SEU LIMITE"), subtítulo, 2 CTAs (WhatsApp / Ver planos). Fundo: vídeo curto em loop (mudo, ≤ 1,5 MB, com poster AVIF) **ou** foto com zoom lento. Letras do título entram uma a uma.
3. **Marquee de modalidades** — faixa diagonal infinita: MUSCULAÇÃO • CROSS • MUAY THAI • PILATES • SPINNING…
4. **Números** — contadores animados (anos, alunos, m², professores) que contam ao aparecer na tela.
5. **Modalidades** — grid de cards com foto; no hover a foto ganha cor e sobe a descrição. Mobile: carrossel com scroll-snap (sem lib).
6. **Estrutura** — galeria em mosaico + *antes/depois* ou tour; lightbox nativa com `<dialog>`.
7. **Grade horária** — abas por dia da semana (Seg…Dom), lista de aulas com horário/professor. Destaca a aula "acontecendo agora".
8. **Planos** — 3 cards (Básico / Plus / Black), toggle Mensal ↔ Anual com preço animado; plano do meio destacado.
9. **Equipe** — professores com foto, especialidade e CREF; hover revela Instagram.
10. **Calculadora rápida (IMC / meta)** — pequeno widget interativo que termina num CTA "Fale com um professor". Diferencial de engajamento.
11. **Depoimentos** — cards com nota e foto; marquee lento ou carrossel.
12. **FAQ** — `<details>` nativo com animação de abertura (zero JS).
13. **CTA final + Localização** — "Primeira aula grátis", horários de funcionamento, endereço, mapa que **só carrega ao clicar** (imagem estática no lugar do iframe do Google Maps, que sozinho pesa ~500 KB).
14. **Footer** — redes sociais, contatos, "feito por [você]".
15. **Botão flutuante do WhatsApp** — aparece após rolar o hero.

## 4. Animações: o que e como (sem pesar)

Regra: **CSS primeiro, JS mínimo e sem bibliotecas.** Tudo respeita `prefers-reduced-motion`.

| Efeito | Técnica | Custo |
|---|---|---|
| Revelar ao rolar | `IntersectionObserver` + classes CSS (já pronto em `src/scripts/reveal.ts`) | ~0,3 KB |
| Parallax / progresso ligado à rolagem | CSS `animation-timeline: view()` (scroll-driven animations), sem efeito nos navegadores que não suportam | 0 KB JS |
| Marquee infinito | `@keyframes` + `translate`, conteúdo duplicado | 0 KB JS |
| Título letra a letra | Spans gerados no build pelo Astro + `animation-delay` | 0 KB JS |
| Contadores | `requestAnimationFrame`, disparado pelo observer | ~0,4 KB |
| Toggle de preços / abas | Pequenos scripts por componente (Astro empacota só o que a página usa) | ~0,5 KB cada |
| Hover dos cards | `transform`/`filter` em CSS (só propriedades que a GPU anima bem) | 0 KB |
| Cursor/brilho seguindo o mouse nos cards de plano | CSS custom properties atualizadas por `pointermove` (só desktop) | ~0,3 KB |

Se no futuro algum template pedir algo muito complexo (timeline cinematográfica), dá para usar **Motion** (`motion.dev`, ~5 KB) só naquela página. Não vale a pena para este.

## 5. Metas de desempenho (orçamento)

- **Lighthouse ≥ 95** em Performance, Acessibilidade, Boas práticas e SEO (mobile).
- **LCP < 2,0 s**, **CLS < 0,05**, **INP < 200 ms**.
- **JS total ≤ 15 KB** gzip. **CSS ≤ 25 KB**.
- **Página inicial ≤ 1 MB** no primeiro carregamento (sem contar o vídeo, que carrega depois do poster).
- Imagens via `astro:assets` (`<Image>`/`<Picture>`): AVIF + WebP, `srcset` responsivo, `loading="lazy"` abaixo da dobra e `fetchpriority="high"` só na imagem do hero.
- Fontes self-hosted (já configurado), `font-display: swap`, preload só da fonte do título.
- Nada de terceiros no carregamento: mapa, Instagram e vídeo só sob demanda.

## 6. Personalização (pensando na venda)

```
src/data/site.ts      ← nome, contatos, horários, modalidades, planos, equipe, FAQ, depoimentos
src/styles/tokens.css ← cores, fontes, espaçamentos, velocidade das animações
src/assets/           ← fotos (o build otimiza automaticamente)
public/               ← favicon, og-image
```

- Cada seção é um componente em `src/components/` e pode ser **ligada/desligada** por uma flag em `site.ts`.
- Textos e imagens nunca ficam "chumbados" nos componentes.
- O README do template explica a personalização em 5 minutos para o comprador.

## 7. SEO e conversão

- JSON-LD `ExerciseGym` (`LocalBusiness`) com endereço, horários, telefone e geo. Ajuda no Google Maps/busca local.
- `og:image` 1200×630 gerada no estilo do site, `sitemap.xml` (`@astrojs/sitemap`), `robots.txt`.
- Todos os CTAs geram links `wa.me` com mensagem pré-preenchida e diferente por origem ("Quero o plano Plus", "Quero aula de Muay Thai").
- Pronto para receber Google Analytics / Meta Pixel via `site.ts` (desligado por padrão, carregamento adiado).

## 8. Acessibilidade

- Contraste AA (o accent volt sobre preto passa com folga; texto sobre o accent usa preto).
- Navegação completa por teclado, foco visível, `aria-*` nas abas e no menu mobile.
- Hierarquia semântica de títulos, `alt` em todas as fotos, `lang="pt-BR"`.

## 9. Imagens para a demo

Usar fotos de bancos com licença de uso comercial (Unsplash, Pexels) **apenas na demonstração**. Registrar autor e link em `src/assets/CREDITS.md`. Na hora de vender, o comprador troca pelas fotos dele. Vale conferir os termos de cada banco antes de incluir as fotos no pacote vendido; o mais seguro é vender o pacote sem as fotos ou com placeholders.

## 10. Fases

**Fase 1 — Base visual (MVP para demonstração)**
- [x] Header + menu mobile
- [x] Hero com animação do título + foto com zoom lento (vídeo opcional depois)
- [x] Marquee de modalidades
- [x] Modalidades (cards)
- [x] Planos com toggle mensal/anual
- [x] CTA final + localização + footer + WhatsApp flutuante
- [x] Deploy no GitHub Pages

**Fase 2 — Seções completas**
- [x] Números com contadores
- [x] Grade horária com abas e "acontecendo agora"
- [x] Equipe
- [x] Depoimentos
- [x] FAQ
- [x] Galeria da estrutura (mosaico com parallax; lightbox fica para a Fase 3)

**Fase 3 — Polimento e produto**
- [ ] Calculadora IMC/meta
- [ ] Efeitos com scroll-driven animations (parallax, barra de progresso)
- [x] JSON-LD
- [ ] sitemap, og:image
- [ ] Auditoria Lighthouse/acessibilidade e ajustes
- [ ] 3 temas de cor alternativos
- [ ] README do comprador + screenshots para a galeria

## 11. Próximos templates (ideias)

Com a mesma base: `academia-02` (estilo claro/boutique, para studios de pilates e yoga), `barbearia-01`, `restaurante-01`, `clinica-01` (estética/odonto), `petshop-01`, `cafeteria-01`. Para criar um novo, basta copiar uma pasta de `templates/` e editar `template.json`; a galeria e o deploy o reconhecem sozinhos.
