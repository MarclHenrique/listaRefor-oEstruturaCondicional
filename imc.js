let prompt = require("prompt-sync")();

let altura = parseFloat(prompt("Digite sua altura: "));
let peso = parseFloat(prompt("Digite seu peso: "));

let imc = peso / (altura * altura);
let fixeimc = imc.toFixed(1);

if (fixeimc <= 18.5){
    console.log(`Abaixo do peso: ${fixeimc}`);
}
else if (fixeimc >= 18.5 && fixeimc <= 24.9){
    console.log(`Peso normal: ${fixeimc}`);
}
else if (fixeimc >= 25.0 && fixeimc <= 29.9){
    console.log(`Sobrepeso: ${fixeimc}`);
}
else if (fixeimc >= 30.0  && fixeimc <= 34.9){
    console.log(`Obesidade grau I: ${fixeimc}`);
}
else if (fixeimc >= 35.0  && fixeimc <= 39.9){
    console.log(`Obesidade grau II: ${fixeimc}`);
}
else if (fixeimc >= 40.0){
    console.log(`Obesidade grau I: ${fixeimc}`);
}
