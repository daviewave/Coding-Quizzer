//DEPENDENCIES
var startQuizBtn = document.getElementById("start");
var quizCard = document.getElementById("quiz-card");
var curQuestion = document.getElementById("quizCardHeader");
var curAnswers = document.getElementById("quizCardBody");
var resultsCard = document.getElementById("results");
var highscoreCard = document.getElementById("highscores");
var secondsRemaining = document.getElementById("seconds-left");

//DATA
//bool to track if the current screen is the intro screen (still press start button)
var isStartingScreen = true;

//Need an array containing the quiz questions and potential answers
var quizQuestions = [
  {
    number: 1,
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
    number: 2,
    question: "2. Which of the following is not semantic elements in html5?",
    answers: {
      a: "middle",
      b: "article",
      c: "footer",
      d: "main",
    },
    correctAnswer: "a",
  },
  {
    number: 3,
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
    number: 4,
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
    number: 5,
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

function init() {
  curQuestion.innerHTML = "Coding Skills Quizzer";
  curAnswers.innerHTML =
    "In the coding quiz you will be asked a series of multiple choice questions to test your knowledge on the principles of coding. Click the 'START' button below to begin.";
}

//FUNCTIONS
//TODO: create function to start the quiz
function startQuiz() {
  //changes button text to from start to submit and starts timer
  startQuizBtn.style.visibility = "hidden";
  startTimer();

  var x = getAnswers(quizQuestions[0]);
  //   setQuestion(x);
  console.log(x);

  //   for(var i = 0; i<quizQuestions.length;i++)
  //     var currentQuestion = getQuestion(quizQuestions, i);

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

function getQuizObject(array, index) {
  return array[index];
}

function getQuestion(object) {
  return object.question;
}

function setQuestion(question) {
  curQuestion.innerHTML = question;
}

function getAnswers(object) {
  var currentQuestionsAnswers = [];
  var curAnswers = object.answers;

  for (let letter in curAnswers) {
    var answerString = "$" + curAnswers[letter];
    currentQuestionsAnswers.push(answerString);
  }
  //   console.log(currentQuestionsAnswers);
  return currentQuestionsAnswers;
}

function setAnswers(question) {
  curQuestion.innerHTML = question;
}

init();

//USER INTERACTIONS
startQuizBtn.addEventListener("click", startQuiz);
