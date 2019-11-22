function mutation(arr) {
  let splitArr = arr[1].toLowerCase().split('');
  let count = 0;
  for (let element of splitArr) {
    if (arr[0].toLowerCase().indexOf(element) >-1) count ++;
  }
  if (count == arr[1].length) return true;
  else return false
}

console.log(mutation(["hEllo", "lllHleeel"]));
