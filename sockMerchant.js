function sockMerchant(n, ar) {
  let counts = {}; 
  let count = 0;
  
  ar.forEach(function(x) { 
    counts[x] = (counts[x] || 0)+1; });
for (let i = 0; i < Object.keys(counts).length; i++) {
    count += Math.floor(Object.values(counts)[i]/2);
  }
  return count;
}

console.log([10,20,20,10,10,30,50,10,20].sort())
console.log(sockMerchant(9,[10,20,20,10,10,30,50,10,20]))
