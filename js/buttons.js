console.clear();

//____________________SHOW/HIDE BUTTON____________________

export function addEventListenerToButton(buttonElement, answerElement) {
  buttonElement.addEventListener("click", () => {
    answerElement.classList.toggle("hiddenAnswer");
  });
}

//____________________BOOKMARK BUTTON____________________

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
