const startBtn = document.querySelector('.start-btn');
const nextBtn = document.querySelector('.next-btn');
const questionContainer = document.querySelector('.question-container');
const questionElement = document.querySelector('.question');
const answerBtnElement = document.querySelector('.answer-btns');
let shuffledQuestions, currentQuestionIndex;

startBtn.addEventListener('click', startGame);
nextBtn.addEventListener('click', () => {
  currentQuestionIndex++;
  getQuestions();
});
function startGame() {
  startBtn.classList.add('hide');
  shuffledQuestions = questions.sort(() => Math.random() - 0.5);
  currentQuestionIndex = 0;
  questionContainer.classList.remove('hide');
  nextBtn.classList.remove('hide');
  getQuestions();
}

function getQuestions() {
  showQuestions(shuffledQuestions[currentQuestionIndex]);
}
function showQuestions(question) {
  document.body.classList.remove('correct');
  document.body.classList.remove('wrong');
  nextBtn.classList.add('hide');
  answerBtnElement.innerHTML = '';
  questionElement.innerText = question.question;
  question.answers.forEach((answer) => {
    const button = document.createElement('button');
    button.innerText = answer.answer;
    button.classList.add('btn');
    if (answer.correct) {
      button.dataset.correct = answer.correct;
    }
    button.addEventListener('click', selectAnswers);
    answerBtnElement.appendChild(button);
  });
}
function selectAnswers(e) {
  const SelectedBtn = e.target;
  const correct = SelectedBtn.dataset.correct;
  setStatusClass(document.body, correct);
  Array.from(answerBtnElement.children).forEach((button) => {
    setStatusClass(button, button.dataset.correct);
  });
  if (shuffledQuestions.length > currentQuestionIndex + 1) {
    nextBtn.classList.remove('hide');
  } else {
    startBtn.innerText = 'Restart';
    startBtn.classList.remove('hide');
  }
}

function setStatusClass(element, correct) {
  element.classList.remove('correct');
  element.classList.remove('wrong');
  correct ? element.classList.add('correct') : element.classList.add('wrong');
}
const questions = [
  {
    question: 'who m i ?',
    answers: [
      { answer: 'human', correct: false },
      { answer: 'no one knows', correct: true },
      { answer: 'no one knows', correct: false },
      { answer: 'no one knows', correct: false },
    ],
  },
  {
    question: 'r m i ?',
    answers: [
      { answer: 'human', correct: false },
      { answer: 'no one knows', correct: true },
      { answer: 'no one knows', correct: false },
      { answer: 'no one knows', correct: false },
    ],
  },
  {
    question: 'r m i ?',
    answers: [
      { answer: 'human', correct: false },
      { answer: 'no one knows', correct: true },
      { answer: 'no one knows', correct: false },
      { answer: 'no one knows', correct: false },
    ],
  },
  {
    question: 'r m i ?',
    answers: [
      { answer: 'human', correct: false },
      { answer: 'no one knows', correct: false },
      { answer: 'no one knows', correct: false },
      { answer: 'no one knows', correct: true },
    ],
  },
  {
    question: 'r m i ?',
    answers: [
      { answer: 'human', correct: false },
      { answer: 'no one knows', correct: false },
      { answer: 'no one knows', correct: true },
      { answer: 'no one knows', correct: false },
    ],
  },
];
