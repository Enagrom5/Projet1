
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

