var imgArr = [
  "./UP/1.jpg",
  "./UP/2.jpg",
  "./UP/3.jpg",
  "./UP/4.jpg",
  "./UP/5.jpg",
];

const startButton = document.querySelector("#start");
const prevButton = document.querySelector("#prev");
const nextButton = document.querySelector("#next");
const stopButton = document.querySelector("#stop");

// var intervalRef = null;
function startShow() {
  // if (intervalRef) {
  //   clearInterval(intervalRef);
  // }

  startButton.disabled = true;
  nextButton.disabled = true;
  prevButton.disabled = true;
  stopButton.disabled = false;

  intervalRef = setInterval("next()", 500);
}
var i = 0;
function prev() {
  i--;
  if (i < 0) i = imgArr.length - 1;
  myImg.src = imgArr[i];
}
function next() {
  i++;
  if (i >= imgArr.length) i = 0;
  myImg.src = imgArr[i];
}
function stopShow() {
  // if (intervalRef) {
  //   clearInterval(intervalRef);
  // }
  clearInterval(intervalRef);
  startButton.disabled = false;
  nextButton.disabled = false;
  prevButton.disabled = false;
  stopButton.disabled = true;
}
