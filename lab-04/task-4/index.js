var value;
var exampleArr = [10.2, 20, 34, 333.12345];

// 4.1- write js program which accept 3 inputs
console.log(radix());

// 4.2- receive number from user then display it with different locals
// console.log(displayLocals("ar-EG"));

// 4.3- write js program to display all numbers inside array with the same length
// sameLength(exampleArr);

function radix() {
  // Get a valid alpha numeric value
  var number;
  while (true) {
    number = prompt("please enter a valid number", 1000);
    if (isAlphaNumeric(number)) break;

    alert("valid values: [0 : 9] [a : z] [A : Z]");
  }

  // get a valid initial radix
  var initialRadix;
  while (true) {
    var initialRadix = getValidNumber("Initial Radix: ", 2);
    var containsNaN = number
      .split("")
      .map((num) => parseInt(num, initialRadix))
      .some((n) => isNaN(n));

    if (!containsNaN) break;
    alert("please enter a valid radix");
  }

  // Get a valid target radix
  var targetRadix;
  while (true) {
    targetRadix = getValidNumber("Target Radix: ", 8);
    if (36 >= targetRadix && targetRadix > 0) break;
    alert("Invalid Target Radix");
  }

  var result = parseInt(number, initialRadix).toString(targetRadix);
  return result;
}

function displayLocals(locale) {
  var input = getValidNumber();
  return input.toLocaleString(locale);
}

function sameLength(arr) {
  var maxLength = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].toString().length > maxLength) {
      maxLength = arr[i].toString().length;
    }
  }
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i].toPrecision(maxLength));
  }
}

/*******************
 * Helper function
 ******************/
function getValidNumber(message, defaultVal) {
  while (true) {
    value = parseInt(prompt(message, defaultVal));

    if (!isNaN(value)) {
      return value;
    } else {
      alert("please enter a valid number");
    }
  }
}

function isAlphaNumeric(str) {
  if (!str.length) return false;

  for (let char of str) {
    let charCode = char.charCodeAt(0);

    if (
      !(57 >= charCode && charCode >= 48) &&
      !(90 >= charCode && charCode >= 65) &&
      !(122 >= charCode && charCode >= 97)
    ) {
      return false;
    }
  }
  return true;
}
