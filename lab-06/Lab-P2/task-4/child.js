const message =
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis aliquam facilis dolor placeat. Sed suscipit repellendus ea reiciendis deleniti aperiam.";

const pElement = document.querySelector("p");

var counter = 0;
const ref = setInterval(() => {
  if (counter >= message.length - 1) {
    clearInterval(ref);
    close();
  }
  pElement.textContent += message[counter];
  counter++;
}, 50);
