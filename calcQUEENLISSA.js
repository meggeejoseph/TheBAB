function calcMPB(){
  pp = phoneprice.value  // read weight from element with id="phoneprice"
  mpb = pp/12  // calculate the Body Mass Index
  MPB.innerHTML =    // write into label element with id "MPB"
      "You're monthly phone bill is "
      +mpb.toFixed(1)  // round BMI to 1 decimal place




}
