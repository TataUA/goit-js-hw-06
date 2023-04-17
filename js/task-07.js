const inputFontSize = document.getElementById('font-size-control');
const textSize = document.getElementById('text');

window.addEventListener('load', onInputChange);

inputFontSize.addEventListener('input', onInputChange);

function onInputChange() {
    textSize.style.fontSize = inputFontSize.value + 'px';
}