// 6.1 - write js code to convert a string into Pascal Case :
console.log(convertToPascal("ahmed mohamed ali"));

function convertToPascal(string) {
  return string
    .trim()
    .split(" ")
    .map((item) => (item.length ? item[0].toUpperCase() + item.slice(1) : item))
    .join(" ");
}

/*******
 * Extra
 ********/
const input = document.querySelector("input");
const form = document.querySelector("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const inputValue = input.value;
  const result = convertToPascal(inputValue);
  const p = document.createElement("p");
  p.textContent = `=> ${result}`;
  document.querySelector("div").appendChild(p);
  input.value = "";
});
