const formHandler = (form) => {
  let smallElem = document.querySelector('.overlay-wrapper');
  const small = document.querySelector('.small');
   const inputOne = document.querySelector('.my');
      function validateName(name) {
          let re = /^(?:[a-zA-Z\s]{3,15})|(?:[а-яА-Я\s]{3,15})$/;
          return re.test(name);
      }

   smallElem.addEventListener('click', () => {
     

      if(validateName(form.name.value) ) {
          inputOne.style.border = '';
           small.classList.add("hidden");
          } else {
          inputOne.style.border = '1px solid red';
          small.classList.remove("hidden");
        }
    });
  } ;
 const formElems = document.querySelectorAll('.form');
  formElems.forEach(formHandler);
// emal
const formHand = (form) => {
  let smallElemOne = document.querySelector('.overlay-wrapper');
  const smallTwo = document.querySelector('.small-two');
   const inputTwo = document.querySelector('.email');
      function validateEmail(email) {
          let res = /^([a-zA-Z][a-zA-Z0-9-_]{2,15})*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
          return res.test(email);
      }

   smallElemOne.addEventListener('click', () => {
     

      if(validateEmail(form.email.value) ) {
          inputTwo.style.border = '';
           smallTwo.classList.add("hidden");
          } else {
          inputTwo.style.border = '1px solid red';
          smallTwo.classList.remove("hidden");
        }
    });
  } ;
 const formElem = document.querySelectorAll('.form');
  formElem.forEach(formHand);

const formTel = (form) => {
  let smallElemThree = document.querySelector('.overlay-wrapper');
  const smallThree = document.querySelector('.small-three');
   const inputThree = document.querySelector('.my-tel');
      function validateTel(tel) {
          let resd = /^\d[\d\(\)\ -]{4,10}\d$/;
          return resd.test(tel);
          
      }

   smallElemThree.addEventListener('click', () => {
     

      if(validateTel(form.tel.value) ) {
          inputThree.style.border = '';
           smallThree.classList.add("hidden");
          } else {
          inputThree.style.border = '1px solid red';
          smallThree.classList.remove("hidden");
        }
    });
  } ;
 const formEl = document.querySelectorAll('.form');
  formEl.forEach(formTel);


