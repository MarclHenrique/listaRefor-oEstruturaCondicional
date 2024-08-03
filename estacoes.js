let prompt = require("prompt-sync")();

let estacao = Number(prompt("Digite a estação: "));

switch (estacao){
    case 1:
        console.log("Primavera");
        break;
    case 2:
        console.log("Verão");
        break;
    case 3:
        console.log("Outono");
        break;
    case 4:
        console.log("Inverno");
        break;
    default:
        console.log("Digite uma estação válida");
}