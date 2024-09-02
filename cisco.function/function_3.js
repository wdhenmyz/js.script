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

  Geralmente, no entanto, chamadas de função assíncronas estão relacionadas a situações ligeiramente diferentes. 
  Elas são determinadas por eventos não relacionados a temporizadores, mas sim gerados fora do programa.
  elas podem ser, por exemplo, ações executadas pelo usuário, como um clique do mouse em um elemento de interface em uma página.
*/

/*
  Se executarmos o código JavaScript no lado do cliente, no navegador, ele sempre será associado ao site.
  A janela na qual esta página está localizada é representada no JavaScript do lado do cliente por uma variável global window.
  O objeto window tem um método (ou sua própria função) chamado addeventlistener. 
  Esta função permite que você registre uma determinada ação a ser executada em resposta a um evento relacionado à janela.
  
  Tal evento pode ser um "clique", que é um único clique do mouse em qualquer lugar da página
  (há um conjunto limitado de eventos nomeados associados a um objeto específico, aos quais ele pode reagir).
  A ação a ser tomada é passada para o método addeventlistener como uma função de retorno de chamada.
*/

window.addEventListener("click", function() {
     console.log("clicked!");
});

/*
  quando você clica em qualquer lugar da página uma mensagem deve aparecer no console: "clicked!".
  Nossa função não é chamada até que o evento "click" ocorra, o que é absolutamente assíncrono.
  Enquanto isso, entre cliques subsequentes, o restante do programa poderia ser executado, se tivéssemos vontade de escrevê-lo.
  Na verdade, não é uma boa ideia conectar uma resposta de clique a um objeto de janela.
  Na maioria das vezes, tais ações são associadas a elementos específicos da interface (botões, caixas de seleção, etc.) que permitem sua diferenciação.
  Entretanto, isto é apenas para demonstrar uma chamada de função com um evento gerado pelo usuário.
*/

/*
  FUNÇÕES DE SETA

  Uma função de seta é uma forma mais curta de uma expressão de função.
  Uma expressão de função de seta é composta de: parênteses contendo zero a múltiplos parâmetros (se exatamente um parâmetro estiver presente, os parênteses podem ser omitidos);
  uma seta que se parece com isso "=>" ;e o corpo da função, que pode ser cercado por chaves se o corpo for mais longo.
  Se uma função de seta tiver apenas uma instrução e retornar seu valor, podemos omitir a palavra-chave return , pois ela será adicionada implicitamente.
*/

















