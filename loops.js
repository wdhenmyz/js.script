// LOOPS

//esse código 
//let n = 0;
console.log(n); // -> 0
n += 10;
console.log(n); // -> 10
n += 10;
console.log(n); // -> 20
n += 10;
console.log(n); // -> 30
n += 10;
console.log(n); // -> 40
n += 10;
console.log(n); // -> 50
n += 10;
console.log(n); // -> 60
n += 10;
console.log(n); // -> 70
n += 10;
console.log(n); // -> 80
n += 10;
console.log(n); // -> 90
n += 10;

//pode ser escrito assim usando o while na forma de loop
//let n = 0;
while(n < 91) {
    console.log(n); // -> 0, 10, 20, 30, 40, 50, 60, 70, 80, 90
    n += 10;
}

// outro exemplo
/*  let isOver = false;
    let counter = 1; */
while (isOver != true) {
    let continueLoop = confirm(`[${counter}] Continue the loop?`);
    isOver = continueLoop === true ? false : true;
    counter = counter + 1;
}

//pode ser escrito assim usando o while na forma de loop
/*  let isOver = false;
    let counter = 1; */
while (!isOver) {
    isOver = !confirm(`[${counter++}] Continue the loop?`);
}

// outro tipo de loop usa o do....while
/*
    do {
        code block
    } while(condition);
*/

/*
O do...while loop é muito semelhante ao while ,
 a principal diferença é que em um loop while, 
 a condição é verificada antes de cada iteração,
 e do ... while loop,a condição é verificada após cada iteração.
*/

/*  
    let isOver;
    let counter = 1;
*/
do {
    isOver = !confirm(`[${counter++}] Continue the loop?`);
} while (!isOver);


// outro exemplo 
 
let condition = false;
while (condition) {
    console.log("A while loop iteration."); // never executed
}
do {
    console.log("A do ... while loop iteration."); // executed once
} while (condition);


// um terceiro exemplo usa o for loop
/*
    for (inicialização ; condição ; incremento ) {
        block of code
    }
*/

/*
    A declaração de inicialização é executada apenas uma vez, antes da primeira iteração do loop.
    Normalmente, ela é usada para inicializar (ou declarar e inicializar) uma variável que será usada como um contador de loop. 

    Uma declaração de condição é uma expressão que é avaliada para um Boolean antes de cada iteração de loop.
    Se essa expressão for avaliada como true, o loop executará seu código. 
    se não o loop é encerrado e nenhuma outra iteração será executada

    A declaração de incremento é executada após cada iteração do loop.
    Normalmente, ela é usada para incrementar (ou declarar e incrementar) uma variável que é usada como um contador de loop.
    O incremento é executado após cada iteração do loop.

    em comparação com o while loop, o for loop é muito mais simples de escrever.
    poi tudo relacionado ao contador (inicialização, condição de fim de loop, mudança de valor do contador)
    está localizado praticamente em um lugar, o que pode aumentar a legibilidade do código.
*/ 

//exemplo
for (let i = 0; i < 10; i++) {
    console.log(i); // -> 0, 1, 2, 3, 4, 5, 6, 7, 8, 9
}

// Vamos supor que temos um array de quatro elementos de inteiros à nossa disposição e nosso sonho é somar todos esses números.
let values = [10, 30, 50, 100];
let sum = 0;
for (let i = 0; i < 4; i++) {
    sum += values[i];
}
console.log(sum); // -> 190

/*
    Definimos o número de iterações para quatro. 
    É verdade que há exatamente quatro elementos no array, e em nosso exemplo esse número não muda, mas não é uma regra universal.

    Em programas normais, arrays frequentemente mudam dinamicamente durante a execução do programa (elementos são adicionados ou removidos). 
    Neste caso, é definitivamente melhor usar a propriedade array chamada "length" (nós a mencionamos quando discutimos arrays),
    mostrado no exemplo a seguir.
*/

let values = [10, 30, 50, 100];
let sum = 0;
for (let i = 0; i < values.length; i++) {
    sum += values[i];
}
console.log(sum); // -> 190


// Loops e arrays
// dessa vez Vamos tentar brincar com matrizes usando loop

/*
Queremos que o usuário insira nomes durante a execução do programa (usaremos oincitarcaixa de diálogo), 
que serão colocados no array um por um. 
A inserção dos nomes terminará quando o botão Cancelar for pressionado. 
Então, escreveremos todo o conteúdo do array (ou seja, todos os nomes inseridos) no console.
*/

