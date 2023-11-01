document.querySelector(".menu-burger").addEventListener("click", function () {
  const menuDropdown = document.querySelector(".menu-dropdown");
  if (menuDropdown.style.display === "none") {
    menuDropdown.style.display = "block";
  } else {
    menuDropdown.style.display = "none";
  }
});
