const playTwo = () => {
  const playBtn = document.querySelectorAll('.play');
  const audio = new Audio();
  function sound() {
    audio.src = './audio/zvuk41.mp3';
    audio.autoplay = true;
  }

  playBtn.forEach((elem) => {
    elem.addEventListener('click', sound);
  });
};

export default playTwo;
