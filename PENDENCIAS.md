# Pendências do Nós 2

Combinado (27/11/2026): as decisões são registradas aqui e aplicadas no app de uma vez, quando o usuário disser "pode atualizar".

Status: ⏳ aguardando decisão · ✅ decidido (falta aplicar) · 🚀 aplicado no app

## 1. Me Conta Mais
| # | Pendência | Status | Decisão |
|---|---|---|---|
| 1.1 | Baralho de 40 cartas | 🚀 | Baralho escrito pelo usuário, APROVADO. Primeira partida abre com R03. |
| 1.1a | 5 ajustes sugeridos (R01; M07; T05; “seu par”; aspas brasileiras) | 🚀 | Todos aceitos. Já aplicados no texto do baralho em CONTEUDO-ME-CONTA-MAIS.md. |
| 1.2 | As 40 novas substituem as 36 perguntas atuais? | 🚀 | Me Conta Mais = só as 40 aprovadas. As 36 antigas ficam em “Cartas íntimas (+18)”, com textos, grupos (Nós, Desejo, Fantasia), regras antigas e histórico preservados. |
| 1.2a | Organização de “Cartas” | 🚀 | Nós Dois → Quebrar o gelo → Cartas mostra: “Me Conta Mais — 40 cartas de humor, conversa e carinho.” e “Cartas íntimas (+18) — 36 perguntas dos grupos Nós, Desejo e Fantasia.” Sai o botão direto do Me Conta Mais em Quebrar o gelo. Atalho específico (nosdois.html#mcm) abre o Me Conta Mais direto. |
| 1.2b | Onde ficam as Cartas quentes | 🚀 | Opção 2: mudam para Nós Dois → Esquentar, ao lado de Preliminares e Dado da Noite. Preservar as 45 ações, os níveis Leve/Quente/Ousado, as regras e os dados salvos; reutilizar a tela atual e atualizar atalhos. “Cartas” fica só com Me Conta Mais e Cartas íntimas (+18). |
| 1.3 | Divisão do clima | 🚀 | 01–05 leves; 06–08 mais pessoais. |
| 1.4 | Textos do exemplo, do "Como jogar" e das dicas da partida | ⏸ adiado | Decisão do usuário (27/11/2026): fica para depois. Os textos atuais continuam no app. |
| 1.5 | Nome do modo curto do Me Conta Mais | 🚀 | “3 cartas”, com a legenda “Até 10 minutos de conversa.” O roteiro curto do Nós Dois continua “Rapidinho”. |

## 2. Textos para aprovar
| # | Pendência | Status | Decisão |
|---|---|---|---|
| 2.1 | Etiquetas | 🚀 | Revisão do usuário (27/11/2026): 🔥 Total, 🙂 Parcial, 🤝 Alinhar e 💬 Entender em fantasias e Mapa; 🔥 Total em posições, horário e favoritas; Total/Entender no Quem do casal. |
| 2.2 | "Quanto tempo vocês têm?" e legendas dos roteiros | ⏸ adiado | Decisão do usuário (27/11/2026). |
| 2.3 | Duração do roteiro “Nós 2” | 🚀 | Avulso: “Cerca de 25 min”. No Plano da noite: “Cerca de 40 min, incluindo os rituais” (o roteiro passa pelos rituais de entrada e de depois; a entrada não se repete se já foi feita pela Abertura). |

## 3. Decisões da avaliação crítica
| # | Pendência | Status | Decisão |
|---|---|---|---|
| 3.1 | Espero Você: recusa do par | ✅ | Decisão final (27/11/2026): fica como está hoje (Cumpri, Fui descoberto(a), Não fiz). Sem o botão “Encerrar missão”. Nada a aplicar. |
| 3.2 | Prêmio “vale-sim” | 🚀 | Trocado por “Vale escolher o próximo jogo”: “Vocês escolhem duas opções que topariam jogar. Quem venceu dá o voto final.” |
| 3.3 | Linha de ajuda (Ligue 180/190) em “Como funciona” | ✖ encerrado | Decisão do usuário (27/11/2026): não acrescentar. |
| 3.4 | Semana de 7 dias com 2 missões por dia | 🚀 implementado (28/11/2026, v23) · falta validar no iPhone | Só na Semana de 7 dias. Cada um recebe 14 missões: dias 1, 3, 5 e 7 = 1 leve + 1 pesada (+18); dias 2, 4 e 6 = 1 leve + 1 moderada. Leve = níveis 1 e 2; moderada = 3 e 4; pesada = 5 (Carta Espero Você, +18). Com teto abaixo de 5, a pesada vira moderada. Duas janelas por dia (uma de dia, outra à noite), cada uma com sua missão. 2 vetos por pessoa. Semana de 3 a 6 dias continua como hoje. |
| 3.5 | Novo fluxo para a Partida rápida (24 h e 48 h) | 🚀 aprovado e implementado (28/11/2026, v23) · falta validar no iPhone | 24 h: 3 missões por pessoa, esquentando (leve de manhã, moderada à tarde, +18 à noite). 48 h: 4 missões (dia 1: leve de dia + moderada à noite; dia 2: moderada de dia + +18 à noite). 1 veto, sem Bingo; com teto abaixo de 5, a +18 vira moderada. O período é sugestão (a partida pode começar a qualquer hora), sem travar o “Cumpri”. Códigos novos levam “P” (ex.: R24P-…); partidas antigas seguem o sorteio anterior. |

## 4. Ajustes técnicos recomendados
| # | Pendência | Status | Decisão |
|---|---|---|---|
| 4.1 | Pausa e retomada manual das atividades com cronômetro/narração | 🚀 implementado · ✔ validado no iPhone (27/11/2026) | Implementado (27/11/2026) em Rituais, Massagem, Preliminares, Dado, Me Conta Mais e Conversa: ao sair ou bloquear, para o cronômetro e a voz e salva etapa, tempo restante, vez e placar; volta com “Querem continuar de onde pararam?” (Retomar silencioso, Ouvir instrução separado na Massagem e nas Preliminares, Encerrar por hoje); PIN a partir de 2 min e volta à atividade; sessão por 12 h; aviso na página principal. |
| 4.1a | Pausa de 20 min da Conversa | ✅ | Continua contando o tempo real fora do app. |
| 4.1b | Narração depois de “Retomar” | ✅ | Etapas seguintes voltam a ser narradas; só a interrompida fica em silêncio (salvo “Ouvir instrução”). |
| 4.1c | Validade da sessão pausada | ✅ | 12 horas; depois some sozinha. |
| 4.1d | Cronômetros das cartas do Espero Você | ✅ | Pausam; o prazo da missão continua correndo. |
| 4.2 | Manter a tela acesa nas sessões guiadas | 🚀 implementado · ✔ validado no iPhone (27/11/2026) | Opção “Manter a tela acesa” ligada no início de Massagem, Preliminares, Dado, Me Conta Mais, Conversa e Rituais; pode desligar na sessão; ao pausar ou encerrar, volta o bloqueio automático normal. |
| 4.3 | Nível máximo no Espero Você | 🚀 implementado · ✔ validado no iPhone (27/11/2026) | “Até que nível vocês querem jogar hoje?” ao criar a partida (obrigatório, sem nível pré-marcado). O teto vai no código (ex.: R24N3-…) e vale para todas as missões e para o veto; o nível 5 só entra quando escolhido. Códigos antigos, sem nível, valem até o 5. |
| 4.4 | "Esquentar sozinho" desligado por padrão | 🚀 implementado (28/11/2026) · falta validar no iPhone | Preliminares começam com a opção desligada; quem quiser liga. |
| 4.5 | Dado e Cartas quentes respeitando o que foi marcado | 🚀 implementado (28/11/2026), regra aprovada · falta validar no iPhone | Proposta: cada ação ligada a um item do catálogo (brinquedo, vendar, mãos presas, segurar o clímax, oral, falar sacanagem etc.) só entra no sorteio quando esse item for coincidência dos dois, com a opção “Só o que os dois marcaram” ligada por padrão. O “Hoje não” é texto livre e não dá para filtrar automaticamente. |
| 4.6 | Passes ilimitados no Dado e nas Preliminares | 🚀 implementado (28/11/2026) · falta validar no iPhone | “Passar” (Dado) e “Trocar carta” (Preliminares) sem limite. |
| 4.7 | "Quem do casal" | 🚀 | Substituído pela revisão do 8.4: todas as respostas lado a lado, com etiqueta. |
| 4.8 | "+1 min" e regiões a evitar nas massagens | 🚀 implementado (28/11/2026) · falta validar no iPhone | Botão “+1 min” em cada etapa; antes de começar, marcar regiões a evitar: etapas só dessas regiões são puladas, e as mistas mostram “Evitar: …”. |
| 4.9 | Roleta vazia no roteiro "Nós 2" | 🚀 implementado (28/11/2026) · falta validar no iPhone | Sem coincidências, a etapa da Roleta é pulada sozinha. |

## 5. Conteúdo a escrever (PENDENTE no CONTEUDO-FASE2.md)
| # | Pendência | Status |
|---|---|---|
| 5.1 | Rituais (6) | 🚀 implementado · ✔ validado no iPhone (27/11/2026) | Aplicado em 27/11/2026 (rituais.html). Menu na página principal; Ritual de entrada abre e Ritual de depois fecha o Plano da noite; Rodada final do Espero Você abre a escolha dos rituais; pausa ao sair da tela, PIN a partir de 2 min, “Querem continuar de onde pararam?” com “Retomar” (silencioso) e “Encerrar por hoje”; sessão guardada por 12 h. Falta: teste no iPhone (ícone da Tela de Início, modo avião, trocar de app e bloquear a tela). |
| 5.2 | Prêmios do Espero Você (~20, incluindo Semana e casal) | 🚀 APROVADO e aplicado no Espero Você (28/11/2026) |
| 5.3 | Itens novos do Nós Dois (✍ escrever por partes, depois dos prêmios) (fantasias, Quem, posições, mapa, dado, V/D, preliminares, cartas, Isso ou aquilo, massagens, Esquenta) | ⏳ |

## 6. Testes e revisões
| # | Pendência | Status |
|---|---|---|
| 6.1 | Testes num iPhone real | ✔ 27/11/2026 — executados pelo usuário, tudo funcionando |
| 6.2 | Revisão profissional das massagens | ⏳ |

## 7. Ideias propostas
| # | Pendência | Status |
|---|---|---|
| 7.1 | Termômetro de hoje | ⏳ |
| 7.2 | Cápsula da escala | ⏳ (parcialmente coberta pelo “Guarda pra volta”) |
| 7.3 | Volta em camadas | ⏳ |

## 8. Troca de códigos do Nós Dois (diagnóstico e ajustes, 27/11/2026)
| # | Pendência | Status | Decisão |
|---|---|---|---|
| 8.1A | Avisos do formato atual (ND3): introdução, aviso junto do código e “O que vai no código?” | 🚀 | Aplicado. |
| 8.1B | Troca privada de coincidências | 🚀 implementado · ✔ validado no iPhone (27/11/2026) | Revisão do usuário (27/11/2026): opção 1 — só coincidências, agora com os graus de cada um e etiquetas. A troca passou a ter 4 códigos: coincidências no código 3, graus e etiquetas no código 4. Os graus vão só para as coincidências; o que só um marcou continua sem aparecer e sem ficar legível. |
| 8.2 | Código antigo e última troca | 🚀 | Identificação por aparelho, pareamento e revisão; aviso “Este código é de uma troca anterior. Peça um código novo.”; reimportar o mesmo código não muda nada; “Última troca neste iPhone” na tela. |
| 8.3 | Aviso de respostas alteradas | 🚀 | Aviso até o par confirmar (no código dele) um código seu gerado depois da edição. Gerar sozinho não limpa. |
| 8.4 | Quem do casal | 🚀 | Revisão do usuário (27/11/2026): as respostas dos dois voltam a aparecer lado a lado, com 🔥 Total (iguais) ou 💬 Entender (diferentes). As respostas do Quem vão como envio para o par ler, com prévia. |

## 9. Validação no iPhone real

Regra: um item só muda para ✔ depois de conferido no iPhone, pelo ícone da Tela de Início, em modo avião, trocando de app e bloqueando a tela.

| # | Teste | Implementado (navegador simulando iPhone) | Validado no aparelho |
|---|---|---|---|
| 9.1 | Rituais: trocar de app por menos de 2 min no meio de um passo e voltar → “Querem continuar…”, tempo preservado | ✔ 27/11 | ✔ 27/11/2026 (usuário) |
| 9.2 | Rituais: bloquear a tela por mais de 2 min → PIN, depois o ritual pausado | ✔ 27/11 | ✔ 27/11/2026 (usuário) |
| 9.3 | Rituais: “Retomar” continua o tempo de onde parou, sem som | ✔ 27/11 | ✔ 27/11/2026 (usuário) |
| 9.4 | Rituais: sino no fim do passo (não toca no modo silencioso) e aviso visual | ✔ 27/11 | ✔ 27/11/2026 (usuário) |
| 9.5 | Massagem: sair com 1:15 restantes → a voz para; na volta, pausada com 1:15; Retomar sem voz; “Ouvir instrução” lê só a etapa atual; a etapa seguinte volta a ser narrada | ✔ 27/11 | ✔ 27/11/2026 (usuário) |
| 9.6 | Preliminares: mesma carta, quem conduz e tempo restante; Retomar sem voz; “Ouvir instrução” separado | ✔ 27/11 | ✔ 27/11/2026 (usuário) |
| 9.7 | Dado da Noite: mesma rodada e tempo restante | ✔ 27/11 | ✔ 27/11/2026 (usuário) |
| 9.8 | Me Conta Mais: mesma carta, vez, placar e relógio da partida (o tempo fora não é descontado) | ✔ 27/11 | ✔ 27/11/2026 (usuário) |
| 9.9 | Conversa: mesma etapa e tempo restante; a pausa de 20 min continua contando o tempo real | ✔ 27/11 | ✔ 27/11/2026 (usuário) |
| 9.10 | Voz em português disponível em modo avião (Massagem e Preliminares) | — | ✔ 27/11/2026 (usuário) |
| 9.11 | Troca privada: os quatro códigos (≈ 8,6 mil, 16,8 mil, 8,5 mil e poucos caracteres) chegam inteiros depois de copiados e colados num app de mensagens | ✔ 27/11 (tamanho medido) | ✔ 27/11/2026 (usuário) |
| 9.12 | Troca privada: tempo para gerar e abrir os códigos no iPhone (no navegador: 0,2 s, 0,3 s e 0,65 s) | ✔ 27/11 | ✔ 27/11/2026 (usuário) |
| 9.13 | Troca privada: quem começou vê as coincidências ao colar o código 2 e os graus ao colar o código 4; o par vê tudo ao colar o código 3 | ✔ 27/11 | ✔ 27/11/2026 (usuário) |
| 9.14 | Troca privada: os dois iPhones com iOS 16.4 ou mais novo | — | ✔ 27/11/2026 (usuário) |
| 9.15 | Tela acesa: numa massagem pelo ícone da Tela de Início, a tela não apaga sozinha; ao pausar, volta a apagar no tempo normal (exige iOS 16.4; no app instalado, iOS 18.4 ou mais novo) | ✔ 27/11 | ✔ 27/11/2026 (usuário) |
| 9.16 | Nível máximo: criar uma partida até o nível 3 num iPhone e entrar com o código no outro; conferências iguais e nenhuma missão acima do nível 3 | ✔ 27/11 | ✔ 27/11/2026 (usuário) |

## 10. Gestos e lembranças (27/11/2026)
| # | Item | Status | Detalhe |
|---|---|---|---|
| 10.1 | “Guardar esse gesto” no fechamento do Espero Você | 🚀 implementado · ✔ validado no iPhone (27/11/2026) | Depois das duas perguntas: “Guardar esse gesto” ou “Seguir”. O gesto fica só neste iPhone, ligado ao Ritual de despedida, de reencontro ou de fim de dia, e aparece em “Gesto que quero repetir” na abertura do ritual (manter ou apagar). Fora dos códigos e do placar. |
| 10.2 | “Guarda pra volta” | 🚀 implementado · ✔ validado no iPhone (27/11/2026) | Acesso discreto na página Rituais. Cada lembrança é salva separadamente e pode ser apagada. Na abertura do Ritual de reencontro: “Ver o que guardei pra contar”. Fora dos códigos de troca. |
| 9.17 | Guardar um gesto no Ritual de despedida, fechar o app e reabrir em modo avião: o texto aparece na abertura do ritual | ✔ 27/11 | ✔ 27/11/2026 (usuário) |
| 9.18 | Guardar duas histórias em dias diferentes, reabrir em modo avião, ver as duas no reencontro, apagar uma | ✔ 27/11 | ✔ 27/11/2026 (usuário) |

## 11. Filtros (27/11/2026)
| # | Item | Status | Detalhe |
|---|---|---|---|
| 11.1 | Filtros nas listas longas | 🚀 implementado · ✔ validado no iPhone (27/11/2026) | Matches e Mapa por etiqueta; Quem do casal por Total/Entender; Depois por avaliadas/sem avaliação; Plano da noite → Posições por nível, com “Ver todas”; Responder → Fantasias e Quem por respondidas/sem resposta. Cada botão mostra a quantidade; o filtro só aparece quando há pelo menos duas opções; filtro que fica vazio volta para “Todas”; ao fechar o app, tudo volta para “Todas”. |

## 12. Ideias para depois
| # | Item | Status | Detalhe |
|---|---|---|---|
| 12.1 | Atualizar as posições usando os nomes do site sexpositions.club/pt (pedido do usuário, 27/11/2026) | ✔ coberto pelo 12.2 (28/11/2026) | Nomes podem ser alinhados. As imagens do site têm direitos autorais e o repositório é público: não entram no app nem no repositório. Alternativas: “Adicionar imagem” por posição (já existe, fica só no aparelho) ou ilustrações próprias. Liga-se ao 5.3 (33 posições novas). |
| 12.2 | Posições do site: categorias, deslize e roleta (decisões do usuário, 27/11/2026) | ✅ implementado em 28/11/2026 (v21); falta validar no iPhone | **Lista:** 491 posições com nome e nível do site em POSICOES-SITE.md. **Categorias:** sim, em baralhos (proposta de 8 grupos); falta a fonte da categoria de cada posição. **Na preparação do encontro** (quando cada um marca o que gosta): deslize estilo Tinder, por categoria. Fica em **Responder → Posições**. Direita = **Topo**, para cima = **Tentar**, esquerda = **Agora não** (privado). Botão discreto "Pular" manda a carta para o fim do baralho (confirmado). Depois, filtros Topo / Tentar / Agora não / Sem resposta para rever e mudar a avaliação (decisão do usuário, 27/11/2026). Etiqueta na comparação (confirmada pelo usuário): Topo + Topo = 🔥 Total; Topo + Tentar = 🙂 Parcial; Tentar + Tentar = 🤝 Alinhar; "Agora não" nunca aparece para o outro. **Na hora do jogo:** escolher o nível, tocar em "Girar a roleta" e a roleta sorteia uma posição. Proposta: sorteia entre as posições que os dois marcaram "Tentaria" naquele nível; se não houver nenhuma, avisa e oferece sortear entre todas do nível. |

**12.2, como ficou (28/11/2026):** 491 posições (POSICOES-SITE.md → js/posicoes-data.js). Responder › Posições: deslize por categoria (8) e nível, Pular, Desfazer e "Minhas escolhas". Fotos só no aparelho (IndexedDB), por pacote importado (arquivo nos2-fotos-posicoes.json, fora do repositório) ou da galeria; o backup não leva as fotos. Troca: só Topo e Tentar entram, com etiqueta (Topo+Topo 🔥, Topo+Tentar 🙂, Tentar+Tentar 🤝); "Agora não" nunca sai do aparelho. As posições entram na mesma troca de 4 códigos (não numa troca separada). Jogar › Posições: escolhe o nível e gira a roleta (em comum → minhas → todas do nível). Marcas do guia antigo migradas quando havia equivalente.

**28/11/2026 — aplicados:** 4.4 (Esquentar sozinho desligado, também nos roteiros); 4.6 (Passar e Trocar carta sem limite); 4.8 (+1 min por etapa; regiões a evitar escolhidas antes de começar: etapas só dessas regiões são puladas, as mistas mostram “Evitar: …”); 4.9 (Roleta pulada no roteiro sem matches); 4.5 (opção “Só o que os dois marcaram”, ligada por padrão, no Dado e nas Cartas quentes: oral, 69, brinquedo, venda, mãos presas, controle do clímax, ordens, sacanagem e lugares especiais só entram com match); Dado também sorteia as posições que os dois marcaram como Topo ou Tentar; 5.2 (21 prêmios no Espero Você: faixas, Semana e Bingo).
| 5.4 | Ampliação do catálogo (Fantasias e Quem) — CONTEUDO-CATALOGO.md | 🚀 aplicado (28/11/2026, v24) · falta validar no iPhone | Lote 1 (32 fantasias, 3 categorias novas, 15 Quem), Anal (+4), Personagens (+6), Entrega leve (8 itens + regras + 2 Quem). Total: 105 fantasias em 17 categorias e 35 perguntas no Quem. |
| 5.5 | Responder mais rápido: modo cartas nas Fantasias e no Quem (28/11/2026) | 🚀 aprovado e implementado (v24) · falta validar no iPhone | Fantasias: uma carta por vez, por categoria. Deslize → = Quero muito; ↑ = Quero; ↓ = Toparia; ← = Passo (também com botões). Item com papéis: depois do deslize positivo, a carta mostra os papéis (ex.: Fazer / Receber / Tanto faz) e passa sozinha ao tocar. Pular por enquanto e Desfazer. Quem do casal: uma pergunta por vez, 4 botões grandes (Eu, par, Os dois, Nenhum), passa sozinha. A lista atual continua como "Ver lista", para revisar e mudar. |
| 12.3 | Roleta das posições: marcar "Fizemos" | ✅ aprovado (28/11/2026), falta aplicar | Depois de girar: ✓ Fizemos / Não deu / Girar de novo. "Fizemos" registra a data; **uma pessoa marca e vai no próximo código** (envio intencional, com prévia, como os recados): o outro celular passa a mostrar "✓ Feita em …". Avaliação rápida (Repetiria / Foi ok / Não curti) é de cada um e fica no aparelho; "Repetiria" dos dois vira favorita em comum no Encontro (mesma regra do Depois). "Não curti" tira da roleta (reversível). Roleta ganha "Só as que ainda não fizemos"; Minhas escolhas ganha selo e filtros Já fizemos / Ainda não. |
