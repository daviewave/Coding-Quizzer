//DEPENDENCIES
var startQuizBtn = document.getElementById("start");
var quizCard = document.getElementById("quiz-card");
var curQuestion = document.getElementById("quizCardHeader");
var curAnswers = document.getElementById("quizCardBody");

var highscoreCard = document.getElementById("highscores");
var secondsRemaining = document.getElementById("seconds-left");
var highscoreDisplay = document.querySelector("#highscores");
var viewHighscores = document.getElementById("highscore-link");

//DATA
var numCorrect = 0;
var timeLeft = 59;
var numQuestions = 5;
var counter = 0;
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
var highscoreList = [];

//FUNCTIONS
function init() {
  curQuestion.innerHTML = "Coding Skills Quizzer";
  curAnswers.innerHTML =
    "In the coding quiz you will be asked a series of multiple choice questions to test your knowledge on the principles of coding. Click the 'START' button below to begin.";
}

function startQuiz() {
  startQuizBtn.style.visibility = "hidden";
  startTimer();
  clearQuestion();
  updateQuestion(quizQuestions);
}

function updateQuestion(arrayOfobjects) {
  var newQuestion = getQuestion(arrayOfobjects[counter]);
  var newAnswers = getAnswers(arrayOfobjects[counter]);
  setQuestion(newQuestion);
  setAnswers(arrayOfobjects[counter], newAnswers);
}

function giveScore() {
  curQuestion.innerHTML = "All Done.";
  curAnswers.innerHTML = "Your Final Score is: " + timeLeft + " points.";

  var highscoreForm = document.createElement("form");
  highscoreForm.setAttribute("id", "highscore-form"); //call function

  var userInitials = document.createElement("input");
  userInitials.setAttribute("type", "text");
  userInitials.setAttribute("id", "initials");
  userInitials.setAttribute("placeholder", "Enter Initials");

  var submitBtn = document.createElement("input");
  submitBtn.setAttribute("type", "button");
  submitBtn.setAttribute("id", "submit");
  submitBtn.setAttribute("value", "Save Score");
  //   submitBtn.setAttribute("className", "btn");

  highscoreForm.appendChild(userInitials);
  highscoreForm.appendChild(submitBtn);
  $(highscoreForm).appendTo("#quizCardBody");

  submitBtn.addEventListener("click", saveUserScore);

  //   localStorage.setItem("studentGrade", JSON.stringify(studentGrade));
}

function saveUserScore() {
  var input = document.getElementById("initials").value;
  var finalScore = timeLeft;

  var newScore = {
    initials: input,
    score: finalScore,
  };
  document.getElementById("highscore-form").reset();
  highscoreList.push(newScore);
  viewAllHighscores();
}

function viewAllHighscores() {
  if (highscoreList.length === 0) {
    var li = document.createElement("li");
    li.textContent = "No highscores to display";
    highscoreDisplay.appendChild(li);
  }
  for (var i = 0; i < highscoreList.length; i++) {
    var initials = highscoreList[i].initials;
    var score = highscoreList[i].score;

    var li = document.createElement("li");
    li.textContent = i + 1 + ": " + initials + " " + score;
    highscoreDisplay.appendChild(li);
  }
}

function startTimer() {
  var timer = setInterval(function () {
    if (numQuestions === 0) {
      secondsRemaining.textContent = "Finished Quiz";
    } else if (timeLeft === 0) {
      secondsRemaining.textContent = "Times up!";
      giveScore();
    } else if (timeLeft > 0) {
      secondsRemaining.textContent = timeLeft;
      timeLeft--;
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
    currentAnswerOption.setAttribute("id", "answers");
    currentAnswerOption.innerHTML = currentQuestionAnswerOptions[i];
    //2. Append
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

function getCorrectAnswerLetter(object) {
  return object.correctAnswer;
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

function clearQuestion() {
  curQuestion.innerHTML = "";
  curAnswers.innerHTML = "";
}

function handleCorrectAnswer() {
  numCorrect++;
  counter++;
  clearQuestion();
  numQuestions--;
  if (numQuestions > 0) {
    updateQuestion(quizQuestions);
  } else {
    clearQuestion();
    giveScore();
  }
}

function handleWrongAnswer() {
  timeLeft = timeLeft - 10;
  counter++;
  clearQuestion();
  numQuestions--;
  if (numQuestions > 0) {
    updateQuestion(quizQuestions);
  } else {
    clearQuestion();
    giveScore();
  }
}

//USER INTERACTIONS
startQuizBtn.addEventListener("click", startQuiz);

viewHighscores.addEventListener("click", viewAllHighscores);

init();
