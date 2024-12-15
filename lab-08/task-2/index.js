const numbers = getValuesFromUser();

console.log("result of addition:", operate("+", ...numbers));
console.log("result of subtraction:", operate("-", ...numbers));
console.log("result of multiplication:", operate("*", ...numbers));
console.log("result of division:", +operate("/", ...numbers).toFixed(2));

function operate(operator, ...numbers) {
  if (!isValidOperator) {
    alert(`
            Please enter a valid operator
            Valid operators: [+, -, *, /]
            `);
    return;
  }

  if (!isValidNumbers) {
    alert("please enter valid numbers");
    return;
  }

  return Array.from(numbers).reduce((acc, curr) => {
    switch (operator) {
      case "+":
        return acc + curr;
      case "-":
        return acc - curr;
      case "*":
        return acc * curr;
      case "/":
        if (curr === "0") {
          alert("can't divide by zero");
          return 0;
        }
        return acc / curr;
      default:
        return acc;
    }
  });
}

function isValidOperator(operator) {
  const validOperators = ["+", "-", "*", "/"];
  return validOperators.includes(operator);
}

function isValidNumbers(arr) {
  return arr.every(Number.isInteger);
}

function getValuesFromUser() {
  var input;
  while (true) {
    input = prompt(
      "please enter comma separated values eg: 1,2,3,4",
      "1,2,3,4,3,2"
    );
    var allNumbers =
      input &&
      input.split(",").every((value) => Number.isInteger(parseInt(value)));

    if (allNumbers && input.split(",").length > 1) break;

    alert(`
      Invalid input.
      Please enter a comma-separated sequence of integers.
      Example: 1,2,3,4
      `);
  }
  return input.split(",");
}
