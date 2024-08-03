let prompt =  require("prompt-sync")();

let idade = prompt("Digite um valor: ");
let faixaEtaria = " ";

if (idade >=0 && idade<= 12){
    faixaEtaria = "Criança";
}
else if (idade >= 13 && idade <= 17){
    faixaEtaria = "Adolescente";
}
else if (idade >= 18 && idade <= 59){
    faixaEtaria = "Adulto";
}
else if (idade >= 60){
    faixaEtaria = "Idoso";
}

switch (faixaEtaria){
    case "Criança":
        console.log(`Faixa Etária: ${faixaEtaria}`);
    break;
    case "Adolescente":
        console.log(`Faixa Etária: ${faixaEtaria}`);
    break;
    case "Adulto":
        console.log(`Faixa Etária: ${faixaEtaria}`);
    break;
    case "Idoso":
        console.log(`Faixa Etária: ${faixaEtaria}`);
    break;
    default:
        console.log("Digite uma idade válida");
        
}