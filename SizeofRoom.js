function calcAT(){
  h = height.value  // read value from element with id="height"
  b = base.value // read value from element with id="base"
  at = h*b/2 //  calculate the area of triangle

  AT.innerHTML =    // write into label element with id "CD"
      "Congrats! The area of your triangle is "
      +at.toFixed(1)  // round BMI to 1 decimal place
}
