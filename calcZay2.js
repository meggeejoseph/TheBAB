function calcInches(){
  f = feet.value  // read feet from element with id="feet"
  inches = 12*f  // calculate inches
  Inches.innerHTML =    // write into label element with id "Inches"
      "Your Height In Inches is "
      +inches.toFixed(1)  // round inches to 1 decimal place
}
