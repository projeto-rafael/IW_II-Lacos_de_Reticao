
var impar = 0;
var par = 0;
for (contador = 1; contador <= 10; contador++){
    var n1 = Number(prompt("Digite um número: "));

    if((n1 % 2) == 1){
        console.log("Número Ímpar",n1);
        impar++;
    }

    else{
        console.log("Número Par", n1)
        par++; 
    }
}

console.log("Quantidade de números PARES: ", par);
console.log("Quantidade de Números ÍMPARES: ", impar);

typeof par