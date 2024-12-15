var currentScrollPosition = null;
const ref = setInterval(() => {
  window.scrollBy({
    top: 100,
    behavior: "smooth",
  });
  if (currentScrollPosition === window.scrollY) {
    clearInterval(ref);
    close();
  } else {
    currentScrollPosition = window.scrollY;
  }
}, 100);
