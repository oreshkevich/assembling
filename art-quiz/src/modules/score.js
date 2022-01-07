const score = () => {
  const cardsRestaurants = document.querySelector('.cards-menu-score');
  const renderItems = (data) => {
    data.forEach((item) => {
      const { year, name, author, imageNum, surname } = item;
      const a = document.createElement('div');

      a.classList.add('card');
      a.classList.add('card-item');
      a.classList.add('play');
      a.innerHTML = `
      <div class="card">
      <div class="figure-wrap">
      <h3 class="card-text">${surname}</h3>
      <div class="img-figure-number"></div>
      </div>
     
      <div class ="item-picture item-picture-score">
      <img src="./img/${imageNum}.jpg" class="card-img" alt="${name}">
      <div class="info ">
      <div class="text-info">${name}</div>
      <div class="text-info">${author}</div>
      <div class="text-info">${year}</div>
    </div>
      </div>
    
    </div>
      `;

      cardsRestaurants.append(a);
    });
    const cardImg = document.querySelectorAll('.card-img');
    const infoOne = document.querySelectorAll('.info');
    const imgFigureNumber = document.querySelectorAll('.img-figure-number');

    function getLocal() {
      for (let i = 0; i <= 20; i++) {
        if (localStorage.getItem(`url-${i}`)) {
          const str = localStorage.getItem(`url-${i}`);
          const arr = str.split(',');
          arr.forEach((el) => {
            for (let i = 0; i < 10; i++) {
              if (el === cardImg[i].src.split('/').pop()) {
                cardImg[i].classList.add('cardItem');
                infoOne[i].classList.add('info-one');
                imgFigureNumber[i].classList.add('img-figure-win');
              }
            }
          });
        }
      }
    }
    window.addEventListener('load', getLocal);
    getLocal();
    let checkVolumeOne;
    function getLocalStorage() {
      if (localStorage.getItem('checkVolumeOne')) {
        checkVolumeOne = localStorage.getItem('checkVolumeOne');
      }
    }
    window.addEventListener('load', getLocalStorage);
    getLocalStorage();
    class Score {
      constructor(questions, info) {
        this.questions = questions;
        this.info = info;

        this.click();
      }

      click() {
        this.questions.forEach((el, i) =>
          el.addEventListener('click', () => {
            console.log(el);
            console.log(i);
            this.info[i].classList.toggle('info-show');
            if (checkVolumeOne === 'true') {
              const audio = new Audio();
              audio.src = './audio/zvuk41.mp3';
              audio.autoplay = true;
            }
          })
        );
      }
    }
    const questions = document.querySelectorAll('.card-item');
    const info = document.querySelectorAll('.info');

    const score = new Score(questions, info);

    if (checkVolumeOne === 'true') {
      const audio = new Audio();
      audio.src = './audio/loss.mp3';
      audio.src = 'https://7oom.ru/audio/naturesounds/07%20Birds%20(7oom.ru).mp3';
      audio.autoplay = true;
    }
  };

  const portrait = JSON.parse(localStorage.getItem('portrait'));
  console.log(portrait.products);
  fetch(`./db/${portrait.products}`)
    .then((response) => response.json())
    .then((data) => {
      renderItems(data);
      // renderElement(data);
    })
    .catch((error) => {
      console.log(error);
    });
};

export default score;
