var highscoreList = document.getElementById("highscoresList");
var highscores = [];
var reset = document.getElementById("resetScore");

//Function to put score on the screen
function renderHighscore() {
    for (var i = 0; i < highscores.length ; i++) {
        var highscore = highscores[i];
        
        var li = document.createElement("li");
        li.textContent = highscore.initials + highscores.Score;
        highscoreList.appendChild(li);  
    }
}

//Unfinished
function init() {
    var storedHighscore = JSON.parse(localStorage.getItem("highscores"));
    
    if (storedHighscore != null) {
        highscores = storedHighscore;
    }
    renderHighscore()
};

init()
//Add a function to clear the score
//Unfinished, I couldn't make the local storage work. I followed script.js from the lesson, but didn't figure out what parts of code to keep in script.js and which ones to keep in highscore.js