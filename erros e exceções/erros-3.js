// Mais alguns detalhes sobre erros e exceções de JavaScript

/*
  Vamos tentar organizar as informações sobre erros e exceções e, acima de tudo, seu tratamento. 
  Desta vez, vamos olhar para o problema de um ponto de vista estritamente funcional. 
  Começaremos com uma visão geral dos tipos mais importantes de erros detectados pelo JavaScript,
  discutiremos em mais detalhes a construção try... catch e mostraremos que também podemos lançar exceções diretamente.

  Tipos básicos de erros
  Existem alguns tipos subjacentes de erros que o JavaScript produz.
  Na maioria das vezes, especialmente no começo, você encontrará erros de sintaxe e referência.
  Também discutiremos erros de tipo e intervalo.
*/

/*    Erro de Sintaxe
Como dissemos anteriormente, um Erro de Sintaxe aparece quando um código está malformado, quando há erros de digitação nas palavras-chave, 
parênteses ou colchetes não correspondentes, etc. 
O código não pode nem ser executado, pois o JavaScript não consegue entendê-lo. O erro correspondente é, portanto, lançado antes que o programa seja iniciado.    */

"use strict";
iff (true) { //-> Uncaught SyntaxError: Unexpected token '{'
    console.log("true");
}
/*   No exemplo acima, cometemos um erro de digitação na palavra-chave if, adicionando uma letra f adicional.
  O mecanismo JavaScript trata o nome desconhecido como uma chamada de função (ele encontra os colchetes depois de iff) e é surpreendido pela presença de uma chave.


Erro de referência
Já vimos isso. Ocorre quando tentamos acessar uma função ou variável que não existe.
O mecanismo JavaScript não sabe o significado do nome fornecido, então é um erro que classificaremos como um erro semântico.
A exceção correspondente é lançada no momento da execução do programa, quando a instrução errada é alcançada (ou seja, em JavaScript, erros semânticos são erros de tempo de execução).  /*

let a = b; // -> Uncaught ReferenceError: b is not defined
// A tentativa de declarar a variável a não é bem-sucedida porque, ao mesmo tempo, queremos inicializá-la com o valor da variável b.
// A variável b não foi declarada em nenhum lugar antes, então o mecanismo JavaScript não conhece esse nome.

fun(); / -> Uncaught ReferenceError: fun is not defined
//Desta vez, tentamos chamar a função fun. Se não a declaramos antes, e não há nenhuma função com este nome entre as funções JavaScript padrão, a chamada termina em erro.

/*  Erro de tipo
  Este tipo de erro ocorre quando um determinado valor não é do tipo esperado (ou seja, você tenta executar uma operação nele que não é aceitável).
  Exemplos típicos são alterar o valor constante ou verificar o comprimento de uma variável que não é uma string. 
  Este erro é particularmente importante ao trabalhar com objetos que estão fora do escopo deste curso (falaremos sobre eles na próxima parte do curso).
  Este é um erro típico de erro de tempo de execução, então a exceção apropriada será lançada enquanto o programa estiver em execução, após atingir a instrução problemática.   */

const someConstValue = 5;
someConstValue = 7; // -> Uncaught TypeError: Assignment to constant variable.
// A tentativa de armazenar o novo valor na constante someConstValue falhou por motivos óbvios, resultando em um TypeError.

let someNumber = 10;
someNumber.length(); // -> Uncaught TypeError: someNumber.length is not a function
// Desta vez, tentamos tratar o conteúdo da variável someNumber como uma string, e verifique seu comprimento. O mecanismo JavaScript percebe que a variável armazena um número, e tal operação não é permitida.


/*   Erro de alcance
  Esse tipo de erro é gerado quando você passa um valor para uma função que está fora de seu intervalo aceitável.
  
  Novamente, é um erro de tempo de execução , e a exceção é lançada enquanto o programa está em execução, após atingir a instrução errada. 
  Na verdade, essa exceção é mais útil ao escrever suas próprias funções e lidar com erros. Você pode então lançar uma exceção em certas situações.  */

let testArray1 = Array(10);
console.log(testArray1.length); // -> 10
let testArray2 = Array(-1); // -> Uncaught RangeError: Invalid array length
console.log(testArray2.length);

/*   No exemplo, tentamos criar dois arrays, usando o construtor (ou seja, função de fato)Variedade. 
  Se passarmos um argumento para esta função, ele será tratado como o tamanho do array recém-criado.
  O primeiro array (testArray1) é criado sem nenhum problema. Como você pode imaginar, criar umtestArray2uma matriz com comprimento negativo falha.
  
  Outros erros
  Existem mais alguns tipos de erro: Erro de avaliação, Erro Interno, e Erro URI, mas são bastante raros*/

