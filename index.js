import { createQuestionCard } from "./js/questioncard.js";
import { questionCards } from "./js/dataBase.js";

const main = document.querySelector('[data-js="main"]');

questionCards.forEach((card) => {
  createQuestionCard(main, card);
});
