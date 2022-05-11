var n1 = Number(prompt("Digite um número para a tabuada"));

for(contador = 0; contador <= 10; contador++){
    tabuada = contador * n1;
    console.log(`${n1} x ${contador} = ${tabuada} `);
}