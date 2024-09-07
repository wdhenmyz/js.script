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
  No console na parte inferior da tela, digite o comando:
  
    console.log(name); // -> inner

  Como resultado de sua execução, o nome "inner" deve ser exibido (ou seja, o conteúdo do nome da variável local da função interna). 
  Se você clicar no nome da função externa na Pilha de Chamadas, você será levado ao contexto dessa função (observe que a seleção da linha atual foi alterada). 
  Tente chamar o mesmo comando novamente no console:

    console.log(name); // -> outer

  Desta vez, devemos ver "outer". Estamos no contexto da função externa, que tem sua própria variável local chamada name. 
  Esta variável contém a palavra "outer".
  Clique novamente no nome da função interna na Pilha de Chamadas para alterar o contexto de volta. 
  Observe que, apesar da alteração de contexto, a execução do programa ainda para exatamente no mesmo lugar.

  >> Visualizando e modificando variáveis
  Durante a execução passo a passo, temos livre acesso às variáveis ​​do nosso programa, que são visíveis no contexto em que estamos atualmente.
  Como acabamos de ver, usando o método console.log podemos escrever os valores dessas variáveis.
  Também podemos modificá-las sem nenhum problema.

  Vamos voltar ao contexto da função interna. Execute a seguinte sequência de comandos no console:

  console.log(name); // -> inner
  name = "new name";
  console.log(name); // -> new name

  Como você pode ver, modificamos o valor do nome da variável local, que está localizado na função interna. 
  Se continuarmos a execução do programa (Step ou Resume), o programa usará esse novo valor.

  Acima da janela Call Stack há outra janela chamada Watch (ou Watch expressions).
  Ela nos permite visualizar e modificar as variáveis ​​sem usar o console. 
  Nesta janela, podemos encontrar o botão +, que após pressionar, podemos inserir o nome da variável cujas alterações de valor queremos rastrear. 
  Para alterar o valor atual de uma variável, basta clicar duas vezes na janela watch na variável observada e inserir o novo valor. 
  Lembre-se de que durante chamadas de função ou em blocos de código, 
  o escopo da visibilidade da variável pode variar, então não se surpreenda se os valores das variáveis ​​locais não forem visíveis no contexto global.
  

  //  step out

























