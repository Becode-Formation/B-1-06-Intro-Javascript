const rLine = require('readline-sync');


randNum = () => {
    return  Math.round(Math.random() * 100 + 1);
}
guessNum = (num) => {
    //TANT QUE le nombre à deviné est faux 
        //DEMANDER un nombre à deviner 
        //SI le nombre est trop petit 
                //Nombre trop petit 
                // DEMANDER un nombre à deviner
        // SINON SI le nombre est trop grand 
                //Nombre trop grand
                //DEMANDER un nombre à deviner 
        // SINON le nombre est égal
            //Bravo ! 
    let numUser = rLine.question("Insert a number : ");
    while(numUser != num) {
        if(numUser < num) {
            console.log("Too low..");
            numUser =  rLine.question("Insert a number : ");
        } else if (numUser> num ){
            console.log("Too high");
            numUser =  rLine.question("Insert a number : ");
        }
    }
    return console.log("Bravo !");
}
guessNum(randNum());