const play = () => {
  const playBtn = document.querySelectorAll('.play');
  const checkVolumeOne = document.querySelector('.check-volume-one');
  const volume = document.getElementById('volume');
  const muteButton = document.getElementById('mute-button');
  const audio = new Audio();
  console.log(checkVolumeOne.checked);
  function check() {
    if (checkVolumeOne.checked) {
      muteButton.style.opacity = 1;
    } else {
      muteButton.style.opacity = 0.4;
    }
  }

  checkVolumeOne.addEventListener('click', check);
  function sound() {
    audio.src = './audio/zvuk41.mp3';
    audio.autoplay = true;
    if (checkVolumeOne.checked) {
      audio.autoplay = true;
    } else {
      audio.autoplay = false;
    }
  }

  playBtn.forEach((elem) => {
    elem.addEventListener('click', sound);
  });

  function updateVolume() {
    if (audio.muted) {
      audio.muted = false;
    }
    audio.volume = volume.value;
  }
  volume.addEventListener('input', updateVolume);
  console.log(volume);

  function updateVolumeIcon() {
    if (audio.muted || audio.volume === 0) {
      muteButton.style.opacity = 0.4;
    } else {
      muteButton.style.opacity = 1;
    }
  }
  audio.addEventListener('volumechange', updateVolumeIcon);

  const buttonsSave = document.querySelector('.buttons-save');
  buttonsSave.addEventListener('click', () => {
    console.log('hi');
    // const checkVolumeOne = document.querySelector('.check-volume-one');
    console.log(checkVolumeOne.checked);
    function setLocalStorage() {
      localStorage.setItem('checkVolumeOne', checkVolumeOne.checked);
    }
    window.addEventListener('beforeunload', setLocalStorage);
  });
  const buttonsDefaults = document.querySelector('.buttons-defaults');
  buttonsDefaults.addEventListener('click', () => {
    console.log('hi');
    // const checkVolumeOne = document.querySelector('.check-volume-one');
    console.log(checkVolumeOne.checked);
    function setLocalStorage() {
      localStorage.removeItem('checkVolumeOne', checkVolumeOne.checked);
    }
    window.addEventListener('beforeunload', setLocalStorage);
  });

  const audioMusic = new Audio();
  const playBtnMusic = document.querySelector('.play-music');
  console.log(playBtnMusic);
  audioMusic.src = 'https://7oom.ru/audio/naturesounds/07%20Birds%20(7oom.ru).mp3';

  // audioMusic.src = './audio/ennio.mp3';
  function playAudio() {
    if (checkVolumeOne.checked) {
      if (audioMusic.paused || audioMusic.ended) {
        audioMusic.play();
      } else {
        audioMusic.pause();
      }
    } else {
      audioMusic.pause();
    }
  }
  playBtnMusic.addEventListener('click', playAudio);

  function toggleBtn() {
    if (checkVolumeOne.checked) {
      playBtnMusic.classList.toggle('pause');
    }
  }
  playBtnMusic.addEventListener('click', toggleBtn);
  function updateVolumeMusic() {
    if (audioMusic.muted) {
      audioMusic.muted = false;
    }
    audioMusic.volume = volume.value;
  }
  volume.addEventListener('input', updateVolumeMusic);
  checkVolumeOne.addEventListener('click', () => {
    audioMusic.pause();
    playBtnMusic.classList.remove('pause');
  });
};

export default play;
