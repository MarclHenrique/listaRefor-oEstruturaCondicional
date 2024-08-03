let prompt =  require("prompt-sync")();

let valor = prompt("Digite um valor: ");

if (valor % 2 === 0){
    console.log("Número PAR");
}
else {
    console.log("Número Primo");
}