console.log(getRandomNumber(0, 9));

function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}
