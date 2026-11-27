# Projeto: app "Nós 2"

App privado, de uso interno de um casal, que junta os protótipos **Espero Você** e **Nós Dois**, um modo novo **Conversa** e uma seção **Rituais** num único app instalável no iPhone. Funciona 100% sem internet.

## Arquivos

- `PROJETO.md` (este arquivo): arquitetura, regras e decisões.
- `CONTEUDO-FASE2.md`: todo o texto novo. Cada seção indica se está **aprovada** ou **a escrever**. Implementar só o que estiver aprovado.
- `espero-voce.html`: protótipo do Espero Você. Fonte das 70 cartas originais, das palavras da carta 17 e dos prêmios atuais.
- `nos-dois.html`: protótipo do Nós Dois. Fonte de fantasias, Quem do casal, posições, mapa, recados, plano da noite, jogos, massagens e Esquenta.

Todo texto existente é migrado sem alteração, salvo onde este arquivo pede mudança. Texto novo só com aprovação do usuário.

## Requisitos técnicos

1. **PWA instalável no iPhone** (Safari → Adicionar à Tela de Início), com manifest, ícones e service worker que põe tudo em cache. Depois da primeira abertura, funciona em modo avião.
2. **Nada carregado de fora:** sem Google Fonts nem CDN.
3. **Hospedagem gratuita:** GitHub Pages, de preferência em repositório privado. Só para instalar e atualizar.
4. **Dados só no aparelho** (localStorage ou IndexedDB), com `schemaVersion`. Sem servidor e sem conta.
5. **Sem integração com WhatsApp nem com outros apps.** Onde fizer sentido, o app oferece um botão **"Copiar texto"**, e o usuário cola onde quiser.
6. **Sem notificações e sem lembretes no Calendário.** Avisos (revisão de combinados, janela de missão) aparecem quando o app é aberto.
7. **Sem repetir até esgotar:** todo baralho ou lista de sorteio (cartas, perguntas, desafios, situações do Bingo, Isso ou aquilo etc.) sorteia sem repetição até usar todos os itens, e só então embaralha de novo. O estado fica salvo.
8. Interface em português do Brasil, pensada para iPhone, com alvos de toque de pelo menos 44px. Stack simples: HTML, CSS e JS puros, ou Vite sem framework pesado.

## Estrutura

### 1. Entrada com PIN
- O app abre numa tela neutra com teclado numérico. Nada aparece antes do PIN.
- **PIN pessoal de 4 dígitos por celular**, criado no primeiro uso e confirmado duas vezes. Guardado como hash.
- Pede o PIN de novo depois de 2 minutos fora de primeiro plano, e também no botão "Trancar".
- Depois de 5 erros, espera de 30 segundos.
- Esqueceu o PIN: "Apagar tudo e recomeçar", com confirmação dupla. Não há recuperação.
- **Nome na tela do celular: "Nós 2".** Ícone discreto.

### 2. Página principal
Botões grandes:
- **Espero Você** — missões secretas
- **Nós Dois** — desejos em comum e plano da noite
- **Jogar agora** — atalho direto para os jogos do Nós Dois
- **Conversa** — para conversar com calma
- **Rituais** — momentos guiados do casal

Ações menores: **Como funciona**, **Configurações** e **Trancar**. Cada modo tem "voltar" para a página principal.

### 3. Configurações (compartilhadas)
- Jogador A ou B neste celular, nomes dos dois, pronome do par
- Senha do casal, igual nos dois celulares
- Trocar PIN
- **Backup:** exportar e importar um arquivo cifrado com a senha do casal
- Apagar todos os dados

### 4. Espero Você

**Baralho:** 100 cartas, todas aprovadas.

| Nível | Cartas | Pontos |
|---|---|---|
| 1 Carinho | 22 | 1 |
| 2 Cumplicidade | 20 | 2 |
| 3 Provocação | 18 | 3 |
| 4 Sedução | 15 | 4 |
| 5 Carta Espero Você | 25 | 5 |

Cartas 1 a 70 vêm do protótipo; cartas 71 a 100 estão no CONTEUDO-FASE2.md.

**Sincronização sem internet:** o código da partida, junto com a senha do casal, gera o mesmo sorteio nos dois celulares. Cada celular mostra só as cartas do seu jogador, lacradas, que abrem com um toque.

**Dois modos:**

*Partida rápida*
- 24 ou 48 horas.
- Cada jogador recebe 4 cartas: 3 dos níveis 1 a 4 e 1 Carta Espero Você.
- Não tem Bingo.

