const cart = () => {
  const pagesOne = document.querySelector('.page1');
  const pagesTwo = document.querySelector('.page2');
  const pagesThree = document.querySelector('.page3');
  const pagesFour = document.querySelector('.page4');
  const artistsImg = document.querySelector('.artists-img');
  const picturesImg = document.querySelector('.pictures-img');
  const buttonsHome = document.querySelector('.buttons-home');
  const buttonsSave = document.querySelector('.buttons-save');
  const buttonsDefaults = document.querySelector('.buttons-defaults');
  const homeTwo = document.querySelector('.home-two');
  const buttonsSetting = document.querySelector('.buttons-setting');

  buttonsSetting.addEventListener('click', () => {
    pagesOne.classList.add('hide');
    pagesTwo.classList.remove('hide');
  });
  buttonsSave.addEventListener('click', () => {
    pagesOne.classList.remove('hide');
    pagesTwo.classList.add('hide');
  });
  buttonsDefaults.addEventListener('click', () => {
    pagesOne.classList.remove('hide');
    pagesTwo.classList.add('hide');
  });
  artistsImg.addEventListener('click', () => {
    pagesOne.classList.add('hide');
    pagesThree.classList.remove('hide');
  });
  buttonsHome.addEventListener('click', () => {
    pagesOne.classList.remove('hide');
    pagesThree.classList.add('hide');
  });
  picturesImg.addEventListener('click', () => {
    pagesOne.classList.add('hide');
    pagesFour.classList.remove('hide');
  });
  homeTwo.addEventListener('click', () => {
    pagesOne.classList.remove('hide');
    pagesFour.classList.add('hide');
  });
};

export default cart;
