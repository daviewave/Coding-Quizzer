//DEPENDENCIES
var startQuizBtn = $("#start");
var secondsRemaining = document.getElementById("seconds-left");
var question = document.getElementById("quiz-question");
var answers = document.getElementById("intro-paragragh");

//DATA
//bool to track if the current screen is the intro screen (still press start button)
var isStartingScreen = true;

//Need an array containing the quiz questions and potential answers
var quizQuestions = [
  {
    question_string:
      "1. Which of the following is not a way to define a new variable in javascript?",
    choices: {
      correct: "new",
      wrong: ["var", "let", "const"],
    },
  },
  {
    question_string:
      "2. Which of the following are not semantic elements in html5?",
    choices: {
      correct: "<middle>",
      wrong: ["<article>", "<footer>", "<main>"],
    },
  },
  {
    question_string:
      "3. Which of the following data types returns a true/false value?",
    choices: {
      correct: "boolean",
      wrong: ["integer", "string", "float"],
    },
  },
  {
    question_string:
      "4. What is the name of a function that contains a parameter that accepts another function as an argument?",
    choices: {
      correct: "Call-back function",
      wrong: [
        "Nested function",
        "Recursive Function",
        "function with-in a function",
      ],
    },
  },
  {
    question_string:
      "5. When using Git, which line of code will allow you to switch from the current branch to the main branch?",
    choices: {
      correct: "git checkout main",
      wrong: ["git commit -m", "git add -A", "git init"],
    },
  },
];

//FUNCTIONS
//TODO: create function to start the quiz
function startQuiz() {
  startQuizBtn.hide();
  startTimer();

  //1. Need to present the user the first question + answer options
  for (var i = 0; i < quizQuestions.length; i++) {
    // question.textContent = quizQuestions[i].question_string;
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

//USER INTERACTIONS
startQuizBtn.on("click", startQuiz);