*Semana*
- Duração escolhida pelo casal, de 3 a 7 dias. Começa quando os dois decidem, porque um deles trabalha embarcado em escala.
- Uma missão por dia para cada jogador. Numa semana de 7 dias: 5 missões dos níveis 1 a 4 e 2 Cartas Espero Você.
- Cada missão tem uma **janela de horário** sorteada que respeita o nível: níveis 1 e 2 entre 6h e 21h; níveis 3 e 4 entre 17h e 23h; nível 5 só depois das 21h.
- **Cada jogador vê só a própria agenda.** As janelas do par ficam escondidas até a revelação.
- Missão cumprida dentro da janela soma pontos; janela perdida, zero.
- **Bingo cooperativo:** uma cartela 3x3 abre junto com a Semana, com o centro livre e 8 das 40 situações aprovadas. Qualquer um marca. Cada linha completa (8 possíveis) vale +1 ponto para os dois. Cartela cheia até o fim da Semana dá um prêmio do casal.

**Regras comuns:**
- "Te peguei!": acusação certa faz a missão do par falhar e dá +1 a quem acusou; acusação errada tira 1.
- Veto: 1 por partida. A carta nova vem da mesma faixa (níveis 1 a 4 ou nível 5).
- Carta 17: a palavra estranha é sorteada por jogador a partir do código.
- Cronômetro dentro das cartas que têm tempo, como a 51 e a 57.

**Fechamento da partida (nesta ordem):**
1. **Revelação** num celular só: as missões dos dois e a marcação de cada uma (cumprida, descoberta, não fez).
2. **Placar:** individual (competitivo) e do casal (Bingo, na Semana), com os prêmios.
3. **Duas perguntas fixas:** "Qual missão minha você quase descobriu?" e "Que gesto meu você quer que vire hábito?". Logo abaixo, o botão opcional "Abrir uma Conversa".
4. **Rodada final:** sugestão de encerrar com uma massagem guiada do Nós Dois ou com um ritual.
5. **Avaliação em segredo:** cada um marca as missões que quer repetir. Só vira favorita a missão que os dois marcarem.
6. **Próxima partida:** sugestão de data, sem compromisso.

**Placar nos dois celulares:** depois da revelação, o celular que fez a revelação gera um **código do placar**; o outro cola o código e os dois passam a ver o mesmo ranking. Há também o botão "Copiar texto" com o resumo.

**Prêmios:** cerca de 20, em faixas, incluindo prêmios de Semana e prêmios do casal (a escrever).

### 5. Nós Dois

Mantém a mecânica do protótipo: cada um responde sozinho, vocês trocam códigos, e o app mostra só o que coincide.

**Etiqueta dos matches** (decisão do usuário, 27/11/2026): cada match mostra 🔥 Total (os dois Quero ou Quero muito), 🙂 Parcial (um quer, o outro toparia), 🤝 Alinhar (os dois toparam) ou 💬 Entender (um quer muito, o outro só toparia), com a frase "Vamos sentar e cada um fala seu ponto. E tudo bem."

**Mudanças:**
- **Reflexão individual** antes de responder: 5 perguntas curtas, só para si, que não são compartilhadas.
- **Catálogo de fantasias:** a categoria "Com terceiros" ~~sai~~ **volta** (decisão do usuário, 27/11/2026). Entram 3 categorias novas, já aprovadas: Palavras e voz, Ritmo e tempo, Romance e ritual. O item "De manhã, à tarde ou à noite?" é respondido com o horário preferido, não com o nível de vontade.
- ~~"Cartas de Conversa" passam a se chamar "Cartas de intimidade".~~ O baralho de perguntas se chama **"Me Conta Mais"** (decisão do usuário, 27/11/2026), com opção própria em Quebrar o gelo e a frase de capa "Uma carta puxa outra. Uma resposta puxa conversa." Partida cooperativa no mesmo iPhone (pontos juntos, vez alternada, pular sem limite) com escolha de tempo: Rapidinho (10 min, 3 cartas) ou Partida completa (20 min/5, 30 min/8, 40 min/10). Começa por uma carta leve (Risadas quando existir; hoje, "Nós") e, na completa, passa por todas as categorias. Clima: todos os modos começam leves (ordem 1–4; abertura com ordem 1–2); o Rapidinho fica leve até o fim; na Partida completa, depois da 3ª carta concluída, aparece uma vez "Querem ir um pouco mais fundo?" ("Continuar de boa" mantém leves; "Pode aprofundar" inclui as de ordem 5–8, intercaladas com leves). Vale só para a partida atual.
- **Jogos organizados por clima:** quebrar o gelo, esquentar, fantasias e relaxar.
- **Isso ou aquilo:** novo aquecimento. Cada um responde 5 perguntas de duas opções em segredo, e o app mostra onde coincidem.
- **Cartas de comando:** entram dentro das Cartas quentes.
- **Massagem guiada:** entram dois tipos curtos, sem clima sexual: pés, e cabeça e rosto.
- **Esquenta:** 14 dias. O app mostra o desafio do dia e o usuário escreve a mensagem com as próprias palavras, onde quiser. Botão "Copiar" para o texto de inspiração.
- **Plano da noite:** começa com o Ritual de entrada e termina com o Ritual de depois.

