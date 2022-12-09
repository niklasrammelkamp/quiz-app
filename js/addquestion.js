import { createQuestionCard } from "./questioncard.js";

console.clear();

//____________________  label Effekte  ______________________

const textareaQuestion = document.getElementById("question");

if (textareaQuestion != null) {
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

  function setHowMuchCharacters(
    textfield,
    actualCharactersLeft,
    actualCharactersInput
  ) {
    textfield.textContent = `You have ${
      actualCharactersLeft - actualCharactersInput
    }
     characters left`;
  }

  //----------------- QUESTION FIELD

  const questionCharacters = document.querySelector(
    '[data-js="question-characters"]'
  );
  let maxCharactersQuestion = 250;

  textareaQuestion.addEventListener("input", (event) => {
    const inputCharacters = event.target.value.length;

    setHowMuchCharacters(
      questionCharacters,
      maxCharactersQuestion,
      inputCharacters
    );
  });

  //------------------ ANSWER FIELD

  const answerCharacters = document.querySelector(
    '[data-js="answer-characters"]'
  );
  let maxCharactersAnswer = 250;

  textareaAnswer.addEventListener("input", (event) => {
    const inputCharacters = event.target.value.length;

    setHowMuchCharacters(
      answerCharacters,
      maxCharactersAnswer,
      inputCharacters
    );
  });

  //------------------ TAG FIELD

  const tagCharacters = document.querySelector('[data-js="tag-characters"]');
  let maxCharactersTag = 50;

  inputTag.addEventListener("input", (event) => {
    const inputCharacters = event.target.value.length;

    setHowMuchCharacters(tagCharacters, maxCharactersTag, inputCharacters);
  });

  //____________________  create new Cards  ______________________

  const form = document.querySelector('[data-js="questionForm"]');
  const main = document.querySelector('[data-js="main"]');

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);

    const question = {
      question: data.question,
      answer: data.answer,
      tag: data.tag,
      bookmark: false,
    };

    createQuestionCard(main, question);

    event.target.reset();
    textareaQuestion.focus();
    labelAnswer.classList.remove("stayThere");
    labelQuestion.classList.remove("stayThere");
    labelTag.classList.remove("stayThere");

    setHowMuchCharacters(answerCharacters, 250, 0);
    setHowMuchCharacters(questionCharacters, 250, 0);
    setHowMuchCharacters(tagCharacters, 250, 0);
  });
}
