var link = document.querySelector("a");
link.addEventListener("click", (e) => {
  e.preventDefault();
  open("./child.html", "", "width=400px, height= 400px");
});
