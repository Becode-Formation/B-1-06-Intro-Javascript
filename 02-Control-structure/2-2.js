const rLine = require('readline-sync');

let min = new Number(rLine.question('Give me a little number : '));
let max = new Number(rLine.question('Give me a most greater second number : '));
let current = new Number(rLine.question('Give me a third number : '));

if ((min < current) && (current < max)) {
    console.log("Yes, The Third number is between the first and the second ! ")
} else if (min > max) {
    console.log("Error.. the first number is greater than the second..")
}