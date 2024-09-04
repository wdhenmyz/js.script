/* 
    Erros e exceções em JavaScript

    Vamos tentar gerar erros de sintaxe, semânticos e lógicos em JavaScript, para testes de forma controlada.
    Digamos que queremos escrever uma função de seta simples chamada multiply, que multiplicará os dois argumentos fornecidos:
*/

let multiply = (a b) => a + b; // -> Uncaught SyntaxError: Unexpected identifier
let result = multiply(10, 20);
console.log(result);

// No exemplo, há um erro de sintaxe típico: esquecemos da vírgula entre os parâmetros da função de multiplicação.
// O erro é detectado pelo mecanismo JavaScript, que não nos permite executar o programa. 
// Nós o corrigimos, mas também cometemos outro erro:

let multipl = (a, b) => a + b;
let result = multiply(10, 20); // -> Uncaught ReferenceError: multiply is not defined
console.log(result);

/*
    Desta vez, temos um erro de digitação no nome da função declarada: em vez de multiply , escrevemos multipl. 
    Na chamada, usamos um nome de multiplicação, que não existe. 
    Este é um erro semântico, neste caso fácil de detectar, porque não há função com este nome.
    A execução do programa é interrompida na linha do erro. 

    Preste atenção a duas coisas. 
    Primeiro, as mensagens de erro exibidas no console determinam com bastante precisão o que e onde algo dá errado,
    leia estas informações com atenção, pois elas ajudarão a se livrar do erro. 
    A segunda coisa é o início da mensagem --Uncaught...-- Se um erro pode ser despercebido, provavelmente pode ser capturado. 
    E de fato é, como veremos em um momento

    Primeiro, porém, vamos corrigir o erro e executar o programa novamente:
*/

let multiply = (a, b) => a + b;
let result = multiply(10, 20);
console.log(result); // -> 30 ?

/*
    Sucesso, nenhum erro foi cometido! Mas... o resultado é um pouco suspeito: 
    30 certamente não é o resultado da multiplicação de 10 por 20. 

    Claro, o código ainda não está correto, pois a função deve ser usada para multiplicação, 
    mas por engano inserimos um sinal de adição em vez de multiplicação.
    Este é um erro lógico típico, impossível de detectar automaticamente.

    De um ponto de vista formal, tudo é construído corretamente, 
    mas a lógica da nossa função está incorreta (estamos fazendo com que ela faça algo diferente do que pretendíamos). 
    O interpretador JavaScript não é capaz de detectar tais erros, 
    porque ele não pode saber o que planejamos alcançar escrevendo tal função.

    Vamos corrigir mais uma vez:
*/

let multiply = (a, b) => a * b;
let result = multiply(10, 20);
console.log(result); // -> 200

/*
    Quando o JavaScript detecta erros sintáticos ou semânticos, 
    ele gera e lança objetos específicos contendo informações sobre o erro encontrado. 
    Normalmente, em tal situação, dizemos que um erro foi lançado. 
    
    No caso de erros de sintaxe, o mecanismo JavaScript não nos permite executar o programa e, no console, 
    recebemos informações sobre o que está incorreto. Erros diferentes de erros de sintaxe (por exemplo, erros semânticos) 
    são geralmente chamados de erros de tempo de execução em JavaScript. 
    Eles aparecem enquanto o programa está em execução. 
    Também podemos chamá-los de exceções . 
    
    Por padrão, exceções lançadas interrompem a execução do programa 
    e fazem com que as informações apropriadas apareçam no console 
    (observamos isso em nosso exemplo com o função multiply ). 
    Vamos gerar a situação errônea novamente:
*/

console.log('abc'); // -> abc
conole.log('def'); // -> Uncaught ReferenceError: conole is not defined
console.log('ghi');

/*
    O erro de digitação na palavra console é um erro semântico, em JavaScript chamado de Erro de referência. 
    JavaScript não conhece uma palavra como 'conole'. 
    Como você pode ver, o programa parará de funcionar apenas na segunda linha, 
    e ainda poderá executar a primeira linha corretamente. 
    É possível evitar que o programa pare em tal situação. 
    Isso é chamado de tratamento de exceção (ou, mais genericamente, tratamento de erro). 
    Para tratar exceções geradas em JavaScript (como em muitas outras linguagens), usamos a declaração try/catch.
*/

try {
    console.log('abc'); // -> abc
    conole.log('abc');
} catch (error) {  
    console.log(error.message); // -> conole is not defined 
}

/*
    Se uma exceção for lançada no bloco de código após a palavra-chave try,
    o programa não interrompe completamente, 
    mas pula para a parte do código após a palavra-chave catch e continua dali. 
    Daremos uma olhada mais de perto nessa construção em breve.
*/






