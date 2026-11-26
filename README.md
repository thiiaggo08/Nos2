# Nós 2

App privado do casal, instalável no iPhone (PWA), que funciona sem internet depois da primeira abertura.

## Estrutura

| Arquivo | O que é |
|---|---|
| `index.html` | PIN, página principal, Configurações, Como funciona, Rituais |
| `espero.html` | Espero Você (Partida rápida, Semana, Bingo, placar) |
| `nosdois.html` | Nós Dois (migrado do protótipo) |
| `conversa.html` | Conversa |
| `js/core.js` | Armazenamento (`schemaVersion`), configurações, cripto (PBKDF2 + AES-GCM), PIN, trava, baralhos sem repetição |
| `js/espero-data.js` | 100 cartas, palavras da carta 17, 40 situações do Bingo, perguntas de fechamento |
| `js/conversa-data.js` | Conteúdo aprovado da Conversa |
| `sw.js`, `manifest.webmanifest`, `icons/` | PWA |
| `espero-voce.html`, `nos-dois.html` | Protótipos originais (referência) |

## Publicar uma atualização

1. Altere os arquivos.
2. Troque `VERSION` em `sw.js` (ex.: `nos2-v2`). Sem isso, os celulares continuam com a versão em cache.
3. Envie para o branch publicado no GitHub Pages.
