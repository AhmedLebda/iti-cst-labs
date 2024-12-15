const zipCodes = {
  Egypt: "11511",
  USA: "90210",
  Canada: "15649",
  UK: "08840",
  Australia: "2000",
  India: "110001",
  China: "100000",
};

// Dom Variables
const form = document.querySelector("form");
const nameInput = document.querySelector("#name");
const countrySelect = document.querySelector("#country");
const zipInput = document.querySelector("#zip");
const emailInput = document.querySelector("#email");
const hobbyCheckboxes = form.querySelectorAll("input[type=checkbox]");
const resetButton = form.querySelector("button[type=reset]");

nameInput.focus();

// Event Listeners
nameInput.addEventListener("blur", function () {
  if (!isNameValid()) {
    this.classList.add("error");
    this.focus();
    this.select();
    renderErrorMessage(this.parentElement, "please enter your name");
  } else {
    this.classList.remove("error");
    removeErrorMessage(this.parentElement);
    emailInput.focus();
  }
});

emailInput.addEventListener("blur", function () {
  if (!isEmailValid()) {
    this.classList.add("error");
    this.focus();
    this.select();
    renderErrorMessage(this.parentElement, "please enter a valid email");
  } else {
    this.classList.remove("error");
    removeErrorMessage(this.parentElement);
  }
});

form.addEventListener("submit", function (e) {
  if (!isNameValid() || !isEmailValid()) {
    e.preventDefault();
  }

  if (!isHobbyValid()) {
    e.preventDefault();
    renderErrorMessage(
      hobbyCheckboxes[0].parentElement,
      "please choose at least one hobby"
    );
  } else {
    removeErrorMessage(hobbyCheckboxes[0].parentElement);
  }

  console.log(hobbies);
});

countrySelect.addEventListener("change", (e) => {
  const selectedCountry = e.target.value;
  const zipCode = zipCodes[selectedCountry];

  zipInput.value = zipCode;
});

resetButton.addEventListener("click", function (e) {
  if (!confirm("Are you sure you want to reset the form?")) e.preventDefault();
});

// Validations
function isNameValid() {
  return /^[A-Za-z]+$/.test(nameInput.value.trim());
}

function isEmailValid() {
  return /^\w+@\w+.(com|net|gov)$/.test(emailInput.value.trim());
}

function isHobbyValid() {
  return Array.from(hobbyCheckboxes).some((checkbox) => checkbox.checked);
}

// Helper
function renderErrorMessage(parentElement, message) {
  if (parentElement.lastElementChild.classList.contains("error-message"))
    return;

  const errorMessage = createErrorMessage(message);
  parentElement.appendChild(errorMessage);
}

function createErrorMessage(message) {
  const errorMessage = document.createElement("p");
  errorMessage.textContent = message;
  errorMessage.classList.add("error-message");
  return errorMessage;
}

function removeErrorMessage(parentElement) {
  const errorMessage = parentElement.querySelector(".error-message");
  if (errorMessage) errorMessage.remove();
}
