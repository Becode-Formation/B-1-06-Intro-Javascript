const rLine = require('readline-sync');

let numChose = new Number(rLine.question("Give me a number : "));
let num = 42;

while (numChose != num) {
    console.log("Are you sure ?");
    numChose = new Number(rLine.question("Give me a number : "));
}