//Questions
var quizQuestions = [
  {
    question: "How do you write 'Hello World' in an alert box?",
    choices: ["msgBox('Hello World');" , "alert('Hello World);" , "msg('Hello World');" , "alertBox('Hello World);"],
    answer: "alert('Hello World);"
  },

  {
    question: "How do you call a function named 'myFunction'?",
    choices: ["call function myFunction()" , "call myFunction()" , "myFunction()" , "function call myFunction()"],
    answer: "myFunction"
  },

  {
    question: "How to write an IF statement?",
    choices: ["if i === 5 then" , "if (i == 5)" , "if i = 5 then" , "if i = 5"],
    answer: "if (i == 5)"
  },

  {
    question: "How does a FOR loop start?",
    choices: ["for (i = 0; i <= 5)" , "for i = 1 to 5" , "for (i = 0; i <=5; i++)" , "for (i <=5; i++)"],
    answer: "for (i = 0; i <=5; i++)"
  },

  {
    question: "Which event occurs when the user clicks on an HTML element?",
    choices: ["onclick" , "onmouseover" , "onmouseclick" , "onchange"],
    answer: "onclick"
  },

  {
    question: "What will the following  code return: Boolean(10 > 9)?",
    choices: ["NaN", "Undefined", "true", "false"],
    answer: "true"
  },

  {
    question: "Which of the followings are primitive data types in JavaScript?",
    choices: ["String" , "Number" , "Boolean" , "All of the above"],
    answer: "All of the above",
  },

  {
    question: "What is null in JavaScript?",
    choices: ["Empty string value" , "Absence of a value" , "Unknown value" , "Zero value"],
    answer: "Zero value"
  },

  {
    question: "Which of the following object represent parameters of current function inside any function?",
    choices: ["Global" , "arguments" , "this" , "Object"],
    answer: "arguments"
  },

  {
    question: "A variable declared without var keyword inside a function will become _______ variable.",
    choices: ["local" , "global" , "block" , "undefined"],
    answer: "global"
  }
];

//Variables
var rules = document.getElementById("rules");
var startBtn = document.getElementById("startBtn");
var rules = document.getElementById("introduction");
var quizQuestion = document.getElementById("quizQuestion");
var correctWrong = document.getElementById("correctWrong");
var quizAnswers = document.getElementById("quizAnswers");
var currentQuestionIndex = 0;
var timeLeft = 75;
var score = 0;
var timerInterval;

//Keeps the quizQuestion hidden before we start the game
quiz.style.visibility = "hidden";

startBtn.addEventListener('click', startQuiz);

//Function which hides some blocks with text
function startQuiz() {
  startBtn.style.display = "none";
  introduction.style.display = "none";
  quiz.style.visibility = "visible";
  timerInterval = setInterval(updateTimer, 1000);
  showQuestion();
  // showHighScore(); add a function later
}

//Function which shows the questions after we clicked the button
function showQuestion() {
    //Display questions
  var quizState = quizQuestions[currentQuestionIndex];
  quizQuestion.innerText= `${currentQuestionIndex + 1}. ${quizState.question}`;
  quizAnswers.innerHTML= "";

  for (var i = 0; i < quizState.choices.length; i++) {
      var createLi = document.createElement("li");
      var option = document.createElement("button");
      option.textContent = quizState.choices[i];
      option.dataset.index = i;
      createLi.appendChild(option);
      quizAnswers.appendChild(option);
  } 
}

//Timer
function updateTimer() {
  timeLeft--;
  if (timeLeft <= 0) {
      endQuiz();
  }
  timer.textContent = timeLeft;
}
