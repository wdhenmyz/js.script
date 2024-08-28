/* 
    Exercício 1: Escreva um pedaço de código que escreverá números de 100 a 0 no console, mas em passos de 10; então 100, 90, 80... etc.
*/

for (i=100; i>=0; i-=10) {
    console.log(i);
}



/* 
    Exercício 2: Modifique o programa anterior para que ele pergunte ao usuário o primeiro e o último número que ele usa em vez de 100 e 0 (dica: use prompt).

    Verifique se os valores inseridos estão corretos (se o valor inicial é maior que o valor final).
*/

let upperLimit = Number(prompt("Enter upper limit"));
let lowerLimit = Number(prompt("Enter lower limit"));

if (!Number.isNaN(upperLimit) && !Number.isNaN(lowerLimit) && upperLimit > lowerLimit) {
    for (i = upperLimit; i >= lowerLimit; i -= 10) {
        console.log(i);
    }
}



/* 
    Exercício 3: Há dez números diferentes na seguinte matriz de números :

    let numbers = [21, 45, 100, 12, 11, 78, 61, 4, 39, 22];

    Escreva um programa que primeiro escreva todos esses números no console, 
    depois apenas aqueles que são pares (dica: o resto da divisão de um número par por 2 é igual a 0), 
    depois apenas aqueles que são maiores que 10 e ao mesmo tempo menores que 60.
*/

let numbers = [21, 45, 100, 12, 11, 78, 61, 4, 39, 22];

for (number of numbers) {
    console.log(number);
}

for (number of numbers) {
    if (number % 2 === 0) {
        console.log(number);
    }
}

for (number of numbers) {
    if (number > 10 && number < 60) {
        console.log(number);
    }
}



/* 
    Exercício 4: Escreva um programa usando um loop que perguntará ao usuário o nome do filme (primeiro prompt) e sua classificação de www.imdb.com (segundo prompt).
    O programa permitirá que você insira quantos filmes quiser no array movies. 

    Cada elemento do array será um objeto, consistindo de dois campos: title e imdb. 

    A entrada é concluída se o usuário pressionar Cancelar no diálogo do prompt. 

    Então o programa deve primeiro imprimir no console todos os filmes que têm uma classificação menor que 7, 
    então aqueles cuja classificação é maior ou igual a 7. 

    Escreva o nome do filme e sua classificação um ao lado do outro.
*/

let movies = [];
while (true) {
    let title = prompt("Enter movie title");
    let rating = prompt("Enter movie rating (imdb)");

    if (title === null || rating === null) {
        break
    } else {
        movies.push({
            title: title,
            rating: Number(rating)
        });
    }
}

console.log("All with ratings under 7:");
for (movie of movies) {
    if (movie.rating < 7) {
        console.log(`${movie.title} (${movie.rating})`);
    }
}

console.log("All with ratings over 7:");
for (movie of movies) {
    if (movie.rating >= 7) {
        console.log(`${movie.title} (${movie.rating})`);
        break;
    }
}





/* 
    Exercício 5: O conteúdo do objeto que descreve a posição do navio denominado"Mareno"estão escritos no console:

    LATITUDE -> 40.07288 
    LONGITUDE -> 154.48535 
    COURSE -> 285.6 
    SPEED -> 14.0 
    IMO -> 9175717 
    NAME -> MARENO

    O código apresentado abaixo é usado para isso. Complete o programa declarando o objeto faltante no lugar dos três pontos:

    let vessel = ... 
 
    for( let key in vessel) { 
        console.log(`${key} -> ${vessel[key]}`); 
    }

*/

let vessel = {
    LATITUDE: 40.07288,
    LONGITUDE: 154.48535,
    COURSE: 285.6,
    SPEED: 14.0,
    IMO: 9175717,
    NAME: "MARENO"
}

for (let key in vessel) {
    console.log(`${key} -> ${vessel[key]}`);
}



/* 
    Exercise 6: Modifique o calculator program that you made in Module 4 Section 2 in such a way that it 
    will work in the loop until the user inputs q em qualquer uma das caixas de prompt.
*/

while (true) {
    let firstNumber = prompt("Enter first number");
    let secondNumber = prompt("Enter second number");
    let operand = prompt("Enter operand (+, -, * or /)");
    let result;

    if (firstNumber === "Q" || secondNumber === "Q" || operand === "Q") {
        break;
    }

    firstNumber = Number(firstNumber);
    secondNumber = Number(secondNumber);

    if (!Number.isNaN(firstNumber) && !Number.isNaN(secondNumber)) {
        switch (operand) {
            case "+":
                result = firstNumber + secondNumber;
                break;
            case "-":
                result = firstNumber - secondNumber;
                break;
            case "*":
                result = firstNumber * secondNumber;
                break;
            case "/":
                result = firstNumber / secondNumber;
                break;
            default:
                result = "Error: unknown operand";
        }
    } else {
        result = "Error: at least one of the entered values is not a number";
    }
    alert(result);
}

