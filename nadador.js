let prompt =  require("prompt-sync")();

let idade = prompt("Digite sua idade: ");

if (idade >= 5 && idade <= 7){
    console.log("Sua categoria é Infantil A");
}else if (idade >= 8 && idade <= 10){
    console.log("Sua categoria é Infantil B");
}
else if (idade >= 11 && idade <= 13){
    console.log("Sua categoria é Juvenil A");
}
else if (idade >= 14 && idade <= 17){
    console.log("Sua categoria é Juvenil B");
}
else if (idade >= 18){
    console.log("Sua categoria é Adulto");
}
