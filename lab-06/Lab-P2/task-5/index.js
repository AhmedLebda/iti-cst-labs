// var names = ["ahmed", "ali", "moustafa", "ibraheem", "alaa", "hamada"];

const input = document.querySelector("input");
input.value = ["ahmed", "ali", "moustafa", "ibraheem", "alaa", "hamada"];
input.focus();

const addButton = document.querySelector("#add");
const firstName = document.querySelector("#firstName");
const secondName = document.querySelector("#secondName");

addButton.addEventListener("click", () => {
  var names = input.value.trim();

  if (names === "") {
    alert("Please enter a name");
    return;
  }

  var namesArray = names.split(",");

  if (namesArray.length <= 1) {
    alert("Please enter at least two names separated by commas");
    input.value = "";
    return;
  }

  const randomNamesArr = getRandomNames(namesArray);
  firstName.textContent = "First Name => " + randomNamesArr[0];
  secondName.textContent = "Second Name => " + randomNamesArr[1];

  input.focus();
  input.value = "";
});

function getRandomNames(arr) {
  var randomName1 = arr[Math.floor(Math.random() * arr.length)];
  var randomName2;
  while (true) {
    randomName2 = arr[Math.floor(Math.random() * arr.length)];
    if (randomName1 !== randomName2) {
      break;
    }
  }

  return [randomName1, randomName2];
}
