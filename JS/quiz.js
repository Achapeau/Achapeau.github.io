const questionsDarwin = [
  {
    question:
      "Comment Garry Holy, un homme de 39 ans, est-il tombé du 24ème étage d'un immeuble ?",
    answer: [
      { text: "Il s'est pris pour Superman", correct: false },
      {
        text: "Il a donné un coup d'épaule dans la vitre du 24ème étage pour prouver sa solidité à son entourage",
        correct: true,
      },
      {
        text: "Il avait pris le pari qu'il ne mourrait pas en sautant de cette hauteur",
        correct: false,
      },
      { text: "Il a cru qu'il s'était transformé en oiseau", correct: false },
    ],
  },

  {
    question:
      "Comment un homme de 41 ans est-il mort à Détroit en essayant de ramasser ses clés de voiture dans la rue ?",
    answer: [
      {
        text: "Son porte-clefs était équipé d'explosifs qui ont explosé lorsqu'il l'a ramassé",
        correct: false,
      },
      {
        text: "Un homme lui a volé ses clefs lorsque celles-ci sont tombées. Notre malheureux a poursuivi le malfaiteur pour récupérer son bien, mais ce dernier l'a poignardé",
        correct: false,
      },
      {
        text: "Il est mort noyé en tentant de récupérer ses clefs dans une bouche d'égout, sa tête étant resté coincée entre les grilles de celle-ci",
        correct: true,
      },
      {
        text: "Il a trébuché sur un caillou et une voiture lui a roulé dessus",
        correct: false,
      },
    ],
  },

  {
    question:
      "Après la mort d'un homme lors de son jogging quotidien, sa femme a déclaré qu'il faisait le vide dans sa tête lorsqu'il courait, et en effet ...",
    answer: [
      {
        text: "Il n'a pas vu arriver le poteau en face de lui durant sa course",
        correct: false,
      },
      { text: "Il est entré en collision avec un TGV", correct: false },
      { text: "Il a chuté dans un ravin de 60 mètres", correct: true },
      {
        text: "Il s'est fait courser par un ours plus rapide que lui",
        correct: false,
      },
    ],
  },

  {
    question:
      "Un homme voulant pêcher sur un lac gelé en Alaska a eu la mauvaise idée de lancer un bâton de dynamite sur la glace pour la briser. Que s'est-il passé après le jet du bâton",
    answer: [
      {
        text: "Son chien fidèle lui a rapporté le bâton de dynamite",
        correct: true,
      },
      { text: "Il n'a pas lancé le bâton assez loin", correct: false },
      {
        text: "La glace n'était pas assez solide et tout le lac s'est fissuré après l'explosion",
        correct: false,
      },
      { text: "L'explosion a déclenché une avalanche", correct: false },
    ],
  },

  {
    question:
      "Faites attention en faisant le ménage... qu'à utilisée une femme pour nettoyer les toiles d'araignées dans sa cave au lieu d'un traditionnel balai ?",
    answer: [
      {
        text: "Un tuyau d'arrosage qu'elle n'a pas pu arrêter : elle est morte noyée",
        correct: false,
      },
      { text: "Une torche enflammée qui a mis feu à sa maison", correct: true },
      {
        text: "Un souffleur de feuilles utilisé normalement en extérieur et qui a exploser durant son ménage",
        correct: false,
      },
      {
        text: "Elle a acheté un python qui a préférer la manger elle que les araignéese",
        correct: false,
      },
    ],
  },

  {
    question:
      "Où s'est installé un jeune homme après une soirée bien arrosée lui causant la mort le lendemain matin au Luxembourg ?",
    answer: [
      {
        text: "Sur un rail de train, le lendemain logiquement un train est passé",
        correct: false,
      },
      {
        text: "Sur un container dans un bateau, le lendemain le container est tombé du bateau entraînant ainsi le malheureux voyageur",
        correct: false,
      },
      {
        text: "Dans une benne à ordure, le lendemain il a terminé dans le broyeur du camion des éboueurs",
        correct: true,
      },
      { text: "Chez son ex", correct: false },
    ],
  },

  {
    question:
      "Comment est mort l'astronome danois Tycho Brahe créant ainsi l'expression 'Je ne veux pas mourir comme Tycho Brahe' au Danemark ?",
    answer: [
      {
        text: "Il serait mort en buvant trop d'eau : l'expression étant donc utilisé lors d'apéritifs pour faire comprendre qu'un convive ne prendra pas d'eau",
        correct: false,
      },
      {
        text: "Il serait mort d'un calcul après s'être retenu trop longtemps d'uriner durant un long trajet : l'expression prétextant donc une envie pressante",
        correct: true,
      },
      {
        text: "Il serait mort en mangeant trop lors d'un festin : l'expression signifiant donc 'j'arrête de manger' lors d'un repas",
        correct: false,
      },
      {
        text: "Il serait mort en jouant à la pétanque : l'expression signifiant donc 'Tu tires ou tu pointes?'",
        correct: false,
      },
    ],
  },

  {
    question:
      "Comment Robert Puelo est-il mort après avoir volé un hot-dog sur un marché ?",
    answer: [
      {
        text: "Il s'est étouffé avec la saucisse et le SAMU n'a pas pu le ranimer",
        correct: true,
      },
      {
        text: "Il s'est fait tirer dessus par le vendeur de hot-dogs",
        correct: false,
      },
      {
        text: "Il a fait tomber son butin et a glissé dessus. La chute lui a été fatale",
        correct: false,
      },
      { text: "Il s'est fait tuer par un SDF qui avait faim", correct: false },
    ],
  },

  {
    question:
      "Quel record du monde un révérend brésilien a-t-il voulu battre, mais qui lui a finalement coûté la vie ?",
    answer: [
      { text: "Le record du nombre d'heures sans se nourrir", correct: false },
      {
        text: "Il a voulu organiser une messe dans le désert. Il est mort de déshydratation",
        correct: false,
      },
      {
        text: "Le record de celui qui mange le plus de cornichons en moins de 30 minutes",
        correct: false,
      },
      {
        text: "Le record du plus long vol accroché à des ballons de baudruche. Il fut retrouvé mort trois mois après son décollage sur la côte brésilienne.",
        correct: true,
      },
    ],
  },

  {
    question:
      "Darren, 33 ans a été retrouvé mort, seul dans sa maison, mystérieusement poignardé, sans trace d'effraction. La cause en est :",
    answer: [
      {
        text: "Il a glissé et est tombé sur sa collection de soldats de plomb.",
        correct: false,
      },
      {
        text: `Sous l'emprise de narcotiques, il a voulu "libérer son âme".`,
        correct: false,
      },
      {
        text: "Il a voulu tester si sa nouvelle veste est réellement à l'épreuve des perforations",
        correct: true,
      },
      {
        text: "Il a voulu faire la cuisine pour sa femme et le couteau a glissé sur l'os d'un gigot.",
        correct: false,
      },
    ],
  },
];

