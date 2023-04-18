const btnChangeColor = document.querySelector(".change-color");
let colorName = document.querySelector(".color");

btnChangeColor.addEventListener("click", changeColorBackground);

function changeColorBackground() {
  colorName.textContent = getRandomHexColor();
  document.body.style.backgroundColor = colorName.textContent;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
