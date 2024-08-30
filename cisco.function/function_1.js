/*
    Declaração de funções
    Assim como as variáveis, as funções precisam ser declaradas antes que possamos usá-las. 
    A sintaxe para declaração de função se parece com isso:

    function functionName() {
        code
    }   

    Este tipo de declaração de função em JavaScript é chamado de declaração de função.
    A declaração de função é executada quando o código é executado.
    ele começa com function, seguido pelo nome da função e por parênteses. 

    vamos tentar declarar uma função de acordo com essas regras, 
    que conterá um fragmento do código do nosso programa calculando a temperatura média diária
*/

let temperatures;
let sum;
let meanTemp;
function getMeanTemp() {
     sum = 0;
     for (let i = 0; i < temperatures.length; i++) {
      sum += temperatures[i];
     }
     meanTemp = sum / temperatures.length;
}
// Vamos chamá-la de getMeanTemp

/*
    Declaramos nossa função dando a ela um nome e definindo uma sequência de instruções que ela deve executar. 
    No entanto, se você tentasse executar esse código, não veria nenhum efeito. 
    Por quê? Porque declarar uma função é apenas uma preparação. Para executar esse código, temos que chamar a função.

    Para chamar a função, basta dizer o nome da função seguido por parênteses. 
    Por exemplo, para chamar a função getMeanTemp, basta dizer > getMeanTemp()<
*/

// vamos adicionar novas temperaturas ao array de temperaturas
temperatures = [12, 12, 11, 11, 10, 9, 9, 10, 12, 13, 15, 18, 21, 24, 24, 23, 25, 25, 23, 21, 20, 19, 17, 16];
getMeanTemp()
console.log(`mean: ${meanTemp}`); // -> mean: 16.666666666666668
// outro exemplo
temperatures = [17, 16, 14, 12, 10, 10, 10, 11, 13, 14, 15, 17, 22, 27, 29, 29, 27, 26, 24, 21, 19, 18, 17, 16];
getMeanTemp();
console.log(`mean: ${meanTemp}`); // -> mean: 18.083333333333332

/*
    No início do programa, após a declaração da variável, temos aobterTempMédiadeclaração de função.
    Na parte posterior do código, nós o chamamos duas vezes escrevendoobterTempMédia(). 
    Cada chamada faz com que o programa salte para o código da função, 
    execute suas instruções e retorne para a próxima instrução após a chamada da função.

    Geralmente, as funções são declaradas antes de serem chamadas, principalmente no início do código. 
    No entanto, essa é apenas uma boa prática, que aumenta a legibilidade do código, 
    não um requisito de sintaxe do JavaScript.
*/

// variáveis ​​locais

/*
    relembrando:
    
    variáveis ​​locais É como chamamos as variáveis ​​que são declaradas e usadas em algum escopo limitado 
    e não são visíveis em todo o programa, o que significa que só podemos usá-las dentro daquele escopo específico.

    Vamos tentar fazer uma pequena alteração no nosso programa de cálculo da temperatura média.
*/

let temperatures;
let meanTemp;
function getMeanTemp() {
     let sum = 0;
     for (let i = 0; i < temperatures.length; i++) {
      sum += temperatures[i];
     }
     meanTemp = sum / temperatures.length;
}
temperatures = [12, 12, 11, 11, 10, 9, 9, 10, 12, 13, 15, 18, 21, 24, 24, 23, 25, 25, 23, 21, 20, 19, 17, 16];
getMeanTemp();
console.log(`mean: ${meanTemp}`); // -> mean: 16.666666666666668
temperatures = [17, 16, 14, 12, 10, 10, 10, 11, 13, 14, 15, 17, 22, 27, 29, 29, 27, 26, 24, 21, 19, 18, 17, 16];
getMeanTemp();
console.log(`mean: ${meanTemp}`); // -> mean: 18.083333333333332

// Em nosso código, um exemplo de tal variável é sum

