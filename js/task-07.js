const refs = {
    controlFonSize: document.getElementById('font-size-control'),
    inputText: document.getElementById('text')
}

refs.controlFonSize.addEventListener('input', checkSize);

function checkSize (event) { refs.inputText.style.fontSize = event.currentTarget.value+"px"}