var repeat;
var userValues = getValuesFromUser();

while (true) {
  console.log(main());
  repeat = confirm("do you want to choose again ?");

  if (!repeat) break;
}

function main() {
  var userAction = getValidAction();
  var result;

  switch (userAction) {
    case "a":
      result = userValues;
      break;
    case "b":
      result = userValues.slice().sort((a, b) => a - b);
      break;
    case "c":
      result = userValues.slice().sort((a, b) => b - a);
      break;
    case "d":
      result = userValues.reverse();
      break;
    case "e":
      var evens = userValues.filter((val) => val % 2 === 0);
      evens.length
        ? (result = evens)
        : alert("There are no even numbers in the array!");
      break;
    case "f":
      var num = getValidNumber();
      var divisible = userValues.filter((val) => val % num === 0);
      divisible.length
        ? (result = divisible)
        : alert(
            "entered values doesn't contain numbers that are divisible by " +
              num
          );
      break;
    case "g":
      result = userValues.map((val) => (val * 0.7).toFixed(2));
      break;
    case "h":
      result = userValues.join("***");
      break;
    default:
      alert("invalid input");
      break;
  }

  return result;
}

// Get sequence of values separated by commas
function getValuesFromUser() {
  var input;
  while (true) {
    input = prompt(
      "please enter comma separated values eg: 1,2,3,4",
      "1,2,3,-12,312,100,-3,0"
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

// Gets a valid action from user
function getValidAction() {
  var input;
  var validActions = ["a", "b", "c", "d", "e", "f", "g", "h"];
  while (true) {
    input = prompt(
      `
      choose: a,b,c,d,e,f,g,h
      ( a ) => to display array with the same receiving order
      ( b ) => to display array with ascending order
      ( c ) => to display array with descending order
      ( d ) => to reversed version of original array 
      ( e ) => to display even numbers only 
      ( f ) => display all numbers from array which divisible by received number , 
      ( g ) => display new array with 30% discount for all numbers in original array
      ( h ) => display string which represent all numbers of array concated with ***
      `,
      "a"
    );
    if (validActions.includes(input.toLowerCase())) break;

    alert(`
      Please enter a valid action
      Valid Actions: ${validActions.join(" | ").toUpperCase()}`);
  }
  return input.toLowerCase();
}

// Get a valid number from user
function getValidNumber() {
  var input;
  while (true) {
    input = parseInt(prompt("Enter a valid number"));
    if (Number.isInteger(input)) break;

    alert("please enter a valid number");
  }
  return parseInt(input);
}
