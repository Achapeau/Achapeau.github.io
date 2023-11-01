// Déclaration des constantes DOM pour appeler les boutons HTML des id de thèmes
// Bouton thème Cinéma
const cinemaTheme = document.getElementById("btn-cinema");
// Bouton thème Culture
const cultureTheme = document.getElementById("btn-culture");
// Bouton thème Sport
const sportTheme = document.getElementById("btn-sport");
// Bouton thème Darwin
const darwinTheme = document.getElementById("btn-awards");

// Lors d'un clic sur le bouton, appel DOM de la fonction cinemaAssign
cinemaTheme.addEventListener("click", cinemaAssign);

// Déclaration de la fonction cinemaAssign, qui enregistre le thème choisi dans la clé chosenTheme
// Et envoie l'utilisateur vers la page Quizz thème cinéma
function cinemaAssign() {
  localStorage.setItem("chosenTheme", "cinema");
  document.location.href = "../quizz.html";
}

// Lors d'un clic sur le bouton, appel DOM de la fonction cultureAssign
cultureTheme.addEventListener("click", cultureAssign);

// Déclaration de la fonction cultureAssign, qui enregistre le thème choisi dans la clé chosenTheme
// Et envoie l'utilisateur vers la page Quizz thème culture
function cultureAssign() {
  localStorage.setItem("chosenTheme", "cultureG");
  document.location.href = "../quizz.html";
}

// Lors d'un clic sur le bouton, appel DOM de la fonction sportAssign
sportTheme.addEventListener("click", sportAssign);

// Déclaration de la fonction sportAssign, qui enregistre le thème choisi dans la clé chosenTheme
// Et envoie l'utilisateur vers la page Quizz thème sport
function sportAssign() {
  localStorage.setItem("chosenTheme", "sport");
  document.location.href = "../quizz.html";
}

// Lors d'un clic sur le bouton, appel DOM de la fonction darwinAssign
darwinTheme.addEventListener("click", darwinAssign);

// Déclaration de la fonction darwinAssign, qui enregistre le thème choisi dans la clé chosenTheme
// Et envoie l'utilisateur vers la page Quizz thème cinéma
function darwinAssign() {
  localStorage.setItem("chosenTheme", "darwin");
  document.location.href = "../quizz.html";
}
