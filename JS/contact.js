const form = document.querySelector(".contact-form");
const firstName = document.querySelector("#first-name");

form.onsubmit = function (event) {
  event.preventDefault();

  const firstNameValue = firstName.value;
  alert(`Merci pour ton message ${firstNameValue} !`);
};
