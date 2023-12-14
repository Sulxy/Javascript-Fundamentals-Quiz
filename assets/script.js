document.getElementById("#button1").addEventListener("click", gameStart());

// var question? not questions? 
var questions = document.getElementsByID("questionTitle");
var choices = Array.from(document.getElementsByClassName("answerChoice"));

var currentQuestion = {};
var correctAnswers = false;
var score = 0;
var questionNumber = 0;
var remainingQuestions = [];


var questions = [
    {
        question: "Commonly used data types DO NOT incluse:",
        choice1: "Strings",
        choice2: "Booleans",
        choice3: "Alerts",
        choice4: "Numbers",
        rightAnswer: 3,
    }   ,
    {
        question: "The condition in an if/else statement is enclosed with:",
        choice1: "Quotes",
        choice2: "Curly Brackets",
        choice3: "Parentheses",
        choice4: "Square Brackets",
        rightAnswer: 2,
    }   ,
    {
        question: "String values must be encloed within ____ when being assigned to variables.",
        choice1: "Commas",
        choice2: "Curly Brackets",
        choice3: "Quotes",
        choice4: "Parentheses",
        rightAnswer: 3,
    }   ,
    {
        question: "Arrays in Javascript can be used to store ____.",
        choice1: "Numbers and Strings",
        choice2: "Other Arrays",
        choice3: "Booleans",
        choice4: "All of the Above",
        rightAnswer: 4,
    }   ,
    {
        question: "A very useful tool used during development and debugging for printing content to the debugger is:",
        choice1: "Javascript",
        choice2: "Terminal/Bash",
        choice3: "For Loops",
        choice4: "Console.log",
        rightAnswer: 4,
    }
];


gameStart(); {
    questionNumber = 0;
    score = 0;
    remainingQuestions = [...questions];
    getNewQuestion();
};

getnewQuestion(); {
    // for loop goes here?
    for(var i=0; i < questions.length; i++) {
        var answer = window.prompt(questions[i].question);
        if(answer == questions[i].rightAnswer) {
         score++;
         alert("Correct!");
        } else {
            alert("Incorrect!");
        }
    }
}



// alert("You got " + score +"/" + questions.length);