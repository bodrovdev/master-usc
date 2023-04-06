import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock';

// --- Мобильное меню
let burger = document.getElementById('burger');
let mobile_menu = document.getElementById('mobile_menu');
let nav_list = document.querySelector('.main-nav__nav-list');

// - Открытие по по клику на бургер
burger.addEventListener('click', () => {
  burger.classList.toggle('main-nav__burger--active');
  mobile_menu.classList.toggle('main-nav__nav-menu--mobile--active');

  if (burger.classList.contains('main-nav__burger--active')) {
    disableBodyScroll(mobile_menu);
  }
  else {
    enableBodyScroll(mobile_menu);
  }
})

// - Закрытие по клику на пункт меню
nav_list.onclick = function (event) {
  let target = event.target;

  if (target.tagName != 'A') {
    return;
  }

  burger.classList.toggle('main-nav__burger--active');
  mobile_menu.classList.toggle('main-nav__nav-menu--mobile--active');
  enableBodyScroll(mobile_menu);
};

// --- Модальное окно с заказом звонка
let callback_buttons = document.querySelectorAll('#callback_modal_button');
let modal_callback = document.getElementById('modal_callback');
let modal_callback_close = document.getElementById('modal_callback_close');
let modal_callback_form = document.getElementById('modal_callback_form');

callback_buttons.forEach((button) => {
  button.addEventListener('click', () => {
    modal_callback.classList.add('modal-callback--active');
    disableBodyScroll(modal_callback);
  })
})

modal_callback_close.addEventListener('click', () => {
  modal_callback.classList.remove('modal-callback--active');
  enableBodyScroll(modal_callback);
})

modal_callback.addEventListener('click', (e) => {
  if (e.target !== e.currentTarget) {
    return;
  }
  else {
    modal_callback.classList.remove('modal-callback--active');
    enableBodyScroll(modal_callback);
  }
})

modal_callback_form.addEventListener('submit', (e) => {
  e.preventDefault();
  document.querySelector('.modal-callback__inner').classList.add('modal-callback__inner--hidden');
  document.querySelector('.modal-callback__success').classList.add('modal-callback__success--active');
})

// --- Фикс ширины правой части навигации навигации
window.addEventListener('load', () => {
  if (window.innerWidth < 1280) {
    return;
  }
  else {
    let left_column_width = document.querySelector('.heading__graphic').offsetWidth;
    let left_column_nav = document.querySelector('.main-nav__nav-side');
    let small_fix_num = (window.innerWidth - document.querySelector('.main-nav__container').offsetWidth) / 2;

    left_column_nav.setAttribute(`style`, `max-width:${left_column_width - small_fix_num - 12}px`);
  }
})