let prompt = require("prompt-sync")();

let nota = Number(prompt("Digite a nota 1: "));
let notaDois = Number(prompt("Digite a nota 2: "));
let notatres = Number(prompt("Digite a nota 3: "));

let media = (nota + notaDois + notatres) / 3;

if (media === 10){
    console.log("Seu conceito é A");   
}
else if ((media === 9) || (media === 8)){
    console.log("Conceito B");
}
else if ((media === 7) || (media === 6)){
    console.log("Conceito c");
}
else if ((media === 5) || (media === 4)){
    console.log("Conceito D");
}
else if ((media === 3) || (media === 2)){
    console.log("Conceito E");
}
else if ((media === 1) || (media === 0)){
    console.log("Conceito F");
}


