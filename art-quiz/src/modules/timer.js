const timer = () => {
  const clock = document.getElementById('userInput');
  const seekHeight = document.querySelector('.seek-controls');

  seekHeight.addEventListener('pointerdown', (evt) => {
    const destination = evt.target;
    if (!destination) return;
    if (destination.classList.contains('seek')) {
      destination.addEventListener('pointermove', () => {
        const meaning = document.getElementById('userInput');
        const textNumber = document.querySelector('.text-number');
        meaning.value = +destination.value;
        textNumber.innerHTML = +destination.value;
      });
    }
  });
  const buttonsSave = document.querySelector('.buttons-save');
  buttonsSave.addEventListener('click', () => {
    console.log('hi');
    const checkVolume = document.querySelector('.check-volume');
    console.log(checkVolume.checked);
    function setLocalStorage() {
      localStorage.setItem('clock', clock.value);
      localStorage.setItem('checkVolume', checkVolume.checked);
    }
    window.addEventListener('beforeunload', setLocalStorage);
  });
  const buttonsDefaults = document.querySelector('.buttons-defaults');
  buttonsDefaults.addEventListener('click', () => {
    console.log('hi');
    const checkVolume = document.querySelector('.check-volume');
    console.log(checkVolume.checked);
    function setLocalStorage() {
      localStorage.removeItem('clock', clock.value);
      localStorage.removeItem('checkVolume', checkVolume.checked);
    }
    window.addEventListener('beforeunload', setLocalStorage);
  });
};

export default timer;
