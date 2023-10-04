const destination = document.querySelector(".destination");
const buttonResult = document.querySelector(".button-container");
const titre = document.querySelector(".titreDestination");
const destinationImage = document.querySelector(".destinationImage");
const destinationDescription = document.querySelector(".destinationDescription");
const buttonRestart = document.querySelector(".try-again");
const accueil = document.querySelector(".startQuiz");

const questionsArray = [
  "Jour ou Nuit?",
  "Sport ou Sieste?",
  "Musée ou Bronzer?",
  "Blockbuster ou Film d'auteur?",
  "Trop chaud ou Trop froid?",
  "Plage ou Montagne?",
  "Classique ou Métal?",
  "Bière ou Vin?",
  "Sucré ou Salé?",
  "Humain ou Robot?",
  "Livre ou Télé?",
  "PC ou Console?",
  "Windows ou Linux?",
  "Legolas ou Gimli?",
  "Pilule rouge ou Pilule bleue?",
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
  reponseA.style.display = "flex";
  reponseB.style.display = "flex";
  question.style.display = "flex";
  displayQuestion(i);
}

/**
 * Fonction qui permet de passer à la question suivante
 */
function displayQuestion(idQuestion) {
  question.innerHTML = questionsArray[idQuestion]; // Affiche la question dans le tableau questionsArray
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
  
  console.log(calculNumber);
  if (i < questionsArray.length) {
    displayQuestion(i);
    calculNumber += 0;
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
  
  console.log(calculNumber);
  if (i < questionsArray.length) {
    displayQuestion(i);
    calculNumber += 1;
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


const destinationList = [
  {
    name: "Le Monastère des Silencieux",
    description:
      "Connu pour leurs fêtes, les moines vous assureront un séjour inoubliable en vous contant les histoires les plus palpitantes!",
    img: "../assets/Destination/monasteredusilence.jpg",
  },
  {
    name: "Le Mordor",
    description:
      "Bien connu pour sa population un poil rustique et ses paysages luxuriants, le Mordor est un pays où il fait bon vivre. C'est LA saison idéale! Après il fera un peu trop froid...",
    img: "../assets/Destination/mordor1.jpg",
  },
  {
    name: "Hoth, la planète de glace",
    description:
      "Attendez vous à une expérience chaleureuse! La cuisine locale vous coupera le souffle!",
    img: "../assets/Destination/hothplanet.jpg",
  },
  {
    name: "Bergerie dans le Larzac",
    description: "Pour se reposer, quoi de mieux que le travail de la terre dans une cabane loin de toutes distractions ? Maria et son fils, Christian seront vos uniques voisins. Aussi accueillants que leurs chèvres, ils ne manqueront pas de vous initier à la confection du fromage cendré !",
    img: "../assets/Destination/bergeriedepierre.jpg",
  },
  {
    name: "Azkaban",
    description: "The place to be pour profiter de toute la liberté possible!",
    img: "../assets/Destination/Azkaban.png",
  },
  {
    name: "Le monde des Télétubbies",
    description:
      "Endroit paisible et calme par delà les collines loin de chez nous. Vous pourrez observer en toute tranquillité les autochtones dans leur milieu naturel! Et comme ils disent chez eux : Héhooooo!",
    img: "../assets/Destination/teletubbies1.jpg",
  },
  {
    name: "Centre de désintoxication",
    description:
      "LE dernier lieu à la mode pour partir en vacances. Méfiance tout de même : n'acceptez aucune pilule qui vous serez proposé !",
    img: "../assets/Destination/centredesintox.jpg",
  },
  {
    name: "Camping nudiste",
    description:
      "Si vous aimez les séjours simples, celui-ci est fait pour vous. Attention, sortez couverts!",
    img: "../assets/Destination/plagenudiste1.jpg",
  },
  {
    name: "Bivouac chez les Marcheurs Blancs",
    description:
      "Qui n'a jamais rêvé de franchir le Mur? Assistez également aux tours de ronde de la célèbre Garde de Nuit ! Ce bivouac est fait pour vous.",
    img: "../assets/Destination/beyondthewall.png",
  },
  {
    name: "Séjour linguistique chez les Goa'uld ",
    description:
      "Population extrêmement amicale, avec eux c'est presque symbiotique. Veillez à ne pas en ramener un en rentrant sous peine de lourdes représailles ...!",
    img: "../assets/Destination/stargate.jpg",
  },
  {
    name: "L'hôtel Cortez",
    description: "Un séjour à vous glacer le sang, à ne pas en douter! Vous allez séjourner aux côtés de véritables célébrités ! Showcase spécial de Lady Gaga tous les mardis soirs !",
    img: "../assets/Destination/hotelcortez.png",
  },
  {
    name: "Le Tartare",
    description: "Un incroyable supplice! Passage obligé par le stand de photo souvenir sur les piloris !",
    img: "../assets/Destination/tartare.png",
  },
  {
    name: "L'hôpital psychiatrique Ashecliffe sur l'île paradisiaque de Shutter Island",
    description: "Tellement intense qu'on en perd la boule!",
    img: "../assets/Destination/shutterisland.png",
  },
  {
    name: "Croisière sur le Titanic",
    description: "Profitez de leurs nombreuses animations à bord, les pieds dans l'eau!",
    img: "../assets/Destination/titanic2.jpg",
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
  titre.textContent = `${destinationList[calculNumber].name}`;
  destinationImage.src = `${destinationList[calculNumber].img}`;
  destinationDescription.textContent = `${destinationList[calculNumber].description}`;
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
  buttonResult.style.display = "none";
  destination.style.display = "none";
  buttonRestart.style.display = "none";
  accueil.style.display = "flex";
  buttonStart.style.display= "flex";
  
});