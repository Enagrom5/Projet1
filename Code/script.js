const questions = document.querySelector('.Questions');
const body = document.querySelector("body")
questions.style.backgroundColor = "#151515"

/**
 * Toutes les questions
 */

const questionReponse = [
    {
        question: "Musée ou Bronzage?",
        picture1: "../assets/woman-1283009_640.jpg",
        picture2: "../assets/bronzage.jpg",
        reponse1: "Musée",
        reponse2: "Bronzage",
    },
    {
        question: "Blockbuster ou Film d'auteur?",
        picture1: "../assets/ai-generated-8229798_640.jpg",
        picture2: "../assets/main-tenue-clap-devant-aimer-mime-couple.jpg",
        reponse1: "Blockbuster",
        reponse2: "Film d'auteur",
    },
    {
        question: "Chaud ou Froid?",
        picture1: "../assets/chaud.jpg",
        picture2: "../assets/froid.jpg",
        reponse1: "Chaud",
        reponse2: "Froid",
        id: "question3"
    },
    {
        question: "Plage ou Montagne?",
        picture1: "../assets/plage.jpg",
        picture2: "../assets/montagne.jpg",
        reponse1: "Plage",
        reponse2: "Montagne",
    },
    {
        question: "Bière ou Vin?",
        picture1: "../assets/biere.jpg",
        picture2: "../assets/vin.jpg",
        reponse1: "Bière",
        reponse2: "Vin",
    },
    {
        question: "Sucré ou Salé?",
        picture1: "../assets/sucre.jpg",
        picture2: "../assets/sale.jpg",
        reponse1: "Sucré",
        reponse2: "Salé",
    },
    {
        question: "Humain ou Robot?",
        picture1: "../assets/humain.jpg",
        picture2: "../assets/robot.jpg",
        reponse1: "Humain",
        reponse2: "Robot",
    },
    {
        question: "Livre ou Télé?",
        picture1: "../assets/Livre.jpg",
        picture2: "../assets/tele.jpg",
        reponse1: "Livre",
        reponse2: "Télé",
    },
    {
        question: "PC ou Console?",
        picture1: "../assets/pc.jpg",
        picture2: "../assets/console.jpg",
        reponse1: "PC",
        reponse2: "Console",
    },
    {
        question: "Windows ou Linux?",
        picture1: "../assets/windows.png",
        picture2: "../assets/linux.jpg",
        reponse1: "Windows",
        reponse2: "Linux",
    },
    {
        question: "Legolas ou Guimli?",
        picture1: "../assets/legolas.jpg",
        picture2: "../assets/guimli.jpg",
        reponse1: "Legolas",
        reponse2: "Guimli",
    },
    {
        question: "Pilule Rouge ou Pilule Bleue?",
        picture1: "../assets/rouge.jpg",
        picture2: "../assets/bleu.jpg",
        reponse1: "Pilule Rouge",
        reponse2: "Pilule Bleue",
    },
    {
        question: "Jour ou Nuit?",
        picture1: "../assets/jour.jpg",
        picture2: "../assets/nuit.jpg",
        reponse1: "Jour",
        reponse2: "Nuit",
    },
    {
        question: "Java ou Javascript?",
        picture1: "../assets/java.jpg",
        picture2: "../assets/js.jpg",
        reponse1: "Java",
        reponse2: "Javascript",
    },
    {
        question: "Sport ou Sieste?",
        picture1: "../assets/sport.jpg",
        picture2: "../assets/sieste.jpg",
        reponse1: "Sport",
        reponse2: "Sieste",
    }
]

/**
 * La fonction createCard, permet de créer une carte en fonction des parametres reçu
 */

function createCard(quest, image1Url, image2Url, reponse1, reponse2) {

    const questionContainer = document.createElement("div");
    questionContainer.classList.add("questionContainer");
    questions.appendChild(questionContainer);

    const question = document.createElement("h2");
    question.classList.add("question")
    question.textContent = quest;
    questionContainer.appendChild(question);

    const cardsContainers = document.createElement("span");
    cardsContainers.classList.add("cards-containers");
    questionContainer.appendChild(cardsContainers);

    const cardContainer1 = document.createElement("span");
    cardContainer1.classList.add("card-container1");
    cardsContainers.appendChild(cardContainer1);

    const cardContainer2 = document.createElement("span");
    cardContainer2.classList.add("card-container2");
    cardsContainers.appendChild(cardContainer2);

    const cardContainerBody1 = document.createElement("div");
    cardContainerBody1.classList.add("containerbody1");
    cardContainer1.appendChild(cardContainerBody1);


    const button1 = document.createElement("button");
    button1.classList.add("button1");
    cardContainerBody1.appendChild(button1);

    const img1 = document.createElement("img");
    img1.src = `${image1Url}`;
    img1.alt = reponse1;
    img1.classList.add("image1");
    button1.appendChild(img1)

    const footer1 = document.createElement("p");
    footer1.classList.add("footer1");
    footer1.innerHTML = reponse1;
    button1.appendChild(footer1);


    const cardContainerBody2 = document.createElement("div");
    cardContainerBody2.classList.add("containerbody2");
    cardContainer2.appendChild(cardContainerBody2);

    const button2 = document.createElement("button");
    button2.classList.add("button2")
    cardContainerBody2.appendChild(button2);

    const img2 = document.createElement("img");
    img2.src = `${image2Url}`;
    img2.alt = reponse2;
    button2.appendChild(img2)

    const footer2 = document.createElement("p");
    footer2.classList.add("footer2");
    footer2.innerHTML = reponse2;
    button2.appendChild(footer2);

    return button1, button2
}




for (const element of questionReponse) {
    //button1, button2// 
    createCard(element.question, element.picture1, element.picture2, element.reponse1, element.reponse2);
}



/**
 * Version 2 avec l'affichage d'une question par une question
 */
// let i = 0;

// function next(i) {
//     return i + 1
// }


// while (i < questionReponse.length) {

//     createCard(questionReponse[i].question, questionReponse[i].picture1, questionReponse[i].picture2, questionReponse[i].reponse1, questionReponse[i].reponse2);

//     // créer un bouton, qui permet d'incrementer i pour afficher la question d'après
//     i++;
// }

/**
 * Version 1 OPE mais affiche toutes les questions.
 */



// ---------------------------------------------------


/* let questionActuelleIndex = 0;

const displayNextQuestion = () => {
    if (currentQuestionIndex < questionReponse.length) {
        const {question, picture1, picture2, reponse1, reponse2} = questionReponse[questionActuelleIndex]
        createCard(question, picture1, picture2, reponse1, reponse2);
        questionActuelleIndex++
    } else {
        console.log("Tu as répondu à tout")
    }
}

displayNextQuestion()

*/


// ---------------------------------------------------











//const compteur=0;
//button1.addEventListener("click",function(){
//   compteur += 3;
//})
//button2.addEventListener("click",function(){
// compteur += 8;
//})

