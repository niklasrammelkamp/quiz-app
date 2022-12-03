console.clear();

const toggleButton = document.querySelector('[data-js="toggleButton"]');
const toogleButtonCircle = document.querySelector(
  '[data-js="toogleButtonCircle"]'
);
const lightParagraph = document.querySelector('[data-js="light"]');
const darkParagraph = document.querySelector('[data-js="dark"]');
let counter = 0;

function removeClass() {
  darkParagraph.classList.remove("becomeBold");
  lightParagraph.classList.add("becomeBold");
}

function addClass() {
  darkParagraph.classList.add("becomeBold");
  lightParagraph.classList.remove("becomeBold");
}

toggleButton.addEventListener("click", () => {
  toogleButtonCircle.classList.toggle("right");

  counter++;
  console.log(counter % 2, counter);

  if (counter % 2 === 0) {
    console.log(counter, "gerade Zahl");
    removeClass();
  } else {
    addClass();
  }
});
