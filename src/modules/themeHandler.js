// Toggle theme
const toggleThemeBtn = document.querySelector("#toggle-theme");

toggleThemeBtn.addEventListener("click", function () {
  const currentTheme = document.documentElement.getAttribute("data-theme");
  const newTheme =
    currentTheme === "dark"
      ? "custom"
      : currentTheme === "custom"
      ? "light"
      : "dark";
  document.documentElement.setAttribute("data-theme", newTheme);
});