const questionsCinema = [
  {
    question: "Qui joue le fameux soldat Ryan dans le film éponyme ?",
    answer: [
      { text: "Matt Damon", correct: true },
      { text: "Vin Diesel", correct: false },
      { text: "Tom Hanks", correct: false },
      { text: "Jude Law", correct: false },
    ],
  },

  {
    question: "Quelle actrice joue le rôle d’Hermione Granger ?",
    answer: [
      { text: "Evanna Lynch", correct: false },
      { text: "Bonnie Wright", correct: false },
      { text: "Emma Watson", correct: true },
      { text: "Emma Thompson", correct: false },
    ],
  },

  {
    question: "A quelle maison appartient Drago Malefoy ?",
    answer: [
      { text: "Gryffondor", correct: false },
      { text: "Poufsouffle", correct: false },
      { text: "Serdaigle", correct: false },
      { text: "Serpentard", correct: true },
    ],
  },

  {
    question:
      "Quel acteur incarne Tony Montana dans le film de Brian de Palma ?",
    answer: [
      { text: "Robert de Niro", correct: false },
      { text: "Martin Sheen", correct: false },
      { text: "Kevin Bacon", correct: false },
      { text: "Al Pacino", correct: true },
    ],
  },

  {
    question: "Dans la saga Star Wars, qui est le père de Luke Skywalker ?",
    answer: [
      { text: "Dark Sidious", correct: false },
      { text: "Chewbacca", correct: false },
      { text: "Dark Vador", correct: true },
      { text: "Obi-Wan Kenobi", correct: false },
    ],
  },

  {
    question:
      "Dans combien de films, Johnny Depp incarne-t-il Jack Sparrow dans la saga Pirates des Caraïbes ?",
    answer: [
      { text: "3 films", correct: false },
      { text: "4 films", correct: false },
      { text: "5 films", correct: true },
      { text: "6 films", correct: false },
    ],
  },

  {
    question:
      "Quel est le nom du petit monstre gentil, héros du film Les Gremlins ?",
    answer: [
      { text: "Guizmo", correct: true },
      { text: "Willow", correct: false },
      { text: "Dobby", correct: false },
      { text: "Tobby", correct: false },
    ],
  },

  {
    question:
      "Quelle actrice incarne Mary Jane Watson dans la trilogie Spider-Man ?",
    answer: [
      { text: "Kirsten Dunst", correct: true },
      { text: "Emma Stone", correct: false },
      { text: "Zendaya", correct: false },
      { text: "Cate Blanchett", correct: false },
    ],
  },

  {
    question: "Qui a réalisé le film 'Forrest Gump' ?",
    answer: [
      { text: "Tom Hanks", correct: false },
      { text: "Les frères Cohen", correct: false },
      { text: "Robert Zemeckis", correct: true },
      { text: "James Cameron", correct: false },
    ],
  },

  {
    question:
      "Quel acteur joue le rôle du gardien-chef Edgecomb dans le film 'La ligne verte' ?",
    answer: [
      { text: "Tom Hanks", correct: true },
      { text: "Sam Rockwell", correct: false },
      { text: "Michael Clarke", correct: false },
      { text: "David Morse", correct: false },
    ],
  },
];

