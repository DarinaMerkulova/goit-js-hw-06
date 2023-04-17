const inputName = document.getElementById("name-input");
const inputOut = document.getElementById("name-output");
inputName.addEventListener("input", onInput);

function onInput(event) {
  if (!event.currentTarget.value.trim()) {
    inputOut.textContent = "Anonymous";
  } else {
    inputOut.textContent = event.currentTarget.value.trim();
  }
}