let names = [];
let isOver = false;
while (!isOver) {
    let name = prompt("Enter another name or press cancel.");
    if (name != null) {
     names.push(name);
    } else {
     isOver = true;
    }
}
for (let i = 0; i < names.length; i++){
    console.log(names[i]);
}

/*
    essa função usara o prompt(name) para escrever os nomes e os guardara no array names cada vez que o nome for inserido e ok for precionado
    outrora ele termina a função e percorre cada name do array names e os imprime no console um abaixo do outro através de um índice i
*/

/*
    outro exemplo
    se quiséssemos percorrer os elementos do array em ordem reversa, 
    inicializaríamos a variável index ou "i" com o valor do maior índice e o diminuiríamos em um durante cada iteração. 
    Também não há nada que nos impeça de pular alguns elementos de cada vez,
    incrementando ou decrementando a variável index em um valor maior que um.
    Dê uma olhada no exemplo abaixo:
*/

let values = [10, 30, 50, 100];
 
for (let i = 0; i < values.length; i++) {
    console.log(values[i]); // -> 10, 30, 50, 100
}
 
for (let i = values.length - 1; i > 0; i--) {
    console.log(values[i]); // -> 100, 50, 30, 10
}
 
for (let i = 0; i < values.length; i += 2) {
    console.log(values[i]); // -> 10, 50
}


// for...of

/*
    Além do loop for regular, existem duas versões específicas, uma das quais, for...of, 
    é dedicado para uso com arrays (e outras estruturas iterativas, que estão, no entanto, além do escopo deste curso).
    Em um loop desse tipo, não especificamos explicitamente nenhuma condição ou número de iterações, 
    pois ele é executado exatamente tantas vezes quantos elementos há no array indicado.
*/

// Neste exemplo, usamos um loop for simples:
let values = [10, 30, 50, 100];
let sum = 0;
for (let i = 0; i < values.length; i++) {
    sum += values[i];
}
console.log(sum); // -> 190

// A versão deste programa usando o for...of deterá uma aparência um pouco diferente:
let values = [10, 30, 50, 100];
let sum = 0;
for (let number of values) {
    sum += number;
}
console.log(sum); // -> 190

/*
    Entre colchetes após a palavra for, você não encontrará três campos separados por ponto e vírgula.
    Há uma declaração de variável, seguida pela palavra of e então um array, cujos elementos percorreremos (variável ou literal). 
    Em nosso exemplo, for (let number of values) significa que a variável number conterá os elementos subsequentes do array values ​​em cada iteração.
    A sintaxe deste loop é a seguinte:

    for (variable of array) {
        block of code
    }
*/

// Vejamos mais um exemplo

let cities = [
    { name: "New York", population: 18.65e6 },
    { name: "Cairo", population: 18.82e6 },
    { name: "Mumbai", population: 19.32e6 },
    { name: "São Paulo", population: 20.88e6 },
    { name: "Mexico City", population: 21.34e6 },
    { name: "Shanghai", population: 23.48e6 },
    { name: "Delhi", population: 25.87e6 },
    { name: "Tokyo", population: 37.26e6 }
];
for (let city of cities) {
    if (city.population > 20e6) {
     console.log(`${city.name} (${city.population})`);
    }
}

/*
    Desta vez, declaramos um array de cidades, que contém objetos que descrevem algumas das maiores cidades do mundo.
    Cada objeto contém campos de nome e população.
    Usando for ... of loop, percorremos esse array e exibimos informações sobre todas as cidades que têm mais de 20 milhões de habitantes.
*/


// for … in

/*
    Existe também uma versão doparaloop que nos permite percorrer campos de objetos. 
    o for ... in. 
    Ele itera por todos os campos do objeto indicado, colocando os nomes desses campos (ou chaves) na variável. 
    No exemplo, usamos um objeto contendo dados sobre um usuário:
*/

let user = {
    name: "Calvin",
    surname: "Hart",
    age: 66,
    email: "CalvinMHart@teleworm.us"
};
for (let key in user) {
    console.log(key); // -> name, surname, age, email
};

/*
    Em cada iteração do loop, os nomes dos campos sucessivos do objeto do usuário são atribuídos à variável-key, ou seja:
    nome, sobrenome, idade, e-mail. Então, nós os escrevemos no console.
    Mas e se quisermos recuperar os valores armazenados nos campos com esses nomes? 
    Para obter acesso ao campo especificado, usamos a notação de ponto (a parte do curso dedicada aos tipos de dados),
    ou seja, após o nome do objeto, escrevemos um ponto e o nome do campo (key)

    A chave fornecida nessa notação é sempre tratada como um literal. 
    No loop for ... in, essa abordagem não funcionará, porque o nome do campo (key) é colocado em uma variável. 
    Felizmente, temos uma solução alternativa, a notação de colchetes. 
    Ela permite que você se refira ao campo do objeto selecionado usando colchetes (como em matrizes). 
    No colchete atrás do nome do objeto, colocamos o nome do campo, que pode ser um literal ou uma variável contendo esse nome.
*/

