const prompt = require("prompt-sync")();

let nota1 = Number(prompt("Digite a primeira nota: "));
let nota2 = Number(prompt("Digite a segunda nota: "));
let nota3 = Number(prompt("Digite a terceira nota: "));

if (
  nota1 < 0 ||
  nota1 > 10 ||
  nota2 < 0 ||
  nota2 > 10 ||
  nota3 < 0 ||
  nota3 > 10
) {
  console.log("Erro: uma ou mais notas são inválidas.");
} else {
  let media = (nota1 + nota2 + nota3) / 3;

  console.log("Média: " + media.toFixed(1));

  if (media >= 7) {
    console.log("Aprovado");
  } else if (media >= 5) {
    console.log("Recuperação");
  } else {
    console.log("Reprovado");
  }
}
