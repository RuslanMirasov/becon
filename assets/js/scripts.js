import { popup } from './popup.js';
import { fixHeaderOnScroll, hidePreloader } from './helpers.js';
import { initSliders } from './sliders.js';

const initNavigationMenu = () => {
  const burger = document.querySelector('.burger');
  const menu = document.querySelector('.navigation ');

  const toggleMenu = () => {
    burger.classList.toggle('open');
    menu.classList.toggle('open');
  };

  burger.addEventListener('click', toggleMenu);
};

popup.init();
window.popup = popup;
initNavigationMenu();
initSliders();
fixHeaderOnScroll();
hidePreloader();
