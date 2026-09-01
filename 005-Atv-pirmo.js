let entrada = require("prompt-sync")();

console.log("Digite o nome de um filme a ser avaliado:");
let filme = entrada();
console.log("Que nota você da para esse filme (0-10):");
let nota = entrada();
console.log("Você recomendaria esse filme? (sim/não):");
let recomenda = entrada();

let bilheteria;
let numPaisesExibidos = null;
let notaInt = parseInt(nota, 10);
let recomendaBool = recomenda === "sim" ? true : false;
let ehNulo = numPaisesExibidos === null ? "null" : "outra coisa";

console.log("");
console.log("-------------------");
console.log("Bilheteria", typeof bilheteria);
console.log("numPaisesExibidos", typeof numPaisesExibidos);
console.log("Recomendarai", typeof recomendaBool);
