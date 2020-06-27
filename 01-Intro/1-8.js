const readlineSync = require('readline-sync');

console.log("Hello ! I'm asking you 3 questions for create a good story with me. Are you ready ? Let's go ! ");
let remainQuestion = 3;
console.log("Remain questions : " + remainQuestion)
let cName = readlineSync.question("Give a name for your character : " );
remainQuestion -= 1;
console.log("Remain questions : " + remainQuestion)
let cClass = readlineSync.question("Give him a class (warrior, architect, mage, student, ...");
remainQuestion -= 1;
console.log("Remain questions : " + remainQuestion);
let cWeapon = readlineSync.question("What's weapon your character have ? ");

console.log("The story begin in a country where there is no human  being except " + cName + ". This is the only human. There are other things.. but there are not very human.");
console.log("With your " + cWeapon + " and your super skill of " + cClass + " you are going to save the planet en eliminate all of this creature ! Wonderful story." );
console.log("That's the end of the story.. I have no time to write a trilogy, sorry !");

