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
var numCorrect = 0;
var isAnswered = false;
var timeLeft = 59;
var numQuestions = 5;
var counter = 0;

//Need an array containing the quiz questions and potential answers
var quizQuestions = [
  {
    number: 0,
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
    number: 1,
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
    number: 2,
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
    number: 3,
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
    number: 4,
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
function updateQuestion(arrayOfobjects) {
  var newQuestion = getQuestion(arrayOfobjects[counter]);
  var newAnswers = getAnswers(arrayOfobjects[counter]);

  setQuestion(newQuestion);
  setAnswers(arrayOfobjects[counter], newAnswers);
  numQuestions--;
  if (numQuestions > 0) {
    //Call a function to end the game
  }
}

function clearQuestion() {
  curQuestion.innerHTML = "";
  curAnswers.innerHTML = "";
}

//TODO: create function to start the quiz
function startQuiz() {
  startQuizBtn.style.visibility = "hidden";
  startTimer();
  clearQuestion();
  updateQuestion(quizQuestions);
}

function startTimer() {
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

function getCorrectAnswerLetter(object) {
  return object.correctAnswer;
}

function setQuestion(question) {
  curQuestion.innerHTML = question;
}

function getAnswers(object) {
  var currentQuestionsAnswers = [];
  var curAnswers = object.answers;
  var correctAnswer = getCorrectAnswerLetter(object);

  for (let letter in curAnswers) {
    var answerString = curAnswers[letter];
    currentQuestionsAnswers.push(answerString);
  }
  //returns an array of strings with each element being a different multiple choice options
  return currentQuestionsAnswers;
}

function setAnswers(object, currentQuestionAnswerOptions) {
  //TODO: add a button for each element in array passed in
  for (var i = 0; i < currentQuestionAnswerOptions.length; i++) {
    var correct = getCorrectAnswerLetter(object);
    var isCorrectAnswer = getNumberValueFromCharacter(correct);

    //1. Create the button
    var currentAnswerOption = document.createElement("button");
    currentAnswerOption.innerHTML = currentQuestionAnswerOptions[i];
    //2. Append somewhere
    curAnswers.appendChild(currentAnswerOption);
    //3. Add event handler
    if (i === isCorrectAnswer) {
      //Handle when the correct answer was chosen
      currentAnswerOption.addEventListener("click", handleCorrectAnswer);
    } else {
      //Handle when the correct answer was chosen
      currentAnswerOption.addEventListener("click", handleWrongAnswer);
    }
  }
}

function getNumberValueFromCharacter(char) {
  if (char === "a") {
    return 0;
  } else if (char === "b") {
    return 1;
  } else if (char === "c") {
    return 2;
  } else if (char === "d") {
    return 3;
  }
}

function handleCorrectAnswer() {
  numCorrect++;
  counter++;
  clearQuestion();
  updateQuestion(quizQuestions);
}

function handleWrongAnswer() {
  timeLeft = timeLeft - 10;
  counter++;
  clearQuestion();
  updateQuestion(quizQuestions);
}

init();

//USER INTERACTIONS
startQuizBtn.addEventListener("click", startQuiz);
