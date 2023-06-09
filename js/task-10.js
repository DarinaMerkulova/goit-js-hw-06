const inputNum = document.querySelector("#controls input");
const btnCreate = document.querySelector("[data-create]");
const btnDestroy = document.querySelector("[data-destroy]");
const boxes = document.querySelector("#boxes");

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const createBoxes = (amount) => {
  const elementsToAdd = [];
  for (let i = 0; i < amount; i++) {
    const div = document.createElement("div");
    const px = 30 + 10 * i
    div.style.height = `${px}px`;
    div.style.width = `${px}px`;
    div.style.background = getRandomHexColor();
    elementsToAdd.push(div);
  }
  return elementsToAdd;
};

btnCreate.addEventListener("click", () => {
  let boxesToAdd = createBoxes(inputNum.value);
  boxes.append(...boxesToAdd);
});

btnDestroy.addEventListener("click", () => {
  inputNum.value = "";
  boxes.innerHTML = "";
});