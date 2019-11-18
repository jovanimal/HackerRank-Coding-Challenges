function utopianTree(n) {
  let height = 0;
  for (let i =0; i <= n; i++) {
    if (i % 2 === 1 || i === 1) height *= 2;
    else height += 1;
  }
  return height
}

console.log(utopianTree(5))