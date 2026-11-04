"use strict";

const starterWords = [
  { word: "curious", pronunciation: "/ˈkyʊrēəs/", category: "adjective", definition: "Wanting to learn or know more about something.", example: "The curious student asked thoughtful questions." },
  { word: "gather", pronunciation: "/ˈɡaT͟Hər/", category: "verb", definition: "To bring things or people together in one place.", example: "We gathered our notes before the study session." },
  { word: "gentle", pronunciation: "/ˈjentl/", category: "adjective", definition: "Kind, calm, or careful rather than rough or forceful.", example: "She gave the nervous puppy a gentle pat." },
  { word: "notice", pronunciation: "/ˈnōdəs/", category: "verb", definition: "To see, hear, or become aware of something.", example: "Did you notice the new word on the board?" },
  { word: "effort", pronunciation: "/ˈefərt/", category: "noun", definition: "The energy or work you put into doing something.", example: "Learning a new language takes time and effort." },
  { word: "wander", pronunciation: "/ˈwändər/", category: "verb", definition: "To walk or move around without a particular plan.", example: "We wandered through the market after lunch." },
  { word: "bright", pronunciation: "/brīt/", category: "adjective", definition: "Full of light; or quick to learn and understand.", example: "He had a bright idea for remembering vocabulary." },
  { word: "choose", pronunciation: "/CHo͞oz/", category: "verb", definition: "To decide which person or thing you want.", example: "Choose one new word to practice today." },
  { word: "improve", pronunciation: "/imˈpro͞ov/", category: "verb", definition: "To become or make something better.", example: "A little practice each day can improve your English." },
  { word: "patient", pronunciation: "/ˈpāSHənt/", category: "adjective", definition: "Able to wait or keep trying without getting upset.", example: "Be patient with yourself as you learn." }
];

const STORAGE_KEY = "word-garden-custom-words";
const elements = {
  tabs: [...document.querySelectorAll(".tab-button")],
  views: {
    learn: document.querySelector("#learn-view"),
    quiz: document.querySelector("#quiz-view"),
    words: document.querySelector("#words-view")
  },
  cardCount: document.querySelector("#card-count"),
  wordLabel: document.querySelector("#word-label"),
  wordCategory: document.querySelector("#word-category"),
  wordTerm: document.querySelector("#word-term"),
  wordPronunciation: document.querySelector("#word-pronunciation"),
  definitionArea: document.querySelector("#definition-area"),
  definitionContent: document.querySelector("#definition-content"),
  revealButton: document.querySelector("#reveal-button"),
  wordDefinition: document.querySelector("#word-definition"),
  wordExample: document.querySelector("#word-example"),
  previousButton: document.querySelector("#previous-button"),
  nextButton: document.querySelector("#next-button"),
  cardDots: document.querySelector("#card-dots"),
  quizCount: document.querySelector("#quiz-count"),
  quizWord: document.querySelector("#quiz-word"),
  answerList: document.querySelector("#answer-list"),
  quizFeedback: document.querySelector("#quiz-feedback"),
  nextQuestionButton: document.querySelector("#next-question-button"),
  wordForm: document.querySelector("#word-form"),
  formFeedback: document.querySelector("#form-feedback"),
  savedCount: document.querySelector("#saved-count"),
  savedWordList: document.querySelector("#saved-word-list")
};

let customWords = loadCustomWords();
let currentCard = 0;
let definitionIsVisible = false;
let quizNumber = 1;
let currentQuestion = null;
let questionAnswered = false;

function loadCustomWords() {
  try {
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]");
    if (!Array.isArray(saved)) return [];
    return saved.filter((item) =>
      item &&
      typeof item.word === "string" &&
      typeof item.definition === "string" &&
      typeof item.example === "string"
    );
  } catch (error) {
    console.error("Could not load saved vocabulary:", error);
    return [];
  }
}

function saveCustomWords() {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(customWords));
    return true;
  } catch (error) {
    console.error("Could not save vocabulary:", error);
    elements.formFeedback.textContent = "Could not save on this device. Check your browser storage settings.";
    return false;
  }
}

function getWords() {
  return [...starterWords, ...customWords];
}

function showView(name) {
  for (const [viewName, view] of Object.entries(elements.views)) {
    view.classList.toggle("hidden", viewName !== name);
  }
  for (const tab of elements.tabs) {
    const isActive = tab.dataset.view === name;
    tab.classList.toggle("active", isActive);
    if (isActive) tab.setAttribute("aria-current", "page");
    else tab.removeAttribute("aria-current");
  }
  if (name === "quiz") renderQuestion();
  if (name === "words") renderSavedWords();
}

function renderCard() {
  const words = getWords();
  if (currentCard >= words.length) currentCard = 0;
  const item = words[currentCard];
  elements.cardCount.textContent = `${words.length} words`;
  elements.wordLabel.textContent = `WORD ${String(currentCard + 1).padStart(2, "0")}`;
  elements.wordCategory.textContent = item.category || "my word";
  elements.wordTerm.textContent = item.word;
  elements.wordPronunciation.textContent = item.pronunciation || "";
  elements.wordDefinition.textContent = item.definition;
  elements.wordExample.textContent = item.example || "Add an example sentence to help you remember it.";
  elements.definitionArea.classList.toggle("hidden", definitionIsVisible);
  elements.definitionContent.classList.toggle("hidden", !definitionIsVisible);
  elements.previousButton.disabled = words.length < 2;
  elements.nextButton.disabled = words.length < 2;
  renderDots(words.length);
}

