//DEPENDENCIES
var startQuizBtn = $("#start");
var secondsRemaining = $("");

var secondsRemaining = document.getElementById("seconds-left");
//1.a target html element with id 'quiz-question' -- will replace title of quiz
//1.b target html element with id 'intro-paragragh' -- will replace quiz description
var question = document.getElementById("quiz-question");
var answers = document.getElementById("intro-paragragh");

//DATA
//bool to track if the current screen is the intro screen (still press start button)
var isStartingScreen = true;

//FUNCTIONS
//TODO: create function to start the quiz
function startQuiz() {
  startTimer();

  /*1. Need to present the user the first question + answer options
    

  //2.a Store quiz questions in an array and start looping array to display first question
  //2.b Store quiz questions in an array and start looping array to display first question
  
  //3. Handle when each button is pressed  */
}

function startTimer() {
  var timeLeft = 59;

  var timer = setInterval(function () {
    if (timeLeft > 0) {
      secondsRemaining.textContent = timeLeft;
      timeLeft--;
    } else {
      secondsRemaining.textContent = "";
      clearInterval(timer);
    }
  }, 1000);
}

//USER INTERACTIONS
startQuizBtn.on("click", startQuiz);
