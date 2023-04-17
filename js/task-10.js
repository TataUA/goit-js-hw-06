function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const inputEl = document.querySelector('#controls>input');
const createBtn = document.querySelector('button[data-create]');
const destroyBtn = document.querySelector('button[data-destroy]');
const boxesEl = document.querySelector('#boxes');

createBtn.addEventListener('click', () => {
  let boxesAdd = createBoxes(inputEl.value)
  boxesEl.append(...boxesAdd)
});

destroyBtn.addEventListener('click', destroyBoxes);

function createBoxes(amount) {
  const elements = [];

  if(amount < 1 || amount > 100) {
    alert(`Incorrect value! You can use only numbers from 1 to 100!`);   
    inputEl.value = "";
    return amount = "";
  } 

  for(let i=0; i<amount; i += 1) {
    const divEl = document.createElement('div')
    divEl.style.height = `${30 + 10 * i}px`
    divEl.style.width = `${30 + 10 * i}px`
    divEl.style.backgroundColor = getRandomHexColor()
    inputEl.value= "";
    elements.push(divEl)
    
  }  
  return elements  
}

function destroyBoxes() {
  boxesEl.innerHTML = "";
}









