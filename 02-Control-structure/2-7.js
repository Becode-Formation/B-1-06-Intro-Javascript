const rLine = require('readline-sync');

let n = Number(rLine.question("Enter un number"));
let result = 0;
for(i = 0; i < n; i ++) {
    let n2 = Number(rLine.question("Give me a number again :"));
    result +=n2;
}

console.log("The result of your " + n + " number is : " + result +".");