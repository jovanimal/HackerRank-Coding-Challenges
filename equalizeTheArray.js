function equalizeArray(arr) {
  let mostNum = arr.sort((a,b) =>
          arr.filter(v => v===a).length- arr.filter(v => v===b).length).pop();
  return arr.filter(a => a !== mostNum).length;
}

console.log(equalizeArray([3,3,2,1,3]))