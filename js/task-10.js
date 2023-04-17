const refs = { 
  controls:document.getElementById('controls'),
  boxes: document.getElementById('boxes'),
  inputNumber: document.querySelector( '#controls input'),
  btnCreate: document.querySelector( '#controls [data-create]'),
  btnDestroy: document.querySelector( '#controls [data-destroy]')
} 
refs.inputNumber.addEventListener('input', () => console.log(inputNumber))


// function createBoxes(amount) 


// function destroyBoxes()

// function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215)
//     .toString(16)
//     .padStart(6, 0)}`;
// }
