function catAndMouse(x, y, z) {
let diffA = Math.abs(x-z), diffB = Math.abs(y-z);
if (diffA == diffB) return "Mouse C";
if (diffA > diffB) return "Cat B";
  else return "Cat A"

}

console.log(catAndMouse(1,3,2))