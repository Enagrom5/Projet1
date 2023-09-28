const questionsArray = ["Jour ou Nuit?", "Sport ou Sieste?","Musée ou bronzer?","Blockbuster ou film d'auteur?","Trop chaud ou trop froid?","Plage ou montagne?","Classique ou Métal?","Bière ou vin?","Sucré ou salé?","Humain ou robot?","Livre ou télé?","PC ou console?","Windows ou Linux?","Legolas ou Gimli?","Pilule rouge ou pilule bleue?"]; 
// Tableau des questions
// const reponseAArray = ["Jour", "Sport"]; - Tableau des txt réponses A
// const reponseBArray = ["Nuit", "Sieste"]; - Tableau des txt réponses B
const imagesA = ["url('../assets/jour.jpg')", "url('../assets/sport.jpg')","url('../assets/musee.jpg')", "url('../assets/blockbuster.jpg')","url('../assets/chaud.jpg')", "url('../assets/plage.jpg')", "url('../assets/classique.jpg')","url('../assets/biere.jpg')", "url('../assets/sucre.jpg')", "url('../assets/humain.jpg')","url('../assets/livre.jpg')", "url('../assets/pc.jpg')", "url('../assets/windows.png')", "url('../assets/legolas.jpg')", "url('../assets/rouge.jpg')"] 
// Tableau des images A
const imagesB = ["url('../assets/nuit.jpg')", "url('../assets/sieste.jpg')","url('../assets/bronzage.jpg')", "url('../assets/auteur.jpg')","url('../assets/froid.jpg')", "url('../assets/montagne.jpg')", "url('../assets/metal.jpg')","url('../assets/vin.jpg')", "url('../assets/sale.jpg')", "url('../assets/robot.jpg')","url('../assets/tele.jpg')", "url('../assets/console.jpg')", "url('../assets/linux.jpg')", "url('../assets/gimli.jpg')", "url('../assets/bleu.jpg')"] 
// Tableau des images B

const question = document.querySelector('.question'); // Sélectionne en JS la balise question
const reponseA = document.querySelector('.cardAnswerA'); // Sélectionne en JS la balise réponse A
const reponseB = document.querySelector('.cardAnswerB'); // Sélectionne JS la balise réponse B
const buttonStart = document.querySelector('.buttonStart')

let i = 0;

/**
 * Fonction qui permet la suppression du bouton "démarrer le quiz"
 */
function removeButton(){
 buttonStart.remove();
 reponseA.style.display= "block";
 reponseB.style.display= "block"
 question.style.display= "block";
 displayQuestion(i);
}

/**
 * Fonction qui permet de passer à la question suivante
 */
function displayQuestion(idQuestion) {
    question.innerHTML = questionsArray[idQuestion];  // Affiche la question dans le tableau questionsArray
    //reponseA.innerHTML = reponseAArray[idQuestion]; - Affiche le texte de la réponse A via le tableau des txt réponses A
    //reponseB.innerHTML = reponseBArray[idQuestion]; - Affiche le texte de la réponse B via le tableau des txt réponses B
    reponseA.style.backgroundImage = imagesA[idQuestion]; // Affiche l'image A dans le cadre A via le tableau des images A
    reponseB.style.backgroundImage = imagesB[idQuestion]; // Affiche l'image B dans le cadre B via le tableau des images B
}
/**
 * Suppression du bouton de lancement de quiz
 */
buttonStart.addEventListener('click', function() {
    removeButton();
})
/**
 * Passe à la question suivante (bouton A)
 */
reponseA.addEventListener('click', function () {
    // permet de passer à la question suivante
    i++;

    if (i < questionsArray.length) {
        displayQuestion(i);
    } else {
        // tu affiches la destination de rêve !
    }
})

/**
 * Passe à la question suivante (bouton B)
 */
reponseB.addEventListener('click', function () {
    // permet de passer à la question suivante
    i++;

    if (i < questionsArray.length) {
        displayQuestion(i);
    } else {
        // tu affiches la destination de rêve !
    }
})
/**
 * Ce qui permet de ne pas afficher les cartes au chargement
 */
