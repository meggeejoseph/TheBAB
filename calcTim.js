function calcBMI(){
  d = distance.value  // read weight from element with id="weight"
  mg = mpg.value  // read height from element with id="height"
  d = parseFloat(d)
  mg = parseFloat(mg)
  g = d/mg  // calculate the Body Mass Index
  BMI.innerHTML =    // write into label element with id "BMI"
      "Your BMI is "
      +g  // round BMI to 1 decimal place
}