const questionsCultureG = [
  {
    question: "Quel est le dessert préféré d’Homer Simpson ?",
    answer: [
      { text: "Les éclairs au chocolat", correct: false },
      { text: "Les donuts", correct: true },
      { text: "Les brownies", correct: false },
      { text: "Les gaufres à la vanille", correct: false },
    ],
  },

  {
    question: "Quel groupe a interprété la chanson « I Gotta Feeling » ?",
    answer: [
      { text: "Eminen", correct: false },
      { text: "Red Hot Chili Peppers", correct: false },
      { text: "Black Eyed Peas", correct: true },
      { text: "Audioslave", correct: false },
    ],
  },

  {
    question: "De quel fruit l'Eureka est-il une variété ?",
    answer: [
      { text: "Le citron", correct: true },
      { text: "Le cassis", correct: false },
      { text: "La pastèque", correct: false },
      { text: "Le raisin", correct: false },
    ],
  },

  {
    question: "Quel arbre produit la noix de pécan ?",
    answer: [
      { text: "Le macadamia", correct: false },
      { text: "Le noisetier", correct: false },
      { text: "Le pécunier", correct: false },
      { text: "Le pacanier", correct: true },
    ],
  },
  {
    question: "Que fête-t-on le 1er mai ?",
    answer: [
      { text: "La fête du printemps", correct: false },
      { text: "La fête des mères", correct: false },
      { text: "La fête du Beaujolais", correct: false },
      { text: "La fête du travail", correct: true },
    ],
  },

  {
    question:
      "Parmi ces animaux, lequel est considéré comme un fossile vivant ?",
    answer: [
      { text: "Le crocodile", correct: false },
      { text: "L'acanthostega", correct: false },
      { text: "La tortue Luth", correct: false },
      { text: "Le cœlacanthe", correct: true },
    ],
  },

  {
    question: "Qui est l’inséparable compagnon de Titi ?",
    answer: [
      { text: "Toto", correct: false },
      { text: "Grosminet", correct: true },
      { text: "Tata", correct: false },
      { text: "Jerry", correct: false },
    ],
  },

  {
    question:
      "Quelle est la seule région dépassant les 10 millions d’habitants ?",
    answer: [
      { text: "Île-de-France", correct: true },
      { text: "Guadeloupe", correct: false },
      { text: "Guyane", correct: false },
      { text: "Provence-Alpes-Côte d'Azur", correct: false },
    ],
  },

  {
    question:
      "Quelle est la vitesse maximale de circulation sur une autoroute ?",
    answer: [
      { text: "90 km/h", correct: false },
      { text: "110 km/h", correct: false },
      { text: "120 km/h", correct: false },
      { text: "130 km/h", correct: true },
    ],
  },

  {
    question:
      "Quel numéro d'urgence devez-vous composer pour joindre les pompiers ?",
    answer: [
      { text: "15", correct: false },
      { text: "16", correct: false },
      { text: "18", correct: true },
      { text: "112", correct: false },
    ],
  },
];

