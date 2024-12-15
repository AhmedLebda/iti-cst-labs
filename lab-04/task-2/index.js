var count = 0;
var firstNumber, secondNumber, thirdNumber;

collectData();
renderResult();

function collectData() {
  while (count < 3) {
    var userInput = parseFloat(prompt("Please enter a valid number:"));

    if (!isNaN(userInput)) {
      count++;
      if (count === 1) {
        firstNumber = userInput;
      } else if (count === 2) {
        secondNumber = userInput;
      } else {
        thirdNumber = userInput;
      }
    } else {
      alert("Error: Invalid input. Please enter a valid number.");
    }
  }
}

function operate(operator) {
  switch (operator) {
    case "+":
      return firstNumber + secondNumber + thirdNumber;
    case "-":
      return firstNumber - secondNumber - thirdNumber;
    case "*":
      return firstNumber * secondNumber * thirdNumber;
    case "/":
      if (secondNumber === 0 || thirdNumber === 0) {
        alert("Error: Division by zero is not allowed.");
        return null;
      }
      var result = firstNumber / secondNumber / thirdNumber;
      return result.toFixed(2);
    default:
      alert("Error: Invalid operator.");
      return null;
  }
}

function renderResult() {
  var sum = operate("+");
  var multiply = operate("*");
  var divide = operate("/");

  document.write("<h2> Sum: " + sum + "</h2>");
  document.write("<h2> Multiplication: " + multiply + "</h2>");
  if (divide) {
    document.write("<h2> Division: " + operate("/") + "</h2>");
  } else {
    document.write("<h2> Division: Not possible due to division by zero.</h2>");
  }
}
