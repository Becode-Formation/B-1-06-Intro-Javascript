const rLine = require('readline-sync');

    let wUser = Number(rLine.question("Give me a width"));
    let hUser = Number(rLine.question("Give me a height"));

let calcSurface = (width, height) => {
    console.log("The surface is : " + (width * height));
}

calcSurface(wUser, hUser);
