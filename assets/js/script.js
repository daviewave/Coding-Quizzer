//DEPENDENCIES
var startQuizBtn = $("#start");
var secondsRemaining = document.getElementById("seconds-left");

//DATA

//FUNCTIONS
//TODO: create function to start the quiz
function startQuiz() {}

function startTimer() {
  var timeLeft = 60;

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

startTimer();

//USER INTERACTIONS
startQuizBtn.on("click", startQuiz);
