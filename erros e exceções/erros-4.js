// A declaração finally
/*  O último bloco opcional da instrução try é o bloco finally. 
  Ele pode ser usado com ou sem o bloco catch e é sempre executado após os blocos try e catch,
  independentemente de algum erro ser lançado. A sintaxe para try... finalmente fica assim: */
try {
    // code to try
} finally {
    // this will be always executed
}

// Vamos tentar fazer uma substituição correta para a variável a dentro do bloco try.
let a = 10;
try {
    a = 5;
} finally {
    console.log(a); // -> 5
}
console.log(a); // -> 5

/*  O novo valor foi armazenado, sem chamar um erro, na variável a.
  Então o conteúdo do bloco finally é executado, ou seja, o novo valor da nossa variável é exibido no console.
  O programa continua após sair do bloco finally, exibindo nossa variável novamente. 
  Nada surpreendente, tudo simples e previsível.

  Vamos dividir nosso exemplo tentando fazer referência a uma variável inexistente, b.
  Como você pode imaginar, isso gerará um erro ReferenceError:  */
let a = 10;
try {
    a = b;  // ReferenceError
} finally {
    console.log(a); // -> 10
}
console.log(a);

/*  O que está acontecendo dessa vez? A exceção (ReferenceError) interrompe o programa no bloco try.
  Como o mecanismo JavaScript não consegue encontrar o bloco catch,
  ele imediatamente pula para o bloco finally, executando seu conteúdo e encerrando seu trabalho.

  O bloco finally também pode ser usado junto com o bloco catch, pois ambos são opcionais,
  mas pelo menos um deles é necessário para a instrução try e, se nenhum deles estiver presente, um SyntaxError é lançado.  */

let a = 10;
try {
    a = b;  // ReferenceError
} catch (error) {
    console.log("An Error!"); // -> An Error!
} finally {
    console.log("Finally!"); // -> Finally!
}
console.log(a); // -> 10
//  Neste caso, a exceção causa um salto para o bloco catch, depois para o bloco finally. O programa então continua a trabalhar fora da declaração try...catch.

//  Por que deveríamos usar um finally block?
let a = 10;
try {
    a = b;  // ReferenceError
} catch (error) {
    console.log("An Error!");
}
console.log("Finally!");

/*  Este código terá um resultado similar ao do exemplo anterior: ele registrará An Error! e então Finally!.
É verdade que neste exemplo simples, ambos os scripts se comportarão da mesma forma, mas há pequenas diferenças,
e o mais importante é que o bloco finally será executado mesmo quando um erro for lançado do bloco catch.  */

let a = 10;
try {
    a = b;  // First ReferenceError
} catch (error) {
    console.log(b); // Second ReferenceError
 
}
console.log("Finally!");
//  Agora a última chamada console.log nunca será executada, pois outro erro (desta vez não capturado) é lançado no bloco catch. Isso não acontecerá se usarmos o bloco finally assim:

let a = 10;
try {
    a = b;  // First ReferenceError
} catch (error) {
    console.log(b); // Second ReferenceError
 
} finally {
    console.log("Finally!");
}

/*  Agora a chamada console.log do bloco finally será executada, 
  embora isso não altere o fato de que a execução do programa será interrompida neste segundo ReferenceError, pois ele não é capturado.

  Os blocos Try...catch...finally podem ser aninhados, 
  então podemos usar um bloco try...catch inteiro dentro de outro bloco try...catch. 
  Isso é útil quando esperamos que vários erros ocorram e precisamos lidar com todos eles.*/

let a = 10;
try {
    a = b; // First ReferenceError
} catch (error) {
    try {
        console.log(b); // Second ReferenceError
    } catch {
        console.log("Second catch!"); // -> Second catch!
    }
} finally {
    console.log("Finally!"); // -> Finally!
}
// Neste exemplo, capturamos a exceção dentro do bloco catch colocando o código dentro de outra instrução try...catch.


