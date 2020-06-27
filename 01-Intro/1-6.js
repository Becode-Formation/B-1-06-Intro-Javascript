const readlineSync = require('readline-sync');
let num1 = new Number(readlineSync.question("Give me ..... a number : "));
let num2 = new Number(readlineSync.question("This time.. give me just a number : "));

console.log(num1 / num2);