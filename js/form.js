console.clear();

//____________________  label Effekte  ______________________

const textareaQuestion = document.getElementById("question");
const labelQuestion = document.querySelector('[data-js="labelquestion"]');

const textareaAnswer = document.getElementById("answer");
const labelAnswer = document.querySelector('[data-js="labelanswer"]');

const inputTag = document.getElementById("tag");
const labelTag = document.querySelector('[data-js="labeltag"]');

textareaQuestion.addEventListener("change", () => {
  labelQuestion.classList.add("stayThere");
});

textareaAnswer.addEventListener("change", () => {
  labelAnswer.classList.add("stayThere");
});

inputTag.addEventListener("change", () => {
  labelTag.classList.add("stayThere");
});

//____________________  input Counter ______________________

const questionCharacters = document.querySelector(
  '[data-js="question-characters"]'
);

textareaQuestion.addEventListener("input", (event) => {
  let maxCharacters = 250;

  const inputCharacters = event.target.value.length;

  questionCharacters.textContent = `You have ${
    maxCharacters - inputCharacters
  } characters left`;
});

//------------------

const answerCharacters = document.querySelector(
  '[data-js="answer-characters"]'
);

textareaAnswer.addEventListener("input", (event) => {
  let maxCharacters = 250;

  const inputCharacters = event.target.value.length;

  answerCharacters.textContent = `You have ${
    maxCharacters - inputCharacters
  } characters left`;
});

//------------------

const tagCharacters = document.querySelector('[data-js="tag-characters"]');

inputTag.addEventListener("input", (event) => {
  let maxCharacters = 50;

  const inputCharacters = event.target.value.length;

  tagCharacters.textContent = `You have ${
    maxCharacters - inputCharacters
  } characters left`;
});

//____________________  create new Cards  ______________________

const form = document.querySelector('[data-js="questionForm"]');
const newCardSection = document.querySelector('[data-js="newCardSection"]');

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const formData = new FormData(event.target);
  const data = Object.fromEntries(formData);
  console.log(data);

  const article = document.createElement("article");
  article.classList.add("question_block");
  newCardSection.append(article);

  const question = document.createElement("h2");
  question.classList.add("question");
  question.textContent = data.question;
  article.append(question);

  const unorderdList = document.createElement("ul");
  unorderdList.classList.add("categories");
  article.append(unorderdList);

  const tag = document.createElement("li");
  tag.classList.add("category");
  tag.textContent = data.tag;
  unorderdList.append(tag);

  const answer = document.createElement("p");
  answer.classList.add("answer");
  answer.textContent = data.answer;
  article.append(answer);

  const buttonDiv = document.createElement("div");
  buttonDiv.classList.add("buttons");
  article.append(buttonDiv);

  const buttonShow = document.createElement("button");
  buttonShow.classList.add("show-content");
  buttonShow.setAttribute("type", "button");
  buttonShow.textContent = "Show answer";
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
  bookmarkButtonSVG.append(bookmarkButtonSVGPath);

  event.target.reset();
  textareaQuestion.focus();
  labelAnswer.classList.remove("stayThere");
  labelQuestion.classList.remove("stayThere");
  labelTag.classList.remove("stayThere");
});
