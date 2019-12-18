function migratoryBirds(arr) {
let counts = [];

  for (let i = 0; i < arr.length; i++) {
    var num = arr[i];
    counts[num] = counts[num] ? counts[num] + 1 : 1;
  }
  
  let uniqueArray = arr.sort().filter(function(item, pos) {
    return arr.indexOf(item) == pos
  })
  
  let count = [];
  for (let element of uniqueArray) {
    count.push(counts[element])
  }
  let highestCount = Math.max(...count);
  let position = count.findIndex(a => a == highestCount);
  return uniqueArray[position]
}

migratoryBirds([1,2,3,4,5,4,3,2,1,3,4])