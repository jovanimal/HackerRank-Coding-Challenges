function diagonalDifference(arr) {
  let sum1 = 0, sum2 = 0;
  for (let i = 0; i < arr.length; i++) {
    sum1 += arr[i][i];
    };
  let reverseArr = arr.reverse()
    for (let x = 0; x < arr.length; x++) {
    sum2 += reverseArr[x][x];
  }
  return Math.abs(sum1 - sum2);
}

console.log(diagonalDifference([[1,2,3,4,6],[6,7,8,10,10],[11,12,14,14,15],[16,17,18,19,20],[21,22,23,24,25]]))
