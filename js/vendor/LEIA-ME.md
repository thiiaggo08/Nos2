# Biblioteca de criptografia empacotada

`noble-psi.min.js` é um pacote local, sem acesso à internet, com:

- `@noble/curves` 1.9.7 (grupo ristretto255) — MIT License, Paul Miller (paulmillr.com)
- `@noble/hashes` 1.8.0 (SHA-512) — MIT License, Paul Miller (paulmillr.com)

Gerado com esbuild 0.25.10 a partir de uma entrada mínima que expõe `window.NosPSI`
(hash para ponto, multiplicação por escalar, escalar e ponto aleatórios).

SHA-256 do arquivo: c84e32998e1b30ddd3e85af0c3c5cbcd1ed6d502b8804c8a0b7653430091cbf3

Para atualizar: instalar as versões novas, gerar o pacote de novo, conferir os testes da troca privada
e registrar aqui a versão e o novo SHA-256.
