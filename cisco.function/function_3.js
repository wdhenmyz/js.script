// setTimeout e setInterval

/*
  A função setTimeout é usada quando você deseja causar uma ação atrasada. Uma função semelhante é setInterval. 
  Desta vez, a ação também é realizada com um atraso, mas periodicamente, então ela é repetida em intervalos fixos.
  Enquanto isso, o programa principal é executado, e a cada tempo especificado, o retorno de chamada dado como argumento para uma chamada setInterval é chamado.

  Curiosamente, o A função setInterval retorna um identificador durante a chamada,
  que pode ser usado para remover o timer usado nela (e consequentemente parar a chamada da função de retorno de chamada cíclica). 
*/

let inner = function() {
console.log('inner 1');
}
let outer = function(callback) {
console.log('outer 1');
let timerId = setInterval(callback, 1000) /*ms*/;
console.log('outer 2');
setTimeout(function(){
     clearInterval(timerId);
}, 5500);
}
console.log('test 1');
outer(inner);
console.log('test 2');

/*
  Primeiro, executamos setInterval, que chamará a função de retorno de chamada (ou seja, a função inner) em intervalos de um segundo.
  Então chamamos setTimeout, que desligará o temporizador associado ao chamado anteriormente setInterval após 5,5 segundos.
  Como resultado, a função inner deve ser chamada cinco vezes. Enquanto isso, o resto do programa será executado...

  O resultado da execução do programa deve ser as seguintes mensagens, que aparecerão no console:
  teste 1
  outer 1
  outer 2
  test 2
  ...
  inner 1
  inner 1
  inner 1
  inner 1
  inner 1
*/






