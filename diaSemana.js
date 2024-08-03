const prompt = require("prompt-sync")();

let dia = Number(prompt("Insira um dia de 1 a 7: "));

switch (dia) {
  case 1:
    console.log("Hoje é domingo");
    break;
  case 2:
    console.log("Hoje é Segunda");
    break;
  case 3:
    console.log("Hoje é Terça");
    break;
  case 4:
    console.log("Hoje é Quarta");
    break;
  case 5:
    console.log("Hoje é Quinta");
    break;
  case 6:
    console.log("Hoje é Sexta");
    break;
  case 7:
    console.log("Hoje é Sábado");
    break;
    default:
        console.log("Você não escolheu nada");
}