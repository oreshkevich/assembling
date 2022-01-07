const buttons = document.querySelector(".ripple");

buttons.addEventListener("click", function (e) {
  e.preventDefault();
  const x = e.clientX;
  const y = e.clientY;
  const buttonTop = e.target.getBoundingClientRect().top;
  const buttonLeft = e.target.getBoundingClientRect().left;

  const xInside = x - buttonLeft;
  const yInside = y - buttonTop;

  const circle = document.createElement("span");
  circle.classList.add("circle");
  circle.style.top = yInside + "px";
  circle.style.left = xInside + "px";

  buttons.appendChild(circle);

  setTimeout(() => circle.remove(), 500);
});
