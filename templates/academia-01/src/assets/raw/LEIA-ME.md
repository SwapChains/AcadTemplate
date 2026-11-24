# Fotos do site

Coloque aqui as fotos originais (JPG/PNG/WebP, no maior tamanho disponível).
O build converte para AVIF/WebP e gera os tamanhos responsivos automaticamente.

Enquanto um arquivo não existe, o site mostra um placeholder com o nome esperado.

| Arquivo (sem extensão) | Onde aparece | Formato ideal |
|---|---|---|
| `hero` | Fundo do topo (desktop) | Horizontal, ≥ 2400px de largura, espaço vazio à esquerda |
| `hero-mobile` | Fundo do topo (celular). Opcional, senão usa `hero` | Vertical, ≥ 1080px de largura |
| `modalidade-musculacao` | Card Musculação | Vertical 4:5 ou quadrada |
| `modalidade-cross` | Card Cross Training | idem |
| `modalidade-muaythai` | Card Muay Thai | idem |
| `modalidade-pilates` | Card Pilates | idem |
| `modalidade-spinning` | Card Spinning | idem |
| `modalidade-yoga` | Card Yoga & Mobilidade | idem |
| `estrutura-1` … `estrutura-6` | Mosaico da estrutura (a 1 é a maior) | Horizontal |
| `equipe-1` … `equipe-4` | Professores | Vertical 3:4, peito para cima |

Os nomes podem ser alterados em `src/data/site.ts`.
Registre autor e link de cada foto em `CREDITS.md` (necessário para conferir licenças antes de vender).