const questionsSport = [
  {
    question: "Quel est le nom du sélectionneur des Bleus en 2016 ?",
    answer: [
      { text: "Laurent Blanc", correct: true },
      { text: "Michel Platini", correct: false },
      { text: "Didier Deschamps", correct: false },
      { text: "Claude Puel", correct: false },
    ],
  },

  {
    question:
      "Quelle est la marque automobile qui compte le plus de victoires dans les sports auto ?",
    answer: [
      { text: "Ferrari", correct: false },
      { text: "Renault", correct: false },
      { text: "Lotus", correct: false },
      { text: "Porsche", correct: true },
    ],
  },

  {
    question:
      "Quelle est la nationalité d’Usein Bolt, recordman du monde sur 100 mètres ?",
    answer: [
      { text: "Nigériane", correct: false },
      { text: "Jamaïcaine", correct: true },
      { text: "Américaine", correct: false },
      { text: "Trinidadienne", correct: false },
    ],
  },

  {
    question: "De quelle forme est un ballon de rugby ?",
    answer: [
      { text: "Ovale", correct: true },
      { text: "Rond", correct: false },
      { text: "Triangulaire", correct: false },
      { text: "Carré", correct: false },
    ],
  },

  {
    question: "Sur quelle surface joue-t-on au billard ?",
    answer: [
      { text: "Une table", correct: true },
      { text: "Une arène", correct: false },
      { text: "Une piste", correct: false },
      { text: "Une patinoire", correct: false },
    ],
  },

  {
    question: "Quel est le sport de prédilection de Raphael Nadal ?",
    answer: [
      { text: "Basket-ball", correct: false },
      { text: "Hand-ball", correct: false },
      { text: "Cyclisme", correct: false },
      { text: "Tennis", correct: true },
    ],
  },
  {
    question:
      "En 1985, quel est le dernier vainqueur français du Tour De France ?",
    answer: [
      { text: "Raymont Poulidor", correct: false },
      { text: "Bernard Hinault", correct: true },
      { text: "Julian Alaphilippe", correct: false },
      { text: "Laurent Jalabert", correct: false },
    ],
  },

  {
    question: "Quel sport compte le plus grand nombre de licenciés en France ?",
    answer: [
      { text: "Le football", correct: true },
      { text: "La natation", correct: false },
      { text: "Le badminton", correct: false },
      { text: "Le tennis", correct: false },
    ],
  },
  {
    question: "Quel footballeur a été élu Ballon d’or 2015 ?",
    answer: [
      { text: "Cristiano Ronaldo", correct: false },
      { text: "Neymar", correct: false },
      { text: "Lionel Messi", correct: true },
      { text: "Thomas Müller", correct: false },
    ],
  },

  {
    question: "Où se courent les 24 Heures du Mans ?",
    answer: [
      { text: "Au Mans", correct: true },
      { text: "A Daytona", correct: false },
      { text: "A Imola", correct: false },
      { text: "A Dubaï", correct: false },
    ],
  },
];

