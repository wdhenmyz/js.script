// Como lidar sem a declaração do depurador

/*  Novamente, modifique o programa salvo em main.js, desta vez removendo a linha que contém o comando debugger. 
  Salve as alterações, volte para o seu navegador e recarregue a página. Obviamente, o programa foi executado até o fim, mas agora sabemos como pará-lo. 
  Defina dois pontos de interrupção, um em console.log("before outer() call"); o outro em console.log("after outer() call"); (agora devem ser as linhas 12 e 14, respectivamente).
  Recarregue a página. O programa deve parar no primeiro ponto de interrupção. 
  Clicar em Resume fará com que o programa retome a execução e pare no segundo ponto de interrupção. 

  Outro clique em Resume  fará com que o programa seja executado até o fim.  */

/*  Além de saltar entre pontos de interrupção sucessivos com Resume , 
  temos a possibilidade de executar uma execução passo a passo real (ou seja, chamar as instruções do nosso programa uma de cada vez). 
  Há um pequeno problema aqui. 
  Se uma instrução for uma chamada para uma função, 
  o depurador deve entrar na função e executar as instruções dentro dela passo a passo, ou tratá-la como um todo indivisível e apenas executá-la?
  Claro, não há uma resposta correta, e tudo dependerá da situação específica e do que queremos alcançar.
  É por isso que os depuradores distinguem entre dois modos de execução passo a passo: 
  Step Into (tratando a função como um conjunto de instruções, que queremos executar separadamente) e 
  Step Over (tratando a chamada de função como algo indivisível).  */

/*//  Step over
  Remova o segundo ponto de interrupção (da última linha do código) e recarregue a página. 
  Localize o botão Step Over (à direita de Resume, a seta formando um arco sobre o ponto). 
  Pressione-o – o destaque no código deve se mover para a próxima linha após o ponto de interrupção. 
  Ao mesmo tempo, o console mostrará o efeito da instrução que você acabou de executar.
  Pressione Step Over mais duas vezes (alternativamente, use o atalho F10) observando as alterações no console e o destaque do código.

  //  Step into
  Vamos ver qual é a diferença entre Step Over e Step Into na prática. 
  Deixe a configuração do ponto de interrupção inalterada e recarregue a página. 
  Primeiro execute Step Over (pressione o botão ou o atalho F10). 
  Então, quando paramos na linha console.log(outer()), execute Step Into.

  O que acontece? Desta vez, o depurador trata a função externa como um conjunto de instruções, 
  pula para dentro dela e se define em sua primeira linha. 
  Usando Step Into, vá mais para dentro da função interna e pare na linha return "Hello !".

  //  call stack
  Em uma janela com esse nome, podemos ver em qual função estamos atualmente (no nosso caso, inner).
  Além disso, veremos todas as funções que estão ativas no momento. 
  A Call Stack é importante no caso de funções aninhadas, como no nosso exemplo. 
  Usando Step Into, chamamos a função outer no programa principal, entramos nela e chamamos a função inner. 
  Se pararmos dentro da função inner, as funções ativas serão: inner e outer (criando uma pilha). 
  Bem no fundo da pilha, veremos a função main (ela não tem um nome, e no Firefox é marcada como (global) e no Chrome (anonymous)). 
  Este é o lugar de onde a função outer é chamada.

  Paramos dentro da função inner, no comando return "Hello !". 
  Então estamos no contexto da função inner neste ponto. 
  No console na parte inferior da tela, digite o comando: */
  
    console.log(name); // -> inner

  /* Como resultado de sua execução, o nome "inner" deve ser exibido (ou seja, o conteúdo do nome da variável local da função interna). 
  Se você clicar no nome da função externa na Pilha de Chamadas, você será levado ao contexto dessa função (observe que a seleção da linha atual foi alterada). 
  Tente chamar o mesmo comando novamente no console:  */

    console.log(name); // -> outer

  /*  Desta vez, devemos ver "outer". Estamos no contexto da função externa, que tem sua própria variável local chamada name. 
  Esta variável contém a palavra "outer".
  Clique novamente no nome da função interna na Pilha de Chamadas para alterar o contexto de volta. 
  Observe que, apesar da alteração de contexto, a execução do programa ainda para exatamente no mesmo lugar. 

  >> Visualizando e modificando variáveis
  Durante a execução passo a passo, temos livre acesso às variáveis ​​do nosso programa, que são visíveis no contexto em que estamos atualmente.
  Como acabamos de ver, usando o método console.log podemos escrever os valores dessas variáveis.
  Também podemos modificá-las sem nenhum problema.

  Vamos voltar ao contexto da função interna. Execute a seguinte sequência de comandos no console: */

  console.log(name); // -> inner
  name = "new name";
  console.log(name); // -> new name

 /* Como você pode ver, modificamos o valor do nome da variável local, que está localizado na função interna. 
  Se continuarmos a execução do programa (Step ou Resume), o programa usará esse novo valor.

  Acima da janela Call Stack há outra janela chamada Watch (ou Watch expressions).
  Ela nos permite visualizar e modificar as variáveis ​​sem usar o console. 
  Nesta janela, podemos encontrar o botão +, que após pressionar, podemos inserir o nome da variável cujas alterações de valor queremos rastrear. 
  Para alterar o valor atual de uma variável, basta clicar duas vezes na janela watch na variável observada e inserir o novo valor. 
  Lembre-se de que durante chamadas de função ou em blocos de código, 
  o escopo da visibilidade da variável pode variar, então não se surpreenda se os valores das variáveis ​​locais não forem visíveis no contexto global.
  

  //  step out
  No painel com os botões Resume , Step Over ou Step Into , você também encontrará um botão Step Out . 
  Ele retoma a operação do programa executando comandos sucessivos até que a função atual seja encerrada para a função da qual foi chamada.

  Remova todos os pontos de interrupção e defina um novo dentro da função interna. 
  Recarregue o programa, e a execução deve parar na linha que marcamos. 
  Pressionar o botão Step Out executará o restante das instruções na função interna, e parará na primeira linha após ser chamada (dentro da função externa). 
  Simples, certo?
  
  O exemplo que usamos não requer realmente depuração.
  É apenas para demonstrar a você as funções básicas do depurador. 
  Você precisará delas se o programa que você vai escrever se comportar de forma inconsistente com suas expectativas.
  
  Às vezes não é possível localizar o problema imediatamente e é necessário rastrear a operação do programa um fragmento de cada vez, 
  de preferência usando uma operação passo a passo. 
  Então, podemos verificar como os valores das variáveis ​​mudam em etapas subsequentes, 
  quais comandos são executados ou se as condições ou loops foram construídos corretamente.
  
  A capacidade de usar um depurador é essencial para todo programador.

  >>  Medindo o tempo de execução do código
  funcionamento de um código deve ser previsível e consistente com nossas suposições, e os resultados que eles retornam devem ser corretos.
  No entanto, a eficiência do programa geralmente também é importante. 
  Às vezes, o mesmo efeito pode ser alcançado de várias maneiras, 
  então vale a pena escolher aquela que funcionará não apenas corretamente, mas também rapidamente.

  o aspecto da velocidade de execução do código é bastante importante. 
  Ele é afetado por muitos elementos, como a escolha de um algoritmo ótimo para resolver um determinado problema, 
  a seleção de funções apropriadas ou a evitação de ações redundantes.

  Uma das maneiras mais fáceis de medir a velocidade do programa é usar os métodos console.time e console.timeEnd,
  que nos permitem fazer uma medição precisa do tempo entre dois lugares especificados em nosso código e exibir o resultado no console. 
  Existem, é claro, muitas ferramentas mais avançadas, que podem nos ajudar durante a otimização do nosso código, 
  mas vale a pena conhecer esses métodos simples, que em muitos casos são suficientes para analisar o desempenho do programa.

  Suponha que queremos calcular o valor aproximado do número π.
  
  O valor de π calculado dessa forma é aproximado, mas é mais preciso quanto maior for a série (ou seja, quanto maior for o valor de k que usamos). 
  Maior precisão envolverá, é claro, um número maior de operações a serem realizadas e, portanto, afetará o tempo de execução do programa. 
  Vamos verificar como seria um programa de exemplo escrito em JavaScript, o que nos permitiria realizar tais cálculos: */

