// high score/time
let scoreEl = document.querySelector("#score");
let timeEl = document.querySelector("#time");
let secondsLeft = 60;

var introEl = document.querySelector("#intro");

var questionsEl = document.querySelector("#questions");

let questionCount = 0;

var questions = [
  {
  title: 'Commonly used data types DO NOT include___',
  choices: ['1. strings', '2. booleans', '3. alerts', '4. numbers'],
  answer: 3,
  },
  {
  title: 'The condition in an if/else statement is enclosed with____.',
  choices: ['1. quotes', '2. curly brackets', '3. parenthesis', '4. square brackets'],
  answer: 3,
  },
  {
  title: 'Arrays in JavaScript can be used to store___',
  choices: ['1. numbers and strings', '2. other arrays', '3. booleans', '4. all of the above'],
  answer: 4,
  },
  {
  title: 'String values must be enclosed within___ when being assigned to variables.',
  choices: ['1. commas', '2. curly brackets', '3. quotes', '4. parenthesis'],
  answer: 3,
  },
  {
  title: 'A very useful tool during development and debugging for printing content to the debugger is___',
  choices: ['1. JavaScript', '2. terminal/Bash', '3. for loops', '4. console.log'],
  answer: 4
  },
];

function startTime() {
  let timerInterval = setInterval(function () {
    secondsLeft--;
    timeEl.textContent = `Time:${secondsLeft}s`;

    if (secondsLeft === 0 || questionCount === questions.length) {
      clearInterval(timerInterval);
      scoreEl.textContent = secondsLeft;
    }
  }, 1000);
}

function startQuiz() {
  
  setQuestion(questionCount);
}

function setQuestion(id) {
  if (id < questions.length) {
    questionsEl.textContent = questions[id].question;
        ans1Btn.textContent = questions[id].answers[0];
        ans2Btn.textContent = questions[id].answers[1];
        ans3Btn.textContent = questions[id].answers[2];
        ans4Btn.textContent = questions[id].answers[3];
    }
}
startTime(60);
startQuiz();



