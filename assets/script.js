// What is the expected behavior for the user (what user sees)
//A user opens the page and sees the timer and highscore at the top of the page. Below there is a heading with quiz name and rules, a bit lower there is a start button.
//When user clicks on a button the quiz starts
//The timer starts the countdown
//There is a question and 4 answers, when user clicks on one of the answers he is presented with next question
//Also, if answer was correct user gets score points, if answer was wrong he loses 15sec

var rules = document.getElementById("rules");
var startBtn = document.getElementById("startBtn");
var rules = document.getElementById("introduction");
var quizField = document.getElementById("quizField");
var question = document.getElementById("question");
var answerBtn = document.getElementById("answerBtn");
var currentQuestionIndex = 0;
var timeLeft = 75;
var score = 0;

quizField.style.visibility = "hidden";
// Create answerBtn and add it later
startBtn.addEventListener('click', startQuiz);

function startQuiz() {
  startBtn.style.display = "none";
  introduction.style.display = "none";
  quizField.style.visibility = "visible";
  currentQuestionIndex = 0;
  score = 0;
  timeLeft = 75;
}

var quizQuestions = [
  {
    question: "How do you write 'Hello World' in an alert box?",
    answers: [
      {text: "msgBox('Hello World');", correct: false},
      {text: "alert('Hello World);", correct: true},
      {text: "msg('Hello World');", correct: false},
      {text: "alertBox('Hello World);", correct: false}
    ]
  },

  {
    question: "How do you call a function named 'myFunction'?",
    answers: [
      {text: "call function myFunction()", correct: false},
      {text: "call myFunction()", correct: false},
      {text: "myFunction()", correct: true},
      {text: "function call myFunction()", correct: false}
    ]
  },

  {
    question: "How to write an IF statement?",
    answers: [
      {text: "if i === 5 then", correct: false},
      {text: "if (i == 5)", correct: true},
      {text: "if i = 5 then", correct: false},
      {text: "if i = 5", correct: false}
    ]
  },

  {
    question: "How does a FOR loop start?",
    answers: [
      {text: "for (i = 0; i <= 5)", correct: false},
      {text: "for i = 1 to 5", correct: false},
      {text: "for (i = 0; i <=5; i++)", correct: true},
      {text: "for (i <=5; i++)", correct: false} 
    ]
  },

  {
    question: "Which event occurs when the user clicks on an HTML element?",
    answers: [
      {text: "onclick", correct: true},
      {text: "onmouseover", correct: false},
      {text: "onmouseclick", correct: false},
      {text: "onchange", correct: false}
    ]
  },

  {
    question: "What will the following  code return: Boolean(10 > 9)?",
    answers: [
      {text: "NaN", correct: false},
      {text: "Undefined", correct: false},
      {text: "true", correct: true},
      {text: "false", correct: false}
    ]
  },

  {
    question: "Which of the followings are primitive data types in JavaScript?",
    answers: [
      {text: "String", correct: false},
      {text: "Number", correct: false},
      {text: "Boolean", correct: false},
      {text: "All of the above", correct: true}
    ]
  },

  {
    question: "What is null in JavaScript?",
    answers: [
      {text: "Empty string value", correct: false},
      {text: "Absence of a value", correct: false},
      {text: "Unknown value", correct: false},
      {text: "Zero value", correct: true}
    ]
  },

  {
    question: "Which of the following object represent parameters of current function inside any function?",
    answers: [
      {text: "Global", correct: false},
      {text: "arguments", correct: true},
      {text: "this", correct: false},
      {text: "Object", correct: false}
    ]
  },

  {
    question: "A variable declared without var keyword inside a function will become _______ variable.",
    answers: [
      {text: "local", correct: false},
      {text: "global", correct: true},
      {text: "block", correct: false},
      {text: "undefined", correct: false}
    ]
  }
];