let part = 0;
for (let k = 0; k < 10000000; k++) {
    part = part + ((-1) ** k) / (2 * k + 1);
}
let pi = part * 4;
console.log(pi); // -> 3.1415925535897915

/* A parte variável conterá um resultado parcial, que será modificado em cada iteração do loop for. 
  O loop será executado dez milhões de vezes (ou seja, k assumirá valores de 0 a 999999). 
  A parte que mais consome tempo será a execução do loop for, porque em cada iteração, operações como soma, multiplicação, divisão e exponenciação são realizadas. */

// Vamos verificar quanto tempo leva para o programa executar esse pedaço de código. Para esse propósito, usaremos os métodos console.time e console.timeEnd.

let part = 0;
console.time('Leibniz');
for (let k = 0; k < 10000000; k++) {
    part = part + ((-1) ** k) / (2 * k + 1);
}
console.timeEnd('Leibniz'); // -> Leibniz: 456.60498046875 ms
let pi = part * 4;
console.log(pi); // -> 3.1415925535897915

/*  Com console.time, indicamos onde começar a medição do tempo, enquanto com console.timeEnd finalizamos a medição,
  e o resultado é exibido no console neste ponto (o resultado que você obtém obviamente será diferente do do exemplo). 
  O tempo é dado em milissegundos. Nas chamadas dos métodos console.time e console.timeEnd, 
  podemos especificar uma string (no exemplo é 'Leibnitz') que identificará nosso cronômetro caso usemos muitos deles em nosso programa.

  Vamos dar uma olhada dentro do loop for. 
  Em cada iteração, o número -1 é elevado à potência de k. 
  A exponenciação é uma operação que consome bastante tempo, 
  então podemos suspeitar que ela afeta fortemente a velocidade do nosso programa (especialmente porque fazemos isso dez milhões de vezes).
  Se a base da exponenciação for o número -1, sempre obteremos -1 ou 1 como resultado, dependendo se o expoente é ímpar ou par. 
  Nesse caso, podemos substituir a exponenciação por uma instrução condicional que verifica se k é par (divisível por 2) ou ímpar e retorna 1 ou -1, respectivamente. */

let part = 0;
console.time('Leibniz');
for(let k = 0; k < 10000000; k++) {
    part = part + (k % 2 ? -1 : 1) / (2 * k + 1);
}
console.timeEnd('Leibniz'); // -> Leibniz: 175.5458984375 ms
let pi = part * 4;
console.log(pi);

/*  Como você pode ver, mesmo uma mudança tão pequena nos permite mais que dobrar a velocidade do programa!
  Usar os métodos console.time e console.timeEnd nos permite analisar nosso código para desempenho. 
  Se tivermos a impressão de que algo funciona muito lentamente, mas não sabemos qual parte do código é responsável por isso, 
  podemos realizar medições, localizar o problema e, opcionalmente, tentar otimizar o código. 
  existem muitas ferramentas que também nos ajudam nisso. 
  Algumas delas são incorporadas às Ferramentas do Desenvolvedor integradas ao navegador,
  mas geralmente os métodos mostrados são suficientes para realizar testes básicos.

  Tente testar ambas as soluções em seu ambiente local e veja quais diferenças nos tempos você obtém. */
























