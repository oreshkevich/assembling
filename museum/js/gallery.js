const randomIn = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};
let randomImg = document.querySelectorAll(".random img");

for (let i = 0; i < randomImg.length; i++) {
  randomImg[i].style.order = randomIn(0, 100);
}
