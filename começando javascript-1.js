// começando javascript

/*  Primeiro, o JavaScript do lado do cliente é sempre executado no contexto de um site e permite que você manipule elementos desse site. 
  Então podemos, por exemplo, usar a função apropriada para inserir algum texto, alterar um título, criar uma tabela, etc. na página. 
  Dessa forma, controlamos a parte visual do site.

  Segundo, podemos usar o console como uma tela para escrever algumas informações. 
  O console, faz parte das ferramentas do desenvolvedor. Portanto, ele não é visível por padrão e deve ser devidamente habilitado (também escrevemos sobre isso no capítulo anterior). 
  Para nossas necessidades, será muito mais conveniente usar o console, pois evitaremos a necessidade de uma análise completa da estrutura do site.
  
  Mas o que é realmente um console? Primeiro de tudo, é um lugar onde várias mensagens são exibidas, normalmente invisíveis para o usuário do navegador. 
  Essas mensagens podem, por exemplo, ser geradas pelo interpretador JavaScript após encontrar um erro ou se o imprimirmos, chamando a função apropriada. 
  Segundo, podemos executar comandos JavaScript individuais no console, que serão executados no contexto da página da web atualmente carregada (um pouco mais sobre isso em um momento).
  
  A função básica que nos permite escrever informações no console é console.log.  
  exemplo usando "hello world!"  */

console.log("Hello, World!");
// nesse caso a função é apenas um log, e console é o objeto ao qual a função pertence.
// No editor, você deve ver o pedaço de código que foi discutido, contendo a função console.log, Tente executá-lo.
// Como resultado, a janela inferior simulando o console deve mostrar:  Hello, World!

/*  A função é um pedaço de código que permite que você execute uma tarefa específica (no nosso caso, exibir algo no console). 
  Funções geralmente recebem argumentos, em outras palavras, dados que elas usarão durante a operação. 
  Em JavaScript, executamos uma função chamando-a, e a chamamos escrevendo seu nome seguido por um par de parênteses, 
  onde os argumentos são fornecidos (se a função não precisar de argumentos, os parênteses são deixados em branco). 
  No nosso exemplo, o argumento é o texto que queremos exibir colocado entre aspas. 

  Para que o interpretador saiba onde o comando termina, colocamos um ponto e vírgula no final da chamada da função. 
  Nesse caso, o interpretador conseguiria sem essa ajuda, mas é um bom hábito terminar cada comando com um ponto e vírgula, 
  para que você não se esqueça dele quando for realmente necessário.  */

// nota sobre html e javascript
/*  O código JavaScript a ser executado pelo navegador na página deve ser anexado ao HTML usando a tag <script>, 
  e há duas maneiras de fazer isso. O código pode ser incorporado diretamente dentro das tags <script> e </script>, mas isso só é recomendado quando o código é curto. 
  Outra abordagem é usar o atributo "src" para apontar para um arquivo separado que contém o código JavaScript. 
  Isso é especialmente verdadeiro quando o mesmo código vai ser usado em várias páginas, 
  porque repetir exatamente o mesmo código muitas vezes é uma prática ruim, pois quaisquer alterações precisam ser aplicadas a todos os arquivos; 
  e, além disso, aumenta artificialmente o tamanho da página. 
  A extensão do arquivo JavaScript é .js.  

  Esse comportamento pode ser alterado para scripts externos apontados pelo atributo "src" usando os atributos "defer" ou "async".
  > defer – significa que o script deve ser executado após a página inteira ser carregada;
  > async – significa que o script será executado imediatamente, mas em paralelo à análise do resto da página.  */
































