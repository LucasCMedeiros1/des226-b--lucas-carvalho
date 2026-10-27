const entrada = require("prompt-sync")();

senha = "12345";

do {
  senhaDigitada = entrada("Digite sua senha:");
} while (senha != senhaDigitada);

entrada("sisatema acessado com sucesso");
