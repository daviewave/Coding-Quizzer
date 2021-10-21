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
//TODO: create function to start the quiz
function startQuiz() {
  startQuizBtn.style.visibility = "hidden";
  startTimer();

  var correct = getCorrectAnswerLetter(quizQuestions[0]);
  var isCorrectAnswer = getNumberValueFromCharacter(correct);

  console.log(isCorrectAnswer);

  //1. Need to get a question and its answers and set to current quiz card
  for (var i = 0; i < quizQuestions.length; i++) {
    //first gets an individual quizQuestions object
    currentQuizObject = getQuizObject(quizQuestions, i);

    //then gets the selected objects question property and sets it to the relevant html element
    var currentQuizQuestion = getQuestion(currentQuizObject);
    setQuestion(currentQuizQuestion);
    // console.log(currentQuizObject);
    // console.log(currentQuizQuestion);

    //also then gets the selected objects answer property and sets it to the relevant html element
    var currentQuestionAnswers = getAnswers(currentQuizObject);
    // setAnswers;
    // console.log(getCorrectAnswerLetter(currentQuizObject));

    break;
  }

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
    console.log(answerString);
    break;
  }
  //returns an array of strings with each element being a different multiple choice options
  return currentQuestionsAnswers;
}

function setAnswers(currentQuestionAnswerOptions) {
  //TODO: add a button for each element in array passed in
  for (var i = 0; i < currentQuestionAnswerOptions.length; i++) {
    //1. Create the button
    var currentAnswerOption = document.createElement("button");
    currentAnswerOption.innerHTML = currentQuestionAnswerOptions[i];
    //2. Append somewhere
    curAnswers.appendChild(currentAnswerOption);
    //3. Add event handler
    currentAnswerOption.addEventListener("click");
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

//check when a button is correct, if it is the right answer, and what to do in each scenario after
// function isCorrectAnswer(){
//     var
// }

init();

//USER INTERACTIONS
startQuizBtn.addEventListener("click", startQuiz);
