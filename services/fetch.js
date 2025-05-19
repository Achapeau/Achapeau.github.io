const apiUrl = "https://caramblagues-back.onrender.com";

const jokeButton = document.getElementById("get-joke");
const jokeContainer = document.getElementById("joke");
const jokeQuestion = document.getElementById("get-question");
const jokeAnswer = document.getElementById("get-answer");
const jokeContent = document.getElementById("joke-content");

const swaggerLink = document.getElementById("swagger-link");

jokeButton.addEventListener("click", async () => {
  try {
    jokeContent.hidden = true;
    jokeContainer.hidden = false;
    jokeContainer.textContent = "Chargement...";
    const response = await fetch(
      `${apiUrl}/blagues/random`
      //   "http://localhost:8080/blagues/random"
    );
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const { question, answer } = await response.json();

    jokeContainer.hidden = true;
    jokeQuestion.textContent = question
      ? question
      : "Aucune blague disponible 😅";
    jokeAnswer.textContent = answer ? answer : "";
    jokeContent.hidden = false;
  } catch (error) {
    console.error(error);
    jokeContainer.textContent = "Impossible de récupérer une blague 🫠";
    jokeContainer.hidden = false;
  }
});

swaggerLink.addEventListener("click", () => {
  window.open(`${apiUrl}/api-docs`, "_blank");
});
