function birthdayCakeCandles(ar) {
    let tallest = Math.max(...ar);
    return ar.filter(num => num == tallest ).length;
}

//     let count =0;
//     for (let i=0; i < ar.length; i++) {
//         if (ar[i] === Math.max(...ar)) {
//         count ++;
//         }
//     }
// console.log (count)

console.log(birthdayCakeCandles ([1,2,2,3,6,7,7,7]));

