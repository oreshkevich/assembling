// modal
const modal = document.querySelector(".overlay");
const modalBtn = document.querySelector(".submit");
const modalClose = document.querySelector(".modal__close");

modalBtn.addEventListener("click", () => {
  modal.style = "transform: translateX(0)";
});

modal.addEventListener("click", (event) => {
  const target = event.target;
  if (
    target.classList.contains("overlay") ||
    target.classList.contains("modal__close")
  ) {
    modal.style = "transform: translateX(-100vw)";
  }
});

const swiper = new Swiper(".swiper", {
  // Optional parameters

  loop: true,
  slidesPerView: 3,
  spaceBetween: 30,

  // If we need pagination
  pagination: {
    el: ".video-slider-dots",
    clickable: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: ".video__slider-next",
    prevEl: ".video__slider-prev",
  },
});

// animation



const enthusiasmImg = document.querySelectorAll("._anim-items");
if (enthusiasmImg.length > 0) {
  window.addEventListener("scroll", animOnScroll);

  function animOnScroll() {
    for (let index = 0; index < enthusiasmImg.length; index++) {
      const animItem = enthusiasmImg[index];
      const animItemHeight = animItem.offsetHeight;
      const animItemOffset = offset(animItem).top;
      const animStart = 4;
      let animItemPoint = window.innerHeight - animItemHeight / animStart;

      if (animItemHeight > window.innerHeight) {
        animItemPoint = window.innerHeight - window.innerHeight / 4;
      }

      if (
        pageYOffset > animItemOffset - animItemPoint &&
        pageYOffset < animItemOffset + animItemHeight
      ) {
        animItem.classList.add("_active");
      } else {
        if (!animItem.classList.contains("_anim-no-hide")) {
          animItem.classList.remove("_active");
        }
      }
    }
  }
  function offset(el) {
    const rect = el.getBoundingClientRect(),
      scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
      scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    return { top: rect.top + scrollTop, left: rect.left + scrollLeft };
  }

  setTimeout(function () {
    animOnScroll();
  }, 300);
}
const lineNum = document.querySelector(".basic-one");
const timeDay = document.querySelector(".banner-icons-five");
timeDay.min = new Date().toISOString().split("T")[0];

timeDay.addEventListener("input", (e) => {
  const beginningDay = new Date(e.target.value);
  const d = `${new Intl.DateTimeFormat("en-US", {
    weekday: "long",
  }).format(beginningDay)}, ${new Intl.DateTimeFormat("en-US", {
    month: "long",
  }).format(beginningDay)} ${beginningDay.getDate()}`;

  lineNum.innerHTML = d;
});

const basicTwo = document.querySelector(".basic-two");
const bannerIconsSix = document.querySelector(".banner-icons-six");

bannerIconsSix.addEventListener("input", (e) => {
  basicTwo.innerHTML = e.target.value.split(":").join(" : ");
});



// ticket
const ticketsCard = document.querySelector(".tickets__card");
const typeRadio = document.querySelectorAll('[type="radio"]');
const inputBasic = document.querySelector(".input-basic");
const inputSenior = document.querySelector(".input-senior");
const twenty = document.querySelector(".twenty");
const twentyPopup = document.querySelector(".twenty-popup");
const cost = {
  great: {
    basic: 20,
    senior: 10,
  },
  wonderful: {
    basic: 25,
    senior: 12.5,
  },
  beautiful: {
    basic: 40,
    senior: 20,
  },
};

const choose = Array.from(typeRadio).filter((type) => type.checked)[0].id;
twenty.textContent =
  inputBasic.value * cost[choose].basic +
  inputSenior.value * cost[choose].senior;
twentyPopup.textContent =
  inputBasic.value * cost[choose].basic +
  inputSenior.value * cost[choose].senior;

