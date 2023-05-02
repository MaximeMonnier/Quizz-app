class Question {
  constructor(text, choices, answer) {
    this.text = text;
    this.choices = choices;
    this.answer = answer;
  }
  isCorrectAnswer(choice) {
    return choice === this.answer;
  }
}


const questions = [
  new Question(
    "Quelle méthode Javascript permet de filtrer les éléments d'un tableau",
    ["indexOf()", "map()", "filter()", "reduce()"],
    "filter()"
  ),
  new Question(
    "Quelle méthode Javascript permet de vérifier si un élément figure dans un tableau",
    ["isNaN()", "includes()", "findIndex()", "isOdd()"],
    "includes()"
  ),
  new Question(
    "Quelle méthode transforme du JSON en un objet Javascript ?",
    ["JSON.parse()", "JSON.stringify()", "JSON.object()", "JSON.toJS"],
    "JSON.parse()"
  ),
  new Question(
    "Quel objet Javascript permet d'arrondir à l'entier le plus proche",
    ["Math.ceil()", "Math.floor()", "Math.round()", "Math.random()"],
    "Math.round()"
  ),
];

class Quiz {
  constructor(questions) {
    this.score = 0;
    this.questions = questions;
    this.currentQuestionsIndex = 0;
  }
  getcurrentQuestion() {
    return this.questions[this.currentQuestionsIndex];
  }
  guess(answer) {
    if(this.getcurrentQuestion().isCorrectAnswer(answer)){
        this.score++;
    }
    this.currentQuestionsIndex++;
  }
  hasEnded(){
    return this.currentQuestionsIndex >= this.questions.length;
  }
}

// Quizz display
const display = {
  elementShown: function (id, text) {
    let element = document.getElementById(id);
    element.innerHTML = text;
  },
  question: function () {
    this.elementShown('question', quiz.getcurrentQuestion().text)
  },
  choices: function() {
    let choices = quiz.getcurrentQuestion().choices;

    guessHandler = (id, guess) => {
      document.getElementById(id).onclick = function () {
        quiz.guess(guess);
        quizApp();
      }
    }
    // Display choice and user choice
    for (let i = 0; i< choices.length; i++){
      this.elementShown("choice" + i, choices[i]);
      guessHandler('guess' + i, choices[i]);
    }
  },
  progress: function() {
    this.elementShown("progress", `Question ${quiz.currentQuestionsIndex + 1} sur ${quiz.questions.lenth}`);
  },
  endQuiz: function() {
    let endQuizHTML = `
    <h1>Quiz terminer ! </h1>
    <h3>Votre score est de : ${quiz.score} / ${quiz.questions.length}</h3>
    `;
    this.elementShown("quiz", endQuizHTML);
  },
};
// Game logic
quizApp = () => {
  if (quiz.hasEnded()){
    //Screen end
    display.endQuiz();
  } else {
    // Display question and choice
    display.question();
    display.choices();
    display.progress();
  }
}

// Creat Quiz
let quiz = new Quiz(questions);
quizApp();