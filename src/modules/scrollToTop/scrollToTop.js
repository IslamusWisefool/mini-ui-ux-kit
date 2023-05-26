const arrow = document.querySelector(".scrollToTop");
arrow.onclick = () => {
  window.scrollTo(window.pageYOffset, 0);
  arrow.setAttribute("data-state", "false");
};

window.addEventListener("scroll", () => {
  if (window.pageYOffset > 100) {
    arrow.setAttribute("data-state", "true");
  } else {
    arrow.setAttribute("data-state", "false");
  }
});
