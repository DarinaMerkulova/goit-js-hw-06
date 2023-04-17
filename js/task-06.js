const inputValid = document.getElementById("validation-input");

inputValid.addEventListener ("blur", checkLength)
const dataLength = Number(inputValid.getAttribute('data-length'));


function checkLength (event) {
    const inputLength = event.target.value.trim().length;
console.log(inputLength)
    if (inputLength === dataLength) {
        inputValid.classList.add("valid");
        inputValid.classList.remove("invalid");
    } else {
        inputValid.classList.add("invalid");
        inputValid.classList.remove("valid");
    }
}