const inputName = document.getElementById('name-input');
const outputName = document.getElementById('name-output');

inputName.addEventListener('input', onInputChange);

function onInputChange(event) {
    const inputValue = event.target.value.trim();

    outputName.textContent = inputValue? inputValue : "Anonymous";
}