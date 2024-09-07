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

/*  Step over
  Remova o segundo ponto de interrupção (da última linha do código) e recarregue a página. 
  Localize o botão Step Over (à direita de Resume, a seta formando um arco sobre o ponto). 
  Pressione-o – o destaque no código deve se mover para a próxima linha após o ponto de interrupção. 
  Ao mesmo tempo, o console mostrará o efeito da instrução que você acabou de executar.
  Pressione Step Over mais duas vezes (alternativamente, use o atalho F10) observando as alterações no console e o destaque do código.

    Step into
  Vamos ver qual é a diferença entre Step Over e Step Into na prática. 
  Deixe a configuração do ponto de interrupção inalterada e recarregue a página. 
  Primeiro execute Step Over (pressione o botão ou o atalho F10). 
  Então, quando paramos na linha console.log(outer()), execute Step Into.

  O que acontece? Desta vez, o depurador trata a função externa como um conjunto de instruções, 
  pula para dentro dela e se define em sua primeira linha. 
  Usando Step Into, vá mais para dentro da função interna e pare na linha return "Hello !".

    call stack
  




    step out

