// Déclaration des constantes DOM pour appeler les éléments HTML de la classe "question"
const questionElement = document.getElementById("question");
// Déclaration des constantes DOM pour appeler les éléments HTML de la classe "réponse"
const answerButtons = document.getElementById("answers");
// En cas de bouton pour skip, appel la classe de ce bouton
const nextButton = document.getElementById("next-btn");

// Déclaration constantes pour l'incrémentation des valeurs index de questions et score
let currentQuestionIndex = 0;
let score = 0;

//Déclaration variable qui indique quel est le tableau du thème choisi
let questionArray = [];

//Déclaration de la variable chosenTheme, qui récupère dans le local storage le thème choisi par l'utilisateur
let chosenTheme = localStorage.getItem("chosenTheme");

// Utilisation d'une boucle switch pour comparer la chaîne correspondant à chosenTheme
// Et assigner à questionArray le tableau contenant les questions/réponses du thème choisi
switch (chosenTheme) {
  case "darwin":
    questionArray = questionsDarwin;
    break;
  case "cinema":
    questionArray = questionsCinema;
    break;
  case "cultureG":
    questionArray = questionsCultureG;
    break;
  case "sport":
    questionArray = questionsSport;
    break;
  default:
    questionArray = questionsDarwin;
    break;
}

// Déclaration de la fonction startQuiz qui va set question index et score à zero, et appeler showQuestion qui affiche la question suivante
function startQuiz() {
  currentQuestionIndex = 0;
  score = 0;
  //   Puis appelle la fonction pour afficher la prochaine question
  showQuestion();
}

// Appel de la fonction startQuiz , qui reset les index et appelle la fonction showQuestion
startQuiz();

// Déclaration de la fonction showQuestion, qui affiche la question contenue dans le tableau "questions"  à l'index actuel
function showQuestion() {
  // Appel de la fonction pour enlever les boutons précédents
  resetState();
  // Déclaration de la variable currentQuestion, qui indique au code quel est le contenu de la question actuelle dans le tableau "questions"
  let currentQuestion = questionArray[currentQuestionIndex];
  //  Déclaration de la variable questionNo, qui permet d'indiquer quel est le numéro de la question actuelle
  let questionNo = currentQuestionIndex + 1;
  // Affiche le numéro de la question dans l'id question, suivi de la question
  questionElement.innerHTML = `Question  ${questionNo} : ${currentQuestion.question}`;

  // Pour chaque réponse présente à l'index actuel du tableau de questions :
  // Création DOM d'un bouton, dans lequel on affiche la première réponse (sur les 4 contenues à l'index actuel)
  // On lui attribue la classe answer-btn, pour pouvoir ensuite le greffer en child de l'id answers
  currentQuestion.answer.forEach((answer) => {
    const aButton = document.createElement("Button");
    aButton.innerHTML = answer.text;
    aButton.classList.add("answer-btn");
    answerButtons.appendChild(aButton);
    // Si le bouton créé possède la propriété correct = true, lui attribue par DOM un attribut dataset correct
    if (answer.correct) {
      aButton.dataset.correct = answer.correct;
      // Cette fonction se répète pour chacune des 4 réponses.
    }
    // Quand clic sur une réponse, sélection de la valeur answer correspondante grâce à la fonction selectAnswer
    aButton.addEventListener("click", selectAnswer);
  });
}

// Déclaration de la fonction resetState qui efface les réponses précédentes
function resetState() {
  // Le bouton pour skip est caché en invoquant la fonction DOM qui lui applique le statut CSS "ne pas afficher"
  nextButton.style.display = "none";
  // Puis il est désactivé en lui appliquant le statut disabled
  nextButton.disabled = true;
  // Supprimer les boutons déjà présents (avec le texte par défaut ou celui de la question précédente )
  while (answerButtons.firstChild) {
    answerButtons.removeChild(answerButtons.firstChild);
  }
}

