function calcInches(){
  b = breath.value  // read feet from element with id="feet"
  b per year = (b*60)*24)*365)  // calculate inches
  BIM.innerHTML =    // write into label element with id "Inches"
      "Your Breath per Year is "
      +b per year.toFixed(1)  // round inches to 1 decimal place
}
