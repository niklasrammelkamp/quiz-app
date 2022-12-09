import {
  addEventListenerToButton,
  addEventListenerToBookmark,
} from "./buttons.js";

console.clear();

export function createQuestionCard(main, question, answer, tag) {
  const article = document.createElement("article");
  article.classList.add("question_block");
  main.append(article);

  const questionElement = document.createElement("h2");
  questionElement.classList.add("question");
  questionElement.textContent = question;
  article.append(questionElement);

  const unorderdList = document.createElement("ul");
  unorderdList.classList.add("categories");
  article.append(unorderdList);

  const tagElement = document.createElement("li");
  tagElement.classList.add("category");
  tagElement.textContent = tag;
  unorderdList.append(tagElement);

  const answerElement = document.createElement("p");
  answerElement.classList.add("answer");
  answerElement.classList.add("hiddenAnswer");
  answerElement.textContent = answer;
  article.append(answerElement);

  const buttonDiv = document.createElement("div");
  buttonDiv.classList.add("buttons");
  article.append(buttonDiv);

  const buttonShow = document.createElement("button");
  buttonShow.classList.add("show-content");
  buttonShow.setAttribute("type", "button");
  buttonShow.textContent = "Show answer";
  addEventListenerToButton(buttonShow, answerElement);
  buttonDiv.append(buttonShow);

  const bookmarkButton = document.createElement("button");
  buttonDiv.append(bookmarkButton);

  const bookmarkButtonSVG = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "svg"
  );
  bookmarkButtonSVG.setAttribute("viewBox", "0 0 250 300");
  bookmarkButton.append(bookmarkButtonSVG);

  const bookmarkButtonSVGPath = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "path"
  );
  bookmarkButtonSVGPath.setAttribute(
    "d",
    "M44.2,18.3h136.1c13.8,0,24.9,11.2,24.9,24.9v221.1c0,4.7-5.6,7-8.9,3.7l-75.7-75.7c-4.8-4.8-12.7-4.8-17.5,0l-75.2,75.2c-3.3,3.3-8.9,1-8.9-3.7l0.4-220.6C19.3,29.4,30.5,18.3,44.2,18.3z"
  );
  addEventListenerToBookmark(bookmarkButtonSVG);
  bookmarkButtonSVG.append(bookmarkButtonSVGPath);
}
