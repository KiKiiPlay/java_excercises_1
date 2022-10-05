let unknownVariable = "how do you do";
let variableCheck = parseInt(unknownVariable);

if (Number.isInteger(variableCheck) === false) {
  console.log("It is not an integer");
} else {
  console.log("It is integer!!!!");
}
