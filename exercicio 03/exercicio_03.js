var a = Number(prompt("Digite a população do País A: "));
var cresa = Number(prompt("Agora digite o valor anual de crescimento dessa país: "));

var b = Number(prompt("Digite o população do País B: "));
var cresb = Number(prompt("Agora digite o valor anual de crescimento desse país: "));

var contador = 1;

while(a < b){
    a += (a*(cresa/100));
    b += (b*(cresb/100)); 
    contador++;
}

console.log(`Será necessário um total de ${contador} Anos, para que o país A ultrapasse o país B em população`);
console.log(`País A População em ${contador} Anos com o Crescimento de ${cresa}% : ${a}`);
console.log(`País B População em ${contador} Anos com o Crescimento de ${cresb}% : ${b}`);