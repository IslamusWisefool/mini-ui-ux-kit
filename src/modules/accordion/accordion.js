const accordions = document.querySelectorAll(".accordion");

for (const accordion of accordions) {
  accordion.addEventListener("click", () => selectHandler(accordion));
}

function selectHandler(accordionCurrent) {
  accordionTitle = accordionCurrent.querySelector("accordion__title");

  // Toggle menu
  switch (accordionCurrent.getAttribute("data-state")) {
    case "true":
      accordionCurrent.setAttribute("data-state", "false");
      break;
    case "false":
      accordionCurrent.setAttribute("data-state", "true");
      break;
  }
}
