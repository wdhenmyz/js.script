/* erros em programas acontecem. É completamente normal.
  Erros lógicos, no entanto, são um problema diferente. 
  Como mostramos anteriormente, o interpretador não tem como detectá-los,
  então temos que procurar por nós mesmos a resposta para a pergunta:
  por que o programa não funciona como presumimos que funcionaria?

  Vejamos um exemplo simples:  */

function average(a, b) {
    return a + b / 2;
}
 
console.log(average(2, 10));   // -> 7 expected: 6
console.log(average(5, 5));    // -> 7.5 expected: 5

/* A função parece simples – ela soma dois números dados e os divide por 2.
  Este código tem uma sintaxe válida, não há problemas formais com ele, 
  e esperamos que os resultados das duas chamadas no exemplo sejam 6 e 5.
  Mas quando executamos este código, os resultados são muito diferentes. Você consegue ver onde está o erro?  */

return a + b / 2;
/*  Isso não funciona como esperado (dividir a soma de dois números por 2) por causa da ordem das operações.
  A divisão b/2 é calculado primeiro, depois a é adicionado, então este código é o mesmo que este:  */
return a + (b / 2);
//  para produzir o resultado que esperamos, o código deve ficar assim:
return (a + b) / 2
// Este é um bom exemplo de um erro lógico . O código em si é perfeitamente válido, nada para reclamar do ponto de vista do JavaScript.
// Mas a função não retorna os valores que o programador pretendia.

//Aqui temos outro exemplo onde o erro não é tão óbvio:

function largest(a, b, c) {
    if (a > b && a > c) {
        return a;
    } else if (b > a && b > c) {
        return b;
    } else {
        return c;
    }
}

// Vemos uma função que deve retornar o maior dos três números.
// tire um tempo e tente identificar a falha nessa lógica. Como dica, tente chamar a maior função com esses conjuntos de parâmetros:
console.log(largest(1, 1, 2)); // -> 2
console.log(largest(1, 2, 3)); // -> 3
console.log(largest(3, 2, 1)); // -> 3
console.log(largest(2, 2, 1)); // -> 1

/* Se o primeiro e o segundo números forem iguais, a função retornará incorretamente o terceiro valor.
  Isso ocorre porque quando a e b são iguais, ambosum > beb > umnão são verdadeiras. 
  Esse erro é muito mais difícil de encontrar, pois esse código faz o que deveria na maioria das vezes
  e somente em casos específicos ele retorna valores incorretos. 
  Quando encontrado, o problema é bem fácil de consertar, pois precisamos apenas mudar o operador maior que para um operador maior que ou igual a dentro do nossosedeclaração. */


// DEPURAÇÃO
/*  Para ser realizada de forma eficiente, a depuração requer ferramentas e, 
  se nosso código for executado no navegador, quase certamente já temos todas as ferramentas necessárias disponíveis.
  Para verificar se nosso navegador suporta essa funcionalidade, podemos simplesmente tentar executar este código com o console do desenvolvedor aberto.  */

console.log("Before debugger");
debugger;
console.log("After debugger");
/*  Se o depurador estiver presente, o console mostrará apenas o log "Before debugger" e, 
  dependendo do navegador instalado, devemos ver informações sobre a execução do código interrompida, 
  pausada no depurador ou no modo de depuração. 
  A segunda mensagem de log não é exibida porque a instrução debugger funciona como um ponto de interrupção na execução do código. 
  Então, sempre que o JavaScript encontra a instrução debugger, ele verifica se o depurador está presente e, se estiver, a execução do código é interrompida naquele ponto exato.  */


