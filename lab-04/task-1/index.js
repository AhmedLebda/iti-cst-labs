// writeMessage();
sumValues();

function writeMessage() {
  var message = "";

  do {
    message = prompt("Write your message...");
  } while (!message);

  for (var i = 1; i <= 6; i++) {
    document.write("<h" + i + ">" + message + "</h" + i + ">");
  }
}

function sumValues() {
  var sum = 0;
  var value = 0;
  do {
    value = parseInt(prompt("Enter a number (or 0 to stop):"));

    if (Number.isNaN(value)) {
      alert("Invalid input! Please enter a valid number.");
    } else {
      sum += value;
    }
  } while (value != 0 && sum <= 100);

  document.write("The sum of values you entered is " + sum);
}
