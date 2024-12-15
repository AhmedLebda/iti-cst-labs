var userDataArr = getValuesFromUser();
renderTable();
renderRepeatedValues();

// Renders a table with the provided values
function renderTable() {
  document.write(
    "<table style='margin: 0 auto; border:1px solid black; padding: 20px;'> <tr> <th style='border:1px solid black; padding: 20px;'> values </th> </tr>"
  );
  for (value of userDataArr) {
    document.write(
      `<tr> <td style='border:1px solid black; padding: 20px;'> ${value} </td> </tr>`
    );
  }
  document.write("</table>");
}

// Render the repeated values
function renderRepeatedValues() {
  const repeatedValues = checkRepeated(userDataArr);
  if (repeatedValues.length) {
    for (value of repeatedValues) {
      document.write(`<p></p>`);
      document.write(
        `<p style='color:green; text-align:center; font-weight:bold; text-transform:capitalize;'>
         repeated row number : ${value + 1}
         </p>`
      );
    }
  } else {
    document.write(
      "<p style='color:red; text-align:center; font-weight:bold'> There are no repeated values in the provided sequence</p>"
    );
  }
}

// Checks for repeated values inside an array and returns an array with the last index of the repeated values
function checkRepeated(arr) {
  var repeatedValues = [];
  arr.forEach((value, index) => {
    if (index !== arr.lastIndexOf(value)) {
      repeatedValues.push(arr.lastIndexOf(value));
    }
  });
  return repeatedValues;
}

// Get sequence of values separated by commas
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
