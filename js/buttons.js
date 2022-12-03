console.clear();

const buttons = document.querySelectorAll('[class="show-content"]');

for (const element of buttons) {
  element.addEventListener("click", (event) => {
    const answer = event.path[2].querySelector('[data-js="answer"]');

    answer.classList.toggle("hiddenAnswer");
    console.log(element.textContent.includes("Hide answer"));

    if (element.textContent.includes("Show answer")) {
      console.log("hello");
      console.log(element.innerHTML);
      element.textContent = "Hide answer";
      return;
    }
    if (element.textContent.includes("Hide answer")) {
      element.textContent = "Show answer";
      return;
    }
  });
}

//____________________BOOKMARK BUTTONS____________________

const bookmarkButtons = document.querySelectorAll('[data-js="bookmarkButton"]');

for (const element of bookmarkButtons) {
  element.addEventListener("click", () => {
    const svg = element.getElementsByTagName("svg")[0];

    console.log(svg.style.fill);
    if (svg.style.fill.includes("var(--primary-color)")) {
      svg.style.fill = "";
      return;
    }
    if (svg.style.fill.includes("")) {
      console.log("hi");
      svg.style.fill = "var(--primary-color)";
      return;
    }
  });
}
