let prompt =  require("prompt-sync")();

let valor = prompt("Digite um valor: ");

if (valor > 0){
    console.log(`o número ${valor} é positivo`);
}else if(valor < 0){
    console.log(`o número ${valor} é negativo`);
}else{
    console.log(`o número é igual a ${valor}`);
}