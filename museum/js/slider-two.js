// Slider1

let slideIndex = 1,
  slides = document.querySelectorAll("#slider .video"),
  prev = document.querySelector(".video__slider-prev"),
  next = document.querySelector(".video__slider-next"),
  dotsWrap = document.querySelector(".video-slider-dots"),
  dots = document.querySelectorAll(".video-dot");

showSlides(slideIndex);

function showSlides(n) {
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }

  slides.forEach((item) => (item.style.display = "none"));
  //   for (let i = 0; i < slides.length; i++) {
  //     slides[i].style.display = 'none';
  // }
  dots.forEach((item) => item.classList.remove("video-dot-active"));

  slides[slideIndex - 1].style.display = "block";

  dots[slideIndex - 1].classList.add("video-dot-active");
}

function plusSlides(n) {
  showSlides((slideIndex += n));
}

function currentSlide(n) {
  showSlides((slideIndex = n));
}

prev.addEventListener("click", function () {
  plusSlides(-1);
});

next.addEventListener("click", function () {
  plusSlides(1);
});

dotsWrap.addEventListener("click", function (event) {
  for (let i = 0; i < dots.length + 1; i++) {
    if (event.target.classList.contains("dot") && event.target == dots[i - 1]) {
      currentSlide(i);
    }
  }
});
