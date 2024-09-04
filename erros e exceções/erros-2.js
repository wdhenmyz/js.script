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

// Erros sem exceções?
// Em JavaScript, nem todas as situações errôneas geram exceções. Muitas delas são tratadas de uma forma ligeiramente diferente. O melhor exemplo são os erros aritméticos .

console.log(100 / 0); // -> Infinity
console.log(100 * "2"); // -> 200
console.log(100 * "abc"); // -> NaN

/*
    Nenhum dos comandos acima gerará uma exceção, embora eles não pareçam a aritmética mais correta.
    Dividir por zero resultará em um valor Infinity . A multiplicação de um número por uma string, que representará um número, converterá automaticamente essa string em um número (e então executará a multiplicação). 
    Uma tentativa de executar uma operação aritmética em uma string que não representa um número (ou seja, que não pode ser convertida) resultará emNaN(não é um número).
    Pelo menos dois desses casos estão claramente errados (o primeiro e o terceiro), mas em vez de exceções, a informação sobre o erro é o valor específico que é retornado.

    Vejamos mais um exemplo:
*/

console.log(Math.pow("abc", "def")); // -> NaN

/*
    dessa vez usamos o method pow de Math.
    que é usado para elevar um número dado à potência dada. O objeto Math será discutido nas próximas partes do curso, mas neste ponto basta-nos dizer que Math.pow
    simplesmente uma função que recebe dois números como argumentos e retorna o resultado de sua potência. 
    No entanto, as duas sequências de caracteres que fornecemos a esta função são números difíceis de chamar.
    A função não gera uma exceção, no entanto, mas retorna o valor NaN.

    A conclusão é bem simples – se você estiver aprendendo sobre uma nova função ou operador, 
    você tem que verificar na documentação (por exemplo, na página MDN) como eles se comportam em caso de erros. 
    Alguns deles gerarão exceções, enquanto outros retornarão alguns valores específicos. 
    Dependendo disso, você será capaz de se preparar adequadamente para lidar com erros usando o método try ou instruções condicionais simples.
    
    A propósito, para os exemplos mostrados, a solução mais sensata seria verificar se os valores fornecidos realmente são números (lembra do operador type of?).
*/

// Confiança limitada

/*
    Programas não são executados no vácuo. 
    Normalmente, durante sua execução, há interações com usuários (por exemplo, inserindo dados necessários para calcular certos valores) 
    ou outros programas ou sistemas (por exemplo, baixando dados do servidor). 
    
    O comportamento de usuários e outros sistemas deve ser tratado com cautela, e não podemos presumir que o usuário fornecerá dados no formato que exigimos,
    ou que o servidor de dados sempre funcionará. Essas situações inesperadas também serão fontes de erros em nosso programa.
    
    E embora não dependam diretamente de nós, é nossa responsabilidade antecipar situações potencialmente perigosas.
    
    Se, por exemplo, escrevermos uma calculadora na qual o usuário insere seus valores, então provavelmente deveríamos verificar se o divisor não é zero antes de fazermos a divisão. 
    Teoricamente, o usuário deve saber que não dividimos por zero, mas somos responsáveis ​​pela estabilidade do programa. 
    
    Não acredite no usuário ou em outros sistemas.
    
    Preveja o que pode dar errado e verifique os dados recebidos antes de usá-los em seu programa.

    Vamos escrever um pedaço de código que pedirá para você digitar dois números. Queremos então exibir o resultado da divisão do primeiro número pelo segundo:
*/

let sX = prompt("Enter the first number");
let sY = prompt("Enter the second number");
let x = Number(sX);
let y = Number(sY);
if (Number.isFinite(x) && Number.isFinite(y) && y !== 0) {
    console.log(x / y);
} else {
    console.log("incorrect arguments");
}

/*
    Você provavelmente se lembra da função de prompt, que exibe uma caixa de diálogo na qual podemos inserir um valor. 
    Prompt retornará o valor inserido, sempre como uma string (mesmo que o usuário insira um número, por exemplo, ele digite 1024, mas obtemos a string "1024").
    
    Estamos convertendo explicitamente essa cadeia de caracteres em um número usando o construtor Number (isso será discutido em detalhes no próximo curso). 
    Como não acreditamos no usuário, prevemos que, em vez de um número, ele poderia ter dado uma string como "abcd" ou um segundo valor igual a "0". 
    
    Portanto, antes de realizarmos a divisão, verificamos se podemos aceitar os valores convertidos. Usamos o método Number.isFinite para essa finalidade. 
    Ele retorna true se o argumento for um número correto e false se for, por exemplo, Infinity ou NaN. Além disso, verificamos se o divisor não é zero.
*/





















