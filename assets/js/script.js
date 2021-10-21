//DEPENDENCIES
var startQuizBtn = $("#start");
var secondsRemaining = $("");

var secondsRemaining = document.getElementById("seconds-left");
var question = document.getElementById("quiz-question");
var answers = document.getElementById("intro-paragragh");

//DATA
//bool to track if the current screen is the intro screen (still press start button)
var isStartingScreen = true;

//Need an array containing the quiz questions and potential answers
var quizQuestions = [
  "1. Which of the following is not a way to define a new variable in javascript?",
  "2. Which of the following is not a primitive data type in javascript?",
  "3. Which of the following data types returns a true/false value?",
  "4. What is the name of a function that contains a parameter that accepts another function as an argument?",
  "5. When using Git, which line of code will allow you to switch from the current branch to the main branch?",
];

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