/*
    Embora o tenhamos declarado fora do getMeanTemp function (é uma variável global),
    nós apenas nos referimos a ela dentro da função. 
    Uma declaração global é, portanto, desnecessária.

    O comportamento do programa é o mesmo, mas o código ganhou alguma clareza. 
    A variável sum agora é local, ela só pode ser usada dentro do getMeanTemp function 
    (o que é suficiente para nós, porque não era necessário para nada fora da função).
*/


//  declaração de return

/*
    Funções que foram chamadas executam uma sequência de instruções contidas em seu corpo. 
    O resultado dessa execução pode ser um determinado valor que podemos querer armazenar em alguma variável. 
    A palavra-chave return vem nos ajudar nesse caso. 

    Primeiro, ele faz com que a função termine exatamente onde esta palavra ocorre, mesmo que haja mais instruções.
    Segundo, ele nos permite retornar um determinado valor de dentro da função para o local onde ele foi chamado.

    Vamos nos afastar por um momento do nosso exemplo com cálculo de temperatura média
    e brincar com um código um pouco mais simples
*/

function showMsg() {
    console.log("message 1");
    return;
    console.log("message 2");
}
showMsg(); // -> message 1

/*
    Como esperado, a chamada acaba exibindo apenas a primeira mensagem "mensagem 1", 
    depois a return interrompe a função. Na prática, usando a palavra-chave return aqui não faria muito sentido. 
    Isso causa oconsole.log("mensagem 2") para nunca ser chamado. 
    Então seria mais fácil não escrever um segundo console.log.

    Preste atenção à chamada de função nesse proximo exemplo – armazenamos o resultado dessa chamada na variável test. 
    Como você pode imaginar, essa variável terá o valor true.
*/

function getTrue() {
    return true;
}
let test = getTrue();
console.log(test); // -> true

// Vamos voltar ao exemplo com temperaturas médias.

let temperatures;
let meanTemp;
function getMeanTemp() {
     let sum = 0;
     let result;
     for (let i = 0; i < temperatures.length; i++) {
      sum += temperatures[i];
     }
     result = sum / temperatures.length;
     return result;  
}
temperatures = [12, 12, 11, 11, 10, 9, 9, 10, 12, 13, 15, 18, 21, 24, 24, 23, 25, 25, 23, 21, 20, 19, 17, 16];
meanTemp = getMeanTemp();
console.log(`mean: ${meanTemp}`);
temperatures = [17, 16, 14, 12, 10, 10, 10, 11, 13, 14, 15, 17, 22, 27, 29, 29, 27, 26, 24, 21, 19, 18, 17, 16];
meanTemp = getMeanTemp();
console.log(`mean: ${meanTemp}`);

/*
    a variável result é usada apenas para armazenar temporariamente o valor a ser retornado. 
    Então podemos simplificar o código da função ainda mais.

    Vamos pular a variável result colocando a operação apropriada diretamente após return.
*/

let temperatures;
function getMeanTemp() {
     let sum = 0;
     for (let i = 0; i < temperatures.length; i++) {
      sum += temperatures[i];
     }
     return sum / temperatures.length;
}
temperatures = [12, 12, 11, 11, 10, 9, 9, 10, 12, 13, 15, 18, 21, 24, 24, 23, 25, 25, 23, 21, 20, 19, 17, 16];
console.log(`mean: ${getMeanTemp()}`);
temperatures = [17, 16, 14, 12, 10, 10, 10, 11, 13, 14, 15, 17, 22, 27, 29, 29, 27, 26, 24, 21, 19, 18, 17, 16];
console.log(`mean: ${getMeanTemp()}`);

/*
    a variável meanTemp também se tornou um pouco redundante. 
    Armazenamos o resultado da chamada de função nela, que é então exibido no console.

    pode ser simplificado colocando getMeanTemp da função diretamente em 
    console.log sem o uso da variável meanTemp.
*/



































