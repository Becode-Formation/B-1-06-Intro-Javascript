const rLine = require('readline-sync');

let xA = parseInt(rLine.question("Donne moi le 1er point x : "));
let yA = parseInt(rLine.question("Donne moi le 1er point y : "));

let xB = parseInt(rLine.question("Donne moi le 2eme point x : "));
let yB = parseInt(rLine.question("Donne moi le 2eme point y : "));


let pointA = [xA, yA];
let pointB = [xB, yB];

let calcDistance = (a, b) => {
 
    return Math.sqrt(Math.pow((b[0] - a[0]), 2) + Math.pow((b[1] - a[1]), 2)) ;
}

console.log(calcDistance(pointA, pointB));