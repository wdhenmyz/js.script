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

