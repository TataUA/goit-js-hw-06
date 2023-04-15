const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ulEl = document.getElementById('ingredients');

const fragment = document.createDocumentFragment();

ingredients.forEach((ingredient) => {
  const liEl = document.createElement("li");
  liEl.textContent = ingredient;
  liEl.classList.add("item");
  fragment.appendChild(liEl);
})

ulEl.appendChild(fragment);
