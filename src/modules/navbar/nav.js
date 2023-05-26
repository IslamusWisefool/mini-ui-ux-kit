const navMenu = document.querySelector(".nav__menu");
const burger = document.querySelector(".nav__burger");

burger.addEventListener("click", () => burgerHandler());

function burgerHandler() {
  console.log(burger.getAttribute("data-state"));
  switch (burger.getAttribute("data-state")) {
    case "true":
      burger.setAttribute("data-state", "false");
      navMenu.setAttribute("data-state", "false");
      break;
    case "false":
      burger.setAttribute("data-state", "true");
      navMenu.setAttribute("data-state", "true");
      break;
  }
}
