let prompt = require("prompt-sync")();

let ano = Number(prompt("Digite um ano: "));

if (ano % 4 === 0) { //2024 
    if (ano % 100 === 0) { // 24 True
        if (ano % 400 === 0) { //True 
            console.log("Ano bissexto"); //ok
        } else {
            console.log("Ano não bissexto");
        }
    } else {
        console.log("Ano bissexto");
    }
} else {
    console.log("Ano não bissexto"); 
}
