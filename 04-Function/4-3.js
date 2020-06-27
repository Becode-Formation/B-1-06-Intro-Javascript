const rLine = require('readline-sync');

let n = rLine.question("How many random numbers do you want ?");

let rand10 = () => {
    return (Math.round(Math.random() * 10) +1);
}


let multiRand =(n) =>{
    let arr = [ ];
    for(i = 1; i < n; i ++){
        rand10();
        arr.push(rand10());
    }
    return arr;
}

console.log("Numbers : " + multiRand(n));