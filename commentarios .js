// ctr + / -> Comentar linha
// ctr + shift + / -> Comentar bloco

// This is a single-line comment
let x = 42; // This is also a single line comment, although the part before the double slash is proper code and will be executed
// This line and the next one will be ignored
// x = 8;
console.log(x); // -> 42

/*
    This is a block
    comment and it can
    span multiple lines
   
    So this code won't be executed
    console.log("Hello, World!");
*/
   
let y /* because no better name */ = 42;
console.log(y); // -> 42

// setting greetingText to Hello - BAD
const greetingText = "Hello";
   
angle = angle + 90; // rotate 90 degrees to compensate for vertical screen. - GOOD
   
// TODO add check for 0 as divisor - GOOD
let result1 = a / b;
   
// No check needed for b - guaranteed not a zero - GOOD
let result2 = a / b;
   
// Dividing a by b - BAD
let result3 = a / b;

// const greetingText = "Hi";
const greeting = "Hello";
// const greetingText = "Welcome";