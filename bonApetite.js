function bonAppetit(bill, k, b) {
  let totalBill = bill.reduce((a,c) => a + c);
  let lessEater = (totalBill - bill[k]) / 2;
  if (b === lessEater) console.log("Bon Appetit");
  if (b > lessEater) console.log(b-lessEater);
}


bonAppetit([3,10,2,9],1,7)
