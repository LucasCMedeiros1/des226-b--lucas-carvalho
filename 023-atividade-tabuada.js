const entrada = require("prompt-sync")();

num = entrada("Digite um numero:");

for (let f2 = 1; f2 <= 10; f2++) {
  const x = num * f2;
  console.log(`${num} x ${f2} = ${x}`);
}

entrada(`Pressione ENTER para encerrar o programa!`);
