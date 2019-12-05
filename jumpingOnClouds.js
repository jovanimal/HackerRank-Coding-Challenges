function jumpingOnClouds(c, k) {
  let energy = 100;
  let newArr = [];

  for (let i = 0; i < c.length; i++) {
    if (i % k === 0) newArr.push(c[i]);
  };
  for (let i=0; i < newArr.length; i++) {
    if (newArr[i] == 1) energy -= 3;
    else energy --;
  }
  return energy;
}

console.log(jumpingOnClouds([0,0,1,0,0,1,1,0],2))
console.log(jumpingOnClouds([1,1,1,0,1,1,0,0,0,0],3))