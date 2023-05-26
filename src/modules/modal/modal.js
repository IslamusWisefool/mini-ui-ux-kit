const modalContainer = document.querySelector(".modal");
const modalWindow = modalContainer.querySelector(".modal__window");
const modalCloseBtn = modalContainer.querySelector(".modal__window-close");
const modalWindowBtns = modalContainer.querySelectorAll(".btn");
const modalWindowText = modalContainer.querySelector(".modal__window-heading");
const modalOverlay = modalContainer.querySelector(".modal__window-overlay");
const btns = document.querySelectorAll(".btn[data-btn]");
dataBtn = "";

for (let btn of btns) {
  btn.addEventListener("click", () => btnModalHandler(btn));
  console.log(btn);
}

function closeModalWindow() {
  modalContainer.setAttribute("data-state", "false");
}

modalOverlay.addEventListener("click", () => {
  closeModalWindow();
});

modalWindowBtns.forEach((btn) =>
  btn.addEventListener("click", () => {
    closeModalWindow();
  })
);

function btnModalHandler(btn) {
  console.log(btn);
  dataBtn = btn.getAttribute("data-btn");
  modalWindowText.innerHTML = `${dataBtn.toUpperCase()}!`;
  modalContainer.setAttribute("data-state", "true");
  modalWindow.setAttribute("data-btn", dataBtn);
  modalWindowBtns.forEach((btn) => btn.setAttribute("data-btn", dataBtn));
}

modalCloseBtn.addEventListener("click", () => {
  closeModalWindow();
});
