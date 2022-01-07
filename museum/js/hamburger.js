const navActive = document.querySelector(".nav-active"),
  hamburger = document.querySelector(".hamburger");
const welcomeButton = document.querySelector(".welcome-button");
const welcomeTitle = document.querySelector(".welcome-title");
const welcomeText = document.querySelector(".welcome-text");
const menuList = document.querySelector(".nav__icons");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("hamburger-active");
  navActive.classList.toggle("vigorouss");
  welcomeButton.classList.toggle("hidden");
  welcomeTitle.classList.toggle("hidden");
  welcomeText.classList.toggle("hidden");

  menuList.addEventListener("click", (event) => {
    if (event.target.classList.contains("nav__icons-list")) {
      navActive.classList.remove("vigorouss");
      hamburger.classList.remove("hamburger-active");
      welcomeButton.classList.remove("hidden");
      welcomeTitle.classList.remove("hidden");
      welcomeText.classList.remove("hidden");
    }
  });
});
