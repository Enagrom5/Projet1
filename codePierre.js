const allQuestions = [
    {
        question: "Musée ou bronzer ?",
        answer: {
            choixA: {value:1,
                textContent:"Musée"}
            choixB: 2,
        }
    },
    {
        question: "Plage ou montagne ?",
        answer: {
            choixA: 1,
            choixB: 2
        }
    },
    {
        question: "Cinéma ou concert ?",
        answer: {
            choixA: 1,
            choixB: 2
        }
    },
    {
        question: "Pizza ou sushi ?",
        answer: {
            choixA: 1,
            choixB: 2
        }
    },
    {
        question: "Chien ou chat ?",
        answer: {
            choixA: 1,
            choixB: 2
        }
    }
];

let currentQuestionIndex = 0;
let userScore = 0;

const questionText = document.getElementById("question-text");
const choixAButton = document.getElementById("choixA");
const choixBButton = document.getElementById("choixB");
const resultContainer = document.getElementById("result-container");
const resultText = document.getElementById("result-text");
const nextButton = document.getElementById("next-button");

function displayQuestion() {
    const currentQuestion = allQuestions[currentQuestionIndex];
    questionText.textContent = currentQuestion.question;
    choixAButton.textContent = "Choix A";
    choixBButton.textContent = "Choix B";
    resultContainer.style.display = "none";
}

function calculateScore(userChoice) {
    const currentQuestion = allQuestions[currentQuestionIndex];
    const scoreForChoice = currentQuestion.answer[userChoice];
    userScore += scoreForChoice;
}

function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < allQuestions.length) {
        displayQuestion();
        nextButton.style.display = "none";
    } else {

        resultContainer.style.display = "block";
        displayImageBasedOnScore();
        nextButton.style.display = "none";
    }
}


function displayImageBasedOnScore() {
    let imageToShow;

    if (userScore >= 5 && userScore <= 8) {
        imageToShow = "vacation-2218989_640.jpg";
    } else {  //(userScore >= 9 && userScore <= 10) {
        imageToShow = "woman-1283009_640.jpg";
    }

    resultContainer.innerHTML = "";


    const imageElement = document.createElement("img");
    imageElement.src = imageToShow;
    resultContainer.appendChild(imageElement);
}

choixAButton.addEventListener("click", () => {
    calculateScore("choixA");
    nextQuestion();
});

choixBButton.addEventListener("click", () => {
    calculateScore("choixB");
    nextQuestion();
});

nextButton.addEventListener("click", nextQuestion);


displayQuestion();