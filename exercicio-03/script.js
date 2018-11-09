/*
DESAFIO

Crie um programa que reordene vetores. Esse programa deve:
- Receber 10 valores de mesmo tipo (numéricos ou texto) e coloque-os em um vetor;
- Ordene o vetor em ordem crescente e mostre o resultado ao usuário;
*/

let valores= [];
let valoresOrdenados= [];

// let i=0;
// while(i<10){
    // valores.push(prompt('Digite um número:'));
//     i++;
// }

for(let i=0; i<10; i++){
    // mesma coisa q o while ali em cima
    // sempre nessa ordem> declarar o contador, estabelecer condição, fazer o passo
    valores.push(Number(prompt('Digite um número:')));
}

for(let i=0; i < valores.length; i++){
    let valorAtual= valores[i];
    let j= i-1;
    let indice= i;

    if(j>=0){
        while (j>=0){
            let valorAnterior= valoresOrdenados[j];
            
            if(valorAtual<valoresAnterior)
            indice
        }
    }

    valoresOrdenados.splice(indice, 0, valorAtual);

    // valoresOrdenados.push(valorAtual);
    // push adiciona sempre no fim
}


// NÃO CONSEGUIIII
// PEGAR NO GITHUB