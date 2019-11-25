function cutTheSticks(arr) {
//   let cut =[];
//   for (let i = 0; i < arr.length; i++) {
//     var secondMin = Math.min.apply(null, arr.filter(n => n > 0 ))
//     console.log(arr)
//     arr = arr.map(x => x- secondMin);
//     cut.push(arr.filter(x => x >= 0).length)
//   }
//  return cut.filter(x => x > 0)

let resultArray = []
    while (arr.length > 0) {
        resultArray.push(arr.length);
        let min = arr.reduce((a,b) => Math.min(a,b));
        arr = arr.filter((el) => el > min);
    }
    return resultArray
}

console.log(cutTheSticks([5,4,4,2,2,8]))