onload = (event) => { question.style.display="none", reponseA.style.display= "none", reponseB.style.display= "none"}
/** -----------------------------------------------

const questions = document.querySelector('.Questions');
const body = document.querySelector("body")
questions.style.backgroundColor = "#151515"





const questionReponse = [
    {
        question: "Musée ou Bronzage?",
        picture1: "../assets/woman-1283009_640.jpg",
        picture2: "../assets/bronzage.jpg",
        reponse1: "Musée",
        reponse2: "Bronzage",
        id: "question1"
    },
    {
        question: "Blockbuster ou Film d'auteur?",
        picture1: "../assets/ai-generated-8229798_640.jpg",
        picture2: "../assets/main-tenue-clap-devant-aimer-mime-couple.jpg",
        reponse1: "Blockbuster",
        reponse2: "Film d'auteur",
        id: "question2"
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
        id: "question4",
    },
    {
        question: "Bière ou Vin?",
        picture1: "../assets/biere.jpg",
        picture2: "../assets/vin.jpg",
        reponse1: "Bière",
        reponse2: "Vin",
        id: "question5",
    },
    {
        question: "Sucré ou Salé?",
        picture1: "../assets/sucre.jpg",
        picture2: "../assets/sale.jpg",
        reponse1: "Sucré",
        reponse2: "Salé",
        id: "question6",
    },
    {
        question: "Humain ou Robot?",
        picture1: "../assets/humain.jpg",
        picture2: "../assets/robot.jpg",
        reponse1: "Humain",
        reponse2: "Robot",
        id: "question7"
    },
    {
        question: "Livre ou Télé?",
        picture1: "../assets/Livre.jpg",
        picture2: "../assets/tele.jpg",
        reponse1: "Livre",
        reponse2: "Télé",
        id: "question8"
    },
    {
        question: "PC ou Console?",
        picture1: "../assets/pc.jpg",
        picture2: "../assets/console.jpg",
        reponse1: "PC",
        reponse2: "Console",
        id: "question9"
    },
    {
        question: "Windows ou Linux?",
        picture1: "../assets/windows.png",
        picture2: "../assets/linux.jpg",
        reponse1: "Windows",
        reponse2: "Linux",
        id: "question10"
    },
    {
        question: "Legolas ou Guimli?",
        picture1: "../assets/legolas.jpg",
        picture2: "../assets/guimli.jpg",
        reponse1: "Legolas",
        reponse2: "Guimli",
        id: "question11",
    },
    {
        question: "Pilule Rouge ou Pilule Bleue?",
        picture1: "../assets/rouge.jpg",
        picture2: "../assets/bleu.jpg",
        reponse1: "Pilule Rouge",
        reponse2: "Pilule Bleue",
        id: "question12"
    },
    {
        question: "Jour ou Nuit?",
        picture1: "../assets/jour.jpg",
        picture2: "../assets/nuit.jpg",
        reponse1: "Jour",
        reponse2: "Nuit",
        id: "question13",
    },
    {
        question: "Java ou Javascript?",
        picture1: "../assets/java.jpg",
        picture2: "../assets/js.jpg",
        reponse1: "Java",
        reponse2: "Javascript",
        id: "question14"
    },
    {
        question: "Sport ou Sieste?",
        picture1: "../assets/sport.jpg",
        picture2: "../assets/sieste.jpg",
        reponse1: "Sport",
        reponse2: "Sieste",
        id: "question15",
    }
]


 * La fonction createCard, permet de créer une carte en fonction des parametres reçu


function createCard(quest, image1Url, image2Url, reponse1, reponse2) {

    const questionContainer = document.createElement("div");
    questionContainer.classList.add("questionContainer");
    //questionContainer.id.add(`${question}`)
    questionContainer.style.display = "flex";
    questionContainer.style.flexDirection = "column";
    questionContainer.style.paddingBottom = "5rem";
    questions.appendChild(questionContainer);

    const question = document.createElement("h2");
    question.classList.add("question")
    question.textContent = quest;

    questionContainer.appendChild(question);

    const cardsContainers = document.createElement("span");
    cardsContainers.classList.add("cards-containers");
    cardsContainers.style.display = "flex";
    cardsContainers.style.justifyContent = "space-around";
    questionContainer.appendChild(cardsContainers);

    const cardContainer1 = document.createElement("span");
    cardContainer1.classList.add("card-container1");
    cardContainer1.style.margin = '1rem';
    cardContainer1.style.width = "49%";
    cardsContainers.appendChild(cardContainer1);

    const cardContainer2 = document.createElement("span");
    cardContainer2.classList.add("card-container2");
    cardContainer2.style.margin = '1rem';
    cardContainer2.style.width = "49%";
    cardsContainers.appendChild(cardContainer2);

    const cardContainerBody1 = document.createElement("div");
    cardContainerBody1.classList.add("containerbody1");

    cardContainer1.appendChild(cardContainerBody1);


    const button1 = document.createElement("button");
    button1.classList.add("button1");
    button1.style.padding = "0";
    button1.style.borderWidth = "0";
    button1.style.borderRadius = "15px";
    button1.style.borderColor = "#151515";
    button1.style.backgroundColor = "#E9B872";
    cardContainerBody1.appendChild(button1);



    const img1 = document.createElement("img");
    img1.src = `${image1Url}`;
    img1.alt = reponse1;
    img1.classList.add("image1");
    img1.style.borderRadius = "5px";
    button1.appendChild(img1)

    const footer1 = document.createElement("p");
    footer1.classList.add("footer1");
    footer1.innerHTML = reponse1;
    footer1.style.backgroundColor = "#E9B872";
    footer1.style.borderRadius = "5px";
    button1.appendChild(footer1);


    const cardContainerBody2 = document.createElement("div");
    cardContainerBody2.classList.add("containerbody2");
    cardContainer2.appendChild(cardContainerBody2);

    const button2 = document.createElement("button");
    button2.classList.add("button2")
    button2.style.padding = "0";
    button2.style.borderWidth = "0";
    button2.style.borderRadius = "15px";
    button2.style.borderColor = "#151515";
    button2.style.backgroundColor = "#E9B872";
    cardContainerBody2.appendChild(button2);

    const img2 = document.createElement("img");
    img2.src = `${image2Url}`;
    img2.alt = reponse2;
    img2.style.borderRadius = "5px";
    img2.classList.add("image2");
    button2.appendChild(img2)

    const footer2 = document.createElement("p");
    footer2.classList.add("footer2");
    footer2.innerHTML = reponse2;
    footer2.style.borderRadius = "5px";
    footer2.style.backgroundColor = "#E9B872";
    button2.appendChild(footer2);

    return button1, button2
}




for (const element of questionReponse) {
    //button1, button2//
    createCard(element.question, element.picture1, element.picture2, element.reponse1, element.reponse2);


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

