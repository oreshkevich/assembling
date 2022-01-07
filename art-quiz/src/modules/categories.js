const cart = () => {
  const cardsRestaurants = document.querySelector('.cards-menu');
  const renderItems = (data) => {
    data.forEach((item) => {
      const { image, name, number, products } = item;
      const a = document.createElement('a');
      a.setAttribute('href', 'portrait.html');

      a.classList.add('card');
      a.classList.add('card-item');
      a.classList.add('play');
      a.dataset.products = products;
      a.innerHTML = `
      <div class="card">
      <div class="figure-wrap">
      <h2 class="figure">${number}</h2>
      <p class="text figure-number" id='${number}'>0 / 10</p>
      </div>
      <h3 class="card-text">${name}</h3>
      <img src="${image}" class="card-img" alt="${name}">
      <a href="./score.html" class="buttons buttons-star play">SCORE</a>
    </div>
      `;
      a.addEventListener('click', (e) => {
        localStorage.setItem('portrait', JSON.stringify(item));
        window.location.href = 'portrait.html';
      });
      cardsRestaurants.append(a);
    });
    const cardImg = document.querySelectorAll('.card-img');
    const figureNumber = document.querySelectorAll('.figure-number');

    function getLocal() {
      const numberOfCards = 10;
      for (let i = 0; i < numberOfCards; i += 1) {
        if (localStorage.getItem(`red-${i}0`)) {
          document.getElementById(`${i + 1}`).innerHTML = `${localStorage.getItem(
            `red-${i}0`
          )} / ${numberOfCards}`;
          cardImg[i].classList.add('cardItem');
          figureNumber[i].classList.add('figure-block');
        }
      }
    }
    window.addEventListener('load', getLocal);
    getLocal();
  };

  fetch('./db/img.json')
    .then((response) => response.json())
    .then((data) => {
      renderItems(data);
    })
    .catch((error) => {
      console.log(error);
    });
};

export default cart;
