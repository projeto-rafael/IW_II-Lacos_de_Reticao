var A = 80000;
var B = 200000;


var contador = 1;

while(A < B){
    A += (A*(3/100));
    B += (B*(1.5/100)); 
    contador++;
}

console.log(`Será necessário um total de ${contador} Anos, para que o país A ultrapasse o país B em população`);
console.log(`País A População em ${contador} Anos: ${A}`);
console.log(`País B População em ${contador} Anos: ${B}`);


