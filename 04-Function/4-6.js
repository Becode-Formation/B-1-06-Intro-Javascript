let factorial = (a) => {
    if( a === 1){
        return 1;
    } else {
        console.log(a);
        return a * factorial(a - 1);
    }
}

console.log(factorial(7));