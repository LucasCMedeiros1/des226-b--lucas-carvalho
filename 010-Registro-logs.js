let entrada = require("prompt-sync")();

let dataAtual = new Date();

let nome = entrada("Digite seu nome: ");
let matricula = entrada("Digite sua matrícula: ");

let disciplinas = [
  "Programação Web",
  "Banco de Dados",
  "Desenvolvimento de Sistemas",
];

let registrarLog = (nome, matricula, disciplinas, data) => {
  console.log("\n===== LOG DE ACESSO =====");
  console.log(`Aluno: ${nome}`);
  console.log(`Matrícula: ${matricula}`);
  console.log(`Disciplinas: ${disciplinas.join(", ")}`);
  console.log(`Data: ${data.toLocaleDateString("pt-BR")}`);
  console.log(`Hora: ${data.toLocaleTimeString("pt-BR")}`);
  console.log("=========================");
};

registrarLog(nome, matricula, disciplinas, dataAtual);

console.log("\n===== TIPOS =====");
console.log(`Tipo da data: ${typeof dataAtual}`);
console.log(`Tipo da função: ${typeof registrarLog}`);
