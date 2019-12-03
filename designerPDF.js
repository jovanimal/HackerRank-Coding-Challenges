function designerPdfViewer(h, word) {
  let height = 0;
  for (let i = 0; i < word.length; i++) {
    let position = word[i].charCodeAt() -97;
    if (height < h[position]) {
      height = h[position];
    }
  }
  return height * word.length
}

console.log(designerPdfViewer([1,3,1,3,1,4,1,3,2,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,7],"zaba"))