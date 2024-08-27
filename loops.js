// LOOPS

//esse código 
//let n = 0;
console.log(n); // -> 0
n += 10;
console.log(n); // -> 10
n += 10;
console.log(n); // -> 20
n += 10;
console.log(n); // -> 30
n += 10;
console.log(n); // -> 40
n += 10;
console.log(n); // -> 50
n += 10;
console.log(n); // -> 60
n += 10;
console.log(n); // -> 70
n += 10;
console.log(n); // -> 80
n += 10;
console.log(n); // -> 90
n += 10;

//pode ser escrito assim usando o while na forma de loop
//let n = 0;
while(n < 91) {
    console.log(n); // -> 0, 10, 20, 30, 40, 50, 60, 70, 80, 90
    n += 10;
}

// outro exemplo
/*  let isOver = false;
    let counter = 1; */
while (isOver != true) {
    let continueLoop = confirm(`[${counter}] Continue the loop?`);
    isOver = continueLoop === true ? false : true;
    counter = counter + 1;
}

//pode ser escrito assim usando o while na forma de loop
/*  let isOver = false;
    let counter = 1; */
while (!isOver) {
    isOver = !confirm(`[${counter++}] Continue the loop?`);
}

// outro tipo de loop usa o do....while
/*
    do {
        code block
    } while(condition);
*/

/*
O do...while loop é muito semelhante ao while ,
 a principal diferença é que em um loop while, 
 a condição é verificada antes de cada iteração,
 e do ... while loop,a condição é verificada após cada iteração.
*/

/*  
    let isOver;
    let counter = 1;
*/
do {
    isOver = !confirm(`[${counter++}] Continue the loop?`);
} while (!isOver);


// outro exemplo 
 
let condition = false;
while (condition) {
    console.log("A while loop iteration."); // never executed
}
do {
    console.log("A do ... while loop iteration."); // executed once
} while (condition);


// um terceiro exemplo usa o for loop
/*
    for (inicialização ; condição ; incremento ) {
        block of code
    }
*/

/*
    A declaração de inicialização é executada apenas uma vez, antes da primeira iteração do loop.
    Normalmente, ela é usada para inicializar (ou declarar e inicializar) uma variável que será usada como um contador de loop. 

    Uma declaração de condição é uma expressão que é avaliada para um Boolean antes de cada iteração de loop.
    Se essa expressão for avaliada como true, o loop executará seu código. 
    se não o loop é encerrado e nenhuma outra iteração será executada

    A declaração de incremento é executada após cada iteração do loop.
    Normalmente, ela é usada para incrementar (ou declarar e incrementar) uma variável que é usada como um contador de loop.
    O incremento é executado após cada iteração do loop.

    em comparação com o while loop, o for loop é muito mais simples de escrever.
    poi tudo relacionado ao contador (inicialização, condição de fim de loop, mudança de valor do contador)
    está localizado praticamente em um lugar, o que pode aumentar a legibilidade do código.
*/ 

//exemplo
for (let i = 0; i < 10; i++) {
    console.log(i); // -> 0, 1, 2, 3, 4, 5, 6, 7, 8, 9
}

// Vamos supor que temos um array de quatro elementos de inteiros à nossa disposição e nosso sonho é somar todos esses números.
let values = [10, 30, 50, 100];
let sum = 0;
for (let i = 0; i < 4; i++) {
    sum += values[i];
}
console.log(sum); // -> 190

/*
    Definimos o número de iterações para quatro. 
    É verdade que há exatamente quatro elementos no array, e em nosso exemplo esse número não muda, mas não é uma regra universal.

    Em programas normais, arrays frequentemente mudam dinamicamente durante a execução do programa (elementos são adicionados ou removidos). 
    Neste caso, é definitivamente melhor usar a propriedade array chamada length (nós a mencionamos quando discutimos arrays),
    mostrado no exemplo a seguir.
*/

let values = [10, 30, 50, 100];
let sum = 0;
for (let i = 0; i < values.length; i++) {
    sum += values[i];
}
console.log(sum); // -> 190






 












