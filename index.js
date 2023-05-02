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
    return this.currentQuestionsIndex >= this.questions.lenght;
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
  } 
}
// Game logic
quizApp = () => {
  if (quiz.hasEnded()){
    //Screen end
  } else {
    // Display question and choice
    display.question();
  }
}

// Creat Quiz
let quiz = new Quiz(questions);
quizApp();