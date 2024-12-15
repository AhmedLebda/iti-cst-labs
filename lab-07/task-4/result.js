const data = {};
const cookieString = document.cookie;
cookieString.split(";").forEach((entry) => {
  const [key, value] = entry.split("=");
  data[key.trim()] = value.trim();
});

renderResult();

function renderResult() {
  var gender = document.querySelector("#gender");
  gender.textContent = data["gender"];

  var genderImg = document.querySelector("#genderImg");
  genderImg.src = `./${data["gender"].toLowerCase()}.png`;

  var username = document.querySelector("#name");
  username.textContent = data["name"];
  username.style.color = data["color"];
}
