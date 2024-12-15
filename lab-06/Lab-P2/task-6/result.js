var searchParamsArr = location.search.slice(1).split("&");

var searchParams = {};

for (item of searchParamsArr) {
  var [key, value] = item.split("=");
  searchParams[key] = value;
}

renderResult();

function renderResult() {
  var gender = document.querySelector("#gender");
  gender.textContent = searchParams["gender"];

  var genderImg = document.querySelector("#genderImg");
  genderImg.src = `./${searchParams["gender"].toLowerCase()}.png`;

  var username = document.querySelector("#name");
  username.textContent = searchParams["name"].replace("+", " ");
  username.style.color = searchParams["color"];
}