**Quantidades-alvo:**

| Item | Protótipo | Alvo |
|---|---|---|
| Fantasias | 41 | 80 |
| Quem do casal | 18 | 40 |
| Posições | 27 | 60, todas diferentes |
| Mapa do corpo | 11 zonas | 18 zonas (frente e costas separadas) |
| Dado: posições / jeitos / lugares | 13 / 12 / 8 | 30 / 25 / 15 |
| Verdade ou Desafio | 30 verdades + 18 desafios | 60 + 45 (20 + 15 por nível) |
| Preliminares | 48 | 90 (30 por nível) |
| Cartas de intimidade | 36 | 80 |
| Cartas quentes | 45 | 100 |
| Isso ou aquilo | — | 60 |
| Massagem guiada | 4 tipos | 6 tipos |
| Esquenta | 12 dias | 14 dias |

**Privacidade (corrigir):** no protótipo, o código cifra com XOR e um keystream derivado da senha, e carrega todas as respostas, inclusive o que só um marcou. Quem souber a senha pode decodificar tudo.
- Trocar por WebCrypto: AES-GCM com chave derivada por PBKDF2 a partir da senha.
- Avaliar como enviar só o necessário para o cruzamento.
- Ajustar o texto do app para não prometer mais do que entrega.

### 6. Ponte entre Espero Você e Nós Dois
As cartas 60, 64, 65, 66, 68 e 70 só entram no sorteio quando houver match no Nós Dois para o item correspondente. Mapear cada carta para um item do catálogo. Sem match, a carta sai do baralho daquela partida. Os matches são iguais nos dois celulares, então o sorteio continua igual dos dois lados.

### 7. Conversa
Conteúdo aprovado no CONTEUDO-FASE2.md:
- **Sessão de 30 a 45 minutos:** abrir, escutar, combinar.
- **24 perguntas de abertura** em 3 blocos. O app sorteia de 4 a 6, uma por bloco, na ordem.
- **Temas opcionais**, com 4 perguntas cada: tarefas e carga mental, filhos e criação, dinheiro, tempo para o casal e para si, desejo e intimidade.
- **Escuta em turnos** com cronômetro (3 min para falar, 1 min para repetir) e frases para quando travar.
- **8 leituras curtas.**
- **Folha de combinados:** no máximo 2 por conversa, com data de revisão (manter, ajustar ou tirar). A revisão aparece quando o app for aberto.
- ~~Tela fixa "Quando procurar ajuda", com Ligue 180 e 190.~~ Retirada por decisão do usuário (27/11/2026).

### 8. Rituais
Momentos guiados, com passos e cronômetro (conteúdo a escrever):
- **Ritual de entrada** (10 min): de pais para casal. Também abre o Plano da noite.
- **Ritual de depois** (5 min): logo após a intimidade. Também fecha o Plano da noite.
- **Ritual de fim de dia** (15 min): cada um conta o dia, e o outro só ouve, sem dar conselho.
- **Beijo de 6 segundos:** na saída e na chegada.
- **Ritual de despedida:** antes do embarque.
- **Ritual de reencontro:** na volta para casa.

## Fora do escopo (decidido)
- Sinal secreto
- Carta coringa "vai mais fundo"
- Lista de 15 perguntas pós-rodada, substituída pelas 2 perguntas fixas
- Bingo como aba separada, agora integrado à Semana
- Envio para WhatsApp
- Casal Detetive, deixado para o futuro

## Como testar antes de entregar
- Com dois navegadores e o mesmo código, cada jogador recebe cartas diferentes, o cronômetro termina junto e a Carta Espero Você aparece sempre na 4ª posição.
- Na Semana, as janelas respeitam o nível e cada jogador vê só a própria agenda.
- O veto respeita a faixa.
- Sem matches no Nós Dois, as cartas 60, 64, 65, 66, 68 e 70 nunca aparecem.
- Nenhum baralho repete item antes de esgotar.
- O código do placar importado no outro celular mostra o mesmo ranking.
- Com o app instalado e em modo avião, tudo funciona, e não há nenhuma requisição de rede depois do primeiro carregamento.
- Backup exportado e importado num navegador limpo restaura tudo.
