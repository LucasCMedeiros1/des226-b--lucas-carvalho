const prompt = require("prompt-sync")();

let codigoProduto = prompt(
  "Digite o código do produto (A,B ou C): ",
).toUpperCase();

switch (codigoProduto) {
  case "A":
    console.log("Coca-Cola - R$ 6,00");
    break;

  case "B":
    console.log("Suco de Laranja - R$ 5,00");
    break;

  case "C":
    console.log("Água Mineral - R$ 3,00");
    break;

  default:
    console.log("Código de produto inválido.");
}
