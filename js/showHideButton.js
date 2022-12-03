console.clear();

const buttons = document.querySelectorAll('[class="show-content"]');

for (const element of buttons) {
  element.addEventListener("click", (event) => {
    const answer = event.path[2].querySelector('[data-js="answer"]');
    // answer.textContent = "hahaha";
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
