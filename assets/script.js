//Questions
var quizQuestions = [
  {
    question: "How do you write 'Hello World' in an alert box?",
    choices: ["msgBox('Hello World');" , "alert('Hello World');" , "msg('Hello World');" , "alertBox('Hello World);"],
    answer: "alert('Hello World');"
  },

  {
    question: "How do you call a function named 'myFunction'?",
    choices: ["call function myFunction()" , "call myFunction()" , "myFunction()" , "function call myFunction()"],
    answer: "myFunction()"
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
var quiz = document.getElementById("quiz");
var quizQuestion = document.getElementById("quizQuestion");
var quizAnswers = document.getElementById("quizAnswers");
var timer = document.getElementById("timer");
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
  //For loop chooses elements from the array
  for (let i = 0; i < quizState.choices.length; i++) {
    var createLi = document.createElement("li");
    var option = document.createElement("button");
    option.setAttribute("id", "answerBtn");
    option.textContent = quizState.choices[i];
    option.addEventListener("click", () => checkAnswer(i));
    createLi.appendChild(option);
    quizAnswers.appendChild(option);
  }
}

// Function which checks whether the answer is correct or no
function checkAnswer(answerIndex) {
  var quizState = quizQuestions[currentQuestionIndex];
  // Check if the selected choice matches the correct answer
  if (quizState.choices[answerIndex] === quizState.answer) {
    //Correct answer
    score++;
    console.log(score);
    console.log("Clicked choice: ", quizState.choices[answerIndex]);
    console.log("Correct answer: ", quizState.answer);
  } else {
    // Wrong answer
    timeLeft -= 15;
  }
  // The question index is incremented after the answer check.
  currentQuestionIndex++;
  // Check if we've gone through all the questions
  if (currentQuestionIndex < quizQuestions.length) {
    showQuestion();
  } else {
    endQuiz();
  }
  // saveScore();
}

//Timer
function updateTimer() {
  timeLeft--;
  if (timeLeft <= 0) {
      endQuiz();
  }
  timer.textContent = `Time: ${timeLeft} seconds`;
}

// End quiz
function endQuiz() {
  clearInterval(timerInterval);
  quiz.style.display = "none";

  //Adding text after the quiz is finished
  var message = document.createElement('h2');
  var scoreNumber = document.createElement('h3');
  message.textContent = "You've finished!";
  scoreNumber.textContent = `Your final score is: ${score}0`;
  quizField.appendChild(message);
  quizField.appendChild(scoreNumber);

  saveScore()
}

var highscore = [];

function saveScore() {
    //Initials field and submit button
    var initials = document.createElement('input');
    initials.placeholder = "Write your initials here";
    initials.setAttribute("id", "initialsField");
    quizField.appendChild(initials);
  
    var submitButton = document.createElement('button');
    submitButton.setAttribute("id", "submitButton");
    submitButton.innerText = "Submit";
    quizField.appendChild(submitButton);
    
    //Event listener and a function to save highscore in a local storage
    submitButton.addEventListener("click", function(event) {
      event.preventDefault();

      var scoreText = initials.value.trim();

      if (scoreText === "") {
        return;
      }

      highscore.push(scoreText);
      initials.value = ""
      window.location.href="score.html";

      saveScore();
      renderHighscore();
    })
  //Unfinished, I couldn't make the local storage work
};