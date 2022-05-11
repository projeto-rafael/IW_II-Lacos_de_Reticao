
var base = Number(prompt("Digite o número para a BASE:"));
var expoente = Number(prompt("Digite o número para a EXPOENTE:"));
var contador = 1;

potencia = base;

while (contador < expoente){
    potencia *= base;
    contador++;
}
console.log(potencia);
