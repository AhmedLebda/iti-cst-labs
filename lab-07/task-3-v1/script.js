document.querySelector("form").addEventListener("change", (e) => {
  document.querySelector("p").style[e.target.name] = e.target.value;
});
