const rLine = require('readline-sync');
let user = new Number(rLine.question("Give me a number to divide : "));

let divisor = (n) => {
    let arr = [];
    i = 2;
    while(i < n) { // Tant que on peut le diviser
        if(Number.isInteger(n / i)){ // Si le résultat de la division est un entier
            arr.push(i) // On le met dansle tableau
            i++;
        } else {
            i ++ // On cherche un plus grand diviseur
        }
    }
        return console.log(arr);
}
divisor(user);