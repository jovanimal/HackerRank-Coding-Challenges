function miniMaxSum(arr) {

  let sum = arr.reduce((a,c) => a + c);
  let biggestSum = sum - Math.min(...arr);
  let smallestSum = sum - Math.max(...arr);
  console.log(smallestSum, biggestSum)
}

miniMaxSum([1,2,3,4,5]);