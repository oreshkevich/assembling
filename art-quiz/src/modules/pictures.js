const pictures = () => {
  const cardsRestaurants = document.querySelector('.cards-menu-two');

  const renderItems = (data) => {
    data.forEach((item) => {
      const { image, name, number, products, id } = item;
      const a = document.createElement('a');
      a.setAttribute('href', 'picture.html');

      a.classList.add('card');
      a.classList.add('card-item');
      a.classList.add('play');
      a.dataset.products = products;
      a.innerHTML = `
      <div class="card">
      <div class="figure-wrap">
      <h2 class="figure">${number}</h2>
      <p class="text figure-number-one" id='${id}'>0 / 10</p>
      </div>
      <h3 class="card-text">${name}</h3>
      <img src="${image}" class="card-img-one" alt="${name}">
      <a href="./score.html" class="buttons buttons-star play">SCORE</a>
    </div>
      `;
      a.addEventListener('click', (e) => {
        localStorage.setItem('portrait', JSON.stringify(item));
        window.location.href = 'picture.html';
      });
      cardsRestaurants.append(a);
    });

    const cardImg = document.querySelectorAll('.card-img-one');
    const figureNumberOne = document.querySelectorAll('.figure-number-one');

    function getLocal() {
      const numberOfCards = 10;
      for (let i = 0; i < numberOfCards; i += 1) {
        if (localStorage.getItem(`red-1${i}0`)) {
          document.getElementById(`1${i}0`).innerHTML = `${localStorage.getItem(
            `red-1${i}0`
          )} /  ${numberOfCards}`;
          cardImg[i].classList.add('cardItem');
          figureNumberOne[i].classList.add('figure-block');
        }
      }
    }
    window.addEventListener('load', getLocal);
    getLocal();
  };
  fetch('./db/pictures.json')
    .then((response) => response.json())
    .then((data) => {
      renderItems(data);
    })
    .catch((error) => {
      console.log(error);
    });
};

export default pictures;
