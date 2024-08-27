/*
    if (condition) {
        block of code
    }
*/
// exemplo 1
/*let isUserReady = confirm("Are you ready?");
if (isUserReady){
    console.log("User ready!");
    alert("User ready!");
}*/

/* exemplo 2
let unitPrice = 10;
let pieces = prompt("How many pieces do you order?", 0);
if (pieces > 0) {
    let total = unitPrice * pieces;
    console.log(total);
}
console.log(total); // -> Uncaught ReferenceError: total is not defined
*/

/* exemplo 3
let userAge = 23;
let isFemale = false;
let points = 703;
let cartValue = 299;
let shippingCost = 9.99;
if (userAge > 21) {
    if (cartValue >= 300 || points >= 500) {
     shippingCost = 0;
    }
}
console.log(shippingCost);
*/