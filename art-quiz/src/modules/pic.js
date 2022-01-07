const pic = () => {
  const cardsMenu = document.querySelector('.page5');
  const body = document.querySelector('.body');
  const portrait = JSON.parse(localStorage.getItem('portrait'));
  const renderElement = (data) => {
    data.forEach(({ author, name, year, imageNum }) => {
      const modalAuth = document.createElement('div');
      const modalDialog = document.createElement('div');
      const modalWrapper = document.createElement('div');
      const popupAnswer = document.createElement('div');
      const popupPicture = document.createElement('div');
      const textPicture = document.createElement('div');
      const buttons = document.createElement('button');

      modalAuth.classList.add('modal-auth');
      modalAuth.classList.add('fade');
      body.append(modalAuth);
      modalDialog.classList.add('modal-dialog');
      modalAuth.append(modalDialog);
      modalWrapper.classList.add('modal-wrapper');
      modalDialog.append(modalWrapper);
      popupAnswer.classList.add('popup-answer');
      modalWrapper.append(popupAnswer);
      popupPicture.classList.add('popup-picture');
      popupPicture.style.backgroundImage = `url("./img/${imageNum}.jpg")`;
      modalWrapper.append(popupPicture);
      textPicture.classList.add('text-picture');
      textPicture.innerHTML = `
      <h2 class="text text-picture-name">${name}</h2>
      <p class="text text-author">${author}</p>
      <p class="text text-year">${year}</p>
      `;

      buttons.classList.add('buttons');
      buttons.classList.add('buttons-next');
      buttons.classList.add('play');
      buttons.innerHTML = 'next';
      modalWrapper.append(textPicture);
      modalWrapper.append(buttons);
    });
    const modalAuth = document.createElement('div');
    modalAuth.classList.add('modal-auth');
    modalAuth.classList.add('fade');
    body.append(modalAuth);
    modalAuth.innerHTML = `
    <div class="modal-dialog">
      <div class="modal-wrapper-answer">
        <h2 class="text text-result">Congratulations !</h2>
        <p class="text text-answer"> 0 / 10</p>
        <div class="popup-good"></div>
        <div class="popup-wrapper">
          <a href="./index.html" class="buttons buttons-home home-two play">HOME</a>
          <a href="./score.html" class="buttons buttons-star play">SCORE</a>
        </div>
      </div>
    </div>
    `;

    data.forEach(({ author, imageNum }) => {
      const slideLeader = document.createElement('div');
      const textAuthor = document.createElement('h3');
      const card = document.createElement('div');
      const randomOne = +imageNum - 10;
      const randomTwo = +imageNum - 20;
      const randomThree = +imageNum - 30;
      const picturePhotoOne = document.createElement('div');
      const picturePhotoTwo = document.createElement('div');
      const picturePhotoThree = document.createElement('div');
      const picturePhotoFour = document.createElement('div');
      const answers = document.createElement('div');
      const answersWrapper = document.createElement('ul');

      slideLeader.classList.add('slide-leader');
      slideLeader.classList.add('fade');
      textAuthor.classList.add('text');
      textAuthor.classList.add('text-photo');
      slideLeader.appendChild(textAuthor);
      textAuthor.innerHTML = `${author}`;
      card.classList.add('pictures-photo');
      card.appendChild(picturePhotoOne);
      picturePhotoOne.classList.add('picture-photo-item');
      picturePhotoOne.style.backgroundImage = `url("./img/${randomOne}.jpg")`;
      card.appendChild(picturePhotoTwo);
      picturePhotoTwo.classList.add('picture-photo-item');
      picturePhotoTwo.style.backgroundImage = `url("./img/${randomTwo}.jpg")`;
      card.appendChild(picturePhotoThree);
      picturePhotoThree.classList.add('picture-photo-item');
      picturePhotoThree.style.backgroundImage = `url("./img/${imageNum}.jpg")`;
      card.appendChild(picturePhotoFour);
      picturePhotoFour.classList.add('picture-photo-item');
      picturePhotoFour.style.backgroundImage = `url("./img/${randomThree}.jpg")`;
      answers.classList.add('answers');
      answersWrapper.classList.add('answers-wrapper');
      answers.append(answersWrapper);
      answersWrapper.innerHTML = `
        <li class="answers-item play play-three"  >A</li>
        <li class="answers-item play  play-two"  >B</li>
        <li class="answers-item play play-one" >C</li>
        <li class="answers-item play  play-four" >D</li>
        `;

      cardsMenu.append(slideLeader);
      slideLeader.append(card);

      slideLeader.append(answers);
    });

    const point = document.createElement('div');
    cardsMenu.appendChild(point);
    point.classList.add('point');
    point.classList.add('point-two');
    for (let i = 0; i < 10; i++) {
      const pointItem = document.createElement('div');
      point.appendChild(pointItem);
      pointItem.classList.add('dot');
      pointItem.classList.add('point-item-desert');
    }
    const slideIndex = 1;
    const slides = document.querySelectorAll('.slide-leader');
    function showSlides(n) {
      slides[slideIndex - 1].classList.add('open');
    }

    showSlides(slideIndex);
    // timer
    const clock = document.getElementById('userInput');
    let checkVolume;
    let checkVolumeOne;
    function getLocalStorage() {
      if (localStorage.getItem('clock')) {
        clock.value = localStorage.getItem('clock');
      }
      if (localStorage.getItem('checkVolume')) {
        checkVolume = localStorage.getItem('checkVolume');
      }
      if (localStorage.getItem('checkVolumeOne')) {
        checkVolumeOne = localStorage.getItem('checkVolumeOne');
      }
    }
    window.addEventListener('load', getLocalStorage);
    getLocalStorage();
    let myVar;
    let countDownSeconds;

    function start() {
      countDownSeconds -= 1;
      document.getElementById('timerr').innerHTML = countDownSeconds;
      if (countDownSeconds === -1) {
        stop();

        document.getElementById('timerr').innerHTML = '0';

        const modalAuthOne = document.querySelector('.modal-auth-one');
        modalAuthOne.classList.add('is-open-one');
        if (checkVolumeOne === 'true') {
          const audio = new Audio();
          audio.src = './audio/loss.mp3';
          audio.autoplay = true;
        }
      }
    }
    function startTime() {
      myVar = setInterval(start, 1000);
      document.getElementById('timerr').innerHTML = clock.value;
      countDownSeconds = clock.value;
    }
    if (checkVolumeOne === 'true') {
      const audio = new Audio();
      audio.src = './audio/loss.mp3';
      audio.src = 'https://7oom.ru/audio/naturesounds/07%20Birds%20(7oom.ru).mp3';
      audio.autoplay = true;
    }
    function stop() {
      clearInterval(myVar);
    }

    const timerWrapper = document.querySelector('.duration-timer');
    if (checkVolume === 'true') {
      timerWrapper.style.display = 'block';
      startTime();
    } else {
      timerWrapper.style.display = 'none';
    }
    const buttonsRepeat = document.querySelector('.buttons-repeat');
    const modalAuthOne = document.querySelector('.modal-auth-one');
    buttonsRepeat.addEventListener('click', () => {
      modalAuthOne.classList.remove('is-open-one');
      startTime();
    });
    // timer

    class Animate {
      constructor(
        questions,
        questionsTwo,
        questionsThree,
        questionsFour,
        popupAnswer,
        responses,
        buttonsNext,
        textAnswer,
        slid,
        playBtn,
        popupPicture,
        dot
      ) {
        this.questions = questions;
        this.questionsTwo = questionsTwo;
        this.questionsThree = questionsThree;
        this.questionsFour = questionsFour;
        this.popupAnswer = popupAnswer;
        this.buttonsNext = buttonsNext;
        this.slid = slid;
        this.dot = dot;
        this.responses = responses;
        this.textAnswer = textAnswer;
        this.playBtn = playBtn;
        this.popupPicture = popupPicture;
        this.play();
        this.click();
        this.clickThree();
        this.clickTwo();
        this.clickOne();
        this.clickFour();
      }

      play() {
        this.playBtn.forEach((el, i) =>
          el.addEventListener('click', () => {
            if (checkVolumeOne === 'true') {
              const audio = new Audio();
              audio.src = './audio/zvuk41.mp3';
              audio.autoplay = true;
            }
          })
        );
      }

      click() {
        const listImg = [];
        this.questions.forEach((el, i) =>
          el.addEventListener('click', () => {
            if (checkVolume === 'true') {
              stop();
            }
            this.responses[i].classList.add('is-open');
            this.popupAnswer[i].style.backgroundImage = `url("./img/svg/frame.svg")`;

            const img = this.popupPicture[i];
            const style = img.currentStyle || window.getComputedStyle(img, false);
            const url = style.backgroundImage.slice(4, -1).replace(/"/g, '');
            const last = url.split('/').pop();

            function list() {
              listImg.push(last);
            }

            list(last);

            function setLocalStorage() {
              for (let i = 0; i < 10; i++) {
                if (String(data[0].imageNum) === `1${i}0`) {
                  localStorage.setItem(`url-1${i}`, listImg);
                }
              }
            }
            window.addEventListener('beforeunload', setLocalStorage);

            this.dot[i].classList.add('dot-active');
            if (checkVolumeOne === 'true') {
              const audio = new Audio();
              audio.src = './audio/winning.mp3';
              audio.autoplay = true;
            }
          })
        );
      }

      clickTwo() {
        this.questionsTwo.forEach((el, i) =>
          el.addEventListener('click', () => {
            if (checkVolume === 'true') {
              stop();
            }
            this.responses[i].classList.add('is-open');
            this.popupAnswer[i].style.backgroundImage = `url("./img/svg/wrong-answer.svg")`;
            this.dot[i].classList.add('point-item-red');
            if (checkVolumeOne === 'true') {
              const audio = new Audio();
              audio.src = './audio/loss.mp3';
              audio.autoplay = true;
            }
          })
        );
      }

      clickThree() {
        this.questionsThree.forEach((el, i) =>
          el.addEventListener('click', () => {
            if (checkVolume === 'true') {
              stop();
            }
            this.responses[i].classList.add('is-open');
            this.popupAnswer[i].style.backgroundImage = `url("./img/svg/wrong-answer.svg")`;
            this.dot[i].classList.add('point-item-red');
            if (checkVolumeOne === 'true') {
              const audio = new Audio();
              audio.src = './audio/loss.mp3';
              audio.autoplay = true;
            }
          })
        );
      }

      clickFour() {
        this.questionsFour.forEach((el, i) =>
          el.addEventListener('click', () => {
            if (checkVolume === 'true') {
              stop();
            }
            this.responses[i].classList.add('is-open');
            this.popupAnswer[i].style.backgroundImage = `url("./img/svg/wrong-answer.svg")`;
            this.dot[i].classList.add('point-item-red');
            if (checkVolumeOne === 'true') {
              const audio = new Audio();
              audio.src = './audio/loss.mp3';
              audio.autoplay = true;
            }
          })
        );
      }

      clickOne() {
        this.buttonsNext.forEach((el, i) =>
          el.addEventListener('click', () => {
            if (i <= 8) {
              if (checkVolume === 'true') {
                stop();
                startTime();
              }
              this.responses[i].classList.remove('is-open');
              this.slid[i].classList.remove('open');
              this.slid[i + 1].classList.add('open');
              // this.dot[i].classList.add('dot-active');
            } else {
              if (checkVolume === 'true') {
                stop();
              }
              this.responses[10].classList.add('is-open');
              if (checkVolumeOne === 'true') {
                const audio = new Audio();
                audio.src = './audio/v.mp3';
                audio.autoplay = true;
              }
            }
            const red = document.querySelectorAll('.dot-active');
            this.textAnswer.innerHTML = `${red.length} / 10`;

            function setLocalStorage() {
              for (let i = 0; i < 10; i++) {
                if (String(data[0].imageNum) === `1${i}0`) {
                  localStorage.setItem(`red-1${i}0`, red.length);
                }
              }
            }
            window.addEventListener('beforeunload', setLocalStorage);
          })
        );
      }
    }

    const questions = document.querySelectorAll('.play-one');
    const playBtn = document.querySelectorAll('.play');
    const popupAnswer = document.querySelectorAll('.popup-answer');
    const popupPicture = document.querySelectorAll('.popup-picture');
    const questionsTwo = document.querySelectorAll('.play-two');
    const questionsThree = document.querySelectorAll('.play-three');
    const questionsFour = document.querySelectorAll('.play-four');
    const responses = document.querySelectorAll('.modal-auth');
    const buttonsNext = document.querySelectorAll('.buttons-next');
    const slid = document.querySelectorAll('.slide-leader');
    const dot = document.querySelectorAll('.dot');
    const textAnswer = document.querySelector('.text-answer');
    const animate = new Animate(
      questions,
      questionsTwo,
      questionsThree,
      questionsFour,
      popupAnswer,
      responses,
      buttonsNext,
      textAnswer,
      slid,
      playBtn,
      popupPicture,
      dot
    );
  };

  fetch(`./db/${portrait.products}`)
    .then((response) => response.json())
    .then((data) => {
      // renderItems(data);
      renderElement(data);
    })
    .catch((error) => {
      console.log(error);
    });
};

export default pic;
