console.clear();

const buttons = document.querySelectorAll('[data-js="show-content"]');

const answers = document.querySelectorAll('[data-js="answer"]');

console.log(buttons);

console.log(answers);
/*
function giveShowHideButtonsEventListener(buttons) {
  console.log(buttons);
  for (const element of buttons) {
    element.addEventListener("click", (event) => {
      console.log(event);

      const answer = event.path[2].querySelector('[data-js="answer"]');

      answer.classList.toggle("hiddenAnswer");

      if (element.textContent.includes("Show answer")) {
        element.textContent = "Hide answer";
        return;
      }
      if (element.textContent.includes("Hide answer")) {
        element.textContent = "Show answer";
        return;
      }
    });
  }
}

giveShowHideButtonsEventListener(buttons);

//____________________BOOKMARK BUTTONS____________________

const bookmarkButtons = document.querySelectorAll('[data-js="bookmarkButton"]');

for (const element of bookmarkButtons) {
  element.addEventListener("click", () => {
    const svg = element.getElementsByTagName("svg")[0];

    if (svg.style.fill.includes("var(--primary-color)")) {
      svg.style.fill = "";
      return;
    }
    if (svg.style.fill.includes("")) {
      svg.style.fill = "var(--primary-color)";
      return;
    }
  });
}
*/