function renderDots(count) {
  elements.cardDots.replaceChildren();
  for (let index = 0; index < count; index += 1) {
    const dot = document.createElement("button");
    dot.className = `card-dot${index === currentCard ? " active" : ""}`;
    dot.type = "button";
    dot.setAttribute("aria-label", `Go to word ${index + 1}`);
    dot.setAttribute("aria-current", index === currentCard ? "step" : "false");
    dot.addEventListener("click", () => setCard(index));
    elements.cardDots.append(dot);
  }
}

function setCard(index) {
  const count = getWords().length;
  currentCard = (index + count) % count;
  definitionIsVisible = false;
  renderCard();
}

function shuffle(items) {
  const copy = [...items];
  for (let index = copy.length - 1; index > 0; index -= 1) {
    const other = Math.floor(Math.random() * (index + 1));
    [copy[index], copy[other]] = [copy[other], copy[index]];
  }
  return copy;
}

function renderQuestion() {
  const words = getWords();
  const possibleQuestions = words.length > 1
    ? words.filter((item) => item.word !== currentQuestion?.word)
    : words;
  currentQuestion = possibleQuestions[Math.floor(Math.random() * possibleQuestions.length)];
  const wrongAnswers = shuffle(words.filter((item) => item.word !== currentQuestion.word))
    .slice(0, Math.min(3, words.length - 1));
  const options = shuffle([currentQuestion, ...wrongAnswers]);
  questionAnswered = false;

  elements.quizCount.textContent = `WORD ${String(quizNumber).padStart(2, "0")}`;
  elements.quizWord.textContent = currentQuestion.word;
  elements.quizFeedback.textContent = "";
  elements.quizFeedback.classList.remove("incorrect");
  elements.nextQuestionButton.classList.add("hidden");
  elements.answerList.replaceChildren();

  for (const option of options) {
    const button = document.createElement("button");
    button.className = "answer-option";
    button.type = "button";
    button.textContent = option.definition;
    button.addEventListener("click", () => answerQuestion(button, option));
    elements.answerList.append(button);
  }
}

function answerQuestion(selectedButton, selectedWord) {
  if (questionAnswered) return;
  questionAnswered = true;
  const buttons = [...elements.answerList.querySelectorAll(".answer-option")];
  for (const button of buttons) button.disabled = true;

  if (selectedWord.word === currentQuestion.word) {
    selectedButton.classList.add("correct");
    elements.quizFeedback.textContent = "That’s right! Nice work.";
  } else {
    selectedButton.classList.add("incorrect");
    const correctButton = buttons.find((button) => button.textContent === currentQuestion.definition);
    correctButton?.classList.add("correct");
    elements.quizFeedback.textContent = `Not quite. “${currentQuestion.word}” means ${currentQuestion.definition.toLowerCase()}`;
    elements.quizFeedback.classList.add("incorrect");
  }
  elements.nextQuestionButton.classList.remove("hidden");
}

function renderSavedWords() {
  elements.savedCount.textContent = `${customWords.length} saved`;
  elements.savedWordList.replaceChildren();
  if (customWords.length === 0) {
    const empty = document.createElement("li");
    empty.className = "empty-words";
    empty.textContent = "Your words will show up here after you save one.";
    elements.savedWordList.append(empty);
    return;
  }

  customWords.forEach((item, index) => {
    const row = document.createElement("li");
    row.className = "saved-word-item";
    const copy = document.createElement("div");
    copy.className = "saved-word-copy";
    const term = document.createElement("strong");
    term.textContent = item.word;
    const meaning = document.createElement("span");
    meaning.textContent = item.definition;
    copy.append(term, meaning);
    const remove = document.createElement("button");
    remove.className = "remove-word";
    remove.type = "button";
    remove.textContent = "Remove";
    remove.setAttribute("aria-label", `Remove ${item.word}`);
    remove.addEventListener("click", () => removeWord(index));
    row.append(copy, remove);
    elements.savedWordList.append(row);
  });
}

function removeWord(index) {
  const removed = customWords[index];
  customWords.splice(index, 1);
  if (!saveCustomWords()) {
    customWords.splice(index, 0, removed);
    renderSavedWords();
    return;
  }
  elements.formFeedback.textContent = "";
  if (currentCard >= getWords().length) currentCard = 0;
  renderSavedWords();
  renderCard();
}

for (const tab of elements.tabs) {
  tab.addEventListener("click", () => showView(tab.dataset.view));
}

elements.revealButton.addEventListener("click", () => {
  definitionIsVisible = true;
  renderCard();
});
elements.previousButton.addEventListener("click", () => setCard(currentCard - 1));
elements.nextButton.addEventListener("click", () => setCard(currentCard + 1));
elements.nextQuestionButton.addEventListener("click", () => {
  quizNumber += 1;
  renderQuestion();
});

elements.wordForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const formData = new FormData(elements.wordForm);
  const word = String(formData.get("word") || "").trim();
  const definition = String(formData.get("definition") || "").trim();
  const example = String(formData.get("example") || "").trim();
  if (!word || !definition) return;

  if (getWords().some((item) => item.word.toLocaleLowerCase() === word.toLocaleLowerCase())) {
    elements.formFeedback.textContent = "That word is already in your practice list.";
    return;
  }

  customWords.unshift({ word, definition, example });
  if (!saveCustomWords()) {
    customWords.shift();
    return;
  }
  elements.wordForm.reset();
  elements.formFeedback.textContent = `“${word}” is saved and ready to practice.`;
  currentCard = starterWords.length;
  definitionIsVisible = false;
  renderSavedWords();
  renderCard();
});

renderCard();
renderSavedWords();
