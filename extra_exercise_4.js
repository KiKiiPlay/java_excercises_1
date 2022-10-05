let number1 = 123;
let number2 = 456;
let number3 = 789;
let temp = 0;

if (number2 < number3) {
  temp = number2;
  number2 = number3;
  number3 = temp;
}

if (number1 < number2) {
  temp = number1;
  number1 = number2;
  number2 = temp;
}

if (number2 < number3) {
  temp = number2;
  number2 = number3;
  number3 = temp;
}

console.log(number1, number2, number3);
