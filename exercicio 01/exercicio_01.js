var n1 = Number(prompt("Digite o um número entre 0 e 10"));

if ((n1 >= 0) && (n1 <=10) ){
    alert("Número válido");
}
else{
    while((n1 < 0) || (n1 > 10)){
        alert("Número inválido, apenas digite um número entre 0 e 10! ");
        var n1 = Number(prompt("Digite um número que seja maior que 0 e menor que 10!"));
    }
}
