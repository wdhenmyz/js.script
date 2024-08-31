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
*/





























