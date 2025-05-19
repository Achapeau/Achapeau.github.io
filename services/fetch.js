const apiUrl = "https://caramblagues-back.onrender.com";

const jokeButton = document.getElementById("get-joke");
const jokeContainer = document.getElementById("joke");
const jokeQuestion = document.getElementById("get-question");
const jokeAnswer = document.getElementById("get-answer");

const swaggerLink = document.getElementById("swagger-link");

jokeButton.addEventListener("click", async () => {
  try {
    jokeQuestion.hidden = true;
    jokeAnswer.hidden = true;
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
    jokeQuestion.hidden = false;
    jokeAnswer.textContent = answer ? answer : "";
    jokeAnswer.hidden = false;
  } catch (error) {
    console.error(error);
    jokeContainer.textContent = "Impossible de récupérer une blague 🫠";
    jokeContainer.hidden = false;
  }
});

swaggerLink.addEventListener("click", () => {
  window.open(`${apiUrl}/api-docs`, "_blank");
});
