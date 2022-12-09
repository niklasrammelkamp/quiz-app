console.clear();

// const buttons = document.querySelectorAll('[data-js="show-content"]');

// const answers = document.querySelectorAll('[data-js="answer"]');

// console.log(buttons);

// console.log(answers);

export function addEventListenerToButton(buttonElement, answerElement) {
  buttonElement.addEventListener("click", () => {
    answerElement.classList.toggle("hiddenAnswer");
  });
}

//____________________BOOKMARK BUTTONS____________________

//const bookmarkButtons = document.querySelectorAll('[data-js="bookmarkButton"]');

export function addEventListenerToBookmark(bookmark) {
  bookmark.addEventListener("click", () => {
    if (bookmark.style.fill.includes("var(--primary-color)")) {
      bookmark.style.fill = "";
      return;
    }
    if (bookmark.style.fill.includes("")) {
      bookmark.style.fill = "var(--primary-color)";
      return;
    }
  });
}
