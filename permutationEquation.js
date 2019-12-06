function permutationEquation(p) {
  let arr = [];
  for (let i = 1; i <= p.length; i++) {
    let position = p.indexOf(i) + 1;
    let nextPos = p.indexOf(position) +1;
    arr.push(nextPos)
  }
  return arr
}

console.log(permutationEquation([4,3,5,1,2]))