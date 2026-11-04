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
  { word: "patient", pronunciation: "/ˈpāSHənt/", category: "adjective", definition: "Able to wait or keep trying without getting upset.", example: "Be patient with yourself as you learn." },
  { word: "adventure", pronunciation: "/ədˈvenCHər/", category: "noun", definition: "An exciting or unusual experience.", example: "Their trip to the mountains became a wonderful adventure." },
  { word: "admire", pronunciation: "/ədˈmīər/", category: "verb", definition: "To respect or appreciate someone or something.", example: "I admire how carefully she listens to everyone." },
  { word: "ancient", pronunciation: "/ˈānCHənt/", category: "adjective", definition: "Belonging to a very distant past.", example: "We learned how ancient people built their homes." },
  { word: "anxious", pronunciation: "/ˈaNG(k)SHəs/", category: "adjective", definition: "Worried or uneasy about what might happen.", example: "He felt anxious before speaking in front of the class." },
  { word: "appear", pronunciation: "/əˈpir/", category: "verb", definition: "To come into view or become noticeable.", example: "A rainbow appeared after the rain stopped." },
  { word: "approach", pronunciation: "/əˈprōCH/", category: "verb", definition: "To move closer to someone or something.", example: "We approached the old bridge slowly." },
  { word: "arrange", pronunciation: "/əˈrānj/", category: "verb", definition: "To put things in a particular order or plan something.", example: "She arranged the books by color." },
  { word: "attempt", pronunciation: "/əˈtempt/", category: "noun", definition: "An effort to do or achieve something.", example: "His first attempt at the puzzle was nearly right." },
  { word: "avoid", pronunciation: "/əˈvoid/", category: "verb", definition: "To stay away from someone or something.", example: "We left early to avoid the busy traffic." },
  { word: "balance", pronunciation: "/ˈbaləns/", category: "noun", definition: "A steady state in which different things are kept in the right amounts.", example: "A good balance of study and rest helps me learn." },
  { word: "believe", pronunciation: "/bəˈlēv/", category: "verb", definition: "To feel sure that something is true.", example: "I believe that daily practice makes a difference." },
  { word: "benefit", pronunciation: "/ˈbenəfit/", category: "noun", definition: "A helpful or useful result.", example: "One benefit of reading is learning new words." },
  { word: "breeze", pronunciation: "/brēz/", category: "noun", definition: "A light, gentle wind.", example: "A cool breeze came through the open window." },
  { word: "calm", pronunciation: "/käm/", category: "adjective", definition: "Peaceful and not upset or excited.", example: "She stayed calm and solved the problem." },
  { word: "capture", pronunciation: "/ˈkapCHər/", category: "verb", definition: "To catch or record something.", example: "He used a photo to capture the bright sunset." },
  { word: "challenge", pronunciation: "/ˈCHalənj/", category: "noun", definition: "A difficult task that tests your ability.", example: "Learning a new alphabet can be a fun challenge." },
  { word: "cheerful", pronunciation: "/ˈCHirfəl/", category: "adjective", definition: "Noticeably happy and positive.", example: "Her cheerful greeting made us smile." },
  { word: "clever", pronunciation: "/ˈklevər/", category: "adjective", definition: "Quick to learn, understand, or solve problems.", example: "That clever idea helped us remember the answer." },
  { word: "comfort", pronunciation: "/ˈkəmfərt/", category: "noun", definition: "A feeling of being relaxed, safe, or less worried.", example: "The warm blanket brought comfort on the cold night." },
  { word: "compare", pronunciation: "/kəmˈper/", category: "verb", definition: "To look at two or more things and notice how they are alike or different.", example: "We compared the two stories in class." },
  { word: "complete", pronunciation: "/kəmˈplēt/", category: "verb", definition: "To finish doing or making something.", example: "Please complete the final question before lunch." },
  { word: "concern", pronunciation: "/kənˈsərn/", category: "noun", definition: "A feeling of worry about something.", example: "Her main concern was arriving on time." },
  { word: "connect", pronunciation: "/kəˈnekt/", category: "verb", definition: "To join or bring things together.", example: "This path connects the garden to the library." },
  { word: "consider", pronunciation: "/kənˈsidər/", category: "verb", definition: "To think carefully about something before deciding.", example: "Take a moment to consider each answer." },
  { word: "create", pronunciation: "/krēˈāt/", category: "verb", definition: "To make something new.", example: "The students created a story together." },
  { word: "damage", pronunciation: "/ˈdamij/", category: "noun", definition: "Harm that makes something less useful or attractive.", example: "The storm caused little damage to the roof." },
  { word: "decide", pronunciation: "/diˈsīd/", category: "verb", definition: "To choose something after thinking about it.", example: "We decided to study outside in the sunshine." },
  { word: "discover", pronunciation: "/diˈskəvər/", category: "verb", definition: "To find or learn something for the first time.", example: "They discovered a quiet café near the station." },
  { word: "distance", pronunciation: "/ˈdistəns/", category: "noun", definition: "The amount of space between two places or things.", example: "We could see the lighthouse in the distance." },
  { word: "eager", pronunciation: "/ˈēgər/", category: "adjective", definition: "Very interested in doing or learning something.", example: "The eager readers lined up to borrow the new book." },
  { word: "echo", pronunciation: "/ˈekō/", category: "noun", definition: "A sound that repeats after bouncing off a surface.", example: "Our voices made an echo in the empty hall." },
  { word: "educate", pronunciation: "/ˈejəˌkāt/", category: "verb", definition: "To teach someone or help them learn.", example: "The museum uses games to educate young visitors." },
  { word: "elegant", pronunciation: "/ˈeləɡənt/", category: "adjective", definition: "Graceful and attractive in a simple way.", example: "The elegant vase stood in the center of the table." },
  { word: "emerge", pronunciation: "/iˈmərj/", category: "verb", definition: "To come out from a hidden or covered place.", example: "The moon began to emerge from behind the clouds." },
  { word: "encourage", pronunciation: "/inˈkərij/", category: "verb", definition: "To give someone support or confidence to do something.", example: "Her friends encouraged her to try the new activity." },
  { word: "enormous", pronunciation: "/iˈnȯrməs/", category: "adjective", definition: "Very large in size or amount.", example: "An enormous tree shaded the playground." },
  { word: "explore", pronunciation: "/ikˈsplȯr/", category: "verb", definition: "To travel through or examine a place to learn about it.", example: "We explored the winding paths in the park." },
  { word: "express", pronunciation: "/ikˈspres/", category: "verb", definition: "To show or communicate a thought or feeling.", example: "She used a drawing to express her idea." },
  { word: "familiar", pronunciation: "/fəˈmilyər/", category: "adjective", definition: "Known from having seen, heard, or experienced something before.", example: "That familiar song reminded me of home." },
  { word: "fragile", pronunciation: "/ˈfrajəl/", category: "adjective", definition: "Easily broken or damaged.", example: "Please carry the fragile glass bowl carefully." },
  { word: "frequent", pronunciation: "/ˈfrēkwənt/", category: "adjective", definition: "Happening often.", example: "Frequent short breaks helped us stay focused." },
  { word: "generous", pronunciation: "/ˈjenərəs/", category: "adjective", definition: "Willing to give or share more than expected.", example: "Our generous neighbor shared fresh peaches with us." },
  { word: "glance", pronunciation: "/ɡlans/", category: "verb", definition: "To look quickly at someone or something.", example: "He glanced at the clock before leaving." },
  { word: "graceful", pronunciation: "/ˈɡrāsfəl/", category: "adjective", definition: "Moving in a smooth and attractive way.", example: "The dancer made a graceful turn across the stage." },
  { word: "habit", pronunciation: "/ˈhabət/", category: "noun", definition: "Something a person does regularly, often without thinking.", example: "Writing down new words became a helpful habit." },
  { word: "honest", pronunciation: "/ˈänəst/", category: "adjective", definition: "Truthful and fair.", example: "Please give an honest answer about what happened." },
  { word: "imagine", pronunciation: "/iˈmajən/", category: "verb", definition: "To form a picture or idea in your mind.", example: "Imagine what the city looked like long ago." },
  { word: "include", pronunciation: "/inˈklüd/", category: "verb", definition: "To make someone or something part of a group or whole.", example: "The invitation said to include everyone in the game." },
  { word: "increase", pronunciation: "/inˈkrēs/", category: "verb", definition: "To become or make something greater in amount or size.", example: "Reading each day can increase your vocabulary." },
  { word: "inspire", pronunciation: "/inˈspīər/", category: "verb", definition: "To make someone feel excited to do or create something.", example: "The beautiful garden inspired her poem." },
  { word: "journey", pronunciation: "/ˈjərnē/", category: "noun", definition: "A trip from one place to another.", example: "Their journey across the lake took an hour." },
  { word: "knowledge", pronunciation: "/ˈnälij/", category: "noun", definition: "Information and understanding gained through learning or experience.", example: "Her knowledge of plants helped us name the flowers." },
  { word: "language", pronunciation: "/ˈlaNGɡwij/", category: "noun", definition: "A system of words and rules people use to communicate.", example: "He is learning a new language with his friends." },
  { word: "linger", pronunciation: "/ˈliNGɡər/", category: "verb", definition: "To stay somewhere longer than expected.", example: "We lingered in the garden to watch the butterflies." },
  { word: "lively", pronunciation: "/ˈlīvlē/", category: "adjective", definition: "Full of energy and activity.", example: "A lively discussion started after the lesson." },
  { word: "marvel", pronunciation: "/ˈmärvəl/", category: "verb", definition: "To feel great surprise or admiration.", example: "We marveled at the stars above the quiet beach." },
  { word: "meaningful", pronunciation: "/ˈmēniNGfəl/", category: "adjective", definition: "Important or valuable in a way that gives purpose.", example: "They shared a meaningful conversation on their walk." },
  { word: "method", pronunciation: "/ˈmeTHəd/", category: "noun", definition: "A planned way of doing something.", example: "This method makes it easier to remember spellings." },
  { word: "modest", pronunciation: "/ˈmädəst/", category: "adjective", definition: "Not large, expensive, or showy.", example: "They prepared a modest meal with fresh vegetables." },
  { word: "moment", pronunciation: "/ˈmōmənt/", category: "noun", definition: "A very short period of time.", example: "Wait a moment while I find the right page." },
  { word: "mystery", pronunciation: "/ˈmist(ə)rē/", category: "noun", definition: "Something that is difficult to explain or understand.", example: "The missing key remained a mystery." },
  { word: "natural", pronunciation: "/ˈnaCH(ə)rəl/", category: "adjective", definition: "Existing in nature and not made by people.", example: "The island is known for its natural beauty." },
  { word: "necessary", pronunciation: "/ˈnesəˌserē/", category: "adjective", definition: "Needed for a particular purpose.", example: "A warm coat is necessary on cold days." },
  { word: "observe", pronunciation: "/əbˈzərv/", category: "verb", definition: "To watch carefully in order to notice details.", example: "We observed the birds building a nest." },
  { word: "occasion", pronunciation: "/əˈkāZHən/", category: "noun", definition: "A particular event or time when something happens.", example: "We planted a tree for the special occasion." },
  { word: "opportunity", pronunciation: "/ˌäpərˈtünətē/", category: "noun", definition: "A good chance to do or achieve something.", example: "The class gave me an opportunity to practice speaking." },
  { word: "organize", pronunciation: "/ˈȯrɡəˌnīz/", category: "verb", definition: "To put things in order or plan an activity.", example: "Let's organize the art supplies before we begin." },
  { word: "origin", pronunciation: "/ˈȯrəjən/", category: "noun", definition: "The place or point where something begins.", example: "We learned the origin of the word in class." },
  { word: "ordinary", pronunciation: "/ˈȯrdəˌnerē/", category: "adjective", definition: "Usual or not especially different.", example: "An ordinary walk turned into a fun adventure." },
  { word: "peaceful", pronunciation: "/ˈpēs-fəl/", category: "adjective", definition: "Quiet and free from disturbance.", example: "The lake was peaceful in the early morning." },
  { word: "persuade", pronunciation: "/pərˈswād/", category: "verb", definition: "To convince someone to do or believe something.", example: "She persuaded her brother to join the reading club." },
  { word: "pleasant", pronunciation: "/ˈplezənt/", category: "adjective", definition: "Enjoyable or nice.", example: "We had a pleasant chat on the way home." },
  { word: "precious", pronunciation: "/ˈpreSHəs/", category: "adjective", definition: "Very valuable or deeply loved.", example: "The child kept the precious note in a small box." },
  { word: "prepare", pronunciation: "/priˈper/", category: "verb", definition: "To get ready for something.", example: "We prepared our bags the night before the trip." },
  { word: "prevent", pronunciation: "/priˈvent/", category: "verb", definition: "To stop something from happening.", example: "Washing your hands can help prevent the spread of germs." },
  { word: "process", pronunciation: "/ˈpräˌses/", category: "noun", definition: "A series of steps used to do or make something.", example: "Learning to bake bread is a slow and rewarding process." },
  { word: "promise", pronunciation: "/ˈprämis/", category: "noun", definition: "A statement that you will do or not do something.", example: "He made a promise to call his grandmother." },
  { word: "protect", pronunciation: "/prəˈtekt/", category: "verb", definition: "To keep someone or something safe from harm.", example: "Tall trees protect the garden from strong winds." },
  { word: "purpose", pronunciation: "/ˈpərpəs/", category: "noun", definition: "The reason something is done or exists.", example: "The purpose of this exercise is to practice new words." },
  { word: "quiet", pronunciation: "/ˈkwīət/", category: "adjective", definition: "Making little or no noise.", example: "We found a quiet corner to read our books." },
  { word: "recognize", pronunciation: "/ˈrekəɡˌnīz/", category: "verb", definition: "To know someone or something because you have seen it before.", example: "I recognize that tune from the radio." },
  { word: "reflect", pronunciation: "/riˈflekt/", category: "verb", definition: "To think carefully about something.", example: "After the lesson, take time to reflect on what you learned." },
  { word: "reliable", pronunciation: "/riˈlīəbəl/", category: "adjective", definition: "Able to be trusted or depended on.", example: "Our reliable bus arrives at the same time each morning." },
  { word: "require", pronunciation: "/riˈkwīər/", category: "verb", definition: "To need something or make it necessary.", example: "Some plants require plenty of sunlight." },
  { word: "respect", pronunciation: "/riˈspekt/", category: "noun", definition: "A feeling of care or admiration for someone or something.", example: "The teammates showed respect for one another." },
  { word: "respond", pronunciation: "/riˈspänd/", category: "verb", definition: "To say or do something as an answer or reaction.", example: "Please respond when you hear your name." },
  { word: "result", pronunciation: "/riˈzəlt/", category: "noun", definition: "Something that happens because of an action or event.", example: "The result of their teamwork was a beautiful mural." },
  { word: "routine", pronunciation: "/rüˈtēn/", category: "noun", definition: "A regular way of doing things.", example: "She added five minutes of reading to her morning routine." },
  { word: "satisfy", pronunciation: "/ˈsatəsˌfī/", category: "verb", definition: "To meet a need or make someone pleased.", example: "A glass of water helped satisfy his thirst." },
  { word: "search", pronunciation: "/sərCH/", category: "verb", definition: "To look carefully for someone or something.", example: "We searched the library for a book about oceans." },
  { word: "secure", pronunciation: "/siˈkyu̇r/", category: "adjective", definition: "Safe from danger or unlikely to be lost.", example: "Make sure the gate is secure before the dog goes outside." },
  { word: "select", pronunciation: "/siˈlekt/", category: "verb", definition: "To choose something from a group.", example: "Select one word to use in your own sentence." },
  { word: "sensible", pronunciation: "/ˈsensəbəl/", category: "adjective", definition: "Showing good judgment and practical thinking.", example: "It was sensible to bring an umbrella on a cloudy day." },
  { word: "similar", pronunciation: "/ˈsimələr/", category: "adjective", definition: "Almost the same, though not exactly alike.", example: "The twins have similar smiles." },
  { word: "solution", pronunciation: "/səˈlüSHən/", category: "noun", definition: "An answer to a problem or a way to fix it.", example: "Working together helped us find a solution." },
  { word: "steady", pronunciation: "/ˈstedē/", category: "adjective", definition: "Firm, even, and not likely to change suddenly.", example: "She made steady progress with her reading." },
  { word: "succeed", pronunciation: "/səkˈsēd/", category: "verb", definition: "To reach a goal or do what you planned to do.", example: "With practice, you can succeed at the new skill." },
  { word: "suggest", pronunciation: "/səˈjest/", category: "verb", definition: "To offer an idea or plan for someone to consider.", example: "I suggest taking a short break before the next activity." },
  { word: "thoughtful", pronunciation: "/ˈTHȯtfəl/", category: "adjective", definition: "Kind and considerate of other people's feelings.", example: "It was thoughtful of him to save her a seat." },
  { word: "transform", pronunciation: "/tran(t)sˈfȯrm/", category: "verb", definition: "To change something greatly in form or appearance.", example: "A little paint can transform an old chair." }
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