// A declaração throw e erros personalizados
/*
  Há várias razões pelas quais você gera suas próprias exceções. 
  A maioria delas é bastante complexa e não muito útil neste estágio de aprendizado. 
  A situação mais fácil de imaginar é quando você escreve uma função própria, que deve sinalizar os dados incorretos que foram passados ​​para ela.

  Para lançar uma exceção, usamos a instrução throw. 
  Ela é seguida por qualquer valor que será tratado como uma exceção. 
  Pode ser, por exemplo, um número ou um dos objetos de erro prontos (por exemplo, RangeError).

  Uma exceção que lançamos fará com que o programa reaja da mesma forma que as exceções originais do JavaScript (ou seja, ele interromperá sua execução).
  Isto é, a menos que a lancemos dentro do bloco try para lidar com isso.
  Vamos dar uma olhada em um exemplo simples, sem tentar encontrar nenhum significado especial nele. Esta é apenas uma ilustração do uso da instrução throw:  */

console.log("start"); // -> start
throw 100; // -> Uncaught 100
console.log("end");
// Uma exceção não suportada (se o número 100 pode ser chamado de exceção) faz com que o programa pare. A segunda instrução console.log nunca é executada.

// Vamos fechar a instrução throw dentro do bloco try:
console.log("start"); // -> start
try {
    throw 100;
} catch (error) {
    console.log(error); // -> 100
}
console.log("end"); // -> end
/*  Desta vez, nossa exceção é capturada e manipulada no bloco catch, e não interrompe a execução posterior.
  
  outro exemplo

  Sonhamos com uma função que nos permitirá contar fatoriais (espero que você ainda se lembre do que é um fatorial das suas aulas de matemática;
  se estiver em dúvida, dê uma olhada rápida na Wikipedia para ver um exemplo). 
  Vamos escrevê-la em uma versão iterativa, ou seja, usando um loop.
  Não será nem a solução mais elegante, nem a mais ótima, mas simples e legível.  */

function factorial(n) {
    let result = 1;
    for (; n > 1; n--) {
        result = result * n;
    }
    return result;
}
 
console.log(factorial(3)); // -> 6
console.log(factorial(5)); // -> 120
console.log(factorial(8)); // -> 40320
console.log(factorial(20)); // -> 2432902008176640000
console.log(factorial(1000)); // -> Infinity

// Digamos que estamos um pouco assustados com os números grandes retornados pela nossa função, especialmente o valor Infinity,
// então decidimos limitar o intervalo máximo de valores suportados. Não aceitaremos argumentos maiores que 20.
Function factorial(n) {
    if (n > 20) {
        throw new RangeError("Max value 20");
    }
    let result = 1;
    for (; n > 1; n--) {
        result = result * n;
    }
    return result;
}
 
console.log(factorial(20)); // -> 2432902008176640000
console.log(factorial(1000)); // -> Uncaught RangeError: Max value 20

/*  A presença de uma instrução condicional dentro da nossa função é bastante óbvia. 
  Assim como o uso da instrução throw. 
  A construção new RangeError("Max value 20") definitivamente precisa de uma explicação. 
  Está um pouco fora do escopo desta parte do curso, então tentaremos explicá-la da maneira mais simples possível, focando apenas no seu lado funcional.

  Como mencionamos anteriormente, a instrução throw pode assumir qualquer valor. Anteriormente,
  usávamos um número simples, mas desta vez estamos buscando algo mais complexo. 
  É um objeto, que é um tipo de dado composto. Você pode criar um novo objeto de muitas maneiras, inclusive usando o operador new.
  Usando esse operador, criamos um objeto de classe RangeError, que é um erro predefinido que discutimos há algum tempo.
  O novo objeto é iniciado pela string Max value 20.
  E um novo objeto, do tipo RangeError, contendo, entre outras coisas, a string que fornecemos, será lançado se o parâmetro n exceder o valor permitido.  */













