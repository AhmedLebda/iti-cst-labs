// Declare an array object of names :
// var arr=[“ahmed”,”ali”,”moustafa”,”ibraheem”,”alaa”,”hamada”];
// generate two diff random names : then display within document

var names = ["ahmed", "ali", "moustafa", "ibraheem", "alaa", "hamada"];

var randomName1 = names[Math.floor(Math.random() * names.length)];
var randomName2;
while (true) {
  randomName2 = names[Math.floor(Math.random() * names.length)];
  if (randomName1 !== randomName2) {
    break;
  }
}

document.write("Random Name 1: " + randomName1);
document.write("<br>");
document.write("Random Name 2: " + randomName2);