console.log(user.name); // -> Calvin
console.log(user[name]); // -> name is not defined

//Usando a notação de colchetes, melhoramos nosso exemplo exibindo não apenas as chaves, mas também seus valores atribuídos.
for (let key in user) {
    console.log(`${key} -> ${user[key]}`);
};

// As instruções break e continue

/*
    O 'break' é usada para encerrar a execução de um loop ou uma declaração switch. 
    Em cada um desses contextos, sempre que o mecanismo JavaScript encontra umquebrarinstrução, 
    ele sai de todo o loop ou instrução switch e pula para a primeira instrução após esse loop ou switch.
*/

let i = 0;
// An infinite loop
while (true){
    console.log(i);
    i++;
    if (i >= 5) {
     break;
    }
}
alert(`Exited the loop with a break (${i}).`);

/*
    No exemplo, podemos ver um infinito while loop que será encerrado usando break depois da variáveleutorna-se maior ou igual a 5. 
    Tal uso dequebrartem importância apenas ilustrativa, pois faria mais sentido incluir esta condição diretamente no loop while.
*/

/* 
    Assim como break, continue pode ser usado em loops (mas não na declaração switch). 
    Quando usado, ele se aplica ao loop mais próximo. 
    A declaração continue, em contraste com break, não termina o loop inteiro, mas sim inicia a próxima iteração deste loop.
    Podemos pensar nisso como pular direto para o final da iteração atual
*/

for (let i = 0; i < 10; i++) {
    if (i == 3) {
     continue;
    }
    console.log(i);
}

/*
    O programa escreve números de 0 a 9 no console, mas pula o número 3. 
    Isso acontece porque quandoeué igual a 3, a instrução continue é executada, encerrando esta iteração (e pulando aconsole.logdeclaração) e iniciar outra.
    Tanto break quanto continue não são usados ​​com muita frequência. 
    Definitivamente não devemos usá-los quando podemos terminar o loop com uma condição construída corretamente.
    Eles são úteis em situações de emergência, quando algo incomum acontece em loops com iterações mais complexas.
*/

// A palavra-chave break

/*
    A palavra-chave break termina o loop mais interno e pula para o código posterior.
    A palavra-chave break pode ser usada em qualquer loop, incluindo loops aninhados. 
    Por exemplo, podemos usar a palavra-chave break para terminar um loop interno quando um elemento é encontrado.

    está presente em todos os casos, exceto no caso default.
    se o código que for executado ser um switch, as instruções switch não executam apenas uma ramificação, 
    mas sim o código inteiro do primeiro caso que corresponde até o final da instrução switch. 
    Esse comportamento é chamado de pass-through e tem alguns usos, mas na maioria das vezes queremos executar apenas uma ramificação e, 
    por esse motivo, a palavra-chave break está presente. 

    Quando um interpretador JavaScript chega a um break, ele vai pular da iteração do loop mais interno e vai pular para o código posterior.
*/

let gate = prompt("Choose gate: a, b, or c");
let win = false;
 
switch (gate) {
    case "a":
        alert("Gate A: empty");
    case "b":
        alert("Gate B: main prize");
        win = true;
    case "c":
        alert("Gate C: empty");
    default:
        alert("No gate " + String(gate));
}
 
if (win) {
    alert("Winner!");
}

//Execute este código e verifique que quando a resposta "a" é dada ao prompt dialog. Agora todos os alertas são exibidos, até mesmo o padrão.

//O fall-through pode ser útil quando mais de um caso deve terminar exatamente com o mesmo comportamento.
let gate = prompt("Choose gate: a, b, or c");
let win = false;
 
switch (gate) {
    case "a":
    case "A":
    case 1:
    case "1":
        alert("Gate A: empty");
        break;
    case "b":
    case "B":
    case 2:
    case "2":
        alert("Gate B: main prize");
        win = true;
        break;
    case "c":
    case "C":
    case 3:
    case "3":
        alert("Gate C: empty");
        break;
    default:
        alert("No gate " + String(gate));
}
 
if (win) {
    alert("Winner!");
}
// nesse exemplo, um erro de redeclaração seria observado em cada um dos casos e não seria encapsulado em seu próprio escopo

















 












