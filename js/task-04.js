let counterValue = 0;

const decrementBtn = document.querySelector('[data-action="decrement"]');

const incrementBtn = document.querySelector('[data-action="increment"]');

decrementBtn.addEventListener('click', onDecrementBtnClick);
incrementBtn.addEventListener('click', onIncrementBtnClick);

function onDecrementBtnClick () {
    counterValue -=1;
    document.getElementById('value').textContent = counterValue;
}

function onIncrementBtnClick () {
    counterValue +=1;
    document.getElementById('value').textContent = counterValue;
}
