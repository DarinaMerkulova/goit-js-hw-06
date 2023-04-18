const btnChangeColor = document.querySelector(".change-color")
let colorName = document.querySelector(".color")

btnChangeColor.addEventListener("click", changeColorBackground)  
  

function changeColorBackground () 
{document.body.style.backgroundColor = getRandomHexColor();
  colorName.textContent = document.body.style.backgroundColor}



function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

