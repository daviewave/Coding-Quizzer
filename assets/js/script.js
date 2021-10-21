//DEPENDENCIES
var startQuizBtn = $("#start");
var secondsRemaining = document.getElementById("seconds-left");

//DATA

//FUNCTIONS
//TODO: create function to start the quiz
function startQuiz() {
  startTimer();

  //1. Need to present the user the first question + answer options

  //2. Handle when each button is pressed
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
