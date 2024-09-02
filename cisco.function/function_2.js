// validação de parãmetros
/*
  Lembra como dissemos que às vezes usamos a palavra-chave return para interromper funções em caso de erros?
  Um bom exemplo é a validação de parâmetros de função.

  Vamos voltar ao exemplo com a função getMeanTemp.
  A última versão que escrevemos precisa de um array de números como argumento. 
  Antes de começar o cálculo, podemos verificar se o valor passado a ele é realmente um array.
*/

function getMeanTemp(temperatures) {
     if (!(temperatures instanceof Array)) {
         return NaN;
     }
     let sum = 0;
     for (let i = 0; i < temperatures.length; i++) {
         sum += temperatures[i];
     }
     return sum / temperatures.length;
}
console.log(getMeanTemp(10));       // -> NaN
console.log(getMeanTemp([10, 30])); // -> 20


// Recursão 
/*
  Durante suas aulas de matemática, você provavelmente se deparou com o conceito de fatoriais => n!=n∙(n-1)∙(n-2)∙... ∙2∙1
  ex: 6!=6∙5∙4∙3 ∙2∙1=720

  Vamos tentar escrever uma função que calculará o fatorial a partir do número fornecido.
  Ele pegará o parâmetro n e retornará o valor calculado.
*/

function factorial (n) {
     let result = 1;
     while (n > 1) {
         result *= n;
         n--;
     }
     return result;
}
console.log(factorial(6)); // -> 720

/*
  Neste caso, utilizamos a abordagem iterativa para calcular o fatorial, ou seja, utilizamos um loop no qual, a cada iteração,
  multiplicamos o resultado anterior por outro elemento da sequência.

  Após a primeira iteração, o resultado é 6, após a segunda, 30, após a terceira, 120, 
  e assim por diante. As iterações são repetidas até o último elemento significativo da sequência, ou seja, até o valor 2 (daí a condição de término do loop n > 1).

  Entretanto, a definição de um fatorial pode ser escrita de uma forma um pouco diferente. 
  Será o fatorial do elemento anterior n - 1 multiplicado por n .
  Por exemplo, 6! é 5! multiplicado por 6.

  Vamos declarar a função novamente, desta vez usando recursão.
*/

function factorial (n) {
     return n > 1 ? n * factorial(n - 1) : 1;
}
console.log(factorial(6)); // -> 720

/*
  Tal definição fatorial usa a recursão, ou seja, referindo uma função a si mesma (mas com um argumento diferente).
  Uma recursão é um mecanismo que permite simplificar a notação formal de muitas funções matemáticas e apresentá-las em uma forma elegante. 
  Também podemos usar recursão com sucesso na programação.

  Para obter um código mais curto e compacto, em vez de uma instrução condicional if, usamos o operador condicional ternário.
  Nele, verificamos se o argumento n é maior que 1. 
  Dependendo disso, retornamos o resultado da multiplicação do número n pelo resultado da chamada factorial(n – 1) ou o valor 1.

  Recursão é comumente usada em programação. No entanto, como em qualquer solução, a recursão deve ser tratada com cuidado.
  Não devemos usá-la onde não podemos estimar o número de chamadas incorporadas.
  Também devemos ter muito cuidado ao formular a condição que interromperá as chamadas da sequência de funções – erros podem causar a suspensão do programa.
*/

// funções como membros de primeira classe
/*
  funções são membros de primeira classe. 
  Este termo significa que funções podem ser tratadas como quaisquer dados, 
  que podem ser armazenados em variáveis ​​ou passados ​​como argumentos para outras funções. 
  Por exemplo, podemos declarar a função showMessage e então armazená-la na variável pequeno.
*/

function showMessage(message) {
     console.log(`Message: ${message}`);
}
let sm = showMessage;
sm("This works!"); // -> Message: This works!
console.log(typeof sm); // -> function
/*
  Podemos armazenar qualquer função que seja acessível neste escopo em uma variável e usar um operador de chamada de função () para executá-la. 
  Podemos verificar se a variável sm agora é uma função usando o operador typeof.

  Mas é importante lembrar que ao atribuir uma função a uma variável, 
  não usamos um operador de chamada de função,
  pois isso executaria a função e atribuiria o resultado da função a uma variável, e não à função em si.
*/

function doNothing() {
     return undefined;
}
let a = doNothing(); // assign result of function call
let b = doNothing;   // assign a function
console.log(typeof a); // -> undefined
console.log(typeof b); // -> function

/*
  No exemplo, o resultado da chamada da função doNothing (ou seja, o valor indefinido retornado pela função) é armazenado na variável a,
  enquanto a própria função doNothing é armazenada na variável b (ou mais precisamente, uma referência à função é armazenada na variável b).

  Esta propriedade é especialmente útil ao passar a função como um parâmetro de chamada para outras funções,
  sobre as quais aprenderemos mais em breve. Por enquanto, vamos testar se algo assim é realmente viável.
*/

function add(a, b) {
     return a + b;
}
function multiply(a, b) {
     return a * b;
}
function operation(func, first, second) {
     return func(first, second);
}
console.log(operation(add, 10, 20)); // -> 30
console.log(operation(multiply, 10, 20)); // -> 200

//  A função de operação recebe como primeiro argumento a função (parâmetro func) e a chama com os outros dois argumentos passados ​​(parâmetros primeiro e segundo).

// Expressões de função

