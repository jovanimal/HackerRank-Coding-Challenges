function range (a,b, step = a < b ? 1 : -1) {
  let arr = [];
  if (step > 0) { 
    for (let i =a; i <= b; i+= step) arr.push(i);
    } else {
    for (let i = a; i >= b; i+= step) arr.push(i);
  }
return arr
}

function sum (ar) {
  let sum = 0;
  for (let value of ar) sum += value;
  return sum;
}


console.log(range(1, 10));
console.log(range(5, 2, -1));
console.log(sum(range(1, 10)));