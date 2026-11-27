# Proposta técnica — troca privada de coincidências (item 8.1, opção B)

**Status: APROVADA e IMPLEMENTADA (27/11/2026)**, com as decisões do usuário: opção B (3 mensagens, sem graus nem etiquetas); sem contador diário; Mapa comparado; ideias com autor e prévia. As seções abaixo descrevem a proposta original; onde ela fala em M4 ou em Mapa como envio, vale a decisão acima.

## 1. Objetivo

Comparar fantasias, posições, horário, avaliações do Depois e Quem do casal **sem que o outro iPhone consiga ler os itens que não coincidem**, mesmo tendo os códigos e a senha do casal. Continua offline, sem conta e sem servidor; as mensagens seguem sendo copiadas e coladas.

## 2. Técnica: interseção privada por Diffie-Hellman (DH-PSI)

- **Biblioteca:** `@noble/curves` (grupo `ristretto255`, com `hashToCurve`) e `@noble/hashes`. São bibliotecas de código aberto (MIT), sem dependências e com auditoria independente publicada. Uma versão fixa é empacotada no app (`js/vendor/`), com o hash do arquivo registrado. Não é carregada de CDN.
- **Ideia:** cada item vira um ponto `H(item)` do grupo. Cada aparelho "tranca" os pontos com um segredo próprio daquela troca (`a` no aparelho A, `b` no aparelho B). Trancar duas vezes dá o mesmo resultado, em qualquer ordem: `(H^a)^b = (H^b)^a`. Só os itens que os dois têm geram valores iguais. Os demais continuam pontos aleatórios, que ninguém consegue reverter para o item original sem o segredo da troca.
- **Envelope:** cada mensagem continua cifrada com AES-GCM e a senha do casal, como hoje, para esconder também os metadados. A proteção do conteúdo, porém, não depende mais da senha.

## 3. Fluxo das mensagens

| Mensagem | Quem envia | O que vai | O que o receptor consegue saber |
|---|---|---|---|
| **M1** | A → B | Itens de A trancados com `a` (`H(x)^a`), embaralhados e completados com valores falsos até um tamanho fixo; identificador da troca, aparelho, revisão, data e hora | Nada sobre os itens de A, nem quantos são |
| **M2** | B → A | Os pontos de A trancados também com `b`, na mesma ordem; os itens de B trancados com `b`, embaralhados e completados | **A** descobre quais dos seus itens coincidem. Sobre os itens só de B, A não aprende nada |
| **M3** | A → B | Os itens de B trancados também com `a`, na ordem de B; os graus de interesse de A **apenas para as coincidências** | **B** descobre quais dos seus itens coincidem e vê os graus de A nas coincidências |
| **M4** (curta) | B → A | Os graus de interesse de B **apenas para as coincidências** | A vê os graus de B nas coincidências |

- Com **3 mensagens**, os dois iPhones conhecem as coincidências. O grau de A chega a B na M3.
- Para A ver o grau de B, é preciso uma **4ª mensagem curta**, porque B só conhece as coincidências depois da M3. Para preservar o grau individual por padrão, o fluxo completo tem 4 mensagens. Hoje são 2.
- **Tamanho estimado:** cerca de 160 itens após completar com valores falsos, cerca de 7 mil caracteres na M1 e na M3 e cerca de 14 mil na M2. Precisa ser medido num app de mensagens.

## 4. O que vira item na comparação

| Dado | Como entra | O que o resultado revela |
|---|---|---|
| Fantasia sem papel | `f:id` | Que os dois marcaram "sim" |
| Fantasia com papéis | Um item para **cada combinação aceitável** de papéis, já com os jogadores fixos: `f:id:A=Fazer:B=Receber`. Quem marcou "Fazer" gera só a combinação em que faz; quem marcou "Tanto faz" gera as duas | Só a combinação válida, por exemplo "A faz · B recebe". Papéis iguais não geram combinação comum, então a atividade não aparece e o papel não fica legível |
| Posição | `p:id` | As posições em comum |
| Horário preferido | `h:valor` | Só se for igual |
| Avaliação do Depois | `av:id:repetiria` (só "Repetiria") | Só as favoritas em comum; as outras notas não saem do aparelho |
| Quem do casal | `q:id:resposta` na forma absoluta (A, B, os dois ou nenhum) | Só as concordâncias |

**O que dá para inferir dos papéis:** se A marcou "Fazer" e aparece "A faz · B recebe", A sabe que B aceita receber, mas não sabe se B marcou "Receber" ou "Tanto faz". Quem marcou "Tanto faz" vê quais combinações coincidiram e, com isso, deduz o papel exato que o outro marcou.

