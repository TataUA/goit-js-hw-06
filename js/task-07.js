const inputFontSize = document.getElementById('font-size-control');
const textSize = document.getElementById('text');

inputFontSize.addEventListener('input', onInputChange);

function onInputChange() {
    textSize.style.fontSize = inputFontSize.value + 'px';
}