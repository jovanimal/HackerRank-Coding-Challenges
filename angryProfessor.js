function angryProfessor(k, a) {
  let onTime = 0;
  for (let i = 0; i < a.length; i ++) {
    if (a[i] <= 0) onTime ++;
  }
  if (onTime >= k) return "NO"
  else return "YES"
}

// one liner code
// return a.filter(x=>x<=0).length < k ? "YES" : "NO"

console.log(angryProfessor(3,[-1,-3,,4,2]));