const readline = require("readline");

const entrada = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function perguntar(pergunta) {
  return new Promise((resolve) => {
    entrada.question(pergunta, resolve);
  });
}

// 1. Autenticação de Usuário

let usuario1 = "giovania";
let senha1 = "12345";
let saldo1 = 500;

let usuario2 = "lucas";
let senha2 = "54321";
let saldo2 = 1000;

let usuario3 = "maria";
let senha3 = "4444";
let saldo3 = 0;

console.log("=================================");
console.log("     CAIXA ELETRÔNICO VIRTUAL");
console.log("=================================");

async function iniciarCaixa() {
  let login = await perguntar("Digite seu nome de usuário: ");
  let senha = await perguntar("Digite sua senha: ");

  let usOK = false;
  let snOK = false;
  let acessoPermitido = false;

  let saldo = 0;

  // Ignora maiúsculas e minúsculas no nome de usuário
  login = login.toLowerCase();

  // Verifica o usuário e a senha
  if (login === usuario1.toLowerCase()) {
    usOK = true;

    if (senha === senha1) {
      snOK = true;
      saldo = saldo1;
    }
  } else if (login === usuario2.toLowerCase()) {
    usOK = true;

    if (senha === senha2) {
      snOK = true;
      saldo = saldo2;
    }
  } else if (login === usuario3.toLowerCase()) {
    usOK = true;

    if (senha === senha3) {
      snOK = true;
      saldo = saldo3;
    }
  }

  // 2. Validação de Acesso

  if (!usOK || !snOK) {
    console.log("Acesso negado!");
    entrada.close();
    return;
  }

  acessoPermitido = true;

  // 3. Operação Financeira (Saque)

  if (acessoPermitido) {
    console.log("Acesso permitido!");
    console.log("Saldo disponível: R$ " + saldo);

    let valorTexto = await perguntar("Digite o valor que deseja sacar: ");
    let saque = parseInt(valorTexto);

    if (saque <= saldo && saque > 0) {
      // 4. Cálculo de Cédulas e Novo Saldo

      let novoSaldo = saldo - saque;

      console.log("Saque realizado com sucesso!");
      console.log("Novo saldo: R$ " + novoSaldo);

      let notas50 = Math.floor(saque / 50);
      let resto = saque % 50;

      console.log("Notas de R$ 50: " + notas50);
      console.log("Restará para notas menores: R$ " + resto);
    } else {
      console.log("Saque inválido!");
    }
  }

  entrada.close();
}

iniciarCaixa();
