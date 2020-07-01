const rLine = require('readline-sync');
let user = new Number(rLine.question("Give me a number and make magic : "));

let fibonnacci = (n) => {
    let first = 0;
    let second = 1;
    console.log(first);
    console.log(second);
    while(n > 0) {
        let third = first + second; // Additionner les deux précédents pour avoir le troisième
        first = second; // Décaler les nombres pour la suite
        second = third;
        console.log(third);
        n--; // réduire la boucle de 1 fois
    }
}

fibonnacci(user);