ticketsCard.addEventListener("click", (event) => {
  let target = event.target;

  if (target.closest(".minus")) {
    if (target.closest(".wrapper-basic")) {
      inputBasic.value > 0 ? inputBasic.value-- : 0;
    } else {
      inputSenior.value > 0 ? inputSenior.value-- : 0;
    }
  }
  if (target.closest(".plus")) {
    target.closest(".wrapper-basic") ? inputBasic.value++ : inputSenior.value++;
  }

  const choose = Array.from(typeRadio).filter((type) => type.checked)[0].id;
  twenty.textContent =
    inputBasic.value * cost[choose].basic +
    inputSenior.value * cost[choose].senior;

  const basicCount = document.querySelector(".basic-count");
  basicCount.innerHTML = inputBasic.value;
  const counterInputBasic = document.querySelector(".counter-input-basic");
  counterInputBasic.value = inputBasic.value;

  const seniorCount = document.querySelector(".senior-count");
  seniorCount.innerHTML = inputSenior.value;
  const counterInputSenior = document.querySelector(".counter-input-senior");
  counterInputSenior.value = inputSenior.value;

  const totalBasic = document.querySelector(".total-basic");
  totalBasic.innerHTML = inputBasic.value * cost[choose].basic;
  const totalSenior = document.querySelector(".total-senior");
  totalSenior.innerHTML = inputSenior.value * cost[choose].senior;

  const basicPrice = document.querySelectorAll(".basic-price");
  basicPrice.forEach(function (elem) {
    elem.innerHTML = cost[choose].basic;
  });

  const seniorPrice = document.querySelectorAll(".senior-price");
  seniorPrice.forEach(function (elem) {
    elem.innerHTML = cost[choose].senior;
  });

  const basicThree = document.querySelector(".basic-three");

  if (cost[choose].basic == 20) {
    basicThree.innerHTML = "Permanent exhibition";
  } else if (cost[choose].basic == 25) {
    basicThree.innerHTML = "Temporary exhibition";
  } else {
    basicThree.innerHTML = "Combined Admission";
  }
  twentyPopup.textContent =
    inputBasic.value * cost[choose].basic +
    inputSenior.value * cost[choose].senior;


    const basicThreeOne = document.querySelector(".basic-three");
const bannerIconsFour = document.querySelector(".banner-icons-four");

bannerIconsFour.addEventListener("input", (e) => {
  basicThreeOne.innerHTML = e.target.value;
  if (e.target.value == 'Combined Admission') {
 cost[choose].basic = 40;
   
  }
});
});


const select = document.querySelector('select');
select.addEventListener('change', function() {
  if (this.value == 'Permanent exhibition') {
    twentyPopup.textContent =
    inputBasic.value * 20 + inputSenior.value * 10;
    
      const basicPriceTwo = document.querySelectorAll(".basic-price");
        basicPriceTwo.forEach(function (elem) {
        elem.innerHTML = 20;
    });
      const seniorPriceTwo = document.querySelectorAll(".senior-price");
        seniorPriceTwo.forEach(function (elem) {
          elem.innerHTML = 10;
      });
          const totalBasicTwo = document.querySelector(".total-basic");
        totalBasicTwo.innerHTML = inputBasic.value * 20;
        const totalSeniorTwo = document.querySelector(".total-senior");
        totalSeniorTwo.innerHTML = inputSenior.value * 10;
    
  } else if (this.value == 'Temporary exhibition') {
    twentyPopup.textContent =
    inputBasic.value * 25 + inputSenior.value * 12.5;
    
      const basicPriceTwo = document.querySelectorAll(".basic-price");
        basicPriceTwo.forEach(function (elem) {
        elem.innerHTML = 25;
    });
      const seniorPriceTwo = document.querySelectorAll(".senior-price");
        seniorPriceTwo.forEach(function (elem) {
          elem.innerHTML = 12.5;
      });
          const totalBasicTwo = document.querySelector(".total-basic");
        totalBasicTwo.innerHTML = inputBasic.value * 25;
        const totalSeniorTwo = document.querySelector(".total-senior");
        totalSeniorTwo.innerHTML = inputSenior.value * 12.5;
  } else if (this.value == 'Combined Admission') {
    twentyPopup.textContent =
    inputBasic.value * 40 + inputSenior.value * 20;
    
      const basicPriceTwo = document.querySelectorAll(".basic-price");
        basicPriceTwo.forEach(function (elem) {
        elem.innerHTML = 40;
    });
      const seniorPriceTwo = document.querySelectorAll(".senior-price");
        seniorPriceTwo.forEach(function (elem) {
          elem.innerHTML = 20;
      });
          const totalBasicTwo = document.querySelector(".total-basic");
        totalBasicTwo.innerHTML = inputBasic.value * 40;
        const totalSeniorTwo = document.querySelector(".total-senior");
        totalSeniorTwo.innerHTML = inputSenior.value * 20;
  } 
 
})




