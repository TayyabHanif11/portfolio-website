const colorButton = document.getElementById("colorButton");

if (colorButton) {
  colorButton.addEventListener("click", () => {
    colorButton.classList.toggle("is-active");
  });
}
