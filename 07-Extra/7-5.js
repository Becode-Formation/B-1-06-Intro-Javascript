let arr = ["Moto", "Voiture", "Velo", "Bus", "Trotinette"];
console.log(arr);

for(i = 0; i < arr.length; i ++) {
    let last = arr[i];
    let next = arr[i +1];
    if(last > next ){
        let arrTemp = last;
        last = next;
        next = arrTemp;
    }
}

console.log(arr);