const readlineSync = require('readline-sync');
let num1 = new Number(readlineSync.question("Give me a number with decimal bro :"));
let num2 = new Number(readlineSync.question("Give me a second number with decimal bro :"));

console.log("The result of multiplication is : "+  Math.floor(num1) * num2);