// Execução passo a passo do programa
/*
  Um dos principais recursos do depurador é sua capacidade de executar código passo a passo. 
  Isso significa que podemos parar a execução do programa em qualquer lugar usando uma instrução do depurador e, em seguida, continuar a execução uma instrução por vez.

  Isso é realmente útil quando suspeitamos que o comportamento ou a lógica do programa está com defeito e o código vai para um ramo incorreto de execução (vai para a instrução if errada, etc.).
  Neste modo, podemos ver cada linha que é executada e cada linha que não é. P
  odemos ver facilmente se a lógica nas instruções de controle de fluxo é válida ou não.

  Então, já sabemos que a instrução do depurador, quando encontrada pelo JavaScript, interromperá a execução do código naquele lugar. 
  Dependendo do navegador que estamos usando, os botões de controle de fluxo podem ter uma aparência diferente e podem estar localizados em lugares diferentes.
  Em geral, todos os navegadores modernos suportam as seguintes opções para controlar a execução do script no modo de depuração:

  Resume / Continue: Isso retomará a execução do script de forma normal e é usado quando verificamos o que queríamos verificar e agora queremos continuar com a execução do script.
  
  Step Into: Isso executa a próxima instrução no código apenas e a pausa novamente, e usamos isso quando queremos analisar o código em detalhes
  ou verificar qual caminho exato a execução toma quando ramificações complexas estão acontecendo devido a instruções if...else em cascata ou outra lógica complicada.
  Se a próxima instrução for uma chamada de função, usar Step Into pulará para dentro do código desta função.
  
  Step Over: Isso funciona como Step Into, exceto que se for usado quando a próxima instrução for uma chamada de função, o código não pulará para o código da função,
  mas toda a função será executada e o programa será pausado novamente após pular para fora desta função. 
  Isso é frequentemente usado quando a próxima instrução é uma chamada para uma função onde não sabemos se ela terá algum impacto, ou simplesmente não estamos interessados ​​em olhar.

  Step Out: Isso nos permite pular imediatamente para fora de uma função na qual o código está pausado.  
  
  Vamos tentar praticar algumas ações básicas que podem ser executadas com o depurador.

  O programa JavaScript que depuraremos deve ser reescrito em seu ambiente de desenvolvimento local
  (por algum motivo, a depuração é mais legível se não usarmos nossa plataforma nesses exercícios).
  
  executamos nosso código abrindo um arquivo HTML simples no navegador, que incluía uma referência ao arquivo JavaScript a ser executado  */

// Preparação do ambiente e um exemplo
//  Crie dois arquivos em qualquer editor de código: index.html e main.js. No arquivo index.html, coloque o código para esta página web HTML muito simples:
<!DOCTYPE html>
<html>
<head>
    <script src="main.js"></script>
</head>
<body>
    <p>Test Site</p>
</body>
</html>

// Salve o arquivo no seu drive local, de preferência em um diretório vazio recém-criado. No mesmo diretório, salve o arquivo main.js, colocando o seguinte código dentro dele:
function outer() {
    let name = "outer";
    let str = inner();
    return str;
}
 
function inner() {
    let name = "inner";
    return "Hello !";
}
 
console.log("before outer() call");
console.log(outer());
console.log("after outer() call");
/*
  No navegador que você está usando, abra uma nova aba e carregue o arquivo index.html nela. 
  Dependendo do seu navegador e sistema, você pode usar o menu do programa ou o atalho de teclado apropriado (no Linux e Windows: Ctrl + O, no macOS: ⌘ + O).
  Se tudo tiver sido feito corretamente, você verá este texto na aba: "Test Site".

  Agora precisamos iniciar as Ferramentas do Desenvolvedor. 
  Por exemplo, nos navegadores Chrome e Firefox, no Windows e Linux, usamos a combinação de teclas: Ctrl + Shift + I.
  No restante deste exercício, nos limitaremos a discutir como o depurador funciona usando os navegadores Chrome e Firefox como exemplos.
  
  Selecione Console nas abas Ferramentas do Desenvolvedor. Recarregue a página (combinação de teclas Ctrl + R ou ⌘ + R). 
  As seguintes mensagens devem aparecer no console:  */

before outer() call
Hello !
after outer() call
// Este é o resultado dos métodos console.log do programa escrito no arquivo main.js.


// Uso da instrução debugger

/*  Vamos testar a declaração do depurador na prática. 
  Coloque-a no código main.js antes de chamar a função outer. 
  Então as últimas linhas do arquivo main.js agora devem ficar assim: */

console.log("before outer() call");
debugger;
console.log(outer());
console.log("after outer() call");

/*  Não esqueça de salvar o arquivo modificado. 
  Volte para o seu navegador e recarregue a página. 
  O que aconteceu? Primeiro, nas Ferramentas do Desenvolvedor, a aba selecionada mudou: no Chrome, será para Fontes, no Firefox para Depurador.
  A declaração do depurador faz com que o programa pare sua execução na linha onde a colocamos e aguarde nossa decisão. 
  Na aba, entre outras informações, você deve ver o código do nosso programa, com a linha na qual a execução parou claramente destacada.

  Na visualização Fontes / Depurador, também temos a opção de usar o console (não precisamos alternar para a aba Console). 
  Tente pressionar a tecla Esc várias vezes. 
  Observe que o console aparecerá e desaparecerá na parte inferior da aba. Para mais trabalho, deixe-o visível. 
  Como apenas um console.log é executado antes do programa parar, você deverá ver apenas o seguinte no console */

before outer() call






