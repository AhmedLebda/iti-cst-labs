// let projectId = getValueFromUser(
//   "Enter an Id",
//   "01",
//   "please enter a valid id"
// );
let projectId = getValidNumber("Enter Project ID", "01");

let projectName = getValueFromUser(
  "Enter a Name",
  "project one",
  "please enter a valid name"
);
let duration = getValueFromUser(
  "Enter a Duration",
  "1 day",
  "please enter a valid duration"
);

const project = {
  projectId,
  projectName,
  duration,
  print() {
    console.log(this);
    // console.log(`id: ${projectId} name: ${projectName}, duration: ${duration}`);
  },
};

project.print();

function getValueFromUser(message, def, errorMessage) {
  while (true) {
    value = prompt(message, def);
    if (value !== null && value.trim() !== "") {
      return value;
    }
    alert(errorMessage);
  }
}

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
