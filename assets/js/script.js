//DEPENDENCIES
var startQuizBtn = document.getElementById("start");
var quizCard = document.getElementById("quiz-card");
var resultsCard = document.getElementById("quiz-card");
var highscoreCard = document.getElementById("quiz-card");
var secondsRemaining = document.getElementById("seconds-left");

//DATA
//bool to track if the current screen is the intro screen (still press start button)
var isStartingScreen = true;

//Need an array containing the quiz questions and potential answers
var quizQuestions = [
  {
    question:
      "1. Which of the following is not a way to define a new variable in javascript?",
    answers: {
      a: "var",
      b: "let",
      c: "new",
      d: "const",
    },
    correctAnswer: "c",
  },
  {
    question: "2. Which of the following are not semantic elements in html5?",
    answers: {
      a: "<middle>",
      b: "<article>",
      c: "<footer>",
      d: "<main>",
    },
    correctAnswer: "a",
  },
  {
    question:
      "3. Which of the following data types returns a true/false value?",
    answers: {
      a: "float",
      b: "string",
      c: "integer",
      d: "boolean",
    },
    correctAnswer: "d",
  },
  {
    question:
      "4. What is the name of a function that contains a parameter that accepts another function as an argument?",
    answers: {
      a: "Nested function",
      b: "Call-back function",
      c: "Recursive Function",
      d: "function with-in a function",
    },
    correctAnswer: "b",
  },
  {
    question:
      "5. When using Git, which line of code will allow you to switch from the current branch to the main branch?",
    answers: {
      a: "git init",
      b: "git add -A",
      c: "git commit -m",
      d: "git checkout main",
    },
    correctAnswer: "d",
  },
];

//FUNCTIONS
//TODO: create function to start the quiz
function startQuiz() {
  //changes button text to from start to submit and starts timer
  startQuizBtn.innerHTML = "Submit Answer";
  startTimer();

  //1. Need to present the user the first question + answer options
  //   for (var i = 0; i < quizQuestions.length; i++) {
  //     question.textContent = quizQuestions[i].question;
  //     answers.textContent = quizQuestions[i].answers;
  //   }

  //2.a Store quiz questions in an array and start looping array to display first question
  //2.b Store quiz questions in an array and start looping array to display first question

  //3. Handle when each button is pressed  //
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

function buildQuizQuestion() {
  var htmlOutput = [];

  //loop through each question in array and give question + possible answers, waiting until the user has selected one
  /*   () => is a function call where () = parameters and => goes into logic */

  quizQuestions.forEach((currQuestion, questionNumber) => {
    var currAnswers = [];
  });
}

//USER INTERACTIONS
startQuizBtn.addEventListener("click", startQuiz);
