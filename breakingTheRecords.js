function breakingRecords(scores) {
  let breakHigh = 0;
  let breakLow = 0;
  for (let i = 0; i < scores.length; i++) {
    let highStop = Math.max(...scores.slice(0,i+1));
    let lowStop = Math.min(...scores.slice(0,i+1));
    if (scores[i+1] > highStop) breakHigh ++;
    if (scores[i+1] < lowStop) breakLow ++;
  }

  return [breakHigh, breakLow];
}

breakingRecords([3,4,21,36,10,28,35,5,24,42])
breakingRecords([100,45,41,60,17,41,45,43,100,40,89,92,34,6,64,7,37,81,32,50])
