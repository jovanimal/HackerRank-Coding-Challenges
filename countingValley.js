function countingValleys(n, s) {
let countU = 0, countD = 0, valley = 0;
  for (let i =0; i < n; i++) {
    if (s[i] === "U") countU ++;
    if (s[i] === "D") countD --;
    if (countU + countD === 0 && s[i] === "U" ) valley ++
  }
return valley
}
countingValleys(8,"UDDDUDUU")