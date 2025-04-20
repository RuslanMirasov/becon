import { popup } from './popup-test.js';
import { initSliders } from './sliders.js';
import { throttle, debounce } from './helpers.js';

const initNavigationMenu = () => {
  const burger = document.querySelector('.burger');
  const menu = document.querySelector('.navigation ');

  const toggleMenu = () => {
    burger.classList.toggle('open');
    menu.classList.toggle('open');
  };

  burger.addEventListener('click', toggleMenu);
};

const hidePreloader = () => {
  const preloader = document.querySelector('[data-preloader]');
  if (!preloader) return;

  setTimeout(() => {
    preloader.classList.add('hidden');
  }, 200);
};

popup.init();
window.popup = popup;
initNavigationMenu();
initSliders();

window.addEventListener(
  'resize',
  debounce(() => {
    console.log('debounced resize');
  }, 500)
);

window.addEventListener(
  'scroll',
  throttle(() => {
    console.log('throttle scroll');
  }, 300)
);

hidePreloader();
