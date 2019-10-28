function calcFPS(){
  mph = mphTF.value  // read weight from element with id="weight"
  fps = mph*5280/3600

  fpsLabel.innerHTML =    // write into label element with id "BMI"
      "Hi "+fullNameTF.value + ", your FPS is "
      +fps.toFixed(1)  // round BMI to 1 decimal place
}