## 5. Envio intencional, com prévia

Mapa, recados, "Hoje não", ideias próprias, nome e data do encontro não são comparações: existem para o outro ler. Eles saem da troca automática e passam a um botão **"Compartilhar com meu par"**, que mostra uma prévia do texto exato antes de gerar o código. O envelope é cifrado com a senha do casal.

**Decisões de produto antes de implementar:**

1. **Mapa:** continua sendo um envio inteiro (o par vê todas as zonas positivas) ou vira comparação?
2. **Ideias próprias:** o par precisa ler o texto para responder, então o autor continua visível ("Ideia de…"). Mantém?
3. **4ª mensagem:** aceitar a M4 para mostrar o grau do par, ou mostrar só "coincidiu", com 3 mensagens?
4. **Transparência:** mostrar ao par quantas trocas foram feitas no dia (veja a seção 7)?

## 6. Interrupção, ordem e edição no meio da troca

- **Identificador da troca:** cada troca tem um identificador e um número de etapa. Os segredos `a`/`b` e a "foto" das respostas usadas ficam guardados no aparelho até a troca terminar ou vencer (sugestão: 24 horas).
- **Troca interrompida:** depois do prazo, os segredos são apagados. Uma mensagem que chegar depois mostra: "Esta troca não está mais ativa. Comecem uma nova."
- **Fora de ordem ou repetida:** cada aparelho só aceita a etapa esperada daquela troca. Etapa repetida não muda nada; etapa errada mostra o que está faltando, por exemplo "Falta colar a mensagem 2".
- **Dois começando ao mesmo tempo:** os dois aparelhos detectam as duas M1. O de identificador menor segue como A, e o outro descarta a própria M1.
- **Edição no meio da troca:** a troca usa a "foto" tirada no início. A edição dispara o aviso do item 8.3, e uma nova troca atualiza.
- **Revisão (8.2):** a troca nova reaproveita o identificador de aparelho, a revisão e o "último aceito" já implementados.

**Migração do ND3:**
1. O app passa a ler o formato novo e continua lendo o ND3, com o aviso da opção A.
2. Se só um iPhone estiver atualizado, a M1 avisa: "Atualizem o app nos dois iPhones".
3. Os resultados ND3 já salvos ficam até a primeira troca nova, que os substitui.
4. Depois que os dois aparelhos tiverem feito uma troca nova, a geração de ND3 é desligada. Ler um ND3 antigo continua possível, com aviso.

## 7. Limites que continuam existindo (texto do recurso)

> "As coincidências dependem do que cada pessoa marcou. Se alguém marcar todas as opções, poderá deduzir quais delas a outra pessoa também marcou."

- **Trocas repetidas:** trocando várias vezes e mudando as próprias respostas entre uma e outra, dá para descobrir, item por item, o que o outro marcou. Offline, não há como impedir isso. O app pode, no máximo, mostrar ao par quantas trocas foram feitas no dia (decisão 4).
- **Comportamento do par:** a proteção vale contra quem lê as mensagens, inclusive com a senha. Não vale contra um par que monte as próprias respostas para sondar.

**Revelado pelo resultado:** as coincidências, a combinação válida de papéis, o horário quando igual, as posições em comum, as concordâncias do Quem, as favoritas em comum e, com a M4, os graus nas coincidências.

**Acessível nas mensagens:** valores trancados que parecem aleatórios, o tamanho fixo após completar com valores falsos, e o identificador do aparelho, a revisão e a data e hora (estes protegidos pela senha do casal). Nenhum item exclusivo, grau ou papel exclusivo fica legível.

## 8. Validação planejada

- **Três contra duas opções, uma coincide:** inspecionar M1 a M4 e os dados guardados no meio da troca, e confirmar que só a coincidência é recuperável. Tentar recuperar os itens exclusivos testando todos os itens do catálogo contra as mensagens, e confirmar que não é possível sem o segredo.
- **Papéis:** "Fazer" + "Receber" aparece como "A faz · B recebe". "Fazer" + "Fazer" não aparece, e nenhuma mensagem permite saber o papel.
- **Robustez:** troca interrompida, mensagens fora de ordem ou repetidas, dois começando juntos, edição no meio, backup e migração do ND3.
- **Desempenho e tamanho:** medir no iPhone o tempo de gerar e de abrir e o tamanho das mensagens num app de mensagens.
