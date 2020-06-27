let arr1 = [5, 9, 130, 4, 8];

// Methode courte
console.log(Math.max(...arr1));
console.log(Math.min(...arr1));


// Méthode longue
let min = arr1 [0];
let max = arr1 [0];

for(let elt of arr1){
    if (elt < min){
        min = elt;
    } else if (elt > max){
        max =elt;
    }
}

console.log("Le plus petit est : " + min );
console.log("Le plus grand est : " + max);