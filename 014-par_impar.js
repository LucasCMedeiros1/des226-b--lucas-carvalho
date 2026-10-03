const prompt = require("prompt-sync")();

let numero = Number(prompt("Digite um número: "));

console.log(numero % 2 === 0 ? "O número é Par" : "O número é Ímpar");

console.log(
  numero > 0
    ? "O número é Positivo"
    : numero < 0
      ? "O número é Negativo"
      : "O número é Zero",
);
