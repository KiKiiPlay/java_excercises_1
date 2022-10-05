let number1 = 4;
let number2 = 4;

if (number1 === 8 || number2 === 8) {
  console.log("some of these numbers is equal 8");
} else if (number1 - number2 === 8) {
  console.log("subtraction 'number1 - number2' gives 8");
} else if (number2 - number1 === 8) {
  console.log("subtraction 'number2 - number1' gives 8");
} else if (number1 + number2 === 8) {
  console.log("addition gives 8");
}
