function birthday(s, d, m) {
  let count = 0;
  for (let i = 0; i < s.length; i++) {
    let sliceUp = s.slice(i,i+m);
    if (sliceUp.reduce((a,c) => a+c) === d) count ++
  }
return count;
}

birthday ([1,2,1,3,2],3,2)