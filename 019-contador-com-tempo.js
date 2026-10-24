let numero = 1;

let contador = setInterval(() => {
  console.log(numero);

  numero++;

  if (numero > 10) {
    clearInterval(contador);
  }
}, 1000);
