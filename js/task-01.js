const ulEl = document.querySelector("#categories");

const count = ulEl.children.length;

console.log(`Number of categories: ${count}`);

//------------------------------------------------

const itemsArr = ulEl.querySelectorAll(".item");

itemsArr.forEach((item) => {
const title = item.firstElementChild.textContent;
const quantity = item.lastElementChild.children.length;

console.log(`Category: ${title}`);
console.log(`Elements: ${quantity}`)
});


