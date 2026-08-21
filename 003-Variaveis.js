let entrada = require("prompt-sync")();

let nome = "Lucas"; //string
let idade = 27; //number
let trabalha = true; //boolean
let endereco = {
  rua: "Kossey Yamaki",
  num: 205,
  bairro: "Vila Abarca",
}; //objeto
let funcao = () => console.log("Oi"); //function

/*
comentar
varias
linhas
*/

//exibindo tipo das variaveis
console.log("Tipos de variáveis");
console.log("Variáveis: nome:" + typeof nome);
console.log("Variáveis: idade:" + typeof idade);
console.log("Variáveis: trabalha:" + typeof trabalha);
console.log("Variáveis: endereco:" + typeof endereco);
console.log("Variáveis: funcao:" + typeof funcao);

//variaveis definidas sem valor
let nomeDigitado;
let idadeDigitada;
let trabalhaDigitado;

console.log(); //pula uma linha

//passando valoras das variaveis
nomeDigitado = entrada("Digite seu nome:  ");
idadeDigitada = entrada("Digite sua idade?  ");
trabalhaDigitado = entrada("Você trabalha?:  ");

console.log(); 

//mostrando vaor e tipo das variaveis
console.log("nome: " + nomeDigitado + " - Tipo " + typeof (nomeDigitado));

console.log("idade: " + idadeDigitada + " - Tipo " + typeof (idadeDigitada));

console.log("trabalha: " + trabalhaDigitado + " - Tipo " + typeof (trabalhaDigitado) );
