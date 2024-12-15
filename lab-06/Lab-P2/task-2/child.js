var counter = 10;
var header = document.querySelector("h1");
var intervalRef = setInterval(() => {
  if (counter === 0) {
    clearInterval(intervalRef);
    close();
  }
  header.textContent = "Counter: " + counter;
  document.body.style.backgroundColor = `rgb(${getRandomColorValues()})`;
  counter--;
}, 1000);

function getRandomColorValues() {
  const values = [];
  for (let i = 0; i < 3; i++) {
    values.push(Math.floor(Math.random() * 256));
  }
  return values;
}