/*  A declaração try...catch
  Como dissemos antes, exceções interrompem a execução do programa.
  A construção try...catch, que também mencionamos antes, permite que você altere essa ação padrão. 
  O programa interromperá o que está fazendo no momento, mas não será encerrado automaticamente. 
  A sintaxe para try...catch se parece com isso:  */

try {
    // code to try
} catch (error) {
    // code to run in case of an error, which throw an exception
}

/*   A premissa básica é simples: se tivermos um pedaço de código que pode dar errado, podemos incluí-lo na cláusula try.
  O JavaScript tentará executar esse código e, se ocorrer algum erro e uma exceção for lançada, o código dentro do bloco catch será executado;
  se o código try for executado sem erros, o bloco catch será ignorado.
  Após executar os comandos do bloco catch, o programa continuará a ser executado a partir da primeira instrução fora da instrução try...catch.

  Observe que a palavra-chave catch é seguida por parênteses contendo o parâmetro error. 
  Este é um nome de variável que conterá informações sobre o erro que foi capturado e pode ter qualquer nome válido,
  mas os nomes error, err ou apenas e são comumente usados.
  No caso de uma exceção lançada pelo JavaScript, o objeto error conterá informações sobre o tipo de erro
  e será convertido em uma string para ser registrado ou processado de qualquer maneira que o desenvolvedor precisar.
  vamos modificar o código que vimos anteriormente e que sabemos com certeza que gera erros:  */

try {
    let a = b;
} catch (error) {
    console.log("Caught " + error); // -> Caught ReferenceError: b is not defined
}
console.log("We handled the exception!"); // -> we handled the exception!

/*
  A declaração que produz ReferenceError agora está dentro do bloco try. 
  O resultado é que nosso código não é mais interrompido por erros. 
  E podemos reagir a ele no bloco catch. 
  Neste exemplo, registramos uma mensagem sobre o erro.
  O primeiro erro que é lançado no bloco try sempre será capturado, a execução pulará para o bloco catch e nenhum outro erro no bloco try será capturado.
  O importante é que depois de sair do bloco catch, o programa continuará a funcionar normalmente (no nosso caso, ele escreverá "Nós tratamos da exceção!" no console).

  Observe que try...catch não funcionará em um SyntaxError. 
  Isso não deve ser uma surpresa para você. 
  Como dissemos várias vezes antes, se o mecanismo JavaScript detectar um erro de sintaxe,
  ele não permitirá que você execute o programa. Se o programa não foi executado, 
  é bastante difícil imaginar que ele possa reagir de alguma forma ao que aconteceu.

  >>>> Tarefa
  > Reescreva todos os exemplos mostrados de tal forma que os erros sejam capturados por uma declaração try...catch.  */

// Tratamento de exceção condicional
/*  Às vezes, queremos ser capazes de reagir de forma diferente a tipos específicos de erros dentro do bloco catch.
  Podemos fazer isso usando o operador instanceof.
  Discutiremos o operador em si mais adiante, porque é um tópico bastante complicado.
  Por enquanto, basta saber como podemos usá-lo ao lidar com erros.

  A sintaxe para o operador instanceof se parece com isso:  */

variable instanceof type

// Se, por exemplo, recebermos um erro no bloco catch (passado como argumento de erro), podemos verificar se ele é do tipo ReferenceError da seguinte maneira:

let result = error instanceof ReferenceError;

/*  O operador instanceof retorna um boolean, então esta expressão retornará true se a variável de erro realmente contiver um tipo ReferenceError, e false se não contiver.
Podemos usar instruções if...else ou switch para então executar código diferente no caso de erros diferentes, se necessário.

  Neste exemplo, podemos ver como podemos reagir de uma maneira específica apenas ao tipo de erro selecionado:  */

let a = -2;
try {
    a = b;
} catch (error) {
    if (error instanceof ReferenceError) {
        console.log("Reference error, reset a to -2"); // -> Reference error, reset a to -2
        a = -2;
    } else {
        console.log("Other error - " + error);
    }
}
console.log(a); // -> -2

/*  É importante saber que qualquer variável que seja declarada usando a palavra-chave let dentro de um bloco try não é acessível no bloco catch (nem no bloco finally, que será discutido em um momento).
  Se você não tem certeza do porquê disso, volte por um momento para o capítulo sobre declarações de variáveis ​​e seu escopo de visibilidade (o tópico escopo do bloco).  */

