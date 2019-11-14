function countApplesAndOranges(s, t, a, b, apples, oranges) {
  let appleCount = 0, orangeCount = 0;
  for (let x=0; x < apples.length; x++) {
    let aDistance = a + apples[x];
    if (aDistance >= s && aDistance <= t) appleCount ++
}
for (let y=0; y < oranges.length; y++) {
  let bDistance = b + oranges[y];
    if (bDistance >= s && bDistance <= t) orangeCount ++
}
console.log(appleCount);
console.log(orangeCount);

/* Two-liner using filter 
console.log(apples.filter(apple => a + apple >= s && a + apple <= t).length);
console.log(oranges.filter(orange => b + orange >= s && b + orange <= t).length);
*/
}
 countApplesAndOranges(7,11,5,15,[-2,2,1],[5,-6])

