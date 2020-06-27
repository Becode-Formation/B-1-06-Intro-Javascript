const rLine = require('readline-sync');

let numUser = Number(rLine.question("Give a number between 1 and 7 : "));

if (numUser === 1 ) {
    console.log("Monday");
} else if (numUser === 2){
    console.log("Tuesday");
} else if ( numUser === 3) {
    console.log("Wednesday");
} else if (numUser === 4){
    console.log("Thursday");
}else if (numUser === 5) {
    console.log("Friday");
}else if (numUser === 6){
    console.log("Saturday");
}else if (numUser === 7) {
    console.log("Sunday");
} else{
    console.log("Are you sure that the number is between 1 and 7 ? :) ");
}