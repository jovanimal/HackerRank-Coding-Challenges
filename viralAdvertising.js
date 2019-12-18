function viralAdvertising(n) {
  let shared = 5, liked = 0, cum = 0;
  for (let i =0; i < n; i++) {
    liked = Math.floor(shared/2);
    shared = liked * 3;
    cum += liked;
  }
return cum
}

console.log(viralAdvertising(5))