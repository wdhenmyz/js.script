/*
  Funções são um dos elementos mais fundamentais da programação na maioria das linguagens e é difícil imaginar escrever qualquer programa sem elas.
  usamos funções criadas e fornecidas por outros programadores. No caso de console.log, ele é, na verdade, uma parte integral da linguagem fornecida como uma função,
  mas há muitas funções que fornecem alguma nova funcionalidade e são escritas por terceiros (empresas, organizações ou desenvolvedores privados).

  Essas funções geralmente são disponibilizadas na forma de bibliotecas (ou seja, conjuntos de funções), 
  que são dedicadas a resolver uma classe específica de problemas, por exemplo, Leaflet (mapas), D3.js (visualização de dados) ou jQuery (manipulação de DOM).

  Uma coisa é usar funções prontas, mas outra bem diferente é escrevê-las para suas próprias necessidades.
  Funções permitem, entre outras coisas, uma divisão lógica mais fácil do programa, reutilizando o mesmo código e testando partes selecionadas dele.
*/

// PRÁTICA

/*
  Exercício 1: Arrays em JavaScript têm umorganizarmétodo disponível que, como você pode imaginar, permite que você classifique seus elementos.
  Este método recebe como argumento uma função que irá comparar dois elementos do array.
  A função deve retornar zero se considerarmos os argumentos como iguais, um valor menor que zero se considerarmos o primeiro menor que o segundo, e um valor maior que zero caso contrário.
  Dê uma olhada no exemplo
*/

let numbers = [50, 10, 40, 30, 20];
function compareNumbers(a, b) {
     let retVal = 0;
     if (a < b) {
         retVal = -1;
     } else if(a > b) {
         retVal = 1;
     }
     return retVal;
}
let sorted = numbers.sort(compareNumbers);
console.log(sorted); // [10, 20, 30, 40, 50]

/*
  Tarefa 1 A. Tente modificar o pedaço de código acima para torná-lo o mais curto possível. Sugestões:

  use uma função anônima;
  use uma função de seta;
  considere pular a declaração if.
*/

let number = prompt("Digite um número aleatório"); 
if(number > 90 && number < 110) {
  alert("Bingo!"); 
} else { 
    alert("Errar"); }

/*
  Tarefa 1 B. Em seguida, modifique a função para que os elementos sejam classificados em ordem decrescente, não em ordem crescente como no exemplo.
*/

let number = [50, 10, 40, 30, 20];
let classify = number.sort((a, b) => b - a);
console.log(classify); // [10, 20, 30, 40, 50]

/*
  Exercício 2: Escreva três funções com os nomes add,sub, e mult, que receberá dois argumentos numéricos.
  As funções são para verificar se os argumentos fornecidos são inteiros (use Number.isInteger).
  Caso contrário, eles retornam NaN, caso contrário, retornam o resultado da adição, subtração ou multiplicação, respectivamente.
  As funções devem ser declaradas usando uma instrução function.
*/

function add(a, b) {
    if (!Number.isInteger(a) || !Number.isInteger(b)) {
        return NaN;
    }
    return a + b;
}

function sub(a, b) {
    if (!Number.isInteger(a) || !Number.isInteger(b)) {
        return NaN;
    }
    return a - b;
}

function mult(a, b) {
    if (!Number.isInteger(a) || !Number.isInteger(b)) {
        return NaN;
    }
    return a * b;
}

// Exercício 3: Reescreva as funções da tarefa anterior usando uma expressão de função de seta, tentando escrevê-las na forma mais curta possível.

let add = (a, b) => !Number.isInteger(a) || !Number.isInteger(b) ? NaN : a + b;
let sub = (a, b) => !Number.isInteger(a) || !Number.isInteger(b) ? NaN : a - b;
let mult = (a, b) => !Number.isInteger(a) || !Number.isInteger(b) ? NaN : a * b;

/*
  Exercício 4: Escreva uma função action que receberá a função de retorno de chamada como seu primeiro argumento e os outros dois argumentos como números.
  Como uma função de retorno de chamada, você poderá passar uma das três funções da tarefa anterior.
  A função action chamará a função de retorno de chamada passada a ela e retornará o resultado obtido. 
  A função de retorno de chamada aceitará o segundo e o terceiro argumentos da chamada de ação.
*/

let action = (callback, a, b) => callback(a, b);
// or
let action = function (callback, a, b) {
    return callback(a, b);
}
// or
function action(callback, a, b) {
    return callback(a, b);
}

// Exercício 5: Escreva um programa que imprima (no console) inteiros consecutivos 10 vezes, em intervalos de dois segundos (comece com o número 1).
// Use as funções setInterval, clearInterval and setTimeout.

let counter = 1;
let intervalId = setInterval(function () {
    console.log(counter++);
}, 2000);
setTimeout(function () {
    clearInterval(intervalId)
}, 20000);

/*
  Exercício 6: Escreva uma função que irá calcular o n-ésimo elemento da sequência de Fibonacci.
  Então, cada elemento da sequência (exceto os dois primeiros) é a soma dos dois anteriores. 
  Por exemplo: F1 = 1, F2 = F1 + F0 = 1, F3 = F2 + F1 = 2 e F6 = F5 + F4 = 8 . 
  A função deve usar recursão . Na definição, use uma expressão de função (armazene uma função anônima em uma variável).
*/

let fibbRec = function (n) {
    let retVal = 0;
    if (n != 0) {
        if (n === 1) {
            retVal = 1;
        } else {
            retVal = fibbRec(n - 1) + fibbRec(n - 2);
        }
    }
    return retVal;
}

console.log(fibbRec(4)); // -> 3
console.log(fibbRec(7)); // -> 13

// Exercício 7: re-escreva a função do exercício 5 usando função de flecha, mas simplifique o máximo que puder

let fibb = n => n == 0 ? 0 : (n == 1 ? 1 : fibb(n - 1) + fibb(n - 2));
console.log(fibb(4)); // -> 3
console.log(fibb(7)); // -> 13

// Exercício 8: Escreva uma versão iterativa da função do Exercício 5 (use o loop for). Declare a função usando uma instrução de função.

function fibbIter(n) {
    let a = 0, b = 1;
    for (let i = 2; i <= n; i++) {
        let c = a;
        a = b;
        b += c;        
    }
    return b;
}