console.log(`
Ваша оценка - 140 баллов 
Отзыв по пунктам ТЗ:
Не выполненные/не засчитанные пункты:
1 есть возможность перелистывания слайдов влево и вправо свайпами (движениями) мышки 

2 если внутри слайда проигрывается видео с YouTube, клик по стрелке перелистывания слайдов или клик по буллету останавливает проигрывание видео 

3 если основное видео проигрывалось при перелистывании слайдера, проигрывание видео останавливается, прогресс бар сдвигается к началу, иконки "Play" на панели управления и по центру видео меняются на первоначальные 

4 Клавиши SHIFT+, (англ) — ускорение воспроизведения ролика 

5 Клавиши SHIFT+. (англ) — замедление воспроизведения ролика 

6 можно изменить количество билетов каждого типа в поле слева при этом меняется количество билетов и общая стоимость билетов справа 

Частично выполненные пункты:
1 если видео с YouTube проигрывается, клик по кнопке Pause останавливает его проигрывание. Также проигрывание видео останавливается, если кликнуть по другому слайду или кнопке Play в центре другого слайда. В указанной ситуации другое видео должно запуститься, а текущее остановиться. Невозможно проигрывание нескольких YouTube видео одновременно 

2 Любой собственный дополнительный функционал, улучшающий качество проекта. Например, ночная тема, плавная смена изображений в блоке Tickets, всплывающее окно с информацией про картины и их авторов, кнопка прокрутки страницы вверх, возможность проголосовать за понравившиеся картины с сохранением данных в local storage, всё зависит от вашей фантазии и чувства вкуса. Для удобства проверки выполненный вами дополнительный функционал включите в самооценку, которую выведите в консоль браузера 

Выполненные пункты:
1 есть возможность перелистывания слайдов влево и вправо кликами по стрелкам 

2 есть возможность перелистывания слайдов кликами по буллетам (квадратики внизу слайдера) 

3 слайды перелистываются плавно с анимацией смещения вправо или влево 

4 перелистывание слайдов бесконечное (зацикленное) 

5 при перелистывании слайдов буллет активного слайда подсвечивается (выделяется стилем) 

6 при перелистывании слайдов кликами или свайпами меняется номер активного слайда 

7 даже при частых кликах или свайпах нет ситуации, когда слайд после перелистывания находится не по центру, нет ситуации, когда видны одновременно два слайда 

8 при клике по самому слайду или кнопке Play в центре слайда, внутри слайда проигрывается видео с YouTube. Никакие изменения с основным видео при этом не происходят 

9 есть возможность перелистывания слайдов с видео влево и вправо кликами по стрелкам. Слайды перелистываются по одному, при этом также меняется основное видео 

10 есть возможность перелистывания слайдов кликами по буллетам (кружочки внизу слайдера), при этом также меняется основное видео 

11 слайды перелистываются плавно с анимацией смещения вправо или влево (для смены основного видео анимация смещения не требуется и не проверяется) 

12 перелистывание слайдов бесконечное (зацикленное) 

13 при перелистывании слайдов буллет активного слайда подсвечивается (выделяется стилем) 

14 даже при частых кликах по стрелкам нет ситуации, когда слайд после перелистывания находится не по центру, нет ситуации, когда видны одновременно два слайда 

15 при клике по кнопке "Play" слева внизу на панели видео начинается проигрывание видео, иконка кнопки при этом меняется на "Pause", большая кнопка "Play" по центру видео исчезает. Повторный клик на кнопку останавливает проигрывание видео, иконка меняется на первоначальную, большая кнопка "Play" по центру видео снова отображается 

16 при клике по большой кнопке "Play" по центру видео, или при клике по самому видео, начинается проигрывание видео, иконка кнопки "Play" слева внизу на панели видео меняется на "Pause", большая кнопка "Play" по центру видео исчезает. Клик на видео, которое проигрывается, останавливает проигрывание видео, иконка кнопки "Play" слева внизу на панели видео меняется на первоначальную, большая кнопка "Play" по центру видео снова отображается 

17 прогресс-бар отображает прогресс проигрывания видео 

18 перетягивание ползунка прогресс-бара позволяет изменить время с которого проигрывается видео 

19 если прогресс-бар перетянуть до конца, видео останавливается, соответственно, меняется внешний вид кнопок "Play" 

20 при клике на иконку динамика происходит toggle звука и самой иконки (звук включается или выключается, соответственно изменяется иконка) 

21 при перемещении ползунка громкости звука изменяется громкость видео 

22 если ползунок громкости звука перетянуть до 0, звук выключается, иконка динамика становится зачеркнутой 

23 если при выключенном динамике перетянуть ползунок громкости звука от 0, звук включается, иконка громкости перестаёт быть зачёркнутой 

24 при нажатии на кнопку fullscreen видео переходит в полноэкранный режим, при этом видео и панель управления разворачиваются во весь экран. При нажатии на кнопку fullscreen повторно видео выходит из полноэкранного режима. Нажатие на клавишу для выхода из полноэкранного режима Esc не проверяем и не оцениваем 

25 панель управления в полноэкранном режиме визуально выглядит так же, как на макете - кнопки равномерно распределены по всей ширине страницы, относительные размеры между кнопками и ползунками, а также относительные размеры самих кнопок остались прежними 

26 клавиша Пробел — пауза, при повторном нажатии - play 

27 Клавиша M (англ) — отключение/включение звука 

28 Клавиша F — включение/выключение полноэкранного режима 

29 ползунок можно перетягивать мышкой по горизонтали 

30 ползунок никогда не выходит за границы картины 

31 при перемещении ползунка справа налево плавно появляется нижняя картина 

32 при перемещении ползунка слева направо плавно появляется верхняя картина 

33 при обновлении страницы ползунок возвращается в исходное положение 

34 при прокрутке страницы вниз появление картин секции Galery сопровождается анимацией: изображения плавно поднимаются снизу вверх, увеличиваясь и создавая эффект выплывания. В качестве образца анимации используйте анимацию на сайте Лувра https://www.louvre.fr/ 

35 если прокрутить страницу вверх и затем снова прокручивать вниз, анимация появления картин повторяется 

36 при обновлении страницы, если она к тому моменту была прокручена до секции Galery, анимация картин повторяется 

37 при изменении количества билетов Basic и Senior пересчитывается общая цена за них 

38 у каждого типа билетов своя цена (20 €, 25 €, 40 € для Basic и половина этой стоимости для Senior). При изменении типа билета пересчитывается общая цена за них 

39 при обновлении страницы сохраняется выбранное ранее количество билетов Basic и Senior, выбранный тип билета, общая цена за них 

40 когда при клике по кнопке Buy now открывается форма, она уже содержит данные, указанные на странице сайта - количество билетов, их тип, общая цена за них 

41 когда пользователь выбирает дату в форме слева, она отображается в билете справа 

42 нельзя выбрать дату в прошлом 

43 когда пользователь выбирает время в форме слева, оно отображается в билете справа 

44 время можно выбирать с 9:00 до 18:00 с интервалом в 30 минут 

45 можно изменить тип билета в поле Ticket type слева при этом меняется тип билета, цена билета и общая стоимость билетов справа 

46 валидация имени пользователя. Имя пользователя должно содержать от 3 до 15 символов, в качестве символов могут быть использованы буквы английского или русского алфавита в нижнем или верхнем регистре и пробелы 

47 валидация e-mail должна пропукать только адреса вида username@example.com, где: username - имя пользователя, должно содержать от 3 до 15 символов (буквы, цифры, знак подчёркивания, дефис), не должно содержать пробелов; @ - символ собачки; example - домен первого уровня состоит минимум из 4 латинских букв; com - домен верхнего уровня, отделяется от домена первого уровня точкой и состоит минимум из 2 латинских букв 

48 валидация номера телефона: номер содержит только цифры; без разделения или с разделением на две или три цифры; разделение цифр может быть через дефис или пробел; с ограничением по количеству цифр не больше 10 цифр 

49 при попытке ввода в форму невалидного значения выводится предупреждение, например, "номер телефона может содержать только цифры" 

50 в секции Contacts добавлена интерактивная карта 

51 на карте отображаются маркеры, расположение и внешний вид маркеров соответствует макету 

52 стиль карты соответствует макету 



`);



