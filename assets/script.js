
var questionHTML = document.getElementById("question-box");
var answerChoiceHTML = Array.from(document.getElementsByClassName("answerChoice"));
var initials = "";
var timer = document.getElementById("timer");
var currentQuestionIndex = 0;
var questionsArray = [
    {
        questionHTML: "Commonly used data types DO NOT include:",
        answerChoiceHTML: ["A. Strings", "B. Booleans", "C. Alerts", "D. Numbers"],
        correctAnswer: "C. Alerts"
    },
    {
        questionHTML: "The condition in an if/else statement is enclosed with:",
        answerChoiceHTML: ["A. Quotes", "B. Curly Brackets", "C. Parentheses", "D. Square Brackets"],
        correctAnswer: "B. Curly Brackets"
    },
    {
        questionHTML: "String values must be enclosed within ____ when being assigned to variables.",
        answerChoiceHTML: ["A. Commas", "B. Curly Brackets", "C. Quotes", "D. Parentheses"],
        correctAnswer: "C. Quotes"
    },
    {
        questionHTML: "A very useful tool used during development and debugging for printing content to the debugger is:",
        answerChoiceHTML: ["A. Javacsript", "B. Terminal/Bash", "C. For Loops", "D. Console.log"],
        correctAnswer: "D. Console.log"
    },
    {
        questionHTML: "Arrays in Javascript can be used to store ____.",
        answerChoiceHTML: ["A. Numbers and Strings", "B. Other Arrays", "C. Booleans", "D. All of the Above"],
        correctAnswer: "D. All of the Above"
    },
]; 

// Function to start the quiz
function startQuiz() {
    startTimer();

    // Present the first question
    presentQuestion();
}

startQuiz();

// Function to start the timer
function startTimer() {
    let seconds = 30;

    const timer = setInterval(() => {
        if (seconds === 0) {
            clearInterval(timer);
            endGame();
        } else {
            document.getElementById("timer").innerHTML = seconds;
            console.log(seconds);
            seconds--;
        }
    }, 1000);
}

// Function to present a question
function presentQuestion() {
    document.getElementById("question").innerHTML = questionsArray[currentQuestionIndex].questionHTML;
    
    document.getElementById("button1").innerHTML = questionsArray[currentQuestionIndex].answerChoiceHTML[0];
    document.getElementById("button1").addEventListener("click", handleAnswer);

    document.getElementById("button2").innerHTML = questionsArray[currentQuestionIndex].answerChoiceHTML[1];
    document.getElementById("button2").addEventListener("click", handleAnswer);

    document.getElementById("button3").innerHTML = questionsArray[currentQuestionIndex].answerChoiceHTML[2];
    document.getElementById("button3").addEventListener("click", handleAnswer);

    document.getElementById("button4").innerHTML = questionsArray[currentQuestionIndex].answerChoiceHTML[3];
    document.getElementById("button4").addEventListener("click", handleAnswer);

    currentQuestionIndex++; // Move to the next question
}


// Function to handle user's answer
function handleAnswer(answer, seconds) {
    if (answer === questionsArray[currentQuestionIndex].correctAnswer) {
        // Answer is correct
        score += 10;
    } else {
        // Answer is wrong
        seconds -= 10;
        if (seconds < 0) {
            seconds = 0;
        }
    }
    currentQuestionIndex++;
    if (currentQuestionIndex < questionsArray.length) {
        // Move to the next question
        presentQuestion();
    } else {
        // No more questions, end the game
        endGame();
    }
}

// Function to end the game
function endGame(score) {
    // Stop the timer
    clearInterval(timer);
    // Save the score
    saveScore(initials, score);
}

// Function to save initials and score
function saveScore(initials, score) {
    // Save initials to local storage
    localStorage.setItem("initials", initials);
    // Your score saving logic goes here
    localStorage.setItem("score", score);
}
