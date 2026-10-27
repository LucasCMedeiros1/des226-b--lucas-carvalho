const entrada = require("prompt-sync")();

let cont = 0;

while (cont <= 10) {
  cont++;
  console.log(cont);
}

for (let n = 1; n < 10; n++) {
  console.log(n);
}

entrada("Precisone ENTER para encerrar");
