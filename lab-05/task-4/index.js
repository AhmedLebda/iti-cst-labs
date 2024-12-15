console.log("Name: ", getUserName());
console.log("Phone Number: ", getUserPhoneNumber());

function getUserName() {
  var name;
  while (true) {
    name = prompt("Please enter your name: ", "Ahmed");

    if (Number.isNaN(parseInt(name)) && name.trim().length > 0) {
      break;
    }
    alert("Invalid name. Please enter a valid name.");
  }
  return name;
}

function getUserPhoneNumber() {
  var phoneNumber;
  var validCombinations = ["010", "011", "012", "015"];
  while (true) {
    phoneNumber = prompt(
      `
      Please enter your phone number:
      Format: xxx-xxxxxx
      Example: 010-12345678`,
      "010-12345678"
    );

    var numberArr = phoneNumber.split("-");
    if (phoneNumber.length > 1) {
      if (
        Number.isInteger(parseInt(numberArr[0])) &&
        Number.isInteger(parseInt(numberArr[1]))
      ) {
        if (phoneNumber.charAt(3) === "-") {
          if (validCombinations.includes(numberArr[0])) {
            break;
          }
        }
      }
    }

    alert(`
      Invalid Phone Number.
      Format: xxx-xxxxxx
      Example: 010-12345678
      `);
  }

  return phoneNumber;
}
