// let i = 1;

// while ( i <= 100) {
//     console.log(i);
//     i ++
// }
loop =0;

for (i =0; i <= 100; i ++) {
    console.log("Loop = " + loop)
    loop += 1;
    console.log(i);
    if (i < 100) {
        i++
        console.log(i);
    } else {
        return;
    }
}