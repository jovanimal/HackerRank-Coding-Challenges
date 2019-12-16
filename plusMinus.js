function plusMinus(arr) {
  let positive = 0, negative = 0, zero = 0;

  for (let i = 0; i < arr.length; i++) {
    if (Math.sign(arr[i]) === 1) {
      positive ++
    } else if (Math.sign(arr[i]) === -1) {
      negative ++;
    } else {
      zero ++;
    }
  }
  
  let positiveDec = positive/arr.length;
  let negativeDec = negative/arr.length;
  let zeroDec = zero/arr.length;
  
  console.log(positiveDec.toFixed(6));
  console.log(negativeDec.toFixed(6));
  console.log(zeroDec.toFixed(6));
}

plusMinus([1,1,0,-1,-1])