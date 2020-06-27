const readlineSync = require('readline-sync');

let age = new Number(readlineSync.question("What's your age ?"));

if (age >= 18 ){
    console.log("You're an adult");
} else {
    console.log("You're not yet an adult");
}