function calcCD(){
  c1 = carvalue.value  // read value from element with id="car value"
  y = years.value // read value from element with id="years"
  cd = Math.pow(1-.2, y)*c1 //  calculate the Car Depreciation

  CD.innerHTML =    // write into label element with id "CD"
      "Your car value after the first year "
      +cd.toFixed(1)  // round BMI to 1 decimal place
}
