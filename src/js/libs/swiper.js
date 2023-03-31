import Swiper from 'swiper/bundle';

var heading_thumb_slider = new Swiper('.heading__thumbnail-slider', {
  slidesPerView: 2,
  spaceBetween: 20,
  freeMode: true,
  watchSlidesProgress: true,

  pagination: {
    el: ".swiper-pagination",
    type: "fraction",
  },
});

window.addEventListener('load', () => {
  let current_slide = document.querySelector('.swiper-pagination-current');
  let total_slide = document.querySelector('.swiper-pagination-total');

  current_slide.textContent = `0${current_slide.textContent}`;
  total_slide.textContent = `0${total_slide.textContent}`;

  heading_thumb_slider.on('slideChange', () => {
    current_slide.textContent = `0${current_slide.textContent}`;
    total_slide.textContent = `0${total_slide.textContent}`;
  })

  let divider = document.querySelector('.heading__thumbnail-pagination').childNodes[1];
  let divider_span = document.createElement('span');
  divider.after(divider_span);
  divider_span.appendChild(divider);

  divider_span.textContent = '   __   ';
  divider_span.classList.add('divider');
})

var heading_slider = new Swiper('.heading__slider', {
  speed: 500,
  slidesPerView: "auto",
  spaceBetween: 500,

  navigation: {
    nextEl: '.heading__slider-arrow--next',
    prevEl: '.heading__slider-arrow--prev',
  },

  breakpoints: {
    320: {
      loop: true,
    },
    1280: {
      loop: false,
    }
  },

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
  loop: true,
  spaceBetween: 24,
  initialSlide: 2,
  speed: 1000,

  navigation: {
    nextEl: '.services__slider-arrow--next',
    prevEl: '.services__slider-arrow--prev',
  },

  breakpoints: {
    320: {
      slidesPerView: 1,

    },
    1280: {
      slidesPerView: 2,
      spaceBetween: 24,
    }
  }
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