const inquiryText = document.getElementById('inquiry-text');
const submitBtn = document.getElementById('submit-btn');
const userScore = document.getElementById('user-score');

let currentInquiry = 0;
let score = 0;

var inquiry = [
  {
  question: 'Commonly used data types DO NOT include___',
  answers: ['strings', 'booleans', 'alerts', 'numbers'],
  correctAnswer: 3,
  },
  {
  question: 'The condition in an if/else statement is enclosed with____.',
  answers: ['quotes', 'curly brackets', 'parenthesis', 'square brackets'],
  correctAnswer: 2,
  },
  {
  question: 'Arrays in JavaScript can be used to store___',
  answers: ['numbers and strings', 'other arrays', 'booleans', 'all of the above'],
  correctAnswer: 4,
  },
  {
  question: 'String values must be enclosed within___ when being assigned to variables.',
  answers: ['commas', 'curly brackets', 'quotes', 'parenthesis'],
  correctAnswer: 3,
  },
  {
  question: 'A very useful tool during development and debugging for printing content to the debugger is___',
  answers: ['JavaScript', 'terminal/Bash', 'for loops', 'console.log'],
  correctAnswer: 4
  },
];
  
  
  
  

submitBtn.addEventListener('click', submit);


  function showInquiry(i) {
    let questionDiv = document.getElementById('question');
    questionDiv.textContent = i.question;
  
    let alts = document.querySelectorAll('.answers');
    console.log(alts);
    alts.forEach(function(element, index){
      element.textContent = q.answers[index];
  });
};

function showInquiry(i) {

}

showInquiry (inquiry);


