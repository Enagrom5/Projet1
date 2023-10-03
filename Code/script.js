const destination = document.querySelector(".destination");
const buttonResult = document.querySelector(".button-container");
const titre = document.querySelector(".titreDestination");
const destinationImage = document.querySelector(".destinationImage");
const destinationDescription = document.querySelector(
  ".destinationDescription"
);
const buttonRestart = document.querySelector(".try-again");
const accueil = document.querySelector(".startQuiz");

const questionsArray = [
  "Jour ou Nuit?",
  "Sport ou Sieste?",
  "Musée ou bronzer?",
  "Blockbuster ou film d'auteur?",
  "Trop chaud ou trop froid?",
  "Plage ou montagne?",
  "Classique ou Métal?",
  "Bière ou vin?",
  "Sucré ou salé?",
  "Humain ou robot?",
  "Livre ou télé?",
  "PC ou console?",
  "Windows ou Linux?",
  "Legolas ou Gimli?",
  "Pilule rouge ou pilule bleue?",
];
// Tableau des questions
// const reponseAArray = ["Jour", "Sport"]; - Tableau des txt réponses A
// const reponseBArray = ["Nuit", "Sieste"]; - Tableau des txt réponses B
const imagesA = [
  "url('../assets/jour.jpg')",
  "url('../assets/sport.jpg')",
  "url('../assets/musee.jpg')",
  "url('../assets/blockbuster.jpg')",
  "url('../assets/chaud.jpg')",
  "url('../assets/plage.jpg')",
  "url('../assets/classique.jpg')",
  "url('../assets/biere.jpg')",
  "url('../assets/sucre.jpg')",
  "url('../assets/humain.jpg')",
  "url('../assets/livre.jpg')",
  "url('../assets/pc.jpg')",
  "url('../assets/windows.png')",
  "url('../assets/legolas.jpg')",
  "url('../assets/rouge.jpg')",
];
// Tableau des images A
const imagesB = [
  "url('../assets/nuit.jpg')",
  "url('../assets/sieste.jpg')",
  "url('../assets/bronzage.jpg')",
  "url('../assets/auteur.jpg')",
  "url('../assets/froid.jpg')",
  "url('../assets/montagne.jpg')",
  "url('../assets/metal.jpg')",
  "url('../assets/vin.jpg')",
  "url('../assets/sale.jpg')",
  "url('../assets/robot.jpg')",
  "url('../assets/tele.jpg')",
  "url('../assets/console.jpg')",
  "url('../assets/linux.jpg')",
  "url('../assets/gimli.jpg')",
  "url('../assets/bleu.jpg')",
];
// Tableau des images B

const question = document.querySelector(".question"); // Sélectionne en JS la balise question
const reponseA = document.querySelector(".cardAnswerA"); // Sélectionne en JS la balise réponse A
const reponseB = document.querySelector(".cardAnswerB"); // Sélectionne JS la balise réponse B
const buttonStart = document.querySelector(".buttonStart");

let i = 0;

/**
 * Fonction qui permet la suppression du bouton "démarrer le quiz"
 */
function removeButton() {
  buttonStart.remove();
  reponseA.style.display = "block";
  reponseB.style.display = "block";
  question.style.display = "block";
  displayQuestion(i);
}

/**
 * Fonction qui permet de passer à la question suivante
 */
function displayQuestion(idQuestion) {
  question.innerHTML = questionsArray[idQuestion]; // Affiche la question dans le tableau questionsArray
  //reponseA.innerHTML = reponseAArray[idQuestion]; - Affiche le texte de la réponse A via le tableau des txt réponses A
  //reponseB.innerHTML = reponseBArray[idQuestion]; - Affiche le texte de la réponse B via le tableau des txt réponses B
  reponseA.style.backgroundImage = imagesA[idQuestion]; // Affiche l'image A dans le cadre A via le tableau des images A
  reponseB.style.backgroundImage = imagesB[idQuestion]; // Affiche l'image B dans le cadre B via le tableau des images B
}
/**
 * Suppression du bouton de lancement de quiz
 */
buttonStart.addEventListener("click", function () {
  removeButton();
});
let calculNumber = 0;
/**
 * Passe à la question suivante (bouton A)
 */
reponseA.addEventListener("click", function () {
  // permet de passer à la question suivante
  i++;
  calculNumber += 5;
  console.log(calculNumber);
  if (i < questionsArray.length) {
    displayQuestion(i);
  } else {
    buttonResult.style.display = "flex";
  }
});

/**
 * Passe à la question suivante (bouton B)
 */
