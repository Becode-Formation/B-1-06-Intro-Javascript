let i = 1;

while (i < 100) {
    console.log(i);
    if(i% 2 === 0){
        console.log( "the division is " + i /2);
    } else if ( i % 2 === 1 ){
        console.log("The multiplication is " + i * 3);
    }
    i++;
}