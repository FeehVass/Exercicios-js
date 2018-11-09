/*
Crie um programa que exiba o resultado da tabuada de um número digitado pelo usuário. O programa deve:
- Receber um input numérico do usuário;
- Questionar se o usuário quer ver o resultado de uma multiplicação específica:
    - Se OK (quer ver a multiplicação específica):
        - Receber um segundo input numérico do usuário;
        - Mostrar ao usuário o resultado da multiplicação do primeiro e do segundo valor;
            Exemplo:
                valor1 X valor2 = resultado
    - Se Cancelar (não quer ver a multiplicação específica):
        - Mostrar ao usuário o resultado de todas as multiplicações, do 0 ao 10;
            Exemplo:
                valor X 1 = resultado
                valor X 2 = resultado
                valor X 3 = resultado
                ...

- Bônus: Garantir que o usuário digite números nos inputs, repetindo a pergunta caso ele digite qualquer outra coisa que não números;
 */

 let valor1= Number(prompt('Digite o valor a ser multiplicado.'));

 if(confirm('Você gostaria de multiplicar por um número específico?')){
    let valor2= Number(prompt('Digite o segundo valor da multiplicação.'));
    alert(`O resultado foi ${Number(valor1) * Number(valor2)}`);
 }
 else{
    let i=0;
    let textoDoAlert='';

    while (i<=10){
        textoDoAlert += `${valor1} * ${i} = ${Number(valor1) * Number (i)}`;
        i++;
    }
    alert(textoDoAlert);
 }
