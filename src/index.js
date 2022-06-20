// const result = document.querySelector(".result");
const text = document.querySelector(".text");
const increment = document.querySelector(".incrSize");
const decrement = document.querySelector(".decrSize");

let defaultSize = 16;
increment.addEventListener("click", () => {
  defaultSize = defaultSize + 2;
  text.style.fontSize = `${defaultSize}px`;
});
decrement.addEventListener("click", () => {
  defaultSize = defaultSize - 2;
  text.style.fontSize = `${defaultSize}px`;
});
//https://oyzi1d.csb.app/
