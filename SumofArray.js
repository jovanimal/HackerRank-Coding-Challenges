function aVeryBigSum(ar) {
  let sum = 0;
  for (let i =0; i < ar.length; i++) {
    sum += ar[i];
  }
  console.log(sum);
 }

 aVeryBigSum([1,2,3,4,5])