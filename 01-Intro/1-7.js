const readlineSync = require('readline-sync');
let shoeSize = new Number(readlineSync.question("Give me your shoe size please :"));
let birthYear = new Number(readlineSync.question("Give me your birth year now : "));

result = shoeSize * 2 ;
console.log("Multiplicate the Shoe size by 2 :" + result);
result +=  5;
console.log("Adding 5 to the result : " + result );
result *= 50;
console.log("Multiplicate by 50 : " + result);
result -= birthYear;
console.log("Soustract by the birthYear : " + result)
result += 1766;
console.log("Adding 1766 : " + result)
//This is the result total of the calcul : 
console.log("The result is :" + result);