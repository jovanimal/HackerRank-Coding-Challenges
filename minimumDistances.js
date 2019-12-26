function minimumDistances(a) {
  let newArr = a.concat().sort();
  let arr = [];
  for (let i = 0; i < a.length - 1; i ++) {
    if (newArr[i] == newArr[i+1]) arr.push(newArr[i])
  }
  if (arr.length < 1) return -1

  let minimumDistance = [];
  for (let element of arr) {
    let distance = a.lastIndexOf(element) - a.findIndex(a => a==element);
    minimumDistance.push(distance)
  }
  return Math.min(...minimumDistance)
}

console.log(minimumDistances([7,1,3,4,1,7]))
console.log(minimumDistances([1,2,3,4,10]))
console.log(minimumDistances([1,1]))