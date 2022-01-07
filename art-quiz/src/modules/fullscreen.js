const fullscreen = () => {
  const openfullscreen = document.querySelector('.openfullscreen');
  openfullscreen.addEventListener('click', () => {
    if (document.fullscreenElement) {
      document.exitFullscreen();
    } else {
      document.documentElement.requestFullscreen();
    }
    return false;
  });
};

export default fullscreen;
