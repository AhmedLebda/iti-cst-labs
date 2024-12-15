var imgSrc = prompt("Please enter image url: ");
var color = prompt("Please enter color: ");

document.write(
  "<div style='color:" +
    color +
    "'>" +
    "<p>This is your image </p>" +
    "<img src='" +
    imgSrc +
    "'" +
    "style='width:100px; height:100px; border: 1px solid " +
    color +
    ";' /> </div>"
);
