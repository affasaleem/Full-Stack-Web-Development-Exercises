function bmiCalculator(weight, height) {
  var bmi = weight / Math.pow(height, 2);
  return Math.round(bmi);
}
var bmi = bmiCalculator(70, 1.6);
console.log("bmi: "+ bmi); 


/* if my weight is 65k and my height is 1.8m, i holud be able to call your function like this:
var bmi = bmiCalculator(65,1.8);
bmi should equal around20 in this case. */