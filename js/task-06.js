const inputEl = document.getElementById('validation-input');
const dataLength = inputEl.getAttribute('data-length');

inputEl.addEventListener('blur', onInputBlur);

function onInputBlur(event) {
    const valueLength = event.target.value.trim().length;

    if(Number(dataLength) === valueLength) {
        inputEl.classList.add('valid');
        inputEl.classList.remove('invalid');
    } else {
        inputEl.classList.add('invalid');
        inputEl.classList.remove('valid');
    }    
}