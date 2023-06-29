var swiper = new Swiper('.swiper-container', {
  slidesPerView: 3,
  spaceBetween: 30,
  centeredSlides: false,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints: {
    1080: {
      slidesPerView: 2,
      spaceBetween: 50,
    },
    700: {
      slidesPerView: 1,
    },
  },
});

const pauseButton = document.querySelector('.swiper-button-pause');
const playButton = document.querySelector('.swiper-button-play');

pauseButton.addEventListener('click', function () {
  swiper.autoplay.stop();
  playButton.classList.add('disabled');
  pauseButton.classList.remove('disabled');
});

playButton.addEventListener('click', function () {
  swiper.autoplay.start();
  pauseButton.classList.add('disabled');
  playButton.classList.remove('disabled');
});