//Déclaration de la fonction selectAnswer
function selectAnswer(e) {
  // Ajout du bouton sur lequel on a cliqué dans une variable selectedBtn
  const selectedBtn = e.target;
  // vérification si ce bouton possède l'attribut dataset correct = true, donc si réponse correcte,
  //  ajout de la classe correct au selectedBtn, sinon ajout de la classe incorrect
  const isCorrect = selectedBtn.dataset.correct === "true";
  if (isCorrect) {
    selectedBtn.classList.add("correct");
    // Et incrémentation du score
    score++;
    // Enregistrement du score dans le local storage à la clé "score", (et remplace éventuellement une autre valeur précédente)
    localStorage.setItem("score", score);
  } else {
    selectedBtn.classList.add("incorrect");
  }

  // Création d'un tableau qui contient chaque child de la classe answers,
  // Pour pouvoir avec forEach vérifier si le dataset de chaque bouton est = true,
  // Cette fonction permet d'aller donner la classe correct au bouton contenant la bonne réponse,
  // Dans le cas où l'utilisateur a cliqué sur une réponse incorrecte
  // Si l'utilisateur a cliqué sur la bonne réponse, la classe était et restera correct
  Array.from(answerButtons.children).forEach((aButton) => {
    if (aButton.dataset.correct === "true") {
      aButton.classList.add("correct");
    }
    // Ensuite, désactive les boutons réponse
    aButton.disabled = true;
    nextButton.style.display = "block";
    nextButton.disabled = false;
  });
}
// Pour que les couleurs s'appliquent, il faut dans le fichier css : ".correct{background: green;}" et ".incorrect{background: red}"
// Pour que le highlight des boutons se désactive, il faut dans le fichier css: ".answer: hover: not([disabled]){background: #222; color: #fff;"
// et : ".answer: disabled{cursor:no-drop;}"

// Déclaration de la fonction showScore, qui appelle la fonction resetState
// Déclaration de la constante nextButton qui crée par DOM un bouton,
// Lui attribue l'id next-btn, le place en child de la section answers,
// Et on lui injecte un message
function showScore() {
  resetState();
  nextButton.createElement = "Button";
  const scoreBtn = document.createElement("Button");
  scoreBtn.setAttribute("id", "next-btn");
  scoreBtn.textContent = "Par ici pour les résultats!";
  answerButtons.appendChild(scoreBtn);
  answerButtons.style.display = "flex";
  answerButtons.style.alignSelf = "center";
  questionElement.removeChild(questionElement.firstChild);
  questionElement.textContent = "Bien joué !";
  timerElement.style.display = "none";
  timerTxt.style.display = "none";

  // Lors du clic sur ce bouton, l'utilisateur est redirigé vers la page Résultats
  answerButtons.addEventListener("click", function () {
    document.location.href = "results.html";
  });
}

// Déclaration fonction qui incrémente l'index des questions, et appelle la fonction showQuestion si l'index n'est pas à la fin
function handleNextButton() {
  currentQuestionIndex++;
  if (currentQuestionIndex < questionArray.length) {
    showQuestion();
  } else {
    showScore();
  }
}

//En cas de bouton pour skip, on clique dessus pour passer à la question suivante
nextButton.addEventListener("click", () => {
  if (currentQuestionIndex < questionArray.length) {
    handleNextButton();
    nextButton.style.display = "none";
  } else {
    //Si la question actuelle est la dernière

    startQuiz();
  }
});

const timerElement = document.querySelector(".timerSec");
const timerTxt = document.querySelector(".timeLeftTxt");

// Attribution d'une valeur et d'un texte à notre classe timer
let time = 20;
timerElement.innerHTML = time;

// On crée une fonction qui va diminuer la valeur du timer de 1 tant qu'il n'es pas à zéro.
function decreaseTimer() {
  timerElement.innerHTML = time;
  if (time <= 0) {
    handleNextButton();
    resetTimer();
    // Dès que le temps sera écoulé, la question suivante apparait et le timer se reset
  } else {
    time--;
  }
}
function resetTimer() {
  time = 20; // Réinitialisation de la valeur du timer à sa valeur initiale
}

setInterval(decreaseTimer, 1000);
nextButton.addEventListener("click", resetTimer); // Dès qu'on appuis sur le bouton next, le timer se reset