/*
  Para armazenar uma função em uma variável ou passá-la como argumento para chamar uma função, você não precisa necessariamente declará-la previamente e usar seu nome.
  Vamos voltar ao nosso exemplo com a função add:
*/

function add(a, b) {
     return a + b;
}
let myAdd = add;
console.log(myAdd(10, 20)); // -> 30

/*
  Essa forma de definir uma função é chamada de expressão de função. 
  Nesse caso, é especificamente uma expressão de função nomeada, porque a função tem um nome (add). 
  Se houver uma expressão de função nomeada, provavelmente também haverá uma expressão de função sem nome,
  ou precisamente, anônima. Na verdade, basta remover o nome após a palavra-chave function para alterar a função de nomeada para anônima.
*/

let myAdd = function(a, b) {
     return a + b;
}
console.log(myAdd(10, 20)); // -> 30

 /*
   Pode parecer um pouco incompreensível quando você usa um nome (embora seja um nome de variável) para se referir a uma função.
   Neste caso, trata-se de anonimato, ou seja, a ausência de um nome, na própria definição de uma função.
   Isso ficará muito mais evidente ao passar uma função como parâmetro de chamada para outra função.
 */

function operation(func, first, second) {
     return func(first, second);
}
let myAdd = function(a, b) {
     return a + b;
}
console.log(operation(myAdd, 10, 20)); // -> 30
console.log(operation(function(a, b) {
     return a * b;
}, 10, 20)); // -> 200

/*
  No primeiro passo, declaramos a função operation (é uma função nomeada, e usamos a declaração function aqui, então nos referiremos à função pelo seu nome).
  No próximo passo, definimos uma função anônima, que armazenamos na variável myAdd (usamos uma expressão de função). 
  Chamamos a função de operação, passando a função myAdd e valores 10 e 20 como argumentos.

  O resultado é fácil de prever. Só fica interessante quando chamamos a função operation novamente.
  Desta vez, o primeiro argumento é a função anônima (novamente a expressão de função), que é definida diretamente em uma chamada de operação.

  O resultado é uma multiplicação, embora o nome da nova função (ou a variável na qual ela poderia ser colocada) não apareça em lugar nenhum.
  A função foi definida apenas para passá-la uma vez para a função de operação. 
  À primeira vista, pode parecer um mecanismo completamente inútil, mas no mundo real, é usado com muita frequência.
*/

// CALLBACKS
/*
  Funções que são passadas como argumentos para outras funções podem parecer bem exóticas e não muito úteis, mas, na verdade, elas são uma parte muito importante da programação.
  Tão importantes que elas até têm seu próprio nome. Elas são funções de retorno de chamada .
*/

/*
  Callbacks síncronos
  
  A execução síncrona é a maneira mais natural de ver como o programa funciona. 
  Instruções subsequentes são executadas na ordem em que são colocadas no código. 
  Se você chamar uma função, as instruções nela serão executadas no momento da chamada.
  Se passarmos outra função para esta função como um argumento, e a chamarmos dentro de uma função externa também, então todas as instruções manterão sua ordem natural.
*/

let inner = function() {
     console.log('inner 1');
}
let outer = function(callback) {
     console.log('outer 1');
     callback();
     console.log('outer 2');
}
console.log('test 1');
outer(inner);
console.log('test 2');
/*
  A execução do código acima fará com que o console imprima o seguinte texto nesta ordem exata:
  
  test 1
  outer 1
  inner 1
  outer 2
  test 2 

  Portanto, a ordem das ações resultantes da ordem de chamada dos comandos e funções é mantida.
  No entanto, essa ordem pode ser perturbada sob certas circunstâncias especiais.
*/

/*
  Callbacks assíncronos

  No caso de JavaScript do lado do cliente em execução em um navegador, ele é limitado à programação baseada em eventos, ou seja, a resposta assíncrona a certos eventos. 
  Um evento pode ser um sinal enviado por um timer, uma ação do usuário (por exemplo, pressionar uma tecla ou clicar em um elemento de interface selecionado)
  ou informações sobre o recebimento de dados do servidor.
  Usando funções apropriadas, combinamos um tipo específico de evento com uma função de retorno de chamada selecionada, que será chamada quando o evento ocorrer.

  Um dos casos mais simples quando há uma execução assíncrona de instruções é o uso da função setTimeout. 
  vamos modificar um pouco o exemplo anterior:
*/

let inner = function() {
console.log('inner 1');
}
let outer = function(callback) {
console.log('outer 1');
setTimeout(callback, 1000) /*ms*/;
console.log('outer 2');
}
console.log('test 1');
outer(inner);
console.log('test 2');
// Na função externa, não chamamos callback() imediatamente, mas passe para setTimeout, que o executa com um atraso de 1000 milissegundos (um segundo).

/*
  Esta função recebe outra função (um retorno de chamada) e o tempo expresso em milissegundos como argumentos.
  A função de retorno de chamada é executada após o tempo especificado e, enquanto isso, a próxima instrução do programa (colocada no código apóssetTimeout) será executado.
  Assim, o momento em que a função de retorno de chamada é chamada não é determinado por sua ordem, mas por um atraso imposto arbitrariamente.
  O atraso se aplica somente à função de retorno de chamada dada asetTimeout, enquanto o restante do código ainda é executado de forma síncrona.

  desta vez a seguinte sequência de mensagens aparecerá no console (a última com um atraso de um segundo):
  test 1
  outer 1
  outer 2
  test 2
  ...
  inner 1
*/






















