const entrada = require("prompt-sync")();

const f1 = 5;

for (let f2 = 1; f2 <= 10; f2++) {
  const x = f1 * f2;
  console.log(`${f1} x ${f2} = ${x}`);
}

entrada(`Pressione ENTER para encerrar o programa!`);
