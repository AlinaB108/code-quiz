// Pseudo code - Code quiz 10 questions and 75 seconds to answer
//Create global variables for timer, score, questions and initials
// Start the quiz
  //Add a button to start the quiz, answers should be clickable too
  //Make a function with a timer and (?)questions and score inside that function
//Display a question and 4 possible answers
  //Get a question from the list (probably an array, where a question will be randomly selected from an array)
//Check if the selected answer is correct (not correct - remove 10sec, if correct - add score)
  //Display a message about the answered message - Correct!/Wrong!
  //Display the changes for time on the screen
//Quiz ends when there is no time left
//When the game is over need to display the final score and input field for initials
//Save initials and score (make a list for future score where we can add text with via JS?)
  //Add a button to save the progress

var rules;
var startBtn;
var quizField = document.querySelector("quizField");
var question;
var answers;
var choice;
var response;
var counter;
var score;
// Variables for score.html
var initials;
var submit;
var backBtn;
var scoreBtn;

//An array with all quiz questions
var quizQuestions = [
  {
    question: "How do you write 'Hello World' in an alert box?",
    choices: ["msgBox('Hello World');" , "alert('Hello World);" , "msg('Hello World'); , alertBox('Hello World);"],
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
