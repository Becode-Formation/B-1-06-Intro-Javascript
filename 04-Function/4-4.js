const rLine = require('readline-sync');

let arrUser= [];

let n = parseInt(rLine.question("How many random numbers do you want ?"));

let rand10 = () => {
    return (Math.round(Math.random() * 10) +1);
}

let multiRand =(n) =>{
   arrUser;
    for(i = 1; i < n; i ++){
        rand10();
        arrUser.push(rand10());
    }
    return arrUser;
}

console.log("Numbers : " +multiRand(n));

// Function for the average of the array
let average = (arr) => {
    let averageArr = 0;
    for(let elt of arr) {
        averageArr += elt;
    }
    return (averageArr / arr.length);
}

console.log("The average of theses numbers : " + average(arrUser));

//Function that return the min of an array
let min = (arr) => {
    return Math.min(...arr);
}

console.log("The min numbers of theses numbers : " + min(arrUser));

//Function that return the max of an array
let max = (arr) => {
    return Math.max(...arr);
}

console.log("The max number of theses numbers : " + max(arrUser));

