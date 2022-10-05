/*
ASSIGNMENT RULES
- All the answers must be written in JavaScript
- You can ask for help, reach the Teaching Assistants if needed
- You can Google / use StackOverflow BUT only when you think you need something we didn't cover during lessons yet
- You can test your code in a separate file or de-commenting the single exercises in this one.
- You can use the bash terminal, the VSCode terminal or the one embedded in your Operating System if you're using macOS or Linux.
- The solution must be available for the tutors by the end of the day (5PM CET)
*/

/* EXERCISE 1
 Enumerate and describe the main datatypes in JavaScript. Try to explain the concepts as you were speaking to a 12 years old.
*/

/* console.log("\nIn JavaScript we have several datatypes:\n");
let int = 100;
let float = 15.5;
let string = "Spectacled Caiman";
let boolean = true;
console.log("INT:", int);
console.log("FLOAT:", float);
console.log("STRING", string);
console.log("BOOLEAN:", boolean);

console.log(
  "\nAnd the most interesting thing is that they are declaring with the same keyword 'let'"
);
console.log("This is because, JS language is considered to be loosely typed"); */

/* EXERCISE 2
 Try to describe what a variable is, in your own words.
*/

/* console.log(
  "\nVariable is a place in memory, where we can place any value we want. Beginning from int and finishing with boolean "
);
 */

/* EXERCISE 3
 Write the code to execute an addition (a sum) of the numbers 12 and 20.
*/

/* let number1 = 12;
let number2 = 20;
let sum = number1 + number2;
console.log("The sum of", number1, "and", number2, "is:", sum); */

/* EXERCISE 4
 Create a variable named x and assign to it the number 12.
*/

/* let x = 12;
console.log("There is x:", x); */

/* EXERCISE 5
 Create a variable called name and assign to it the string "John Doe".
*/

/* // *it is immposible to set a variableName = name, because "name" is defined as a function prototype, that's why i set "hisName" as a variableName

let hisName = "John Doe";
console.log("The name is:", hisName); */

/* EXERCISE 6
 Execute a subtraction between the number 12 and the variable x you declared before (which is storing the value 12).
*/

/* let x = 12;
console.log("The result is:", x - 12); */

/* EXERCISE 7
 Create two variables: name1 and name2. Assign to name1 the string "john", and to name2 the string "John" (this one has a capital J!)
 Verify that name1 is different from name2 (HINT: check their equality to be false).
 Finally, verify that the equality between name1 and name2 becomes true if both are lowercase (without changing the value of name2).
*/

/* let name1 = "john";
let name2 = "John";

let nameEquality = name1 === name2;

console.log("The equality between two names is:", nameEquality, "\n");

if ((name1 && name2) === "john") {
  console.log("These names are equal!!!");
} */

/* EXERCISE 8
 Create a variable named x, and assign to it a numeric value less than 10.
 Write the code to print the literal value of x (ex.: if x is 1, it should print "one", if x is 5 it should print "five" etc.).
*/

/* let x = 9;
if (x === 1) {
  console.log("one");
}
if (x === 2) {
  console.log("two");
}
if (x === 3) {
  console.log("three");
}
if (x === 4) {
  console.log("four");
}
if (x === 5) {
  console.log("five");
}
if (x === 6) {
  console.log("six");
}
if (x === 7) {
  console.log("seven");
}
if (x === 8) {
  console.log("eight");
}
if (x === 9) {
  console.log("nine");
}
if (x === 10) {
  console.log("ten");
} */

/* EXERCISE 9
 [Extra] Assign a value to a variable using a ternary operator (this topic has not been covered during lesson yet,
 try to search it by yourself, tomorrow morning we'll discuss it together!)
*/

/* let loto = 12;
let victory = "VICTORY";
let loser = "LOOSER";

let result = loto === 12 ? victory : loser;

console.log("The result of your loto is:", result); */
