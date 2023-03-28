import Swiper from 'swiper/bundle';

var heading_thumb_slider = new Swiper('.heading__thumbnail-slider', {
  // loop: true,
  slidesPerView: 2,
  spaceBetween: 20,
  freeMode: true,
  watchSlidesProgress: true,

  pagination: {
    el: ".swiper-pagination",
    type: "fraction",
  },
});

var heading_slider = new Swiper('.heading__slider', {
  // loop: true,
  speed: 500,
  slidesPerView: "auto",
  spaceBetween: 500,

  effect: "creative",
  creativeEffect: {
    prev: {
      shadow: true,
      translate: [0, 0, -400],
    },
    next: {
      translate: ["100%", 0, 0],
    },
  },

  thumbs: {
    swiper: heading_thumb_slider,
  },
});

var services_slider = new Swiper('.services__slider', {
  slidesPerView: "auto",
  spaceBetween: 0,
  centeredSlides: true,
  loop: "true",
  speed: 1000,

  navigation: {
    nextEl: '.slider-arrow--next',
    prevEl: '.slider-arrow--prev',
  },
})

// var init = false;

// function pageSlider() {
//   if (window.innerWidth <= 767) {
//     if (!init) {
//       init = true;
//       var pageSlider = new Swiper(".class", {
//         direction: "horizontal",
//         slidesPerView: 1,
//         spaceBetween: 0,
//         centeredSlides: true,
//         navigation: {
//           nextEl: '.inside__slider-arrow--next',
//           prevEl: '.inside__slider-arrow--prev',
//         },
//         pagination: {
//           el: ".class",
//           clickable: true,
//         },
//       });
//     }
//   } else if (init) {
//     pageSlider.destroy();
//     init = false;
//   }
// }
// pageSlider();
// window.addEventListener("resize", pageSlider);