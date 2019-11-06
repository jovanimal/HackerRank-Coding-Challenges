

function compareTriplets(a, b) {
  let aScore = 0;
  let bScore = 0;
  for (let i = 0; i < a.length; i ++) {
    if (a[i] > b[i]) {
      aScore += 1;
    } else if (a[i] === b[i]) {
      aScore += 0;
    } else {
      bScore += 1;
    }
  } 
  let score = [aScore, bScore];
  return score;
};

console.log(compareTriplets([3,3,3,3],[1,3,1]))