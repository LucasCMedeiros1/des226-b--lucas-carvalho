const prompt = require("prompt-sync")();

let idade = Number(prompt("Digite sua idade: "));
let acompanhado = prompt("Está acompanhado dos pais? (sim/nao): ");
let bloqueado = prompt("Está bloqueado? (sim/nao): ");

if (bloqueado === "sim") {
  console.log("Acesso Bloqueado");
} else if (idade >= 18 || acompanhado === "sim") {
  console.log("Acesso Liberado");
} else {
  console.log("Acesso Negado");
}
