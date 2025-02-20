document.addEventListener("DOMContentLoaded", () => {
  // Select the hamburger button and the navigation menu
  const hamburgerButton = document.querySelector(".hamburger");
  const navMenu = document.querySelector(".nav");

  // Toggle the "open" class on the navigation menu when the hamburger is clicked
  hamburgerButton.addEventListener("click", () => {
    navMenu.classList.toggle("open");
  });
});