reponseB.addEventListener("click", function () {
  // permet de passer à la question suivante
  i++;
  calculNumber += 2;
  console.log(calculNumber);
  if (i < questionsArray.length) {
    displayQuestion(i);
  } else {
    buttonResult.style.display = "flex";
  }
});

/**
 * Ce qui permet de ne pas afficher les cartes au chargement
 */
onload = (event) => {
  (question.style.display = "none"),
    (reponseA.style.display = "none"),
    (reponseB.style.display = "none");
};

/* Tableau pour les destinations*/
let randomNumber = Math.floor(Math.random() * 14);
console.log(randomNumber);

const destinationList = [
  {
    name: "Un monatère",
    description:
      "Connu pour leur fête, les moines vous assureront un séjour inoubliable en vous contant les histoires les plus palpitantes!",
    img: "../assets/Destination/monasteredusilence.jpg",
  },
  {
    name: "Le Mordor",
    description:
      "Bien connu pour sa population un poil rustique, et ses paysages luxuriants, le Mordor est un pays ou il fait bon vivre. C'est la saison idéale! Après il fera un peu trop froid.",
    img: "../assets/Destination/mordor1.jpg",
  },
  {
    name: "Hoth la planète de glace",
    description:
      "Attendez vous à une expérience chaleureuse! La cuisine locale vous coupera le souffle!",
    img: "../assets/Destination/hothplanet.jpg",
  },
  {
    name: "Bergerie dans le Larzac",
    description: "Pour se reposer quoi de mieux que le travail de la terre!",
    img: "../assets/Destination/bergeriedepierre.jpg",
  },
  {
    name: "Azkaban",
    description: "The place to be pour profiter de toute la liberté possible!",
    img: "../assets/Destination/Azkaban.png",
  },
  {
    name: "Le monde des télétubbies",
    description:
      "Endroit paisible et calme. Vous pourrez observer en toute tranquillité les autochtones",
    img: "../assets/Destination/teletubbies1.jpg",
  },
  {
    name: "Centre de désintoxication",
    description:
      "Dernier lieu à la mode pour partir en vacances. Méfiance tout de même n'acceptez aucune pilule qu'on vous proposerait!",
    img: "../assets/Destination/centredesintox.jpg",
  },
  {
    name: "Camping nudiste",
    description:
      "Si vous aimez les séjours simples, celui ci est fait pour vous. Attention Sortez couvert!",
    img: "../assets/Destination/plagenudiste1.jpg",
  },
  {
    name: "Bivouac chez les marcheurs blancs",
    description:
      "Qui n'a jamais rêvé de franchir le mur? Ce bivouac est fait pour vous.",
    img: "../assets/Destination/beyondthewall.png",
  },
  {
    name: "Séjour linguistique chez les Goa'uld ",
    description:
      "Population extrêmement amicale, avec eux c'est presque symbiotique. Veillez à ne pas en ramener un en rentrant!",
    img: "../assets/Destination/stargate.jpg",
  },
  {
    name: "Hôtel Cortez",
    description: "Séjour à vous glacer le sang! Showcase de Lady Gaga",
    img: "../assets/Destination/hotelcortez.png",
  },
  {
    name: "Le Tartare",
    description: "Un incroyable supplice!",
    img: "../assets/Destination/tartare.png",
  },
  {
    name: "Hôpital psychitrique Ashecliffe",
    description: "Tellement intense qu'on en perd la boule!",
    img: "../assets/Destination/shutterisland.png",
  },
  {
    name: "Croisière sur le Titanic",
    description: "Profitez de leur animation, les pieds dans l'eau!",
    img: "../assets/Destination/titanic2.jpg",
  },
];

/**
 * CHANGER LES PAGES
 *  */

/**
 * quiz => result
 *  */
const questions = document.querySelector(".Questions");
buttonResult.addEventListener("click", function () {
  questions.style.display = "none";
  destination.style.display = "flex";
  titre.textContent = `${destinationList[randomNumber].name}`;
  destinationImage.src = `${destinationList[randomNumber].img}`;
  destinationDescription.textContent = `${destinationList[randomNumber].description}`;
});
const submitButton = document.querySelector(".submitButton");

submitButton.addEventListener("click", function () {
  alert(
    "Merci de votre intéret. Nos équipes reviendront vers vous au plus vite!"
  );
  event.preventDefault();
});
/**
 * result => accueil
 *  */
buttonRestart.addEventListener("click", function () {
  questions.style.display = "none";
  buttonContainer.style.display = "none";
  destination.style.display = "none";
  buttonRestart.style.display = "none";
  accueil.style.display = "flex";
  buttonStart.style.display = "flex";
  
});