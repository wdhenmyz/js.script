/*
    É muito importante se preparar para esta verdade simples:

    Erros acontecerão.
    Você certamente já testemunhou, várias vezes, diferentes aplicativos com mau funcionamento,
    tornando-se instáveis, retornando resultados inesperados ou até mesmo desligando incontrolavelmente.
    Infelizmente, nós, os programadores, somos responsáveis ​​pela maioria deles. 
    Mesmo que não tenhamos causado esses problemas diretamente, 
    provavelmente não antecipamos certas situações que poderiam levar ao mau funcionamento de um programa
    (por exemplo, falta de uma conexão de rede).

    Erros na operação de programas acontecem. 
    Temos que aceitar isso, enquanto tentamos minimizar seu número e mitigar os danos que eles podem causar.
    Podemos cometer erros em todas as etapas do desenvolvimento de software,
    desde design errado até erros de digitação comuns no código que escrevemos. 
    Os erros serão o resultado de um equívoco ao tentar resolver um determinado problema, 
    o uso incorreto da linguagem de programação ou a incapacidade de prever comportamento estranho do usuário. 
    Infelizmente, bugs no código que causam erros são parte integrante da programação.

    Esse fato é melhor expresso pelas palavras de um dos fundadores da ciência da computação moderna,
    Edsger W. Dijkstra: "Se a depuração é o processo de remover bugs de software, 
    então a programação deve ser o processo de colocá-los em prática".
    
    Linguagens de programação não são chamadas de linguagens por acaso. 
    Assim como as linguagens naturais, linguagens que usamos para nos comunicar com outras pessoas, 
    as linguagens de programação são usadas para formular precisamente 
    sentenças interpretáveis ​​de forma inequívoca (instruções). 
    e assim como as linguagens naturais, elas têm sua gramática e vocabulário.

    Gramática, ou formalmente, a sintaxe de uma linguagem de programação, 
    é um conjunto de regras que definem a estrutura das instruções (isto é, as sentenças da linguagem natural). 
    Essas regras são geralmente muito precisas e especificam, por exemplo, 
    a ordem em que escrevemos certas palavras-chave ou operadores.

    Cada idioma também tem seu próprio vocabulário limitado, 
    que é uma lista de palavras que podem ser usadas para construir instruções 
    (isto é, novamente, as sentenças de uma linguagem natural). 
    Esta imagem é bastante simplificada, mas deve nos permitir entender quais erros podem ocorrer ao usar a linguagem. 
    Para começar, tentaremos apresentar a diferença entre várias categorias de erros usando linguagem natural, 
    neste caso, inglês escrito.
*/

//Linguagens naturais e erros de comunicação

/*
    Imagine que você está organizando uma festa no lago para seus amigos. 
    Como organizador, você explica a todos como chegar lá, mas como sempre em tais situações, alguém se perde.
    Você envia a seguinte resposta,

    // Depois de sair da floresta, vire à direita no primeiro caminho e dirija por 500m. Aguarde no local.

    O que aconteceria se nos apressássemos ao escrever esta informação?
    Vamos começar com os sinais de pontuação ausentes:
    
    // Depois de sair da floresta vire à direita no primeiro caminho e dirija 500m espere no local
    
    Este é um exemplo de erro de sintaxe (ou mais precisamente, erros).
    Em inglês, uma frase declarativa deve terminar com um ponto.
    Provavelmente a pessoa que receber esta mensagem adivinhará facilmente do que se trata, mas formalmente será incorreta e ambígua.

    Tais erros são geralmente muito fáceis de detectar automaticamente e sempre precisam ser corrigidos.
    Eles violam as regras de sintaxe da linguagem. O programa não será executado se contiver um erro de sintaxe.
    Vamos restaurar os sinais de pontuação, mas mudar uma das palavras, substituindo “path(caminho)” pelo erro de grafia “pth(cam)”.

    // Depois de sair da floresta, vire à direita na primeira 'pth' e dirija por 500m. Aguarde no local.

    Novamente, o destinatário provavelmente adivinhará do que se trata, 
    mas o intérprete não pode se dar ao luxo de adivinhar o que a palavra “pth” pode significar,
    porque ele não sabe o significado de tal palavra. 
    Tal erro também é fácil de detectar, porque a palavra “pth” não está no vocabulário da nossa linguagem.
    Este é um erro semântico.

    Em JavaScript, o intérprete iniciará o programa e interromperá sua execução após atingir tal instrução.
    Este tipo específico de erro semântico em JavaScript é chamado de erro de referência.

    O que acontece se substituirmos uma palavra por um erro de digitação que já existe no nosso dicionário?

    // Depois de sair da floresta, vire à direita no 'fist' caminho e dirija por 500m. Aguarde no local.

    Desta vez, perdemos a letra “r” na palavra “first(primeiro)” e obtivemos a palavra “fist(punho)”.
    Se a frase for analisada por uma pessoa, ela sentirá que algo está errado
    e começará a procurar por um erro – a palavra “fist” não corresponde de forma alguma à frase,
    e provavelmente adivinhará com o que substituí-la.
    este Também é um erro semântico.

    A última categoria são os erros lógicos. 
    Eles são de longe os mais difíceis de encontrar, porque de um ponto de vista formal, tudo parecerá correto. 
    Deveríamos dizer ao nosso amigo para virar à direita, mas ocupados com outra coisa, corremos para escrever... à esquerda.

    // Depois de sair da floresta, vire à "esquerda" no primeiro caminho e dirija por 500m. Aguarde no local.

    Formalmente, tudo parece correto: sintaxe, vocabulário, contexto.
    A informação é consistente e inequívoca. E obviamente incorreta. 
    O erro não será detectado até que alguém tente seguir esta instrução e desapareça em algum lugar no deserto.

    Os dois últimos erros podem parecer bem similares à primeira vista, 
    mas descrevem duas situações completamente diferentes. 
    Um erro lógico torna possível executar a instrução, mas dará o resultado errado. 
    Uma instrução com um erro semântico não fará sentido, então muito provavelmente não será possível executá-la dessa forma.
*/












